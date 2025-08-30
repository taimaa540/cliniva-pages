
import React, { useState, useEffect } from "react";

type ToggleProps = {
  /** Controlled checked state (optional). If provided, component is controlled. */
  checked?: boolean;
  /** Default checked state for uncontrolled usage */
  defaultChecked?: boolean;
  /** Called when toggle changes */
  onChange?: (checked: boolean) => void;
  /** Accessible label (for screen readers) */
  ariaLabel?: string;
  /** Optional id */
  id?: string;
  /** Optional className to customise container */
  className?: string;
};

/**
 * Reusable Switch / Toggle component.
 * - Uses Tailwind classes and CSS variables for tokens: --secondary-dark, --background-tertiary, --text-primary
 * - When active: background uses `secondary-dark`
 * - When inactive: background uses `background-tertiary`
 * - Shows text "Active" or "UnActive" depending on state
 * - Text styling requested: Lato, font-weight: 400, font-style: Regular, font-size: 12px, line-height: 150%, letter-spacing: 0%, color: --text-primary
 *
 * NOTE: Make sure your project includes the Lato font (e.g. import from Google Fonts or locally) and that Tailwind is configured to allow the custom CSS variables or utility classes shown below.
 */

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
    // keep internal state in sync if controlled prop changes
    if (isControlled) setInternalChecked(controlledChecked as boolean);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary`}
        style={{
          // Use CSS variables if available, otherwise fall back to sensible Tailwind-like colors
          background: checked
            ? 'var(--secondary-dark, #065f46)' // fallback color (green-800) if variable isn't defined
            : 'var(--background-tertiary, #e5e7eb)', // fallback (gray-200)
        }}
      >
        {/* Knob */}
        <span
          className={`pointer-events-none absolute left-0 top-0 inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition-transform duration-200 ease-in-out ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
          aria-hidden
        />
      </button>

      {/* Label text showing Active / UnActive */}
      <span
        style={{
          fontFamily: 'Lato, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' ,
          fontWeight: 400,
          fontStyle: 'normal',
          fontSize: '12px',
          lineHeight: '150%',
          // leading-trim is not widely supported; we set normal behaviour
          letterSpacing: '0%',
          color: 'var(--text-primary, #111827)', // fallback to gray-900
        }}
        className="select-none "
      >
        {checked ? 'Active' : 'UnActive'}
      </span>
    </div>
  );
};

export default Toggle;

/*
Example usage:

import React, { useState } from 'react';
import Toggle from './SwitchToggle';

export default function Example() {
  const [on, setOn] = useState(false);
  return (
    <div className="p-6">
      <Toggle
        checked={on}
        onChange={(v) => setOn(v)}
        ariaLabel="Example toggle"
      />
    </div>
  );
}

Tailwind / Project notes:
1. Add Lato font in your global CSS or index.html, for example (Google Fonts):
   <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet">

2. If you prefer to use Tailwind classes for the background tokens, ensure they're defined in your tailwind config as custom colors, e.g.:
   // tailwind.config.js
   module.exports = {
     theme: {
       extend: {
         colors: {
           'secondary-dark': 'var(--secondary-dark)',
           'background-tertiary': 'var(--background-tertiary)',
           'text-primary': 'var(--text-primary)',
         },
       },
     },
   }

3. Accessibility: component uses role="switch" and aria-checked. You can also wire keyboard handlers if you want Space/Enter toggling.
*/
