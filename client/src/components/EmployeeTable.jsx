import { Link, useLocation } from "react-router-dom";
import { useEmployeeContext } from '../utils/contexts/EmployeeContext';
import { DELETE_EMPLOYEE } from "../graphql/mutations/employee";
import { QUERY_EMPLOYEE } from "../graphql/queries/employee";
import { useMutation } from "@apollo/client";

export default function EmployeeTable({ employees }) {

  const currentPage = useLocation().pathname;

  const [removeEmployee, { errors }] = useMutation(
    DELETE_EMPLOYEE,
    {
      refetchQueries: [
        QUERY_EMPLOYEE,
        'employees'
      ]
    }
  );


  return (
    <div className="tablecontainer">
      <table className="table">
        <tbody className="tbody">
          <tr>
            <th></th>
            <th className="th titles">Name:</th>
            <th className="th titles">Date of Birth:</th>
            {/* <th className="th titles">Sex:</th>
            <th className="th titles">Gender:</th>
            <th className="th titles">Race:</th>
            <th className="th titles">Ethnicity:</th> */}
            <th className="th titles">Role:</th>
            <th className="th titles">Phone:</th>
            <th className="th titles">Email:</th>
            <th className="th titles">Mailing Add.:</th>
            <th className="th titles">Physical Add.:</th>
            {/* <th className="th titles">Start Date:</th>
            <th className="th titles">End Date:</th> */}
            {/* <th className="th titles">Supervisor Id:</th>
            <th className="th titles">Start Date:</th>
            <th className="th titles">End Date:</th> */}
            <th></th>
          </tr>
          {employees &&
            employees.map((employee) => (
              <tr key={employee._id}>
                <td className="th">
                  <button className="tablebtn">
                    <Link style={{ textDecoration: "none", color: "black" }}
                      className="btn btn-primary btn-block btn-squared"
                      to={`/Employee/${employee._id}`}
                    >
                      Edit
                    </Link>
                  </button>
                </td>
                <td className="th td">{employee.demographics.name}</td>
                <td className="th td">{employee.demographics.dateOfBirth}</td>
                {/* <td className="th td">{employee.demographics.sex}</td>
                <td className="th td">{employee.demographics.gender}</td>
                <td className="th td">{employee.demographics.race}</td>
                <td className="th td">{employee.demographics.ethnicity}</td> */}
                <td className="th td">{employee.demographics.role}</td>
                <td className="th td">{employee.demographics.contactInfo.phone}</td>
                <td className="th td">{employee.demographics.contactInfo.email}</td>
                <td className="th td">{employee.demographics.addresses[0].mailing}</td>
                <td className="th td">{employee.demographics.addresses[0].physical}</td>
                {/* <td className="th td">{employee.demographics.addresses[0].startDate}</td>
                <td className="th td">{employee.demographics.addresses[0].endDate}</td>
                <td className="th td">{employee.supervisors[0].supervisor_id}</td>
                <td className="th td">{employee.supervisors[0].startDate}</td>
                <td className="th td">{employee.supervisors[0].endDate}</td> */}
                <td className="th">
                  <button className="tablebtn" onClick={() => removeEmployee({ variables: { id: employee._id } })}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
         
        </tbody>
      </table>
      <button className="tablebtn addbtn">
            <Link style={{ textDecoration: "none", color: "black" }}
              to="/AddEmployee"
              className={currentPage === '/AddEmployee' ? 'nav-link active' : 'nav-link'}>
              Add New Employee
            </Link>
          </button>
    </div>
  );
}
