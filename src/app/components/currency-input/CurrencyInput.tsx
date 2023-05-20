import React from "react";
import CurrencyInputField from "react-currency-input-field";

interface CurrencyInputProps {
  id?: string;
  label: string;
  value: number;
  onValueChange: (value: number, name: string) => void;
  allowNegativeValue?: boolean;
  [x: string]: any;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({ id, label, value, onValueChange, allowNegativeValue = false, ...props }) => {
  return (
    <>
      <label htmlFor={id} className="text-sm text-gray-600">
        {label}
      </label>
      <CurrencyInputField
        decimalScale={2}
        id={id}
        name={id}
        {...props}
        allowNegativeValue={allowNegativeValue}
        value={value}
        prefix="R$ "
        onValueChange={(val, text) => onValueChange(val as any, text as string)}
      />
    </>
  );
};

export default CurrencyInput;
