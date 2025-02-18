import styled from "styled-components";
import Analysis from "./Analysis";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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

function AnalysisPage(props) {
    return (
        <Wrapper>
            <Header fontSize="36px" />
            <Main>
                <Analysis />
            </Main>
            <Footer />
        </Wrapper>
    );
}

export default AnalysisPage;