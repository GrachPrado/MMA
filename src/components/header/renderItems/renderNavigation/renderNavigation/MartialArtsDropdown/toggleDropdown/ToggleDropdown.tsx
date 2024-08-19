import { useState } from 'react';

const ToggleDropdown = () => {
  const [isDropDownOpened, setIsDropDownOpened] = useState<boolean>(false);

  const toggleDropdown = (): void => {
    setIsDropDownOpened(prevState => !prevState);
  };

  return { isDropDownOpened, toggleDropdown, setIsDropDownOpened };
};

export default ToggleDropdown;