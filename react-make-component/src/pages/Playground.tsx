import {useState} from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox.tsx";

function Playground() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [isHungry, setIsHungry] = useState(false);
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
    </div>
  );
}

export default Playground;
