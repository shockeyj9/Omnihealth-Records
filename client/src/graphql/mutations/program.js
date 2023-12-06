import {gql} from '@apollo/client'

export const ADD_PROGRAM = gql`
mutation AddProgram($name: String!, $beginDate: DateTime!, $endDate: DateTime) {
    addProgram(name: $name, beginDate: $beginDate, endDate: $endDate) {
      _id
      name
      beginDate
      endDate
    }
  }
`;

export const UPDATE_PAYER = gql`
mutation UpdateProgram($id: ID!, $name: String!, $beginDate: DateTime!, $endDate: DateTime) {
    updateProgram(_id: $id, name: $name, beginDate: $beginDate, endDate: $endDate) {
      _id
      name
      beginDate
      endDate
    }
  }
`;

export const DELETE_PAYER = gql`
mutation RemoveProgram($id: ID!) {
    removeProgram(_id: $id) {
      _id
      name
      beginDate
      endDate
    }
  }
`;