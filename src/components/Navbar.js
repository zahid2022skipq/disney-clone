import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <NavImg>
        <img src="/images/logo.svg" alt="logo" />
      </NavImg>
      <NavMenu>
        <LoginBtn>Login</LoginBtn>
      </NavMenu>
    </Nav>
  );
};

const Nav = styled.div`
  position: fixed;
  background-color: #090b13;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const NavImg = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const LoginBtn = styled.a`
  border: 1px solid #f9f9f9;
  padding: 10px 10px;
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  @media (max-width: 760px) {
    display: none;
  }
`;

export default Navbar;
