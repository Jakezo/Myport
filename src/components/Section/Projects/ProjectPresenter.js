import React from 'react';
import styled from 'styled-components';


const Container = styled.article`
    background-color: rgba(112, 161, 255, .1);
`;
const ContentWrap = styled.div`
    width: 1200px;
    padding: 80px 0;
    margin: 0 auto;
    @media (max-width: 1219px) {
        width: 100%;
    }
`;

const Title = styled.h2`
    font-size: 3rem;
    font-weight: bold;
    color: #27ae60;
    @media(max-width: 994px){
        text-align:center;
    }
`;

const Content = styled.div`
    padding: 80px 0;
`;

const CardImg = styled.img`
    height:100%;
    transition: transform .3s linear;
    @media(max-width: 994px) {
        height:auto;
        width:100%;
    }
`;

const Card = styled.div`
    display:flex;
    margin: 0 auto;
    width: 930px;
    height:300px;
    border-left: 8px solid #2ecc71;
    border-right: 8px solid #2ecc71;
    border-radius:5px;
    transition: box-shadow .2s ease-in-out;
    z-index:1;
    overflow: hidden;
    &:not(:last-child){
        margin-bottom: 30px;
    }
    &:hover{
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    }
    &:hover ${CardImg}{
        transform:scale(1.1)
    }
    @media(max-width: 994px) {
        display:block;
        width:90%;
        height:100%;
        border:none;
        border-bottom: 4px solid #2ecc71;
        border-top: 4px solid #2ecc71;
        &:hover ${CardImg}{
            transform: none;
        } 
    }


`;

const CardContent = styled.div`
    flex: 1;
    padding: 60px 0 30px 30px;
    background-color:#fff;
    z-index:1;
    line-height:2;
    @media(max-width: 994px){
        padding: 5px 20px 0 20px;
        height: 200px; 
        border-top:2px solid #2ecc71;
    }
`;

const CardTitle = styled.h3`
    font-size: 1.5rem;
    font-weight:bold;
    border-bottom: 2px solid #2ecc71;
    @media(max-width:540px){
        font-size:1.3rem;
    }
`;

const ContentTxt = styled.p`
    font-size: 1.12rem;
    font-weight:bold;
    color: #9ab9a7;
    @media(max-width:540px){
        font-size:1rem;
    }
`;
const ContentURL = styled.a`
    font-size: 1rem;
    font-weight:normal;
    transition: color .2s linear;
    color:#8fd8d8;
    &:hover{
        color:#333;
    }
    &:before{
        content: ${props => props.name};
        color: #333;
    }
    &:after{
        display:block;
        content:""
    }

`;
const ContentUrl = styled.a`
    font-size: 1.2rem;
    font-weight:bold;
    transition: color .2s linear;
    color:#333;
    &:hover{
        color:#a9a9a9;
    }
    @media(max-width:540px){
     color:#333;   
    }
`;

export default ({ data }) => (
    <Container id="Project">
        <ContentWrap>
            <Title>Project</Title>
            <Content>
                {data.map(e =>
                    <Card key={e.id}>
                        <CardImg src={e.img} alt={e.id} />
                        <CardContent>
                            <CardTitle>{e.id}</CardTitle>
                            <ContentTxt>{e.txt}</ContentTxt>
                            {e.url && (
                                <ContentURL href={e.url} target='_blank' name="'URL: '">
                                    {e.url}
                                </ContentURL>
                            )}
                            {e.pdf && (
                                <ContentURL href={e.pdf} target='_blank' name="'PDF: '">
                                    스프링쇼핑몰.pdf
                                </ContentURL>
                            )}
                            <ContentUrl href={e.git} target='_blank'>깃허브</ContentUrl>
                        </CardContent>
                    </Card>
                )}
            </Content>
        </ContentWrap>
    </Container>
);  