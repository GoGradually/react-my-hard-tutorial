type CheckboxProps = {
    checked: boolean,
    onChange?: (checked: boolean) => void,
    label?: string
}

function Checkbox({checked, onChange, label}: CheckboxProps) {
    const handleChange = () => {
        onChange?.(!checked);
    }

    return (
        <label>
            <input type="checkbox" checked={checked} onChange={handleChange} />
            {label && <label>{label}</label>}
        </label>
    );
}

export default Checkbox;