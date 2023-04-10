import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './forms.css';

const Register = () => {


    const [emailnew, setemailnew] = useState("");
    const [passwordnew, setpasswordnew] = useState("");

    const emailchange = (e) => {

        setemailnew(e.target.value);
    }

    const passwordchange = (e) => {
        setpasswordnew(e.target.value);

    }

    const handlesubmit = async (e) => {
        e.preventDefault();

        try {

            axios.post("http://localhost:4000/register", { emailold: emailnew, passwordold: passwordnew }, {
                withCredentials: true
            }).then(() => {
                alert("Added Successfully");
            }).catch((err) => {
                const { email, password } = err.response.data;
                if (email) {
                    alert("OOPS!! Something Went Wrong: " + JSON.stringify(err.response.data.email));
                } else if (password) {
                    alert("OOPS!! Something Went Wrong: " + JSON.stringify(err.response.data.password));
                }else{
                    alert("Email or Password Can not be Empty");
                }
            })

        } catch (err) {
            alert("Error Occured" + err); 
        }
    }

    return (
        <div className='containerregister'>
            <h2 className='regih2'>Register Account</h2>

            <form onSubmit={(e) => handlesubmit(e)} className='regiform'>

                <div>
                    <label htmlFor='email' >Email</label>
                    <input type='email' name='email' placeholder='Email' required onChange={emailchange} />
                </div>

                <div>
                    <label htmlFor='password' >Password</label>
                    <input type='password' name='password' placeholder='password' required onChange={passwordchange} />
                </div>


                <button type='submit' onClick={handlesubmit}>Submit</button>
                <span>
                    Already Had Account ?? <Link to="/login">Login</Link>
                </span>

            </form>

        </div>
    )
}

export default Register
