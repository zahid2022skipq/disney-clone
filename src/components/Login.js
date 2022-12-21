import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>Login</Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Content = styled.div``;

export default Login;
