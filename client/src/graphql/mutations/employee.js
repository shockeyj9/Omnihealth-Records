import {gql} from '@apollo/client'

export const ADD_EMPLOYEE = gql`
mutation addEmployee($demographics: EmpDemographicsInput!, $supervisors: SupervisorsInput) {
    addEmployee(demographics: $demographics, supervisors: $supervisors) {
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
  }`;

  export const UPDATE_EMPLOYEE = gql`
  mutation updateEmployee($id: ID!, $demographics: EmpDemographicsInput, $supervisors: SupervisorsInput) {
    updateEmployee(_id: $id, demographics: $demographics, supervisors: $supervisors) {
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
  }`;
  export const DELETE_EMPLOYEE = gql`
  mutation deleteEmployee($id: ID!) {
    deleteEmployee(_id: $id) {
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
  }`;