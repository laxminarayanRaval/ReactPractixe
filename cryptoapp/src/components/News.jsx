import React, { useState } from 'react'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { Avatar, Card, Col, Row, Typography, Select } from 'antd'

const { Title, Text } = Typography

import moment from 'moment'

import NewsLoading from './lazy/NewsLoading'

const demoImage = 'https://images.indianexpress.com/2021/11/BITCOIN-CRYPTO-CURRENCY.jpg'

const News = ({ simplified }) => {

  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')

  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 })
  const { data: cryptoCoins } = useGetCryptosQuery(100)
  // console.log(cryptoNews)

  if (!cryptoNews?.value) return ( <NewsLoading /> )

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select className='select-news' placeholder='Crypto related News' optionFilterProp='children' onChange={setNewsCategory} filterOption={(input, option) => option.children.toLoweCase().indexOf(input.toLowerCase()) >= 0}>
            <Select.Option value='Cryptocurrency'>All Cryptocurrency</Select.Option>
            {
              cryptoCoins?.data?.coins.map((coin) => (
                <Select.Option value={coin.name} key={coin.uuid}>{coin.name}</Select.Option>
              ))
            }
          </Select>
        </Col>
      )}
      {
        cryptoNews?.value?.map((news, index) => (
          <Col xs={24} sm={12} lg={8} key={`news-${index}`}>
            <Card hoverable className='news-card'>
              <a href={news.url} target='_blank' rel='noreferrer'>
                <div className='news-image-container'>
                  <Title className='news-title' level={5}>{news.name}</Title>
                  <img style={{ maxWidth: '100px', maxHeight: '100px' }} src={news?.image?.thumbnail?.contentUrl || demoImage} alt={news.name} />
                </div>
                <p style={{overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', textOverflow: 'ellipsis'}}>
                  {news.description}
                </p>
                <div className='provider-container'>
                  <div>
                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt='news' />
                    <Text className='provider-name'>{news.provider[0]?.name}</Text>
                  </div>
                  <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                </div>
              </a>
            </Card>
          </Col>
        ))
      }
    </Row>
  )
}

export default News