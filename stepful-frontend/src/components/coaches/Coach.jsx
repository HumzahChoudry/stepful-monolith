import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Appointment from "../appointments/Appointment"

const Coach = (props) => {
    const {id} = useParams()
    const [coach, setCoach] = useState([]);
    const [appointments, setCoachAppointments] = useState([]);

    useEffect(() => {
        //fetch coach
        fetch(`http://localhost:3001/coaches/${id}`,  {
            "Content-Type": "application/json",
            Accept: "application/json",
          }).then((response) => {
            return response.json()
          }).then((data) => {
            setCoach(data)
            setCoachAppointments(data.appointments)
          });
    }, [])

    return (
        <div className="coach">
            <Link to="appointments/new">create appointment</Link>
            {appointments.map((a) => {
                return <Appointment appointment={a} onClick={console.log} />
            })}
        </div>
    );
}

export default Coach;