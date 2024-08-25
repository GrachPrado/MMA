import React from 'react';
import "./renderInput.scss";
import {RenderInputProps} from "./RenderInputTypes";
const RenderInput: React.FC<RenderInputProps> = ({
  label,
  name,
  type = "text",
  placeholder,
}) => {
  return (
    <fieldset className={`registerForm__container-input`}>
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

export default React.memo(RenderInput);
