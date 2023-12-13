import EmployeeTable from "../components/EmployeeTable";
import { useState } from 'react';
import { useQuery } from "@apollo/client";
import { QUERY_EMPLOYEES } from "../graphql/queries/employee";

 
const Employees = () => {

    //Gets all Employees
    const { loading, data } = useQuery(QUERY_EMPLOYEES);
    const employeesData = data?.employees || [];
    


  return (
    <main className="main flex-row justify-center mb-4">
      <div className="col-12 col-lg-10"> 
        <div className="card">
          <h2 className="card-header bg-dark text-light p-2">Active Employees</h2>

          {loading? (
             <div>Loading...</div>
          ): (

          

          <EmployeeTable 
          employees={employeesData}
           />

          
          )}
        </div>
      </div>
    </main>
  );
};

export default Employees;
