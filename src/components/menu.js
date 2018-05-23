import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'

import { slide as Menu } from 'react-burger-menu'

const MenuContainer = styled.div`
`;


export default class sideBar extends React.Component {
    showSettings(event) {
        event.prevent

        Default();
    }

    render() {
        return (
            <MenuContainer>
                <Menu right >
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="about" className="menu-item" href="/about">Projects</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                </Menu>
            </MenuContainer >
        );
    }
}
