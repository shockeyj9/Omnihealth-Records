import { useState } from 'react';
import { useQuery } from "@apollo/client";
import { QUERY_CLIENTS } from "../graphql/queries/client";
import ClientsTable from "../components/ClientsTable";
import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth'


const Client = () => {
  if (!Auth.loggedIn()) {
    return <Navigate to="/" />;
  }
    //Gets all Clients
    const { loading, data } = useQuery(QUERY_CLIENTS);
    const clientsData = data?.clients || [];

    return (
        <main className="main flex-row justify-center mb-4">
          <div className="col-12 col-lg-10"> 
            <div className="card">
              <h2 className="card-header bg-dark text-light p-2">Clients</h2>
    
              {loading? (
                 <div>Loading...</div>
              ): (
    
              
    
              <ClientsTable 
              clients={clientsData}
               />
    
              
              )}
            </div>
          </div>
        </main>
      );

}
;
export default Client;

