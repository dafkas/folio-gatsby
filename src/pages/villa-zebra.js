import React from 'react'
import Link from 'gatsby-link'

import Footer from '../components/Footer';
import styled from 'styled-components'

import FaGlobe from 'react-icons/lib/go/globe';
import FaLeft from 'react-icons/lib/md/chevron-left';

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
    width: 530px;
    height: 400px;
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

const villaZebra = () => (
    <div>
        <Link to='/' ><Logo>Marvin Holleman</Logo></Link>
        <Link to='/' ><Back><FaLeft />Ga terug</Back></Link>
        <ContentContainer>
            <PageTitle>Villa Zebra</PageTitle>
            <TechniquesContainer>
                <Technique>React</Technique>
                <Technique>Redux</Technique>
                <Technique>Styled Components</Technique>
                <Technique>Phyton</Technique>
            </TechniquesContainer>
            <InformationContainer className="post-information">
                <InformationText className="post-text">De Digitale Klooiplek van Villa Zebra is een voorproefje op het museum. Dit project is een liefdadigheidsproject, omdat er veel vrijwilligers werken bij Villa Zebra en het budget klein is, is dit gratis gemaakt. Een interactieve webapplicatie als deze kost een hoop geld om te laten maken door een professioneel bedrijf.
                <br /> <br />
                    De webapplicatie is gemaakt in React. Voor het afhandelen van de state binnen de applicatie is Redux gebruikt met Styled Componenten voor de styling. De creaties moeten ook beheerd kunnen worden door medewerkers van het museum dus is er een simpel CMS gebouwd in Phyton.
                    <a href="https://villazebra-prod.label-a.nl" target="_blank"><Button ><FaGlobe size={18} style={{ marginTop: '-2.5px' }} /> Website</Button></a>
                </InformationText>
                <InformationImage className="post-image" src="https://drive.google.com/uc?id=1nNl_ud4FM__1q5u8jbPTuO9VUAPOod2b" />
            </InformationContainer>
        </ContentContainer>
        <Footer />
    </div>
)

export default villaZebra
