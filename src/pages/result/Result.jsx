import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { news1, news2, news3 } from "../../assets/news-data"; // 기사 데이터 가져오기

//  전체 페이지를 감싸는 컨테이너
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    max-width: 1200px;
    margin: auto;
    text-align: center;
`;

// 페이지 제목 스타일 
const Title = styled.h1`
    font-size: 30px;
    font-weight: bold;
    color: #5D5A88;
`;

//  페이지 부제목 스타일 
const Subtitle = styled.p`
    font-size: 16px;
    color: #8D8BA7;
    margin-top: 10px;
`;

// 예방 방법 섹션을 감싸는 컨테이너
const PreventionWrapper = styled.div`
    background-color: #F2F1FA;
    padding: 30px;
    border-radius: 15px;
    max-width: 900px;
    text-align: center;
    margin: 40px auto;
`;

// 예방 방법 제목 스타일
const PreventionTitle = styled.h2`
    font-size: 22px;
    font-weight: bold;
    color: #5D5A88;
    margin-top: 0px;
`;

//  예방 방법 본문 스타일
const PreventionText = styled.p`
    font-size: 14px;
    color: #8D8BA7;
    line-height: 1.6;
`;

//  뉴스 카드 전체를 감싸는 컨테이너
const NewsWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 0px;
    flex-wrap: wrap;
`;

//  뉴스 카드 개별 스타일
const NewsCard = styled.div`
    background-color: #F2F1FA;
    padding: 20px;
    border-radius: 15px;
    width: 300px;
    text-align: left;
`;

//  뉴스 제목 스타일
const NewsTitle = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
    color: #5D5A88;
`;

// 뉴스 내용 스타일 (일부만 표시되도록 설정)
const NewsText = styled.p`
    font-size: 14px;
    color: #8D8BA7;
    margin: 10px 0;
    height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

// 뉴스 링크 스타일
const NewsLink = styled.a`
    font-size: 14px;
    font-weight: bold;
    color: #5D5A88;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;



function Result() {
    const location = useLocation(); // 현재 페이지의 경로 정보를 가져옴
    const spamType = location.state?.spamType || "로맨스 스캠"; // 선택된 스팸 유형 (기본값: "로맨스 스캠")

    // 선택된 스팸 유형에 따라 관련 뉴스 데이터를 반환하는 함수
    const getNewsData = () => {
        switch (spamType) {
            case "로맨스 스캠":
                return news1 || [];
            case "스미싱":
                return news2 || [];
            case "미끼 문자":
                return news3 || [];
            default:
                return [];
        }
    };

    const newsData = getNewsData(); // 선택된 스팸 유형에 맞는 뉴스 데이터 가져오기

    return (
        <Wrapper>
            <Title>해당 메시지는 스팸이에요!</Title>
            <Subtitle>아래는 해당 스팸과 관련된 예방 방법과 기사 링크입니다.</Subtitle>

            <PreventionWrapper>
                <PreventionTitle>예방 방법</PreventionTitle>
                <PreventionText>
                    스팸 메시지와 이메일을 예방하려면, 의심스러운 링크나 첨부 파일을 클릭하지 말고, 이메일 필터와 스팸 차단 기능을 적극 활용하세요.
                    개인 정보를 SNS나 공공 웹사이트에 노출하지 않으며, 강력한 비밀번호와 이중 인증(2FA)을 설정해 계정을 보호해야 합니다.
                    뉴스레터 구독은 필요한 것만 유지하고, 의심스러운 발신자나 도메인을 주의하며, 공공 Wi-Fi 사용 시 민감한 정보를 입력하지 않도록 주의하세요.
                    또한, 후후(Whowho)나 Truecaller 같은 스팸 차단 앱을 사용하고, 기기와 소프트웨어를 최신 상태로 유지하는 것이 중요합니다.
                    AI 기반 스팸 분석 도구를 활용해 추가적인 보호를 받을 수도 있습니다.
                </PreventionText>
            </PreventionWrapper>

            <NewsWrapper>
                {newsData.length > 0 ? (
                    //뉴스 데이터가 있을 경우, 
                    newsData.map((article, index) => (
                        <NewsCard key={index}>
                            <NewsTitle>{article.title}</NewsTitle>
                            <NewsText>{article.text}</NewsText>
                            <NewsLink href={article.link} target="_blank">
                                이 기사 보러가기 →
                            </NewsLink>
                        </NewsCard>
                    ))
                ) : (
                    <p>관련 기사가 없습니다.</p>
                )}
            </NewsWrapper>
        </Wrapper>
    );
}

export default Result;
