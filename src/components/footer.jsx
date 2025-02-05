import styled from "styled-components";
import Logo from "./logo";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 50%;
    padding: 30px 0px;
    bottom: 0px;
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