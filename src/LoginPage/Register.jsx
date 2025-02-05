import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.modul.css";
import RegisterImage from "../resources/img/Register.png";
function Register() {
  const [id, setID] = useState("");
  const [pw, setPw] = useState("");
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const navigate = useNavigate();

  const handleId = (e) => {
    setID(e.target.value);
  };

  const handlePw = (e) => {
    setPw(e.target.value);
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    setPwValid(regex.test(e.target.value));
  };

  const onClickConfirmButton = () => {
    alert("회원가입이 완료되었습니다.");
    navigate("/");
  };

  useEffect(() => {
    setNotAllow(!pwValid);
  }, [pwValid]);

  return (
    <div className="page">
      <div className="titleWrap">
      <br/>
      <img src={RegisterImage} alt="회원가입 이미지지" style={{ width: "153px", height: "50px" }}/>
      </div>

      <div className="contentWrap">
        <div className="inputTitle">ID</div>
        <div className="inputWrap">
          <input type="text" className="input" placeholder="아이디를 입력해주세요" value={id} onChange={handleId} />
        </div>

        <div style={{ marginTop: "26px" }} className="inputTitle">
          비밀번호
        </div>
        <div className="inputWrap">
          <input type="password" className="input" placeholder="비밀번호를 입력해주세요" value={pw} onChange={handlePw} />
        </div>
        <div className="errorMessageWrap">{!pwValid && pw.length > 0 && <div>영문, 숫자 포함 6자 이상 입력하시오.</div>}</div>
      </div>

      <div className="buttonWrap">
        <button onClick={onClickConfirmButton} disabled={notAllow} className="bottombutton">
          가입
        </button>
      </div>
      <br />
      <div className="registerWrap">
        <div className="registerTitle">
          계정이 있으신가요? <Link to="/">로그인하기</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
