import { BellIcon, CalendarIcon, ChevronDownIcon } from "lucide-react";
import { CountryDropdown } from "react-country-region-selector";

import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../components/ui/collapsible";
import en from "react-phone-number-input/locale/en.json";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import FileUpload from "../CommonComponents/fillUpLoad";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import WorkingDaysList from "../CommonComponents/workDays";
import { useLanguage } from "../../lib/LanguageContext";
import { useState } from "react";
import ImageUploader from "../CommonComponents/ImageUpload";
import PhoneInputCustom from "../CommonComponents/PhoneInput";

const accountFields = [
  { label: "User Name", value: "Ammar Al Sawwa", type: "input" },
  { label: "Change Password", value: "ammarsvu91@gmail.com", type: "text" },
  { label: "Role", value: "Admin", type: "select" },
  { label: "User Type", value: "Staff", type: "text" },
  { label: "Medical Complex", value: "TCT Complex", type: "select" },
  { label: "Clinic", value: "X-Ray Clinic", type: "select" },
];

const addressFields = [
  { value: "2154", placeholder: "Building No." },
  { value: "Abdulaziz Street", placeholder: "Street" },
  { value: "Al Olaya District", placeholder: "District" },
  { value: "Riyadh", placeholder: "City" },
  { value: "Saudi Arabia", placeholder: "Country" },
];

const emergencyContact = {
  name: "Mohammed Zaki",
  relationship: "Father",
  countryCode: "+963",
  number: "93 348 151",
};

const documents = [
  { label: "Employment Contract", effectiveDate: "May 01, 2026" },
  {
    label: "Certifications",
    effectiveDate: "May 30, 2028",
  },
  {
    label: "Work Permit",
    effectiveDate: "Mar 01, 2027",
  },
  { label: "CV / Resume", effectiveDate: "Mar 01, 2027" },
];

export const EditUserDetails = (): JSX.Element => {
  const shortLabels: Record<string, string> = {};
  Object.keys(en).forEach((key) => {
    shortLabels[key] = key;
  });
  const [country, setCountry] = useState("");
  const [open, setOpen] = useState({
    personal: true,
    account: true,
    employment: true,
    documents: true,
  });
  const { local, handleLanguageClick } = useLanguage();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);

  return (
    <div className="flex flex-col w-full overflow-x-hidden min-h-screen items-start gap-4 py-4 pl-0 pr-2 sm:pr-5">
      <header className="flex flex-col sm:flex-row sm:h-[50px] justify-between pl-1 pr-0 py-0 w-full items-start sm:items-center gap-4 sm:gap-0">
        <div className="flex flex-col w-full sm:w-[340px] items-start gap-1.5 px-0 py-0.5">
          <h1 className="self-stretch mt-[-1.00px] font-lato font-semibold text-xl text-text-primary leading-[116%] tracking-[0]">
            {t("Users Management")}
          </h1>
          <p className="self-stretch font-lato font-semibold text-sm text-text-primary leading-[125%] tracking-[0]">
            {t("Add New User")}
          </p>
        </div>

        <div className="inline-flex gap-3 flex-[0_0_auto] rounded-[28px] items-center flex-wrap">
          <button className="inline-flex items-start gap-2 p-2.5 flex-[0_0_auto] bg-secondary-light rounded-[20px] relative">
            <BellIcon className="w-5 h-5" />
            <div className="flex flex-col w-5 h-5 items-center justify-center gap-2.5 p-1 absolute top-1 left-4">
              <div className="w-2 h-2 bg-[#fa812d] rounded-[14px]" />
            </div>
          </button>

          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className={`p-2.5 ${
                local === "ar" ? "bg-[green]" : "bg-secondary-light"
              } rounded-[20px] h-auto transition-all duration-[1000ms]`}
              onClick={handleLanguageClick}
            >
              <TranslateIcon className="w-5 h-5" />
            </Button>
          </div>

          <div className="w-10 h-[17.5px] relative"></div>

          <div className="items-center gap-3 inline-flex flex-[0_0_auto] hidden sm:flex">
            <div className="inline-flex items-center w-[40px] h-[40px] gap-2.5 flex-[0_0_auto] bg-app-primary rounded-3xl" />
            <div className="flex-col items-start gap-1 inline-flex flex-[0_0_auto] hidden lg:flex">
              <div className="w-fit mt-[-1.00px] text-[#2a2b2a] font-title-16px-bold font-[number:var(--title-16px-bold-font-weight)] text-[length:var(--title-16px-bold-font-size)] tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] whitespace-nowrap [font-style:var(--title-16px-bold-font-style)]">
                Anahera Jones
              </div>
              <div className="w-fit font-title-11px-regular font-[number:var(--title-11px-regular-font-weight)] text-on-surface-tertiary text-[length:var(--title-11px-regular-font-size)] tracking-[var(--title-11px-regular-letter-spacing)] leading-[var(--title-11px-regular-line-height)] whitespace-nowrap [font-style:var(--title-11px-regular-font-style)]">
                Admin
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-col h-full items-start gap-5 p-4 lg:p-[20px] pr-0 relative w-full rounded-2xl overflow-hidden bg-background-tertiary">
        <div className="flex flex-col gap-[20px] w-full overflow-y-auto overflow-x-hidden pr-4 lg:pr-[20px]">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
            <div className="w-[92px] h-[40px] bg-[#E2F6EC] text-[#00B48D] rounded-[16px] py-[9px] px-[24px] m-0">
              Active
            </div>
            <div className="flex flex-col sm:flex-row gap-[16px] w-full sm:w-auto">
              <button className="w-full sm:w-[180px] lg:w-[200px] h-[40px] rounded-[20px] border border-border-light bg-surface-primary font-lato font-medium text-sm leading-[100%] tracking-[0] text-text-primary">
                {t("Cancel")}
              </button>
              <button className="w-full sm:w-[180px] lg:w-[200px] h-[40px] rounded-[20px] bg-secondary-dark font-lato font-medium text-sm leading-[100%] tracking-[0] text-surface-primary">
                {t("Save")}
              </button>
            </div>
          </div>

          <Card className="w-full bg-background-primary rounded-[16px] p-4 lg:p-[16px]">
            <CardContent className="p-0" dir={local === "en" ? "ltr" : "rtl"}>
              <Collapsible
                open={open.personal}
                onOpenChange={() =>
                  setOpen({ ...open, personal: !open.personal })
                }
                className="w-full"
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className="p-0 hover:bg-[none] w-full"
                  >
                    <div className="flex w-full items-center justify-between mb-[12px]">
                      <h2 className="text-primary-default text-[16px] font-lato font-bold leading-[124%] tracking-[0]">
                        {t("Personal Information")}
                      </h2>
                      <ChevronDownIcon
                        style={{ width: "24px", height: "24px" }}
                        className={`transition-transform duration-200 ${
                          open.personal ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="w-full">
                  <div className="flex flex-col gap-[16px]">
                    <h3 className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-secondary-dark">
                      {t("Profile & Identity Info")}
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[22px]">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-[32px] w-full">
                        <Label className="w-full sm:w-[120px] lg:w-[160px] font-lato font-semibold text-sm lg:text-base leading-[124%] tracking-[0] text-text-primary shrink-0">
                          {t("Profile Picture")}
                        </Label>
                        <div className="flex-1">
                          <ImageUploader />
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-[32px] w-full">
                        <Label className="w-full sm:w-[120px] lg:w-[160px] font-lato font-semibold text-sm lg:text-base leading-[124%] tracking-[0] text-text-primary shrink-0">
                          {t("Full Name")}
                        </Label>
                        <Input
                          defaultValue="Ammar Mohammed Al Sawwa"
                          className="flex-1 h-[48px] bg-primary-foreground border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary"
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-[32px] w-full">
                        <Label className="w-full sm:w-[120px] lg:w-[160px] font-lato font-semibold text-sm lg:text-base leading-[124%] tracking-[0] text-text-primary shrink-0">
                          {t("Gender")}
                        </Label>
                        <div className="flex items-center gap-4 flex-1">
                          <div className="flex items-center gap-2">
                            <input
                              className="w-5 h-5"
                              type="radio"
                              name="Gender"
                            />
                            <label className="font-lato font-regular text-sm leading-[154%] tracking-[0] text-text-primary">
                              Male
                            </label>
                          </div>
                          <div className="flex items-center gap-2">
                            <input
                              className="w-5 h-5"
                              type="radio"
                              name="Gender"
                            />
                            <label className="font-lato font-regular text-sm leading-[154%] tracking-[0] text-text-primary">
                              Female
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-[32px] w-full">
                        <Label className="w-full sm:w-[120px] lg:w-[160px] font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-gray-700 text-sm lg:text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)] shrink-0">
                          {t("Date of Birth")} *
                        </Label>
                        <div className="flex items-center gap-2 px-3.5 py-2.5 flex-1 h-[48px] bg-primary-foreground border border-border-light rounded-[4px] ">
                          <span className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                            Nov 20, 1994
                          </span>
                          <CalendarIcon className="w-4 h-4 ml-auto" />
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-[32px] w-full">
                        <Label className="w-full sm:w-[120px] lg:w-[160px] font-lato font-semibold text-sm lg:text-base leading-[124%] tracking-[0] text-text-primary shrink-0">
                          {t("Nationality")}
                        </Label>
                        <CountryDropdown
                          value={country}
                          onChange={(val) => setCountry(val)}
                          className="flex-1 w-full h-[48px] px-3.5 py-2.5 bg-primary-foreground border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary px-3"
                          defaultOptionLabel="SY"
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-[32px] w-full">
                        <Label className="w-full sm:w-[120px] lg:w-[160px] font-lato font-semibold text-sm lg:text-base leading-[124%] tracking-[0] text-text-primary shrink-0">
                          {t("Card Number")}
                        </Label>
                        <Input
                          defaultValue="02200075921"
                          className="flex-1 h-[48px] px-3.5 py-2.5 bg-primary-foreground border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary"
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-[32px] w-full">
                        <Label className="w-full sm:w-[120px] lg:w-[160px] font-lato font-semibold text-sm lg:text-base leading-[124%] tracking-[0] text-text-primary shrink-0">
                          {t("Marital Status")}
                        </Label>
                        <Select defaultValue="Married">
                          <SelectTrigger className="flex-1 w-full h-[48px] px-3.5 py-2.5 bg-primary-foreground border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Married">Married</SelectItem>
                            <SelectItem value="Single">Single</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-[32px] w-full">
                        <Label className="w-full sm:w-[120px] lg:w-[160px] font-lato font-semibold text-sm lg:text-base leading-[124%] tracking-[0] text-text-primary shrink-0">
                          {t("Number of children")}
                        </Label>
                        <Input
                          defaultValue="1"
                          className="flex-1 h-[48px] px-3.5 py-2.5 bg-primary-foreground border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary"
                        />
                      </div>
                    </div>
                    <h3 className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-secondary-dark">
                      {t("Contact Info")}
                    </h3>
                    <div className="flex flex-col gap-[16px]">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[22px]">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-[32px] w-full">
                          <Label className="w-full sm:w-[120px] lg:w-[160px] font-lato font-semibold text-sm lg:text-base leading-[124%] tracking-[0] text-text-primary shrink-0">
                            {t("Phone Number")} *
                          </Label>
                          <div className="flex-1 w-full">
                            <PhoneInputCustom />
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-[32px] w-full">
                          <Label className="w-full sm:w-[120px] lg:w-[160px] font-lato font-semibold text-sm lg:text-base leading-[124%] tracking-[0] text-text-primary shrink-0">
                            {t("Email")}
                          </Label>
                          <Input
                            defaultValue="ammarsvu91@gmail.com"
                            className="flex-1 h-[48px] px-3.5 py-2.5 bg-primary-foreground border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 w-full">
                        <Label className="w-full sm:w-[120px] lg:w-[160px] font-lato font-semibold text-sm lg:text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Address")}
                        </Label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                          {addressFields.map((field, index) => (
                            <Input
                              key={index}
                              defaultValue={field.value}
                              placeholder={
                                index === 0
                                  ? "Building No."
                                  : index === 1
                                  ? "Street"
                                  : index === 2
                                  ? "District"
                                  : index === 3
                                  ? "City"
                                  : "Country"
                              }
                              className="w-full h-[48px] bg-primary-foreground border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <h3 className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-secondary-dark">
                      {t("Emergency Contact Info")}
                    </h3>
                    <div className="flex flex-col gap-[16px]">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[22px]">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-[32px] w-full">
                          <Label className="w-full sm:w-[120px] lg:w-[160px] font-lato font-semibold text-sm lg:text-base leading-[124%] tracking-[0] text-text-primary shrink-0">
                            {t("Emergency Contact")}
                          </Label>
                          <Input
                            defaultValue={emergencyContact.name}
                            className="flex-1 h-[48px] px-3.5 py-2.5 bg-primary-foreground border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary"
                          />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-[32px] w-full">
                          <Label className="w-full sm:w-[120px] lg:w-[160px] font-lato font-semibold text-sm lg:text-base leading-[124%] tracking-[0] text-text-primary shrink-0">
                            {t("Relationship")}
                          </Label>
                          <Input
                            defaultValue={emergencyContact.relationship}
                            className="flex-1 h-[48px] px-3.5 py-2.5 bg-primary-foreground border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[22px]">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-[32px] w-full">
                          <Label className="w-full sm:w-[120px] lg:w-[160px] font-lato font-semibold text-sm lg:text-base leading-[124%] tracking-[0] text-text-primary shrink-0">
                            {t("Emergency Number")}
                          </Label>
                          <div className="flex-1">
                            <PhoneInputCustom />
                          </div>
                        </div>
                        <div className="w-full"></div>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>
          <Card className="w-full bg-background-primary rounded-[16px] p-4 lg:p-[16px]">
            <CardContent
              className="p-0 relative"
              dir={local === "en" ? "ltr" : "rtl"}
            >
              <Collapsible
                open={open.account}
                onOpenChange={() =>
                  setOpen({ ...open, account: !open.account })
                }
                className="w-full"
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className="p-0 hover:bg-[none] w-full"
                  >
                    <div className="flex w-full items-center justify-between">
                      <h2 className="text-primary-default text-[16px] font-lato font-bold leading-[124%] tracking-[0]">
                        {t("Account Information")}
                      </h2>
                      <ChevronDownIcon
                        style={{ width: "24px", height: "24px" }}
                        className={`transition-transform duration-200 ${
                          open.account ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[22px] w-full mt-[20px] mb-[10px]">
                    <button className="absolute top-[70px] right-[10px] hidden lg:block">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.59473 6.32857C6.97598 6.52545 6.45098 7.02232 6.1791 7.65982L6.07598 7.90357L6.0666 11.8879C6.05723 15.7504 6.05723 15.8723 6.1416 16.1629C6.37598 16.9317 7.0416 17.5411 7.81973 17.7098C8.13848 17.7754 20.9541 17.7848 21.3104 17.7098C22.051 17.5692 22.7166 16.9879 22.9979 16.2286C23.101 15.9567 23.101 15.9567 23.1197 12.2536C23.1291 9.79732 23.1197 8.4192 23.0822 8.17545C22.9697 7.2942 22.3791 6.59107 21.5447 6.32857C21.2541 6.23482 21.1135 6.23482 14.551 6.2442C8.18535 6.2442 7.83848 6.2442 7.59473 6.32857ZM21.1885 7.13482C21.2166 7.1817 15.0104 12.0192 14.7854 12.1223C14.626 12.1879 14.5697 12.1973 14.4385 12.1504C14.3447 12.1223 13.9135 11.8223 13.4822 11.4848C13.0416 11.1379 11.626 10.0317 10.3229 9.0192C9.0291 8.0067 7.9791 7.15357 7.98848 7.13482C8.0166 7.09732 21.151 7.08795 21.1885 7.13482ZM9.4791 9.48795C10.726 10.4536 11.7479 11.2692 11.7666 11.2879C11.7947 11.3348 7.1916 16.1911 7.12598 16.1911C7.10723 16.1911 7.0416 16.0879 7.0041 15.9661C6.9291 15.7598 6.9291 15.4036 6.91973 12.0004C6.91973 8.9067 6.9291 8.22232 6.98535 8.0442C7.05098 7.82857 7.14473 7.68795 7.1916 7.7067C7.20098 7.71607 8.2416 8.51295 9.4791 9.48795ZM22.1166 7.92232C22.2104 8.14732 22.2104 8.17545 22.2104 11.9723C22.2104 15.3473 22.201 15.8161 22.1354 16.0036C22.0979 16.1254 22.051 16.2192 22.0229 16.2192C21.9854 16.2192 17.3541 11.3536 17.3635 11.3161C17.3729 11.2786 21.9479 7.7067 21.9854 7.7067C22.0135 7.69732 22.0604 7.79107 22.1166 7.92232ZM13.1354 12.3379C13.9041 12.9379 14.1197 13.0411 14.5697 13.0411C14.8697 13.0411 14.9541 13.0223 15.2072 12.8911C15.3666 12.8067 15.7604 12.5442 16.0697 12.3004C16.4729 11.9817 16.651 11.8692 16.6979 11.9067C16.726 11.9254 17.7854 13.0317 19.0416 14.3536C20.7479 16.1536 21.3104 16.7723 21.2635 16.8098C21.1979 16.8754 8.02598 16.8848 7.91348 16.8098C7.84785 16.7723 8.15723 16.4161 10.1541 14.3161C11.4291 12.9754 12.4979 11.8692 12.5166 11.8692C12.5354 11.8879 12.8166 12.0848 13.1354 12.3379Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                    {accountFields.map((field, index) => (
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
                      >
                        <Label className="w-full sm:w-[120px] lg:w-[160px] font-lato font-semibold text-sm lg:text-base leading-[124%] tracking-[0] text-text-primary shrink-0">
                          {t(`${field.label}`)}
                        </Label>
                        <div className="flex-1">
                          {field.type === "select" && (
                            <Select defaultValue={field.value}>
                              <SelectTrigger className="bg-primary-foreground border-border-light shadow-[0px_1px_2px_0px_#0A0D120D] w-full h-[48px] rounded-[4px] text-text-secondary font-lato font-semibold text-sm leading-[125%] tracking-[0]">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value={field.value}>
                                  {field.value}
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          )}
                          {field.type === "input" && (
                            <Input
                              defaultValue={field.value}
                              className="bg-primary-foreground border-border-light w-full h-[48px] shadow-[0px_1px_2px_0px_#0A0D120D] rounded-[4px] text-text-secondary font-lato font-semibold text-sm leading-[125%] tracking-[0]"
                              disabled={
                                field.label === "Password" ||
                                field.label === "User Type"
                              }
                            />
                          )}
                          {field.type === "text" && (
                            <p className="py-3 text-text-secondary font-lato font-semibold text-sm">
                              {field.value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>
          <Card className="w-full bg-background-primary rounded-[16px] p-4 lg:p-[16px]">
            <CardContent className="p-0" dir={local === "en" ? "ltr" : "rtl"}>
              <Collapsible
                open={open.employment}
                onOpenChange={() =>
                  setOpen({ ...open, employment: !open.employment })
                }
                className="w-full"
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className="p-0 hover:bg-[none] w-full"
                  >
                    <div className="flex w-full items-center justify-between mb-4">
                      <h2 className="text-primary-default text-[16px] font-lato font-bold leading-[124%] tracking-[0]">
                        {t("Employment Details")}
                      </h2>
                      <ChevronDownIcon
                        style={{ width: "24px", height: "24px" }}
                        className={`transition-transform duration-200 ${
                          open.employment ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="flex flex-col items-start gap-4 mt-[20px] relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[21.5px] w-full">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-[32px] w-full">
                        <Label className="w-full sm:w-[120px] lg:w-[160px] font-lato font-semibold text-sm lg:text-base leading-[124%] tracking-[0] text-text-primary shrink-0">
                          {t("Job Title")}
                        </Label>
                        <Input
                          defaultValue="Manager"
                          className="bg-primary-foreground border-border-light w-full h-[48px] shadow-[0px_1px_2px_0px_#0A0D120D] rounded-[4px] text-text-secondary font-lato font-semibold text-sm leading-[125%] tracking-[0]"
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-[32px] w-full">
                        <Label className="w-full sm:w-[120px] lg:w-[170px] font-lato font-semibold text-sm lg:text-base leading-[124%] tracking-[0] text-text-primary shrink-0">
                          {t("Date of Hire")}
                        </Label>
                        <div className="w-full h-[48px] flex items-center gap-2 px-3.5 py-2.5 bg-primary-foreground rounded-[4px] border border-border-light shadow-[0px_1px_2px_0px_#0A0D120D]">
                          <span className="text-text-secondary font-lato font-semibold text-sm leading-[125%] tracking-[0]">
                            {t("April")} 27, 2025
                          </span>
                          <CalendarIcon className="w-4 h-4 ml-auto" />
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <WorkingDaysList />
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>
          <Card className="w-full bg-background-primary rounded-[16px] p-4 lg:p-[16px]">
            <CardContent className="p-0" dir={local === "en" ? "ltr" : "rtl"}>
              <Collapsible
                open={open.documents}
                onOpenChange={() =>
                  setOpen({ ...open, documents: !open.documents })
                }
                className="w-full"
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className="p-0 hover:bg-[none] w-full"
                  >
                    <div className="flex w-full items-center justify-between mb-4">
                      <h2 className="text-primary-default text-[16px] font-lato font-bold leading-[124%] tracking-[0]">
                        {t("Documents")}
                      </h2>
                      <ChevronDownIcon
                        style={{ width: "24px", height: "24px" }}
                        className={`transition-transform duration-200 ${
                          open.documents ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="flex flex-col items-start gap-4 mt-[20px] relative">
                    {documents.map((doc, index) => (
                      <div
                        key={index}
                        className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 w-full"
                      >
                        <Label className="w-full lg:w-[178px] font-lato font-semibold text-sm lg:text-base leading-[124%] tracking-[0] text-text-primary shrink-0">
                          {t(`${doc.label}`)}
                        </Label>

                        <div className="flex-1 min-w-0">
                          <FileUpload />
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 w-full lg:w-auto">
                          <Label className="w-full sm:w-auto font-lato font-semibold text-sm lg:text-base leading-[124%] tracking-[0] text-text-primary shrink-0">
                            {t("Effective Date")}
                          </Label>
                          <div className="w-full sm:w-[250px] lg:w-[339px] flex items-center gap-2 px-3.5 py-2.5 bg-base-white rounded-lg border border-[#d5d6d9] shadow-shadow-xs">
                            {doc.effectiveDate && (
                              <span className="[font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-sm">
                                {doc.effectiveDate}
                              </span>
                            )}
                            <CalendarIcon className="w-4 h-4 ml-auto shrink-0" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};
