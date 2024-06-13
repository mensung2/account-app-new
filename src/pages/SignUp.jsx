import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../lib/api/auth";

const Container = styled.main`
  background-color: #f8f9fa;
  color: #222;
  width: 450px;
  height: 400px;
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
  background-color: gray;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SignUpBtn = styled.button`
  width: 100%;
  height: 30px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SignUp = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (id.length < 4 || id.length > 10) {
      alert("id는 4글자에서 10글자로 입력해 주세요.");
      return;
    }

    if (password.length < 4 || password.length > 10) {
      alert("password는 4글자에서 15글자로 입력해 주세요.");
      return;
    }

    if (nickname.length < 1 || nickname.length > 10) {
      alert("nickname은 1글자에서 10글자로 입력해 주세요.");
      return;
    }

    // min/maxLength 는 공백 유효성 검사가 안 되니까 패스함. 댓글 입력에는 유효.
    // 일단 alert으로 하고 추후 텍스트 뜨는 걸로 수정하는 것도 생각 중

    const response = await register({
      id: id,
      password: password,
      nickname: nickname,
    });
    if (response) {
      confirm("회원 가입이 완료되었습니다.");
      navigate("/signin");
    }
  };

  return (
    <div>
      <Container>
        <Section>
          <H2>회원가입 </H2>
          <InputRow>
            <p>아이디</p>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="아이디 4~10글자"
            />
          </InputRow>
          <InputRow>
            <p>비밀번호</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호 4~15글자"
            />
          </InputRow>
          <InputRow>
            <p>닉네임</p>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="닉네임 1~10글자"
            />
          </InputRow>
          <SignUpBtn onClick={handleSignUp}>회원가입</SignUpBtn>
          <SignInBtn onClick={() => navigate("/signin")}>로그인</SignInBtn>
        </Section>
      </Container>
    </div>
  );
};

export default SignUp;
