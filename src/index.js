import React from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";
import { labelPrimary } from "./colors";
import Calculator from "./Calculator";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lobster');

body {
  margin: 0;
  padding: 0;
  font-family: "Ariel";
  background: #FFFFFF;

  ::before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.8;
    background-size: cover;
  }
}

h1 {
  color: ${labelPrimary};
  text-align: center;
  font-size: 40px;
}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <h1>Performance Calculator</h1>
      <Container>
        <Calculator />
      </Container>
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
