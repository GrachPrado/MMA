import React, { useState, useRef, useEffect } from 'react';
import RenderFormHeader from './Render/RenderFormHeader/RenderFormHeader';
import RenderSubtitle from './Render/RenderSubtitle/RenderSubtitle';
import RenderInput from './Render/RenderInput/RenderInput';
import RenderSubmitButton from './Render/RenderSubmitButton/RenderSubmitButton';
import { TelegramFormHandler } from './Hooks/TelegramFormHandler/TelegramFormHandler';
import RenderSuccessForm from './Render/RenderSuccessForm/RenderSuccessForm';
import useOutsideClick from '../../renderNavigation/renderNavigation/useOutsideClick/useOutsideClick';
import RenderErrorForm from './Render/RenderErrorForm/RenderErrorForm';
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
  const [hasError, setHasError] = useState(false); // New state for error handling

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setValue(e.target.value);
  };

  const onSubmit = async () => {
    if (isNameValid && isPhoneValid && name.trim() !== '' && phone.trim() !== '') {
      try {
        await TelegramFormHandler({ name, phone });
        console.log('Form submitted successfully');
        setIsSubmitted(true); // Set form as submitted
        setHasError(false); // Reset error state
      } catch (error) {
        console.error('Error submitting form:', error);
        setHasError(true); // Set error state
      }
    } else {
      setHasError(true); // Set error state if validation fails
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (hasError) {
      timer = setTimeout(() => {
        setHasError(false); // Reset error state after 4 seconds
      }, 400000000000);
    }
    return () => clearTimeout(timer); // Cleanup timeout if component unmounts
  }, [hasError]);

  return (
    <>
        {isSubmitted ? (
          <RenderSuccessForm successRef={registerFormRef} closeForm={() => setIsFormVisible(false)} />
        ) : hasError ? ( // Conditionally render the error form
          <RenderErrorForm errorRef={registerFormRef} onClick={() => setHasError(false)} />
        ) : (
          <div className='registerForm' ref={registerFormRef}>
      <div className='registerForm__container'>
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
              isFormValid={isNameValid && isPhoneValid && name.trim() !== '' && phone.trim() !== ''} 
              className='registerForm__container-submit'
            />
            </div>
            </div>
        )}
        </>
  );
}

export default RenderRegisterForm;
