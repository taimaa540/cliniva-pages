import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface TimePickerProps {
  value?: string;
  onTimeChange?: (time: string) => void;
  label?: string;
  defaultValue?: string;
  direction?: "ltr" | "rtl";
  width?: string;
  labelWidth?: string;
}

const TimePicker: React.FC<TimePickerProps> = ({
  value,
  defaultValue,
  onTimeChange,
  label = "Session Duration / Slot",
  direction,
  width,
  labelWidth,
}) => {
  const { t, i18n } = useTranslation();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  const resolvedDirection =
    direction || i18n.dir(i18n.language) || document.documentElement.dir || "ltr";

  useEffect(() => {
    if (value !== undefined) {
      setSelectedTime(value);
    } else if (defaultValue) {
      setSelectedTime(defaultValue);
    }
  }, [value, defaultValue]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setIsPickerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTimeSelect = (hours: number, minutes: number) => {
    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const time = `${formattedHours}:${formattedMinutes}`;
    setSelectedTime(time);
    setIsPickerOpen(false);
    if (onTimeChange) {
      onTimeChange(time);
    }
  };

  const handlePresetSelect = (minutes: number) => {
    setSelectedTime(`${minutes} minutes`);
    setIsPickerOpen(false);
    if (onTimeChange) {
      onTimeChange(`${minutes} minutes`);
    }
  };

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 12 }, (_, i) => i * 5);
  const durationPresets = [15, 30, 45, 60, 90, 120];

  return (
    <div
      className="flex flex-col sm:flex-row sm:items-center    w-[min(100%,520px)] gap-y-2 "
      dir={resolvedDirection}
    >
      {/* Label */}
      <label
        className={`
          ${labelWidth || "min-w-[160px]"} 
          text-text-primary font-semibold text-[clamp(16px,1.1vw,16px)]
          ${resolvedDirection === "rtl" ? "text-right" : ""}
        `}
      >
        {t(label)}:
      </label>

      {/* Input container */}
      {/* Input container */}
      <div className="relative  rounded-md h-10 sm:h-10 md:h-12   border-b-light   border-light border bg-background-secondary 
      text-text-primary font-lato w-[min(100%,360px)]">
        <input
          type="text"
          readOnly
          value={selectedTime}
          className={`
 className="
      w-[min(100%,360px)]  h-10 sm:h-10 md:h-12 font-lato font-regular text-base 
      bg-background-secondary text-text-primary placeholder:text-text-secondary
      px-4 py-2 rounded 
      focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
    "
      ${resolvedDirection === "rtl" ? "pr-10 text-right" : "pl-10 text-left"}
    `}
          placeholder={t("Select Time")}
        />

        {/* Icon button */}
        <button
          type="button"
          onClick={() => setIsPickerOpen(!isPickerOpen)}
          className={`
      absolute inset-y-0 flex items-center px-2 
      ${resolvedDirection === "rtl" ? "left-0" : "right-0"}
    `}
        >
          <svg
            width="18"
            height="22"
            viewBox="0 0 18 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <path
              d="M9 3.75C7.21997 3.75 5.47991 4.27784 3.99987 5.26677C2.51983 6.25571 1.36628 7.66131 0.685088 9.30585C0.00389957 10.9504 -0.17433 12.76 0.172937 14.5058C0.520204 16.2516 1.37737 17.8553 2.63604 19.114C3.89472 20.3726 5.49836 21.2298 7.24419 21.5771C8.99002 21.9243 10.7996 21.7461 12.4442 21.0649C14.0887 20.3837 15.4943 19.2302 16.4832 17.7501C17.4722 16.2701 18 14.53 18 12.75C17.9973 10.3639 17.0482 8.07629 15.361 6.38905C13.6737 4.70182 11.3861 3.75273 9 3.75ZM9 20.25C7.51664 20.25 6.0666 19.8101 4.83323 18.986C3.59986 18.1619 2.63856 16.9906 2.07091 15.6201C1.50325 14.2497 1.35473 12.7417 1.64411 11.2868C1.9335 9.83197 2.64781 8.49559 3.6967 7.4467C4.7456 6.39781 6.08197 5.6835 7.53683 5.39411C8.99168 5.10472 10.4997 5.25325 11.8701 5.8209C13.2406 6.38856 14.4119 7.34986 15.236 8.58322C16.0601 9.81659 16.5 11.2666 16.5 12.75C16.4978 14.7384 15.7069 16.6448 14.3008 18.0508C12.8948 19.4569 10.9884 20.2478 9 20.25ZM13.2806 8.46938C13.3504 8.53903 13.4057 8.62175 13.4434 8.7128C13.4812 8.80384 13.5006 8.90144 13.5006 9C13.5006 9.09856 13.4812 9.19616 13.4434 9.28721C13.4057 9.37825 13.3504 9.46097 13.2806 9.53063L9.53063 13.2806C9.46095 13.3503 9.37822 13.4056 9.28718 13.4433C9.19613 13.481 9.09855 13.5004 9 13.5004C8.90146 13.5004 8.80388 13.481 8.71283 13.4433C8.62179 13.4056 8.53906 13.3503 8.46938 13.2806C8.3997 13.2109 8.34442 13.1282 8.30671 13.0372C8.269 12.9461 8.24959 12.8485 8.24959 12.75C8.24959 12.6515 8.269 12.5539 8.30671 12.4628C8.34442 12.3718 8.3997 12.2891 8.46938 12.2194L12.2194 8.46938C12.289 8.39964 12.3718 8.34432 12.4628 8.30658C12.5538 8.26884 12.6514 8.24941 12.75 8.24941C12.8486 8.24941 12.9462 8.26884 13.0372 8.30658C13.1283 8.34432 13.211 8.39964 13.2806 8.46938ZM6 1.5C6 1.30109 6.07902 1.11032 6.21967 0.96967C6.36033 0.829018 6.55109 0.75 6.75 0.75H11.25C11.4489 0.75 11.6397 0.829018 11.7803 0.96967C11.921 1.11032 12 1.30109 12 1.5C12 1.69891 11.921 1.88968 11.7803 2.03033C11.6397 2.17098 11.4489 2.25 11.25 2.25H6.75C6.55109 2.25 6.36033 2.17098 6.21967 2.03033C6.07902 1.88968 6 1.69891 6 1.5Z"
              fill="currentColor"
            />
          </svg>
        </button>
        {/* Dropdown */}
        {isPickerOpen && (
          <div
            ref={pickerRef}
            className="absolute top-full mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-10 w-full max-w-[360px] p-4"
          >
            <h3 className="font-semibold mb-3 text-sm text-blue-600">
              {t("Select Time")}
            </h3>

            {/* Presets */}
            <div className="flex flex-wrap gap-2 mb-4">
              {durationPresets.map((minutes) => (
                <button
                  key={minutes}
                  onClick={() => handlePresetSelect(minutes)}
                  className="px-3 py-1 rounded-lg bg-blue-50 text-text-primary hover:bg-blue-100 text-xs font-medium transition"
                >
                  {minutes} {t("minutes")}
                </button>
              ))}
            </div>

            {/* Hours + Minutes */}
            <div className="grid grid-cols-2 gap-4">
              {/* Hours */}
              <div>
                <h4 className="font-medium text-xs mb-2 text-gray-600">{t("Hours")}</h4>
                <div className="max-h-40 overflow-y-auto border rounded-lg p-2">
                  {hours.map((h) => (
                    <button
                      key={h}
                      onClick={() => handleTimeSelect(h, 0)}
                      className="block w-full text-left px-2 py-1 rounded-md text-sm hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                      {h.toString().padStart(2, "0")}
                    </button>
                  ))}
                </div>
              </div>

              {/* Minutes */}
              <div>
                <h4 className="font-medium text-xs mb-2 text-gray-600">{t("Minutes")}</h4>
                <div className="max-h-40 overflow-y-auto border rounded-lg p-2">
                  {minutes.map((m) => (
                    <button
                      key={m}
                      onClick={() => handleTimeSelect(0, m)}
                      className="block w-full text-left px-2 py-1 rounded-md text-sm hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                      {m.toString().padStart(2, "0")}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimePicker;
