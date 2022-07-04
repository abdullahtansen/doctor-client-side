import * as React from "react";
import { Grid } from "@mui/material";
import Calender from "../../Shared/Calender/Calender";
import Appointments from "./Appointments/Appointments";

const DashBoardHome = () => {
    const [date,setDate] =React.useState(new Date())
    return (
        <Grid container spacing={2}>
        <Grid item xs={12} md={4} sm={7}>
        <Calender 
        date={date}
        setDate={setDate}
        ></Calender>
        </Grid>
        <Grid item xs={12} md={8} sm={5}>
        <Appointments date={date}/>
        </Grid>
    </Grid>
    );
};

export default DashBoardHome;