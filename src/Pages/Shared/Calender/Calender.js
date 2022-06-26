import React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import { TextField } from '@mui/material';

const Calender = ({date,setDate}) => {
    // const [date, setDate] = React.useState(new Date());
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
  <StaticDatePicker
    displayStaticWrapperAs="desktop"
    value={date}
    onChange={(newValue) => {
      setDate(newValue);
    }}
    renderInput={(params) => <TextField {...params} />}
  />
</LocalizationProvider>
    );
};

export default Calender;