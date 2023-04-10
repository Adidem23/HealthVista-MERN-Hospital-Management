import Axios from 'axios';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route , } from 'react-router';
import Home from './components/Home';
import Hospital from './components/Hospital';
import Person from './components/Person.js';
import Login from './components/Login';
import Register from './components/Register';
import User from './components/User';

function App() {


  return (

    <>

    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/hospital' Component={Hospital} />
      <Route path='/person' Component={Person} />
      <Route path='/login' Component={Login} />
      <Route path='/register' Component={Register} />
      <Route path='/userdash' Component={User} /> 
    </Routes>

    </>

  );
}

export default App;
