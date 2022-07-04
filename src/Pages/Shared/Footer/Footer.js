import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import footerbg from "../../../images/footer.png";

const header = {
  fontSize: "20px",
  fontWeight: "700",
  color: "green",
  padding: "5px",
};
const footerBackground = {
  background: `url(${footerbg})`,
  backgroundColor: "rgba(25, 20, 0, 0.5)",
  backgroundBlendMode: "darken,luminosity",
};
const service = {
  color: "black",
  fontWeight: "400",
  fontSize: "16px",
};

const Footer = () => {
  return (
    <Container sx={{ mt: 3, pb: 2,borderRadius:'10px' }} style={footerBackground}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={4} md={4} sm={12}>
            <Typography style={header} variant="h5">
              SERVICES
            </Typography>
            <Typography style={service}>Emergency Checkup</Typography>
            <Typography style={service}>Monthly Checkup</Typography>
            <Typography style={service}>Weekly Checkup</Typography>
            <Typography style={service}>Deep Checkup</Typography>
          </Grid>
          <Grid item xs={4} md={4} sm={12}>
            <Typography style={header} variant="h5">
              ORAL HEALTH
            </Typography>
            <Typography style={service}>Flouride Treatment</Typography>
            <Typography style={service}>Cavity Filling</Typography>
            <Typography style={service}>Teath whitening</Typography>
          </Grid>
          <Grid item xs={4} md={4} sm={12}>
            <Typography style={header} variant="h5">
              OUR ADDRESS
            </Typography>
            <Typography style={service}>Mirpur-13,Dhaka</Typography>
          </Grid>
        </Grid>
        <Typography>
          Copyright 2022 All Rights Reserved By{" "}
          <span
            style={{ color: "green", fontSize: "22px", fontWeight: "500" }}
          >
            Tansen
          </span>
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
