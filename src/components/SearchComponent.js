// SearchComponent.js
import React from 'react';
import './SearchComponent.css';

const SearchComponent = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="header">
      <img
        src="/images/logo.png"  // Ruta relativa a la carpeta "public"
        alt="Logo"
        className="logo"
      />
         <input
      type="text"
      placeholder="Buscar campeón"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    </div>
  );
};

export default SearchComponent;
