import PayerTable from "../components/PayerTable";
import { useQuery } from '@apollo/client';
import { QUERY_PAYERS } from '../graphql/queries/payer';

const Payers = () => {
  const { loading, error, data } = useQuery(QUERY_PAYERS);
  const payers = data?.payers || [];



  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10"> 
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Active Payers</h4>
          <table>

          <PayerTable payers={payers}/>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Payers;
