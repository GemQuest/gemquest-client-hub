import React, { useState } from 'react';

interface StyledInputProps {
  label: string;
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const StyledInput: React.FC<StyledInputProps> = ({ label, type, id, value, onChange, required = false }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === '') setIsFocused(false);
  };

  return (
    <div className="relative w-full mb-6">
      <input
        type={type}
        id={id}
        required={required}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`w-full h-12 px-4 bg-background text-neutralLight border-b-2 focus:outline-none transition-all
        ${isFocused || value ? 'border-secondary' : 'border-neutralLight'}`}
      />
      <label
        htmlFor={id}
        className={`absolute left-0 top-0 h-full flex items-center pl-4 transition-all duration-300 
        ${isFocused || value ? '-translate-y-5 text-xs text-secondary' : 'text-neutralLight'}`}
      >
        {label}
      </label>
    </div>
  );
};

export default StyledInput;
