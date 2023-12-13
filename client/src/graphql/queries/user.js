import {gql} from '@apollo/client'

export const QUERY_ = gql`
query client($id: ID!) {
    user(_id: $id) {
      _id
      username
      email
    }
  }
`;

