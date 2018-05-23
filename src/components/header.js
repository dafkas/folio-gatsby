import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'

import Menu from './menu'
import About from './about'

const Logo = styled.div`
  font-size:20px;
  margin: 0 auto;
  float:left;
  padding:20px;
  color:#f7f7f7;
  position: fixed;
  z-index: 99;
`;

const HeaderContainer = styled.div`
  width:100%;
  height:100%;
  position:relative;
`;

const WelcomeBox = styled.div`
  overflow: hidden;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center; 
  width:100%;
  height:50%;
  top:6%;
`;

const WelcomeBoxContainer = styled.div`
  color:#f7f7f7;
  width: 33%;
  height: 50%;
  background-color:#cccccc;
  text-align:center;
  border-radius:3px;
  padding-top:3%;
  border: 0.4px #333 solid;
`;

const Hero = styled.div`
  background: linear-gradient(
		      rgba(21, 19, 19, 0.45), 
		      rgba(21, 19, 19, 0.45)
		    ),url('https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d39fe8df8ff9407562e2f89aec3c1318&auto=format&fit=crop&w=1350&q=80');
  width:100%;
  height:735px;
  position:absolute;
  display:block;
  background-repeat:no-repeat;
  background-size:cover;
  z-index:9;
  margin-top: -150px;
  display: flex;
  justify-content: center;
  align-items: center; 
`;

const WelcomeText = styled.p`
  font-size:20px;
  color:#f7f7f7;
  position:absolute;
  z-index:10;
  margin-top:50px;
`;

const UnderText = styled.p`
  font-size:16px;
  color:#f7f7f7;
  position:absolute;
  z-index:10;
  margin-top:100px;
  letter-spacing: 1px;
`;

const AboutButton = styled.button`
  position:absolute;
  margin-top:175px;
  height: 50px;
  width: 290px;
  background-color: transparent;
  color: #f7f7f7;
  font-size: 14px;
  font-family: 'Open sans';
  &:hover{
    background-color:#f7f7f7;
    color:#333;
    cursor:pointer;
    transition: 0.3s;
  }
`;

export default class Header extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <HeaderContainer>
        <Logo>Marvin Holleman</Logo>
        <Menu />
        <Hero>
          <WelcomeText className='welcome-text'>Hey.. Welkom op mijn website</WelcomeText>
          <UnderText>Ik ben Marvin Holleman, een creatieve full-stack developer</UnderText>
          <AboutButton>Klik hier om meer te lezen over mij...</AboutButton>
        </Hero>
      </HeaderContainer>
    );
  }
}
