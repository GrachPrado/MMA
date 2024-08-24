// inputFieldTypes.ts
export interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  validateNameInput?: (input: string) => boolean; // New prop for validation
}
