import React from 'react';
import Header from "./components/Header";
import styled from "styled-components";
import Footer from "./components/Footer";

function App() {
  return (
    <Wrapper>
      <Header />
      <Main />
      <Footer />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #F0F5F5;
  display: flex;
  flex-direction: column;
`;


const Main = styled.div`
  flex-grow: 1;
`;