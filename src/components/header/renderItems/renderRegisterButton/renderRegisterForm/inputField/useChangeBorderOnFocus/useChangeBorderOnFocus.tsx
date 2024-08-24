import React, { useState } from 'react';

const useChangeBorderOnFocus = () => {
  const [inputValue, setInputValue] = useState<string>(''); // State to manage the input value

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // Update the input value state
  };

  // Determine the class based on whether the input has a value
  const inputClass = inputValue ? 'input-onFocused' : '';

  return{
    inputValue,
    handleChange,
    inputClass
  }

};

export default useChangeBorderOnFocus;
