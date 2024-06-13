import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signin } from "../lib/api/auth";

const Container = styled.main`
  background-color: #f8f9fa;
  color: #222;
  width: 450px;
  height: 320px;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 13pt;
  margin: auto;
  margin-top: 20px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 400px;
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin: 0 0 5px 0;
  input {
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    width: 390px;
    padding: 5px;
  }
`;

const H2 = styled.p`
  margin: 0 0 20px 0;
  font-size: 15pt;
`;

const SignInBtn = styled.button`
  width: 100%;
  height: 30px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SignUpBtn = styled.button`
  width: 100%;
  height: 30px;
  background-color: gray;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SignIn = ({ setUser }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    const { userId, nickname, avatar } = await signin({
      id: id,
      password: password,
    });

    alert("로그인 성공");
    setUser({ userId, nickname, avatar });
    navigate("/");
  };

  return (
    <Container>
      <Section>
        <H2>로그인</H2>
        <InputRow>
          <p>아이디</p>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="아이디"
          />
        </InputRow>
        <InputRow>
          <p>비밀번호</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
          />
        </InputRow>
        <SignInBtn onClick={handleSignIn} type="submit">
          로그인
        </SignInBtn>
        <SignUpBtn onClick={() => navigate("/signup")}>회원가입</SignUpBtn>
      </Section>
    </Container>
  );
};

export default SignIn;
