import React from 'react'
import {fetchChartData } from '../utility/chartApi'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useParams } from 'react-router-dom'
import { atom, useAtom } from 'jotai'
import { set } from 'lodash';
import { useState } from 'react';

export const coinDataAtom = atom([])

function Show() {
  // const params = useParams(null)
   const [coinData, setCoinData] = useAtom(coinDataAtom)
   const [coinInfo, setCoinInfo] = useState(null);
   const { symbol } = useParams()

  React.useEffect(() => {
    const fetchData = async () => {
    const [chartData, coinInfo]= await fetchChartData(symbol)
    setCoinData(chartData)
    setCoinInfo(coinInfo)
    }
    fetchData()
  }, [symbol])

  return (
    <div>

      <header>
        {coinInfo && ( <>
          <img id="show-coin-image"src={coinInfo.image.large}/>
        <h2> {coinInfo.name} : ({coinInfo.symbol})</h2>
        </>)}
       
      </header>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          width={500}
          height={400}
          data={coinData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Price" stroke="#8884d8" fill="#050505FF" />
        </AreaChart>
      </ResponsiveContainer>
        {coinInfo&& (
        <div className='container'> 
          <h2>About {coinInfo.name}</h2>
          <h3>{coinInfo.description.en}</h3>
        </div>
        )}
        {coinInfo && (
          <div className="coin-info">
            <div className="info-item">
              <h3>Market cap rank</h3>
              <span>{coinInfo.market_cap_rank}</span>
            </div>
            <div className="info-item">
              <h3>24h high</h3>
              <span>${coinInfo.market_data.high_24h.usd}</span>
            </div>
            <div className="info-item">
              <h3>24h low</h3>
              <span>${coinInfo.market_data.low_24h.usd}</span>
            </div>
            <div className="info-item">
              <h3>Circulating supply</h3>
              <span>${coinInfo.market_data.circulating_supply}</span>
            </div>
            <div className="info-item">
              <h3>Current price</h3>
              <span>${coinInfo.market_data.current_price.usd}</span>
            </div>
            <div className="info-item">
              <h3>1y change</h3>
              {coinInfo.market_data.price_change_percentage_1y.toFixed(2)}%
            </div>
          </div>
        )}


    </div>
  )
}

export default Show
