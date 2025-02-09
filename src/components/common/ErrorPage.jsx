import * as React from 'react';
import { Box,Button } from '@mui/material';
export default function ErrorPage(props) {
  return (
    <>
    <Box justifyContent={'center'} sx={{display:'flex'}}>
   
   </Box>
    {props.resetErrorBoundary && (
        <Box justifyContent={'center'} sx={{display:'flex'}}>
            <Button variant='contained' color='primary' onClick={props.resetErrorBoundary}>
              Try Again!
            </Button>
        </Box>
    )}
    </>
  );
}