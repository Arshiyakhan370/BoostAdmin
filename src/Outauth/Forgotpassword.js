import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Grid } from '@mui/material';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

export default function Forgotpassword() {
  const [password, setPassword] = useState('password');
  const [conformpassword, setConformpassword] = useState('password');
  const Swal = require('sweetalert2')

  const savePassword = () => {
    Swal.fire({
      title: 'Success!',
      text: 'Do you want to continue',
      icon: 'success',
      confirmButtonText: 'Yes',
      // showCloseButton: true,
      // showCancelButton: true,
      showDenyButton: true,
    })
  }

  return (
    <>
      {/* Sign in form */}
      <Box component={'div'} className='signForm' sx={{ padding: '4rem 2.4rem' }}>
        <Typography component={'h4'} className='form_title'>Reset your password</Typography>
        <Typography component={'h5'} className='form_desc'>Enter your username or email address and we will send you instructions on how to create a new password.</Typography>


        <Box component={'div'} className='form_box'>
          <Typography component={'label'} className='label fs-25 fw-600 f-primary'>Email address</Typography>
          <TextField type={'email'} placeholder='Enter Password' className='input_filed' fullWidth />
        </Box>

        <Grid container spacing={2} sx={{ alignItems: 'center', marginTop: 4 }}>
          <Grid item xs={12} md={6}>
            <Link component={'a'} to={'/'} className='other_link'>Back to login</Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button className='sign_form_btn' onClick={savePassword} fullWidth>Submit</Button>
          </Grid>
        </Grid>
      </Box>

    </>
  )
}
