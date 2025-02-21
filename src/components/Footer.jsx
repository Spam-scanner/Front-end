import styled from "styled-components";
import Logo from "./Logo";

const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 72px 110px;
    width: 100%;
    bottom: 0px;
    // 반응형 스타일 추가
    @media (max-width: 900px) {
        flex-direction: column; 
        text-align: center;       
        gap: 10px;                
        padding: 72px 20px;
    }
`;

const Text = styled.span`
    font-size: 18px;
    color: #9795B5;
`;

function Footer(props) {
    return (
        <Wrapper>
            <Logo fontSize="34px" />
            <Text>Copyright © 2025 SpamScanner | All Rights Reserved </Text>
        </Wrapper>
    );
}

export default Footer;