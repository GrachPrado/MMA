import React, { forwardRef } from 'react';
import "./RenderRegisterForm.scss";
import HeadingRegister from './headingRegister/HeadingRegister';
import SubtitleRegister from './subtitleRegister/SubtitleRegister';
import InputField from './inputField/InputField';
import SubmitButton from './submitButton.tsx/SubmitButton';
import { useValidateNameInput } from './inputField/useValidateNameInput/useValidateNameInput';

// Use forwardRef to pass down the ref
const RenderRegisterForm = forwardRef<HTMLDivElement, {}>((props, ref) => {
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
            validateNameInput={useValidateNameInput}
          />
          <InputField
            label="Телефон:"
            name="telephone"
            type="tel"
            placeholder="+380"
          />
        </div>
        <SubmitButton />
      </div>
    </div>
  );
});

export default RenderRegisterForm;
