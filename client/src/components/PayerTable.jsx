import { Link } from "react-router-dom";
import { usePayerContext } from '../utils/contexts/PayerContext';


export default function PayerTable({payers}) {


  return (
    <tbody>
      <tr>
        <th>Begin Date:</th>
        <th>End Date:</th>
        <th>Name:</th>
        <th>Electronic Id:</th>
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
          </tr>
        ))}
    </tbody>
  );
}
