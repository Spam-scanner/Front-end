import styled from "styled-components";
import Header from '../components/HeaderTemp';
import Footer from '../components/FooterTemp';

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: yellow;
`;

const Gap = styled.div`
    height: 50px;
`;

function TestPage() {
    return(
        <Wrapper>
            <Header />
            <Gap />
            <Footer />
        </Wrapper>
    );
}

export default TestPage;