import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Appointment from "../appointments/Appointment"

const AppointmentForm = (props) => {
    const {id} = useParams()
    const [appointments, setAppointments] = useState([])
    const [status, setStatus] = useState("")

    useEffect(()=>{
        fetch(`http://localhost:3001/appointments`,
        {
            "Content-Type": "application/json",
            Accept: "application/json",
        })
        .then((resp)=> resp.json())
        .then((data) => setAppointments(data))
    }, [])

    const bookAppointment = (appointment_id) => {
        const data = {appointment: {student_id: id}}
        fetch(`http://localhost:3001/students/${id}/appointments/${appointment_id}`,  {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(data),
        }).then((response) => {
            if(response.ok){
                setStatus("Appointment successfully booked")
            } else {
                setStatus(`Appointment unable book appointment`)
            }
            return response.json()
        }).then((data) => {
            console.log(data)
        });
    }

    return (
        <div className="appointment-form">
            <h4>{status}</h4>
            {appointments.length == 0 ? <p>No appointments to book</p> : null}
            {appointments.map((a) => <Appointment appointment={a}  onClick={bookAppointment} />)}
        </div>
    );
}

export default AppointmentForm;