import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Col, Input, Row } from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi'
import CryptoLoading from './lazy/CryptoLoading'

const Cryptocurrencies = (props) => {
  const count = props.simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count)
  const [cryptos, setCryptos] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // setCryptos(cryptoList?.data?.coins)
    const filterdData = cryptoList?.data?.coins
      .filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))

    setCryptos(filterdData)

  }, [cryptoList, searchTerm])

  // console.log(isFetching, cryptos)

  if (isFetching) return ( <CryptoLoading /> )

  return (
    <>
      {!props.simplified &&
        (<div className='search-crypto'>
          <Input placeholder='Search Crypto...' onChange={e => setSearchTerm(e.target.value)} />
        </div>)
      }
      <Row gutter={[32, 32]} className='crypto-card-container'>
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} md={6} lg={4} title={currency.name} className='crypto-card' key={currency.uuid}>
            <Link to={`/crypto/${currency.name}/${currency.uuid}`}>
              <Card title={`${currency.rank}. ${currency.symbol}`} loading={isFetching} extra={<img className='crypto-image' src={currency.iconUrl} />} hoverable >
                <p>Price: ₹ {millify(currency.price, {precision: 2})}</p>
                <p>Market Cap.: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies