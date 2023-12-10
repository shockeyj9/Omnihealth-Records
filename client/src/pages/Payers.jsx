import PayerTable from "../components/PayerTable";
import { useState } from 'react';
import { useQuery } from "@apollo/client";
import { QUERY_PAYERS } from "../graphql/queries/payer";

 
const Payers = () => {

    //Gets all Payers
    const { loading, data } = useQuery(QUERY_PAYERS);
    const payersData = data?.payers || [];
    const [payers, setPayers] = useState(payersData)

    //Sets up Update mutation function
    


  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10"> 
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Active Payers</h4>

          {loading? (
             <div>Loading...</div>
          ): (

          <table>

          <PayerTable 
          payers={payersData}
           />

          </table>
          )}
        </div>
      </div>
    </main>
  );
};

export default Payers;
