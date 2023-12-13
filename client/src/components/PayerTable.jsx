import { Link, useLocation } from "react-router-dom";
import { usePayerContext } from '../utils/contexts/PayerContext';
import { DELETE_PAYER } from "../graphql/mutations/payer";
import { QUERY_PAYER } from "../graphql/queries/payer";
import { useMutation } from "@apollo/client";

export default function PayerTable({ payers }) {

  const currentPage = useLocation().pathname;

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
    <div className="tablecontainer">
      <table className="table">
        <tbody className="tbody">
          <tr>
            <th></th>
            <th className="th titles">Begin Date:</th>
            <th className="th titles">End Date:</th>
            <th className="th titles">Name:</th>
            <th className="th titles">Electronic Id:</th>
            <th className="th titles"></th>
          </tr>
          {payers &&
            payers.map((payer) => (
              <tr key={payer._id}>
                <td className="th">
                  <button className="tablebtn">
                    <Link style={{ textDecoration: "none", color: "black" }}
                      className="btn btn-primary btn-block btn-squared"
                      to={`/Payer/${payer._id}`}
                    >
                      Edit
                    </Link>
                  </button>
                </td>
                <td className="th td">{payer.beginDate}</td>
                <td className="th td">{payer.endDate}</td>
                <td className="th td"> {payer.name}</td>
                <td className="th td">{payer.electronic_id}</td>
                <td className="th">
                  <button className="tablebtn" onClick={() => removePayer({ variables: { id: payer._id } })}>
                    Delete
                  </button>
                </td>

              </tr>
            ))}
        </tbody>
      </table>
      <button className="tablebtn addbtn">
            <Link style={{ textDecoration: "none", color: "black" }}
              to="/AddPayer"
              className={currentPage === '/AddPayer' ? 'nav-link active' : 'nav-link'}>
              Add New Payer
            </Link>
          </button>
    </div>
  );
}
