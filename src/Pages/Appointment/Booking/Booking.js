import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking,date}) => {
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    const {name,time,seat} =booking;
    return (
          <>
            <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{py:5}} elevation={8}>
                <Typography sx={{color:'info.main',fontWeight:600}} variant="h6" gutterBottom component="div">{name}</Typography>
                <Typography variant="h6" gutterBottom component="div">{time}</Typography>
                <Typography variant="caption" display='block' gutterBottom> {seat}   SPACES AVAILABLE</Typography>
                <Button onClick={handleBookingOpen} variant='contained'>Booking Appointment</Button>
            </Paper>
            </Grid>
            <BookingModal
            booking={booking}
            openBooking={openBooking}
            handleBookingClose={handleBookingClose}
            date={date}>
            </BookingModal>
            </>
    );
};

export default Booking;