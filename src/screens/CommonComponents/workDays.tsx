import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import CustomCheckbox from "./customCheckbox";
import TimeRangePicker from "./timeRangePicker";
import { useLanguage } from "../../lib/LanguageContext";

const workingDays = [
  { day: "Sunday", checked: true, startTime: "09:00", endTime: "18:00" },
  { day: "Monday", checked: true, startTime: "09:00", endTime: "18:00" },
  { day: "Tuesday", checked: true, startTime: "09:00", endTime: "18:00" },
  { day: "Wednesday", checked: true, startTime: "09:00", endTime: "18:00" },
  { day: "Thursday", checked: true, startTime: "09:00", endTime: "18:00" },
  { day: "Friday", checked: false, startTime: "09:00", endTime: "18:00" },
  { day: "Saturday", checked: false, startTime: "09:00", endTime: "18:00" },
];

export default function WorkingDaysList() {
  const { local } = useLanguage();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);

  const [activeDays, setActiveDays] = useState(
    workingDays.map(() => false)
  );

  const toggleDay = (index: number) => {
    setActiveDays((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };

  return (
    <div className="w-full">
      {/* العنوان */}
      <div className="font-lato font-semibold text-sm leading-[125%] text-secondary-dark">
        {t("Working Days")}
      </div>

      {/* Scroll-x فقط على القائمة */}
      <div className="overflow-x-auto">
        <div className="relative min-w-[900px]">
          <span className="absolute left-[280px] font-semibold">
            {t("Shift")} 1
          </span>
          <span className="absolute left-[700px] font-semibold">
            {t("Shift")} 2
          </span>
        </div>

        {/* قائمة الأيام */}
        <div className="mt-[53px] flex flex-col gap-4 min-w-[900px]">
          {workingDays.map((workDay, index) => (
            <div
              key={index}
              className="flex items-center gap-8 w-full"
            >
              {/* اليوم + checkbox */}
              <div className="flex items-center gap-3 w-[120px] shrink-0">
                <CustomCheckbox
                  checked={activeDays[index]}
                  onChange={() => toggleDay(index)}
                />
                <label className="text-sm whitespace-nowrap">
                  {t(`${workDay.day}`)}
                </label>
              </div>

              {/* الأعمدة (تبقى صفوف جنب بعض) */}
              <div className="flex items-center gap-4 w-[810px] shrink-0">
                <div
                  className={`flex items-center w-[404px] py-2 px-3 border rounded ${
                    activeDays[index]
                      ? "bg-transparent"
                      : "bg-background-tertiary"
                  }`}
                >
                  <TimeRangePicker />
                </div>

                <div
                  className={`flex items-center w-[404px] py-2 px-3 border rounded ${
                    activeDays[index]
                      ? "bg-transparent"
                      : "bg-background-tertiary"
                  }`}
                >
                  <TimeRangePicker />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
