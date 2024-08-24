// useValidateNameInput.ts
export const useValidateNameInput = (): ((input: string) => boolean) => {
  const validateName = (input: string): boolean => {
    // Your validation logic here
    return /^[A-Za-zА-Яа-яЁё\s]{0,20}$/.test(input);
  };

  return validateName;
};