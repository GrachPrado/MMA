import React from 'react';
import './renderSubtitle.scss';

interface RenderSubtitleProps {
  subtitleText: string,
  className?: string,
}

const RenderSubtitle: React.FC<RenderSubtitleProps> = ({subtitleText,className="registerForm__container-subtitle"}) => (
  <p className={className}>
    {subtitleText}
  </p>
);

export default RenderSubtitle