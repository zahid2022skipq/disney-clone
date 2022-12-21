import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <NavImg>
        <img src="/images/logo.svg" alt="logo" />
      </NavImg>
      <NavMenu>
        <a href="/">
          <img src="images/home-icon.svg" alt="home" />
          <span>HOME</span>
        </a>
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

// const LoginBtn = styled.a`
//   border: 1px solid #f9f9f9;
//   padding: 10px 10px;
// `;

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

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      width: 20px;
      min-width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0 0 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        right: 0px;
        opacity: 0;
        position: absolute;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.96) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }

    @media (max-width: 760px) {
      display: none;
    }
  }
`;

export default Navbar;
