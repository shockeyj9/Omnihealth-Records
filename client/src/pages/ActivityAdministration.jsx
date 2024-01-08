import DynamicTable from "../components/DynamicTable";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ACTIVITIES } from "../graphql/queries/activity";
import { DELETE_ACTIVITY } from "../graphql/mutations/activity";
import { Link, Navigate } from "react-router-dom";
import Auth from "../utils/auth";

const Activities = () => {
  if (!Auth.loggedIn()) {
    return <Navigate to="/" />;
  }

  //Gets all activities
  const { loading, data } = useQuery(QUERY_ACTIVITIES);
  const activityData = data?.activities || [];

  //Object array for table headers and path for getting data
  const columns = [
    { heading: "Begin Date", value: "beginDate" },
    { heading: "End Date", value: "endDate" },
    { heading: "Name", value: "name" },
  ];

  //Redirect path for Edit Button
  const linkTo = "/Activity";

  //Mutation for deleting Activity
  const [removeActivity, { errors }] = useMutation(DELETE_ACTIVITY, {
    refetchQueries: [QUERY_ACTIVITIES, "activities"],
  });

  return (
    <main className="main flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h2 className="card-header bg-dark text-light p-2">Activities</h2>

          {loading ? (
            <div>Loading...</div>
          ) : (
            <DynamicTable
                data={activityData}
                column={columns}
                link={linkTo}
                deleteFunction={removeActivity}
              />
          )}
        </div>
        <div>
          <button className="tablebtn addbtn">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/AddActivity`}
            >
              Add New Activity
            </Link>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Activities;
