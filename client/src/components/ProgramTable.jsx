import { Link } from "react-router-dom";
import { useProgramContext } from '../utils/contexts/ProgramContext';


export default function ProgramTable({programs}) {


  return (
    <tbody>
      <tr>
        <th>Begin Date:</th>
        <th>End Date:</th>
        <th>Name:</th>
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
          </tr>
        ))}
    </tbody>
  );
}
