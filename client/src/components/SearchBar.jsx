import React, {useState} from "react";
import { FaSearch } from "react-icons/fa";

export const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("")


    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
      
      if (searchInput.length > 0) {
          countries.filter((country) => {
          return country.name.match(searchInput);
      });
      }

    return (
        < div className="input-wrapper">
            <FaSearch id="search-icon"/>
            <input placeholder="Search" value={input} 
            onChange = {(e) => handleChange(e.target.value)}/>
    </div >
    );
};