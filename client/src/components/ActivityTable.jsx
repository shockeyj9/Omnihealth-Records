import { Link } from "react-router-dom";
import { DELETE_ACTIVITY } from "../graphql/mutations/activity";
import { QUERY_ACTIVITIES,QUERY_ACTIVITY } from "../graphql/queries/activity";
import { useMutation } from "@apollo/client";


export default function ActivityTable({activities}) {
    const [removeActivity, { errors }] = useMutation(
        DELETE_ACTIVITY,    
      {refetchQueries: [
        QUERY_ACTIVITIES,
      'activities'
      ]}
    );
  
  
    return (
      <tbody>
        <tr>
          <th></th>
          <th>Begin Date:</th>
          <th>End Date:</th>
          <th>Name:</th>
          <th></th>
        </tr>
        {activities &&
          activities.map((activity) => (
            <tr key={activity._id}>
              <td>
                  <button>
                 <Link
                      className="btn btn-primary btn-block btn-squared"
                      to={`/Activity/${activity._id}`}
                  >
                      Edit
                  </Link>
                  </button>
              </td>
              <td>{activity.beginDate}</td>
              <td>{activity.endDate}</td>
              <td>{activity.name}</td>
              <td>
                <button onClick={()=>removeActivity({variables:{id:activity._id}})}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    );
  }
  