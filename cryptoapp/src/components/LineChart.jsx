import React from 'react'

import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
// import { Line } from 'react-chartjs-2'

import { Col, Row, Typography } from 'antd'
import moment from 'moment';

const { Title } = Typography


const LineChart = ({ coinHistory, currentPrice, coinName, coinColor }) => {
    const coinPrice = []
    const coinTimestamp = []

    for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
        coinPrice.push(coinHistory.data.history[i].price)
        // coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp * 1000).toLocaleString())
        coinTimestamp.push(moment(coinHistory.data.history[i].timestamp * 1000).format('Do MMMM, \'YY (HH:mm)'))

    }

    coinPrice.reverse()
    coinTimestamp.reverse()

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: `Price in USD`,
                data: coinPrice,
                fill: false,
                backgroundColor: coinColor,
                borderColor: coinColor,
            },
        ],
    }


    console.log(coinHistory, coinPrice, coinTimestamp)

    return (
        <>
            <Row className='chart-header'>
                <Title level={2} className='chart-title'> {coinName} Price Chart</Title>
                <Col className='price-container'>
                    <Title level={5} title='Price Change' className='price-change'>{coinHistory?.data?.change} %</Title>
                    <Title level={2} className='current-price'>Current {coinName} Price: $ {currentPrice}</Title>
                </Col>
            </Row>
            {/* <Line data={data} /> */}
            <Chart type='line' data={data}/>
        </>
    )
}

export default LineChart