import styled, { keyframes } from "styled-components";
import lock from "../../assets/icon-lock.svg"

const pulse = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 105px;
`;

const Circle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    border-radius: 50%;
    background-color: #F2F1FA;
    width: 300px;
    height: 300px;

    animation: ${pulse} 2s infinite ease-in-out;
`;

const Img = styled.img`
    width: ${(props) => props.fontSize ? props.fontSize : "36px"};
`;

const Text = styled.span`
    font-weight: bold;
    color: ${(props) => props.color ? props.color : "black"};
    font-size: ${(props) => props.fontSize ? props.fontSize : "36px"};
`;

function Loading(props) {
    return (
        <Wrapper>
            <Text fontSize="35px" color="#5D5A88">메시지를 분석중이에요!</Text>
            <Circle>
                <Img fontSize="100px" src={lock} />
                <Text fontSize="18px" color="#5D5A88">잠시만 기다려주세요.</Text>
            </Circle>
        </Wrapper>
    );
}

export default Loading;