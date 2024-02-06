import React from 'react';

interface InputProps {
    value: string;
    onChange: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({ value, onChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <input type="text" value={value} onChange={handleChange} />
    );
};
