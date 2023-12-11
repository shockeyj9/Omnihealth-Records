import { usePayerContext } from "../utils/contexts/PayerContext";
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { useQuery,useMutation } from "@apollo/client";
import { QUERY_PAYER } from "../graphql/queries/payer";
import { UPDATE_PAYER } from "../graphql/mutations/payer";


export default function UpdatePayerForm() {
    const { payerId } = useParams();
    const { loading, error, data } = useQuery(QUERY_PAYER, {variables: {id: payerId}});
    const payerData = data?.payer || [];
   
    const [updatePayer, { errors }] = useMutation(UPDATE_PAYER);

    const [formState, setformState] = useState(

  {     id: payerData._id,
       name: payerData.name,
       electronic_id: payerData.electronic_id,
       beginDate: payerData.beginDate,
       endDate: payerData.endDate,}

    );


    const handleChange = (event) => {
        const { name, value } = event.target;
        setformState({
            ...formState, [name]:value
        })
        
      };
    
    const handleFormSubmit = (event)=>{
        event.preventDefault();
        updatePayer({
            variables: {id: payerData._id, ...formState}
        })
        window.location.replace('/Payers')
    }


    return (
        <form onSubmit={handleFormSubmit}>
            <input 
                type="text"
                name="name"
                placeholder={payerData.name}
                value={formState.name}
                onChange={handleChange}/>
            <input type="text"
                name="beginDate"
                placeholder={payerData.beginDate}
                value={formState.beginDate}
                onChange={handleChange} />
            <input type="text"
                name="endDate"
                placeholder={payerData.endDate}
                onChange={handleChange} />
            <button type="submit">Submit Changes</button>
        </form>
    );

};