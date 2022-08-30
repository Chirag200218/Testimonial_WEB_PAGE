
import styled from "styled-components";
import Header from "./Header";
import Content from "./Content";

function App() {
  return (
     <>
      <Body>
          <Header/>
          <Content/>
      </Body>
     </>
  );
}

const Body = styled.div`
  height:100vh;
  width:100vw;
  background-color: #16252d;
  @media (max-width: 768px) {
    height: 130vh;
  }

  @media (max-width: 426px) {
    width:100vw;
    height: 120vh;
  }
`;

export default App;
