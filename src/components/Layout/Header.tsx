import React from 'react'
import ThemeSwitcher from '../ThemeSwitcher'
import ConnectWallet from '../ConnectWallet'
import Notifications from '../Notifications'
import GetVerified from '../GetVerified'

const Header = () => {
    return (
        <div className='flex items-center justify-end sticky top-0'>
            <GetVerified />
            <Notifications />
            <ThemeSwitcher />
            <ConnectWallet />
        </div>
    )
}

export default Header