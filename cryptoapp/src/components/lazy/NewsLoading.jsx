import React from 'react'
import { Card, Col, Row } from 'antd'

const NewsLoading = () => {
    return (
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
}

export default NewsLoading