import React from 'react';
import './ChampionPopup.css'; // Asegúrate de crear este archivo CSS

const ChampionPopup = ({ champion, onClose }) => {
  return (
    <div className="popup-background" onClick={onClose}>
      <div className="popup-content" onClick={e => e.stopPropagation()}>
        <h2>{champion.name}</h2>

        <img src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${champion.image}`} alt={champion.name} />
        {/* Agrega más detalles del campeón aquí si lo deseas */}
        <p className='texto' >{champion.blurb}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default ChampionPopup;
