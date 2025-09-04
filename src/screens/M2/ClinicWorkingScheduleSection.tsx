import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import CustomCheckbox from "../customCheckbox";
import { useState } from "react";
import TimeRangePicker from "../UsersDesktop/timeRangePicker";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const workingDays = [
  { day: "Sunday", checked: true, startTime: "09:00", endTime: "18:00" },
  { day: "Monday", checked: true, startTime: "09:00", endTime: "18:00" },
  { day: "Tuesday", checked: true, startTime: "09:00", endTime: "18:00" },
  { day: "Wednesday", checked: true, startTime: "09:00", endTime: "18:00" },
  { day: "Thursday", checked: true, startTime: "09:00", endTime: "18:00" },
  { day: "Friday", checked: false, startTime: "09:00", endTime: "18:00" },
  { day: "Saturday", checked: false, startTime: "09:00", endTime: "18:00" },
];
interface buttonProps {
  handleNext: () => void;
  prevStep: () => void;
}
export const ClinicWorkSchedule = ({
  handleNext,
  prevStep,
}: buttonProps): JSX.Element => {
  const [activeDays, setActiveDays] = useState(workingDays.map(() => false));
  const toggleDay = (index: number) => {
    setActiveDays((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };

  return (
    <div className="flex flex-col w-full h-screen overflow-scroll items-start gap-4 pl-0 pr-4 py-4">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <button className="flex items-center gap-2 font-lato text-xs text-text-secondary font-regular leading-[130%] tracking-[0]">
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Choosing Plan Page
        </button>
        <h2 className="font-lato text-xl text-text-primary font-semibold leading-[116%] tracking-[0]">
          Fill in Clinic Details
        </h2>
        <p className="font-lato text-sm text-text-primary font-semibold leading-[125%] tracking-[0]">
          Working Schedule
        </p>
      </div>
      {/* Content */}
      <div className="bg-background-secondary p-[24px] rounded-[16px] w-full">
        <Card className=" w-full h-[500px] bg-background-primary py-[16px] px-[24px] mb-[16px]">
          <CardContent className="p-0">
            <div className="mb-[15px] font-lato font-bold text-base text-primary-default leading-[124%] tracking-[0]">
              Working Days
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
                      className={`${"text-[#2a2b2a]"} tracking-[0.07px] leading-6 [font-family:'Lato',Helvetica] font-normal text-sm whitespace-nowrap`}
                    >
                      {workDay.day}
                    </label>
                  </div>

                  <div className="flex items-center gap-4 w-[810px]">
                    {/* أوقات العمل */}
                    <div
                      className={`flex items-center w-[404px] py-[7px] pl-[13px] border rounded transition transition
                        ${activeDays[index] ? "" : "bg-background-tertiary"}`}
                    >
                      <TimeRangePicker />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className=" flex items-center justify-end gap-4">
          <Button
            onClick={prevStep}
            variant="outline"
            className="w-[200px] h-auto bg-white border-2 border-[#e4e2dd] rounded-[20px] px-4 py-2.5"
          >
            <ChevronLeftIcon className="w-5 h-5" />
            <span className="font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-on-surface-primary text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
              Previous
            </span>
          </Button>

          <Button
            onClick={handleNext}
            className="w-[200px] h-10 bg-secondary-dark rounded-[20px] px-4 py-2.5"
          >
            <span className="font-lato font-medium text-xs leading-[100%] tracking-[0] text-surface-primary">
              Save & Continue
            </span>
            <ChevronRightIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
