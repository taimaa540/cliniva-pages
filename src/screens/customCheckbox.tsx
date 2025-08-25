import { useState } from "react";

interface CustomCheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
}

export default function CustomCheckbox({ checked = false, onChange, label }: CustomCheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange?.(newValue);
  };

  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="peer hidden"
      />
      <div
        className={`w-[16px] h-[16px] rounded-[4px] border flex items-center justify-center transition 
        ${isChecked ? "bg-blue-500 border-blue-500" : "border-gray-300 bg-white"}`}
      >
        <svg
          className={`w-5 h-5 text-white transition ${isChecked ? "block" : "hidden"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      {label && <span className="text-gray-700">{label}</span>}
      
    </label>
  );
}


