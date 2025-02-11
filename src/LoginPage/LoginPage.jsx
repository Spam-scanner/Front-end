import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from '../components/footer';
import Header from '../components/header';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;
const Title = styled.h2`
  font-size: 35px;
  font-weight: bold;
  color: #5b4a83; /* 보라색 */
  margin-bottom: 20px;
  text-align: center;
  `;


const InputField = styled.div`
  width: 100%;
  max-width: 350px;
  display: flex; 
  align-items: center; /* 가운데 정렬 */
  margin-bottom: 16px;

  input {
    width: 100%;
    padding: 12px;
    border: 1px solid #e2e0e0;
    border-radius: 8px;
    background-color: #F9F9FF;
    font-size: 16px;
  }

  input:focus {
    border-color: #e854cc;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  max-width: 350px;
  height: 51px;
  border: ${({ primary }) => (primary ? "none" : "1px solid #5b4a83")};
  background-color: ${({ primary }) => (primary ? "#5b4a83" : "#FFFFFF")};
  color: ${({ primary }) => (primary ? "white" : "#5b4a83")};
  font-weight: 700;
  font-size: 16px;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#483A66" : "#f0f0f0")};
  }

  &:disabled {
    background-color: #dadada;
    color: white;
    cursor: default;
    border: none;
  }
`;

const StyledLink = styled(Link)`
  width: 100%;  
  max-width: 350px;
`;


const Text = styled.div`
  margin-top: 20px;
  font-size: 14px;
`;

const User = {
  id: "park",
  pw: "asdd45",
};

function LoginPage() {
  const [id, setID] = useState("");
  const [pw, setPw] = useState("");
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  useEffect(() => {
    setNotAllow(!pwValid);
  }, [pwValid]);

  const handleId = (e) => setID(e.target.value);
  const handlePw = (e) => {
    setPw(e.target.value);
    setPwValid(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(e.target.value));
  };

  const onClickConfirmButton = () => {
    alert(id === User.id && pw === User.pw ? "로그인 성공" : "없는 회원입니다.");
  };

  return (
    <Wrapper>
      <Header/>
      <Title> 로그인 </Title>
      <InputField>
        <input type="text" placeholder="아이디를 입력해주세요." value={id} onChange={handleId} />
      </InputField>
      <InputField>
        <input type="password" placeholder="비밀번호를 입력해주세요." value={pw} onChange={handlePw} />
      </InputField>
      {!pwValid && pw.length > 0 && <Text style={{ color: "#ef0000", fontSize: "12px" }}>비밀번호를 입력해주세요.</Text>}
      
      <Button primary onClick={onClickConfirmButton} disabled={notAllow}>로그인</Button>

       <StyledLink to="/register">
        <Button>회원가입</Button>
      </StyledLink>
      <Footer/>

    </Wrapper>
    
  );
}

export default LoginPage;
