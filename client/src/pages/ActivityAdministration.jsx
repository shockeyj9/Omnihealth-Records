import { useQuery } from "@apollo/client";
import ActivityTable from "../components/ActivityTable";
import { QUERY_ACTIVITIES } from "../graphql/queries/activity"
import { Link } from "react-router-dom";

const Activities = ()=>{
    //Gets all activities
    const { loading, data } = useQuery(QUERY_ACTIVITIES);
    const activityData = data?.activities || [];

    return (

        <div className="col-12 col-lg-10"> 
          <div className="card">
            <h4 className="card-header bg-dark text-light p-2">Activities</h4>
  
            {loading? (
               <div>Loading...</div>
            ): (
  
            <table>
  
            <ActivityTable 
            activities={activityData}
             />
  
            </table>
            )}
          </div>
          <div>
          <button>
                 <Link
                      className="btn btn-primary btn-block btn-squared"
                      to={`/AddActivity`}
                  >
                      Add New Activity
                  </Link>
                  </button>
          </div>
        </div>
  
    );
}

export default Activities;