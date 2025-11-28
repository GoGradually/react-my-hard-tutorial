import FormField from "../components/FormField.tsx";
import Input from "../components/Input.tsx";
import {useState} from "react";
import Select from "../components/Select.tsx";
import Button from "../components/Button.tsx";


function SignUpPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const options = [
        { value: "KR", label: "대한민국" },
        { value: "US", label: "미국" },
        { value: "JP", label: "일본" },
        { value: "CN", label: "중국" },
    ];

    const initialNation = options[0].value;
    const [nation, setNation] = useState(initialNation);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const onClick = () => {
        const nextEmailError = email.includes("@")
            ? ""
            : "이메일 형식이 올바르지 않습니다.";

        const nextPasswordError = password.length >= 8
            ? ""
            : "비밀번호는 최소 8자 이상이어야 합니다.";

        const isValid = nextEmailError === "" && nextPasswordError === "";

        setEmailError(nextEmailError);
        setPasswordError(nextPasswordError);

        if (isValid) {
            alert(`이메일: ${email}\n비밀번호: ${password}\n국적: ${nation}`);
        }
    }


    return (
        <>
            <div>
                <h1>회원가입 페이지</h1>
            </div>
            <div>
                <FormField label={"이메일"} helperText={"이메일을 입력해주세요."} error={emailError}>
                    <Input type={"text"} value={email} onChange={setEmail} label={"email"}></Input>
                </FormField>
            </div>
            <div>
                <FormField label={"비밀번호"} helperText={"비밀번호를 입력해주세요."} error={passwordError}>
                    <Input type={"password"} value={password} onChange={setPassword} label={"password"}></Input>
                </FormField>
            </div>
            <div>
                <FormField label={"국적"} helperText={"국적을 선택해주세요."}>
                    <Select options={options} value={nation} onChange={setNation}/>
                </FormField>
            </div>
            <div>
                <Button description={"제출"} variant={"primary"} size={"medium"} onClick={onClick}/>
            </div>
        </>

    );
}

export default SignUpPage;