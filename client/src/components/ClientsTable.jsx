import { Link, useLocation } from "react-router-dom";
import { DELETE_CLIENT } from "../graphql/mutations/client";
import { QUERY_CLIENTS } from "../graphql/queries/client";
import { useMutation } from "@apollo/client";
export default function ClientsTable({ clients }) {

  const currentPage = useLocation().pathname;

  const [removeClient, { errors }] = useMutation(
    DELETE_CLIENT,
    {
      refetchQueries: [
        QUERY_CLIENTS,
        'clients'
      ]
    }
  );


  return (
    <div className="tablecontainer">
      <table className="table">
        <tbody className="tbody">
          <tr>
            <th></th>
            <th className="th titles">Client Name</th>
            <th className="th titles">Date of Birth:</th>
            <th className="th titles">Gender:</th>
            <th className="th titles"></th>
          </tr>
          {clients &&
            clients.map((client) => (
              <tr key={client._id}>
                <td className="th">
                  <button className="tablebtn">
                    <Link style={{ textDecoration: "none", color: "black" }}
                      className="btn btn-primary btn-block btn-squared"
                      to={`/Client/${client._id}`}
                    >
                      View ECR
                    </Link>
                  </button>
                </td>
                <td className="th td">{client.demographics.name}</td>
                <td className="th td">{client.demographics.dateOfBirth}</td>
                <td className="th td"> {client.demographics.gender}</td>
                <td className="th">
                  <button className="tablebtn" onClick={() => removeClient({ variables: { id: client._id } })}>
                    Delete Client ECR
                  </button>
                </td>

              </tr>
            ))}
        </tbody>
      </table>
      <button className="tablebtn addbtn">
            <Link style={{ textDecoration: "none", color: "black" }}
              to="/Admission"
              className={currentPage === '/Admission' ? 'nav-link active' : 'nav-link'}>
              Add New Client
            </Link>
          </button>
    </div>
  );
}
