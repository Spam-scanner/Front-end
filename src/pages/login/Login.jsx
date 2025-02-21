  import { useForm } from "react-hook-form";
  import { Link , useNavigate} from "react-router-dom"; 
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
      color: #5D5A88;
  `;

  const Form = styled.form`
      display: flex;
      flex-direction: column;
      width: 380px; 
  `;

  const Label = styled.label`
      font-size: 14px;
      margin-top: 20px;
      color: #8D8BA7;
  `;

  const Input = styled.input`
      padding: 16px 20px;
      margin-top: 5px;
      font-size: 16px;
      background-color: #F9F9FF;
      color: #5D5A88;
      border: none;
      border-radius: 10px;
      transition: background-color 0.3s ease, opacity 0.3s ease;

      &:focus {
          outline: 0.5px solid hsl(243.75, 32%, 90%);
          background-color: #f5f5fe;
      }
      &::placeholder {
          opacity: 60%;
      }
  `;

  const Button = styled.input`
      font-size: 14px;
      font-weight: 900;
      background-color: #5D5A88;
      color: white;
      border: 1px solid #5D5A88;
      border-radius: 50px;
      margin-top: 40px;
      cursor: pointer;
      height: 50px;

      &:hover {
          opacity: 0.8;
      }

      &:disabled {
          background-color: #dadada;
          border: none;
          cursor: not-allowed;
      }
  `;

  const StyledLink = styled(Link)`
      font-size: 14px;
      font-weight: 900;
      background-color: white;
      color: #5D5A88;
      border: 1px solid #5D5A88;
      border-radius: 50px;
      margin-top: 40px;
      cursor: pointer;
      height: 50px;
      width: 100%; 
      display: flex;
      align-items: center; 
      justify-content: center; 
      text-decoration: none;

  `;

  const Error = styled.span`
      color: tomato;
      font-size: 13px;
  `;

function Login() {
    const navigate = useNavigate(); // useNavigate 훅 사용

      const {
          register,
          handleSubmit,
          formState: { isValid, errors }
      } = useForm({
          mode: "onBlur",
      });

      const onSubmit = (data) => {
          try {
              console.log("로그인 데이터:", data);
              alert("로그인 성공!");
              navigate("/analysis");
          } catch (error) {
              console.log(error);
          }
      };

      return (
          <Wrapper>
              <Title>로그인</Title>
              <Form onSubmit={handleSubmit(onSubmit)}>
                  <Label>아이디</Label>
                  <Input placeholder="아이디를 입력해주세요." type="text"
                      {...register('id', {
                          required: '이 필드는 필수 입력 항목입니다.',
                      })}
                  />
                  {errors.id && <Error>{errors.id.message}</Error>}

                  <Label>비밀번호</Label>
                  <Input placeholder="비밀번호를 입력해주세요." type="password"
                      {...register('password', {
                          required: '이 필드는 필수 입력 항목입니다.',
                      })}
                  />
                  {errors.password && <Error>{errors.password.message}</Error>}

                  <Button type="submit" value="로그인" disabled={!isValid} />

                  <StyledLink to="/register">회원가입</StyledLink>
              </Form>
          </Wrapper>
      );
  }

  export default Login;
