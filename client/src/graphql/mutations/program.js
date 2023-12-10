import {gql} from '@apollo/client'

export const ADD_PROGRAM = gql`
mutation addProgram($name: String!, $beginDate: DateTime!, $endDate: DateTime) {
    addProgram(name: $name, beginDate: $beginDate, endDate: $endDate) {
      _id
      name
      beginDate
      endDate
    }
  }
`;

export const UPDATE_PROGRAM = gql`
mutation updateProgram($id: ID!, $name: String!, $beginDate: DateTime!, $endDate: DateTime) {
    updateProgram(_id: $id, name: $name, beginDate: $beginDate, endDate: $endDate) {
      _id
      name
      beginDate
      endDate
    }
  }
`;

export const DELETE_PROGRAM = gql`
mutation removeProgram($id: ID!) {
    removeProgram(_id: $id) {
      _id
      name
      beginDate
      endDate
    }
  }
`;