import React, { useState } from "react";
import Header from "./components/Header";
import Weather from "./components/Weather";
import News from "./components/News";
import "./App.css";
import styled from "styled-components";
function App() {
    return (
        <div className="App">
            <MainContainer>
                <Header />
                <Content>
                    <Weather />
                    <News />
                </Content>
            </MainContainer>
        </div>
    );
}




export default App;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  display:flex;
`
