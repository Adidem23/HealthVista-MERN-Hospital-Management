import React from 'react'
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const Home = () => {

  const logout = () => {
    removecookie("jwt");
    window.open("/register", "_self");
  }

  const [cookies, setcookies, removecookie] = useCookies([]);

  useEffect(() => {

    const verifyuser = async () => {
      
      if (!cookies.jwt) {
        window.open("/login", "_self");
      } else {
        const data= await axios.post("http://localhost:4000/user", {}, {
          withCredentials: true
        })

        if (!data.status) {
          removecookie("jwt")
          window.open("/login", "_self");
        }

      }

    };

    verifyuser();

  }, [cookies, removecookie])



  return (
    <div>

      <p>Home Page Of Website</p>
      <br />
      <br />
      <button onClick={logout}>Logout</button>

    </div>
  )
}

export default Home
