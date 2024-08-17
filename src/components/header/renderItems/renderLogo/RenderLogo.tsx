import React, { FC } from 'react';
import logo from "./logoImage/logo.png";
import { Link } from 'react-router-dom';


const RenderLogo: FC = () => {
  return (
    <Link to="/" aria-label="Home">
    <img src={logo} alt="club logo" />
  </Link>
  );
}

export default RenderLogo;

