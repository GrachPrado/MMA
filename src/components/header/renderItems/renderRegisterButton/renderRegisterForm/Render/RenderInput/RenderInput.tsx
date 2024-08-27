import React from 'react';
import usePhoneValidation from '../../Hooks/validatePhone/usePhoneValidation';
import useNameValidation from '../../Hooks/ValidateName/useNameValidation';
import { RenderInputProps } from './RenderInputTypes';
import "./renderInput.scss";
const RenderInput: React.FC<RenderInputProps> = ({ label, name, type, placeholder }) => {
  const { phone, isValid: isPhoneValid, handlePhoneChange } = usePhoneValidation();
  const { name: nameValue, isValid: isNameValid, handleNameChange } = useNameValidation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (name === 'telephone') {
      handlePhoneChange(e.target.value);
    } else if (name === 'name') {
      handleNameChange(e.target.value);
    }
  };

  return (
    <fieldset className="registerForm__container-input">
      <legend>{label}</legend>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={name === 'telephone' ? phone : name === 'name' ? nameValue : undefined}
        onChange={handleChange}
      />
      {name === 'telephone' && !isPhoneValid && (
        <div className="error">Invalid phone number</div>
      )}
      {name === 'name' && !isNameValid && (
        <div className="error">Invalid name (only letters, max 20 characters)</div>
      )}
    </fieldset>
  );
};

export default React.memo(RenderInput);
