import React from "react";
import Grid from "@mui/material/Grid";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";

const bannerBg ={
    background:`url(${bg})`
}
const verticalCenter={
    display:'flex',
    height:400,
    alignItems:'center'
}
const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid style={{...verticalCenter,textAlign:'left'}} item xs={12} md={6}>
         <Box>
         <Typography variant="h4">
            Your New Smile <br />
            Starts Here
          </Typography>
          <Typography
            variant="h6"
            sx={{ my:3, fontSize: 13, color: "Gray", fontWeight: 300 }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur similique officia distinctio hic ducimus rem placeat?
            Sit necessitatibus enim accusantium?
          </Typography>
          <Button variant="contained" style={{ color: "#5CE7ED" }}>
            Get Appointment
          </Button>
         </Box>
        </Grid>
        <Grid item xs={12} md={4} style={verticalCenter}>
          <img style={{ width: "400px" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
