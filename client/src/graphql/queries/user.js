import {gql} from '@apollo/client'

export const QUERY_ = gql`
query getUser($id: ID!) {
    user(_id: $id) {
      _id
      username
      email
    }
  }
`;

