import React from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-bar">
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder='Search movies (e.g. "Interstellar", "Star")'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <button className="btn-clear" onClick={() => setSearchTerm('')} aria-label="Clear">
          <FaTimes />
        </button>
      )}
    </div>
  );
}

export default SearchBar;