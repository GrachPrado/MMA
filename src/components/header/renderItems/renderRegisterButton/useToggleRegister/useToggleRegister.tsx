import { useState } from 'react';

const useToggleRegister = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(prevState => !prevState);
  };

  return { isFormVisible, toggleForm, setIsFormVisible };
};

export default useToggleRegister;
