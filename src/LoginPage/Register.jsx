import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
const Title = styled.h2`
  font-size: 30px;
  font-weight: bold;
  color: #5b4a83; /* 보라색 */
  margin-bottom: 20px;
  text-align: center;
  text-shadow: 2px 2px 5px rgba(91, 74, 131, 0.5);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const InputField = styled.div`
  width: 100%;
  max-width: 374px;
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
  background-color: ${({ disabled }) => (disabled ? "#dadada" : "#5b4a83")};
  color: white;
  width: 100%;
  max-width: 374px;
  height: 51px;
  border: none;
  font-weight: 700;
  font-size: 16px;
  border-radius: 25px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
`;

const Text = styled.div`
  margin-top: 20px;
  font-size: 14px;
`;

function Register() {
  const [id, setID] = useState("");
  const [pw, setPw] = useState("");
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setNotAllow(!pwValid);
  }, [pwValid]);

  const handleId = (e) => setID(e.target.value);
  const handlePw = (e) => {
    setPw(e.target.value);
    setPwValid(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(e.target.value));
  };

  const onClickConfirmButton = () => {
    alert("회원가입이 완료되었습니다.");
    navigate("/");
  };

  return (
    <Wrapper>
      <Header/>
      <Title> 회원가입</Title>
     <InputField>
        <input type="text" placeholder="아이디를 입력해주세요." value={id} onChange={handleId} />
      </InputField>
      <InputField>
        <input type="password" placeholder="비밀번호를 입력해주세요." value={pw} onChange={handlePw} />
      </InputField>
      {!pwValid && pw.length > 0 && <Text style={{ color: "#ef0000", fontSize: "12px" }}>영문, 숫자 포함 6자 이상 입력하시오.</Text>}
      <Button onClick={onClickConfirmButton} disabled={notAllow}>가입</Button>
      <Text>
        계정이 있으신가요? <Link to="/" style={{ fontWeight: "bold", color: "#e854cc" }}>로그인하기</Link>
      </Text>
      <Footer/>

    </Wrapper>
  );
}

export default Register;
