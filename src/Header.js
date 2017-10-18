import React, { Component } from 'react';
import Logo from './Header/Logo';
import MainMenu from './Header/MainMenu';
import SocialMenu from './Header/SocialMenu';
import './Header.css';

class Header extends Component {
  
  render() {
      
    return (
      <nav className="HeaderNav">
      <Logo />
      <MainMenu />
      <SocialMenu />
      </nav>
    );
  }

}

export default Header;
