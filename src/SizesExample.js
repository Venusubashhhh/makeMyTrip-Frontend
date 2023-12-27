import * as React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

export default function SizesExample() {
  return (
    <>
    <div style={{display:'flex'}}>
    
    <Stack sx={{ width: '20%', color: 'grey.500',marginTop:'45px' }} spacing={2}>
    <LinearProgress color="inherit" />
      <LinearProgress color="inherit" />
      <LinearProgress color="inherit" />
    </Stack>
    <img style={{background:'transparent'}} src='https://imgak.mmtcdn.com/flights/assets/media/dt/listing/fliIcon.png'></img>
    </div>
    </>
  );
}