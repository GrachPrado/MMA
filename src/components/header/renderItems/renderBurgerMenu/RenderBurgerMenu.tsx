// RenderBurgerMenu.tsx
import React, { FC } from 'react';
import './renderBurgerMenu.scss';
import { Props } from './type';

const RenderBurgerMenu: FC<Props> = ({ isOpen, toggleMenu }) => {
  return (
    <div className="burger-menu">
      <div className="burger-icon" onClick={toggleMenu}>
        <div className={`line ${isOpen ? 'open-icon' : ''}`}></div>
        <div className={`line ${isOpen ? 'open-icon' : ''}`}></div>
        <div className={`line ${isOpen ? 'open-icon' : ''}`}></div>
      </div>
    </div>
  );
};

export default RenderBurgerMenu;
