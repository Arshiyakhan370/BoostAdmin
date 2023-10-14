import React, { useState } from 'react';
import { Box, Button, List, ListItem, Typography } from '@mui/material';
import logo from '../../images/logo.png';
import './Menus.scss'
import { NavLink } from 'react-router-dom';

export default function Aside(props) {
  const { handleAside, menuMove } = props;

  return (
    <>
      <Box component={'div'} className={`aside ${menuMove}`}>
        {/* User Profile */}
        <Box component={'div'} className='user_menu'>
          <Typography component={'a'} href='#' className='aside_user'>
            <Box component={'div'} className='users'>
              <Typography component={'h4'} className='logo_name'>Boost</Typography>
              <Typography component={'p'} className='user_name active'>John Smith</Typography>
            </Box>
            <Box component={'div'} className='logo'>
              <img src={logo} />
            </Box>
          </Typography>

          {/* Aside Menu */}
          <Box className='menu_list'>
            <List>
              <ListItem>
                <NavLink component={'a'} to='/transactions'>
                  <Box component={'div'} className='menu_icon'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.73 2C14.14 2 13.5 2.64 13.5 4.23V8.27C13.5 9.86 14.14 10.5 15.73 10.5H19.77C21.36 10.5 22 9.86 22 8.27V4.23C22 2.64 21.36 2 19.77 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8.27 22C9.86 22 10.5 21.36 10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15 15.5H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M15 19.5H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </Box>
                  <Typography component={'span'}>Dashboard</Typography>
                </NavLink>
              </ListItem>
              {/* <ListItem>
                <NavLink component={'a'} to='/transactions'>
                  <Box component={'div'} className='menu_icon'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.1494 13.8201L14.1094 16.86" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6.84961 13.8201H17.1496" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6.84961 10.1801L9.88962 7.14014" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M14.1096 10.1802H6.84961" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M17.1489 10.1802H16.6289" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.30001 7.97 2.85001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Box>
                  <Typography component={'span'}>Transitions</Typography>
                </NavLink>
              </ListItem> */}
              <ListItem>
                <NavLink component={'a'} to='/statistic'>
                  <Box component={'div'} className='menu_icon'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 22H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M2 22H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M3 12.9999V17.9999C3 18.5499 3.45 18.9999 4 18.9999H5.59998C6.14998 18.9999 6.59998 18.5499 6.59998 17.9999V9.37988C6.59998 8.82988 6.14998 8.37988 5.59998 8.37988H4C3.45 8.37988 3 8.82988 3 9.37988" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12.7992 5.18994H11.1992C10.6492 5.18994 10.1992 5.63994 10.1992 6.18994V17.9999C10.1992 18.5499 10.6492 18.9999 11.1992 18.9999H12.7992C13.3492 18.9999 13.7992 18.5499 13.7992 17.9999V6.18994C13.7992 5.63994 13.3492 5.18994 12.7992 5.18994Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M21.0004 3C21.0004 2.45 20.5504 2 20.0004 2H18.4004C17.8504 2 17.4004 2.45 17.4004 3V18C17.4004 18.55 17.8504 19 18.4004 19H20.0004C20.5504 19 21.0004 18.55 21.0004 18V7.13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </Box>
                  <Typography component={'span'}>Statistic</Typography>
                </NavLink>
              </ListItem>
            </List>
          </Box>
        </Box>

        <Box component={'div'} className='aside_action'>
          <Button className='humburgar' onClick={handleAside}>
            {menuMove === '' ?
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.1897 7.93994L8.56969 10.5599C7.79969 11.3299 7.79969 12.5899 8.56969 13.3599L15.0897 19.8799" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.0908 4.04004L14.0508 5.08004" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              :
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.9 7.93994L15.52 10.5599C16.29 11.3299 16.29 12.5899 15.52 13.3599L9 19.8699" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 4.04004L10.04 5.08004" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          </Button>
        </Box>
      </Box>
    </>
  )
}
