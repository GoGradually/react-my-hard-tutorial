import {useState} from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox.tsx";
import Select from "../components/Select.tsx";

function LoginPage() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [isHungry, setIsHungry] = useState(false);
  const [menu, setMenu] = useState("한식");
  const [containLoginInfo, setContainLoginInfo] = useState(false);

    const menuOptions = [
      { value: "한식", label: "한식" },
      { value: "중식", label: "중식" },
      { value: "일식", label: "일식" },
      { value: "양식", label: "양식" },
    ];

    return (
    <div>
        <h1>로그인</h1>
        <div>
            <Input value={name} label="이름" onChange={setName}/>
        </div>
        <div>
            <Input value={password} type="password" label="비밀번호" onChange={setPassword}/>
        </div>
        <Checkbox checked={containLoginInfo} onChange={setContainLoginInfo} label="로그인 정보 기억하기"/>
        <div>
            <Checkbox checked={isHungry} onChange={setIsHungry} label="배고픔 여부"/>
        </div>
        <div>
            <Select options={menuOptions} value={menu} onChange={setMenu}/>
        </div>
        <div>
            <Button description="제출" variant="primary" size="medium" onClick={() => {
                alert(`이름: ${name}\n비밀번호: ${password}\n로그인 정보 기억하기: ${containLoginInfo}\n배고픔 여부: ${isHungry}\n선택한 메뉴: ${menu}`);
            }}/>
        </div>

    </div>
  );
}

export default LoginPage;
