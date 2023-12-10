import { useProgramContext } from "../utils/contexts/ProgramContext";

import { useState } from 'react';
import { UPDATE_PROGRAM } from '../utils/actions';


export default function UpdateProgramForm({program,updateProgram}) {

    const [formState, setformState] = useState(
  {     id: program._id,
       name: program.name,
       beginDate: program.beginDate,
       endDate: program.endDate,}
    );
   console.log(formState)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setformState({
            ...formState, [name]:value
        })
      };
    
    const handleFormSubmit = (event)=>{
        event.preventDefault();
        updateProgram({
            variables: {id: program._id, ...formState}
        })
        console.log(formState)
    }


    return (
        <form onSubmit={handleFormSubmit}>
            <input 
                type="text"
                name="name"
                placeholder={program.name}
                value={formState.name}
                onChange={handleChange}/>
            <input type="text"
                name="beginDate"
                placeholder={program.beginDate}
                value={formState.beginDate}
                onChange={handleChange} />
            <input type="text"
                name="endDate"
                placeholder={program.endDate}
                onChange={handleChange} />
            <button type="submit">Submit Changes</button>
        </form>
    );

};