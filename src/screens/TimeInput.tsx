import { useState } from "react";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

interface CustomTimeInputProps {
  lang: string; // اللغة المختارة
}
export default function TimeInput({ lang = "en" }: CustomTimeInputProps) {
  const { t, i18n } = useTranslation();
  const [time, setTime] = useState<string | null>(null);
  const [showPicker, setShowPicker] = useState(false);

  const handleSelect = (value: string | null) => {
    setTime(value);
    setShowPicker(false); // إغلاق الـ Picker بعد الاختيار
  };
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, []);
  return (
    <div className="relative w-96">
      {/* Input مخصص */}
      <div className="flex items-center w-[360px] h-[48px] font-lato font-regular text-base leading-[150%] tracking-[0] px-4 py-2 bg-surface-default rounded border border-border-light focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
        <span className={`flex-1 text-text-secondary ${time ? "text-text-primary" : "text-text-primary"}`}>
          {time || t("Select Duration")}
        </span>
        <button
          className="text-gray-600 w-5 h-5 cursor-pointer hover:text-blue-500"
          onClick={() => setShowPicker(!showPicker)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3.75C10.22 3.75 8.47991 4.27784 6.99987 5.26677C5.51983 6.25571 4.36628 7.66131 3.68509 9.30585C3.0039 10.9504 2.82567 12.76 3.17294 14.5058C3.5202 16.2516 4.37737 17.8553 5.63604 19.114C6.89472 20.3726 8.49836 21.2298 10.2442 21.5771C11.99 21.9243 13.7996 21.7461 15.4442 21.0649C17.0887 20.3837 18.4943 19.2302 19.4832 17.7501C20.4722 16.2701 21 14.53 21 12.75C20.9973 10.3639 20.0482 8.07629 18.361 6.38905C16.6737 4.70182 14.3861 3.75273 12 3.75ZM12 20.25C10.5166 20.25 9.0666 19.8101 7.83323 18.986C6.59986 18.1619 5.63856 16.9906 5.07091 15.6201C4.50325 14.2497 4.35473 12.7417 4.64411 11.2868C4.9335 9.83197 5.64781 8.49559 6.6967 7.4467C7.7456 6.39781 9.08197 5.6835 10.5368 5.39411C11.9917 5.10472 13.4997 5.25325 14.8701 5.8209C16.2406 6.38856 17.4119 7.34986 18.236 8.58322C19.0601 9.81659 19.5 11.2666 19.5 12.75C19.4978 14.7384 18.7069 16.6448 17.3008 18.0508C15.8948 19.4569 13.9884 20.2478 12 20.25ZM16.2806 8.46938C16.3504 8.53903 16.4057 8.62175 16.4434 8.7128C16.4812 8.80384 16.5006 8.90144 16.5006 9C16.5006 9.09856 16.4812 9.19616 16.4434 9.28721C16.4057 9.37825 16.3504 9.46097 16.2806 9.53063L12.5306 13.2806C12.4609 13.3503 12.3782 13.4056 12.2872 13.4433C12.1961 13.481 12.0986 13.5004 12 13.5004C11.9015 13.5004 11.8039 13.481 11.7128 13.4433C11.6218 13.4056 11.5391 13.3503 11.4694 13.2806C11.3997 13.2109 11.3444 13.1282 11.3067 13.0372C11.269 12.9461 11.2496 12.8485 11.2496 12.75C11.2496 12.6515 11.269 12.5539 11.3067 12.4628C11.3444 12.3718 11.3997 12.2891 11.4694 12.2194L15.2194 8.46938C15.289 8.39964 15.3718 8.34432 15.4628 8.30658C15.5538 8.26884 15.6514 8.24941 15.75 8.24941C15.8486 8.24941 15.9462 8.26884 16.0372 8.30658C16.1283 8.34432 16.211 8.39964 16.2806 8.46938ZM9 1.5C9 1.30109 9.07902 1.11032 9.21967 0.96967C9.36033 0.829018 9.55109 0.75 9.75 0.75H14.25C14.4489 0.75 14.6397 0.829018 14.7803 0.96967C14.921 1.11032 15 1.30109 15 1.5C15 1.69891 14.921 1.88968 14.7803 2.03033C14.6397 2.17098 14.4489 2.25 14.25 2.25H9.75C9.55109 2.25 9.36033 2.17098 9.21967 2.03033C9.07902 1.88968 9 1.69891 9 1.5Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      {/* Time Picker يظهر عند الضغط على الأيقونة */}
      {showPicker && (
        <div className="absolute left-0 mt-2 z-10 bg-white shadow-lg rounded-lg">
          <TimePicker
            onChange={handleSelect}
            value={time}
            clearIcon={null}
            clockIcon={null}
            disableClock={true}
          />
        </div>
      )}
    </div>
  );
}
