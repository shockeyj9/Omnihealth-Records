import DynamicTable from "../components/DynamicTable";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_EMPLOYEES } from "../graphql/queries/employee";
import { DELETE_EMPLOYEE } from "../graphql/mutations/employee";
import { Link, Navigate } from "react-router-dom";
import Auth from "../utils/auth";

const Employees = () => {
  if (!Auth.loggedIn()) {
    return <Navigate to="/" />;
  }
  //Gets all Employees
  const { loading, data } = useQuery(QUERY_EMPLOYEES);
  const employeesData = data?.employees || [];

  //Object array for table headers and path for getting data
  const columns = [
    { heading: "Name", value: "demographics.name" },
    { heading: "Date of Birth", value: "demographics.dateOfBirth" },
    { heading: "Role", value: "demographics.role" },
    { heading: "Phone", value: "demographics.contactInfo.phone" },
    { heading: "Email", value: "demographics.contactInfo.email" }
  ];

  //Redirect path for Edit Button
  const linkTo = "/Employee";

  //Mutation for deleting payer
  const [removeEmployee, { errors }] = useMutation(DELETE_EMPLOYEE, {
    refetchQueries: [QUERY_EMPLOYEES, "employees"],
  });

  return (
    <main className="main flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h2 className="card-header bg-dark text-light p-2">
            Active Employees
          </h2>

          {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
              <DynamicTable 
                data={employeesData}
                column={columns}
                link={linkTo}
                deleteFunction={removeEmployee}
              />
              <button className="tablebtn addbtn">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/AddEmployee"
                >
                  Add New Employee
                </Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Employees;
