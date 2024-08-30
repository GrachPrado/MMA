import React from 'react';
import './renderFormHeader.scss';

interface RenderFormHeaderProps {
  title: string,
  subtitle: string,
  className?: string,
}

const RenderFormHeader: React.FC<RenderFormHeaderProps> = ({title, subtitle, className="registerForm__container-heading"}) => (
  <h1 className={className}>
    {title} <span className="highlight">{subtitle}</span>
  </h1>
);

export default RenderFormHeader;