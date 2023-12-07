import React, { useState, useEffect } from 'react';
import './ChampionList.css';

const ChampionList = () => {
  const [champions, setChampions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json');
      const data = await response.json();
      const championNames = Object.keys(data.data);
      setChampions(championNames);
    };

    fetchData();
  }, []);

  return (
    <div className="champion-list container">
      <h1 className="heading">Lista de Nombres de Campeones</h1>
      <ul className="list">
        {champions.map((champion) => (
          <li key={champion} className="listItem">
            {champion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChampionList;
