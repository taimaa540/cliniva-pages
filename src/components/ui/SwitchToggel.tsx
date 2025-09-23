import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../lib/LanguageContext";

type ToggleProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  ariaLabel?: string;
  id?: string;
  className?: string;
};

const Toggle: React.FC<ToggleProps> = ({
  checked: controlledChecked,
  defaultChecked = false,
  onChange,
  ariaLabel = "Toggle",
  id,
  className = "",
}) => {
  const isControlled = typeof controlledChecked === "boolean";
  const [internalChecked, setInternalChecked] = useState<boolean>(defaultChecked);
  const checked = isControlled ? (controlledChecked as boolean) : internalChecked;

  // دعم الترجمة والاتجاه
  const { t, i18n } = useTranslation();
  const { local } = useLanguage();
  const dir = i18n.dir(local);

  useEffect(() => {
    if (isControlled) setInternalChecked(controlledChecked as boolean);
  }, [controlledChecked]);

  function handleToggle() {
    const next = !checked;
    if (!isControlled) setInternalChecked(next);
    onChange?.(next);
  }

  return (
    <div className={`inline-flex items-center gap-2 sm:gap-3 ${className}`} dir={dir}>
      {/* Switch */}
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={ariaLabel}
        onClick={handleToggle}
        className={`relative inline-flex 
          h-3 w-6 sm:h-4 sm:w-8   /* Responsive sizes */
          flex-shrink-0 cursor-pointer rounded-full 
          transition-colors duration-200 ease-in-out 
          outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary`}
        style={{
          background: checked
            ? "var(--secondary-dark, #065f46)" // Active
            : "var(--background-tertiary, #e5e7eb)", // Inactive
        }}
        dir={dir}
      >
        {/* Knob */}
        <span
          className={`pointer-events-none absolute left-0.25 top-0.25 inline-block 
            h-3 w-3 sm:h-4 sm:w-4   /* Responsive knob size */
            transform rounded-full bg-white shadow-md ring-0 
            transition-transform duration-200 ease-in-out
            ${
              checked
                ? dir === "rtl"
                  ? "-translate-x-3 sm:-translate-x-4"
                  : "translate-x-3 sm:translate-x-4"
                : "translate-x-0"
            }`}
          aria-hidden
        />
      </button>

      {/* Label */}
      <span
        className="select-none text-text-primary 
          text-xs sm:text-sm md:text-base"  /* Responsive text size */
        style={{
          fontFamily:
            'Lato, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
          fontWeight: 400,
          fontStyle: "normal",
          lineHeight: "150%",
          letterSpacing: "0%",
        }}
      >
        {checked ? t("status.active") : t("status.inactive")}
      </span>
    </div>
  );
};

export default Toggle;
