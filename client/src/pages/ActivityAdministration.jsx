import { useQuery } from "@apollo/client";
import ActivityTable from "../components/ActivityTable";
import { QUERY_ACTIVITIES } from "../graphql/queries/activity"
import { Link } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth'

const Activities = ()=>{
  if (!Auth.loggedIn()) {
    return <Navigate to="/" />;
  }
    //Gets all activities
    const { loading, data } = useQuery(QUERY_ACTIVITIES);
    const activityData = data?.activities || [];

    return (

      <main className="main flex-row justify-center mb-4">
      <div className="col-12 col-lg-10"> 
        <div className="card">
          <h2 className="card-header bg-dark text-light p-2">Activities</h2>
  
            {loading? (
               <div>Loading...</div>
            ): (

            <ActivityTable 
            activities={activityData}
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
}

export default Activities;