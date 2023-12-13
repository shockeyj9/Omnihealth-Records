import React, { useState} from "react";
// // import { FaSearch } from "react-icons/fa";
// import {QUERY_CLIENT} from '../graphql/queries/'
// import {QUERY_CLIENTS} from '../graphql/queries/'
// import {useNavigate, useParams} from 'react-router-dom';
// import {useQuery} from '@apollo/client';



export const SearchBar = () => {
//    const { loading, error, data } = useQuery(QUERY_CLIENTS);
//   const clients = data?.clients || [];
// //   reach into demographics to pull out name? or reconstruct client

// // // set useState
//   const [searchItem, setSearchItem] = useState('')
//   const [filteredSearch, setFilteredSearch] = useState(clients)
 

// //   // filter results as the user types out client name
//   const handleFilter = (value) => {
//     const searchTerm = value
//     setSearchItem(searchItem)

//     const filteredSearch = clients.filter((client) =>
//     client.Name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     setFilteredSearch(filteredSearch);
//   };

//     const navigate = useNavigate();

//   const navigateToClient = (value) => {
//     const {clientId } = useParams();
//     const {loading, data} = useQuery(QUERY_CLIENT, {
//         variables: {clientId: clientId},
//     });
//     const client = data?.client || {};
    
//     }
//     //navigate to /client via id param
//     // if name matches a client name use the correlating id to pull up the client page?
//     navigate('');
//   }
//   // create onclick function to redirect to clients information page

    return (
      <div className="search">
        <div className="searchInputs">
            <input className="searchInputs" type="search" placeholder="Enter Client Name"  onChange={e => handleFilter(e.target.value)}/>
            {/* <button><FaSearch id="searchIcon"/></button> */}
        </div>
        <ul>
          {/* create an onclick function */}
          {/* {filteredSearch.map(client => <li key={client.id} onClick={e => navigateToClient(e.target.value)}>{client.Name}</li>)} */}
          </ul>
      </div>
    );
};