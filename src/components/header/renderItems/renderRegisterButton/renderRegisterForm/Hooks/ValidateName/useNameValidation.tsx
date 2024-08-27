import { useState } from 'react';

const useNameValidation = () => {
  const [name, setName] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleNameChange = (value: string) => {
    // Allow only Latin or Cyrillic letters and spaces
    const namePattern = /^[A-Za-zА-Яа-яЁё\s]*$/;

    // Filter the input to remove any characters that do not match the pattern
    const filteredValue = value.split('').filter(char => namePattern.test(char)).join('');

    // Clean the value to ensure it doesn't exceed 20 characters
    const cleanedValue = filteredValue.slice(0, 20);

    // Update state with cleaned value
    setName(cleanedValue);

    // Validate the cleaned value
    setIsValid(namePattern.test(cleanedValue));
  };

  return {
    name,
    isValid,
    handleNameChange,
  };
};

export default useNameValidation;
