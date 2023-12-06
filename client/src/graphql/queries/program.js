import {gql} from '@apollo/client'

export const QUERY_PROGRAMS = gql`
query getPrograms {
    programs {
      _id
      name
      beginDate
      endDate
    }
  }
`;

export const QUERY_PROGRAM = gql`
query getProgram($id: ID!) {
    program(_id: $id) {
      _id
      name
      beginDate
      endDate
    }
  }
`;

