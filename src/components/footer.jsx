import styled from "styled-components";
import Logo from "./logo";

const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 30px;
    width: 100%;
    bottom: 0px;
    // 반응형 스타일 추가
    @media (max-width: 768px) {
        flex-direction: column; 
        text-align: center;       
        gap: 10px;                
    }
`;

const Text = styled.span`
    font-size: 14px;
    color: #9795B5;
`;

function Footer(props) {
    return (
        <Wrapper>
            <Logo fontSize="26px" />
            <Text>Copyright © 2025 SpamScanner | All Rights Reserved </Text>
        </Wrapper>
    );
}

export default Footer;