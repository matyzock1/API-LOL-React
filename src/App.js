import './App.css';
import ChampionList from './components/ChampionList';
import SearchComponent from './components/SearchComponent';

function App() {
  return (
    <div className="App">
      <header>
        <SearchComponent></SearchComponent>
      </header>
      <ChampionList></ChampionList>
    </div>
  );
}

export default App;
