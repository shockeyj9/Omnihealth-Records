import {QUERY_SEARCHBAR} from '../graphql/queries/client'
import {SearchOptions}  from "./SearchOptions";
import {useQuery} from '@apollo/client';
import React, { useState} from "react";




export const SearchBar = () => {
  const { loading, data } = useQuery(QUERY_SEARCHBAR);
  const clientData = data?.clients || [];
  
  const [searched, setSearched] = useState({
    name: '',
    id: ''
  });

  const onChange = (event) =>{
    setSearched({
      name: event.target.value
    })
  }
  const onSearch = (searchTerm, id)=>{
    setSearched({
      name: searchTerm,
      id:id
    });
}
    return (
      <>
      {loading || !clientData[0].demographics.name ? (
        <div className="search">
          <div className="searchInputs">
              <input 
              className='searchInputs'
              type='search'
              placeholder='Enter Client Name' />
          </div>
        </div>
      ) : (
        <div className='dropdown'>
        <SearchOptions 
        clients={clientData}
        onSearch={onSearch}
        searched={searched}
        onChange={onChange}
        />
        </div>

            )}
            </>
    );
};