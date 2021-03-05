import React from 'react';
import styled, { keyframes } from 'styled-components';
import img from '../../assets/Home.png'


const blink = keyframes`
    0%{
        opacity: 0;
    }
    100{
        opacity: 1;
    }
`;

const Container = styled.div`
    position:relative;
    width:100%;
    height:calc(100vh - 5rem) ;
    @media(max-width: 994px){
        height: 70vh;  
    }


`;
const Background = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${img});
    background-position: center center;
    background-size: cover;
    filter: blur(3px);
    opacity: 0.5;
`;
const TitleContainer = styled.div`
    position:absolute;
    top:45%;
    left:50%;
    transform: translate( -50%, -50%);
    background: transparent -webkit-linear-gradient(left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.075), rgba(0, 0, 0, 0)) repeat scroll 0 0;
    line-height:1.5;
    
`;
const Title = styled.h2`
    font-size: 5rem;
    font-weight:600;
    white-space:nowrap;
    @media(min-width:540px) and (max-width: 994px){
        font-size: 3rem;   
    }
    @media(max-width:540px){
        font-size: 2.2rem;
    }
    
`;
const SubTitle = styled.h3`
    font-size: 4rem;
    font-weight:600;
    color:rgba(20,20,20, .6);
    white-space: nowrap;
    @media(min-width:540px) and (max-width: 994px){
        font-size: 2rem;   
    }
    @media(max-width:540px){
        font-size: 1.3rem;
    }
`;

const Underbar = styled.span`
    animation: ${blink} 1s infinite;
`;


export default () => (
    <Container id="Home" >
        <Background />
        <TitleContainer>
            <Title>안녕하세요!</Title>
            <SubTitle>제 이름은 조<span style={{ color: "#000" }}>재</span>익 입니다.</SubTitle>
        </TitleContainer>
    </Container>
)