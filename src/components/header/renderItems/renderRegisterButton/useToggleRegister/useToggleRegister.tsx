import { useState } from 'react';

const useToggleRegister = () => {
  const [isRegisterOpened, setIsRegisterOpened] = useState<boolean>(false);

  const toggleRegister = (): void => {
    setIsRegisterOpened(prevState => !prevState);
  };

  return { isRegisterOpened, toggleRegister, setIsRegisterOpened };
};

export default useToggleRegister;