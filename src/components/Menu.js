import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'

import { slide as Menu } from 'react-burger-menu'

const MenuContainer = styled.div`
`;

const Logo = styled.div`
  font-size:22px;
  margin: 0 auto;
  float:left;
  padding:20px;
  color:#c3c3c3;
  top: 0;
  left: 10px;
  position: fixed;
  font-family:Lato-italic;
  z-index:999;
`;

const MenuItem = styled.a`
    cursor:pointer;
`;


class sideBar extends React.Component {
    showSettings(event) {
        event.prevent
    }

    _scrolltTo(section) {
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: section
        });
    }

    render() {
        return (
            <MenuContainer>
                <Logo>Marvin Holleman</Logo>
                <Menu id="menu" right >
                    <MenuItem onClick={(e) => this._scrolltTo(700)} id="about" className="menu-item">Over mij</MenuItem>
                    <MenuItem onClick={(e) => this._scrolltTo(1200)} id="projects" className="menu-item">Projecten</MenuItem>
                    <MenuItem onClick={(e) => this._scrolltTo(3000)} id="contact" className="menu-item">Contact</MenuItem>
                </Menu>
            </MenuContainer >
        );
    }
}

export default sideBar;
