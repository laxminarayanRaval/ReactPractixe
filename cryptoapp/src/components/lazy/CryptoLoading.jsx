import React from 'react'
import { Card, Col, Row } from 'antd'

const CryptoLoading = () => {
  return (
    <Row gutter={[32, 32]} className='crypto-card-container'>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
        <Col xs={24} sm={12} lg={6} className='crypto-card' key={i}>
          <Card loading={true} extra={<img className='crypto-image' />} hoverable >
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default CryptoLoading