// SwitchWithLabel.tsx
import { useState } from "react";

interface SwitchWithLabelProps {
  initialState?: boolean;
}

export default function SwitchWithLabel({ initialState = false }: SwitchWithLabelProps) {
  const [isActive, setIsActive] = useState(initialState);

  function toggleSwitch() {
    setIsActive(!isActive);
  }

  return (
    <div className="flex items-center space-x-3">
      {/* الزر */}
      <button
        type="button"
        onClick={toggleSwitch}
        className={`w-[32px] h-[16px] flex items-center rounded-full p-1 transition-colors duration-300
          ${isActive ? "bg-green-500" : "bg-gray-300"}
        `}
      >
        <div
          className={`bg-white w-3 h-3 rounded-full shadow-md transform transition-transform duration-300
            ${isActive ? "translate-x-4" : "translate-x-0"}
          `}
        />
      </button>

      {/* النص */}
      <span className="font-medium text-red-500">
        {isActive ? "Active" : "Inactive"}
      </span>
    </div>
  );
}
