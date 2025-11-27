type SelectProps = {
    options: {label: string; value: string}[],
    value: string,
    onChange: (value: string) => void
}

function Select({options, value, onChange}: SelectProps) {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value);
    }

    return (
        <select value={value} onChange={handleChange}>
            {options.map(option => (<option value={option.value}>{option.label}</option>))}
        </select>
    );
}

export default Select;