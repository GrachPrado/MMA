import React from 'react';
import "./RenderRegisterForm.scss";
import HeadingRegister from './headingRegister/HeadingRegister';
import SubtitleRegister from './subtitleRegister/SubtitleRegister';
import InputField from './inputField/InputField';
import SubmitButton from './submitButton.tsx/SubmitButton';

function RenderRegisterForm() {
  return (
    <div className='registerForm'>
    <HeadingRegister />
      <SubtitleRegister />
      <InputField label="Ваше Имя" placeholder="Введите Ваше Имя" />
      <InputField label="Номер Тел." placeholder="+380" type="tel" />
      <SubmitButton />
    </div>
  );
}

export default RenderRegisterForm;