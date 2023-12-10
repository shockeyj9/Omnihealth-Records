import { usePayerContext } from "../utils/contexts/PayerContext";

import { useState } from 'react';
import { UPDATE_PAYER } from '../utils/actions';


export default function UpdatePayerForm({payer,updatePayer}) {

    const [formState, setformState] = useState(
  {     id: payer._id,
       name: payer.name,
       electronicId: payer.electronic_id,
       beginDate: payer.beginDate,
       endDate: payer.endDate,}
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
        updatePayer({
            variables: {id: payer._id, ...formState}
        })
        console.log(formState)
    }


    return (
        <form onSubmit={handleFormSubmit}>
            <input 
                type="text"
                name="name"
                placeholder={payer.name}
                value={formState.name}
                onChange={handleChange}/>
            <input type="text"
                name="electronic_id"
                placeholder={payer.electronic_id}
                value={formState.electronic_id}
                onChange={handleChange} />
            <input type="text"
                name="beginDate"
                placeholder={payer.beginDate}
                value={formState.beginDate}
                onChange={handleChange} />
            <input type="text"
                name="endDate"
                placeholder={payer.endDate}
                onChange={handleChange} />
            <button type="submit">Submit Changes</button>
        </form>
    );

};