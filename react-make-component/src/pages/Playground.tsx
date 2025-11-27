import {useState} from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox.tsx";
import Select from "../components/Select.tsx";

function Playground() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [isHungry, setIsHungry] = useState(false);
  const [menu, setMenu] = useState("한식")

    const menuOptions = [
      { value: "한식", label: "한식" },
      { value: "중식", label: "중식" },
      { value: "일식", label: "일식" },
      { value: "양식", label: "양식" },
    ];

    return (
    <div>
      <div>Playground Component</div>
      
      <Button
        description="Click Me"
        variant="primary"
        size="small"
      />
        <Button description="Small" variant="primary" size="small" />
        <Button description="Medium" variant="primary" size="medium" />
        <Button description="Large" variant="primary" size="large" />

        <Input value={name} onChange={setName} label="id" />
        <Input value={password} onChange={setPassword} label="password" type="password" />

        <Checkbox checked={isHungry} label="배고픔 여부" onChange={setIsHungry}></Checkbox>
        <div>
            <Select value={menu} onChange={setMenu} options={menuOptions}/>
        </div>
    </div>
  );
}

export default Playground;
