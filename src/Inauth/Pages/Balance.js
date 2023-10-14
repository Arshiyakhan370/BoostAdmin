import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import './Custom.scss';
import { NavLink, useLocation } from "react-router-dom";

export default function Balance() {
  const location = useLocation();


  return (
    <>
      {location.pathname === '/profile' || location.pathname === '/setting' ? '' :
        <Box component={'div'} className='balance_card'>
          <Grid container spacing={1} alignItems='center'>
            <Grid item xs={7} md={6}>
              <Box component={'div'} className='balance_box'>
                <Typography component={'p'}>Total Balance</Typography>
                <Typography component={'h4'}>$36,254
                  <Box component={'div'} className='update_data'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.91 16.59L3.5 19" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M17.4991 4.99988L9.11914 13.3799" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7.23047 5.00002H17.5005V15.27" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <Typography component={'span'}>$328.32 Today Feb 15</Typography>
                  </Box>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={5} md={6}>
              <Box component={'div'} className='analytics'>
                <NavLink component={'a'} href='#'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 18V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16 12H18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6 12H11.66" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 18V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </NavLink>

                <Typography component={'a'} href='#'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.02992 14C8.63992 13.43 8.41992 12.74 8.41992 12C8.41992 10.02 10.0199 8.42004 11.9999 8.42004C13.9799 8.42004 15.5799 10.02 15.5799 12C15.5799 13.98 13.9799 15.58 11.9999 15.58" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M17.5598 5.57998C15.8698 4.37998 13.9698 3.72998 11.9998 3.72998C8.46984 3.72998 5.17984 5.80998 2.88984 9.40998C1.98984 10.82 1.98984 13.19 2.88984 14.6C5.17984 18.2 8.46984 20.28 11.9998 20.28C15.5298 20.28 18.8198 18.2 21.1098 14.6C22.0098 13.19 22.0098 10.82 21.1098 9.40998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <Typography component={'span'}>View Analytics</Typography>
                </Typography>
              </Box>
            </Grid>
          </Grid>


          <Box component={"div"} className='balance_card_box'>
            <Box component={'div'} className='overview_title'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.1009 8.61001C22.1409 8.95001 22.6209 10.43 21.1509 11.89L18.6709 14.37C18.2509 14.79 18.0209 15.6 18.1509 16.18L18.8609 19.25C19.4209 21.68 18.1309 22.62 15.9809 21.35L12.9909 19.58C12.4509 19.26 11.5609 19.26 11.0109 19.58L8.02089 21.35C5.88089 22.62 4.58089 21.67 5.14089 19.25L5.85089 16.18C5.98089 15.6 5.75089 14.79 5.33089 14.37L2.85089 11.89C1.39089 10.43 1.86089 8.95001 3.90089 8.61001L7.09089 8.08001C7.62089 7.99001 8.26089 7.52002 8.50089 7.03001L10.2609 3.51001C11.2109 1.60001 12.7709 1.60001 13.7309 3.51001L15.4909 7.03001C15.5909 7.24001 15.7709 7.45001 15.9809 7.62001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <Typography component={'h4'}>Overview</Typography>
              <Typography component={'span'}>Last 30 days</Typography>
            </Box>

            <Grid container spacing={2} justifyContent='center'>
              <Grid item xs={12} sm={10} md={6} lg={6} xl={3}>
                <Box component={'div'} className='overview_box'>
                  <Box component={'div'} className='overview_icon'>
                    <svg width="94" height="61" viewBox="0 0 94 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M83.7807 43.6428L93 59.5L1 60.5V0.720947L13.219 26.5613C14.6017 29.4855 18.7032 29.6444 20.308 26.836L26.8149 15.4489C27.5712 14.1254 29.4709 14.1006 30.2614 15.404L43.9881 38.0344C45.4416 40.4307 48.8449 40.628 50.5655 38.4157L53.7413 34.3326C55.5133 32.0544 59.0413 32.3454 60.4159 34.8832L67.2832 47.5613C68.731 50.2342 72.5135 50.379 74.1615 47.8246L76.9615 43.4847C78.5807 40.975 82.2795 41.0607 83.7807 43.6428Z" fill="url(#paint0_linear_1483_11)" />
                      <path d="M93 59.0001L83.4848 43.422C81.9499 40.9091 78.3179 40.8598 76.7154 43.3301L74.0718 47.4053C72.4281 49.939 68.6768 49.8069 67.2155 47.1638L60.2862 34.6307C58.8519 32.0366 55.1928 31.8492 53.501 34.2832L50.9897 37.8963C49.3289 40.2859 45.7535 40.1586 44.2667 37.6571L32.0587 17.1171C30.4645 14.4349 26.5498 14.5294 25.087 17.2855L20.2589 26.3818C18.7086 29.3029 14.4848 29.1878 13.0957 26.1867L1.4381 1" stroke="#FF231F" stroke-linecap="round" />
                      <defs>
                        <linearGradient id="paint0_linear_1483_11" x1="47" y1="-64.0833" x2="47" y2="60.5" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#FF231F" />
                          <stop offset="1" stop-color="#FF231F" stop-opacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>

                  </Box>
                  <Box component={'div'} className='overview_price'>
                    <Typography component={'h5'} className='days'>Today</Typography>
                    <Typography component={'h4'} className='amount'>$900.00</Typography>
                    <Box component={'div'} className='percantage'>
                      <Typography component={'p'} className='down'>-4.3%</Typography>
                      <Typography component={'span'}>Compared to tomorrow</Typography>
                    </Box>
                  </Box>

                </Box>
              </Grid>

              <Grid item xs={12} sm={10} md={6} lg={6} xl={3}>
                <Box component={'div'} className='overview_box'>
                  <Box component={'div'} className='overview_icon'>
                    <svg width="94" height="60" viewBox="0 0 94 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.5152 43.422L1 59.0001H93V1.50012L80.9547 26.3987C79.5283 29.3473 75.3564 29.4252 73.8208 26.532L67.245 14.1428C66.5135 12.7648 64.5562 12.7175 63.7591 14.0586L49.7333 37.6571C48.2465 40.1586 44.6711 40.2859 43.0103 37.8963L40.499 34.2832C38.8072 31.8492 35.1481 32.0366 33.7138 34.6307L26.7845 47.1637C25.3232 49.8069 21.5719 49.939 19.9282 47.4053L17.2846 43.3301C15.6821 40.8598 12.0501 40.9091 10.5152 43.422Z" fill="url(#paint0_linear_1484_16)" />
                      <path d="M1 59.0001L10.5152 43.422C12.0501 40.9091 15.6821 40.8598 17.2846 43.3301L19.9282 47.4053C21.5719 49.939 25.3232 49.8069 26.7845 47.1638L33.7138 34.6307C35.1481 32.0366 38.8072 31.8492 40.499 34.2832L43.0103 37.8963C44.6711 40.2859 48.2465 40.1586 49.7333 37.6571L61.9413 17.1171C63.5355 14.4349 67.4502 14.5294 68.913 17.2855L73.7411 26.3818C75.2914 29.3029 79.5152 29.1878 80.9043 26.1867L92.5619 1" stroke="#28B30C" stroke-linecap="round" />
                      <defs>
                        <linearGradient id="paint0_linear_1484_16" x1="49.8" y1="-13.6886" x2="53.7376" y2="58.9028" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#28B30C" />
                          <stop offset="1" stop-color="#28B30C" stop-opacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </Box>
                  <Box component={'div'} className='overview_price'>
                    <Typography component={'h5'} className='days'>Weekly</Typography>
                    <Typography component={'h4'} className='amount'>$1500.00</Typography>
                    <Box component={'div'} className='percantage'>
                      <Typography component={'p'} className='up'>+6%</Typography>
                      <Typography component={'span'}>Compared to Last Week</Typography>
                    </Box>
                  </Box>

                </Box>
              </Grid>

              <Grid item xs={12} sm={10} md={6} lg={6} xl={3}>
                <Box component={'div'} className='overview_box'>
                  <Box component={'div'} className='overview_icon'>
                    <svg width="94" height="60" viewBox="0 0 94 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.5152 43.422L1 59.0001H93V1.50012L80.9547 26.3987C79.5283 29.3473 75.3564 29.4252 73.8208 26.532L67.245 14.1428C66.5135 12.7648 64.5562 12.7175 63.7591 14.0586L49.7333 37.6571C48.2465 40.1586 44.6711 40.2859 43.0103 37.8963L40.499 34.2832C38.8072 31.8492 35.1481 32.0366 33.7138 34.6307L26.7845 47.1637C25.3232 49.8069 21.5719 49.939 19.9282 47.4053L17.2846 43.3301C15.6821 40.8598 12.0501 40.9091 10.5152 43.422Z" fill="url(#paint0_linear_1484_16)" />
                      <path d="M1 59.0001L10.5152 43.422C12.0501 40.9091 15.6821 40.8598 17.2846 43.3301L19.9282 47.4053C21.5719 49.939 25.3232 49.8069 26.7845 47.1638L33.7138 34.6307C35.1481 32.0366 38.8072 31.8492 40.499 34.2832L43.0103 37.8963C44.6711 40.2859 48.2465 40.1586 49.7333 37.6571L61.9413 17.1171C63.5355 14.4349 67.4502 14.5294 68.913 17.2855L73.7411 26.3818C75.2914 29.3029 79.5152 29.1878 80.9043 26.1867L92.5619 1" stroke="#28B30C" stroke-linecap="round" />
                      <defs>
                        <linearGradient id="paint0_linear_1484_16" x1="49.8" y1="-13.6886" x2="53.7376" y2="58.9028" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#28B30C" />
                          <stop offset="1" stop-color="#28B30C" stop-opacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </Box>
                  <Box component={'div'} className='overview_price'>
                    <Typography component={'h5'} className='days'>Monthly</Typography>
                    <Typography component={'h4'} className='amount'>$5,000</Typography>
                    <Box component={'div'} className='percantage'>
                      <Typography component={'p'} className='up'>+7%</Typography>
                      <Typography component={'span'}>Compared to Last Month</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={10} md={6} lg={6} xl={3}>
                <Box component={'div'} className='overview_box'>
                  <Box component={'div'} className='overview_icon'>
                    <svg width="94" height="61" viewBox="0 0 94 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M83.7807 43.6428L93 59.5L1 60.5V0.720947L13.219 26.5613C14.6017 29.4855 18.7032 29.6444 20.308 26.836L26.8149 15.4489C27.5712 14.1254 29.4709 14.1006 30.2614 15.404L43.9881 38.0344C45.4416 40.4307 48.8449 40.628 50.5655 38.4157L53.7413 34.3326C55.5133 32.0544 59.0413 32.3454 60.4159 34.8832L67.2832 47.5613C68.731 50.2342 72.5135 50.379 74.1615 47.8246L76.9615 43.4847C78.5807 40.975 82.2795 41.0607 83.7807 43.6428Z" fill="url(#paint0_linear_1483_11)" />
                      <path d="M93 59.0001L83.4848 43.422C81.9499 40.9091 78.3179 40.8598 76.7154 43.3301L74.0718 47.4053C72.4281 49.939 68.6768 49.8069 67.2155 47.1638L60.2862 34.6307C58.8519 32.0366 55.1928 31.8492 53.501 34.2832L50.9897 37.8963C49.3289 40.2859 45.7535 40.1586 44.2667 37.6571L32.0587 17.1171C30.4645 14.4349 26.5498 14.5294 25.087 17.2855L20.2589 26.3818C18.7086 29.3029 14.4848 29.1878 13.0957 26.1867L1.4381 1" stroke="#FF231F" stroke-linecap="round" />
                      <defs>
                        <linearGradient id="paint0_linear_1483_11" x1="47" y1="-64.0833" x2="47" y2="60.5" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#FF231F" />
                          <stop offset="1" stop-color="#FF231F" stop-opacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </Box>
                  <Box component={'div'} className='overview_price'>
                    <Typography component={'h5'} className='days'>Yearly</Typography>
                    <Typography component={'h4'} className='amount'>$50,000</Typography>
                    <Box component={'div'} className='percantage'>
                      <Typography component={'p'} className='down'>-4.1%</Typography>
                      <Typography component={'span'}>Compared to Last Year</Typography>
                    </Box>
                  </Box>

                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      }

    </>
  )
}
