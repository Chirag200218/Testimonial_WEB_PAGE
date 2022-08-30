import React from 'react'
import styled from 'styled-components'
import {data} from './db';
import { useEffect } from 'react';
 

function Box({id,handleClick}) {
    useEffect(()=>{
        console.log("ishhi");
        callTimer();
    },[]);

    function callTimer(){
        const btn = document.getElementsByClassName("right");
        
        setInterval(()=>{
            btn[0].click();
        },15000);
    }
  return (
    <>
        <Container>
            <LeftArrow>
                <img onClick={(e)=>{handleClick(e,id===0?9:id-1)}} src='/images/left.svg'alt="oekjo"></img>
            </LeftArrow>
            <Content>
                <LeftSection>
                        <Photo>
                            <img src={data[id].ProfileImg} alt="oekjo"></img>
                        </Photo>
                        <Name>
                            {data[id].name}
                        </Name>
                        <Company>
                            {data[id].company}
                        </Company>
                </LeftSection>
                <RightSection>
                        <Youtube>
                            <img src='/images/youtube1.jpg'></img>
                            <div>Watch Testimonial</div>
                        </Youtube>
                        <Testimonial>
                            {data[id].testimonial}
                        </Testimonial>
                        <ReadMore>
                            Read More...
                        </ReadMore>
                </RightSection>
            </Content>
            <RightArrow>
                <img className = "right" onClick={(e)=>{handleClick(e,id===9?0:++id)}} src='/images/right.svg' alt='jfejfp'></img>
            </RightArrow>
            <Guide>
                <img onClick={(e)=>{handleClick(e,id===0?9:id-1)}} src='/images/left.svg'alt="oekjo"></img>
                <img className = "right" onClick={(e)=>{handleClick(e,id===9?0:++id)}} src='/images/right.svg' alt='jfp'></img>
            </Guide>
        </Container>
    </>

  
  )
}

const Container = styled.div`
    height: 15rem;
    width: 100%;
    // border: 1px solid blue;
    display: flex;
    @media (max-width: 426px) {
        height: 26rem;
        justify-content: space-evenly;
        align-items:center;
        flex-direction: column;
   }
`;

const Content = styled.div`
    height: 15rem;
    width: 80%;
    // border: 1px solid brown;
    background-color: white;
    border-radius: 8px;
    display:flex;
    align-items:center;
    @media (max-width: 1026px) {
        height: 18rem;
    }
    @media (max-width: 769px) {
        height:15rem;
    }
    @media (max-width: 426px) {
       height:88%;
       flex-direction:column;
   }
`;

const LeftArrow = styled.div`
    height: 15rem;
    width: 10%;
    // border: 1px solid black;
    display:flex;
    align-items:center;
    justify-content:center;
    img{
        width:2.5rem;
    }
    @media (max-width: 426px) {
        display:none;
   }
   &:hover {
    cursor:pointer;
}
`;

const RightArrow = styled.div`
    height: 15rem;
    width: 10%;
    // border: 1px solid brown;
    display:flex;
    align-items:center;
    justify-content:center; 
    img{
        width:2.5rem;
    }
    @media (max-width: 426px) {
        display:none;
   }   
   &:hover {
    cursor:pointer;
    }
`;

const Guide = styled.div`
   display:none;
   @media (max-width: 426px) {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: 10%;
        width: 30%;
        // border: 1px solid red;
        img{
            width:2rem
        }
    }
`;

const LeftSection = styled.div`
    height: 90%;
    width: 30%;
    border-right: 1px solid #dbdbdb;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    @media (max-width: 426px) {
         width:90%;
         height: 25%;
         border-right: none;
         justify-content: space-around;
         border-bottom:1px solid #dbdbdb;
   }

`;


const RightSection = styled.div`
    height: 100%;
    width: 70%;
    display:flex;
    flex-direction: column;
    align-items:center;
    @media (max-width: 426px) {
        width:100%;
        height: 70%;
  }
`;
 

const Photo = styled.div`
    height: 7rem;
    width: 7rem;
    // border:1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        height: 100%;
        width:100%;
        border-radius: 50%;
    }

    @media (max-width: 426px) {
        display:none;
   }
`;

const Name = styled.div`
    height: 40%;
    width: 100%;
    // border:1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:large;
    font-weight: 400;
    
    
    @media (max-width: 426px) {
        font-size:x-large;
        font-weight: 500;
   }
`;

const Company = styled.div`
height: 40%;
width: 100%;
// border:1px solid red;
display: flex;
    align-items: center;
    justify-content: center;
`;


const Youtube = styled.div`
    height:10%;
    width:90%;
    display: flex;
    justify-content: flex-end;
    text-align: right;
    font-weight: 700;
    color: gray;
    margin-top: 20px;

    img{
        height: 100%;
        margin-right:10px;
    }

    &:hover {
        cursor:pointer;
    }
`;

const Testimonial = styled.div`
    height:auto;
    overflow-wrap: break-word;
    width:90%;
    // border : 1px solid orange;
    margin: 10px 0px;
    font-weight: 400;
    color: black;
`;

const ReadMore = styled.div`
    height:10%;
    width:90%;
    // border : 1px solid blue;
    font-weight: 700;
    color: gray;
    &:hover {
        cursor:pointer;
    }
`;



export default Box