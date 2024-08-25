import React from 'react';
import RenderFormHeader from './RenderFormHeader/RenderFormHeader';
import RenderSubtitle from './RenderSubtitle/RenderSubtitle';
import RenderInput from './RenderInput/RenderInput';
import RenderSubmitButton from './RenderSubmitButton/RenderSubmitButton';
import "./renderRegisterForm.scss";

const RenderRegisterForm: React.FC = () => {
  return (
    <div className='registerForm'>
      <div className='registerForm__container'>
        <RenderFormHeader />
        <RenderSubtitle />
        <div className='registerForm__inputFields'>
        <RenderInput
            label="Ваше ім'я:"
            name="name"
            type="text"
            placeholder="Введіть ваше ім'я"
          />
          <RenderInput
            label="Телефон:"
            name="telephone"
            type="tel"
            placeholder="+380"
          />
          </div>
        <RenderSubmitButton />
      </div>
    </div>
  );
}

export default RenderRegisterForm;
