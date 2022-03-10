
import './App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Coin from './Components/Coin';

function App() {
  // States
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState('');

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&currency=INR")
      .then((response) => { setListOfCoins(response.data.coins) })
  }, []);

  const filteredCoins=listOfCoins.filter((coin)=>{
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  })


  return (
    <div className="App">
      <div className="crypto-header">
        <input type="search" name="" placeholder="Bitcoin.." id="" className='search-input' onChange={(event) => { setSearchWord(event.target.value) }} />
      </div>
      <div className="crypto-display">
        {filteredCoins.map(coin => {
          return <Coin coin={coin} key={coin.id} />
        })}
      </div>
    </div>
  );
}

export default App;
