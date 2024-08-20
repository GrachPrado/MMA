import React from 'react';
import "./renderRegisterButton.scss";
import useToggleRegister from './useToggleRegister/useToggleRegister';
import RenderRegisterForm from './renderRegisterForm/RenderRegisterForm';

function RenderRegisterButton() {
  const {isRegisterOpened, toggleRegister, setIsRegisterOpened } = useToggleRegister();

  return (
    <>
    <div style={{color:"red", position:"relative"}}>
   <button onClick={toggleRegister}>
   записатись
   </button>
   {isRegisterOpened ? <RenderRegisterForm /> : ""}
   </div>
    </>
  );
}

export default RenderRegisterButton;