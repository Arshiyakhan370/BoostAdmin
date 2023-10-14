import React, { useState } from 'react';
import { Box } from '@mui/material';
import Header from './Menus/Header';
import Aside from './Menus/Aside';
import { Routes, Route } from "react-router-dom";
import Balance from './Pages/Balance';
import Transactions from './Pages/Transactions';
import Profile from './Pages/Profile';
import Setting from './Pages/Setting';

export default function Mainlayout() {
  const [menuMove, setMenuMove] = useState('')

  const handleAside = () => {
    if (menuMove === '') {
      setMenuMove('close')
    } else {
      setMenuMove('')
    }
  }
  return (
    <>
      <Aside menuMove={menuMove} handleAside={handleAside} />
      <Box component={'div'} className='mainLayout'
        sx={{
          maxWidth: `calc(100% -  ${menuMove === '' ? '28rem' : '9rem'})`
        }}
      >
        <Header />
        <Balance />
        <Routes>
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/setting' element={<Setting />} />
        </Routes>
      </Box >
    </>
  )
}

