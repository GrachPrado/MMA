import React, { useState, useRef } from 'react';
import RenderFormHeader from './Render/RenderFormHeader/RenderFormHeader';
import RenderSubtitle from './Render/RenderSubtitle/RenderSubtitle';
import RenderInput from './Render/RenderInput/RenderInput';
import RenderSubmitButton from './Render/RenderSubmitButton/RenderSubmitButton';
import { TelegramFormHandler } from './Hooks/TelegramFormHandler/TelegramFormHandler';
import RenderSuccessForm from './Render/RenderSuccessForm/RenderSuccessForm';
import useOutsideClick from '../../renderNavigation/renderNavigation/useOutsideClick/useOutsideClick';
import "./renderRegisterForm.scss";

interface RenderRegisterFormProps {
  setIsFormVisible: (isVisible: boolean) => void;
}

const RenderRegisterForm: React.FC<RenderRegisterFormProps> = ({ setIsFormVisible }) => {
  const registerFormRef = useRef<HTMLDivElement>(null);
  useOutsideClick(registerFormRef, () => setIsFormVisible(false));

  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setValue(e.target.value);
  };

  const onSubmit = async () => {
    if (isNameValid && isPhoneValid) {
      try {
        await TelegramFormHandler({ name, phone });
        console.log('Form submitted successfully');
        setIsSubmitted(true); // Set form as submitted
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    } else {
      console.log('Form is not valid');
    }
  };

  return (
    <div className='registerForm' ref={registerFormRef}>
      <div className='registerForm__container'>
        {isSubmitted ? (
          <RenderSuccessForm closeForm={() => setIsFormVisible(false)} />
        ) : (
          <>
            <RenderFormHeader
              title="Записатись на"
              subtitle='тренування'
            />
            <RenderSubtitle
              subtitleText="Залиште заявку і ми зв'яжемося з вами"
            />
            <div className='registerForm__inputFields'>
              <RenderInput
                label="Ваше ім'я:"
                name="name"
                type="text"
                placeholder="Введіть ваше ім'я"
                value={name}
                onChange={(e) => handleInputChange(e, setName)}
                setIsValid={setIsNameValid}
              />
              <RenderInput
                label="Телефон:"
                name="telephone"
                type="tel"
                placeholder="+380"
                value={phone}
                onChange={(e) => handleInputChange(e, setPhone)}
                setIsValid={setIsPhoneValid}
              />
            </div>
            <RenderSubmitButton 
              submitButtonTitle="відправити заявку" 
              onClick={onSubmit} 
              isFormValid={isNameValid && isPhoneValid} 
            />
          </>
        )}
      </div>
    </div>
  );
}

export default RenderRegisterForm;
