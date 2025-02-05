import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./LoginPage.modul.css";
import LoginImage from "../resources/img/Login.png";

const User = {
  id: "park",
  pw: "asdd45",
};

function LoginPage() {
  const [id, setID] = useState("");
  const [pw, setPw] = useState("");
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const handleId = (e) => {
    setID(e.target.value);
  };

  const handlePw = (e) => {
    setPw(e.target.value);
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;//유효성 검사
    setPwValid(regex.test(e.target.value));
  };

  const onClickConfirmButton = () => {
    if (id === User.id && pw === User.pw) {
      alert("로그인에 성공");
    } else {
      alert("없는 회원입니다.");
    }
  };

  useEffect(() => {
    setNotAllow(!pwValid);
  }, [pwValid]);

  return (
    <div className={styles.page}>
      <div className="titleWrap">
        <br />
        <img src={LoginImage} alt="로그인 이미지" style={{ width: "115px", height: "50px" }} />

      </div>

      <div className="contentWrap">
        <div className="inputTitle">아이디</div>
        <div className="inputWrap">
          <input type="text" className="input" placeholder="아이디를 입력해주세요." value={id} onChange={handleId} />
        </div>

        <div style={{ marginTop: "26px" }} className="inputTitle">
          비밀번호
        </div>
        <div className="inputWrap">
          <input type="password" className="input" placeholder="비밀번호를 입력해주세요." value={pw} onChange={handlePw} />
        </div>
        <div className="errorMessageWrap">{!pwValid && pw.length > 0 && <div>비밀번호를 입력해주세요.</div>}</div>
      </div>

      <div className="buttonWrap">
        <button onClick={onClickConfirmButton} disabled={notAllow} className="bottombutton">
          로그인
        </button>
      </div>
      <br />
      <div className="registerWrap">
        <div className="registerTitle">
          회원가입을 해주세요 <Link to="/register">가입하기</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
