import React from "react";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  type?: string;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  type = "text",
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      className="rounded text-black p-2"
      type={type}
      value={value}
      onChange={handleChange}
    />
  );
};
