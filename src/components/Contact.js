import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'

import FaRight from 'react-icons/lib/md/chevron-right';

const ContactPageContainer = styled.div`
    padding:45px;
    font-family: Lato, Helvetica, Arial, sans-serif;    text-transform: capitalize;

      height: 500px;
`

const ContactTitle = styled.h1`
   font-family: Lato-light, Helvetica, Arial, sans-serif;    text-transform: capitalize;
    text-align:center;
    font-size: 26px;
    font-weight: 700;
    text-transform: capitalize;
    color:#222222;
    width:100%;
    padding-bottom:30px;
    letter-spacing: 1px;
`;

const ContactFormContainer = styled.div`
  display: flex;
  justify-content: center;
  width:100%;
`;

const MessageBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top:20px;
`;

const NameInput = styled.input`
    width:40%;
    height: 45px;
    margin-right:5px;
    color:#333;
    font-size:14px;
    border: 1px #d0d0d0 solid;
`;
const EmailInput = styled.input`
    width:40%;
    height: 45px;
    margin-left:5px;
    color:#333;
    font-size:14px;
        border: 1px #d0d0d0 solid;
`;

const MessageArea = styled.textarea`
    width:81%;
    color:#333;
    font-size:14px;
    border-color:#d0d0d0;
    height:160px;
`;

const SendButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
    width:90.5%;
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

const ErrorMessageBox = styled.div`
    color:#333;
    padding:15px;
    font-size:15px;
    text-transform: none;
`;


class Contact extends React.Component {
    constructor() {
        super();
        this.state = {
            message: ''
        }
    }

    _showMessage() {
        this.setState({
            message: "Oeps er is iets fout gegaan... U kunt contact opnemen via dit email adres: Marvin.holleman@hotmail.nl"
        })
    }

    render() {
        return (
            <ContactPageContainer>
                <ContactTitle>Contact</ContactTitle>
                <ContactFormContainer>
                    <NameInput placeholder="Naam *" />
                    <EmailInput placeholder="Email *" />
                </ContactFormContainer>
                <MessageBoxContainer>
                    <MessageArea placeholder="Bericht *" />
                </MessageBoxContainer>
                <SendButtonContainer>
                    <SendButton className='send-button' onClick={(e) => this._showMessage()}>Verzenden <FaRight /></SendButton>
                </SendButtonContainer>
                <ErrorMessageBox><p>{this.state.message}</p></ErrorMessageBox>
            </ContactPageContainer>
        );
    }
}

export default Contact;
