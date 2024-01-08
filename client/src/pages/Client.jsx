import DynamicTable from "../components/DynamicTable";
import { useQuery } from "@apollo/client";
import { QUERY_CLIENTS } from "../graphql/queries/client";
import { Link,Navigate } from "react-router-dom";
import Auth from "../utils/auth";

const Client = () => {
  if (!Auth.loggedIn()) {
    return <Navigate to="/" />;
  }
  //Gets all Clients
  const { loading, data } = useQuery(QUERY_CLIENTS);
  const clientsData = data?.clients || [];

  //Object array for table headers and path for getting data
  const columns = [
    { heading: "Full Name", value: "demographics.name" },
    { heading: "Date of Birth", value: "demographics.dateOfBirth" },
    { heading: "Gender", value: "demographics.gender" },
  ];

  //Redirect path for Edit Button
  const linkTo = "/Client";

  return (
    <main className="main flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h2 className="card-header bg-dark text-light p-2">Clients</h2>

          {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
              <DynamicTable
                data={clientsData}
                column={columns}
                link={linkTo}
              />
              <button className="tablebtn addbtn">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/Admission"
                >
                  Add New Client
                </Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
export default Client;
