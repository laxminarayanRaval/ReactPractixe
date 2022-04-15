import React, { useState } from 'react'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { Avatar, Card, Col, Row, Typography, Select } from 'antd'

const { Title, Text } = Typography

import moment from 'moment'

const demoImage = 'https://images.indianexpress.com/2021/11/BITCOIN-CRYPTO-CURRENCY.jpg'

const News = ({ simplified }) => {

  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')

  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 })
  const { data: cryptoCoins } = useGetCryptosQuery(100)
  console.log(cryptoNews)

  if (!cryptoNews?.value) return (
    <Row gutter={[24, 24]}>
      {
        [1, 2, 3, 4, 5, 6].map((j) => (
          <Col xs={24} sm={12} lg={8} key={j} >
            <Card hoverable loading={true} className='news-card' >
            </Card>
          </Col>
        ))
      }
    </Row>
  )

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select showSearch className='select-news' placeholder='Select a Crypto' optionFilterProp='children' onChange={setNewsCategory} filterOption={(input, option) => option.children.toLoweCase().indexOf(input.toLowerCase()) >= 0}>
            <Select.Option value='Cryptocurrency'>Cryptocurrency</Select.Option>
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
                <p>
                  {news.description.length > 100 ? `${news.description.substring(0, 100)} ...` : news.description}
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