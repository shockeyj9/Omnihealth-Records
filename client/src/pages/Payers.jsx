import PayerTable from "../components/PayerTable";

import { useQuery } from "@apollo/client";
import { QUERY_PAYERS } from "../graphql/queries/payer";

 
const Payers = () => {

    //Gets all Payers
    const { loading, data } = useQuery(QUERY_PAYERS);
    const payersData = data?.payers || [];

    


  return (
    <main className="main flex-row justify-center mb-4">
      <div className="col-12 col-lg-10"> 
        <div className="card">
          <h2 className="card-header bg-dark text-light p-2">Payers</h2>

          {loading? (
             <div>Loading...</div>
          ): (

          

          <PayerTable 
          payers={payersData}
           />

          
          )}
        </div>
      </div>
    </main>
  );
};

export default Payers;
