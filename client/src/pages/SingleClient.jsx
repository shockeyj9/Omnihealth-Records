import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_CLIENT } from "../graphql/queries/client";
import ClientECR from "../components/ClientECR";


const SingleClient = () => {

  const { clientId } = useParams();
  const { loading, error, data } = useQuery(QUERY_CLIENT, {
    variables: { id: clientId },
  });
  const clientData = data?.client || {};



  return (
    <>
      {loading || !clientData.demographics.name ? (
        <div>Loading!!</div>
      ) : (
        <ClientECR 
        client={clientData} 
        
        />
      )}
    </>
  );
};
export default SingleClient;
