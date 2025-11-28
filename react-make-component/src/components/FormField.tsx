type FormFieldProps = {
    label?: string;
    error?: string;
    helperText?: string;
    children: React.ReactNode;
}

function FormField({label, error, helperText, children}: FormFieldProps) {
    return (
        <div>
            {label && <label style={{display: 'block', marginBottom: 4, fontWeight: 'bold'}}>{label}</label>}
            <div>{children}</div>
            {helperText && !error && <div style={{marginTop: 4, fontSize: 12, color: '#666'}}>{helperText}</div>}
            {error && <div style={{marginTop: 4, fontSize: 12, color: 'red'}}>{error}</div>}
        </div>
    );
}

export default FormField;