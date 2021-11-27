import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <Container>
      <p>Daily info</p>
      <h2>{new Date().toLocaleDateString("default", { month: "short", weekday: "long", day: "numeric" })}</h2>
    </Container>
  );
};

export default Header;

const Container = styled.div`
    height: 75px;
    width:100vw;
    background:#fbfb94;
h2{
font-size:35px;
}
`;
