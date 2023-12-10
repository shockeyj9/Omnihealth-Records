import { useQuery } from '@apollo/client';
import { QUERY_PROGRAMS } from '../graphql/queries/program';

export default function Programs() {
    const { loading, error, data } = useQuery(QUERY_PROGRAMS);
    const programs = data?.programs || [];
    return (
        <main className="flex-row justify-center mb-4">
            <div className="col-12 col-lg-10">
                <div className="card">
                    <h4 className="card-header bg-dark text-light p-2">Active Programs</h4>
                    <table>
                        <tbody>
                            <tr>
                                <th>Begin Date:</th>
                                <th>End Date:</th>
                                <th>Name:</th>
                            </tr>
                            {programs && programs.map((program) => (
                                <tr key={program._id}>
                                    <td >{program.beginDate}</td>
                                    <td >{program.endDate}</td>
                                    <td >{program.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
};














