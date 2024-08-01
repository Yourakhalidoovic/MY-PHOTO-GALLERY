// src/components/SearchBar.js
import React, { useState } from "react";
import './SearchBar.css';


const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search photos..."
      value={query}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
