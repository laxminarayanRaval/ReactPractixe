import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';

import millify from 'millify';
import { Row, Col, Statistic, Typography, Skeleton } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';

import Title from 'antd/lib/typography/Title';
import NewsLoading from './lazy/NewsLoading';
import CryptoLoading from './lazy/CryptoLoading';

// import { Cryptocurrencies, News } from '../components';
const Cryptocurrencies = lazy(() => import('./Cryptocurrencies'))
const News = lazy(() => import('./News'))



const Homepage = () => {
  const { data = {}, isFetching } = useGetCryptosQuery(10);

  const globalStats = data?.data?.stats;
  // console.log('global stats:',globalStats)

  return (
    <React.Fragment>
      <Typography.Title level={2} className='heading'>Global Crypto Stats</Typography.Title>
      <Skeleton loading={isFetching}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className='gutter-row' xs={12} sm={8} md={6} lg={4}><Statistic title="Total Cryptocurrencies" value={globalStats?.total ?? '8401680069'} /></Col>
          <Col className='gutter-row' xs={12} sm={8} md={6} lg={4}><Statistic title="Total Exchange" value={millify(globalStats?.totalExchanges ?? '8401680069')} /></Col>
          <Col className='gutter-row' xs={12} sm={8} md={6} lg={4}><Statistic title="Total Market Cap" value={millify(globalStats?.totalMarketCap ?? '8401680069')} /></Col>
          <Col className='gutter-row' xs={12} sm={8} md={6} lg={4}><Statistic title="Total 24h Volume" value={millify(globalStats?.total24hVolume ?? '8401680069')} /></Col>
          <Col className='gutter-row' xs={12} sm={8} md={6} lg={4}><Statistic title="Total Markets" value={millify(globalStats?.totalMarkets ?? '8401680069')} /></Col>
        </Row>
      </Skeleton>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
        <Title level={3} className="show-more"><Link style={{ color: 'var(--text-primary)' }} to='/cryptocurrencies'>Show More</Link></Title>
      </div>
      <Suspense fallback={<CryptoLoading />}>
        <Cryptocurrencies simplified />
      </Suspense>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Latest Crypto News</Title>
        <Title level={3} className="show-more"><Link style={{ color: 'var(--text-primary)' }} to='/news'>Show More</Link></Title>
      </div>
      <Suspense fallback={<NewsLoading />}>
        <News simplified />
      </Suspense>
    </React.Fragment>
  )

}

export default Homepage