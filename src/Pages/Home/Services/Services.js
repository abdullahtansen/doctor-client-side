import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Service from "../Service/Service";

const services = [
  {
    id: "1",
    name: "Fluride Tratment",
    description:
      "Lorem Ipsum is simply dummy printing and typestetting indust ipsum has been the last",
    img: "https://i.ibb.co/wLDVB6G/fluoride.png",
  },
  {
    id: "2",
    name: "Cavity Filling",
    description:
      "Lorem Ipsum is simply dummy printing and typestetting indust ipsum has been the last",
    img: "https://i.ibb.co/pbdCDQt/cavity.png",
  },
  {
    id: "3",
    name: "Teath Whitening",
    description:
      "Lorem Ipsum is simply dummy printing and typestetting indust ipsum has been the last",
    img: "https://i.ibb.co/WPdwTbM/whitening.png",
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          sx={{ fontWeight: 400, color: "warning.main", m: 2 }}
          variant="h6"
          component="div"
        >
          OUR SERVICES
        </Typography>
        <Typography sx={{ fontWeight: 500, m: 5 }} variant="h4" component="div">
          SERVICES WE PROVIDE
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service.name} service={service}></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
