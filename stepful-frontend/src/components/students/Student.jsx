import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Appointment from "../appointments/Appointment"

const Student = (props) => {
    const {id} = useParams()
    const [student, setStudent] = useState([]);
    const [appointments, setStudentAppointments] = useState([]);

    useEffect(() => {
        //fetch student
        fetch(`http://localhost:3001/students/${id}`,  {
            "Content-Type": "application/json",
            Accept: "application/json",
          }).then((response) => {
            return response.json()
          }).then((data) => {
            setStudent(data)
            setStudentAppointments(data.appointments)
          });
    }, [])
    
    return (
        <div className="student">
            <Link to="appointments/new">book appointment</Link>
            {appointments.map((a) => {
                return <Appointment appointment={a} onClick={console.log}/>
            })}
        </div>
    );
}

export default Student;