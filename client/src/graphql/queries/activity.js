import {gql} from '@apollo/client'

export const QUERY_ACTIVITIES = gql`
query getActivities {
    activities {
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

export const QUERY_ACTIVITY = gql`
query getActivity($activityId: ID!) {
    activity(activityId: $activityId) {
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

