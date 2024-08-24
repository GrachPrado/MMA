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
  validatePhoneInput,
}) => {
  const { inputValue, handleChange, inputClass } = useChangeBorderOnFocus();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: newValue } = event.target;

    let isValid = true;
    let formattedValue = newValue;

    if (name === "name" && validateNameInput) {
      isValid = validateNameInput(newValue) || newValue === "";
    } else if (name === "telephone" && validatePhoneInput) {
      formattedValue = validatePhoneInput(newValue);
    }

    if (isValid) {
      handleChange({ ...event, target: { ...event.target, value: formattedValue } });
    }
  };

  return (
    <fieldset className={`${inputClass} registerForm__container-input`}>
      <legend>{label}</legend>
      <input
        type={type}
        name={name}
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={inputClass}
        required
      />
    </fieldset>
  );
};

export default React.memo(InputField);
