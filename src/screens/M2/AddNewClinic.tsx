import { PlusIcon, ChevronDownIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { CardContent } from "../../components/ui/card";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { Header } from "../CommonComponents/Header";
import { SideBar } from "../CommonComponents/SideBarPlan2";
import { Textarea } from "../../components/ui/textarea";
import { useState } from "react";
import DateInput from "../CommonComponents/DateInput";
import TimeRangePicker from "../CommonComponents/timeRangePicker";
import CustomCheckbox from "../CommonComponents/customCheckbox";
import { useTranslation } from "react-i18next";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../components/ui/collapsible";
import PhoneInputCustom from "../CommonComponents/PhoneInput";
const workingDays = [
  { day: "Sunday", checked: true, startTime: "09:00", endTime: "18:00" },
  { day: "Monday", checked: true, startTime: "09:00", endTime: "18:00" },
  { day: "Tuesday", checked: true, startTime: "09:00", endTime: "18:00" },
  { day: "Wednesday", checked: true, startTime: "09:00", endTime: "18:00" },
  { day: "Thursday", checked: true, startTime: "09:00", endTime: "18:00" },
  { day: "Friday", checked: false, startTime: "09:00", endTime: "18:00" },
  { day: "Saturday", checked: false, startTime: "09:00", endTime: "18:00" },
];

export const AddNewClinic = (): JSX.Element => {
  const [open, setOpen] = useState({
    info: true,
    capacity: true,
    department: true,
    contact: true,
    days: true,
  });
  const [activeDays, setActiveDays] = useState(workingDays.map(() => false));
  const toggleDay = (index: number) => {
    setActiveDays((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };
  const { t, i18n } = useTranslation();
  const [local, setLocal] = useState("en");
  function handleLanguageClick() {
    if (local === "en") {
      setLocal("ar");
      i18n.changeLanguage("ar");
    } else {
      setLocal("en");
      i18n.changeLanguage("en");
    }
  }
  const [isOpenAppointment, setIsOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const onOpenSidebar = () => setShowSidebar(true);
  const onCloseSidebar = () => setShowSidebar(false);
  return (
    <div className="flex h-screen  w-screen">
      {showSidebar && (
        <div
          onClick={onCloseSidebar}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}
      <SideBar
        isOpenAppointment={isOpenAppointment}
        setIsOpen={setIsOpen}
        local={local}
        handleLanguageClick={handleLanguageClick}
        handleDarkClick={() => {}}
        isOpen={showSidebar}
        onOpenSidebar={onOpenSidebar}
        onCloseSidebar={onCloseSidebar}
      />
      <div
        dir={`${local === "ar" ? "rtl" : "ltr"}`}
        className="flex flex-col w-full h-full overflow-heddin items-start gap-4 pl-0 pr-4 py-4"
      >
        <Header
          MainTitle="Medical Facilities"
          SubTitle="Add New clinic"
          onOpenSidebar={onOpenSidebar}
        />

        {/* Content */}
        <div className="bg-background-tertiary p-[20px] rounded-[16px] w-full overflow-hidden">
          <div className="flex flex-col w-full items-end gap-4 overflow-y-auto scroll-x-hidden h-full">
            <Card className="w-full rounded-2xl bg-background-primary">
              <CardContent className="p-[16px]">
                <Collapsible
                  open={open.info}
                  onOpenChange={() => setOpen({ ...open, info: !open.info })}
                  className="w-full"
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="p-0 hover:bg-[none] w-full"
                    >
                      <div className="flex w-full items-center justify-between mb-4 ">
                        <h2 className="text-primary-default text-[16px] font-lato font-bold leading-[124%] tracking-[0]">
                          {t("Clinic Info")}
                        </h2>
                        <ChevronDownIcon
                          style={{ width: "24px", height: "24px" }}
                          className={`transition-transform duration-200 ${
                            open.info ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </div>
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row gap-8">
                          <div className="w-40 font-lato font-medium text-base text-text-primary leading-[100%] tracking-[0]">
                            Clinic Name
                          </div>
                          <Input
                            className="w-full text-text-secondary placeholder-text-secondary px-4 py-2 bg-transparent rounded border border-border-light"
                            placeholder="Enter Clinic Name"
                          />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-8">
                          <div className="w-40 font-lato font-medium text-base text-text-primary leading-[100%] tracking-[0]">
                            Year of Establishment
                          </div>
                          <div className="flex-1">
                            <DateInput lang="" />
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-8">
                          <div className="w-40 font-lato font-medium text-base text-text-primary leading-[100%] tracking-[0]">
                            PIC Name
                          </div>
                          <Select>
                            <SelectTrigger className="w-full text-text-secondary bg-base-white border-border-light">
                              <SelectValue placeholder="PIC Name" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pic1">PIC 1</SelectItem>
                              <SelectItem value="pic2">PIC 2</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-8">
                          <div className="w-40 font-lato font-medium text-base text-text-primary leading-[100%] tracking-[0]">
                            Services Offered
                          </div>
                          <Input
                            className="w-[360px] text-text-secondary placeholder-text-secondary px-4 py-2 bg-transparent rounded border border-border-light"
                            placeholder="Enter service"
                          />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row items-start gap-8">
                          <div className="w-40 font-lato font-medium text-base text-text-primary leading-[100%] tracking-[0]">
                            Description
                          </div>
                          <div className="relative flex-1">
                            <Textarea
                              className="w-full text-text-secondary placeholder-text-secondary h-28 px-4 py-2 bg-transparent rounded border border-border-light resize-none"
                              placeholder="Enter Description"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-8">
                          <div className=" font-lato font-medium text-base text-text-primary leading-[100%] tracking-[0]">
                            Session Duration /Slot
                          </div>
                          <input
                            type="time"
                            className="block flex-1 text-text-secondary w-full px-4 py-2 bg-transparent rounded border border-solid border-border-light"
                          />
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
            <Card className="w-full rounded-2xl bg-background-primary">
              <CardContent className="p-[16px]">
                <Collapsible
                  open={open.capacity}
                  onOpenChange={() =>
                    setOpen({ ...open, capacity: !open.capacity })
                  }
                  className="w-full"
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="p-0 hover:bg-[none] w-full"
                    >
                      <div className="flex w-full items-center justify-between mb-4 ">
                        <h2 className="text-primary-default text-[16px] font-lato font-bold leading-[124%] tracking-[0] ">
                          {t("Capacity")}
                        </h2>
                        <ChevronDownIcon
                          style={{ width: "24px", height: "24px" }}
                          className={`transition-transform duration-200 ${
                            open.capacity ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </div>
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex flex-col sm:flex-row w-[366px] justify-between">
                        <div className="w-[124px] font-lato font-semibold text-base treacking-[0] leading-[124%] text-text-primary ">
                          {t("Staff Capacity")}
                        </div>
                        <Input
                          className="w-[220px] h-[48px] font-lato font-regular text-base leading-[150%] tracking-[0] placeholder:font-lato placeholder:font-regular placeholder:text-base placeholder:leading-[150%] placeholder:tracking-[0] placeholder:text-text-secondary px-4 py-2 bg-surface-default rounded border border-border-light"
                          placeholder={t("Staff Capacity")}
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row w-[366px] justify-between">
                        <div className="w-[124px] font-lato font-semibold text-base treacking-[0] leading-[124%] text-text-primary">
                          {t("Doctors Capacity")}
                        </div>
                        <Input
                          className="w-[220px] h-[48px] font-lato font-regular text-base leading-[150%] tracking-[0] placeholder:font-lato placeholder:font-regular placeholder:text-base placeholder:leading-[150%] placeholder:tracking-[0] placeholder:text-text-secondary px-4 py-2 bg-surface-default rounded border border-border-light"
                          placeholder={t("Doctors Capacity")}
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row w-[366px] justify-between">
                        <div className="w-[124px] font-lato font-semibold text-base treacking-[0] leading-[124%] text-text-primary">
                          {t("Patients Capacity")}
                        </div>
                        <Input
                          className="w-[220px] h-[48px] font-lato font-regular text-base leading-[150%] tracking-[0] placeholder:font-lato placeholder:font-regular placeholder:text-base placeholder:leading-[150%] placeholder:tracking-[0] placeholder:text-text-secondary px-4 py-2 bg-surface-default rounded border border-border-light"
                          placeholder={t("Patients Capacity")}
                        />
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
            <Card className="w-full rounded-2xl bg-background-primary">
              <CardContent className="p-[16px]">
                <Collapsible
                  open={open.department}
                  onOpenChange={() =>
                    setOpen({ ...open, department: !open.department })
                  }
                  className="w-full"
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="p-0 hover:bg-[none] w-full"
                    >
                      <div className="flex w-full items-center justify-between mb-4 ">
                        <h2 className="text-primary-default text-[16px] font-lato font-bold leading-[124%] tracking-[0] ">
                          {t("Department")}
                        </h2>
                        <ChevronDownIcon
                          style={{ width: "24px", height: "24px" }}
                          className={`transition-transform duration-200 ${
                            open.department ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </div>
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-[69px]">
                        <div className="w-[360px] font-lato font-semibold text-base text-text-primary leading-[124%] tracking-[0] ">
                          Department Name
                        </div>
                        <div className="font-lato font-semibold text-base text-text-primary leading-[124%] tracking-[0]">
                          Description
                        </div>
                      </div>
                      <div className="flex items-start gap-[69px]">
                        <Select>
                          <SelectTrigger className="w-[360px] h-12 bg-base-white border-[#d5d6d9]">
                            <SelectValue placeholder="Select Department" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dept1">Department 1</SelectItem>
                            <SelectItem value="dept2">Department 2</SelectItem>
                          </SelectContent>
                        </Select>
                        <div className="flex h-12 items-center gap-1 flex-1">
                          <div className="[font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-base tracking-[0] leading-6">
                            ----
                          </div>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
            <Card className="w-full rounded-2xl bg-background-primary">
              <CardContent className="p-[16px]">
                <Collapsible
                  open={open.contact}
                  onOpenChange={() =>
                    setOpen({ ...open, contact: !open.contact })
                  }
                  className="w-full"
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="p-0 hover:bg-[none] w-full"
                    >
                      <div className="flex w-full items-center justify-between mb-4 ">
                        <h2 className="text-primary-default text-[16px] font-lato font-bold leading-[124%] tracking-[0] ">
                          {t("Clinic Contact Information")}
                        </h2>
                        <ChevronDownIcon
                          style={{ width: "24px", height: "24px" }}
                          className={`transition-transform duration-200 ${
                            open.contact ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </div>
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="flex flex-col xl:flex-row items-start gap-8">
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex flex-col sm:flex-row gap-8 w-full">
                          <div className="w-40 font-lato font-medium text-base treacking-[0] leading-[100%] text-text-primary">
                            Phone Number
                          </div>
                          <PhoneInputCustom />
                        </div>
                        <PlusIcon className="w-8 h-8 text-secondary-dark" />
                      </div>
                      <div className="flex-1 flex flex-col sm:flex-row gap-8 w-full">
                        <div className="w-40 font-lato font-medium text-base treacking-[0] leading-[100%] text-text-primary">
                          Email
                        </div>
                        <Input
                          className="flex-1 w-full px-4 py-2 rounded border border-[#e4e2dd]"
                          placeholder="Enter Email"
                        />
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
            <Card className="w-full rounded-2xl bg-background-primary">
              <CardContent className="p-[16px]">
                <Collapsible
                  open={open.days}
                  onOpenChange={() => setOpen({ ...open, days: !open.days })}
                  className="w-full"
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="p-0 hover:bg-[none] w-full"
                    >
                      <div className="flex w-full items-center justify-between mb-4">
                        <div className="mb-[15px] font-lato font-bold text-base text-primary-default leading-[124%] tracking-[0]">
                          {t("Working Days")}
                        </div>
                        <ChevronDownIcon
                          style={{ width: "24px", height: "24px" }}
                          className={`transition-transform duration-200 ${
                            open.days ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </div>
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="flex flex-col gap-4 mt-[50px] overflow-scroll">
                      {workingDays.map((workDay, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-8 w-full "
                        >
                          <div className="flex items-center gap-5 w-[120px] ">
                            {/* Checkbox */}
                            <CustomCheckbox
                              checked={activeDays[index]}
                              onChange={() => toggleDay(index)}
                            />
                            <label
                              className={`${"text-[#2a2b2a]"} tracking-[0.07px] leading-6 [font-family:'Lato',Helvetica] font-normal text-sm whitespace-nowrap`}
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
                                                ? ""
                                                : "bg-background-tertiary"
                                            }`}
                            >
                              <TimeRangePicker />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
            <div className=" flex items-center justify-end mt-[20px]">
              <div dir="ltr" className="flex gap-[20px]">
                <Button
                  variant="outline"
                  className="w-[200px] h-[40px] bg-white border-2 border-border-light rounded-[20px] px-4 py-2.5"
                >
                  <span className="font-lato font-medium text-sm leading-[100%] tracking-[0] text-text-primary ">
                    {t("Cancel")}
                  </span>
                </Button>

                <Button className="w-[200px] h-[40px] bg-secondary-dark rounded-[20px] px-4 py-2.5">
                  <span className="font-lato font-medium text-[sm] leading-[100%] tracking-[0] text-surface-primary ">
                    {t("Save")}
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
