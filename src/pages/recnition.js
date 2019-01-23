import React from 'react'
import Link from 'gatsby-link'

import Footer from '../components/Footer';
import styled from 'styled-components'

import FaGit from 'react-icons/lib/go/mark-github';
import FaLeft from 'react-icons/lib/md/chevron-left';
import FaYt from 'react-icons/lib/fa/youtube-play';
import FaGlobe from 'react-icons/lib/go/globe';

const Logo = styled.div`
  font-size:22px;
  margin: 0 auto;
  padding:20px;
  color:#c3c3c3;
  top: 0;
  right: 10px;
  position: fixed;
  font-family:Lato-italic;
  z-index:999;
  cursor:pointer;
  text-decoration: none;

  &:hover{
      color:#333;
  }
`;

const Back = styled.div`
  font-size:18px;
  margin: 0 auto;
  padding:20px;
  color:#333;
  top: 0;
  left: 10px;
  position: fixed;
  font-family:Lato-italic;
  z-index:999;
  cursor:pointer;
  text-decoration: none;

  &:hover{
      opacity:0.5;
      text-decoration:underline;
  }
`;

const ContentContainer = styled.div`
    width: 100%;
    height:100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`;

const PageTitle = styled.h1`
   font-family: Lato-light, Helvetica, Arial, sans-serif;    
   text-transform: capitalize;
    text-align:center;
    font-size: 26px;
    font-weight: 700;
    text-transform: capitalize;
    color:#222222;
    width:100%;
    padding-bottom:10px;
    letter-spacing: 1px;
    margin-top:150px;
`;

const TechniquesContainer = styled.div`
    display:inline;
    font-size:20px;
    text-align:center;
    width:100%;
    padding-bottom:25px;
`;

const Technique = styled.a`
    font-family:Lato-light;
    display:inline;
    font-size:17px;
    text-align:center;
    padding:10px;
    color:#828282;
    text-transform:uppercase;

    &:hover{
        text-decoration:underline;
        cursor:pointer;
    }

    &:active{
        text-decoration:underline;
    }
`;

const InformationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding:100px;
`;
const InformationText = styled.p`
    width: 50%;
    text-align: justify;
    font-family: Lato, Helvetica, Arial, sans-serif;
    letter-spacing: 1px;
    font-size:16px;
    line-height:26px;
    font-weight:400;
`;

const InformationImage = styled.img`
    object-fit: scale-down;
    width: 440px;
    height: 306px;
`;

const Button = styled.button`
    height: 50px;
    width: 200px;
    background-color: transparent;
    color: #333;
    font-size: 12px;
    font-family: 'Open sans';
    margin-top:40px;
    margin-right:20px;
    text-transform:uppercase;

    &:hover{
        background-color:#505050;
        color:#f7f7f7;
        cursor:pointer;
        transition: 0.3s;
    }
`;

const Recnition = () => (
    <div>
        <Link to='/' ><Logo>Marvin Holleman</Logo></Link>
        <Link to='/' ><Back><FaLeft /> Ga terug</Back></Link>
        <ContentContainer>
            <PageTitle>Recnition</PageTitle>
            <TechniquesContainer>
                <Technique>FindFace software</Technique>
                <Technique>React Native</Technique>
                <Technique>Node Js</Technique>
            </TechniquesContainer>
            <InformationContainer className="post-information">
                <InformationText className="post-text">Dit is een uit de hand gelopen schoolproject. Bij dit project lag de focus op ondernemen en was het de bedoeling gebruik te maken van Human enhancement.<br />
                    <br />
                    Na het brainstormen met mijn team van 4 kwamen we op het idee om een camera toe te voegen aan het menselijk lichaam die de leeftijd kan schatten, dit was een veelbelovend concept aangezien er veel discussies zijn over het verkopen van alcohol en tabak aan minderjarigen.
                    Na een kwartaal hebben we besloten om het concept van de tafel te vegen en iets compleet anders te doen. We hebben contact gehad met een politieagen uit Rotterdam Centrum en die bood ons aan een systeem te bouwen met gezichtsherkenning. Dit systeem zou ingezet worden om mensen met een winkelverbod buiten te deur te houden.
                    Hier zijn we aan begonnen en we hebben het concept gemaakt. De docenten moedigde ons aan dat het een concept was met potentie en dat we echt iets in handen hadden. Met deze gedachte zijn we opzoek gegaan naar een pilot store in Rotterdam.
                    <br />
                    <br />
                    Met dit concept zijn we nog steeds bezig in onze eigen tijd en zo hebben we recentelijk nog een gesprek gehad met een winkel voor de pilot.
                    <br />
                    <a href="http://www.recnition.com" target="_blank"><Button><FaGlobe /> Live site</Button></a>
                    <a href="https://www.youtube.com/watch?v=DcHicKcSCsY&t=6s" target="_blank"><Button><FaYt />Demo video</Button></a>
                </InformationText>
                <InformationImage className="post-image" src="https://drive.google.com/uc?id=150_1hICk41JjNGl2zdKEhm2tnsWua9jW" />
            </InformationContainer>
        </ContentContainer>
        <Footer />
    </div>
)

export default Recnition
