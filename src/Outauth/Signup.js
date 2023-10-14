import React from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export default function Signup() {
  const [password, setPassword] = useState('');
  const [conformpassword, setConformpassword] = useState('password');
  const [verifyOtp, setVerifyOtp] = useState('none');
  const [signin, setSignin] = useState('block');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  // const [password, setpassword] = useState('');
  const [number, setnumber] = useState('');
  const [email, setemail] = useState('');
  const history = useNavigate()

  // Password Hie/Show
  const passwordShowHide = () => {
    if (password === 'password') {
      setPassword('text')
    } else {
      setPassword('password')
    }
  }

  const conformpasswordShowHide = () => {
    if (conformpassword === 'password') {
      setConformpassword('text')
    } else {
      setConformpassword('password')
    }
  }


  // Verify Otp
  const veriftOtps = () => {
    registerReq()
    // if (verifyOtp === 'none') {
    //   setVerifyOtp('block')
    //   setSignin('none')
    // }
  }

  const registerReq=async()=>{
    try {
      const response= await fetch("http://16.171.15.212:80/user/signup",{
        method:"POST",
        body:JSON.stringify({
          lastName,
          firstName,
          number,
          email,
          password,
        }),
        headers:{
          "content-type":"application/json"
        }
      });
      const result=await response.json();
      // const user=result.user
      console.log(result.success);
      console.log(result);
      if(result.success==false){
        toast.error(result.message,{
          position:'top-right',
          autoClose:3000
        })
      }else{
        toast.success('Account created sucessfully Please login',{
          position:'top-right',
          autoClose:3000
        })
        history('/')
      }
      // localStorage.setItem("userEmail",result.email);
      // localStorage.setItem("userFirstName",result.firstName);
      // localStorage.setItem("userLastName",result.lastName);
      // localStorage.setItem("userPhone",result.number);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {/* Sign up form */}
      <Box component={'div'} sx={{ display: signin }} className='signForm'>
        <Typography component={'h4'} className='form_title'>Start your account application</Typography>
        <Typography component={'h5'} className='form_desc'>Please fill out all of the fields below to create your secure login.</Typography>


        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box component={'div'} className='form_box'>
              <Typography component={'label'} className='label fs-25 fw-600 f-primary'>Last Name</Typography>
              <TextField type='text' placeholder='Your last name' value={lastName} onChange={(e)=>setlastName(e.target.value)} className='input_filed' fullWidth />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box component={'div'} className='form_box'>
              <Typography component={'label'} className='label fs-25 fw-600 f-primary'>First Name</Typography>
              <TextField type='text' placeholder='Your first name' className='input_filed' value={firstName} onChange={(e)=>setfirstName(e.target.value)} fullWidth />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box component={'div'} className='form_box'>
              <Typography component={'label'} className='label fs-25 fw-600 f-primary'>Email</Typography>
              <TextField type='email' placeholder='name@example.com' className='input_filed' value={email} onChange={(e)=>setemail(e.target.value)} fullWidth />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box component={'div'} className='form_box'>
              <Typography component={'label'} className='label fs-25 fw-600 f-primary'>Mobile number</Typography>
              <TextField type='number' placeholder='0000 000 000' className='input_filed' value={number} onChange={(e)=>setnumber(e.target.value)} fullWidth />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box component={'div'} className='form_box'>
              <Typography component={'label'} className='label fs-25 fw-600 f-primary'>Password</Typography>
              <Box component={'div'} className='with_action'>
                <TextField type={password} placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} className='input_filed' fullWidth />
                <Button className='input_actions' onClick={passwordShowHide}>
                  {password === 'password' ? 'Show' : 'Hide'}
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box component={'div'} className='form_box'>
              <Typography component={'label'} className='label fs-25 fw-600 f-primary'>Confirm password</Typography>
              <Box component={'div'} className='with_action'>
                <TextField type={conformpassword} placeholder='Enter Password' className='input_filed' fullWidth />
                <Button className='input_actions' onClick={conformpasswordShowHide}>
                  {conformpassword === 'password' ? 'Show' : 'Hide'}
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ alignItems: 'center', marginTop: 4 }}>
          <Grid item xs={12} md={6}>
            <Box className='form_footer' sx={{ marginTop: '0 !important' }}>
              <Typography component={'p'} className='lines'>Already have an Account</Typography>
              <Link component={'a'} to={'/signin'} className='other_link'> Login</Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button className='sign_form_btn' fullWidth onClick={veriftOtps}>Create my login</Button>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
