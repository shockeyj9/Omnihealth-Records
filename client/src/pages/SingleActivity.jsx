import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ACTIVITY } from "../graphql/queries/activity";
import { UPDATE_ACTIVITY } from "../graphql/mutations/activity";
import UpdateActivityForm from "../components/UpdateActivityForm";

const SingleActivity = () => {
  //Get Activity
  const { activityId } = useParams();
  const { loading, error, data } = useQuery(QUERY_ACTIVITY, {
    variables: { activityId },
  });
  const activityData = data?.activity || {};

  console.log(activityData);
  //Set Update Mutation
  const [updateActivity, { errors }] = useMutation(UPDATE_ACTIVITY);

  return (
    <>
      {loading || !activityData.name ? (
        <div>Loading!!</div>
      ) : (
        <UpdateActivityForm activity={activityData} />
      )}
    </>
  );
};
export default SingleActivity;
