const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const fs = require('fs');

app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'axios'
})


app.get('/data', (req, res) => {

    const getbeds = "SELECT * FROM BEDS";

    db.query(getbeds, (err, result) => {

        if (err) {
            res.send("Error in connection");
        } else {
            res.send(result);
        }

    })

})

app.post('/data2', (req, res) => {

    const updateno = req.body.updatebedno;

    const updatebeds = "SELECT * from BEDS where Bed_id= ?";

    db.query(updatebeds, [updateno], (err, result) => {

        if (err) {
            res.send("Error in connection");
        } else {
            res.send(result);
        }

    })



})


app.post('/data3', (req, res) => {

    const updateno = req.body.updatebedno;
    const changebed = req.body.changebedtype;
    const changeward = req.body.changewardno;

    const updatebeds = "UPDATE BEDS SET Room_Type=?, Ward_no=? WHERE Bed_Id=?";

    db.query(updatebeds, [changebed, changeward, updateno], (err, result) => {

        if (err) {
            res.send("Error in connection");
        } else {
            res.send(result);

        }

    })


})

app.get('/data4', (req, res) => {

    const joins = `SELECT * from beds where Patient_name="NULL" `;

    db.query(joins, (err, result) => {
        if (err) {
            res.send("Error in connection");
        } else {
            res.send(result);

        }
    })

});

app.post('/data5', (req, res) => {

    const enqname = req.body.name;
    const enqbedtype = req.body.bedtype;
    const enqhos = req.body.hos;

    const requestobject = {
        patientname: enqname,
        patientbedtype: enqbedtype,
        patienthostype: enqhos
    }

    const joins3 = "INSERT INTO REQUESTS VALUES (?,?,?)";

    db.query(joins3, [enqbedtype, enqhos, enqname], (err, result) => {
        if (err) {
            res.send("Error in connection");
        } else {
            res.send(result);
            var newdata = JSON.stringify(requestobject)+",";
            fs.appendFile("data.json", newdata, (err) => {
                if (err) throw err;
                alert("New data added");
            });
        }
    })

});

app.get('/data6', (req, res) => {

    const joins4 = 'SELECT * FROM REQUESTS';

    db.query(joins4, (err, result) => {
        if (err) {
            res.send("Error in connection");
        } else {
            res.send(result);
        }
    })

});

app.post('/data7', (req, res) => {

    const enqname = req.body.name;
    const enqbedtype = req.body.bedtype;
    const enqhos = req.body.hos;

    const updatehos = "UPDATE BEDS SET Patient_Name= ? WHERE Hospital_Name=? AND Room_Type=? ";

    db.query(updatehos, [enqname, enqhos, enqbedtype], (err, result) => {
        if (err) {
            res.send("Error in connection");
        } else {
            res.send(result);

        }
    })

    setTimeout(() => {
        const deletereq = "DELETE FROM requests WHERE Patient_name= ? ";
        db.query(deletereq, [enqname]);
    }, 1000);

})


app.listen(3001, () => {
    console.log("The server is Running on 3001 port");
})