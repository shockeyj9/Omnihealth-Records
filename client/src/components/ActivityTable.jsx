import { Link } from "react-router-dom";
import { DELETE_ACTIVITY } from "../graphql/mutations/activity";
import { QUERY_ACTIVITIES } from "../graphql/queries/activity";
import { useMutation } from "@apollo/client";


export default function ActivityTable({activities}) {
    const [removeActivity, { errors }] = useMutation(
        DELETE_ACTIVITY,    
      {refetchQueries: [
        QUERY_ACTIVITIES,
      'activities'
      ]}
    );
  console.log(activities)


  
    return (
      <div className="tablecontainer">
      <table className="table">
      <tbody className="tbody">
        <tr>
          <th className="th titles"></th>
          <th className="th titles">Begin Date:</th>
          <th className="th titles">End Date:</th>
          <th className="th titles">Name:</th>
          <th className="th titles"></th>
        </tr>
        {activities &&
          activities.map((activity) => (
            <tr key={activity._id}>
              <td className="th">
                  <button className="tablebtn">
                 <Link
                      style={{ textDecoration: "none", color: "black" }}
                      className="btn btn-primary btn-block btn-squared"
                      to={`/Activity/${activity._id}`}
                  >
                      Edit
                  </Link>
                  </button>
              </td>
              <td className="th td">{activity.beginDate}</td>
              <td className="th td">{activity.endDate}</td>
              <td className="th td">{activity.name}</td>
              <td className="th">
                <button className="tablebtn" onClick={()=>removeActivity({variables:{id:activity._id}})}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </tbody>
      </table>
      </div>
    );
  }
  