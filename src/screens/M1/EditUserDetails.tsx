import { BellIcon, CalendarIcon, ChevronDownIcon } from "lucide-react";
import { CountryDropdown } from "react-country-region-selector";
import PhoneInput from "react-phone-number-input";

import en from "react-phone-number-input/locale/en.json";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../components/ui/collapsible";
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

const accountFields = [
  { label: "User Name", value: "Ammar Al Sawwa", type: "input" },
  { label: "Ghange Password", value: "ammarsvu91@gmail.com", type: "text" },
  { label: "Role", value: "Admin", type: "select" },
  { label: "User Type", value: "Staff", type: "text" },
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
  const [value, setValue] = useState<string | undefined>("");
  const shortLabels: Record<string, string> = {};
  Object.keys(en).forEach((key) => {
    shortLabels[key] = key; // يظهر SY, US, EG بدل اسم الدولة
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
    <div className="flex flex-col w-full overflow-hidden min-h-screen items-start gap-4 py-4 pl-0 pr-5">
      <header className="flex h-[50px] justify-between pl-1 pr-0 py-0 w-full items-center">
        <div className="flex flex-col w-[340px] items-start gap-1.5 px-0 py-0.5">
          <h1 className="self-stretch mt-[-1.00px] font-lato font-semibold text-xl text-text-primary leading-[116%] tracking-[0]">
            {t("Users Management")}
          </h1>
          <p className="font-lato font-semibold text-sm text-text-primary leading-[125%] tracking-[0]">
            {t("Add New User")}
          </p>
        </div>

        <div className="inline-flex gap-3 flex-[0_0_auto] rounded-[28px] items-center">
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
              className={`p-2.5 bg-secondary-light ${
                local === "ar" ? "bg-[green]" : "bg-secondary-light"
              } rounded-[20px] h-auto transition-all duration-[1000ms]`}
              onClick={handleLanguageClick}
            >
              <TranslateIcon className="w-5 h-5" />
            </Button>
          </div>

          <div className="w-10 h-[17.5px] relative"></div>

          <div className="items-center gap-3 inline-flex flex-[0_0_auto]">
            <div className="inline-flex items-center w-[40px] h-[40px] gap-2.5 flex-[0_0_auto] bg-app-primary rounded-3xl" />
            <div className="flex-col items-start gap-1 inline-flex flex-[0_0_auto]">
              <div
                className={`w-fit mt-[-1.00px] 
                    "text-[#2a2b2a]"
                   font-title-16px-bold font-[number:var(--title-16px-bold-font-weight)] text-[length:var(--title-16px-bold-font-size)] tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] whitespace-nowrap [font-style:var(--title-16px-bold-font-style)]`}
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

      <main className="flex flex-col h-full items-start gap-5 p-[20px] pr-0 relative w-full rounded-2xl overflow-hidden bg-background-tertiary">
        <div className="flex flex-col gap-[20px] w-full overflow-y-auto scroll-x-hidden pr-[20px]">
          <div className="flex justify-between">
            <div className="w-[92px] h-[40px] bg-[#E2F6EC] text-[#00B48D] rounded-[16px] py-[9px] px-[24px] m-0">
              Active
            </div>
            <div className="flex gap-[16px]">
              <button className=" w-[200px] h-[40px] rounded-[20px] border border-border-light bg-surface-primary  font-lato font-medium text-sm leading-[100%] tracking-[0] text-text-primary">
                {t("Cancel")}
              </button>
              <button className=" w-[200px] h-[40px] rounded-[20px] bg-secondary-dark font-lato font-medium text-sm leading-[100%] tracking-[0] text-surface-primary">
                {t("Save")}
              </button>
            </div>
          </div>

          <Card className="w-full bg-background-primary rounded-[16px] p-[16px]">
            <CardContent dir={local === "en" ? "ltr" : "rtl"}>
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
                    <div className="flex w-full items-center justify-between mb-[12px] ">
                      <h2 className="text-primary-default text-[16px] font-lato font-bold leading-[124%] tracking-[0] ">
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
                      {t('Profile & Identity Info')}
                    </h3>
                    <div className="grid grid-cols-2 gap-[22px]">
                      <div className="flex items-center gap-[32px] w-full">
                        <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Profile Picture")}
                        </Label>
                        <ImageUploader />
                      </div>
                      <div className="flex items-center gap-[32px] w-full">
                        <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Full Name")}
                        </Label>
                        <Input
                          defaultValue="Ammar Mohammed Al Sawwa"
                          className="flex-1 h-[48px] bg-primary-foreground border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary"
                        />
                      </div>
                      <div className="flex items-center gap-[32px] w-full">
                        <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Gender")}
                        </Label>
                        <input className="w-5 h-5" type="radio" name="Gender" />
                        <label className="font-lato font-regular text-sm leading-[154%] tracking-[0] text-text-primary">
                          Male
                        </label>
                        <input className="w-5 h-5" type="radio" name="Gender" />
                        <label className="font-lato font-regular text-sm leading-[154%] tracking-[0] text-text-primary">
                          Female
                        </label>
                      </div>
                      <div className="flex items-center gap-[32px] w-full">
                        <Label className="w-40 font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-gray-700 text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
                          {t("Date of Birth")} *
                        </Label>
                        <div className="flex items-center gap-2 px-3.5 py-2.5 flex-1 h-[48px] bg-primary-foreground border border-border-light rounded-[4px] ">
                          <span className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                            Nov 20, 1994
                          </span>
                          <CalendarIcon className="w-4 h-4 ml-auto" />
                        </div>
                      </div>
                      <div className="flex items-center gap-[32px] w-full">
                        <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Nationality")}
                        </Label>
                        <CountryDropdown
                          value={country}
                          onChange={(val) => setCountry(val)}
                          className="flex-1 h-[48px] bg-primary-foreground border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary"
                          defaultOptionLabel="SY"
                        />
                      </div>
                      <div className="flex items-center gap-[32px] w-full">
                        <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Card Number")}
                        </Label>
                        <Input
                          defaultValue="02200075921"
                          className=" flex-1 h-[48px] bg-primary-foreground border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary"
                        />
                      </div>
                      <div className="flex items-center gap-[32px] w-full">
                        <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Marital Status")}
                        </Label>
                        <Select defaultValue="Married">
                          <SelectTrigger className="flex-1 h-[48px] bg-primary-foreground border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Married">Married</SelectItem>
                            <SelectItem value="Single">Single</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center gap-[32px] w-full">
                        <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Number of children")}
                        </Label>
                        <Input
                          defaultValue="1"
                          className="flex-1 h-[48px] bg-primary-foreground border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary"
                        />
                      </div>
                    </div>
                    <h3 className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-secondary-dark">
                      {t('Contact Info')}
                    </h3>
                    <div className="flex flex-col gap-[16px]">
                      <div className="grid grid-cols-2 gap-[22px]">
                        <div className="flex items-center gap-[32px] w-full">
                          <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                            {t("Phone Number")} *
                          </Label>
                          <PhoneInput
                            defaultCountry="SY"
                            value={value}
                            onChange={setValue}
                            labels={{ ...en, ...shortLabels }} // القائمة = en, الحقل = shortLabels
                            className="flex-1 h-[48px] bg-primary-foreground border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary"
                            placeholder="أدخل رقم الهاتف"
                          />
                        </div>
                        <div className="flex items-center gap-[32px] w-full">
                          <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                            {t("Email")}
                          </Label>
                          <Input
                            defaultValue="ammarsvu91@gmail.com"
                            className="flex-1 h-[48px] bg-primary-foreground border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary"
                          />
                        </div>
                      </div>
                      <div className="flex items-start gap-8 w-full">
                        <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Address")}
                        </Label>
                        {addressFields.map((field, index) => (
                          <Input
                            key={index}
                            defaultValue={field.value}
                            className={`${field.width} flex-1 h-[48px] bg-primary-foreground border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary`}
                          />
                        ))}
                      </div>
                    </div>
                    <h3 className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-secondary-dark">
                      {t('Emergency Contact Info')}
                    </h3>
                    <div className="flex flex-col gap-[16px]">
                      <div className="grid grid-cols-2 gap-[22px]">
                        <div className="flex items-center gap-[32px] w-full">
                          <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                            {t("Emergency Contact")}
                          </Label>
                          <Input
                            defaultValue={emergencyContact.name}
                            className="flex-1 h-[48px] bg-primary-foreground border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary"
                          />
                        </div>
                        <div className="flex items-center gap-[32px] w-full">
                          <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                            {t("Relationship")}
                          </Label>
                          <Input
                            defaultValue={emergencyContact.relationship}
                            className="flex-1 h-[48px] bg-primary-foreground border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary"
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-[32px] w-full">
                        <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Emergency Number")} 
                        </Label>
                        <PhoneInput
                          defaultCountry="SY"
                          value={value}
                          onChange={setValue}
                          labels={{ ...en, ...shortLabels }} // القائمة = en, الحقل = shortLabels
                          className="flex-1 h-[48px] bg-primary-foreground border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary"
                          placeholder="أدخل رقم الهاتف"
                        />
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>
          <Card className="w-full bg-background-primary rounded-[16px] p-[16px]">
            <CardContent className="relative" dir={local === "en" ? "ltr" : "rtl"}>
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
                      <h2 className="text-primary-default text-[16px] font-lato font-bold leading-[124%] tracking-[0] ">
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
                  <div className="grid grid-cols-2 gap-[22px] w-full mt-[20px] mb-[10px]">
                    <button className="absolute top-[70px] right-[10px]">
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
                        <path
                          d="M3.8511 8.76645C3.53235 8.94457 3.56985 9.44145 3.91673 9.55395C4.13235 9.62895 5.2386 9.61957 5.43548 9.5352C5.7261 9.41332 5.79173 9.03832 5.55735 8.8227C5.45423 8.71957 5.40735 8.71957 4.7136 8.7102C4.12298 8.70082 3.95423 8.7102 3.8511 8.76645Z"
                          fill="currentColor"
                        />
                        <path
                          d="M1.13359 10.1059C0.955469 10.2934 0.955469 10.5184 1.13359 10.7059L1.26484 10.8371H3.35547C5.66172 10.8371 5.58672 10.8465 5.68984 10.5465C5.74609 10.359 5.69922 10.209 5.53047 10.0684C5.40859 9.97461 5.38047 9.97461 3.33672 9.97461H1.26484L1.13359 10.1059Z"
                          fill="currentColor"
                        />
                        <path
                          d="M2.90641 11.823C2.68141 12.0199 2.72829 12.3949 2.98141 12.5168C3.04704 12.5449 3.48766 12.5637 4.22829 12.5637C5.50329 12.5637 5.58766 12.5449 5.68141 12.273C5.74704 12.0762 5.65329 11.8324 5.47516 11.748C5.40016 11.7199 4.97829 11.7012 4.20954 11.7012H3.04704L2.90641 11.823Z"
                          fill="currentColor"
                        />
                        <path
                          d="M2.15391 13.2935C2.00391 13.3498 1.86328 13.5654 1.86328 13.706C1.86328 13.7904 1.91016 13.8935 1.99453 13.9873L2.12578 14.1373L3.73828 14.1467C5.51953 14.156 5.51016 14.156 5.65078 13.8748C5.72578 13.7248 5.72578 13.6967 5.66016 13.5467C5.53828 13.256 5.47266 13.2467 3.75703 13.256C2.93203 13.256 2.20078 13.2748 2.15391 13.2935Z"
                          fill="currentColor"
                        />
                        <path
                          d="M19.9056 20.739L19.7102 21.0799L19.0744 20.7121C19.031 20.6841 18.9901 20.656 18.9518 20.6279C18.9135 20.5998 18.8803 20.5679 18.8522 20.5321C18.888 20.6113 18.9059 20.7032 18.9059 20.8079V21.5395H18.5075V20.8156C18.5075 20.7058 18.5216 20.6138 18.5497 20.5398C18.5011 20.6036 18.4309 20.6611 18.339 20.7121L17.707 21.076L17.5116 20.7351L18.1398 20.3712C18.2317 20.3176 18.3224 20.2832 18.4118 20.2678C18.3224 20.2576 18.2317 20.2231 18.1398 20.1644L17.5078 19.7967L17.7032 19.4558L18.339 19.8235C18.3824 19.8516 18.422 19.881 18.4577 19.9116C18.496 19.9397 18.5292 19.9716 18.5573 20.0074C18.5241 19.9257 18.5075 19.8325 18.5075 19.7278V19H18.9059V19.7239C18.9059 19.775 18.902 19.8235 18.8944 19.8695C18.8893 19.9154 18.8778 19.9589 18.8599 19.9997C18.9186 19.9308 18.9901 19.872 19.0744 19.8235L19.7064 19.4596L19.9018 19.8005L19.2736 20.1644C19.2302 20.1899 19.1868 20.2129 19.1434 20.2334C19.0999 20.2512 19.0565 20.2627 19.0131 20.2678C19.0565 20.2755 19.0999 20.2883 19.1434 20.3061C19.1868 20.3215 19.2302 20.3432 19.2736 20.3712L19.9056 20.739Z"
                          fill="currentColor"
                        />
                        <path
                          d="M16.6517 20.739L16.4563 21.0799L15.8205 20.7121C15.7771 20.6841 15.7362 20.656 15.6979 20.6279C15.6596 20.5998 15.6264 20.5679 15.5983 20.5321C15.6341 20.6113 15.652 20.7032 15.652 20.8079V21.5395H15.2536V20.8156C15.2536 20.7058 15.2677 20.6138 15.2957 20.5398C15.2472 20.6036 15.177 20.6611 15.0851 20.7121L14.4531 21.076L14.2577 20.7351L14.8859 20.3712C14.9778 20.3176 15.0685 20.2832 15.1579 20.2678C15.0685 20.2576 14.9778 20.2231 14.8859 20.1644L14.2539 19.7967L14.4493 19.4558L15.0851 19.8235C15.1285 19.8516 15.1681 19.881 15.2038 19.9116C15.2421 19.9397 15.2753 19.9716 15.3034 20.0074C15.2702 19.9257 15.2536 19.8325 15.2536 19.7278V19H15.652V19.7239C15.652 19.775 15.6481 19.8235 15.6405 19.8695C15.6354 19.9154 15.6239 19.9589 15.606 19.9997C15.6647 19.9308 15.7362 19.872 15.8205 19.8235L16.4525 19.4596L16.6478 19.8005L16.0197 20.1644C15.9763 20.1899 15.9329 20.2129 15.8894 20.2334C15.846 20.2512 15.8026 20.2627 15.7592 20.2678C15.8026 20.2755 15.846 20.2883 15.8894 20.3061C15.9329 20.3215 15.9763 20.3432 16.0197 20.3712L16.6517 20.739Z"
                          fill="currentColor"
                        />
                        <path
                          d="M13.3978 20.739L13.2024 21.0799L12.5666 20.7121C12.5232 20.6841 12.4823 20.656 12.444 20.6279C12.4057 20.5998 12.3725 20.5679 12.3444 20.5321C12.3802 20.6113 12.3981 20.7032 12.3981 20.8079V21.5395H11.9997V20.8156C11.9997 20.7058 12.0138 20.6138 12.0418 20.5398C11.9933 20.6036 11.9231 20.6611 11.8312 20.7121L11.1992 21.076L11.0038 20.7351L11.632 20.3712C11.7239 20.3176 11.8146 20.2832 11.904 20.2678C11.8146 20.2576 11.7239 20.2231 11.632 20.1644L11 19.7967L11.1953 19.4558L11.8312 19.8235C11.8746 19.8516 11.9142 19.881 11.9499 19.9116C11.9882 19.9397 12.0214 19.9716 12.0495 20.0074C12.0163 19.9257 11.9997 19.8325 11.9997 19.7278V19H12.3981V19.7239C12.3981 19.775 12.3942 19.8235 12.3866 19.8695C12.3815 19.9154 12.37 19.9589 12.3521 19.9997C12.4108 19.9308 12.4823 19.872 12.5666 19.8235L13.1986 19.4596L13.3939 19.8005L12.7658 20.1644C12.7224 20.1899 12.6789 20.2129 12.6355 20.2334C12.5921 20.2512 12.5487 20.2627 12.5053 20.2678C12.5487 20.2755 12.5921 20.2883 12.6355 20.3061C12.6789 20.3215 12.7224 20.3432 12.7658 20.3712L13.3978 20.739Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                    {accountFields.map((field, index) => (
                      <div key={index} className="flex items-center gap-8">
                        <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t(`${field.label}`)}
                        </Label>
                        <div className="flex-1">
                          {field.type === "select" && (
                            <Select defaultValue={field.value}>
                              <SelectTrigger className="bg-primary-foreground border-border-light shadow-[0px_1px_2px_0px_#0A0D120D] w-full h-[48px] rounder-[4px] text-text-secondary font-lato font-semibold text-sm leading-[125%] tracking-[0]">
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
                              className="bg-primary-foreground border-border-light w-full h-[48px] shadow-[0px_1px_2px_0px_#0A0D120D] rounder-[4px] text-text-secondary font-lato font-semibold text-sm leading-[125%] tracking-[0]"
                              disabled={
                                field.label === "Password" ||
                                field.label === "User Type"
                              }
                            />
                          )}
                          {field.type === "text" && <p>{field.value}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>
          <Card className="w-full bg-background-primary rounded-[16px] p-[16px]">
            <CardContent dir={local === "en" ? "ltr" : "rtl"}>
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
                    <div className="flex w-full items-center justify-between mb-4 ">
                      <h2 className="text-primary-default text-[16px] font-lato font-bold leading-[124%] tracking-[0] ">
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
                    <div className="flex items-center gap-[21.5px] w-full">
                      <div className="flex items-center gap-[32px] w-full">
                        <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Job Title")}
                        </Label>
                        <Input
                          defaultValue="Manager"
                          className="bg-primary-foreground border-border-light w-full h-[48px] shadow-[0px_1px_2px_0px_#0A0D120D] rounder-[4px] text-text-secondary font-lato font-semibold text-sm leading-[125%] tracking-[0]"
                        />
                      </div>
                      <div className="flex items-center gap-[32px] w-full">
                        <Label className="w-[170px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
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
                    <WorkingDaysList />
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>
          <Card className="w-full bg-background-primary rounded-[16px] p-[16px]">
            <CardContent dir={local === "en" ? "ltr" : "rtl"}>
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
                    <div className="flex w-full items-center justify-between mb-4 ">
                      <h2 className="text-primary-default text-[16px] font-lato font-bold leading-[124%] tracking-[0] ">
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
                        className="flex items-center gap-8 w-full"
                      >
                        <Label className="w-[178px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t(`${doc.label}`)}
                        </Label>
                        <FileUpload
                          amount="PDF File , Maximum file size 1MB."
                          size={1 * 1024 * 1024}
                        />

                        <Label className="w-40 font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Effective Date")}
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
        </div>
      </main>
    </div>
  );
};
