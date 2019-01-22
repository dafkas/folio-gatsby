import React from 'react'
import Link from 'gatsby-link'

import styled, { keyframes } from 'styled-components'

import FaGit from 'react-icons/lib/go/mark-github';
import FaRight from 'react-icons/lib/md/chevron-right';
import { loadavg } from 'os';

const ContactPageContainer = styled.div`
    padding:45px;
    font-family: Lato, Helvetica, Arial, sans-serif;    
    text-transform: capitalize;
    height: 500px;
`

const ContactTitle = styled.h1`
    font-family: Lato-light, Helvetica, Arial, sans-serif;    
    text-transform: capitalize;
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
    color: #333;
    padding: 15px;
    font-size: 15px;
    text-transform: none;
    display: flex;
    margin: 0 auto;
    width: 83.5%;
    justify-content: flex-start;
    margin-top: -80px;
`;

const Loader = styled.div`
    border: 3px solid #f3f3f3;
    border-top: 3px solid #0b0c0c;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    -webkit-animation: LoaderKeyFrames 2s linear infinite;
    animation: LoaderKeyFrames 1s linear infinite;
    display: inline-block;
    margin-right: 10px;

    @keyframes LoaderKeyFrames {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
  }
`;


class Contact extends React.Component {
    constructor() {
        super();
        this.state = {
            message: '',
            showTimer: false,
            inputValue: '',
        }
    }

    showMessage = (e) => {
        const { name, email, message } = e.target;
        if (!name.value || !email.value || !message.value) {
            this.setState({
                message: "Een of meerdere velden zijn leeg!",
            })
        } else {
            this.setState({ showTimer: true, message: "", });
            setTimeout(() => {
                this.setState({
                    message: "Uw bericht is succesvol verzonden.",
                    showTimer: false,
                })
            }, 2000);
        }
    }

    render() {
        return (
            <ContactPageContainer onSubmit={(e) => { e.preventDefault(); this.showMessage(e); }}>
                <form>
                    <ContactTitle>Contact</ContactTitle>
                    <ContactFormContainer>
                        <NameInput name="name" placeholder="Naam *" />
                        <EmailInput name="email" type="email" placeholder="Email *" />
                    </ContactFormContainer>
                    <MessageBoxContainer>
                        <MessageArea name="message" placeholder="Bericht *" />
                    </MessageBoxContainer>
                    <SendButtonContainer>
                        <SendButton className='send-button' >Verzenden <FaRight /></SendButton>
                    </SendButtonContainer>
                    <ErrorMessageBox>
                        <p>{this.state.showTimer && (<Loader />)}{this.state.message}</p>
                    </ErrorMessageBox>
                </form>
            </ContactPageContainer>
        );
    }
}

export default Contact;
