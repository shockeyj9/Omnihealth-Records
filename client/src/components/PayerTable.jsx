import { Link } from 'react-router-dom';

export default function PayerTable({payers}){

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
                        <td>
                            
                        </td>
                        <td >{payer.beginDate}</td>
                        <td >{payer.endDate}</td>
                        <td >{payer.name}</td>
                        <td >{payer.electronic_id}</td>
                    </tr>
                ))}
        </tbody>
    )
};