import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_EMPLOYEE } from "../graphql/queries/employee";
import UpdateEmployeeForm from "../components/UpdateEmployeeForm";
import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth'

const SingleEmployee = () => {
  if (!Auth.loggedIn()) {
    return <Navigate to="/" />;
  }
  // Get Employee
  const { employeeId } = useParams();
  const { loading, error, data } = useQuery(QUERY_EMPLOYEE, {
    variables: { id: employeeId },
  });
  const employeeData = data?.employee || {};


  return (
    <>
      {loading || !employeeData.demographics.name ? (
        <div>Loading!!</div>
      ) : (
        <UpdateEmployeeForm 
        employee={employeeData} 
        
        />
      )}
    </>
  );
};

export default SingleEmployee;