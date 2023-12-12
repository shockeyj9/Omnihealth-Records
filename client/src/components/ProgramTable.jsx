import { Link, useLocation } from "react-router-dom";
import { useProgramContext } from '../utils/contexts/ProgramContext';
import { DELETE_PROGRAM } from "../graphql/mutations/program";
import { QUERY_PROGRAM } from "../graphql/queries/program";
import { useMutation } from "@apollo/client";

export default function ProgramTable({ programs }) {

  const currentPage = useLocation().pathname;

  const [removeProgram, { errors }] = useMutation(
    DELETE_PROGRAM,
    {
      refetchQueries: [
        QUERY_PROGRAM,
        'programs'
      ]
    }
  );


  return (
    <div className="tablecontainer">
      <table className="table">
        <tbody className="tbody">
          <tr>
            <th></th>
            <th className="th titles">Begin Date:</th>
            <th className="th titles">End Date:</th>
            <th className="th titles">Name:</th>
            <th></th>
          </tr>
          {programs &&
            programs.map((program) => (
              <tr key={program._id}>
                <td className="th">
                  <button className="tablebtn">
                    <Link style={{ textDecoration: "none", color: "black" }}
                      className="btn btn-primary btn-block btn-squared"
                      to={`/Program/${program._id}`}
                    >
                      Edit
                    </Link>
                  </button>
                </td>
                <td className="th td">{program.beginDate}</td>
                <td className="th td">{program.endDate}</td>
                <td className="th td">{program.name}</td>
                <td className="th">
                  <button className="tablebtn" onClick={() => removeProgram({ variables: { id: program._id } })}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <button className="tablebtn addbtn">
            <Link style={{ textDecoration: "none", color: "black" }}
              to="/AddProgram"
              className={currentPage === '/AddProgram' ? 'nav-link active' : 'nav-link'}>
              Add
            </Link>
          </button>
    </div>
  );
}
