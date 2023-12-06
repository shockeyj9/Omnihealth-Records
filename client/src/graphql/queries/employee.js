import {gql} from '@apollo/client'

export const QUERY_EMPLOYEES = gql`
query getEmployees {
    employees {
      _id
      demographics {
        name
        dateOfBirth
        sex
        gender
        race
        ethnicity
        role
        contactInfo {
          phone
          email
        }
        addresses {
          mailing
          physical
          startDate
          endDate
        }
      }
    }
  }
`;

export const QUERY_EMPLOYEE = gql`
query getEmployee($id: ID!) {
    employee(_id: $id) {
      _id
      demographics {
        name
        dateOfBirth
        sex
        gender
        race
        ethnicity
        role
        contactInfo {
          phone
          email
        }
        addresses {
          mailing
          physical
          startDate
          endDate
        }
      }
      supervisors {
        supervisor_id
        startDate
        endDate
      }
    }
  }
`;

