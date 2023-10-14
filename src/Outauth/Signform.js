import React from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Link, useHistory  } from "react-router-dom";
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router';

export default function Signform(props) {
  const [password, setPassword] = useState('password');
  const [verifyOtp, setVerifyOtp] = useState('none');
  const [signin, setSignin] = useState('block');
  const [userEmail,setuserEmail]=useState('');
  const [userPassword,setuserPassword]=useState('')
  const history = useNavigate()

  // Password Hie/Show
  const passwordShowHide = () => {
  //   if (password === 'password') {
  //     setPassword('text')
  //   } else {
  //     setPassword('password')
  //   }
  }

  // Verify Otp
  // const veriftOtps = () => {
  //   if (verifyOtp === 'none') {
  //     setVerifyOtp('block')
  //     setSignin('none')
  //   }
  // }

  const signinReq=async()=>{
    try {
      const response= await fetch("http://16.171.15.212:80/user/signin",{
        method:"POST",
        body:JSON.stringify({
          userEmail,
          userPassword
        }),
        headers:{
          "content-type":"application/json"
        }
      });
      const result=await response.json();
      const user=result.user
      console.log(result);
     
      if(result.success==false){
        toast.error(result.message,{
          position:'top-right',
          autoClose:3000
        })
      }else{
        toast.success('Login sucessfully!',{
          position:'top-right',
          autoClose:3000
        })
  localStorage.setItem("token",result.token);
        history('/dashboard')
      }
    } catch (error) {
      toast.error("something went wrong", {
        position: 'top-right',
        autoClose:'3000'
      });
    }
  }


  return (
    <>
      {/* Sign in form */}
      <Box component={'div'} sx={{ display: signin }} className='signForm'>
        <Typography component={'h4'} className='form_title'>Log in to Boost</Typography>

        <Box component={'div'} className='form_box'>
          <Typography component={'label'} className='label fs-25 fw-600 f-primary'>Email Address</Typography>
          <TextField type='email' placeholder='yourmail@mail.com' value={userEmail} onChange={(e)=>setuserEmail(e.target.value)} className='input_filed' fullWidth />
        </Box>

        <Box component={'div'} className='form_box'>
          <Typography component={'label'} className='label fs-25 fw-600 f-primary'>Password</Typography>
          <Box component={'div'} className='with_action'>
            <TextField type={password} placeholder='Enter Password' className='input_filed' fullWidth value={userPassword} onChange={(e)=>setuserPassword(e.target.value)}/>
            <Button className='input_actions' onClick={passwordShowHide}>
              {password === 'password' ? 'Show' : 'Hide'}
            </Button>
          </Box>
        </Box>

        <Grid container spacing={2} alignItems='center' sx={{ marginTop: 2 }} >
          <Grid item xs={8}>
            <Link component={'a'} to={'/forgotpassword'} className='other_link'>Forgot your password?</Link>
          </Grid>
          <Grid item xs={4}>
            <Button className='sign_form_btn' fullWidth onClick={signinReq}>Sign In</Button>
          </Grid>
        </Grid>

        <Box className='form_footer'>
          <Typography component={'p'} className='lines'>Not have an account?</Typography>
          <Link component={'a'} to={'/register'} className='other_link'>Register</Link>
        </Box>
      </Box>
    </>
  )
}
