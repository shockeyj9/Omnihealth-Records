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
        <div className = "add-new">
        <h2 className="card-header">Update Payer Form</h2>
        <form onSubmit={handleFormSubmit}>
            <label name="name">Payer Name:</label>
            <input 
                className="form-input"
                type="text"
                name="name"
                placeholder={payerData.name}
                value={formState.name}
                onChange={handleChange}/>
            <label name="beginDate">Begin Date:</label>
            <input type="text"
                className="form-input"
                name="beginDate"
                placeholder={payerData.beginDate}
                value={formState.beginDate}
                onChange={handleChange} />
            <label name="endDate">End Date:</label>
            <input type="text"
                className="form-input"
                name="endDate"
                placeholder={payerData.endDate}
                onChange={handleChange} />
            <button className="addbtn" type="submit">Submit Changes</button>
        </form>
        </div>
    );

};