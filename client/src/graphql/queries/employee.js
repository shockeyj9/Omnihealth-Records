import { gql } from '@apollo/client'

export const QUERY_EMPLOYEES = gql`
query employees {
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
      supervisors {
        supervisor_id
        startDate
        endDate
      }
    }
  }
`;

export const QUERY_EMPLOYEE = gql`
query employee($id: ID!) {
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

