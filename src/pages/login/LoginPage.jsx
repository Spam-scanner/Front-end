import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Login from "./Login";
import AuthBackground from "../../assets/auth-background.svg"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`;

const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0.5rem 0px;
`;

const Img = styled.img`
    @media (max-width: 920px) {
        display: none;
    }
`;

function LoginPage(props) {
    return (
        <Wrapper>
            <Header fontSize="50px" />
            <Main>
                <Img src={AuthBackground} />
                <Login />
            </Main>
            <Footer />
        </Wrapper>
    );
}

export default LoginPage;