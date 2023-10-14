import React, { useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, TextField, Button, Menu, Typography, MenuItem, Tooltip } from '@mui/material';
import './Table.scss';

const transitions = [
  {
    tickter: 'BNB/USDT',
    price: 253.00,
    direction: 'sell',
    size: 1.59563,
    counter: '+1,612.55',
    ordertype: 'limit',
    feee: 0,
    Time: '2023-10-05 09:55:17'
  },
  {
    tickter: 'BNB/USDT',
    price: 100.00,
    direction: 'buy',
    size: 8.59563,
    counter: '- 2,612.55',
    ordertype: 'Market',
    feee: 0,
    Time: '2023-10-05 09:55:17'
  },
  {
    tickter: 'BNB/USDT',
    price: 100.00,
    direction: 'buy',
    size: 8.59563,
    counter: '- 2,612.55',
    ordertype: 'Market',
    feee: 0,
    Time: '2023-10-05 09:55:17'
  },
  {
    tickter: 'BNB/USDT',
    price: 100.00,
    direction: 'sell',
    size: 8.59563,
    counter: '- 2,612.55',
    ordertype: 'Market',
    feee: 0,
    Time: '2023-10-05 09:55:17'
  },
  {
    tickter: 'BNB/USDT',
    price: 100.00,
    direction: 'sell',
    size: 8.59563,
    counter: '- 2,612.55',
    ordertype: 'Market',
    feee: 0,
    Time: '2023-10-05 09:55:17'
  },
  {
    tickter: 'BNB/USDT',
    price: 100.00,
    direction: 'sell',
    size: 8.59563,
    counter: '- 2,612.55',
    ordertype: 'Market',
    feee: 0,
    Time: '2023-10-05 09:55:17'
  },
  {
    tickter: 'BNB/USDT',
    price: 100.00,
    direction: 'buy',
    size: 8.59563,
    counter: '- 2,612.55',
    ordertype: 'Market',
    feee: 0,
    Time: '2023-10-05 09:55:17'
  },
  {
    tickter: 'BNB/USDT',
    price: 100.00,
    direction: 'sell',
    size: 8.59563,
    counter: '- 2,612.55',
    ordertype: 'Market',
    feee: 0,
    Time: '2023-10-05 09:55:17'
  },
  {
    tickter: 'BNB/USDT',
    price: 100.00,
    direction: 'buy',
    size: 8.59563,
    counter: '- 2,612.55',
    ordertype: 'Market',
    feee: 0,
    Time: '2023-10-05 09:55:17'
  },
  {
    tickter: 'BNB/USDT',
    price: 100.00,
    direction: 'sell',
    size: 8.59563,
    counter: '- 2,612.55',
    ordertype: 'Market',
    feee: 0,
    Time: '2023-10-05 09:55:17'
  },
  {
    tickter: 'BNB/USDT',
    price: 100.00,
    direction: 'buy',
    size: 8.59563,
    counter: '- 2,612.55',
    ordertype: 'Market',
    feee: 0,
    Time: '2023-10-05 09:55:17'
  },
  {
    tickter: 'BNB/USDT',
    price: 100.00,
    direction: 'buy',
    size: 8.59563,
    counter: '- 2,612.55',
    ordertype: 'Market',
    feee: 0,
    Time: '2023-10-05 09:55:17'
  },
]

export default function Transactions() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [orderBy, setOrderBy] = useState('');
  const [order, setOrder] = useState('asc');
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Box component={'div'} className='table_box'>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>

          <Box component={'div'} className='table_search'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 11.5C2 6.25 6.25 2 11.5 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M21.0007 11.5C21.0007 16.75 16.7507 21 11.5007 21C7.7607 21 4.5207 18.84 2.9707 15.69" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22 22L20 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14.4999 6.13008C14.1499 5.03008 14.5599 3.66008 15.7199 3.29008C16.3299 3.09008 17.0799 3.26008 17.5099 3.85008C17.9099 3.24008 18.6899 3.10008 19.2899 3.29008C20.4499 3.66008 20.8599 5.03008 20.5099 6.13008C19.9599 7.88008 18.0399 8.79008 17.5099 8.79008C16.9699 8.79008 15.0699 7.90008 14.4999 6.13008Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <TextField type='search' placeholder='Search ...' />
          </Box>

          <Tooltip arrow placement='top' title={<Typography sx={{ fontSize: 14 }}>Download PDF</Typography>}>
            <Button className='dropdown_btn export_btn'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2V9L14 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 9L10 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1.98047 13H6.39047C6.77047 13 7.11047 13.21 7.28047 13.55L8.45047 15.89C8.79047 16.57 9.48047 17 10.2405 17H13.7705C14.5305 17 15.2205 16.57 15.5605 15.89L16.7305 13.55C16.9005 13.21 17.2505 13 17.6205 13H21.9805" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.68945 18.9999C3.64945 21.0999 5.64945 21.9999 8.99945 21.9999H14.9995C19.9995 21.9999 21.9995 19.9999 21.9995 14.9999V10.9999C21.9995 6.72988 20.5395 4.64988 16.9995 4.12988" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7 4.12988C3.46 4.64988 2 6.72988 2 10.9999V14.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              Export
            </Button>
          </Tooltip>
          {/* <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
            className='menu_box export_menu'
            transformOrigin={{ horizontal: 'center' }}
          >
            <MenuItem>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2H17C19 2 20 3 20 5V6.38" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2 13.02V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M22 14.99V17C22 21 21 22 17 22H7C3 22 2 21 2 17" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <Typography component={'span'}>PDF</Typography>
            </MenuItem>
          </Menu> */}
        </Box>


        <TableContainer>
          <Table className='table'>
            <TableHead>
              <TableRow>
                <TableCell>Ticket / USDT</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Direction</TableCell>
                <TableCell>Size</TableCell>
                <TableCell>Counter Amount (USDT)</TableCell>
                <TableCell>Position Order Type</TableCell>
                <TableCell>Fee</TableCell>
                <TableCell>Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transitions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((items, i) => (
                <TableRow hover key={i}>
                  <TableCell>{items.tickter}</TableCell>
                  <TableCell>{items.price}</TableCell>
                  <TableCell>
                    <Typography component={'span'} className={`badge ${items.direction}`}>{items.direction}</Typography>
                  </TableCell>
                  <TableCell>{items.size}</TableCell>
                  <TableCell>
                    <Typography component={'span'} className={`badge ${i === 0 || i === 4 || i === 6 || i === 10 ? 'buy' : 'sell'}`}>{items.counter}</Typography>
                  </TableCell>
                  <TableCell>{items.ordertype}</TableCell>
                  <TableCell>{items.feee}</TableCell>
                  <TableCell>{items.Time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          className='pagination'
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={transitions.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box >
    </>
  )
}
