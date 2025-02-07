import styled from "styled-components";
import { useState } from "react";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0px;
    width: 100%;
    gap: 20px;
`;

const LoginButton = styled.div`
    color: ${(props) => props.isLogin ? "white" : "#5D5A88"};
    background-color: ${(props) => props.isLogin ? "#5D5A88" : "white"};
    font-size: 14px;
    border: 1px solid #D4D2E3;
    border-radius: 30px;
    padding: 15px 20px;
    cursor: pointer;

    // 반응형 스타일 추가
    @media (min-width: 768px) {
        position: absolute;
        right: 100px;
    }
`;

function Header(props) {
    const { fontSize } = props; // 헤더에 props로 헤더의 로고 크기를 조절(각 페이지마다 전달해주는 값을 다르게게)
    const [isLogin, setIsLogin] = useState(true); // 테스트용 true, 기본은 false로 설정 
    const navigate = useNavigate();

    const onClick = () => {
        if (isLogin) {
            const ok = window.confirm("정말 로그아웃 하시겠습니까?");
            if (ok) {
                // 로그아웃 구현하기?
                setIsLogin(false);
                navigate("/");
            }
        }
        else { // 로그인하지 않았을 경우
            // 로그인 페이지로 이동
            navigate("/");
        }
    }

    return (
        <Wrapper>
            <Logo fontSize={fontSize} />
            <LoginButton onClick={onClick} isLogin={isLogin}>
                {isLogin ? "로그아웃" : "로그인"}
            </LoginButton>
        </Wrapper>
    );
}

export default Header;