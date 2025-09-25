import { BellIcon, PlusIcon, ChevronDownIcon } from "lucide-react";
import { Button } from "../../components/ui/button"; 
import {  CardContent } from "../../components/ui/card";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input"; 
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
}  from "@radix-ui/react-select";

import { Textarea } from "../../components/ui/textarea"; 
import PhoneInput from "react-phone-input-2";
import { useState } from "react";
import DateInput from "../CommonComponents/DateInput";
import TimeRangePicker from "../CommonComponents/timeRangePicker";
import CustomCheckbox from "../CommonComponents/customCheckbox";
import { useTranslation } from "react-i18next";
import TranslateIcon from "@mui/icons-material/Translate";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../components/ui/collapsible";

import TimeInput from "../CommonComponents/TimeInput";

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
  const [phone, setPhone] = useState("");
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
  return (
    <div
      dir={`${local === "ar" ? "rtl" : "ltr"}`}
      className="flex flex-col w-full h-full overflow-heddin items-start gap-4 pl-0 pr-4 py-4"
    >
      {/* Header */}
      <header className="flex h-[66px] justify-between pl-1 pr-0 py-0 w-full items-center">
        <div className="flex flex-col w-[340px] items-start gap-1.5 px-0 py-0.5">
          <h2 className="font-lato text-xl text-text-primary font-semibold leading-[116%] tracking-[0]">
            {t("Medical Facilities")}
          </h2>
          <p className="font-lato text-sm text-text-primary font-semibold leading-[125%] tracking-[0]">
            {t("Add New clinic")}
          </p>
        </div>

        <div className="inline-flex gap-3 flex-[0_0_auto] rounded-[28px] items-center">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="p-2.5 bg-secondary-light rounded-[20px] h-auto"
            >
              <BellIcon className="w-5 h-5" />
            </Button>
            <div className="absolute top-1 left-4 w-2 h-2 bg-[#fa812d] rounded-full" />
          </div>

          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className={`p-2.5 ${
                local === "ar" ? "bg-secondary-dark" : "bg-secondary-light"
              } rounded-[20px] h-auto`}
              onClick={handleLanguageClick}
            >
              <TranslateIcon className="w-5 h-5" />
            </Button>
          </div>

          <div className="w-10 h-[17.5px] relative"></div>

          <div className="items-center gap-3 inline-flex ">
            <div className="inline-flex items-center w-[40px] h-[40px] gap-2.5 bg-app-primary rounded-3xl" />
            <div className="flex-col items-start gap-1 inline-flex ">
              <div className="font-lato font-bold text-base leading-[124%] tracking-[0] text-text-primary">
                Anahera Jones
              </div>
              <div className="font-lato font-regular text-xs leading-[124%] tracking-[0] text-border-medium">
                Admin
              </div>
            </div>
          </div>
        </div>
      </header>
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
                      <h2 className="text-primary-default text-[16px] font-lato font-bold leading-[124%] tracking-[0] ">
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
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-8">
                        <div className="w-40 font-lato font-medium text-base text-text-primary leading-[100%] tracking-[0]">
                          {t("Clinic Name")}
                        </div>
                        <Input
                          className="w-[360px] h-[48px] font-lato font-regular text-base leading-[150%] tracking-[0] placeholder:font-lato placeholder:font-regular placeholder:text-base placeholder:leading-[150%] placeholder:tracking-[0] placeholder:text-text-secondary px-4 py-2 bg-surface-default rounded border border-border-light"
                          placeholder={`${t("Enter")} ${t("Clinic Name")}`}
                        />
                      </div>
                      <div className="flex items-center gap-8">
                        <div className="w-40 font-lato font-medium text-base text-text-primary leading-[100%] tracking-[0]">
                          {t("Year of Establishment")}
                        </div>
                        <DateInput lang={local} />
                      </div>
                      <div className="flex items-center gap-8">
                        <div className="w-40 font-lato font-medium text-base text-text-primary leading-[100%] tracking-[0]">
                          {t("PIC Name")}
                        </div>
                        <Select>
                          <SelectTrigger
                            dir={`${local === "ar" ? "rtl" : "ltr"}`}
                            className="w-[360px] h-[48px] text-text-secondary bg-surface-default border-border-light"
                          >
                            <SelectValue placeholder={t("PIC Name")} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pic1">{t("PIC")} 1</SelectItem>
                            <SelectItem value="pic2">{t("PIC")} 2</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center gap-8">
                        <div className="w-40 font-lato font-medium text-base text-text-primary leading-[100%] tracking-[0]">
                          {t("Services Offered")}
                        </div>
                        <Input
                          className="w-[360px] h-[48px] font-lato font-regular text-base leading-[150%] tracking-[0] placeholder:font-lato placeholder:font-regular placeholder:text-base placeholder:leading-[150%] placeholder:tracking-[0] placeholder:text-text-secondary px-4 py-2 bg-surface-default rounded border border-border-light"
                          placeholder={`${t("Enter")} ${t("service")}`}
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-8">
                        <div className="w-40 font-lato font-medium text-base text-text-primary leading-[100%] tracking-[0]">
                          {t("Description")}
                        </div>
                        <div className="relative">
                          <Textarea
                            className="w-[360px] font-lato font-regular text-base leading-[150%] tracking-[0] placeholder:font-lato placeholder:font-regular placeholder:text-base placeholder:leading-[150%] placeholder:tracking-[0] placeholder:text-text-secondary h-28 px-4 py-2 bg-surface-default rounded border border-border-light resize-none"
                            placeholder={`${t("Enter")} ${t("Description")}`}
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-8">
                        <div className="w-[161.77px] font-lato font-medium text-base text-text-primary leading-[100%] tracking-[0]">
                          {t("Session Duration /Slot")}
                        </div>
                        {/* <input
                          type="time"
                          className="block font-lato font-regular text-base leading-[150%] tracking-[0] placeholder:font-lato placeholder:font-regular placeholder:text-base placeholder:leading-[150%] placeholder:tracking-[0] placeholder:text-text-secondary w-[360px] h-[48px] px-4 py-2 bg-surface-default rounded border border-solid border-border-light"
                        /> */}
                        <TimeInput lang={local}/>
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
                  <div className="flex items-center gap-4">
                    <div className="flex w-[366px] items-center justify-between">
                      <div className="w-[124px] font-lato font-semibold text-base treacking-[0] leading-[124%] text-text-primary ">
                        {t("Staff Capacity")}
                      </div>
                      <Input
                        className="w-[220px] h-[48px] font-lato font-regular text-base leading-[150%] tracking-[0] placeholder:font-lato placeholder:font-regular placeholder:text-base placeholder:leading-[150%] placeholder:tracking-[0] placeholder:text-text-secondary px-4 py-2 bg-surface-default rounded border border-border-light"
                        placeholder={t("Staff Capacity")}
                      />
                    </div>
                    <div className="flex w-[366px] items-center justify-between">
                      <div className="w-[124px] font-lato font-semibold text-base treacking-[0] leading-[124%] text-text-primary">
                        {t("Doctors Capacity")}
                      </div>
                      <Input
                        className="w-[220px] h-[48px] font-lato font-regular text-base leading-[150%] tracking-[0] placeholder:font-lato placeholder:font-regular placeholder:text-base placeholder:leading-[150%] placeholder:tracking-[0] placeholder:text-text-secondary px-4 py-2 bg-surface-default rounded border border-border-light"
                        placeholder={t("Doctors Capacity")}
                      />
                    </div>
                    <div className="flex w-[366px] items-center justify-between">
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
                        {t("Department Name")}
                      </div>
                      <div className="font-lato font-semibold text-base text-text-primary leading-[124%] tracking-[0]">
                        {t("Description")}
                      </div>
                    </div>
                    <div className="flex items-start gap-[69px]">
                      <Select>
                        <SelectTrigger
                          dir={`${local === "ar" ? "rtl" : "ltr"}`}
                          className="w-[360px] h-[48px] text-text-secondary bg-surface-default border-border-light"
                        >
                          <SelectValue
                            placeholder={`${t("Select")} ${t("Department")}`}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dept1">
                            {t("Department")} 1
                          </SelectItem>
                          <SelectItem value="dept2">
                            {t("Department")} 2
                          </SelectItem>
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
                  <div className="flex items-start gap-[150px]">
                    <div className="flex flex-col w-[552px] items-end gap-2">
                      <div className="flex items-center gap-8 w-full">
                        <div className="w-40 font-lato font-medium text-base treacking-[0] leading-[100%] text-text-primary">
                          {t("Phone Number")}
                        </div>
                        <div dir="ltr">
                          <PhoneInput
                            country={"sa"} // الدولة الافتراضية
                            value={phone}
                            onChange={setPhone}
                            enableAreaCodes={true}
                            inputClass="bg-surface-primary"
                            inputStyle={{
                              width: "400px",
                              height: "48px",
                              borderRadius: "4px",
                              border: "1px solid #E4E2DD",
                              direction: "ltr",
                            }}
                            buttonClass="bg-surface-primary"
                          />
                        </div>
                      </div>
                      <PlusIcon className="w-8 h-8 text-secondary-dark" />
                    </div>
                    <div className="inline-flex items-center ">
                      <div className="w-[100px] font-lato font-medium text-base treacking-[0] leading-[100%] text-text-primary">
                        {t("Email")}
                      </div>
                      <Input
                        className="w-[360px] h-[48px] font-lato font-regular text-base leading-[150%] tracking-[0] placeholder:font-lato placeholder:font-regular placeholder:text-base placeholder:leading-[150%] placeholder:tracking-[0] placeholder:text-text-secondary px-4 py-2 bg-surface-default rounded border border-border-light"
                        placeholder={`${t("Enter")} ${t("Email")}`}
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
                  <div className="flex flex-col gap-4 mt-[50px]">
                    {workingDays.map((workDay, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-8 w-full"
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
  );
};
