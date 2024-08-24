// validation.ts
export const useValidateNameInput = (input: string): boolean => {
    return /^[A-Za-zА-Яа-яЁё\s]{0,20}$/.test(input);
  };
  