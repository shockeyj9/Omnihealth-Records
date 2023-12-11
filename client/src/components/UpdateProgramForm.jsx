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
       endDate: programData.endDate,}

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
        <form onSubmit={handleFormSubmit}>
            <input 
                type="text"
                name="name"
                placeholder={programData.name}
                value={formState.name}
                onChange={handleChange}/>
            <input type="text"
                name="electronic_id"
                placeholder={programData.electronic_id}
                value={formState.electronic_id}
                onChange={handleChange} />
            <input type="text"
                name="beginDate"
                placeholder={programData.beginDate}
                value={formState.beginDate}
                onChange={handleChange} />
            <input type="text"
                name="endDate"
                placeholder={programData.endDate}
                onChange={handleChange} />
            <button type="submit">Submit Changes</button>
        </form>
    );

};