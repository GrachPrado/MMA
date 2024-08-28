import { useState } from 'react';

const usePhoneValidation = () => {
  const [phone, setPhone] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handlePhoneChange = (value: string) => {
    // Remove any non-digit characters except "+" at the start
    const cleanedValue = value.replace(/\D/g, '');

    if (cleanedValue.length > 12) {
      return; // Do nothing if the phone number already has 12 valid digits
    }

    // Ensure the phone number starts with +38 and follow the format +38(xxx)-xxx-xx-xx
    let formattedValue = '+380';
    if (cleanedValue.length > 3) {
      formattedValue += `(${cleanedValue.slice(3, 5)})`;
    }
    if (cleanedValue.length > 5) {
      formattedValue += `-${cleanedValue.slice(5, 8)}`;
    }
    if (cleanedValue.length > 8) {
      formattedValue += `-${cleanedValue.slice(8, 10)}`;
    }
    if (cleanedValue.length > 10) {
      formattedValue += `-${cleanedValue.slice(10, 12)}`;
    }

    // Set the formatted phone number
    setPhone(formattedValue);

    // Check if the phone number is exactly 12 digits long after the +38
    setIsValid(cleanedValue.length === 12);
  };

  return {
    phone,
    isValid,
    handlePhoneChange,
  };
};

export default usePhoneValidation;
