import { useState } from 'react';

const ToggleBurgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(prevState => !prevState);
  };

  return { isOpen, toggleMenu, setIsOpen };
};

export default ToggleBurgerMenu;