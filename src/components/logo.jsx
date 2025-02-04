import styled from "styled-components";
import lock from "../assets/icon-lock.svg";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`;

const Img = styled.img`
    width: ${(props) => props.fontSize ? props.fontSize : "36px"};
`;

const Text = styled.span`
    font-family: "Pretendard";
    font-weight: bold;
    color: ${(props) => props.color ? props.color : "black"};
    font-size: ${(props) => props.fontSize ? props.fontSize : "36px"};
`;

function Logo(props) {
    const { fontSize } = props;
    const navigate = useNavigate();

    // 로고 클릭 시 홈페이지로 이동
    const onClick = () => {
        navigate("/");
    }

    return (
        <Wrapper onClick={onClick}>
            <Img fontSize={fontSize} src={lock} />
            <Text fontSize={fontSize} color="#5D5A88">스팸</Text>
            <Text fontSize={fontSize} color="#8D8BA7">스캐너</Text>
        </Wrapper>
    );
}

export default Logo;
