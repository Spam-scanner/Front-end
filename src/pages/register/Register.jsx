import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.span`
    font-size: 36px;
    font-weight: bold;
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
    margin-top: 20px;
    color: #8D8BA7;
    //text-shadow: 0px 1px 10px #a9a7c5;
`;

const Input = styled.input`
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
        margin-top: 40px;
        cursor: pointer;
        &:hover {
            opacity: 0.8;
        }
    }
`;

function Register(props) {
    const [form, setForm] = useState({
        id: "",
        password: "",
        confirmPassword: "",
        birthYear: "",
        email: "",
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    const onSubmit = (e) => {
        e.preventDefault(); // 화면 새로고침 막음

        // 회원가입 로직 구현
        try {
            
        } catch (e) {
            
        }
    }

    return (
        <Wrapper>
            <Title>회원가입</Title>
            <Form onSubmit={onSubmit}>
                <Label>아이디</Label>
                <Input onChange={onChange} name="id" value={form.id} placeholder="아이디를 입력해주세요." type="text" />
                <Label>비밀번호</Label>
                <Input onChange={onChange} name="password" value={form.password} placeholder="비밀번호를 입력해주세요." type="password" />
                <Label>비밀번호 확인</Label>
                <Input onChange={onChange} name="confirmPassword" value={form.confirmPassword} placeholder="비밀번호를 다시 입력해주세요." type="password" />
                <Label>출생년도</Label>
                <Input onChange={onChange} name="birthYear" value={form.birthYear} placeholder="태어난 연도를 입력해주세요. ex)2001" type="text" />
                <Label>이메일</Label>
                <Input onChange={onChange} name="email" value={form.email} placeholder="이메일 주소를 입력해주세요." type="email" />
                <Input type="submit" value={"회원가입"} />
            </Form>
        </Wrapper>
    );
}

export default Register;