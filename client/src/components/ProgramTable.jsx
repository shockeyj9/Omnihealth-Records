import { Link } from "react-router-dom";
import { useProgramContext } from '../utils/contexts/programContext';
import { DELETE_PROGRAM } from "../graphql/mutations/program";
import { QUERY_PROGRAM } from "../graphql/queries/program";
import { useMutation } from "@apollo/client";

export default function ProgramTable({programs}) {
  const [removeProgram, { errors }] = useMutation(
    DELETE_PROGRAM,    
    {refetchQueries: [
    QUERY_PROGRAM,
    'programs'
    ]}
  );


  return (
    <tbody>
      <tr>
        <th></th>
        <th>Begin Date:</th>
        <th>End Date:</th>
        <th>Name:</th>
        <th></th>
      </tr>
      {programs &&
        programs.map((program) => (
          <tr key={program._id}>
            <td>
                <button>
               <Link
                    className="btn btn-primary btn-block btn-squared"
                    to={`/Program/${program._id}`}
                >
                    Edit
                </Link>
                </button>
            </td>
            <td>{program.beginDate}</td>
            <td>{program.endDate}</td>
            <td>{program.name}</td>
            <td>{program.electronic_id}</td>
            <td>
              <button onClick={()=>removeProgram({variables:{id:program._id}})}>
                Delete
              </button>
            </td>

          </tr>
        ))}
    </tbody>
  );
}
