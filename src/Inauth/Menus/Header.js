import React from 'react';
import { Box, Grid, Breadcrumbs, Link, Typography, Menu, MenuItem, Divider, Tooltip, Button } from '@mui/material';
import logo from '../../images/logo.png';
import './Menus.scss'
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const notifications = [];
  for (let i = 0; i <= 15; i++) {
    notifications.push(
      <>
        <MenuItem className='notify notRead'>
          <img src={'https://modernize-vuejs.adminmart.com/assets/user-1-6d05e3ce.jpg'} className='user_img' />
          <Box component={'div'} className='notify_content'>
            <Typography component={'h6'}>Good News</Typography>
            <Typography component={'p'}>HI! You can buy this template on Themeforest, click here.</Typography>
            <Typography component={'span'}>Today</Typography>
          </Box>
        </MenuItem>
        <Divider />
      </>
    );
  }

  const logoutHandler=()=>{
    localStorage.clear();
  }

  return (
    <>
      <Box component={'div'} className='header'>
        <Grid container spacing={2} alignItems='center'>
          <Grid item xs={6}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box component={'a'} href='#' className='logo'>
                <img src={logo} />
              </Box>

              <Breadcrumbs className='page_breadcrumbs'>
                <Link href="/">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 9H10.5C8.85 9 7.5 10.35 7.5 12V15C7.5 16.65 8.85 18 10.5 18H13.5C15.15 18 16.5 16.65 16.5 15V12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 9V18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7.5 13.5H16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M22 10.4999C22 9.28992 21.19 7.73992 20.2 7.04992L14.02 2.71992C12.62 1.73992 10.37 1.78992 9.02 2.83992L3.63 7.03992C2.73 7.73992 2 9.22992 2 10.3599V17.7699C2 20.0899 3.89 21.9899 6.21 21.9899H17.79C20.11 21.9899 22 20.0899 22 17.7799V14.6799" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </Link>
                <Link
                  underline="hover"
                  color="inherit"
                  href="/material-ui/getting-started/installation/"
                >
                  Dashboard
                </Link>
              </Breadcrumbs>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
              <Button className='dropdown_btn' onClick={e => setAnchorEl(e.currentTarget)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6.43994V9.76994" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                  <path d="M20.5894 15.17C21.3194 16.39 20.7394 17.97 19.3894 18.42C14.6094 20.01 9.43944 20.01 4.65944 18.42C3.21944 17.94 2.66944 16.48 3.45944 15.17L4.72944 13.05C5.07944 12.47 5.35944 11.44 5.35944 10.77V8.67C5.35944 4.98 8.33944 2 12.0194 2C15.6794 2 18.6794 5 18.6794 8.66V10.76C18.6794 10.94 18.6994 11.14 18.7294 11.35" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                  <path d="M15.3299 18.8201C15.3299 20.6501 13.8299 22.1501 11.9999 22.1501C11.0899 22.1501 10.2499 21.7701 9.64992 21.1701C9.04992 20.5701 8.66992 19.7301 8.66992 18.8201" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" />
                </svg>
              </Button>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                className='menu_box'
                transformOrigin={{ horizontal: 'center' }}
              >
                <Box component={'div'} className='menu_header'>Notifications
                  <Button className='close_menu' onClick={e => setAnchorEl(null)}>
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.2431 21.2426L12.7578 12.7573" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M19.8281 14.1716L21.2423 12.7574" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12.7578 21.2427L16.76 17.2405" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M21.2431 21.2426L12.7578 12.7573" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </Button>
                </Box>
                {notifications}
              </Menu>

              {/* For User */}
              <Button className='dropdown_btn' onClick={e => setAnchorEl2(e.currentTarget)}>
                <img src={'https://modernize-vuejs.adminmart.com/assets/user-1-6d05e3ce.jpg'} className='user_img' />
              </Button>
              <Menu
                anchorEl={anchorEl2}
                keepMounted
                open={Boolean(anchorEl2)}
                onClose={() => setAnchorEl2(null)}
                className='menu_box profile'
                transformOrigin={{ horizontal: 'center' }}
              >
                <Box component={'div'} className='menu_close'>
                  <Button className='close_menu' onClick={e => setAnchorEl2(null)}>
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.2431 21.2426L12.7578 12.7573" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M19.8281 14.1716L21.2423 12.7574" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12.7578 21.2427L16.76 17.2405" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M21.2431 21.2426L12.7578 12.7573" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </Button>
                </Box>
                <NavLink to='/profile'>
                <MenuItem onClick={() => setAnchorEl2(null)}>
                  <NavLink component={'a'} to='/profile'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 4.96997C3 3.32997 4.34 2 6 2H18C19.66 2 21 3.32997 21 4.96997V15.88C21 17.52 19.66 18.85 18 18.85H17.24C16.44 18.85 15.68 19.16 15.12 19.72L13.41 21.41C12.63 22.18 11.36 22.18 10.58 21.41L8.87 19.72C8.31 19.16 7.54 18.85 6.75 18.85H6C4.34 18.85 3 17.52 3 15.88V9.03003" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M11.9999 10.0001C13.2868 10.0001 14.33 8.95687 14.33 7.67004C14.33 6.38322 13.2868 5.34009 11.9999 5.34009C10.7131 5.34009 9.66992 6.38322 9.66992 7.67004C9.66992 8.95687 10.7131 10.0001 11.9999 10.0001Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M16 15.6601C16 13.8601 14.21 12.4001 12 12.4001C9.79 12.4001 8 13.8601 8 15.6601" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <Typography component={'span'} >Profile</Typography>
                  </NavLink>
                </MenuItem>
                </NavLink>
                <Divider />
                <MenuItem onClick={() => setAnchorEl2(null)}>
                  <NavLink component={'a'} to='/setting'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 13.0801V14.8801C3 17.0001 3 17.0001 5 18.3501L10.5 21.5301C11.33 22.0101 12.68 22.0101 13.5 21.5301L19 18.3501C21 17.0001 21 17.0001 21 14.8901V9.11011C21 7.00011 21 7.00011 19 5.65011L13.5 2.47011C12.68 1.99011 11.33 1.99011 10.5 2.47011L5 5.65011C3 7.00011 3 7.00011 3 9.11011" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C12.41 15 12.81 14.92 13.17 14.76" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <Typography component={'span'}>Setting</Typography>
                  </NavLink>
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => setAnchorEl2(null)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5002 13V15.26C21.5002 19.73 19.7102 21.52 15.2402 21.52H15.1102C11.0902 21.52 9.24016 20.07 8.91016 16.53" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.90039 7.55999C9.21039 3.95999 11.0604 2.48999 15.1104 2.48999H15.2404C19.7104 2.48999 21.5004 4.27999 21.5004 8.74999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14.9991 12H3.61914" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5.85 8.6499L2.5 11.9999L5.85 15.3499" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <Typography component={'span'} onClick={logoutHandler}>Log Out</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
