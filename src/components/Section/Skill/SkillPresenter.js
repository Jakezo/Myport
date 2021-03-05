import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.article`
    background-color: #ecf0f1;
`;

const ContentWrap = styled.div`
    width:1200px;
    padding: 80px 0;
    margin: 0 auto;
    @media (max-width: 1219px) {
        width: 100%;
    }
`;

const Title = styled.h2`
    font-size: 3rem;
    font-weight: 600;
    color: #27ae60;
    @media(max-width: 994px){
        text-align:center;
    }
`;

const Content = styled.div`
    margin: 80px 0;
    display:flex;
    align-items:center;
    justify-content:center;
    @media(max-width: 743px) {
        display:block;
        text-align:center;
    }
`;
const Listwrap = styled.div``;

const SkillList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 320px);
  grid-gap: 20px;
  @media (max-width: 1219px) {
        grid-template-columns: repeat(2, 320px);
    }
    @media(max-width: 743px) {
        display:block;
    }
`;


const SkillCard = styled.li`
    position:relative;
    width: 320px;
    height: 240px;
    padding-top:20px;
    background-color: #fff;
    border-radius:3px;
    transition: box-shadow .2s linear;
    text-align:center;
    overflow:hidden;
    &:hover{
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);

    }
    &:before{
        position:absolute;
        top:0;
        left:-32%;
        width:30%;
        border:1px solid #3498db;
        content:"";
        transition: left .4s ease-in;

    }
    &:after{
        position:absolute;
        bottom:0;
        right:-32%;
        width:30%;
        border:1px solid #3498db;
        content:"";
        transition: right .4s ease-in;
    }
    &:hover:before{
        left:0%;
    }
    &:hover:after{
        right:0%;
    }
    @media(max-width: 743px) {
        display:${props => props.current ? "block" : "none"};
        margin: 0 auto;
    }
`;
const CardImg = styled.img`
    width: 80px;
    height:80px;
`;

const CardTitle = styled.h4`
    margin-top:5px;
    font-size:1.12rem;
    font-weight:600;
`;
const CardStar = styled.span`
    display:block;
    margin-top:15px;
    
    
`;

const Cardtxt = styled.p`
    margin-top:10px;
    padding: 0 25px;
    font-size:0.9rem;
    line-height:1.5;
`;

const SlideArea = styled.div`
    display:none;
    @media(max-width: 743px) {
        display:flex;
        align-items:center;
        justify-content:space-between;
    }
    
`;

const SlideButton = styled.button`
    width: 60px;
    height: 60px;
    margin-top: 25px;
    background: none;
    border:none;
    border-radius: 50%;
    outline:none;
    cursor:pointer;
    &:hover, &:focus{
        color: #a9a9a9;
    }
`;

const SlidePage = styled.span`
    font-size: 1rem;
    font-weight:700;
    letter-spacing:3px;
`;

export default ({ data, slideCounter, increaseCounter, decreaseCounter }) => (
    <Container id="Skill">
        <ContentWrap>
            <Title>Skill</Title>
            <Content>
                <Listwrap>
                    <SkillList>
                        {data.map((e, idx) => (
                            <SkillCard key={e.skill} current={slideCounter === idx}>
                                <CardImg src={e.img} alt={e.skill} />
                                <CardTitle>{e.skill}</CardTitle>
                                <CardStar>{Array(e.lv).fill(1).map((e, idx) => <FontAwesomeIcon icon="star" color="#f1c40f" key={idx} />)}</CardStar>
                                <Cardtxt>{e.txt}</Cardtxt>
                            </SkillCard>)
                        )}
                    </SkillList>
                </Listwrap>
                <SlideArea>
                    <SlideButton onClick={decreaseCounter}>
                        <FontAwesomeIcon icon="arrow-left" size="2x" />
                    </SlideButton>
                    <SlidePage>{slideCounter + 1}/{data.length}</SlidePage>
                    <SlideButton onClick={increaseCounter}>
                        <FontAwesomeIcon icon="arrow-right" size="2x" />
                    </SlideButton>
                </SlideArea>
            </Content>
        </ContentWrap>
    </Container>
);