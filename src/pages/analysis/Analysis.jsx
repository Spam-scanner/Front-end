import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Loading from "./Loading";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 30px 40px 30px;
    background-color: #F2F1FA;
    border: none;
    border-radius: 20px;
    width: 70vw;
    max-width: 500px;
`;

const Text = styled.span`
    font-weight: bold;
    color: ${(props) => props.color ? props.color : "black"};
    font-size: ${(props) => props.fontSize ? props.fontSize : "36px"};
`;

const TextArea = styled.textarea`
    box-sizing: border-box;
    font-size: 14px;
    font-family: 'Pretendard-Regular';
    color: #5D5A88;
    background-color: white;
    display: flex;
    width: 100%;
    padding: 20px;
    border: none;
    border-radius: 20px;
    resize: none; // 텍스트 박스 크기 설정 불가능
    &::placeholder {
        color: #ADABC3;
    }
    
    &:focus {
        outline: 0.5px solid #bbbac9;
    }
`;

const InputField = styled.div`
    position: relative;
`;

const Input = styled.input`
    padding: 16px 20px;
    font-size: 16px;
    background-color: #F9F9FF;
    color: #5D5A88;
    border: none;
    border-radius: 10px;
    transition: background-color 0.3s ease, opacity 0.3s ease;  // 애니메이션 효과 추가

    &:focus {
        outline: 0.5px solid hsl(243.75, 32.00000000000001%, 90.19607843137256%);
        background-color: #f5f5fe;
    }
    &::placeholder {
        opacity: 60%;
    }
    &[type="submit"] {
        font-size: 14px;
        font-weight: 900;
        background-color: #5D5A88;
        color: white;
        border: 1px solid #5D5A88;
        border-radius: 50px;
        margin-top: 20px;
        cursor: pointer;
        &:hover {
            opacity: 0.8;
        }
    }
`;

const Error = styled.span`
    color: tomato;
    font-size: 13px;
    position: absolute;
    margin-top: 2px;
`;

function Analysis(props) {
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        mode: "onChange"
    });

    // handleSubmit에서 유효성 검사 성공 시
    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            console.log(data);
            await new Promise((resolve) => setTimeout(resolve, 2000)); // 2초간 로딩 시간 테스트, 통신할 때 변경하기?

            // 제출하면 폼 리셋
            reset();
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    // handleSubmit에서 유효성 검사 실패 시
    const onInvalid = (errors) => {
        console.log(errors);
    }

    return (
        <>
        {isLoading ? <Loading /> : 
         <Wrapper>
            <Text fontSize="35px" color="#5D5A88">스팸 분석기</Text>
            <Form onSubmit={handleSubmit(onSubmit, onInvalid)}>
                <Text fontSize="16px" color="#5D5A88">이 메시지도 스팸일까요?</Text>
                <InputField>
                    <TextArea rows={15} maxLength={1000} placeholder="수신한 텍스트를 입력해주세요."
                        {...register("inputText", {
                            required: "필수 입력 사항입니다.",
                            maxLength: {
                                value: 1000,
                                message: "1000자 이하로 입력해주세요."
                            },
                        })}
                    />
                    {errors.inputText && <Error>{errors.inputText.message}</Error>}
                </InputField>
                <Input type="submit" value={"제출하기"} />
            </Form>
        </Wrapper> 
        }
        </>
       
    );
}

export default Analysis;