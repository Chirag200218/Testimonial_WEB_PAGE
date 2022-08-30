import React from 'react'
import styled from "styled-components";

function Header() {
  return (
    <> 
        <Head>
            <h1><span>Thousands</span> Of lives changed</h1>
            <h3>Hear it from the ones who have been on this journey already</h3>
        </Head>
    </>
  )
}

const Head = styled.div`
    height: 20%;
    width:100vw;
    display:flex;
    justify-content: space-around;
    flex-direction:column;
    // border: 1px solid red;
    h1{
        color:white;
        text-align:center;
        span{
            color:#328e32;
        }
    }
    h3{
        color:grey;
        text-align:center;
    }

`;
export default Header