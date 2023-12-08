import {gql} from '@apollo/client'

export const ADD_USER = gql`
mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      _id
      username
      email
    }
  }`;

export const UPDATE_USER = gql`
mutation updateUser($id: ID!, $username: String!, $password: String!, $email: String!) {
    updateUser(_id: $id, username: $username, password: $password, email: $email) {
      _id
      username
      email
    }
  }`;

export const DELETE_USER = gql`
mutation deleteUser($id: ID!) {
    deleteUser(_id: $id) {
      _id
      username
      email
    }
  }`;

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
        email
      }
    }
  }`;