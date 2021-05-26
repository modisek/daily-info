import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <Container>
      <h2>{new Date().toLocaleDateString("default", { weekday: "long" })}</h2>
    </Container>
  );
};

export default Header;

const Container = styled.div`
height: 75px;
width:100vw;
h2{
font-size:35px;
}
`;
