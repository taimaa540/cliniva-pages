import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface DatePickerProps {
  value?: Date | null;
  onDateChange?: (date: Date) => void;
  label?: string;
  defaultValue?: string;
  direction?: "ltr" | "rtl";
  width?: string;
  labelWidth?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
  value,
  defaultValue,
  onDateChange,
  label = "Establishment Year",
  direction,
  width,
  labelWidth,
}) => {
  const { t, i18n } = useTranslation();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  const resolvedDirection =
    direction || i18n.dir(i18n.language) || document.documentElement.dir || "ltr";

  useEffect(() => {
    if (value !== undefined) {
      setSelectedDate(value);
    } else if (defaultValue) {
      const date = new Date(defaultValue);
      if (!isNaN(date.getTime())) {
        setSelectedDate(date);
      }
    }
  }, [value, defaultValue]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setIsPickerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setIsPickerOpen(false);
    onDateChange?.(date);
  };

  const formatDate = (date: Date | null): string => {
    if (!date) return "";
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1899 }, (_, i) => currentYear - i);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const getDaysInMonth = (month: number, year: number) =>
    new Date(year, month + 1, 0).getDate();

  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const days = Array.from(
    { length: getDaysInMonth(selectedMonth, selectedYear) },
    (_, i) => i + 1
  );

  return (
    <div
      className="flex flex-col md:flex-row  items-start  w-[min(100%,520px)]  "
      dir={resolvedDirection}
    >
      <label
        className={`
          ${labelWidth || "sm:w-[165px]"} 
          text-text-primary font-semibold text-[clamp(14x,1.1vw,16px)]
          ${resolvedDirection === "rtl" ? "text-right" : ""}
        `}
      >
        {label ? t(label) : t("EstablishmentYear")}:
      </label>

    <div className="relative  rounded-md h-10 sm:h-10 md:h-12    border-b-light   border-light border bg-background-secondary 
      text-text-primary font-sans w-[min(100%,360px)]">
  <input
    type="text"
    readOnly
    value={selectedDate ? formatDate(selectedDate) : ""}
    className="
      w-[min(100%,360px)]  h-10 sm:h-10 md:h-12  font-lato font-regular text-base 
      bg-background-secondary text-text-primary placeholder:text-text-secondary
      px-4 py-2 rounded  border border-border-light
      focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
    "
    placeholder={t("select Date")}
    onClick={() => setIsPickerOpen(!isPickerOpen)}
  />

  {/* أيقونة الكالندر */}
  <div
    className={`
      absolute top-1/2 -translate-y-1/2 
      ${resolvedDirection === "rtl" ? "left-3" : "right-3"} 
      text-text-secondary hover:text-primary-default 
      cursor-pointer w-5 h-5
    `}
    onClick={() => setIsPickerOpen(!isPickerOpen)}
  >
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9375 -0.000732422C11.0535 -0.000732422 11.165 0.0451502 11.2471 0.127197C11.3291 0.209244 11.375 0.320735 11.375 0.436768V0.874268H12.25C12.7141 0.874268 13.1591 1.05877 13.4873 1.38696C13.8155 1.71515 14 2.16014 14 2.62427V12.2493C14 12.7134 13.8155 13.1584 13.4873 13.4866C13.1591 13.8148 12.7141 13.9993 12.25 13.9993H1.75C1.28587 13.9993 0.840884 13.8148 0.512695 13.4866C0.184507 13.1584 0 12.7134 0 12.2493V2.62427C0 2.16014 0.184507 1.71515 0.512695 1.38696C0.840884 1.05877 1.28587 0.874268 1.75 0.874268H2.625V0.436768C2.625 0.320735 2.67088 0.209244 2.75293 0.127197C2.83498 0.0451501 2.94647 -0.000732422 3.0625 -0.000732422C3.17853 -0.000732422 3.29002 0.0451501 3.37207 0.127197C3.45412 0.209244 3.5 0.320735 3.5 0.436768V0.874268H10.5V0.436768C10.5 0.320735 10.5459 0.209244 10.6279 0.127197C10.71 0.0451502 10.8215 -0.000732422 10.9375 -0.000732422ZM0.875 12.2493C0.875 12.4813 0.966765 12.7043 1.13086 12.8684C1.29495 13.0325 1.51794 13.1243 1.75 13.1243H12.25C12.4821 13.1243 12.705 13.0325 12.8691 12.8684C13.0332 12.7043 13.125 12.4813 13.125 12.2493V3.49927H0.875V12.2493ZM9.1875 6.12329C9.24505 6.12329 9.30232 6.13444 9.35547 6.15649C9.40858 6.17855 9.45646 6.21148 9.49707 6.2522C9.53779 6.29281 9.57072 6.34069 9.59277 6.3938C9.61483 6.44695 9.62598 6.50422 9.62598 6.56177C9.62598 6.61931 9.61483 6.67658 9.59277 6.72974C9.57072 6.78285 9.53779 6.83072 9.49707 6.87134L6.87207 9.49634C6.83146 9.53705 6.78358 9.56999 6.73047 9.59204C6.67732 9.6141 6.62005 9.62524 6.5625 9.62524C6.50495 9.62524 6.44768 9.6141 6.39453 9.59204C6.34142 9.56999 6.29354 9.53705 6.25293 9.49634L4.94043 8.18384C4.89986 8.14327 4.86771 8.09521 4.8457 8.04224C4.82369 7.98909 4.81152 7.93179 4.81152 7.87427C4.81152 7.81674 4.82369 7.75945 4.8457 7.7063C4.86771 7.65332 4.89986 7.60526 4.94043 7.5647C5.02258 7.48255 5.13382 7.43579 5.25 7.43579C5.30753 7.43579 5.36482 7.44796 5.41797 7.46997C5.47095 7.49198 5.519 7.52413 5.55957 7.5647L6.5625 8.5686L8.87793 6.2522C8.91854 6.21148 8.96642 6.17855 9.01953 6.15649C9.07268 6.13444 9.12995 6.12329 9.1875 6.12329Z" fill="#717680"/>
</svg>

  </div>

  {/* الـ Calendar Popup */}
{/* الـ Calendar Popup */}
{isPickerOpen && (
  <div
    ref={pickerRef}
    className="absolute top-full right-0 mt-2 bg-white border border-border-light rounded-xl shadow-lg z-20 w-full max-w-[360px] p-4"
  >
    {/* شريط التحكم (شهر / سنة + الأسهم) */}
    <div className="flex items-center justify-between mb-4">
      <button
        onClick={() => {
          if (selectedMonth === 0) {
            setSelectedMonth(11);
            setSelectedYear((prev) => prev - 1);
          } else {
            setSelectedMonth((prev) => prev - 1);
          }
        }}
        className="p-2 rounded-full hover:bg-gray-100 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <div className="flex flex-col items-center">
        <span className="font-semibold text-gray-800">
          {months[selectedMonth]} {selectedYear}
        </span>
      </div>

      <button
        onClick={() => {
          if (selectedMonth === 11) {
            setSelectedMonth(0);
            setSelectedYear((prev) => prev + 1);
          } else {
            setSelectedMonth((prev) => prev + 1);
          }
        }}
        className="p-2 rounded-full hover:bg-gray-100 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>

    {/* أيام الأسبوع */}
    <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium text-gray-500 mb-2">
      {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
        <div key={day}>{day}</div>
      ))}
    </div>

    {/* الأيام */}
    <div className="grid grid-cols-7 gap-1 text-center">
      {Array.from({ length: new Date(selectedYear, selectedMonth, 1).getDay() }).map(
        (_, i) => (
          <div key={`empty-${i}`} />
        )
      )}
      {days.map((day) => {
        const current = new Date(selectedYear, selectedMonth, day);
        const isSelected =
          selectedDate &&
          current.toDateString() === selectedDate.toDateString();

        return (
          <button
            key={day}
            onClick={() => handleDateSelect(current)}
            className={`w-10 h-10 flex items-center justify-center rounded-full text-sm transition
              ${
                isSelected
                  ? "bg-primary-default text-white"
                  : "hover:bg-gray-100"
              }
            `}
          >
            {day}
          </button>
        );
      })}
    </div>
  </div>
)}


</div>

    </div>
  );
};

export default DatePicker;
