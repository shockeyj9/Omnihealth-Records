import { gql } from '@apollo/client'

export const QUERY_EMPLOYEES = gql`
query employees {
  employees {
    _id
    demographics {
      name
      dateOfBirth
      role
      contactInfo {
        phone
        email
      }
      addresses {
        mailing
        physical
      }
    }
  }
}

`;

export const QUERY_EMPLOYEE = gql`
query employee($id: ID!) {
  employee(_id: $id) {
    _id
    demographics {
      addresses {
        mailing
        physical
        startDate
        endDate
      }
      contactInfo {
        phone
        email
      }
      dateOfBirth
      ethnicity
      gender
      name
      race
      role
      sex
    }
    supervisors {
      endDate
      startDate
      supervisor_id {
        _id
      }
    }
  }
}


`;

