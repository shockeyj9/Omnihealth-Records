import React from "react";
import { useState } from 'react';
import { useQuery } from "@apollo/client";
import { QUERY_PROGRAMS } from "../graphql/queries/program";

const ProgramDropdown = ({specificProgram}) => {

    const { loading, data } = useQuery(QUERY_PROGRAMS);
    const programsData = data?.programs || [];
   
    const [program, setProgram] = useState()
    // setprogram to programsData.name?

    const changeProgram = (event) => {
        setProgram(event.target.value);

    }
    return (
        <div className="dropdown-menu-activity">
            <select value={program} onChange={changeProgram}>
           <option>{specificProgram? specificProgram:'--program--'}</option>
           {programsData.map((data) => (
             <option key={data._id} value={data._id}>{data.name}</option>
           ))}
           </select>
        </div>
    );
};

export default ProgramDropdown;


// other dropdown set up
// {programsData
//     ? programsData.map((data) => {
//      return 
//      <option key={data.id} value={data.id}>{data.name}</option>
//     })
//     : null }