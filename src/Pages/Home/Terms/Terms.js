import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import treatment from '../../../images/treatment.png'

const Terms = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} md={6}>
           <img style={{width:'400px',height:'400px',borderRadius:'10px'}} src={treatment} alt="" />
          </Grid>
          <Grid item xs={12} md={6}>
           <Typography variant="h3" component="div" style={{marginTop:'30px'}}>
            Exceptional Dental Care,on Your Terms
           </Typography>
           <Typography  variant='h6' component="div" style={{fontSize:'16px',marginTop:'10px',fontWeight:'400'}}>
            It is a long established fact that reader will be distracted by the readable content of a page when looking at its layout.The point of using lorem Ipsumis that it has a more-or-less normal distribution of letters.as opposed to using Content here content here making it look like readable English Many Desktop publishing packages and web page
           </Typography>
           <Button variant="contained"  style={{marginTop:'20px',display:"flex",fontWeight:'500',padding:'8px'}}>GET STARTED</Button>
          </Grid>
        </Grid>
        </Container>
      </Box>
    );
};

export default Terms;