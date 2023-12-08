import React, { useState, useEffect } from 'react';
import './ChampionList.css';
import SearchComponent from './SearchComponent';
import ChampionPopup from './ChampionPopup'; // Asegúrate de crear este componente

const ChampionList = () => {
  const [champions, setChampions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChampion, setSelectedChampion] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json');
      const data = await response.json();
      const championsData = data.data;

      const championList = Object.keys(championsData).map(championKey => ({
        id: championKey,
        name: championsData[championKey].name,
        image: championsData[championKey].image.full,
      }));

      setChampions(championList);
    };

    fetchData();
  }, []);

  const handleChampionClick = champion => {
    setSelectedChampion(champion);
  };

  const handleClosePopup = () => {
    setSelectedChampion(null);
  };

  return (
    <div className="champion-list container">
      <h1 className="heading">Lista de Nombres de Campeones</h1>
      <SearchComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="list">
        {champions
          .filter(champion => champion.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(champion => (
            <div key={champion.id} className="listItem" onClick={() => handleChampionClick(champion)}>
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${champion.image}`}
                alt={champion.name}
                className="champion-image"
              />
              <div>{champion.name}</div>
            </div>
          ))
        }
      </div>
      {selectedChampion && <ChampionPopup champion={selectedChampion} onClose={handleClosePopup} />}
    </div>
  );
};

export default ChampionList;
