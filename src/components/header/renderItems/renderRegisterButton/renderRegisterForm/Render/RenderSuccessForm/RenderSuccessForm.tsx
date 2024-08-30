import React from "react";
import RenderFormHeader from "../RenderFormHeader/RenderFormHeader";
import RenderSubtitle from "../RenderSubtitle/RenderSubtitle";
import RenderSubmitButton from "../RenderSubmitButton/RenderSubmitButton";
import "./renderSuccessForm.scss";

interface RenderSuccessFormProps {
  closeForm: () => void; // Add the closeForm prop
}

const RenderSuccessForm: React.FC<RenderSuccessFormProps> = ({ closeForm }) => {
  return (
    <div className="registerSuccessForm">
      <div className="registerSuccessForm__container">
        <div className="registerSuccessForm__container-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 193 193"
            fill="none"
          >
            <circle opacity="0.2" cx="96.5" cy="96.5" r="96.5" fill="#FFD540" />
            <path
              d="M70.3706 93.9238C73.3147 96.1319 76.2589 99.076 79.2031 102.02L79.9391 102.756C91.7157 86.5634 106.437 73.3146 124.102 63.7461L131.462 76.9948C113.061 87.2994 98.3401 101.284 87.2995 118.949L81.4112 129.254C75.5229 121.157 69.6345 112.325 61.5381 106.436L70.3706 93.9238Z"
              fill="#FFD540"
            />
          </svg>
        </div>
        <RenderFormHeader title="Заявка успішно" subtitle="відправлена" className="registerSuccessForm__container-title" />
        <RenderSubtitle
          subtitleText="ми зв'яжемося з вами"
          className="registerSuccessForm__container-Subtitle"
        />
        <RenderSubmitButton 
          onClick={closeForm} // Call the closeForm function when clicked
          submitButtonTitle="дякую" 
          className="registerSuccessForm__container-submit" 
        />
      </div>
    </div>
  );
};

export default RenderSuccessForm;
