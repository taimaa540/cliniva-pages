import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { enUS, ar } from "date-fns/locale"; // استيراد اللغات

// تسجيل اللغات
registerLocale("en", enUS);
registerLocale("ar", ar);

interface CustomDateInputProps {
  lang: string; // اللغة المختارة
}

function DateInput({ lang = "en" }: CustomDateInputProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="relative w-[400px]">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        placeholderText={lang === "ar" ? "اختر التاريخ" : "Select Date"}
        className="w-[360px] h-[48px] font-lato font-regular text-base leading-[150%] tracking-[0]   bg-background-secondary placeholder:font-lato placeholder:font-regular placeholder:text-base placeholder:leading-[150%] placeholder:tracking-[0] placeholder:text-text-secondary px-4 py-2  rounded border border-border-light focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        dateFormat="yyyy-MM-dd"
        locale={lang} // <-- هنا اللغة
      />
      <button
        className={`absolute ${lang === 'ar' ? "left-[50px]" : "left-[330px]"}  top-1/2 -translate-y-1/2 text-text-secondary  hover:text-primary-default cursor-pointer w-5 h-5`}
        onClick={() => {
          const input = document.querySelector<HTMLInputElement>(
            ".react-datepicker__input-container input"
          );
          input?.focus();
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="16" height="16" fill="white" fill-opacity="0.01" />
          <g clip-path="url(#clip0_7963_107537)">
            <rect
              width="14"
              height="14"
              transform="translate(1 1)"
              fill="white"
              fill-opacity="0.01"
            />
            <g clip-path="url(#clip1_7963_107537)">
              <path
                d="M11.9375 0.999023C12.0535 0.999023 12.165 1.04491 12.2471 1.12695C12.3291 1.209 12.375 1.32049 12.375 1.43652V1.87402H13.25C13.7141 1.87402 14.1591 2.05853 14.4873 2.38672C14.8155 2.71491 15 3.15989 15 3.62402V13.249C15 13.7132 14.8155 14.1581 14.4873 14.4863C14.1591 14.8145 13.7141 14.999 13.25 14.999H2.75C2.28587 14.999 1.84088 14.8145 1.5127 14.4863C1.18451 14.1581 1 13.7132 1 13.249V3.62402C1 3.15989 1.18451 2.71491 1.5127 2.38672C1.84088 2.05853 2.28587 1.87402 2.75 1.87402H3.625V1.43652C3.625 1.32049 3.67088 1.209 3.75293 1.12695C3.83498 1.04491 3.94647 0.999023 4.0625 0.999023C4.17853 0.999023 4.29002 1.04491 4.37207 1.12695C4.45412 1.209 4.5 1.32049 4.5 1.43652V1.87402H11.5V1.43652C11.5 1.32049 11.5459 1.209 11.6279 1.12695C11.71 1.04491 11.8215 0.999023 11.9375 0.999023ZM1.875 13.249C1.875 13.4811 1.96677 13.7041 2.13086 13.8682C2.29495 14.0323 2.51794 14.124 2.75 14.124H13.25C13.4821 14.124 13.705 14.0323 13.8691 13.8682C14.0332 13.7041 14.125 13.4811 14.125 13.249V4.49902H1.875V13.249ZM10.1875 7.12305C10.245 7.12305 10.3023 7.13419 10.3555 7.15625C10.4086 7.1783 10.4565 7.21124 10.4971 7.25195C10.5378 7.29257 10.5707 7.34044 10.5928 7.39355C10.6148 7.44671 10.626 7.50398 10.626 7.56152C10.626 7.61907 10.6148 7.67634 10.5928 7.72949C10.5707 7.7826 10.5378 7.83048 10.4971 7.87109L7.87207 10.4961C7.83146 10.5368 7.78358 10.5697 7.73047 10.5918C7.67732 10.6139 7.62005 10.625 7.5625 10.625C7.50495 10.625 7.44768 10.6139 7.39453 10.5918C7.34142 10.5697 7.29354 10.5368 7.25293 10.4961L5.94043 9.18359C5.89986 9.14303 5.86771 9.09497 5.8457 9.04199C5.82369 8.98884 5.81152 8.93155 5.81152 8.87402C5.81152 8.8165 5.82369 8.7592 5.8457 8.70605C5.86771 8.65308 5.89986 8.60502 5.94043 8.56445C6.02258 8.4823 6.13382 8.43555 6.25 8.43555C6.30753 8.43555 6.36482 8.44771 6.41797 8.46973C6.47095 8.49174 6.519 8.52389 6.55957 8.56445L7.5625 9.56836L9.87793 7.25195C9.91854 7.21124 9.96642 7.1783 10.0195 7.15625C10.0727 7.13419 10.13 7.12305 10.1875 7.12305Z"
                fill="currentColor"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_7963_107537">
              <rect
                width="14"
                height="14"
                fill="white"
                transform="translate(1 1)"
              />
            </clipPath>
            <clipPath id="clip1_7963_107537">
              <rect
                width="14"
                height="14"
                fill="white"
                transform="translate(1 1)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
}

export default DateInput;
