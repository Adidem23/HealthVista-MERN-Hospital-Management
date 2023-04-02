import React from 'react'
import axios from 'axios'
import { useState } from 'react'


const Person = () => {

    const [alljoindata, setalljoindata] = useState([]);
    const [name, setname] = useState('');
    const [bedtype, setbedtype] = useState('');
    const [hos, sethos] = useState('');

    const getjoins = () => {

        axios.get('http://127.0.0.1:3001/data4').then((response) => {

            setalljoindata(response.data);

        }).catch((err) => {
            alert(err);
        })

    }

    var reqname
    var reqbedtype
    var reqhos 

    const sendrequest = () => {

         reqname = name;
         reqbedtype = bedtype;
         reqhos = hos;

        axios.post("http://127.0.0.1:3001/data5", { name: name, bedtype: bedtype, hos: hos }).then(() => {
            alert("Request is Sent");
        }).catch((err) => {
            alert(err);
        })

    }


    const nametext = (e) => {
        setname(e.target.value);
    }

    const bedtext = (e) => {
        setbedtype(e.target.value);
    }

    const hosnametext = (e) => {
        sethos(e.target.value);
    }


    return (

        <div>

            <h1>EnQuiry Person</h1>

            <br />

            <button style={{ width: 'fit-content', display: 'block', margin: 'auto' }} onClick={getjoins}>Available Beds</button>

            <div style={{ width: 'fit-content', display: 'block', margin: 'auto' }}>

                {alljoindata.map((val) => {

                    return (
                        <>
                            <div style={{ border: '3px solid red', marginBottom: '5px', width: 'fit-content' }}>
                                <p>Hospital Name :{val.Hospital_Name}</p>
                                <br />
                                <p>Room_Type : {val.Room_Type}</p>
                                <br />
                                <p>Ward_no : {val.Ward_no}</p>
                                <p>Patient Allocated:{val.Patient_Name}</p>
                            </div>

                        </>
                    )

                })}

                <hr />

                <div className='App'>
                    <br />

                    <h1>
                        Fill Form Below
                    </h1>

                    <input type='text' placeholder='Enter Your Name' required onChange={nametext} />
                    <br />
                    <br />


                    <input type="text" placeholder='Enter Your Bed_Type' required onChange={bedtext} />
                    <br />
                    <br />

                    <input type='text' placeholder='Enter Hospital Name' required onChange={hosnametext} />
                    <br />
                    <br />

                    <button onClick={sendrequest}>Request</button>




                </div>


            </div>




        </div>
    )
}



export default Person 
