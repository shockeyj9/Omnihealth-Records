import { useProgramContext } from "../utils/contexts/ProgramContext";
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { useQuery,useMutation } from "@apollo/client";
import { QUERY_PROGRAM } from "../graphql/queries/program";
import { UPDATE_PROGRAM } from "../graphql/mutations/program";


export default function UpdateProgramForm() {
    const { programId } = useParams();
    const { loading, error, data } = useQuery(QUERY_PROGRAM, {variables: {id: programId}});
    const programData = data?.program || [];
   
    const [updateProgram, { errors }] = useMutation(UPDATE_PROGRAM);

    const [formState, setformState] = useState(

  {     id: programData._id,
       name: programData.name,
       beginDate: programData.beginDate,
       endDate: programData.endDate,
    }

    );


    const handleChange = (event) => {
        const { name, value } = event.target;
        setformState({
            ...formState, [name]:value
        })
        
      };
    
    const handleFormSubmit = (event)=>{
        event.preventDefault();
        updateProgram({
            variables: {id: programData._id, ...formState}
        })
        window.location.replace('/Programs')
    }


    return (
        <div className = "add-new">
        <h2 className="card-header">Update Program Form</h2>
        <form onSubmit={handleFormSubmit}>
            <input 
                className="form-input"
                type="text"
                name="name"
                placeholder={programData.name}
                value={formState.name}
                onChange={handleChange}/>
            <input type="text"
                className="form-input"
                name="beginDate"
                placeholder={programData.beginDate}
                value={formState.beginDate}
                onChange={handleChange} />
            <input type="text"
                className="form-input"
                name="endDate"
                placeholder={programData.endDate}
                value={formState.endDate}
                onChange={handleChange} />
            <button className="addbtn" type="submit">Submit Changes</button>
        </form>
        </div>
    );

};