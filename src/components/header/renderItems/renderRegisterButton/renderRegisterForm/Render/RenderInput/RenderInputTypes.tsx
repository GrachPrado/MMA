// RenderInputTypes.ts
export interface RenderInputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string; // Define the type as string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Correctly type the onChange event
  setIsValid: (isValid: boolean) => void; // Already correctly typed
}