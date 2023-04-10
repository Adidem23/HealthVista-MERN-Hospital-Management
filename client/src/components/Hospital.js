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

        axios({
            url: 'http://127.0.0.1:3001/data6',
        }).then((response) => {
            const data = response.data;
            const newdiv = e.target.parentElement;
            const children = newdiv.children;

            const patientname=children[1].children;
            const hospitalname=children[2].children;
            const bedname=children[3].children;


            const patientnamenew=patientname[0].innerText;
            const hospitalnamenew=hospitalname[0].innerText;
            const bednamenew=bedname[0].innerText;

          axios.post("http://127.0.0.1:3001/data7",{name:patientnamenew , bedtype:bednamenew ,hos:hospitalnamenew}).then(()=>{
          alert("Accepted");
          }).catch((err)=>{
            alert("Error In Request"+err);
          })


        }).catch((err) => {
            alert(err)
        })
    }

    let varname;
    let varname2;
    let varname3;


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

                {requests.map((val, key) => {
                    return (
                        <>
                            <br />
                            <br />
                            <div style={{ border: '3px solid red', justifyContent: 'center' }}  >
                                <h5>Request 01: </h5>
                                <h2 id='patientname'>Patient_Name:<span>{val.Patient_name}</span></h2>
                                <h4 id='hosname'>Hospital_Name:<span>{val.Hospital_name}</span></h4>
                                <h5 id='bedtype'>Bed_Type: <span>{val.Bed_Type}</span></h5>
                                <br />
                                <button id={key} onClick={bookbed}>Accept Request</button>
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
