export const fetchCoinData = async () => {
  try {
    const [response, btcResponse]= await Promise.all([
      fetch('https://api.coingecko.com/api/v3/search/trending'),
      fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')

    ])
    
    if (!response.ok) {
      throw new Error(`Network response was not ok. Status: ${response.status}`);
    }

    const btcData = await btcResponse.json()
    const btcPrice = btcData.bitcoin.usd
    console.log(btcPrice)

    const data = await response.json();
    const coins = data.coins.map(coin => ({
      name: coin.item.name,
      image: coin.item.large,
      id: coin.item.id,
      priceBtc: (coin.item.price_btc).toFixed(10),
      priceUsd: (coin.item.price_btc * btcPrice).toFixed(10),
    }));
    
    return coins;
  } catch (error) {
    console.error("Error fetching coin data:", error);
    return [];
  }
};
