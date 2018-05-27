import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'

import Menu from './Menu';

import ProfileImg from '../../public/img/marvin-round-white.png'


const HeaderContainer = styled.div`
  width: 100%;
  height: 660px;
  background-color:#f7f7f7;
`;

const Hero = styled.div`
  background: linear-gradient(
		      rgba(21, 19, 19, 0.45), 
		      rgba(21, 19, 19, 0.45)
		    ),url('https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d39fe8df8ff9407562e2f89aec3c1318&auto=format&fit=crop&w=1350&q=80');
  width:100%;
  height:100%;
  background-repeat:no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center; 
`;

const ProfilePicture = styled.img`
  width:200px;
`;

const WelcomeText = styled.p`
  font-size:45px;
  color:#f7f7f7;
`;

const UnderText = styled.p`
  font-size:16px;
  color:#f7f7f7;
  letter-spacing: 1px;
`;

const AboutButton = styled.button`
  height: 50px;
  width: 240px;
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

class Header extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <HeaderContainer>
        <Menu />
        <Hero>
          <WelcomeText className='welcome-text'>Hallo</WelcomeText>
          <ProfilePicture src={ProfileImg} />
          <WelcomeText className='welcome-text'>Welkom op mijn website</WelcomeText>
          <UnderText className='under-text'>Ik ben Marvin Holleman, een creatieve full-stack developer</UnderText>

        </Hero>
      </HeaderContainer>
    );
  }
}

export default Header;
