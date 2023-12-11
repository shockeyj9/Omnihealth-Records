import { Link, useLocation } from "react-router-dom";
import { usePayerContext } from '../utils/contexts/PayerContext';
import { DELETE_PAYER } from "../graphql/mutations/payer";
import { QUERY_PAYER } from "../graphql/queries/payer";
import { useMutation } from "@apollo/client";

export default function PayerTable({payers}) {

  const currentPage = useLocation().pathname;

  const [removePayer, { errors }] = useMutation(
    DELETE_PAYER,    
    {refetchQueries: [
    QUERY_PAYER,
    'payers'
    ]}
  );


  return (
    <tbody>
      <tr>
        <th></th>
        <th>Begin Date:</th>
        <th>End Date:</th>
        <th>Name:</th>
        <th>Electronic Id:</th>
        <th></th>
      </tr>
      {payers &&
        payers.map((payer) => (
          <tr key={payer._id}>
            <td>
                <button>
               <Link
                    className="btn btn-primary btn-block btn-squared"
                    to={`/Payer/${payer._id}`}
                >
                    Edit
                </Link>
                </button>
            </td>
            <td>{payer.beginDate}</td>
            <td>{payer.endDate}</td>
            <td>{payer.name}</td>
            <td>{payer.electronic_id}</td>
            <td>
              <button onClick={()=>removePayer({variables:{id:payer._id}})}>
                Delete
              </button>
            </td>

          </tr>
        ))}
         <button>
                <Link
                to="/AddPayer"
                className={currentPage === '/AddPayer' ? 'nav-link active' : 'nav-link'}>
                  Add
                </Link>
              </button>
    </tbody>
  );
}
