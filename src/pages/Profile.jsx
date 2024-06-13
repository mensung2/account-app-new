import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { updateProfile } from "../lib/api/auth";

const Container = styled.main`
  background-color: #f8f9fa;
  color: #222;
  width: 450px;
  height: 400px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 13pt;
  margin: auto;
  margin-top: 20px;
`;

const InputGroup = styled.section`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 400px;
    padding: 8px;
    box-sizing: border-box;
  }
`;

const Button = styled.button`
  width: 90%;
  height: 30px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const H2 = styled.p`
  margin: 0 0 30px 0;
  font-size: 15pt;
`;

const Profile = ({ user, setUser }) => {
  const [nickname, setNickname] = useState("");
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();

  const handelUpdateprofile = async () => {
    console.log(nickname);
    console.log(avatar);

    const formData = new FormData();
    formData.append("nickname", nickname);
    formData.append("avatar", avatar);
    const response = await updateProfile(formData);

    if (response.success) {
      setUser({
        ...user,
        nickname: response.nickname,
        avatar: response.avatar,
      });
      navigate("/");
    }
  };

  return (
    <Container>
      <H2>프로필 수정</H2>
      <InputGroup>
        <label htmlFor="nickname">닉네임</label>
        <input
          type="text"
          placeholder="닉네임"
          minLength="1"
          maxLength="10"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="avatar">아바타 이미지</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
        />
      </InputGroup>
      <Button onClick={handelUpdateprofile}>업데이트</Button>
    </Container>
  );
};

export default Profile;
