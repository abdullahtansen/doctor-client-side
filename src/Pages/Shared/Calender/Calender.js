import React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'

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