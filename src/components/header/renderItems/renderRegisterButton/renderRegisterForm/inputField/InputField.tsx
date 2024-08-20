import React from 'react';
// import './InputField.scss';

interface InputFieldProps {
  label: string;
  placeholder: string;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, type = 'text' }) => (
  <div className="input-field">
    <label>{label}</label>
    <input type={type} placeholder={placeholder} />
  </div>
);

export default InputField;
