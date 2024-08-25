import React from 'react';
import './renderFormHeader.scss';

const RenderFormHeader: React.FC = () => (
  <h1 className="registerForm__container-heading">
    Записатись на <span className="highlight">тренування</span>
  </h1>
);

export default RenderFormHeader;