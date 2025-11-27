import type {ChangeEvent} from 'react';

type InputProps = {
    label?: string;
    value: string;
    onChange?: (value: string) => void;
    type?: 'text' | 'password';
}

function Input({label, value, type, onChange}: InputProps) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }
    return (
        <div>
            <span>{label && <label>{label}</label>}
            </span>
            <span>
                <input
                    type={type || 'text'}
                    value={value}
                    onChange={handleChange}
                />
            </span>
        </div>
    );
}

export default Input;