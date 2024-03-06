import React, { useEffect, useState } from "react";
import DayJS from 'react-dayjs';

const Appointment = (props) => {

    console.log(props.appointment)
    return (
        <div className="appointment" onClick={() => props.onClick(props.appointment.id)}>
            <p>Coach: {props.appointment.coach.name}</p>
            <p>Student: {props.appointment.student ? props.appointment.student.name : "Available"}</p>
            <p>Time: <DayJS asString={ true }>{props.appointment.start_time}</DayJS> - <DayJS asString={ true }>{props.appointment.end_time}</DayJS></p>
        </div>
    );

}

export default Appointment;