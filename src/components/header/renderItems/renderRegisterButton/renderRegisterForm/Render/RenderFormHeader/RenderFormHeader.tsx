import React from 'react';
import './renderFormHeader.scss';

interface RenderFormHeaderProps {
  title: string,
  subtitle: string
}

const RenderFormHeader: React.FC<RenderFormHeaderProps> = ({title, subtitle}) => (
  <h1 className="registerForm__container-heading">
    {title} <span className="highlight">{subtitle}</span>
  </h1>
);

export default RenderFormHeader;