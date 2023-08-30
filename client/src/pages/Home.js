import React from 'react'
import {Link} from 'react-router-dom'
import { atom, useAtom } from 'jotai'
import { fetchCoinData } from '../utility/coinApi'
import debounce from '../helpers/debounce'

export const coinsAtom = atom([])
export const queryAtom = atom('')
export const trendingAtom = atom([])

function Home() {
  const [coins, setCoins] = useAtom(coinsAtom)
  const [query, setQuery] = useAtom(queryAtom)
  const [trending, setTrending] = useAtom(trendingAtom)

  React.useEffect(() => {
    const fetchData = async () => {
      const coinsData = await fetchCoinData();
      setCoins(coinsData);
      setTrending(coinsData)
    };

    fetchData();
  }, [])

  const debouncedSearch = debounce(async () => {
    if (query.length >= 2) {
    try {
      const res = await fetch(`https://api.coingecko.com/api/v3/search?query=${query}`);
      const data = await res.json()

      const coins = data.coins.map(coin => {
        return {
          name: coin.name,    
          image: coin.image,
          id: coin.id,
          }})
      setCoins(coins)
    // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  else if (query.length < 3){
    setCoins(trending)
  }
    // Handle the response as needed
  }, 500); // 300 milliseconds debounce time

  const setCoinQuery = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    debouncedSearch(); // Call the debounced search function
  };
 


  const linkStyle = {
      color: "black", 
      textDecoration: "none",
      fontSize: "16px",
      // Add more styles here
    }
  return (
    <div>
      <h2>Search for a coin</h2>
       <input id="search-coin" type='text'value={query} onChange={setCoinQuery} />     
       <h2>Trending Coins </h2>
        {coins.map(coin => {
        return (
          <div  key={coin.id}>
          <Link to={`/show/${coin.id}`} style={linkStyle}>
            <div className='home-cryptos'>          
            <span className='home-crypto-image'>
              <img id="crypto-image"src={coin.image} alt={coin.name} />
            </span>
            <span className='home-crypto-name'> <h2>{coin.name}</h2> </span>

            {/* <div className='home-crypto-prices'> 
            <span> BTC {coin.priceBtc} </span>
            <span> USD {coin.priceUsd} </span>
            </div> */}

            <span className='home-crypto-prices'>
            <div className='currency-container'>
              <span>BTC </span>
              <span>{coin.priceBtc}</span>
            </div>
            <div className='currency-container'>
              <span>USD </span>
              <span>{coin.priceUsd}</span>
            </div>
          </span>


            </div>
            


          </Link>
          </div>
        )
        })}
     
    </div>
  )
}

export default Home


