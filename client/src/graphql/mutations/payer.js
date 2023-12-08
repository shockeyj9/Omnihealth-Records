import {gql} from '@apollo/client'

export const ADD_PAYER = gql`
mutation addPayer($name: String!, $beginDate: DateTime!, $electronicId: String, $endDate: DateTime) {
    addPayer(name: $name, beginDate: $beginDate, electronic_id: $electronicId, endDate: $endDate) {
      _id
      name
      electronic_id
      beginDate
      endDate
    }
  }
`;


export const UPDATE_PAYER = gql`
mutation updatePayer($id: ID!, $name: String!, $beginDate: DateTime!, $electronicId: String, $endDate: DateTime) {
    updatePayer(_id: $id, name: $name, beginDate: $beginDate, electronic_id: $electronicId, endDate: $endDate) {
      _id
      name
      electronic_id
      beginDate
      endDate
    }
  }
`;

export const DELETE_PAYER = gql`
mutation removePayer($id: ID!) {
    removePayer(_id: $id) {
      _id
      name
      electronic_id
      beginDate
      endDate
    }
  }
`;