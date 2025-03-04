import React from 'react';
import { Form, InputGroup } from "react-bootstrap";

export const InputFields =({
    type,
    placeholder,
    label,
    value,
    className,
    required,
    feedback,
    name,
    onChange,
    min,
    title,
    pattern,
}) => {
    return (
        <Form.Group className='mt-2'>
            {label && <Form.Label htmlFor={label} className={'fw-semibold text-dark ps-2'}>{label}</Form.Label>}
                <Form.Control
                    type={type}
                    value={value ?? ""}
                    placeholder={placeholder}
                    name={name}
                    className={className}
                    onChange={onChange}
                    required={required}
                    min={min}
                    title={title}
                    pattern={pattern}
                />
        </Form.Group>
    )
};
