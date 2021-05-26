import React, { useState } from "react";
import Header from "./components/Header";
import Weather from "./components/Weather";
import Todo from './components/Todo';
import Notes from './components/Notes';
import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
	  <MainContainer>
      <Header />
	  <Stuff>
      <Weather />
      <Todo />
	  < Notes />
	  </Stuff>
	  </MainContainer>
    </div>
  );
}

export default App;

const MainContainer = styled.div`
display:flex;
flex-direction:column;
`;

const Stuff = styled.div`
display:flex;
`;



