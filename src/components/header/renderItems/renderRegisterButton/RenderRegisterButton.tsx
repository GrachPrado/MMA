import React from 'react';
import "./renderRegisterButton.scss";
import useToggleRegister from './useToggleRegister/useToggleRegister';
import RenderRegisterForm from './RenderRegisterForm/RenderRegisterForm';

interface RenderRegisterButtonProps {
  divClassName?: string,
  className?: string,
  registerButtonTitle: string,
  icon?: React.ReactNode
}

const RenderRegisterButton: React.FC<RenderRegisterButtonProps> = ({divClassName,className="registerButton", registerButtonTitle="записатись", icon}) => {
  const { isFormVisible, toggleForm, setIsFormVisible } = useToggleRegister();

  return (
    <>
      <div className={divClassName}>
        <button className={className} onClick={toggleForm}>
        {icon && <span className="icon-container">{icon}</span>}
        <span>{registerButtonTitle}</span>
        </button>
      </div>
      {isFormVisible && (
        <RenderRegisterForm setIsFormVisible={setIsFormVisible} />
      )}
    </>
  );
}

export default RenderRegisterButton;
