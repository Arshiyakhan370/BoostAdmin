import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { async } from 'q';
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";

export default function Profile() {
  const location = useLocation();
  const [Email,setEmail]=useState('johnsmith05@gmail.com')
  const [FirstName,setFirstName]=useState("John Smith")
  const [LastName,setLastName]=useState('')
  const [Phone,setPhone]=useState('90169 22632')

  // if (
  //   location.pathname === "/profile"
  // ) {
  //   return <>
  //     Hello
  //   </>;
  // }

  const getUserData=async()=>{
    try {
      const response = await fetch("http://16.171.15.212:80/user/user_data/",{
        headers:{
          Authorization:localStorage.getItem("token")
        }
      })
      const result = await response.json();
      console.log(result.data);
      setEmail(result.data.email)
      setFirstName(result.data.firstName)
      setLastName(result.data.lastName)
      setPhone(result.data.number)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getUserData()
  },[])

  return (
    <>
      <Box component={'div'} className='profile_box'>
        {/* <Box component={'div'} className='user_destails_box'>
          <img src='https://plus.unsplash.com/premium_photo-1661763720453-038215ddc44f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2101&q=80' className='bg_profile' />
        </Box> */}

        <Box component={'div'} className='admin_box'>
          <Box component={'div'} className='user_img'>
            <img src={'https://modernize-vuejs.adminmart.com/assets/user-1-6d05e3ce.jpg'} />
            {/* <Typography component={'label'} htmlFor='attachImg' className='attach_img'>
              <TextField type='file' hidden={true} id='attachImg' />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.77017 18.25C2.89017 20.31 4.00017 22 6.76017 22H17.2402C20.0002 22 21.1002 20.31 21.2302 18.25L21.7502 9.99C21.8902 7.83 20.1702 6 18.0002 6C17.3902 6 16.8302 5.65 16.5502 5.11L15.8302 3.66C15.3702 2.75 14.1702 2 13.1502 2H10.8602C9.83017 2 8.63017 2.75 8.17017 3.66L7.45017 5.11C7.17017 5.65 6.61017 6 6.00017 6C3.83017 6 2.11017 7.83 2.25017 9.99L2.51017 14.06" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.5 8H13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 18C13.79 18 15.25 16.54 15.25 14.75C15.25 12.96 13.79 11.5 12 11.5C10.21 11.5 8.75 12.96 8.75 14.75C8.75 16.54 10.21 18 12 18Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </Typography> */}
          </Box>
          <Box component={'div'} className='user_content'>
            <Typography component={'h4'}>{LastName +' '+ FirstName}</Typography>
            <Typography component={'h5'}>Admin</Typography>
            <Typography component={'p'}>California, United States</Typography>
          </Box>
        </Box>

        <Grid container spacing={2} sx={{ marginTop: 2, alignItems: 'center' }}>
          <Grid item xs={7} md={6}>
            <Typography component={'h3'} className='title'>Personal information</Typography>
          </Grid>
          <Grid item xs={5} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
            <NavLink component={'a'} to={'/setting'} className='edit_profile'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 13V15C22 20 20 22 15 22H9C4 22 2 20 2 15V13.48" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11 2H9C4 2 2 4 2 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.9299 9.01001L20.9799 7.96001C22.3399 6.60001 22.9799 5.02001 20.9799 3.02001C18.9799 1.02001 17.3999 1.66001 16.0399 3.02001L8.15988 10.9C7.85988 11.2 7.55988 11.79 7.49988 12.22L7.06988 15.23C6.90988 16.32 7.67988 17.08 8.76988 16.93L11.7799 16.5C12.1999 16.44 12.7899 16.14 13.0999 15.84L16.2799 12.66L17.0099 11.93" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.9102 4.1499C15.5802 6.5399 17.4502 8.4099 19.8502 9.0899" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <Typography component={'span'}>Edit Profile</Typography>
            </NavLink>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Box component={'div'} className='details_box'>
              <Box component={'div'} className='details_title'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12.98V15.5C22 19 20 20.5 17 20.5H7" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M2 8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M2 16.5H8" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M2 12.5H5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <Typography component={'span'}>Email</Typography>
              </Box>
              <Typography component={'p'}>{Email}</Typography>
            </Box>
          </Grid>
          {/* <Grid item xs={12} sm={6} md={6} lg={3}>
            <Box component={'div'} className='details_box'>
              <Box component={'div'} className='details_title'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 2V5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16 2V5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3.5 9.08984H20.5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3 13.01V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M11.9945 13.7H12.0035" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.29529 13.7H8.30427" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.29529 16.7H8.30427" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <Typography component={'span'}>DOB</Typography>
              </Box>
              <Typography component={'p'}>02 January 1988</Typography>
            </Box>
          </Grid> */}
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Box component={'div'} className='details_box'>
              <Box component={'div'} className='details_title'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M18.5 9C18.5 8.4 18.03 7.48 17.33 6.73C16.69 6.04 15.84 5.5 15 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M17.01 2.29C16.37 2.1 15.7 2 15 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M21.9995 9.00002C21.9995 6.63002 20.8195 4.53002 19.0195 3.27002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <Typography component={'span'}>Contact us</Typography>
              </Box>
              <Typography component={'p'}>+91 {Phone }</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Box component={'div'} className='details_box'>
              <Box component={'div'} className='details_title'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.25 11.5L10.75 13L14.75 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M5.98094 4.30006C10.3509 0.190061 18.8209 1.60006 20.3809 8.51006C21.5309 13.5901 18.3709 17.8901 15.6009 20.5501C13.5909 22.4901 10.4109 22.4901 8.39094 20.5501C5.63094 17.8801 2.46094 13.5801 3.62094 8.50006" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <Typography component={'span'}>Loation</Typography>
              </Box>
              <Typography component={'p'}>B69 Near Schoool Demo Home</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
