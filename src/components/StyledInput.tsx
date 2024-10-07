import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface StyledInputProps {
  label: string;
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string | null;
  showPasswordToggle?: boolean; // Optional prop for showing/hiding password
}

const StyledInput: React.FC<StyledInputProps> = ({
  label,
  type,
  id,
  value,
  onChange,
  required = false,
  error = null,
  showPasswordToggle = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Password visibility state

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === '') setIsFocused(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle between password and text input type
  };

  return (
    <div className="relative">
      <input
        type={showPassword && type === 'password' ? 'text' : type} // Toggle between 'text' and 'password'
        id={id}
        required={required}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`w-full px-3 py-2 border-b-2 bg-transparent text-neutralLight focus:outline-none focus:ring-0 placeholder-transparent peer ${
          isFocused || value ? 'border-secondary' : 'border-neutralLight'
        } ${
          error
            ? "border-error focus:ring-error"
            : "border-primary focus:ring-primary"
        }`}
        placeholder={label}
      />
      <label
        htmlFor={id}
        className={`absolute left-3 transition-all duration-200 ease-in-out ${
          isFocused || value
            ? '-top-2.5 text-sm text-secondary'
            : 'top-2 text-base text-neutralLight'
        }`}
      >
        {label}
      </label>

      {/* Optional password visibility toggle button */}
      {showPasswordToggle && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-neutralLight hover:text-secondary"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>
      )}
    </div>
  );
};

export default StyledInput;
