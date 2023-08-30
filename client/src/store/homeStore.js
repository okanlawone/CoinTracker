// import { atom, useAtom } from 'jotai';
// import React from 'react';

// export const  coinsAtom = atom([]);

// export const Stocks = () => {
//   const [coins, setCoins] = useAtom(coinsAtom);
//   const fetchCoinData = async () => {
//     try {
//       const response = await fetch('https://api.coingecko.com/api/v3/search/trending');

//       if (!response.ok) {
//         throw new Error(`Network response was not ok. Status: ${response.status}`);
//       }

//       const data = await response.json();
//       const newCoins = data.coins.map(coin => ({
//         name: coin.item.name,
//         image: coin.item.large,
//         id: coin.item.id,
//         priceBtc: coin.item.price_btc,
//       }));

//       setCoins(newCoins);
//     } catch (error) {
//       console.error("Error fetching coin data:", error);
//     }
//   };

//   React.useEffect(() => {
//     fetchCoinData();
//   }, []);

//   const linkStyle = {
//     color: "red",
//     textDecoration: "none",
//     fontSize: "16px",
//     // Add more styles here
//   };

//   // Your JSX rendering code here
// };

// In your main app file (e.g., App.js), use the Stocks component like before





// import { create } from 'zustand'

// const homeStore = create((set) => ({
//  fetchCoinData: async () => {
//  const res = await fetch('https://api.coingecko.com/api/v3/search/trending');
//  console.log(res.data)
// }
// }))

// export default homeStore