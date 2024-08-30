import React from 'react';
import "./renderRegisterButton.scss";
import useToggleRegister from './useToggleRegister/useToggleRegister';
import RenderRegisterForm from './RenderRegisterForm/RenderRegisterForm';

const RenderRegisterButton: React.FC = () => {
  const { isFormVisible, toggleForm, setIsFormVisible } = useToggleRegister();

  return (
    <>
      <div style={{color:"red", position:"relative"}}>
        <button onClick={toggleForm}>
          записатись
        </button>
      </div>
      {isFormVisible && (
        <RenderRegisterForm setIsFormVisible={setIsFormVisible} />
      )}
    </>
  );
}

export default RenderRegisterButton;
