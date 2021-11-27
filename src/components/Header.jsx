import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <Container>
      <h2>{new Date().toLocaleDateString("default", { month: "short", weekday: "long", day: "numeric" })}</h2>
    </Container>
  );
};

export default Header;

const Container = styled.div`
height: 75px;
width:100vw;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048);
h2{
font-size:35px;
}
`;
