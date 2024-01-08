import DynamicTable from "../components/DynamicTable";
import { useQuery,useMutation } from "@apollo/client";
import { QUERY_PROGRAMS } from "../graphql/queries/program";
import { DELETE_PROGRAM } from "../graphql/mutations/program";

import { Link, Navigate } from 'react-router-dom';
import Auth from '../utils/auth'
 
const Programs = () => {
  if (!Auth.loggedIn()) {
    return <Navigate to="/" />;
  }
  //Gets all Programs
  const { loading, data } = useQuery(QUERY_PROGRAMS);
  const programsData = data?.programs || [];

  //Object array for table headers and path for getting data
  const columns = [
    { heading: "Begin Date", value: "beginDate" },
    { heading: "End Date", value: "endDate" },
    { heading: "Name", value: "name" }
  ];

  //Redirect path for Edit Button
  const linkTo = "/Program";

  const [removeProgram, { errors }] = useMutation(
    DELETE_PROGRAM,
    {
      refetchQueries: [
        QUERY_PROGRAMS,
        'programs'
      ]
    }
  );
    
  return (
    <main className="main flex-row justify-center mb-4">
      <div className="col-12 col-lg-10"> 
        <div className="card">
          <h2 className="card-header bg-dark text-light p-2">Active Programs</h2>

          {loading? (
             <div>Loading...</div>
          ): (
            <div>
              <DynamicTable 
                data={programsData}
                column={columns}
                link={linkTo}
                deleteFunction={removeProgram}
              />
              <button className="tablebtn addbtn">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/AddProgram"
                >
                  Add New Program
                </Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Programs;













