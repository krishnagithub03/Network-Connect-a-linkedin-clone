import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TextsmsIcon from '@mui/icons-material/Textsms';
const Header = () => {
  return (
    <div className='header'>
      <div className="header__left">
      <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="" />

      <div className="header__search">
      {/* Search icon */}
      <SearchIcon />
        <input type="text" />
      </div>
      </div>

      <div className="header__right">
      <HeaderOption Icon={HomeIcon} title="Home" />
      <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
      <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
      <HeaderOption Icon={TextsmsIcon} title="Messaging" />
      <HeaderOption Icon={NotificationsIcon} title="Notifications" />
      <HeaderOption avatar="https://media.licdn.com/dms/image/D4D03AQGGe5aTut63Iw/profile-displayphoto-shrink_100_100/0/1678726443471?e=1704931200&v=beta&t=ZTSj6L1PxmXYeYK0vurs3y1Bow9uSFrKfX9QDNsKNWQ" title="Me" />
      </div>

    </div>
  )
}

export default Header
