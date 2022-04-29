import React from 'react'
import { Avatar } from 'antd'

import icon from '../../images/logo.png'

const LogoLoading = () => {
    return (
        <div className='loader-rotate'>
            <img src={icon} />
        </div>
    )
}

export default LogoLoading