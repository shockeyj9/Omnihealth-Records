import {gql} from '@apollo/client'

export const ADD_CLIENT = gql`
mutation addClient($demographics: DemographicsInput!, $insurance: InsuranceInput, $programManagement: ProgramManagementInput) {
    addClient(demographics: $demographics, insurance: $insurance, programManagement: $programManagement) {
      _id
      demographics {
        name
        dateOfBirth
        sex
        gender
        race
        ethnicity
        occupation
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
      insurance {
        payerId
        priority
        subscriber {
          relationshipToPatient
          name
          dateOfBirth
          addresses {
            mailing
            physical
            startDate
            endDate
          }
        }
        beginDate
        endDate
      }
      programManagement {
        program_id
        beginDate
        endDate
      }
    }
  }
`;

export const UPDATE_CLIENT = gql`
mutation updateClient($id: ID!, $demographics: DemographicsInput!, $insurance: InsuranceInput, $programManagement: ProgramManagementInput) {
    updateClient(_id: $id, demographics: $demographics, insurance: $insurance, programManagement: $programManagement) {
      _id
      demographics {
        name
        dateOfBirth
        sex
        gender
        race
        ethnicity
        occupation
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
      insurance {
        payerId
        priority
        subscriber {
          relationshipToPatient
          name
          dateOfBirth
          addresses {
            mailing
            physical
            startDate
            endDate
          }
        }
        beginDate
        endDate
      }
      programManagement {
        program_id
        beginDate
        endDate
      }
    }
  }
`;

export const DELETE_CLIENT = gql`
mutation Mutation($id: ID!) {
    removeClient(_id: $id) {
      _id
      demographics {
        name
        dateOfBirth
        sex
        gender
        race
        ethnicity
        occupation
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
      insurance {
        payerId
        priority
        subscriber {
          relationshipToPatient
          name
          dateOfBirth
          addresses {
            mailing
            physical
            startDate
            endDate
          }
        }
        beginDate
        endDate
      }
      programManagement {
        program_id
        beginDate
        endDate
      }
    }
  }
`;