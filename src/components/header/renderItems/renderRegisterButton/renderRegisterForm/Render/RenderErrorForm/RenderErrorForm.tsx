// it's just done, not implemented
import React from "react";
import RenderFormHeader from "../RenderFormHeader/RenderFormHeader";
import RenderSubtitle from "../RenderSubtitle/RenderSubtitle";
import RenderSubmitButton from "../RenderSubmitButton/RenderSubmitButton";
import "./renderErrorForm.scss";

interface RenderErrorFormProps {
  onClick: () => void
}


const RenderErrorForm: React.FC<RenderErrorFormProps> = ({onClick}) => {
  return (
    <div className="registerErrorForm">
      <div className="registerErrorForm__container">
        <div className="registerErrorForm__container-svg">
        <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 193 193"
  fill="none"
>
  <circle opacity="0.2" cx="96.5" cy="96.5" r="96.5" fill="#FF4F4F" />
  <path
    d="M72 72 L121 121 M72 121 L121 72"
    stroke="#FF4F4F"
    strokeWidth="12"
    strokeLinecap="round"
  />
</svg>

        </div>
        <RenderFormHeader title="Заявка неуспішна" subtitle="не відправлена" className="registerErrorForm__container-title" />
        <RenderSubtitle
          subtitleText="форма заповнення англ. укр. мови та формат телефону +380 (XX)-XXX-XX-XX"
          className="registerErrorForm__container-Subtitle"
        />
        <RenderSubmitButton 
            // Call the closeForm function when clicked
            onClick={onClick}
          submitButtonTitle="повернутись" 
          className="registerErrorForm__container-submit" 
        />
      </div>
    </div>
  );
};

export default RenderErrorForm;
