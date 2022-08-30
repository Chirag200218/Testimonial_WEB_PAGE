import React from 'react'
import styled from 'styled-components'
import Box from './Box';
import { useState } from 'react';
import {data} from './db';

function Content() {

    const [id,setId] = useState(0);

    const handleClick = (e,num)=>{
       
        const id = num===-1?e.target.id:num;
         
        const all = document.getElementsByClassName("one");

        const element  = document.getElementById(id);
       
        Array.from(all).forEach((elem)=>{
            if(elem.id===element.id){
                element.style.opacity =1 ;
            }else{
                elem.style.opacity =0.6;
            }
        })
        setId(id);
    }

   
    

  return (
    <Container>
        <Left>
            <Line>
                <First><img className="one" onClick={(event)=>handleClick(event,-1)} id='0' src='/images/pic1.jpg' alt="null"></img></First>
                <Second><img className="one"  onClick={(event)=>handleClick(event,-1)} id='1' src='/images/pic2.jpg' alt="null"></img></Second>
            </Line>
            <Line>
                <Third><img className="one"  onClick={(event)=>handleClick(event,-1)} id='2' src='/images/pic3.jpg' alt="null"></img></Third>
                <Second></Second>
            </Line>
            <Line>
                <First></First>
                <Fourth><img className="one"   onClick={(event)=>handleClick(event,-1)} id='3' src='/images/pic4.jpg' alt="null"></img></Fourth>
            </Line>
            <Line>
                <First><img className="one"  onClick={(event)=>handleClick(event,-1)} id='4' src='/images/pic5.jpg' alt="null"></img></First>
                <Second></Second>
            </Line>
            <Store>
                <Rectangle>
                    {
                        data.map((elem,ind)=>{ 
                            return(
                                ind!==id && ind<5 && <Square key={ind}><img  className="one" onClick={(event)=>handleClick(event,-1)} id={elem.id} src={elem.ProfileImg} alt="null"></img></Square>
                            )  
                        })
                    }
                </Rectangle>
                <Main>
                    <img  src={data[id].ProfileImg} alt="null"></img>
                </Main>
                <Rectangle>
                    {
                        data.map((elem,ind)=>{ 
                            return(
                                ind!==id && ind>=5 && <Square key={ind}><img  className="one" onClick={(event)=>handleClick(event,-1)} id={elem.id} src={elem.ProfileImg} alt="null"></img></Square>
                            )  
                        })
                    }   
                </Rectangle>
            </Store>
        </Left>
        <Center>
            <Box id={id} handleClick={handleClick}/>
            <Button>Read More Testimonial</Button>
        </Center>
        <Right>
            <Line>
                <Third><img id='5'className="one"   onClick={(event)=>handleClick(event,-1)} src='/images/pic6.jpg' alt="null"></img></Third>
                <Second></Second>
            </Line>
            <Line>
                <Second><img id='6'className="one"   onClick={(event)=>handleClick(event,-1)} src='/images/pic7.jpg' alt="null"></img></Second>
                <Second><img id='7' className="one"  onClick={(event)=>handleClick(event,-1)}  src='/images/pic8.jpg' alt="null"></img></Second>
            </Line>
            <Line>
                <First></First>
                <Fourth><img  id='8' className="one"  onClick={(event)=>handleClick(event,-1)}  src='/images/pic9.jpg' alt="null"></img></Fourth>
            </Line>
            <Line>
                <Second><img id='9'className="one"  onClick={(event)=>handleClick(event,-1)} src='/images/pic10.jpg' alt="null"></img></Second>
                <First></First>
                
            </Line>
        </Right>
    </Container>
  )
}

const Container = styled.div`
    height:80%;
    width:100vw;
    display:flex;
    @media (max-width: 768px) {
        flex-direction:column;
    }
    @media (max-width: 426px) {
            
    }
`;

const Left = styled.div`
    height:100%;
    width:27%;
    // border:1px solid green;
    display:flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        width: 100vw;
        height: 20%;
        flex-direction: row;
    }
    @media (max-width: 426px) {
        height:15%;
        // border: 1px solid red;
   }
`;
const Center = styled.div`
    height:100%;
    width:46%;
    // border:1px solid green;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    justify-content: space-evenly;

    @media (max-width: 1026px) {
        width:51%;
    }

    @media (max-width: 768px) {
        width:100vw;
        height: 60%;
    }

    @media (max-width: 426px) {
        height: 85%;
        justify-content: space-between;
   }


`;
const Right = styled.div`
    height:100%;
    width:27%;
    // border:1px solid green;
    display:flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {
        width: 100vw;
        height: 20%;
        flex-direction: row;
    }

    @media (max-width: 426px) {
        display:none;
    }

    
`;

const Line = styled.div`
    height:20%;
    width:90%;
    // border: 1px solid red;
    display:flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        height:100%;
        width:20%   
        flex-direction:column;
    }

    @media (max-width: 426px) {
        display:none;
   }

`;

const Button = styled.div` 
    height: 4rem;
    background-color:#29b475 ;
    
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: larger;
    font-weight: 700;
    width: 50%;
    border-radius: 10px;
    @media (max-width: 1026px) {
        width:65%;
        position: relative;
        top: 35px;
    }
    @media (max-width: 426px) {
        width: 60%;
        top: -15px;
    }
    &:hover {
        background-color: #10973f;
        cursor:pointer;
    }
    
`;

const Store = styled.div`
    display:none;
    @media (max-width: 426px) {
        display:flex;
        justify-content: space-around;
        align-items:center;
        height: 100%;
        width:  100%;
        // border: 1px solid red;
    }
`;

const First = styled.div`
    position: relative;
    top: -25px;
    height: 5rem;
    width: 5rem;
    // border: 1px solid orange;
    img{
        height: 5rem;
        width: 5rem;
        border-radius: 50%;
        opacity: 0.6;
        &:hover {
            filter: brightness(130%);
             cursor:pointer;
		}
    }


    
`;

const Second  = styled.div`
    position: relative;
    top: 25px;
    height: 5rem;
    width: 5rem;
    // border: 1px solid orange;
    img{
        height:5rem;
        width: 5rem;
        border-radius: 50%;
        opacity: 0.6;
        &:hover {
            filter: brightness(130%);
             cursor:pointer;
		}
    }
     

    
`;

const Third = styled.div`
    position: relative;
    top: 8px;
    left: 70px;
    height: 5rem;
    width: 5rem;
    // border: 1px solid orange;
    img{
        height:5rem;
        width: 5rem;
        border-radius: 50%;
        opacity: 0.6;
        &:hover {
            filter: brightness(130%);
             cursor:pointer;
		}
    }
    
`;


const Fourth = styled.div`
    position: relative;
    top: 20px;
    right: 60px;
    height: 5rem;
    width: 5rem;
    // border: 1px solid orange;
    img{
        height:6rem;
        width: 6rem;
        border-radius: 50%;
        opacity: 0.6;
        &:hover {
            filter: brightness(130%);
             cursor:pointer;
		}
    }  
`;


const Rectangle = styled.div`
    // border: 1px solid green;
    width: 35%;
    height: 50%;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const Main = styled.div`
    // border: 1px solid green;
    width: 16%;
    height: 66%;
    img{
        height:100%;
        width:100%;
        opacity:1;
        border-radius:50%;
    }
`;

const Square = styled.div`
    // border: 1px solid green;
    height: 78%;
    width: 56%;
    img{
        position:relative;
        left:-5px;
        height:100%;
        width:130%;
        border-radius:50%;
    }
`;

export default Content;