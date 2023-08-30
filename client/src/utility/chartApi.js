// Desc: Fetches chart data from coingecko api

 export const fetchChartData = async (symbol) => {
  try {
    const [graphRes, dataRes] = await Promise.all([
      fetch(`https://api.coingecko.com/api/v3/coins/${symbol}/market_chart?vs_currency=usd&days=100`),
      fetch(`https://api.coingecko.com/api/v3/coins/${symbol}?market_data=true`)
    ])
    if (!graphRes.ok || !dataRes.ok) {
      throw new Error(`Network response was not ok. Status: ${graphRes.status}, ${dataRes.status}}`);
    }
    const data = await graphRes.json();
    const chartData = data.prices.map(price => {
      const [timestamp, p] = price;
      const date = new Date(timestamp).toLocaleDateString("en-us")
      return {
        Date: date, 
        Price: p,
      }
    })
    const coinInfo = await dataRes.json()
    console.log(coinInfo)
    return [chartData, coinInfo];
    
  } catch (error) {
    console.error("Error fetching coin data:", error);
    return [[], null];
  }

}
 
// {
//   
// }