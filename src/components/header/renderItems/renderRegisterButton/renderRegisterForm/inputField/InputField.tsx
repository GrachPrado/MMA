import React from "react";
import "./inputField.scss";
import { InputFieldProps } from "./inputFieldTypes";
import useChangeBorderOnFocus from "./useChangeBorderOnFocus/useChangeBorderOnFocus";


const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
}) => {
    const { inputValue, handleChange, inputClass } = useChangeBorderOnFocus();

  return (
    <fieldset className={`${inputClass} registerForm__container-input`}>
      <legend>{label}</legend>
      <input
        type={type}
        name={name}
        value={inputValue}  
        onChange={handleChange}
        placeholder={placeholder}
        className={inputClass}
        required
      />
    </fieldset>
  );
};

export default React.memo(InputField);
