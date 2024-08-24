import React from "react";
import "./inputField.scss";
import { InputFieldProps } from "./inputFieldTypes";
import useChangeBorderOnFocus from "./useChangeBorderOnFocus/useChangeBorderOnFocus";


const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  validateNameInput,
}) => {
    const { inputValue, handleChange, inputClass } = useChangeBorderOnFocus();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value: newValue } = event.target;
      if (validateNameInput && (validateNameInput(newValue) || newValue === "")) {
        handleChange(event);
      }
    };
  
    return (
      <fieldset className={`${inputClass} registerForm__container-input`}>
        <legend>{label}</legend>
        <input
          type={type}
          name={name}
          value={inputValue}
          onChange={handleInputChange} // Use the custom change handler
          placeholder={placeholder}
          className={inputClass}
          required
        />
      </fieldset>
    );
  };
  
  export default React.memo(InputField);