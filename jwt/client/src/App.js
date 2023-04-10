import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import SecretFile3 from './components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';



function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/login' Component={Login}  />
      <Route path='/register' Component={Register}  />
      <Route path='/' Component={SecretFile3}  />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
