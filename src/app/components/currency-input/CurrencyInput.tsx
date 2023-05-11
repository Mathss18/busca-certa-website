import React from "react";
import CurrencyInputField from "react-currency-input-field";

interface CurrencyInputProps {
  id?: string;
  label: string;
  value: number;
  onValueChange: (value: number, name: string) => void;
  allowNegativeValue?: boolean;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({
  id,
  label,
  value,
  onValueChange,
  allowNegativeValue = false,
}) => {
  return (
    <>
      <label htmlFor={id} className="text-sm text-gray-600">
        {label}
      </label>
      <CurrencyInputField
        id={id}
        name={id}
        allowNegativeValue={allowNegativeValue}
        className="input input-bordered w-full max-w-xs"
        value={value}
        decimalsLimit={2}
        prefix="R$ "
        onValueChange={(val, text) =>
          onValueChange(parseFloat(val || "0"), text as string)
        }
      />
    </>
  );
};

export default CurrencyInput;
