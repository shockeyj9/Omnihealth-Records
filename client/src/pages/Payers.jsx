import DynamicTable from "../components/DynamicTable";
import { DELETE_PAYER } from "../graphql/mutations/payer";
import { QUERY_PAYERS } from "../graphql/queries/payer";
import { Link, Navigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import Auth from "../utils/auth";

const Payers = () => {
  if (!Auth.loggedIn()) {
    return <Navigate to="/" />;
  }

  //Gets all Payers
  const { loading, data } = useQuery(QUERY_PAYERS);
  const payersData = data?.payers || [];

  //Object array for table headers and path for getting data
  const columns = [
    { heading: "Begin Date", value: "beginDate" },
    { heading: "End Date", value: "endDate" },
    { heading: "Name", value: "name" },
    { heading: "Electronic ID", value: "electronic_id" },
  ];

  //Redirect path for Edit Button
  const linkTo = "/Payer";

  //Mutation for deleting payer
  const [removePayer, { errors }] = useMutation(DELETE_PAYER, {
    refetchQueries: [QUERY_PAYERS, "payers"],
  });

  return (
    <main className="main flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h2 className="card-header bg-dark text-light p-2">Payers</h2>

          {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
              <DynamicTable
                data={payersData}
                column={columns}
                link={linkTo}
                deleteFunction={removePayer}
              />
              <button className="tablebtn addbtn">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/AddPayer"
                >
                  Add New Payer
                </Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Payers;
