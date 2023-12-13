import {gql} from '@apollo/client'

export const QUERY_PAYERS = gql`
query payers {
    payers {
      _id
      name
      electronic_id
      beginDate
      endDate
    }
  }
`;

export const QUERY_PAYER = gql`
query payer($id: ID!) {
    payer(_id: $id) {
      _id
      name
      electronic_id
      beginDate
      endDate
    }
  }
`;
