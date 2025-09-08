import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    if (isControlled) setInternalChecked(controlledChecked as boolean);
  }, [controlledChecked]);

  function handleToggle() {
    const next = !checked;
    if (!isControlled) setInternalChecked(next);
    onChange?.(next);
  }

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Switch */}
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={ariaLabel}
        onClick={handleToggle}
        className={`relative inline-flex h-4 w-8 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary`}
        style={{
          background: checked
            ? 'var(--secondary-dark, #065f46)' // Active
            : 'var(--background-tertiary, #e5e7eb)', // Inactive
        }}
      >
        {/* Knob */}
       <span
  className={`pointer-events-none absolute left-0.4 top-0.4 inline-block h-4 w-4 transform rounded-full bg-white shadow-md ring-0 transition-transform duration-200 ease-in-out ${
    checked ? 'translate-x-4' : 'translate-x-0'
  }`}
  aria-hidden
/>
      </button>

      {/* Label */}
<span
  style={{
    fontFamily: 'Lato, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '12px',
    lineHeight: '150%',
    letterSpacing: '0%',
  }}
  className="select-none text-text-primary"
>
  {checked ? 'Active' : 'UnActive'}
</span>
    </div>
  );
};

export default Toggle;
