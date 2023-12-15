import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ACTIVITY } from "../graphql/queries/activity";
import UpdateActivityForm from "../components/UpdateActivityForm";
import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth'

const SingleActivity = () => {
  if (!Auth.loggedIn()) {
    return <Navigate to="/" />;
  }
  //Get Activity
  const { activityId } = useParams();
  const { loading, error, data } = useQuery(QUERY_ACTIVITY, {
    variables: { activityId },
  });
  const activityData = data?.activity || {};



  return (
    <>
      {loading || !activityData.name ? (
        <div>Loading!!</div>
      ) : (
        <UpdateActivityForm 
        activity={activityData} 
        
        />
      )}
    </>
  );
};
export default SingleActivity;
