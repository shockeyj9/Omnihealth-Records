import React from "react";
import { useState } from 'react';
import { useQuery } from "@apollo/client";
import { QUERY_PAYERS } from "../graphql/queries/payer";

const PayerDropdown = ({specificPayer}) => {

    const { loading, data } = useQuery(QUERY_PAYERS);
    const payersData = data?.payers || [];
   
    const [payer, setPayer] = useState()
    // setPayer to payersData.name?

    const changePayer = (event) => {
        setPayer(event.target.value);
        console.log(event.target.value);

    }
    return (
        <div className="dropdown-menu">
            <select value={payer} onChange={changePayer}>
            <option key  = "header">{specificPayer? specificPayer:'--payer--'}</option>
           {payersData.map((data) => (
             <option key={data._id} value={data._id}>{data.name}</option>
           ))}
           </select>
        </div>
    );
};

export default PayerDropdown;


// other dropdown set up
// {payersData
//     ? payersData.map((data) => {
//      return 
//      <option key={data.id} value={data.id}>{data.name}</option>
//     })
//     : null }