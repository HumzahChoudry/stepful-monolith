import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StudentsContainer = () => {
    const [students, setStudents] = useState([]);


    useEffect(() => {
        //fetch students
        fetch(`http://localhost:3001/students`,  {
            "Content-Type": "application/json",
            Accept: "application/json",
          }).then((response) => {
            return response.json()
          }).then((data) => {
            setStudents(data)
          });
    }, [])

    return (
        <div className="students-container">
             {students.map(student => (
                        <li key={student.id}><Link to={`${student.id}`} >{student.name}</Link></li>
                    ))}
        </div>
    );

}

export default StudentsContainer;