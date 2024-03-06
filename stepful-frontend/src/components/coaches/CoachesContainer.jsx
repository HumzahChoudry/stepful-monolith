import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const CoachesContainer = () => {
    const [coaches, setCoaches] = useState([]);


    useEffect(() => {
        //fetch coaches
        fetch(`http://localhost:3001/coaches`,  {
            "Content-Type": "application/json",
            Accept: "application/json",
          }).then((response) => {
            return response.json()
          }).then((data) => {
            setCoaches(data)
          });
    }, [])

    const CoachList = props => {
        return (<ul className="coach-list">
                    {coaches.map(coach => (
                        <li key={coach.id}><Link to={`${coach.id}`} >{coach.name}</Link></li>
                    ))}
                </ul>);
      };

    return (
        <div className="coaches-container">
            <CoachList  />
        </div>
    );

}

export default CoachesContainer;