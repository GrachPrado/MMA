import React, { forwardRef } from 'react';
import "./RenderRegisterForm.scss";
import HeadingRegister from './headingRegister/HeadingRegister';
import SubtitleRegister from './subtitleRegister/SubtitleRegister';
import InputField from './inputField/InputField';
import SubmitButton from './submitButton.tsx/SubmitButton';
import { useValidateNameInput } from './inputField/useValidateNameInput/useValidateNameInput';
import { validatePhoneInput } from './inputField/validatePhoneInput/validatePhoneInput';

// Use forwardRef to pass down the ref
const RenderRegisterForm = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const validateNameInput = useValidateNameInput(); // Call the name validation hook
  return (
    <div className='registerForm' ref={ref}>
      <div className='registerForm__container'>
        <HeadingRegister />
        <SubtitleRegister />
        <div className='registerForm__inputFields'>
          <InputField
            label="Ваше ім'я:"
            name="name"
            type="text"
            placeholder="Введіть ваше ім'я"
            validateNameInput={validateNameInput} // Pass name validation function
          />
          <InputField
            label="Телефон:"
            name="telephone"
            type="tel"
            placeholder="+380"
            validatePhoneInput={validatePhoneInput} // Pass the phone validation function
          />
        </div>
        <SubmitButton />
      </div>
    </div>
  );
});

export default RenderRegisterForm;