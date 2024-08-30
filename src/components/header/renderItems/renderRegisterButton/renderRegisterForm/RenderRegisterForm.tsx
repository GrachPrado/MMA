import React, { useState } from 'react';
import RenderFormHeader from './Render/RenderFormHeader/RenderFormHeader';
import RenderSubtitle from './Render/RenderSubtitle/RenderSubtitle';
import RenderInput from './Render/RenderInput/RenderInput';
import RenderSubmitButton from './Render/RenderSubmitButton/RenderSubmitButton';
import { TelegramFormHandler } from './Hooks/TelegramFormHandler/TelegramFormHandler';
import RenderSuccessForm from './Render/RenderSuccessForm/RenderSuccessForm';
import "./renderRegisterForm.scss";

const RenderRegisterForm: React.FC = () => {
  // State to track if the phone number and name are valid
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);

  // State to track the values of name and phone
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  // State to track if the form is submitted successfully
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input change with explicit event typing
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>, 
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setValue(e.target.value);
  };

  // Handle form submission
  const onSubmit = async () => {
    if (isNameValid && isPhoneValid) {
      try {
        await TelegramFormHandler({ name, phone });
        console.log('Form submitted successfully');
        alert("zhopa")
        setIsSubmitted(true); // Set form as submitted
        // Optionally clear the form or show success feedback
      } catch (error) {
        console.error('Error submitting form:', error);
        // Optionally show error feedback to the user
      }
    } else {
      console.log('Form is not valid');
    }
  };

  if (isSubmitted) {
    return <RenderSuccessForm closeForm={() => setIsSubmitted(false)} />; // Pass closeForm as a prop
  }
  

  return (
    <div className='registerForm'>
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, setName)} // Correctly handle the event with typing
            setIsValid={setIsNameValid}
          />
          <RenderInput
            label="Телефон:"
            name="telephone"
            type="tel"
            placeholder="+380"
            value={phone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, setPhone)} // Correctly handle the event with typing
            setIsValid={setIsPhoneValid}
          />
        </div>
        <RenderSubmitButton submitButtonTitle="відправити заявку"  onClick={onSubmit} isFormValid={isNameValid && isPhoneValid} />

      </div>
    </div>
  );
}

export default RenderRegisterForm;
