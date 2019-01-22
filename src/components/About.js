import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'

import FaMail from 'react-icons/lib/md/email'

const AboutContainer = styled.div`
    color:#333;
    margin:100px;
`;

const ContentContainer = styled.div`
    display:flex;
    justify-content: space-between;
`;

const AboutTitle = styled.h1`
    font-family: Lato-italic, Helvetica, Arial, sans-serif;
    text-transform: capitalize;
    text-align:center;
    font-size:26px;
    color:#222222;
    letter-spacing: 1px;
    font-weight: 700;
    line-height: 1.2;
    color: #333;
`;

const ProfilePicture = styled.img`
    width:275px;
    height:275px;
`;

const AboutText = styled.div`
    width:100%;
    text-align: center;
    font-family: Lato, Helvetica, Arial, sans-serif;
    letter-spacing: 1px;
    font-size:16px;
    line-height:26px;
    font-weight:400;
`;

const SendButton = styled.button`
    height: 50px;
    width: 200px;
    background-color: transparent;
    color: #333;
    font-size: 14px;
    font-family: 'Open sans';
    margin-top:20px;

    &:hover{
        background-color:#505050;
        color:#f7f7f7;
        cursor:pointer;
        transition: 0.3s;
    }
`;

class About extends React.Component {


    _scrolltTo(section) {
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: section
        });
    }

    render() {
        return (
            <AboutContainer>
                <AboutTitle>Hallo, ik ben Marvin Holleman</AboutTitle>
                <ContentContainer>
                    <AboutText>
                        23 jaren jong en wonend in Rotterdam. Momenteel ben ik bezig met mijn studie Creative Media and Gametechnologies.
Voor ik begonnen ben aan deze opleiding heb ik een vooropleiding Applicatie en mediaontwikkelaar gedaan aan het Zadkine in Rotterdam. Door mijn voorkennis heb ik bewust gekozen voor de opleiding Creative Media And Gametechnologies.
In mijn vrije tijd ben ik druk bezig met het maken van simpele websites voor startende ondernemers. Klinkt dit interessant?
<br /><br />
                        <SendButton onClick={(e) => this._scrolltTo(3000)}><FaMail /> Neem contact op </SendButton></AboutText>

                </ContentContainer>
            </AboutContainer>
        );
    }
}

export default About;
