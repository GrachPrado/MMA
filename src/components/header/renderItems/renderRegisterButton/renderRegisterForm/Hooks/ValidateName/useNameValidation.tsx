import { useState } from 'react';

const useNameValidation = () => {
  const [name, setName] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleNameChange = (value: string) => {
    // Allow only Latin or Cyrillic letters, no numbers or symbols, and no more than 20 characters
    const namePattern = /^[A-Za-zА-Яа-яЁё\s]{0,20}$/;
    const cleanedValue = value.slice(0, 20);

    setName(cleanedValue);
    setIsValid(namePattern.test(cleanedValue));
  };

  return {
    name,
    isValid,
    handleNameChange,
  };
};

export default useNameValidation;
