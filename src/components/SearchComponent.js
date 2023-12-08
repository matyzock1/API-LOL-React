import React from 'react';
import './SearchComponent.css';

const SearchComponent = ({ searchTerm, setSearchTerm }) => {
  const handleInputChange = (e) => {
    const term = e.target.value;

    // Permite cualquier combinación de letras y espacios,
    // pero no actualiza searchTerm si solo son espacios.
    if (/^[a-zA-Z\s]*$/.test(term)) {
      if (term.trim() !== '') {
        setSearchTerm(term);
      } else if (term === '') {
        setSearchTerm('');
      }
    } else {
      console.log("Por favor, ingrese solo letras.");
    }
  };

  return (
    <div className="header">
      <img src="/images/logo.png" alt="Logo" className="logo" />
      <input
        type="text"
        placeholder="Buscar campeón"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchComponent;
