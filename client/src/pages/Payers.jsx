import PayerTable from "../components/PayerTable";
import { DELETE_PAYER } from "../graphql/mutations/payer";
import { QUERY_PAYER } from "../graphql/queries/payer";

import { useQuery,useMutation } from "@apollo/client";
import { QUERY_PAYERS } from "../graphql/queries/payer";
import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth'
import DynamicTable from "../components/DynamicTable";
 
const Payers = () => {
  if (!Auth.loggedIn()) {
    return <Navigate to="/" />;
  }
    //Gets all Payers
    const { loading, data } = useQuery(QUERY_PAYERS);
    const payersData = data?.payers || [];

    const columns = [
      {heading: 'Begin Date', value: 'beginDate'},
      {heading: 'End Date', value: 'endDate'},
      {heading: 'Name', value: 'name'},
      {heading: 'Electronic ID', value: 'electronic_id'}
    ]
    const linkTo = '/Payer'
    const [removePayer, { errors }] = useMutation(
      DELETE_PAYER,
      {
        refetchQueries: [
          QUERY_PAYER,
          'payers'
        ]
      }
    );

  return (
    <main className="main flex-row justify-center mb-4">
      <div className="col-12 col-lg-10"> 
        <div className="card">
          <h2 className="card-header bg-dark text-light p-2">Payers</h2>

          {loading? (
             <div>Loading...</div>
          ): (

          
          <DynamicTable 
            data={payersData}
            column={columns} 
            link={linkTo}
            deleteFunction={removePayer}
          />

          
          )}
        </div>
      </div>
    </main>
  );
};

export default Payers;
