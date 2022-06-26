import React from "react";
import Grid from "@mui/material/Grid";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import PhoneInTalkSharpIcon from "@mui/icons-material/PhoneInTalkSharp";
import FmdGoodSharpIcon from "@mui/icons-material/FmdGoodSharp";
import { Card, CardContent, Typography } from "@mui/material";
import { Container } from "@mui/system";

const ContactUs = () => {
  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={8} sm={6} md={4}>
          <Card
            container
            sx={{
              minWidth: 175,
              border: 0,
              boxShadow: 0,
              backgroundColor: "#19D3AE",
            }}
          >
            <span>
              <AccessTimeFilledIcon fontSize="large" />
            </span>

            <CardContent>
              <Typography variant="h5" component="div">
                Open Hours
              </Typography>
              <Typography
                variant="h6"
                style={{ fontSize: "16px"}}
              >
                Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Architecto, ex?
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={8} sm={6} md={4}>
          <Card
            container
            sx={{
              minWidth: 175,
              border: 0,
              boxShadow: 0,
              backgroundColor: "#19D3AE",
            }}
          >
            <span>
              <FmdGoodSharpIcon fontSize="large" />
            </span>

            <CardContent>
              <Typography variant="h5" component="div">
                Open Hours
              </Typography>
              <Typography
                variant="h6"
                style={{ fontSize: "16px" }}
              >
                Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Architecto, ex?
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={8} sm={6} md={4}>
          <Card
            container
            sx={{
              minWidth: 175,
              border: 0,
              boxShadow: 0,
              backgroundColor: "#19D3AE",
            }}
          >
            <span>
              <PhoneInTalkSharpIcon fontSize="large" />
            </span>

            <CardContent>
              <Typography variant="h5" component="div">
                Open Hours
              </Typography>
              <Typography
                variant="h6"
                style={{ fontSize: "16px" }}
              >
                Lorem ipsum, dolor sit amet
                 consectetur adipisicing elit. Architecto, ex?
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
