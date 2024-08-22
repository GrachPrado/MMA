import React,{useRef} from 'react';
import "./renderRegisterButton.scss";
import useToggleRegister from './useToggleRegister/useToggleRegister';
import RenderRegisterForm from './renderRegisterForm/RenderRegisterForm';
import useOutsideClick from '../renderNavigation/renderNavigation/useOutsideClick/useOutsideClick';


function RenderRegisterButton() {
  const {isRegisterOpened, toggleRegister, setIsRegisterOpened } = useToggleRegister();
  const findHeaderForm = useRef<HTMLDivElement>(null);
  useOutsideClick(findHeaderForm, () => setIsRegisterOpened(false)); // Use the click-to-close hook (dropdown)

  return (
    <>
    <div style={{color:"red", position:"relative"}}>
   <button onClick={toggleRegister}>
   записатись
   </button>
   {isRegisterOpened ? <RenderRegisterForm ref={findHeaderForm}/> : ""}
   </div>
    </>
  );
}

export default RenderRegisterButton;