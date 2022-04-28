import React, { useState } from "react";
import { useParams } from "react-router-dom";

import HTMLReactParser from "html-react-parser";
import millify from "millify";
import { Col, Row, Typography, Select } from "antd";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from "../services/cryptoApi";

import LineChart from "./LineChart";
// import Loader from './Loader';

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
  const { coinId } = useParams();
  const { data: coinData, isFetching } = useGetCryptoDetailsQuery(coinId);
  const [timePeriod, setTimePeriod] = useState("7d");


  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod,
  });

  const cryptoDetails = coinData?.data?.coin;


  if (isFetching) return <h1>Loading</h1>; //return <Loader />;

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    {
      title: "24h Volume",
      value: `$ ${cryptoDetails['24hVolume'] && millify(cryptoDetails['24hVolume'])}`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
        }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
        }`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
        }`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
        }`,
      icon: <ExclamationCircleOutlined />,
    },
  ];
  // console.log(coinId, isFetching, coinHistory);

  const styl = {
    background: `url(${cryptoDetails.iconUrl}) no-repeat top right fixed`,
    backgroundBlendMode: 'darken',
    backgroundSize: '13%',
    // padding: '30px',
    margin: '0px',
    // backgroundColor: 'rgba(0,21,41,0)',
    // borderTop: `15px solid ${cryptoDetails.color}`,
    fontFamily: 'system-ui',
    // fontSize: 'large', fontVariant: 'petite-caps', fontWeight: '400',
  }

  // return (
  //   <div style={{ ...styl }}>
  //     {/* <h1>CryptoDetails</h1> */}
  //     {/* <img className='crypto-image' src={cryptoDetails.iconUrl} /> */}
  //     <h1><b>Name:</b> {cryptoDetails.name} <a href={cryptoDetails.websiteUrl}>...</a></h1>
  //     <h1> <b>Symbol: </b>{cryptoDetails.symbol} </h1>
  //     <h1><b>UUID:</b> {cryptoDetails.uuid}</h1>
  //     <div><h1><b>Description:</b></h1> {HTMLReactParser(cryptoDetails.description)} </div>
  //   </div>
  // )

  return (
    <Col className="coin-detail-container" style={{ ...styl }}>
      <div style={{ backdropFilter: 'blur(5px)', }}>
        <Col className="coin-heading-container" >
          <Title level={2} className="coin-name">
            {cryptoDetails.name} ({cryptoDetails.symbol}) Price
          </Title>
          <p>
            {cryptoDetails.name} live price in US Dollar (USD). View value
            statistics, market cap and supply.
          </p>
        </Col>
        <Select defaultValue="7d" className="select-timeperiod" placeholder="Select Timeperiod" onChange={(value) => setTimePeriod(value)} >
          {time.map((date) => (
            <Option key={date}>{date}</Option>
          ))}
        </Select>
        <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails?.price)} coinName={cryptoDetails?.name} coinColor={cryptoDetails.color} />
        <Col className="stats-container">
          <Col className="coin-value-statistics">
            <Col className="coin-value-statistics-heading">
              <Title level={3} className="coin-details-heading">
                {cryptoDetails.name} Value Statistics
              </Title>
              <p>
                An overview showing the statistics of {cryptoDetails.name}, such
                as the base and quote currency, the rank, and trading volume.
              </p>
            </Col>
            {stats.map(({ icon, title, value }, i) => (
              <Col key={i} className="coin-stats">
                <Col className="coin-stats-name">
                  <Text>{icon}</Text>
                  <Text>{title}</Text>
                </Col>
                <Text className="stats">{value}</Text>
              </Col>
            ))}
          </Col>
          <Col className="other-stats-info">
            <Col className="coin-value-statistics-heading">
              <Title level={3} className="coin-details-heading">
                Other Stats Info
              </Title>
              <p>
                An overview showing the statistics of {cryptoDetails.name}, such
                as the base and quote currency, the rank, and trading volume.
              </p>
            </Col>
            {genericStats.map(({ icon, title, value }, i) => (
              <Col key={i} className="coin-stats">
                <Col className="coin-stats-name">
                  <Text>{icon}</Text>
                  <Text>{title}</Text>
                </Col>
                <Text className="stats">{value}</Text>
              </Col>
            ))}
          </Col>
        </Col>
        <Col className="coin-desc-link">
          <Row className="coin-desc">
            <Title level={3} className="">
              What is {cryptoDetails.name}?
            </Title>
            {HTMLReactParser(cryptoDetails.description)}
          </Row>
          <Col className="coin-links">
            <Title level={3} className="coin-details-heading">
              {cryptoDetails.name} Links
            </Title>
            {cryptoDetails.links?.map((link, i) => (
              <Row className="coin-link" key={`${link.name}${i}`}>
                <Title level={5} className="link-name">
                  {link.type}
                </Title>
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.name}
                </a>
              </Row>
            ))}
          </Col>
        </Col>
      </div>
    </Col>
  );
};

export default CryptoDetails;
