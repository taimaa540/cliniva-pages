import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import CustomCheckbox from "./customCheckbox";
import { useState } from "react";
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
  // حالة التفعيل لكل يوم (افتراضي false)
  const [activeDays, setActiveDays] = useState(workingDays.map(() => false));

  const toggleDay = (index: number) => {
    setActiveDays((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };

  return (
    <div className="w-full">
      
      <div
        className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-secondary-dark"
      >
        {t("Working Days")}
      </div>
 <div className="flex w-full max-w-[900px] mx-auto gap-4">
  <span className="flex-1 text-center font-lato font-semibold hidden lg:block">
    {t('Shift')} 1
  </span>
  <span className="flex-1 text-center font-lato font-semibold hidden lg:block">
    {t('Shift')} 2
  </span>
</div>










      
      <div className="flex flex-col gap-4 mt-[53px]">
        {workingDays.map((workDay, index) => (
          <div key={index} className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 w-full">
            <div className="flex items-center gap-5 w-[160px] ">
              {/* Checkbox */}
              <CustomCheckbox
                checked={activeDays[index]}
                onChange={() => toggleDay(index)}
              />
              <label
                className={`tracking-[0.07px] leading-6 [font-family:'Lato',Helvetica]  font-normal text-base whitespace-nowrap`}
              >
                {t(`${workDay.day}`)}
              </label>
            </div>

  <div className="flex flex-col lg:flex-row gap-2 w-full max-w-[810px]">
  {/* الحقل الأول */}
   <div className="flex-1 min-w-0  max-w-[404px] text-center"> <label className="block text-sm lg:hidden  text-center font-semibold ">Shift 1</label>
  <div
    className={`flex-1 min-w-0  max-w-[404px] py-[7px] pl-[13px] border rounded transition 
    ${activeDays[index] ? "bg-transparent" : "bg-background-tertiary"}`}
  >
    <TimeRangePicker />
  </div></div>

  {/* الحقل الثاني */}<div className="flex-1 min-w-0  max-w-[404px] text-center"><label className="block lg:hidden   text-sm font-semibold ">Shift 2</label>
  <div
    className={`flex-1 min-w-0  max-w-[404px] py-[7px] pl-[13px] border rounded transition 
    ${activeDays[index] ? "bg-transparent" : "bg-background-tertiary"}`}
  >
    
    <TimeRangePicker />
  </div>
</div></div>


          </div>
        ))}
      </div>
    </div>
  );
}
