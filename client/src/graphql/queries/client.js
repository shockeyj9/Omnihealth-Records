import {gql} from '@apollo/client'

export const QUERY_CLIENTS = gql`
query clients {
    clients {
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

export const QUERY_CLIENT = gql`
query client($id: ID!) {
    client(_id: $id) {
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

