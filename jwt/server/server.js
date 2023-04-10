const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');
const usermodel = require('./Models/UserModel')


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

mongoose.connect("mongodb://localhost:27017/jwt", {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("Success");

}).catch((err1) => {
    console.log("error" + err1);
})

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Origin", "http://localhost:3000")
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next();
});

const handleErrors = (err) => {
    let errors = { email: "", password: "" };

    console.log(err);
    if (err.message === "Incorrect Email") {
        errors.email = "That email is not registered";
    }

    if (err.message === "Incorrect Password") {
        errors.password = "That password is incorrect";
    }

    if (err.code === 11000) {
        if (errors.email) {
            errors.email = "Email is already registered";
        } else {
            errors.password = "Password In Use";
        }

        return errors;
    }

    if (err.message.includes("Users validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
            
        });
    }

    return errors;
};



app.post('/register', async (req, res) => {
    try {

        const maxAge = 3 * 24 * 60 * 60;

        const createToken = (id) => {
            return jwt.sign({ id }, "Aditya Suryawanshi", {
                expiresIn: maxAge,
            });
        }

        const email1 = req.body.emailold;
        const password2 = req.body.passwordold;

        console.log(email1, password2);

        const user = await usermodel.create({ email: email1, password: password2 });

        const token = createToken(user._id);


        res.cookie("jwt", token, {
            maxAge: maxAge * 1000,
        })

        res.status(201).json({ user: user._id, created: true })
        
    } catch (err) {
        const errors = handleErrors(err);
        console.log(errors.email);
        console.log(errors.password);
        res.status(401).send(errors);
    }
})


app.post('/login', async (req, res) => {
    try {
        
        const email1 = req.body.emailold;
        const password2 = req.body.passwordold;
        
        console.log(email1, password2);
        
        const maxAge = 3 * 24 * 60 * 60;
        
        const createToken = (id) => {
            return jwt.sign({ id }, "Aditya Suryawanshi", {
                expiresIn: maxAge,
            });
        }
        
        const user = await usermodel.login(email1, password2);
        
        const token = createToken(user._id);
        
        res.cookie("jwt", token, {
            maxAge: maxAge * 1000,
        })
        
        res.status(200).json({ user: user._id, created: true })
        
    } catch (err) {
        const errors = handleErrors(err);
        console.log(errors.email);
        console.log(errors.password);
        res.status(401).send(errors);
    }
})


app.post("/user",(req,res)=>{
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(
            token,
            "Aditya Suryawanshi",
            async (err, decodedToken) => {
                if (err) {
                    res.json({ status: false });
                    next();
                } else {
                    const user = await usermodel.findById(decodedToken.id);
                    if (user) res.json({ status: true, user: user.email });
                    else res.json({ status: false });
                }
            }
        );
    } else {
        res.json({ status: false });
        next();
    }
});