import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Result from "./Result";

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
    padding: 30px 0px;
`;



function ResultPage(props) {
    return (
        <Wrapper>
            <Header fontSize="50px" />
            <Main>
                <Result/>
            </Main>
            <Footer />
        </Wrapper>
    );
}

export default ResultPage;