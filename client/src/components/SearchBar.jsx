// import React, { useState, useEffect } from "react";
// // import { FaSearch } from "react-icons/fa";
// import {QUERY_CLIENT} from '../graphql/queries/'
// import {QUERY_CLIENTS} from '../graphql/queries/'
// import {useNavigate} from 'react-router-dom';
// import {useQuery} from '@apollo/client';



// export const SearchBar = () => {
//   const {loading, data } = useQuery(QUERY_CLIENTS);
//   const clients = data?.demographics.name || [];

//   // fetch data (how do we fetch the info?) query client?

//   // useEffect(() => {
//   //   fetch()
//   //   .then(res => res.json())
//   //   .then(data => {
//   //     setFilterSearch(search);

//   //   })
//   //   .catch(err => console.log(err));
//   // }, [])

// // set useState
//   const [search, setSearch] = useState([])
//   const [filterSearch, setFilterSearch] = useState([])
 

//   // filter results as the user types out client name
//   const handleFilter = (value) => {
//     const res = filterSearch.filter(f => f.name.toLowerCase().includes(value))
//     setSearch(res);
//     if (value === "") {
//       setSearch([]);
//     }
//   };

//   const navigate = useNavigate();

//   const navigateToClient = (value) => {
//     //navigate to /client via id param
//     // if name matches a client name use the correlating id to pull up the client page?
//     navigate('');
//   }
//   // create onclick function to redirect to clients information page

//     return (
//       <div className="search">
//         <div className="searchInputs">
//             <input type="search" placeholder="Enter Client Name"  onChange={e => handleFilter(e.target.value)}/>
//             <button><FaSearch id="searchIcon"/></button>
//         </div>
//         <ul>
//           {/* create an onclick function */}
//             {data.map((search, index) => <h1 key={index} onClick={e => navigateToClient(e.target.value)}>{search.name}</h1>)}
//         </ul>
//       </div>
//     );
// };