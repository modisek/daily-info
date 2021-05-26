import React from "react";
import styled from "styled-components";
const Todo = () => {
  return (
    <TodoContainer>
      <Header>
        <h3>Todo</h3>
      </Header>

      <Todos></Todos>
      <button>add</button>
    </TodoContainer>
  );
};

export default Todo;

const TodoContainer = styled.div`
  height: 400px;
  width: 30vw;
  border-radius: 15px;
  margin: 0 20px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 40px rgba(0, 0, 0, 0.09),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;
const Todos = styled.div``;
const Header = styled.div``;
