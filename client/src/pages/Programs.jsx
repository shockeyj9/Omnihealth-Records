import ProgramTable from "../components/ProgramTable";
import { useState } from 'react';
import { useQuery } from "@apollo/client";
import { QUERY_PROGRAMS } from "../graphql/queries/program";

 
const Programs = () => {

    //Gets all Programs
    const { loading, data } = useQuery(QUERY_PROGRAMS);
    const programsData = data?.programs || [];
    const [programs, setPrograms] = useState(programsData)

    //Sets up Update mutation function
    


  return (
    <main className="main flex-row justify-center mb-4">
      <div className="col-12 col-lg-10"> 
        <div className="card">
          <h2 className="card-header bg-dark text-light p-2">Active Programs</h2>

          {loading? (
             <div>Loading...</div>
          ): (

          

          <ProgramTable  
          programs={programsData}
           />

         
          )}
        </div>
      </div>
    </main>
  );
};

export default Programs;













