import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 680px;
`;

const Title = styled.span`
    font-size: 36px;
    font-weight: bold;
    padding-bottom: 20px;
    //text-shadow: 0px 2px 5px #8D8BA7;
    color: #5D5A88;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 380px; 
`;

const Label = styled.label`
    font-size: 14px;
    margin-top: 15px;
    color: #8D8BA7;
    //text-shadow: 0px 1px 10px #a9a7c5;
`;

const Input = styled.input`
    font-family: 'Pretendard-Regular';
    padding: 16px 20px;
    margin-top: 5px;
    font-size: 16px;
    background-color: #F9F9FF;
    color: #5D5A88;
    //box-shadow: 0px 3px 5px rgb(179, 177, 205);
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
        margin-top: 30px;
        cursor: pointer;
        
        &:hover {
            opacity: 0.8;
        }
        &:disabled {
          background-color: #dadada;
          border: 1px solid #dadada;
          cursor: not-allowed;
          &:hover {
            opacity: 1;
          }
      }
    }
`;

const InputField = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    position: relative;
`;

const Error = styled.span`
    color: tomato;
    font-size: 13px;
    position: absolute;
    bottom: 0px;
    margin-top: 2px;
`;

const Select = styled.select`
    font-family: 'Pretendard-Regular';
    padding: 16px 20px;
    width: 100%; 
    height: 51.2px;
    margin-top: 5px;
    font-size: 16px;
    background-color: #F9F9FF;
    color: #5D5A88;
    //box-shadow: 0px 3px 5px rgb(179, 177, 205);
    border: none;
    border-radius: 10px;
    transition: background-color 0.3s ease, opacity 0.3s ease;  // 애니메이션 효과 추가

    &:focus {
        outline: 0.5px solid hsl(243.75, 32.00000000000001%, 90.19607843137256%);
        background-color: #f5f5fe;
    }
`;

const REQUIRED_MESSAGE = '필수 입력 사항입니다.';

function Register(props) {
    const navigate = useNavigate();
    // useForm으로 폼 상태 관리함 = useState 불필요
    // 이벤트 핸들링, 유효성 검사 모두 처리해줌 = onChange 불필요
    const {
        register,       // 폼 상태를 추적함 -> ...register("id") = "id"로 필드 등록하고 값을 자동 추적
        handleSubmit,   // 유효성 검사를 실행하고 에러가 없을 시 콜백 함수 호출(onSubmit)
        watch,          // 특정 또는 전체 필드 실시간 확인
        formState: { isValid, errors } // 폼의 현재 상태를 관리 { 폼이 모두 작성 되었는지, 유효성 검사 에러 }
    } = useForm({
        mode: "onBlur", // 필드의 포커스를 잃을 때마다 검사
    });

    const onSubmit = (data) => {
        //useForm의 handleSubmit을 사용하면 자동으로 새로고침을 막아줌
        // 회원가입 로직 구현
        try {
            console.log(data);
            navigate("/");
            alert("회원가입 되었습니다.");

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Wrapper>
            <Title>회원가입</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputField>
                    <Label>아이디</Label>
                    <Input placeholder="아이디를 입력해주세요." type="text"
                        {...register('id', {
                            required: REQUIRED_MESSAGE,
                            pattern: {
                                value: /^[a-z0-9]+[a-z0-9]{5,}$/g,
                                message: '영문, 숫자를 포함한 6자 이상의 아이디를 입력해주세요.'
                            }
                        })}
                    />
                    {errors.id && <Error>{errors.id.message}</Error>}
                </InputField>

                <InputField>
                    <Label>비밀번호</Label>
                    <Input placeholder="비밀번호를 입력해주세요." type="password"
                        {...register('password', {
                            required: REQUIRED_MESSAGE,
                            pattern: {
                                value: /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/,
                                message: '영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.'
                            }
                        })}
                    />
                    {errors.password && <Error>{errors.password.message}</Error>}
                </InputField>

                <InputField>
                    <Label>비밀번호 확인</Label>
                    <Input placeholder="비밀번호를 다시 입력해주세요." type="password"
                        {...register('confirmPassword', {
                            required: REQUIRED_MESSAGE,
                            validate: (value) => value === watch('password') || '비밀번호가 일치하지 않습니다.'
                        })}
                    />
                    {errors.confirmPassword && <Error>{errors.confirmPassword.message}</Error>}
                </InputField>

                <InputField>
                    <Label>생년월일</Label>
                    <Select {...register('birthYear', { required: REQUIRED_MESSAGE })}>
                        <option value="">태어난 연도를 선택해주세요.</option>
                        {Array.from({ length: 106 }, (_, i) => 1920 + i).map((year, index) => (
                            <option key={index} value={year}>{year}</option>
                        ))}
                    </Select>
                    {errors.birthYear && <Error>{errors.birthYear.message}</Error>}
                </InputField>

                <Input type="submit" value={"회원가입"} disabled={!isValid} />
            </Form>
        </Wrapper >
    );
}

export default Register;
