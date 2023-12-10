import { ProgramProvider } from '../utils/contexts/ProgramContext';
import UpdateProgramForm from '../components/UpdateProgramForm'
import { useParams } from "react-router-dom";
import { useQuery,useMutation } from "@apollo/client";
import { QUERY_PROGRAM } from "../graphql/queries/program";
import { UPDATE_PROGRAM } from "../graphql/mutations/program";


const SingleProgram = () => {
  const { programId } = useParams();
  const { loading, error, data } = useQuery(QUERY_PROGRAM, {variables: {id: programId}});
  const programData = data?.program || [];
 
  const [updateProgram, { errors }] = useMutation(UPDATE_PROGRAM);


  return (

          <UpdateProgramForm program={programData}
          updateProgram={updateProgram}/>

  );
};

export default SingleProgram;