import Axios from 'axios';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route , } from 'react-router';
import Home from './components/Home';
import Hospital from './components/Hospital';
import Person from './components/Person.js';


function App() {


  return (

    <>

    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/hospital' Component={Hospital} />
      <Route path='/person' Component={Person} />
    </Routes>

    </>

  );
}

export default App;
