import React from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const Review = ({ review }) => {
  const { name, img, description } = review;
  return (
    <Grid
      item
      xs={2}
      sm={4}
      md={4}
      style={{ marginTop: "20px", paddingBottom: "20px" }}
    >
      <Card
        style={{ boxShadow: "2px 1px 2px 1px", height: "200px" }}
        sx={{ minWidth: 275, border: 0, boxShadow: 0 }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          style={{ width: "60px", borderRadius: "50px", margin: "0 auto" }}
          image={img}
        />
      </Card>
    </Grid>
  );
};

export default Review;
