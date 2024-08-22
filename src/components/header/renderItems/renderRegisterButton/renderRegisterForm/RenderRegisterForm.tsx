import React from 'react';
import "./RenderRegisterForm.scss";
import HeadingRegister from './headingRegister/HeadingRegister';
import SubtitleRegister from './subtitleRegister/SubtitleRegister';
import InputField from './inputField/InputField';
import SubmitButton from './submitButton.tsx/SubmitButton';

function RenderRegisterForm() {
  return (
    <div className='registerForm'>
      <div className='registerForm__container'>
      <HeadingRegister />
      <SubtitleRegister />
      <div className='registerForm__inputFields'>
      <InputField
          label="Ваше ім'я:"
          name="name"
          type="text"
          placeholder="Введіть ваше ім'я"
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
}

export default RenderRegisterForm;