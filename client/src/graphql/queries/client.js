import {gql} from '@apollo/client'

export const QUERY_CLIENTS = gql`
query Query {
  clients {
    _id
    demographics {
      addresses {
        endDate
        mailing
        physical
        startDate
      }
      contactInfo {
        phone
        email
      }
      dateOfBirth
      ethnicity
      gender
      name
      occupation
      race
      sex
    }
    insurance {
      beginDate
      endDate
      payerId {
        name
      }
      priority
    }
    programManagement {
      beginDate
      endDate
      program_id {
        name
      }
    }
  }
}

`;

export const QUERY_CLIENT = gql`
query Query($id: ID!) {
  client(_id: $id) {
    _id
    demographics {
      addresses {
        endDate
        mailing
        physical
        startDate
      }
      contactInfo {
        email
        phone
      }
      dateOfBirth
      ethnicity
      gender
      name
      occupation
      race
      sex
    }
    insurance {
      beginDate
      endDate
      payerId {
        name
      }
      priority
      subscriber {
        addresses {
          endDate
          mailing
          physical
          startDate
        }
        dateOfBirth
        name
        relationshipToPatient
      }
    }
    programManagement {
      beginDate
      endDate
      program_id {
        name
      }
    }
  }
}

`;

export const QUERY_SEARCHBAR = gql`
query searchBar {
  clients {
    _id
    demographics {
      name
    }
  }
}
`;

