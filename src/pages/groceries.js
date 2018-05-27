import React from 'react'
import Link from 'gatsby-link'

import Footer from '../components/Footer';
import styled from 'styled-components'

import FaGit from 'react-icons/lib/go/mark-github';
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

const Groceries = () => (
    <div>
        <Link to='/' ><Logo>Marvin Holleman</Logo></Link>
        <Link to='/' ><Back><FaLeft /> Ga terug</Back></Link>
        <ContentContainer>
            <PageTitle>Boodschappen lijstje app</PageTitle>
            <TechniquesContainer>
                <Technique>Java</Technique>
                <Technique>Android studio</Technique>
            </TechniquesContainer>
            <InformationContainer className="post-information">
                <InformationText className="post-text">Deze app is gemaakt in Android studio en communiceerd met Firebase zodat de data realtime geupdate wordt.
                    <br /><br />
                    Zelf ben ik geen programmeur die van low level languages houdt. Deze app heb ik daarom zelf zo simpel mogelijkgehouden en puur de focus gelegd op gebruiksvriendelijkheid.
                    <br />
                    <Button><FaGit /> Source code</Button>
                </InformationText>
                <InformationImage className="post-image" src="https://drive.google.com/uc?id=1_iMdw22aD9b-CUgpKZ8IriNdSI9raYiS" />
            </InformationContainer>
        </ContentContainer>
        <Footer />
    </div>
)

export default Groceries
