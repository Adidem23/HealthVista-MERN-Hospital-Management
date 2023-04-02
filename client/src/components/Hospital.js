import React from 'react';
import axios, { all } from 'axios';
import { useState, useEffect } from 'react';
import './cards.css';

const Hospital = () => {

    const [alldata, setalldata] = useState([]);
    const [updatespecficbed, setupdatespecficbed] = useState("");
    const [updatelist, setupdatelist] = useState([]);
    const [changedRoom, setchangedRoom] = useState("");
    const [wardval, setwardval] = useState("");
    const [requests, setrequests] = useState([]);
    const [acceptrequest, setacceptrequest] = useState([]);



    const showdata = async () => {

        axios.get("http://127.0.0.1:3001/data").then((response) => {
            setalldata(response.data);
        }).catch((err) => {
            alert(err);
        })

    }


    const getupdatebed = async (e) => {

        setupdatespecficbed(e.target.value);

    }

    const updatebed = () => {

        axios.post("http://127.0.0.1:3001/data2", { updatebedno: updatespecficbed }).then((response) => {
            setupdatelist(response.data);
        }).catch((err) => {
            console.log(err);
            alert(err);
        })


    }

    const getchnagebed = () => {

        axios.post("http://127.0.0.1:3001/data3", { updatebedno: updatespecficbed, changebedtype: changedRoom, changewardno: wardval }).then(() => {
            alert("Update Successful");
        }).catch((err) => {
            console.log(err);
            alert(err);
        })
    }


    const changeroomval = (e) => {
        setchangedRoom(e.target.value);
    }

    const changewardnoval = (e) => {
        setwardval(e.target.value);
    }


    const getallrequests = () => {

        axios.get("http://127.0.0.1:3001/data6").then((response) => {
            setrequests(response.data);
        }).catch((err) => {
            alert(err);
        })

    }


    const bookbed = (e) => {

        //    alert(varname)
        //    alert(varname2)
        //    alert(varname3)

        //     axios.post('http://127.0.0.1:3001/data7', {name:varname,bedtype:varname3,hos:varname2}).then(() => {
        //         alert("Accepted");
        //     }).catch((err) => {
        //         alert(err);
        //     })

        axios({
            url: 'http://127.0.0.1:3001/data6',
        }).then((response) => {
            const data=response.data;
            const div=document.getElementById('div');
            alert(div.innerHTML)
            alert(JSON.stringify(data.find(obj => obj.Bed_Type=== "ICU"))) ;

            setacceptrequest(response.data);
        }).catch((err) => {
            alert(err)
        })


    }

    let varname;
    let varname2;
    let varname3;
    let varname4;
    let varname5;
    let varname6;


    return (

        <>

            <div className='home'>

                <button onClick={showdata} >Get BedDetails</button>

                <br />
                <br />


                <input type='number' required name='update' id='textinput' onChange={getupdatebed} />

                <button onClick={updatebed} >Get BedInfo</button>



                {updatelist.map((val) => {

                    return <div>
                        <h3>Room_Type : {val.Room_Type}</h3>
                        <h2>Bed_id:{val.Bed_id}</h2>
                        <h4>Ward_no :{val.Ward_no}</h4>
                    </div>
                })

                }

                <br />

                <div id='inputext'>

                    <input type='Text' required placeholder='Enter New Room_Type' onChange={changeroomval} />
                    <input type='number' required placeholder='Enter New Ward_no' onChange={changewardnoval} />
                    <button onClick={getchnagebed} >Update</button>

                </div>

                <br />

                <button onClick={getallrequests}>See Request</button>



                {/* {acceptrequest.map((val) => {
                  varname4=`${val.Patient_name}`
                  alert(varname4)
                })
                } */}



                {requests.map((val) => {

                    varname = `${val.Patient_name}`
                    varname2 = `${val.Hospital_name}`
                    varname3 = `${val.Bed_Type}`

                    return (
                        <>
                            <br />
                            <br />
                            <div style={{ border: '3px solid red', justifyContent: 'center' }} id='div' >
                                <h5>Request 01: </h5>
                                <h2 id='patientname'>Patient_Name:{val.Patient_name}</h2>
                                <h4 id='hosname'>Hospital_Name:{val.Hospital_name}</h4>
                                <h5 id='bedtype'>Bed_Type: {val.Bed_Type}</h5>
                                <br />
                                <button onClick={bookbed}>Accept Request</button>
                            </div>
                        </>
                    );
                })}

                <hr />


                <h1>Bed Details</h1>

                <hr />





                {alldata.map((val) => {

                    return (
                        <>
                            <div className='mainaxios'>
                                <div className="container3">
                                    <div className="card">
                                        <div className="box">
                                            <div className="content create">
                                                <h3>{val.Bed_id}</h3>
                                                <p>
                                                    Bed is {val.Room_Type} in Ward_no {val.Ward_no}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>

                    );

                })

                }

            </div>
        </>
    );
}

export default Hospital
