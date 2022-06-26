import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Review from "../Review/Review";

const reviews = [
  {
    id: "1",
    name: "Fluride Tratment",
    description:
      "Lorem Ipsum is simply dummy printing and typestetting indust ipsum has been the last",
    img: "https://i.ibb.co/t2BLnrq/freestocks-9-UVml-Ib0w-JU-unsplash.jpg",
  },
  {
    id: "2",
    name: "Cavity Filling",
    description:
      "Lorem Ipsum is simply dummy printing and typestetting indust ipsum has been the last",
    img: "https://i.ibb.co/ZN2vns4/rachel-mcdermott-0f-N7-Fxv1e-WA-unsplash.jpg",
  },
  {
    id: "3",
    name: "Teath Whitening",
    description:
      "Lorem Ipsum is simply dummy printing and typestetting indust ipsum has been the last",
    img: "https://i.ibb.co/XjzZxMr/julian-wan-WNo-Ln-Jo7t-S8-unsplash.jpg",
  },
];

const Reviews = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography variant="h5" style={{ textAlign: "left" }}>
          TESTMONIALS
        </Typography>
        <Typography variant="h4">What's Our Patient's Says</Typography>
        <Grid
          container
          spacing={{ xs: 4, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {reviews.map((review) => (
            <Review key={review.name} review={review}></Review>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Reviews;
