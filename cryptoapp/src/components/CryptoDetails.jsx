import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import { useGetCryptosDetailsQuery } from '../services/cryptoApi'

const CryptoDetails = () => {
  const { coinId } = useParams();
  const { data: coinData, isFetching } = useGetCryptosDetailsQuery(coinId)
  const [timePeriod, setTimePeriod] = useState('7d')

  console.log(coinId, isFetching, coinData)

  if (isFetching) return <h2>Loading Data...</h2>

  return (
    <div>CryptoDetails {coinId} <br />
      <a href='https://youtu.be/9DDX3US3kss?t=5520'>YouTube</a><br />
      <a href="https://github.com/adrianhajdin/project_cryptoverse/blob/main/src/components/CryptoDetails.jsx">GitHub</a>
    </div>
  )
}

export default CryptoDetails