// SearchComponent.js
import React from 'react';
import './SearchComponent.css';

const SearchComponent = () => {
  return (
    <div className="header">
      <img
        src="/images/logo.png"  // Ruta relativa a la carpeta "public"
        alt="Logo"
        className="logo"
      />
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar..."
          className="search-input"
        />
        <button className="search-button">Buscar</button>
      </div>
    </div>
  );
};

export default SearchComponent;
