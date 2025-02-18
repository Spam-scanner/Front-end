import styled from "styled-components";
import { useState } from "react";
import Logo from "./logo";
import { useNavigate, useLocation } from "react-router-dom"; //useLocation 추가

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0px;
    width: 100%;
    gap: 20px;
`;

const LoginButton = styled.div`
    color: ${(props) => props.$isLogin ? "white" : "#5D5A88"};
    background-color: ${(props) => props.$isLogin ? "#5D5A88" : "white"};
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
    const { fontSize } = props; // 헤더 로고 크기 조절
    const [isLogin, setIsLogin] = useState(false); // 로그인 상태 관리
    const navigate = useNavigate();
    const location = useLocation(); //  현재 경로 확인=> 로그인 페이지에서는 로그인 버튼 비활성화화

    // 로그인 페이지에서는 버튼 숨김
    const isLoginPage = location.pathname === "/"; 
    if (isLoginPage) return <Wrapper><Logo fontSize={fontSize} /></Wrapper>;

    const onClick = () => {
        if (isLogin) {
            const ok = window.confirm("정말 로그아웃 하시겠습니까?");
            if (ok) {
                setIsLogin(false);
                navigate("/");
            }
        } else {
            navigate("/");
        }
    };

    return (
        <Wrapper>
            <Logo fontSize={fontSize} />{/*회원가입 페이지에서만 버튼 활성화 */}
            <LoginButton onClick={onClick} $isLogin={isLogin}>
                {isLogin ? "로그아웃" : "로그인"}
            </LoginButton>
        </Wrapper>
    );
}

export default Header;
