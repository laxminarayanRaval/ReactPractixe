import React from 'react'

import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { BulbFilled, FundOutlined, HomeOutlined, MoneyCollectOutlined } from '@ant-design/icons' // MenuOutline,

import icon from '../images/cryptocurrency.png'

const Navbar = () => {
    
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size='large' />
                <Typography.Title level={2} className='logo'>
                    <Link to='/'>Crypto App</Link>
                </Typography.Title>
                <Button className='menu-control-container'>
                    1233
                </Button>
            </div>
            <Menu theme='dark'>
                <Menu.Item key={'ab1'} icon={<HomeOutlined />}>
                    <Link to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item key={'ab2'} icon={<FundOutlined />}>
                    <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item key={'ab3'} icon={<MoneyCollectOutlined />}>
                    <Link to='/exchanges'>Exchanges</Link>
                </Menu.Item>
                <Menu.Item key={'ab4'} icon={<BulbFilled />}>
                    <Link to='/news'>News</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Navbar