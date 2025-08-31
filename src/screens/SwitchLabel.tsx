// SwitchWithLabel.tsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

interface SwitchWithLabelProps {
  initialState?: boolean;
  local : string
}

export default function SwitchWithLabel({ initialState = false, local }: SwitchWithLabelProps) {
  const [isActive, setIsActive] = useState(initialState);
  const {t, i18n} = useTranslation('en')

  function toggleSwitch() {
    setIsActive(!isActive);
  }
  useEffect(() => {
      i18n.changeLanguage(local);
    }, [local, i18n]);

  return (
    <div className="flex items-center space-x-3">
      {/* الزر */}
      <button
      dir="ltr"
        type="button"
        onClick={toggleSwitch}
        className={`w-[32px] h-[16px] flex items-center rounded-full p-1 transition-colors duration-300 ml-[5px]
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
      <span className={`font-medium ${isActive ? "text-green-600" : "text-gray-500"}`}>
        {isActive ? "Active" : "Inactive"}
      </span>
    </div>
  );
}
