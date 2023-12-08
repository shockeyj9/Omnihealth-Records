import { useQuery } from '@apollo/client';
import { QUERY_PAYERS } from '../graphql/queries/payer';

export default function PayerTable(){
    const { loading, error, data } = useQuery(QUERY_PAYERS);
    const payers = data?.payers || [];
    return (
        <tbody>
            <tr>
            <th>Begin Date:</th>
            <th>End Date:</th>
            <th>Name:</th>
            <th>Electronic Id:</th>
            </tr>
                {payers && payers.map((payer)=>(
                    <tr key={payer._id}>
                        <td >{payer.beginDate}</td>
                        <td >{payer.endDate}</td>
                        <td >{payer.name}</td>
                        <td >{payer.electronic_id}</td>
                    </tr>
                ))}
        </tbody>
    )
};