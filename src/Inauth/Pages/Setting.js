import React, { useEffect, useState } from 'react'
import { Box, Grid, TextField, Typography, FormControl, Select, MenuItem, Button, List, ListItem } from '@mui/material'
import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TabContext } from '@mui/lab';
import { toast } from 'react-toastify';

export default function Setting() {
  const [selection, setSelection] = useState(0);
  const [value, setValue] = React.useState('1');
  const [open, setOpen] = React.useState(false);
  const [Email,setEmail]=useState('johnsmith05@gmail.com');
  const [FirstName,setFirstName]=useState("John Smith");
  const [LastName,setLastName]=useState('');
  const [Phone,setPhone]=useState('90169 22632');
  const [firstNameEdit,setfirstNameEdit]=useState(null);
  const [lastNameEdit,setlastNameEdit]=useState(null);
  const [emailEdit,setemailEdit]=useState(null);
  const [phoneEdit,setphoneEdit]=useState(null);


  const handleChange = (event) => {
    setSelection(event.target.value);
  };

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const country = [90, 91, 92, 81, 180]

  const editUserData=async()=>{
    try {
      const response = await fetch("http://localhost:4000/user/edit-data/",{
        method:"PATCH",
        body:JSON.stringify({
          newFirstName:firstNameEdit || Email,
          newLastName : lastNameEdit || FirstName,
         newEmail : emailEdit || LastName,
         newNumber : phoneEdit || Phone,
        }),
        headers:{
          Authorization:localStorage.getItem("token")
        }
      })
      const result = await response.json();
      console.log(result,"<------------------------");
      toast.success('Updated successful!', {
        position: 'top-right',
        autoClose:'3000'
      });
      // setEmail(result.data.email)
      // setFirstName(result.data.firstName)
      // setLastName(result.data.lastName)
      // setPhone(result.data.number)
    } catch (error) {
      console.log(error);
    }
  }


  const getUserData=async()=>{
    try {
      const response = await fetch("http://localhost:4000/user/user_data/",{
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

const submitHandler=()=>{
  console.log('clicked');
  console.log(firstNameEdit,
    lastNameEdit,
    emailEdit,
    phoneEdit);
    editUserData()
}


  useEffect(()=>{
    getUserData()
  },[])

  return (
    <>
      <Box component={'div'} className='profile_box'>
        {/* <Grid container spacing={2}>
          <Grid item md={12}>
            <Typography component={'h3'} className='title'>Profile Settings</Typography>
          </Grid>
        </Grid> */}

        <Grid container spacing={2}>
          <Grid item xs={12} lg={4}>
            <Box component={'div'} className='form_box'>
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
                <Typography component={'h4'}>{FirstName + ' ' +LastName}</Typography>
                <Typography component={'h5'}>Admin</Typography>
              </Box>

              <List className='userDestails_list'>
                <ListItem>
                  <Typography component={'p'}>Email</Typography>
                  <Typography component={'h4'}>{Email}</Typography>
                </ListItem>
                <ListItem>
                  <Typography component={'p'}>Phone</Typography>
                  <Typography component={'h4'}>+91 {Phone}</Typography>
                </ListItem>
                <ListItem>
                  <Typography component={'p'}>Address</Typography>
                  <Typography component={'h4'}>California, United States</Typography>
                </ListItem>
              </List>
            </Box>
          </Grid>

          <Grid item xs={12} lg={8}>
            <Box component={'div'} className='form_box'>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: 1.5 }}>
                  <TabList onChange={handleChangeTab}>
                    <Tab label="Profile" value="1" />
                    <Tab label="Reset password" value="2" />
                    <Tab label="Deactivate" value="3" />
                  </TabList>
                </Box>
                <TabPanel value="1" sx={{ padding: 1.2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Typography component={'h3'} className='title'>
                        <Box component={'div'} className='form_input'>
                          <Typography component={'label'} className='label'>First Name</Typography>
                          <TextField type='text' placeholder='Enter first name' className='input_filed' value={firstNameEdit} onChange={(e)=>setfirstNameEdit(e.target.value)}/>
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography component={'h3'} className='title'>
                        <Box component={'div'} className='form_input'>
                          <Typography component={'label'} className='label'>Last Name</Typography>
                          <TextField type='text' placeholder='Enter last name' className='input_filed'  value={lastNameEdit} onChange={(e)=>setlastNameEdit(e.target.value)}/>
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography component={'h3'} className='title'>
                        <Box component={'div'} className='form_input'>
                          <Typography component={'label'} className='label'>Email</Typography>
                          <TextField type='email' placeholder='Enter your mail' className='input_filed'   value={emailEdit} onChange={(e)=>setemailEdit(e.target.value)} />
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography component={'h3'} className='title'>
                        <Box component={'div'} className='form_input'>
                          <Typography component={'label'} className='label'>Phone</Typography>
                          <Box component={'div'} sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box className={`filter`} sx={{ marginRight: 1 }}>
                              <FormControl fullWidth>
                                <Select value={selection} onChange={handleChange} >
                                  {country.map((items, i) => (
                                    <MenuItem key={i} value={i}>{'+' + items}</MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </Box>
                            <TextField type='number' placeholder='Enter your phone' className='input_filed' value={phoneEdit} onChange={(e)=>setphoneEdit(e.target.value)}/>
                          </Box>
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Typography component={'h3'} className='title'>
                        <Box component={'div'} className='form_input'>
                          <Typography component={'label'} className='label'>Address</Typography>
                          <TextField type='number' multiline rows={4} placeholder='Enter your phone' className='input_filed' />
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                      <Button className='boost_btn primary' fullWidth onClick={submitHandler}>Save</Button>
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value="2" sx={{ padding: 1.2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Typography component={'h3'} className='title'>
                        <Box component={'div'} className='form_input'>
                          <Typography component={'label'} className='label'>Password</Typography>
                          <TextField type='text' placeholder='Enter Password' className='input_filed' />
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography component={'h3'} className='title'>
                        <Box component={'div'} className='form_input'>
                          <Typography component={'label'} className='label'>Confirm password</Typography>
                          <TextField type='text' placeholder='Enter confirm password' className='input_filed' />
                        </Box>
                      </Typography>
                    </Grid>

                    <Grid item xs={12} sm={4} md={3}>
                      <Button className='boost_btn primary' fullWidth >Save</Button>
                    </Grid>
                  </Grid>
                </TabPanel>

                <TabPanel value="3" sx={{ padding: 1.2 }}>
                  <Box component={'div'} className='disable_note'>
                    <Typography component={'p'}>Click here if you wish to permanently close your app account. You will receive an email with a link to confirm your request, which will then be processed by our support team.</Typography>
                  </Box>

                  <Grid container spacing={2} sx={{ marginTop: 2 }}>
                    <Grid item xs={12} sm={4} md={3}>
                      <Button className='boost_btn primary' onClick={handleClickOpen} sx={{ backgroundColor: '#e11234 !important' }} fullWidth>Disable Account</Button>
                    </Grid>
                  </Grid>
                </TabPanel>
              </TabContext>
            </Box>
          </Grid>
        </Grid>
      </Box>


      {/* --- Disable account --- */}
      <Dialog
        open={open}
        onClose={handleClose}
        className='closeAccount_modal'
      >
        <DialogTitle>Disbale Account</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Box component={'div'} className='form_box'>
              <Box component={'div'} className='form_input'>
                <Typography component={'label'} className='label'>Enter Password</Typography>
                <TextField type='text' placeholder='Enter your password' className='input_filed' />
              </Box>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className='boost_btn oulined_primary' onClick={handleClose}>Disagree</Button>
          <Button className='boost_btn primary' onClick={handleClose} autoFocus>Agree</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
