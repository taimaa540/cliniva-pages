import {
  ArrowLeftIcon,
  BellIcon,
  CalendarIcon,
  ChevronDownIcon,
  SearchIcon,
  UploadIcon,
  ArrowRightIcon
} from "lucide-react";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Checkbox } from "../../../components/ui/checkbox";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../components/ui/collapsible";
import DarkModeToggle from "../../ElementUsersNoDataTo/DarkMode";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

const accountFields = [
  { label: "User Name", value: "Ammar Al Sawwa", type: "input" },
  { label: "Password", value: "ammarsvu91@gmail.com", type: "input" },
  { label: "Role", value: "Admin", type: "select" },
  { label: "User Type", value: "Staff", type: "select" },
  { label: "Medical Complex", value: "TCT Complex", type: "select" },
  { label: "Clinic", value: "X-Ray Clinic", type: "select" },
];

const addressFields = [
  { value: "2154", width: "w-[136px]" },
  { value: "Abdulaziz Street", width: "w-[165px]" },
  { value: "Al Olaya District", width: "w-[165px]" },
  { value: "Riyadh", width: "w-[165px]" },
  { value: "Saudi Arabia", width: "w-[165px]" },
];

const emergencyContact = {
  name: "Mohammed Zaki",
  relationship: "Father",
  countryCode: "+963",
  number: "93 348 151",
};

const workingDays = [
  {
    day: "Sunday",
    checked: true,
    startTime: "09:00",
    endTime: "17:00",
    nightStart: "19:00",
    nightEnd: "21:00",
  },
  {
    day: "Monday",
    checked: true,
    startTime: "09:00",
    endTime: "17:00",
    nightStart: "19:00",
    nightEnd: "21:00",
  },
  {
    day: "Tuesday",
    checked: true,
    startTime: "09:00",
    endTime: "17:00",
    nightStart: "19:00",
    nightEnd: "21:00",
  },
  {
    day: "Wednesday",
    checked: true,
    startTime: "09:00",
    endTime: "17:00",
    nightStart: "19:00",
    nightEnd: "21:00",
  },
  {
    day: "Thursday",
    checked: true,
    startTime: "09:00",
    endTime: "17:00",
    nightStart: "19:00",
    nightEnd: "21:00",
  },
  {
    day: "Friday",
    checked: false,
    startTime: "09:00",
    endTime: "18:00",
    nightStart: "00:00",
    nightEnd: "00:00",
  },
  {
    day: "Saturday",
    checked: false,
    startTime: "09:00",
    endTime: "18:00",
    nightStart: "00:00",
    nightEnd: "00:00",
  },
];

const documents = [
  { label: "Employment Contract*", effectiveDate: "May 01, 2026" },
  {
    label: "Certifications*",
    subtitle: '"For doctors only"',
    effectiveDate: "May 30, 2028",
  },
  {
    label: "Work Permit*",
    subtitle: '"For doctors only"',
    effectiveDate: "Mar 01, 2027",
  },
  { label: "CV / Resume*", effectiveDate: "Mar 01, 2027" },
];
interface NoDataSectionProps {
  local: string;
  dark: boolean;
  handelDarkClick: () => void;
  handleLanguageClick: () => void;
}
export const EmploymentDetailsSection = ({
  handleLanguageClick,
  local,
  dark,
  handelDarkClick,
}: NoDataSectionProps): JSX.Element => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);
  return (
    <div
      className={`flex-col w-[1217px] items-start gap-4 pl-0 pr-5 py-4 self-stretch flex relative left-[240px] ${
        local === "ar" ? "right-[240px] pr-0 pl-5" : "left-[240px] pl-0 pr-5"
      } ${dark ? "bg-[#030711]" : ""}`}
    >
      <header className="flex h-[50px] w-[1197px] justify-between pl-1 pr-0 py-0 self-stretch items-center relative">
        <div className="flex flex-col w-[340px] items-start gap-1.5 px-0 py-0.5 relative mt-[-1.00px] mb-[-1.00px]">
          <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
           
           
         {local === "en" ? (
  <ArrowLeftIcon/>
) : (
  <ArrowForwardIcon  className="relative w-4 h-4" />
)}


            <div className="relative w-fit mt-[-1.00px] font-title-12px-regular font-[number:var(--title-12px-regular-font-weight)] text-on-surface-secondary text-[length:var(--title-12px-regular-font-size)] tracking-[var(--title-12px-regular-letter-spacing)] leading-[var(--title-12px-regular-line-height)] whitespace-nowrap [font-style:var(--title-12px-regular-font-style)]">
              {t("Back to Users List")}
            </div>
          </div>
          <h1 className="relative self-stretch font-h5-22px-bold font-[number:var(--h5-22px-bold-font-weight)] text-on-surface-primary text-[length:var(--h5-22px-bold-font-size)] tracking-[var(--h5-22px-bold-letter-spacing)] leading-[var(--h5-22px-bold-line-height)] [font-style:var(--h5-22px-bold-font-style)]">
            {t("Edit User Details")}
          </h1>
        </div>

        <div className="inline-flex gap-3 flex-[0_0_auto] rounded-[28px] items-center relative">
          <Button
            variant="ghost"
            size="icon"
            className="p-2.5 bg-secondary-light rounded-[20px] h-auto"
          >
            <SearchIcon className="w-5 h-5" />
          </Button>

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
              className={`p-2.5 bg-secondary-light ${
                local === "ar" ? "bg-[green]" : "bg-secondary-light"
              } rounded-[20px] h-auto transition-all duration-[1000ms]`}
              onClick={handleLanguageClick}
            >
              <TranslateIcon className="w-5 h-5" />
            </Button>
          </div>

          <div className="w-10 h-[17.5px] relative">
            <DarkModeToggle dark={dark} handelDarkClick={handelDarkClick} />
          </div>

          <div className="items-center gap-3 inline-flex flex-[0_0_auto]">
            <div className="inline-flex items-center w-[40px] h-[40px] gap-2.5 flex-[0_0_auto] bg-app-primary rounded-3xl" />
            <div className="flex-col items-start gap-1 inline-flex flex-[0_0_auto]">
              <div
                className={`w-fit mt-[-1.00px] ${
                  dark ? "text-white" : "text-[#2a2b2a]"
                } font-title-16px-bold font-[number:var(--title-16px-bold-font-weight)] text-[length:var(--title-16px-bold-font-size)] tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] whitespace-nowrap [font-style:var(--title-16px-bold-font-style)]`}
              >
                Anahera Jones 
              </div>
              <div className="w-fit font-title-11px-regular font-[number:var(--title-11px-regular-font-weight)] text-on-surface-tertiary text-[length:var(--title-11px-regular-font-size)] tracking-[var(--title-11px-regular-letter-spacing)] leading-[var(--title-11px-regular-line-height)] whitespace-nowrap [font-style:var(--title-11px-regular-font-style)]">
                Admin
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className={`flex flex-col w-[1197px] items-start gap-5 p-5 relative ${dark ? "bg-[#272932] border-[white]" : "bg-bg"} rounded-2xl overflow-hidden`}>
        <Card
          style={{ boxShadow: "0px 20px 24px -4px #0A0D121A" }}
          className="w-full bg-surface-default rounded-[16px] "
        >
          <CardContent className="px-8 py-[10px]">
            <Collapsible defaultOpen className="w-full">
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="p-0 hover:bg-[none]">
                  <div className="flex items-center justify-between w-[1099px] ">
                    <h2 className="text-[14px] font-600 font-[number:var(--title-14px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-14px-semibold-font-size)] tracking-[var(--title-14px-semibold-letter-spacing)] leading-[var(--title-14px-semibold-line-height)] [font-style:var(--title-14px-semibold-font-style)]">
                      {t("Account Information")}
                    </h2>
                    <ChevronDownIcon className="relative w-[14.4px] h-[8px] " />
                  </div>
                </Button>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <div className="grid grid-cols-2 gap-6 w-full mt-[20px] mb-[10px]">
                  {accountFields.map((field, index) => (
                    <div key={index} className="flex items-start gap-8">
                      <Label className="w-40 text-[14px] font-500 font-[number:var(--btn-14px-medium-font-weight)] text-gray-700 text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
                        {t(`${field.label}`)}
                      </Label>
                      <div className="flex-1">
                        {field.type === "select" ? (
                          <Select defaultValue={field.value}>
                            <SelectTrigger style={{ direction: local === 'en' ? 'ltr' : 'rtl' }}  className="bg-base-white text-[#717680] w-[340px] border-[#d5d6d9] shadow-shadow-xs">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value={field.value}>
                                {field.value}
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        ) : (
                          <Input
                            defaultValue={field.value}
                            className="bg-base-white border-[#d5d6d9] text-[#717680] shadow-shadow-xs"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>

        <Card
          style={{
            boxShadow:
              "0px 20px 24px var(--sds-size-depth-negative-100) #0A0D121A",
          }}
          className="w-full bg-surface-default rounded-[16px] "
        >
          <CardContent className="p-8">
            <Collapsible defaultOpen className="w-full">
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="p-0 hover:bg-[none]">
                  <div className="flex items-center justify-between w-[1099px] ">
                    <h2 className="text-[14px] font-600 font-[number:var(--title-14px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-14px-semibold-font-size)] tracking-[var(--title-14px-semibold-letter-spacing)] leading-[var(--title-14px-semibold-line-height)] [font-style:var(--title-14px-semibold-font-style)]">
                      {t("Personal information")}
                    </h2>
                    <ChevronDownIcon className="relative w-[14.4px] h-[8px] " />
                  </div>
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="flex flex-col items-start gap-4 mt-[20px] relative">
                  <div className="flex items-start gap-8 w-full">
                    <Label className="w-40 font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-gray-700 text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
                      {t("Full Name")} *
                    </Label>
                    <Input
                      defaultValue="Ammar Mohammed Al Sawwa"
                      className="w-[325px] bg-base-white border-[#d5d6d9] shadow-shadow-xs"
                    />
                    <Label className="w-40 font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-gray-700 text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
                      {t("Gender")} *
                    </Label>
                    <Select defaultValue="Male">
                      <SelectTrigger   style={{ direction: local === 'en' ? 'ltr' : 'rtl' }} className="w-[353px] bg-base-white border-[#d5d6d9] shadow-shadow-xs">
                        <SelectValue />
                        <ChevronDownIcon className="w-3 h-3" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Male">  {t("Male")} </SelectItem>
                        <SelectItem value="Female"> {t("Female")} </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-start gap-8 w-full">
                    <Label className="w-40 font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-gray-700 text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
                      {t("Date of Birth")} *
                    </Label>
                    <div className="w-[330px] flex items-center gap-2 px-3.5 py-2.5 bg-base-white rounded-lg border border-[#d5d6d9] shadow-shadow-xs">
                      <span className="font-bold text-on-surface-secondary [font-family:'Lato',Helvetica] text-sm">
                        Nov 20, 1994
                      </span>
                      <CalendarIcon className="w-4 h-4 ml-auto" />
                    </div>
                    <Label className="w-40 font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-gray-700 text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
                      {t("Email")} *
                    </Label>
                    <Input
                      defaultValue="ammarsvu91@gmail.com"
                      className="flex-1 bg-base-white border-[#d5d6d9] shadow-shadow-xs"
                    />
                  </div>

                  <div className="flex items-start gap-8 w-full">
                    <Label className="w-40 font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-gray-700 text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
                      {t("Card Number")} *
                    </Label>
                    <Input
                      defaultValue="02200075921"
                      className="flex-1 bg-base-white border-[#d5d6d9] shadow-shadow-xs"
                    />
                    <Label className="w-40 font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-gray-700 text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
                      {t("Nationality")} *
                    </Label>
                    <Select defaultValue="SY">
                      <SelectTrigger    style={{ direction: local === 'en' ? 'ltr' : 'rtl' }}  className="flex-1 bg-base-white border-[#d5d6d9] shadow-shadow-xs">
                        <SelectValue />
                        <ChevronDownIcon className="w-3 h-3" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="SY">SY</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-start gap-8 w-full">
                    <Label className="w-40 font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-gray-700 text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
                      {t("Marital Status")} *
                    </Label>
                    <Select defaultValue="Married">
                      <SelectTrigger   style={{ direction: local === 'en' ? 'ltr' : 'rtl' }} className="flex-1 bg-base-white border-[#d5d6d9] shadow-shadow-xs">
                        <SelectValue />
                        <ChevronDownIcon className="w-3 h-3" />
                      </SelectTrigger>
                      <SelectContent  >
                        <SelectItem value="Married"> {t("Married")}   </SelectItem>
                        <SelectItem value="Single"> {t("Single  ")}</SelectItem>
                      </SelectContent>
                    </Select>
                    <Label className="w-40 font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-gray-700 text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
                      {t("Number of children")} *
                    </Label>
                    <Input
                      defaultValue="1"
                      className="flex-1 bg-base-white border-[#d5d6d9] shadow-shadow-xs"
                    />
                  </div>

                  <div className="flex items-start gap-8 w-full">
                    <Label className="w-40 font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-gray-700 text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
                      {t("Phone Number")} *
                    </Label>
                    <div  dir={'ltr'}  className="flex-1 flex bg-base-white rounded-lg border border-[#d5d6d9] shadow-shadow-xs">
                      <div className="px-3.5 py-2.5 bg-[#d5d7da] rounded-l-lg border-r border-[#d5d6d9]">
                        <span className="font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-on-surface-primary text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
                          +966
                        </span>
                      </div>
                      <Input 
                        defaultValue="50 123 4567"
                        className="flex-1 border-0 rounded-l-none font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-on-surface-primary text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]"
                      />
                    </div>
                    <Label className="w-40 font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-gray-700 text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
                      {t("Phone Number")} *
                    </Label>
                    <div   dir={'ltr'} className="flex-1 flex bg-base-white rounded-lg border border-[#d5d6d9] shadow-shadow-xs">
                      <div className="px-3.5 py-2.5 bg-[#d5d7da] rounded-l-lg border-r border-[#d5d6d9]">
                        <span style={{ direction: local === 'en' ? 'ltr' : 'rtl' }}  className="font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-on-surface-primary text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
                          +961
                        </span>
                      </div>
                      <Input
                        defaultValue="70 483 245"
                        className="flex-1 border-0 rounded-l-none font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-on-surface-primary text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]"
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-8 w-full">
                    <Label className="w-40 font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-gray-700 text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
                      {t("Address")} *
                    </Label>
                    {addressFields.map((field, index) => (
                      <Input
                        key={index}
                        defaultValue={field.value}
                        className={`${field.width} bg-base-white border-[#d5d6d9] shadow-shadow-xs`}
                      />
                    ))}
                  </div>

                  <div className="flex items-start gap-8 w-full">
                    <Label className="w-40 font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-gray-700 text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
                      {t("Emergency Contact")} *
                    </Label>
                    <Input
                      defaultValue={emergencyContact.name}
                      className="w-[180px] bg-base-white border-[#d5d6d9] shadow-shadow-xs"
                    />
                    <Label className="font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-gray-700 text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
                      {t("Relationship")} *
                    </Label>
                    <Input
                      defaultValue={emergencyContact.relationship}
                      className="w-[167px] bg-base-white border-[#d5d6d9] shadow-shadow-xs"
                    />
                    <Label className="font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-gray-700 text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
                      {t("Emergency Number")} *
                    </Label>
                    <div   dir={'ltr'} className="flex-1 flex bg-base-white rounded-lg border border-[#d5d6d9] shadow-shadow-xs">
                      <div className="px-3.5 py-2.5 bg-[#d5d7da] rounded-l-lg border-r border-[#d5d6d9]">
                        <span  dir={local === 'en' ? 'rtl' :  'ltr'}className="font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-on-surface-primary text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
                          {emergencyContact.countryCode}
                        </span>
                      </div>
                      <Input 
                        defaultValue={emergencyContact.number} 
                        
                        className="flex-1 border-0 rounded-l-none font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-on-surface-primary text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]"
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-8 w-full">
                    <Label className="w-40 [font-family:'Lato',Helvetica] font-medium text-on-surface-primary text-base">
                      {t("Profile Picture")} *
                    </Label>
                    <div className="w-[480px] flex flex-col items-center justify-center gap-5 p-4 bg-surface-default rounded border border-[#e4e2dd]">
                      <UploadIcon className="w-8 h-8 text-[#69a3e9]" />
                      <div className="text-center">
                        <div className="[font-family:'Lato',Helvetica] font-semibold text-on-surface-primary text-sm">
                          <span className="text-[#69a3e9]">Click or Drag</span>
                          <span className="text-[#414651]">
                            {" "}
                            file to this area to upload
                          </span>
                        </div>
                        <div className="[font-family:'Inter',Helvetica] font-normal text-on-surface-secondary text-xs mt-2">
                          SVG, PNG, JPG or GIF , Maximum file size 2MB.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>

        <Card className="w-full bg-surface-default rounded-2xl shadow-[0px_20px_24px_#0a0d121a]">
          <CardContent className="p-8">
            <Collapsible defaultOpen className="w-full">
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="p-0 hover:bg-[none]">
                  <div className="flex items-center justify-between w-[1099px] ">
                    <h2 className="text-[14px] font-600 font-[number:var(--title-14px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-14px-semibold-font-size)] tracking-[var(--title-14px-semibold-letter-spacing)] leading-[var(--title-14px-semibold-line-height)] [font-style:var(--title-14px-semibold-font-style)]">
                      {t("Employment Details")}
                    </h2>
                    <ChevronDownIcon className="relative w-[14.4px] h-[8px] " />
                  </div>
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="flex flex-col items-start gap-4 mt-[20px] relative">
                  <div className="flex items-start gap-8 w-full">
                    <Label className="w-40 font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-gray-700 text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
                      {t("Job Title")} *
                    </Label>
                    <Input
                      defaultValue={t("Manager")}
                      className="w-[339px] bg-base-white border-[#d5d6d9] shadow-shadow-xs"
                    />
                    <Label className="w-40 font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-gray-700 text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
                      {t("Date of Hire")} *
                    </Label>
                    <div className="w-[329px] flex items-center gap-2 px-3.5 py-2.5 bg-base-white rounded-lg border border-[#d5d6d9] shadow-shadow-xs">
                      <span className="font-bold text-on-surface-secondary [font-family:'Lato',Helvetica] text-sm">
                        April 27, 2025
                      </span>
                      <CalendarIcon className="w-4 h-4 ml-auto" />
                    </div>
                  </div>

                  <div   className="flex flex-col gap-4 w-full">
                    <div className="flex items-start gap-8">
                      <Label className="w-40 font-title-14px-semibold font-[number:var(--title-14px-semibold-font-weight)] text-on-surface-secondary text-[length:var(--title-14px-semibold-font-size)] tracking-[var(--title-14px-semibold-letter-spacing)] leading-[var(--title-14px-semibold-line-height)] [font-style:var(--title-14px-semibold-font-style)]">
                        {t("Working Days")} *
                      </Label>
                    </div>
                    <div  className="flex flex-col gap-4 mt-4">
                      {workingDays.map((workDay, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-8 w-full"
                        >
                          <div className="flex items-center gap-4 w-[200px]">
                            <Checkbox className="w-4 h-4" />
                            <label
                              className={`${
                                dark ? "text-white" : "text-[#2a2b2a]"
                              } tracking-[0.07px] leading-6 [font-family:'Lato',Helvetica] font-normal text-sm whitespace-nowrap`}
                            >
                              {t(`${workDay.day}`)}
                            </label>
                          </div>

                          <div className="flex items-center gap-4">
                            <div     className="flex flex-col w-[404px] items-center px-[13px] py-[7px] bg-white rounded border border-solid border-[#e4e2dd] shadow-[0px_1px_2px_#0a0d120d]">
                              <div className="flex items-center self-stretch w-full flex-[0_0_auto]">
                                <div className="flex items-center flex-1 grow">
                                  <div className="text-on-surface-secondary tracking-[0] leading-[21px] w-fit mt-[-1.00px] [font-family:'Lato',Helvetica] font-normal text-sm whitespace-nowrap">
                                    {workDay.startTime}
                                  </div>
                                </div>
                                <div className="inline-flex items-center justify-center gap-2.5 px-2 py-px self-stretch flex-[0_0_auto] bg-[#ffffff00] opacity-[0.87]">
                                    {local === "ar" ? (
                                      <ArrowLeftIcon/>
                                      )  : (
                                     <ArrowForwardIcon  className="relative w-4 h-4" />
                                       )}
                                </div>
                                <div className="flex items-center flex-1 grow">
                                  <div className="text-on-surface-secondary tracking-[0] leading-[21px] w-fit mt-[-1.00px] [font-family:'Lato',Helvetica] font-normal text-sm whitespace-nowrap">
                                    {workDay.endTime}
                                  </div>
                                </div>
                                <div className="inline-flex flex-col items-center justify-center p-px flex-[0_0_auto] bg-[#ffffff00]">
                                  <ChevronDownIcon className="w-4 h-4" />
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-4">
                              <div style={{ direction: local === 'en' ? 'ltr' : 'rtl' }}   className="flex flex-col w-[404px] items-center px-[13px] py-[7px] bg-white rounded border border-solid border-[#e4e2dd] shadow-[0px_1px_2px_#0a0d120d]">
                                <div className="flex items-center self-stretch w-full flex-[0_0_auto]">
                                  <div className="flex items-center flex-1 grow">
                                    <div className="text-on-surface-secondary tracking-[0] leading-[21px] w-fit mt-[-1.00px] [font-family:'Lato',Helvetica] font-normal text-sm whitespace-nowrap">
                                      00:00
                                    </div>
                                  </div>
                                  <div className="inline-flex items-center justify-center gap-2.5 px-2 py-px self-stretch flex-[0_0_auto] bg-[#ffffff00] opacity-[0.87]">
                                    <ArrowRightIcon className="w-4 h-4" />
                                  </div>
                                  <div className="flex items-center flex-1 grow">
                                    <div className="text-on-surface-secondary tracking-[0] leading-[21px] w-fit mt-[-1.00px] [font-family:'Lato',Helvetica] font-normal text-sm whitespace-nowrap">
                                      00:00
                                    </div>
                                  </div>
                                  <div className="inline-flex flex-col items-center justify-center p-px flex-[0_0_auto] bg-[#ffffff00]">
                                    <ChevronDownIcon className="w-4 h-4" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                     </div>
                    {/* {workingDays.map((day, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-8 w-full"
                      >
                        <div className="w-40" />
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2.5">
                            <Checkbox  
                            />
                            
                          </div>
                          <span className="[font-family:'Lato',Helvetica] font-normal text-on-surface-primary text-sm">
                            {t(`${day.day}`)}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-2 bg-white rounded border border-[#e4e2dd] shadow-[0px_1px_2px_#0a0d120d]">
                          <span className="[font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-sm">
                            {day.startTime}
                          </span>
                          <img
                            className="w-4 h-4"
                            alt="Arrow right short"
                            src="/arrow-right-short.svg"
                          />
                          <span className="[font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-sm">
                            {day.endTime}
                          </span>
                          <CalendarIcon className="w-4 h-4" />
                        </div>
                        <div className="flex items-center gap-2 px-3 py-2 bg-white rounded border border-[#e4e2dd] shadow-[0px_1px_2px_#0a0d120d]">
                          <span className="[font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-sm">
                            {day.nightStart}
                          </span>
                          <img
                            className="w-4 h-4"
                            alt="Arrow right short"
                            src="/arrow-right-short.svg"
                          />
                          <span className="[font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-sm">
                            {day.nightEnd}
                          </span>
                          <CalendarIcon className="w-4 h-4" />
                        </div>
                      </div>
                    ))} */}
               
                </div>
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>

        <Card className="w-full bg-surface-default rounded-2xl shadow-[0px_20px_24px_#0a0d121a]">
          <CardContent className="p-8">
            <Collapsible defaultOpen className="w-full">
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="p-0 hover:bg-[none]">
                  <div className="flex items-center justify-between w-[1099px] ">
                    <h2 className="text-[14px] font-600 font-[number:var(--title-14px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-14px-semibold-font-size)] tracking-[var(--title-14px-semibold-letter-spacing)] leading-[var(--title-14px-semibold-line-height)] [font-style:var(--title-14px-semibold-font-style)]">
                      {t("Document")}
                    </h2>
                    <ChevronDownIcon className="relative w-[14.4px] h-[8px] " />
                  </div>
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="flex flex-col items-start gap-4 mt-[20px] relative">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-start gap-8 w-full">
                      <Label className="w-[178px] [font-family:'Lato',Helvetica] font-medium text-on-surface-primary text-base">
                        {t(`${doc.label}`)}
                        {doc.subtitle && (
                          <>
                            <br />
                            <span className="text-[#717680] text-[10px] leading-[10px]">
                              {doc.subtitle}
                            </span>
                          </>
                        )}
                      </Label>
                      <div className="w-[339px] flex flex-col items-center justify-center gap-5 p-4 bg-surface-default rounded border border-[#e4e2dd]">
                        <UploadIcon className="w-8 h-8 text-[#69a3e9]" />
                        <div className="text-center">
                          <div className="[font-family:'Lato',Helvetica] font-semibold text-on-surface-primary text-sm">
                            <span className="text-[#69a3e9]">
                               {t(" Click or Drag ")}
                            </span>
                            <span className="text-[#414651]">
                              {" "}
                              file to this area to upload
                            </span>
                          </div>
                          <div className="[font-family:'Inter',Helvetica] font-normal text-on-surface-secondary text-xs mt-2">
                            PDF File , Maximum file size 1MB.
                          </div>
                        </div>
                      </div>
                      <Label className="w-40 font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-gray-700 text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
                        {t("Effective Date")} *
                      </Label>
                      <div className="w-[339px] flex items-center gap-2 px-3.5 py-2.5 bg-base-white rounded-lg border border-[#d5d6d9] shadow-shadow-xs">
                        {doc.effectiveDate && (
                          <span className="[font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-sm">
                            {doc.effectiveDate}
                          </span>
                        )}
                        <CalendarIcon className="w-4 h-4 ml-auto" />
                      </div>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>

        <div className="flex items-center gap-4 self-end">
          <Button
            variant="outline"
            className="px-4 py-2.5 bg-secondary-light rounded-[20px] border-2 border-[#e4e2dd] h-auto"
          >
            <span className="font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-on-surface-primary text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
            {t(  'Cancel')}
            </span>
          </Button>
          <Button className="px-4 py-2.5 bg-secondary-dark rounded-[20px] h-auto">
            <span className="font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-surface-default text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
              {t(  'Save')}
            </span>
          </Button>
        </div>
      </main>
    </div>
  );
};
