import {gql} from '@apollo/client'

export const QUERY_PROGRAMS = gql`
query programs {
    programs {
      _id
      name
      beginDate
      endDate
    }
  }
`;

export const QUERY_PROGRAM = gql`
query program($id: ID!) {
    program(_id: $id) {
      _id
      name
      beginDate
      endDate
    }
  }
`;

