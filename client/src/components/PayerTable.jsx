import { useQuery } from '@apollo/client';
import { QUERY_PAYERS } from '../graphql/queries/payer';

export default function PayerTable(){
    const { loading, error, data } = useQuery(QUERY_PAYERS);
    const payers = data?.payers || [];
    console.log(payers)

    return (
        <tbody>
            <tr>
            {/* FOR EACH HEADER CREATE A 'th' ELEMENT*/}
            <th>Header</th>
            </tr>
            <tr>
                <td >data here</td>
            </tr>
            {/* FOR EACH ROW IN THE TABLE CREATE A TR WITH A TD ELEMENT */}
        </tbody>
    )
};