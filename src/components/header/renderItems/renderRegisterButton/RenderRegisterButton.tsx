import React from 'react';
import "./renderRegisterButton.scss";
import useToggleRegister from './useToggleRegister/useToggleRegister';
import RenderRegisterForm from './RenderRegisterForm/RenderRegisterForm';

interface RenderRegisterButtonProps {
  className?: string,
  registerButtonTitle: string,
}

const RenderRegisterButton: React.FC<RenderRegisterButtonProps> = ({className="registerButton", registerButtonTitle="записатись"}) => {
  const { isFormVisible, toggleForm, setIsFormVisible } = useToggleRegister();

  return (
    <>
      <div>
        <button className={className} onClick={toggleForm}>
          {registerButtonTitle}
        </button>
      </div>
      {isFormVisible && (
        <RenderRegisterForm setIsFormVisible={setIsFormVisible} />
      )}
    </>
  );
}

export default RenderRegisterButton;
