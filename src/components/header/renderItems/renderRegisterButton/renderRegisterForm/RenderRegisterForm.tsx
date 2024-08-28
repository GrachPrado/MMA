import React, {useState} from 'react';
import RenderFormHeader from './Render/RenderFormHeader/RenderFormHeader';
import RenderSubtitle from './Render/RenderSubtitle/RenderSubtitle';
import RenderInput from './Render/RenderInput/RenderInput';
import RenderSubmitButton from './Render/RenderSubmitButton/RenderSubmitButton';
import "./renderRegisterForm.scss";

const RenderRegisterForm: React.FC = () => {
   // Use state to track if the phone number is valid
   const [isPhoneValid, setIsPhoneValid] = useState(false);

   // Use state to track if the name is valid
   const [isNameValid, setIsNameValid] = useState(false);

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
            setIsValid={setIsNameValid}
          />
          <RenderInput
            label="Телефон:"
            name="telephone"
            type="tel"
            placeholder="+380"
            setIsValid={setIsPhoneValid}
          />
          </div>
          <RenderSubmitButton isFormValid={isNameValid && isPhoneValid} /> {/* Combine validity */}
          </div>
    </div>
  );
}

export default RenderRegisterForm;
