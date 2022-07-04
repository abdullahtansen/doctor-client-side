import { Alert, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Booking from "../Booking/Booking";

const bookings = [
  {
    id: 1,
    name: "Teeth Orthodonics",
    time: "8.00 AM - 9:00AM",
    seat: 12,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "10.05 AM - 11:30AM",
    seat: 10,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: " 5.00 PM - 6:30PM",
    seat: 5,
  },
  {
    id: 4,
    name: " Cavity Protection",
    time: "7.00 AM - 8:30AM",
    seat: 7,
  },
  {
    id: 5,
    name: "Teeth Orthodonics",
    time: "8.00 AM - 9:00AM",
    seat: 10,
  },
  {
    id: 6,
    name: "Teeth Orthodonics",
    time: "8.00 AM - 9:00AM",
    seat: 8,
  },
];

const AvailableAppointments = ({ date }) => {
  const [bookingSuccess,setBookingSuccess] = useState(false)
  return (
    <Container>
      <Typography variant='h4' sx={{color:'info.main',mb:2,mt:3}}>Available Appointments on {date.toDateString()}</Typography>
      {bookingSuccess && <Alert severity="success">Appointment Confirmed</Alert>}
   
        <Grid container spacing={2}>
         {
            bookings.map(booking=><Booking
           key={booking.id}
           booking={booking}
           date={date}
           setBookingSuccess={setBookingSuccess}
           >
            </Booking>)
         }
        </Grid>
        </Container>
  );
};

export default AvailableAppointments;
