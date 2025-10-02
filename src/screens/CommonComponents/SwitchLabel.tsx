// SwitchWithLabel.tsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useLanguage } from "../../lib/LanguageContext";

interface SwitchWithLabelProps {
  initialState?: boolean;
  
}

export default function SwitchWithLabel({ initialState = false }: SwitchWithLabelProps) {
  const { local } = useLanguage();
  const [isActive, setIsActive] = useState(initialState);
  const {t, i18n} = useTranslation()

  function toggleSwitch() {
    setIsActive(!isActive);
  }
  useEffect(() => {
      i18n.changeLanguage(local);
    }, []);

  return (
    <div className="flex items-center justify-center space-x-3">
      {/* الزر */}
      <button
      dir="ltr"
        type="button"
        onClick={toggleSwitch}
        className={`w-[32px] h-[16px] flex items-center  rounded-full p-1 transition-colors duration-300 ml-[5px]
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
      <span className="font-lato font-regular leading-[130%] tracking-[0] text-xs  text-[#212529]">
        {isActive ? t("Active") : t("Inactive")}
      </span>
    </div>
  );
}
