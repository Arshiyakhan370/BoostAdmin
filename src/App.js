import React, { useEffect, useState } from 'react';
import './App.scss';
import Signinup from './Outauth/Sign_in_up';
import Mainlayout from './Inauth/Mainlayout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Outauth/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './Inauth/Pages/Profile';
import Setting from './Inauth/Pages/Setting';

function App() {
  const isToken=!!localStorage.getItem('token')

  return (
    <Router>
      <Routes>
        <Route path='/' element={isToken ? <Mainlayout /> : <Signinup />} />
        <Route path='/dashboard' element={<Mainlayout /> }/>
        <Route path='/*' element={<Mainlayout /> }/>
         <Route path='/register' element={<Signup />} />
       {/* <Route path='/profile' element={<Profile />} /> */}
          <Route path='/setting' element={<Setting />} />
      </Routes>
      <ToastContainer />
    </Router>
  )
}

export default App;
