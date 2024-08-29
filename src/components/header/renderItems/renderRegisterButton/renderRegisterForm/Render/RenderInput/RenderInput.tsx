import React, {useEffect} from 'react';
import usePhoneValidation from '../../Hooks/validatePhone/usePhoneValidation';
import useNameValidation from '../../Hooks/ValidateName/useNameValidation';
import { RenderInputProps } from './RenderInputTypes';
import "./renderInput.scss";
const RenderInput: React.FC<RenderInputProps & { setIsValid: (isValid: boolean) => void }> = ({ label, name, type, placeholder,value, onChange, setIsValid }) => {
  const { phone, isValid: isPhoneValid, handlePhoneChange } = usePhoneValidation();
  const { name: nameValue, isValid: isNameValid, handleNameChange } = useNameValidation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e); // Pass the event up to the parent component to handle state
    if (name === 'telephone') {
      handlePhoneChange(e.target.value);
    } else if (name === 'name') {
      handleNameChange(e.target.value);
    }
  };

  useEffect(() => {
    if (name === 'telephone') {
      setIsValid(isPhoneValid);
    } else if (name === 'name') {
      setIsValid(isNameValid);
    }
  }, [isPhoneValid, isNameValid, name, setIsValid]);


  return (
<fieldset className={`registerForm__container-input ${nameValue || phone ? 'has-value' : ''}`}>
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
