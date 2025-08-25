import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import CustomCheckbox from "./customCheckbox";
import { useState } from "react";
import TimeRangePicker from "./UsersDesktop/timeRangePicker";
const workingDays = [
  { day: "Sunday", checked: true, startTime: "09:00", endTime: "18:00" },
  { day: "Monday", checked: true, startTime: "09:00", endTime: "18:00" },
  { day: "Tuesday", checked: true, startTime: "09:00", endTime: "18:00" },
  { day: "Wednesday", checked: true, startTime: "09:00", endTime: "18:00" },
  { day: "Thursday", checked: true, startTime: "09:00", endTime: "18:00" },
  { day: "Friday", checked: false, startTime: "09:00", endTime: "18:00" },
  { day: "Saturday", checked: false, startTime: "09:00", endTime: "18:00" },
];
interface NoDataSectionProps {
  local: string;
  dark: boolean;
}

export default function WorkingDaysList({ local, dark }: NoDataSectionProps) {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);
  // حالة التفعيل لكل يوم (افتراضي false)
  const [activeDays, setActiveDays] = useState(workingDays.map(() => false));

  const toggleDay = (index: number) => {
    setActiveDays((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };

  return (
    <div >
      
      <div
        className={`w-40 top-2 mb-[15px] left-0 font-title-14px-semibold font-[number:var(--title-14px-semibold-font-weight)] ${
          dark ? "text-white" : "text-[#2a2b2a]"
        } text-[length:var(--title-14px-semibold-font-size)] tracking-[var(--title-14px-semibold-letter-spacing)] leading-[var(--title-14px-semibold-line-height)] [font-style:var(--title-14px-semibold-font-style)]`}
      >
        {t("Working Days")}
      </div>
      <div className="relative">
        <span className="absolute left-[280px] font-semibold">Shift 1</span>
        <span className="absolute right-[220px] font-semibold">Shift 2</span>
      </div>
      <div className="flex flex-col gap-4 mt-[50px]">
        {workingDays.map((workDay, index) => (
          <div key={index} className="flex items-center gap-8 w-full">
            <div className="flex items-center gap-5 w-[120px] ">
              {/* Checkbox */}
              <CustomCheckbox
                checked={activeDays[index]}
                onChange={() => toggleDay(index)}
              />
              <label
                className={`${
                  dark ? "text-white" : "text-[#2a2b2a]"
                } tracking-[0.07px] leading-6 [font-family:'Lato',Helvetica] font-normal text-sm whitespace-nowrap`}
              >
                {t(`${workDay.day}`)}
              </label>
            </div>

            <div className="flex items-center gap-4 w-[810px]">
              {/* أوقات العمل */}
              <div
                className={`flex items-center w-[404px] py-[7px] pl-[13px] border rounded transition transition
              ${
                activeDays[index]
                  ? "bg-[#69A3E9] border-[#e4e2dd]"
                  : "bg-transparent"
              }`}
              >
                <TimeRangePicker />
              </div>

              {/* الكتلة الثانية */}
              <div
                className={`flex items-center w-[404px] py-[7px] pl-[13px] border rounded transition transition
              ${
                activeDays[index]
                  ? "bg-[#69A3E9] border-[#e4e2dd]"
                  : "bg-transparent"
              }`}
              >
                <TimeRangePicker />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
