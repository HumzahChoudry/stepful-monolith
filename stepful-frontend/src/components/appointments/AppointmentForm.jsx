import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const AppointmentForm = (props) => {
    const {id} = useParams()
    const [value, setValue] = useState("")
    const [status, setStatus] = useState("")

    const createAppointment = (e) => {
        e.preventDefault()
        const data = {appointment: {coach_id: id, start_time: value}}
        fetch(`http://localhost:3001/coaches/${id}/appointments`,  {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(data),
        }).then((response) => {
            if(response.ok){
                setStatus("Appointment successfully created")
            } else {
                setStatus(`Appointment unable to be created`)
            }
            return response.json()
        }).then((data) => {
            console.log(data)
        });
    }

    return (
        <div className="appointment-form">
            <h4>{status}</h4>
            <form onSubmit={createAppointment}>
                <label>
                Date Time:
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                    label="Controlled picker"
                    disablePast={true}
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                />
                </LocalizationProvider>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default AppointmentForm;