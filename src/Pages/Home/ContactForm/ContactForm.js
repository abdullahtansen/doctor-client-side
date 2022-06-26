import React from 'react';
import TextField from '@mui/material/TextField';
import { Box, Button, FormControl, OutlinedInput, Typography } from '@mui/material';
import { Container } from '@mui/system';
import bg from '../../../images/bg.png';

const bannerBg = {
    background:`url(${bg})`,
    backgroundColor: 'rgba(45,58,74,0.8)',
    backgroundBlendMode: 'darken,luminosity',
    padding:"10px",marginBottom:"10px",
    borderRadius:'10px'
    
}

const ContactForm = () => {
    return (
       <Container style={bannerBg}>
        <Box>
        <Typography variant='h5' style={{color:'#5CE7ED',fontWeight:'500',padding:'2px',letterSpacing:"1px"}}>
            Contact US
        </Typography>
        <Typography  variant='h4' style={{color:'white',fontWeight:'500',padding:'2px',letterSpacing:"1px"}}>
            Always Connect with us 
        </Typography>
      <TextField
      style={{backgroundColor:'white'}}
       sx={{width:'50%',m:1}}
        id="demo-helper-text-aligned"
        label="Email"
      />
      <TextField
       style={{backgroundColor:'white'}}
       sx={{width:'50%',m:1}}
        id="demo-helper-text-aligned-no-helper"
        label="Subject"
      />
      <TextField
       style={{backgroundColor:'white'}}
       sx={{width:'50%',m:1}}
        id="demo-helper-text-aligned-no-helper"
        label="Message"
        input-type='text-area'
      />
       <FormControl sx={{ width: '50%' }}>
        <OutlinedInput style={{width:'100%',height:'100px',backgroundColor:'white',textAlign:'center'}} placeholder="Please enter text" />
      </FormControl>
        </Box>
        <Button variant="contained" style={{margin:'10px',fontSize:"16px"}}>Submit</Button>
       </Container>
    );
};

export default ContactForm;