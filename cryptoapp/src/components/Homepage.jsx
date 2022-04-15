import React from 'react';
import millify from 'millify';
import { Row, Col, Statistic, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Title from 'antd/lib/typography/Title';
import { Cryptocurrencies, News } from '../components';



const Homepage = () => {
  const { data = {}, isFetching } = useGetCryptosQuery(10);

  const globalStats = data?.data?.stats;
  // console.log('global stats:',globalStats)

  return (
    <React.Fragment>
      <Typography.Title level={2} className='heading'>Global Crypto Stats</Typography.Title>
      {isFetching && <h3>Loading</h3>}

      {!isFetching &&
        <Row>
          <Col span={12}><Statistic title="Total Cryptocurrencies" value={millify(globalStats.total)} /></Col>
          <Col span={12}><Statistic title="Total Exchange" value={millify(globalStats.totalExchanges)} /></Col>
          <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
          <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
          <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
        </Row>}
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
        <Title level={3} className="show-more"><Link to='/cryptocurrencies'>Show More</Link></Title>
      </div>
      <Cryptocurrencies simplified />
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Latest Crypto News</Title>
        <Title level={3} className="show-more"><Link to='/cryptocurrencies'>Show More</Link></Title>
      </div>
      <News simplified />
    </React.Fragment>
  )

}

export default Homepage