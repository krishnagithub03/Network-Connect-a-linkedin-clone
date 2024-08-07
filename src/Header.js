import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TextsmsIcon from '@mui/icons-material/Textsms';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/userSlice';
const Header = () => {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  };
  return (
    <div className='header'>
      <div className="header__left">
      <img src="/logo-con.png" alt=""/>

      <div className="header__search">
      {/* Search icon */}
      <SearchIcon />
        <input type="text" placeholder='Search'/>
      </div>
      </div>

      <div className="header__right">
      <HeaderOption Icon={HomeIcon} title="Home" />
      <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
      <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
      <HeaderOption Icon={TextsmsIcon} title="Messaging" />
      <HeaderOption Icon={NotificationsIcon} title="Notifications" />
      <HeaderOption avatar={true}  title="Me"
        onClick={logoutOfApp}
      />
      </div>

    </div>
  )
}

export default Header
