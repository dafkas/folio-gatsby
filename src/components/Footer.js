import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'

const FooterContainer = styled.div`
    height:60px;
    width:100%;
    background-color:#252525;
    display:block;
      position: absolute;
  right: 0;
  bottom: 0;
  left: 0;

`;

const CopyrightText = styled.span`
    font-size:15px;
    color:#f7f7f7;
    padding:20px 0px 0px 40px;
    position:absolute;
    font-family:Lato-light;
    font-weight:400;
`;

class Footer extends React.Component {
    render() {
        return (
            <FooterContainer className="footer">
                <CopyrightText>© 2018 Marvin Holleman | All Rights Reserved.</CopyrightText>
            </FooterContainer>
        );
    }
}

export default Footer;
