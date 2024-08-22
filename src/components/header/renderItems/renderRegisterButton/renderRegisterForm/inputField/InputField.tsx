import React from "react";
import "./inputField.scss";

interface InputFieldProps {
  label: string; // Label for the input field
  name: string; // Name attribute for the input field
  type?: string; // Type of input (e.g., text, email, etc.), default to "text"
  placeholder?: string; // Placeholder text for the input field
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
}) => {
  return (
    <fieldset className="registerForm__container-input">
      <legend>{label}</legend>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required
      />
    </fieldset>
  );
};

export default React.memo(InputField);
