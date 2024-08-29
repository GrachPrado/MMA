import React from 'react';
import './renderSubtitle.scss';

interface RenderSubtitleProps {
  subtitleText: string
}

const RenderSubtitle: React.FC<RenderSubtitleProps> = ({subtitleText}) => (
  <p className="registerForm__container-subtitle ">
    {subtitleText}
  </p>
);

export default RenderSubtitle