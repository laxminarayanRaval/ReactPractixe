import React from 'react';
import millify from 'millify';
import { Row, Col, Statistic, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';


const Homepage = () => {
  const { data={}, isFetching } = useGetCryptosQuery();

  console.log(data && data.data && data.data.stats)
  // const globalStats = data?.data?.stats;
  // console.log('global stats:',globalStats)

  return (
    <React.Fragment>
      <Typography.Title level={2} className='heading'>Global Crypto Stats</Typography.Title>
      {isFetching && <h3>Loading</h3>}

      {!isFetching &&
        <Row>
          {/* <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col> */}
          <Col span={12}><Statistic title="Total Exchange" value='5' /></Col>
          <Col span={12}><Statistic title="Total Market Cap" value='5' /></Col>
          <Col span={12}><Statistic title="Total 24h Volume" value='5' /></Col>
          <Col span={12}><Statistic title="Total Markets" value='5' /></Col>
        </Row>}
    </React.Fragment>
  )

}

export default Homepage