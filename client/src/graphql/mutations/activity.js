import {gql} from '@apollo/client'

export const ADD_ACTIVITY = gql`
mutation addActivity($name: String!, $procedureCode: ProcedureInput!, $document: DocumentInput, $beginDate: DateTime!, $endDate: DateTime, $programs: [ProgramInput], $payers: [PayerInput]) {
    addActivity(name: $name, procedureCode: $procedureCode, document: $document, beginDate: $beginDate, endDate: $endDate, programs: $programs, payers: $payers) {
      _id
      name
      procedureCode {
        code
        fee
      }
      document {
        name
      }
      beginDate
      endDate
      programs {
        _id
      }
      payers {
        _id
      }
    }
  }
`;

export const UPDATE_ACTIVITY = gql`
mutation updateActivity($id: ID!, $name: String, $procedureCode: ProcedureInput, $document: DocumentInput, $beginDate: DateTime, $endDate: DateTime, $programs: [ProgramInput], $payers: [PayerInput]) {
    updateActivity(_id: $id, name: $name, procedureCode: $procedureCode, document: $document, beginDate: $beginDate, endDate: $endDate, programs: $programs, payers: $payers) {
      _id
      name
      procedureCode {
        code
        fee
      }
      document {
        name
      }
      beginDate
      endDate
      programs {
        _id
      }
      payers {
        _id
      }
    }
  }`;


export const DELETE_ACTIVITY = gql`
mutation deleteActivity($id: ID!) {
    deleteActivity(_id: $id) {
      _id
      name
      procedureCode {
        code
        fee
      }
      document {
        name
      }
      beginDate
      endDate
      programs {
        _id
      }
      payers {
        _id
      }
    }
  }`;