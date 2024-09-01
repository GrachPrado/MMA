import React from 'react';
import "./renderRegisterButton.scss";
import useToggleRegister from './useToggleRegister/useToggleRegister';
import RenderRegisterForm from './RenderRegisterForm/RenderRegisterForm';

interface RenderRegisterButtonProps {
  className?: string,
}

const RenderRegisterButton: React.FC<RenderRegisterButtonProps> = ({className="registerButton"}) => {
  const { isFormVisible, toggleForm, setIsFormVisible } = useToggleRegister();

  return (
    <>
      <div>
        <button className={className} onClick={toggleForm}>
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
