import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
    text-align:center;
    padding-top: 20px;
    width: 100%;
    height: 100px;
    background-color:#1E1E1E;
    line-height:2;
    color: #aaa;
`;

const Copyright = styled.p`
    font-size:18px;
    color: #999;
`;

export default () => (
    <Footer>
        <Copyright>© 2021 Copyright <span style={{ color: "#ddd" }}>Jakezo</span></Copyright>
    </Footer>
)