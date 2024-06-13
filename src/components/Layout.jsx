import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getUserInfo } from "../lib/api/auth";

const Navbar = styled.nav`
  background-color: #222;
  color: white;
  width: 100vw;
  padding: 10px 0 10px 0;
  top: 0;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoutBtn = styled.button`
  padding: 8px 10px;
  color: #fff;
  background-color: #ef5958;
  border: none;
  border-radius: 4px;
  margin-left: 5px;
  cursor: pointer;
`;

const BasicBtn = styled.button`
  padding: 8px 10px;
  color: #fff;
  background: none;
  border: none;
  border-radius: 4px;
  margin-right: 5px;
  cursor: pointer;
`;

const UserProfile = styled.div`
  margin-right: 20px;
`;

const NavItem = styled.div`
  margin: 0 10px 0 20px;
  display: flex;
`;

const UserImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

const UserNickname = styled.p`
  color: #fff;
  font-size: 18px;
`;

const UserInfo = styled.section`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Layout = ({ user, setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    getUserInfo().then((res) => {
      if (res) {
        setUser({
          userId: res.id,
          nickname: res.nickname,
          avatar: res.avatar,
        });
      } else {
        handleSignOut();
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignOut = () => {
    setUser(null);
    navigate("/signin");
    localStorage.clear();
  };

  return (
    <>
      <Navbar>
        <NavItem>
          <BasicBtn onClick={() => navigate("/")}>메인</BasicBtn>
          <BasicBtn onClick={() => navigate("/profile")}>내 프로필</BasicBtn>
        </NavItem>
        <NavItem>
          <UserProfile>
            {user && (
              <UserInfo>
                <UserImg src={user.avatar} alt="User Avatar" />
                <UserNickname>{user.nickname}</UserNickname>
                <LogoutBtn onClick={handleSignOut}>로그아웃</LogoutBtn>
              </UserInfo>
            )}
          </UserProfile>
        </NavItem>
      </Navbar>
      <>
        <Outlet />
      </>
    </>
  );
};

export default Layout;
