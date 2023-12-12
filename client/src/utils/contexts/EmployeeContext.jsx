import { createContext, useContext, useState,useReducer } from 'react';
import { useQuery,useMutation } from "@apollo/client";
import {QUERY_EMPLOYEES } from "../../graphql/queries/employee";
import { UPDATE_EMPLOYEE} from "../../graphql/mutations/employee";
import reducer from '../reducers';

const EmployeeContext = createContext();
export const useEmployeeContext = () => useContext(EmployeeContext);


export const EmployeeProvider = ({ children }) => {
  
  //Gets all Employees
    const { loading, data } = useQuery;
    const employeesData = data?.employees || [];
    const [employees, setEmployees] = useState(employeesData)

  //Gets employee by ID
    const getEmployee = (id) => {
      const { loading, error, data } = useQuery(QUERY_EMPLOYEES, {variables: {id: id}});
      const employeeData = data?.employee || [];
      const [employee, setEmployee] = useState(employeeData)
      return employee
      };

    const [updateEmployee, { errors }] = useMutation(UPDATE_EMPLOYEE);

    const [state, dispatch] = useReducer(reducer, { 
      employees,
      getEmployee,
      updateEmployee
    });

    return (
        <EmployeeContext.Provider
          value={[state, dispatch]}       >
          {children}
        </EmployeeContext.Provider>
      );
}