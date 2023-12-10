import { PayerProvider } from '../utils/contexts/PayerContext';
import UpdatePayerForm from '../components/UpdatePayerForm'
import { useParams } from "react-router-dom";
import { useQuery,useMutation } from "@apollo/client";
import { QUERY_PAYER } from "../graphql/queries/payer";
import { UPDATE_PAYER } from "../graphql/mutations/payer";


const SinglePayer = () => {
  const { payerId } = useParams();
  const { loading, error, data } = useQuery(QUERY_PAYER, {variables: {id: payerId}});
  const payerData = data?.payer || [];
 
  const [updatePayer, { errors }] = useMutation(UPDATE_PAYER);


  return (

          <UpdatePayerForm payer={payerData}
          updatePayer={updatePayer}/>

  );
};

export default SinglePayer;
