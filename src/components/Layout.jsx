import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
  background-color: #222;
  color: white;
  display: flex;
  align-items: center;
`;

const Layout = () => {
  return <Navbar>네비게이션 바입니다~</Navbar>;
};

export default Layout;
