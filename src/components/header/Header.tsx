import React, { FC } from 'react';
import "./header.scss";
import RenderLogo from './renderItems/renderLogo/RenderLogo';
import RenderNavigation from './renderItems/renderNavigation/renderNavigation/RenderNavigation';
import RenderRegisterButton from './renderItems/renderRegisterButton/RenderRegisterButton';
import RenderBurgerMenu from './renderItems/renderBurgerMenu/RenderBurgerMenu';
import ToggleBurgerMenu from './renderItems/renderBurgerMenu/toggleBurgerMenu/ToggleBurgerMenu';

const Header: FC = () => {
  const { isOpen, toggleMenu, setIsOpen } = ToggleBurgerMenu();

  return (
    <header>
      <RenderLogo />
      <RenderNavigation isOpen={isOpen} setIsOpen={setIsOpen} />
      <RenderRegisterButton />
      <RenderBurgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </header>
  );
}

export default Header;
