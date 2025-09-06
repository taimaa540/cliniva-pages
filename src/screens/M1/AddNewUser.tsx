import { BellIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import TranslateIcon from "@mui/icons-material/Translate";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import WorkingDaysList from "../CommonComponents/workDays";
import ImageUploader from "../CommonComponents/ImageUpload";
import { CountryDropdown } from "react-country-region-selector";
import en from "react-phone-number-input/locale/en.json";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import FileUpload from "../CommonComponents/fillUpLoad";
import { useLanguage } from "../../lib/LanguageContext";
import DateInput from "../CommonComponents/DateInput";
import PhoneInputCustom from "../CommonComponents/PhoneInput";

const tabItems = [
  { value: "account", label: "Account information" },
  { value: "personal", label: "Personal information" },
  { value: "employment", label: "Employment information" },
  { value: "documents", label: "Documents" },
];
const addressFields = [
  { placeholder: "Building number", width: "w-[150px]" },
  { placeholder: "Street Name", width: "w-[165px]" },
  { placeholder: "Region", width: "w-[165px]" },
  { placeholder: "Country", width: "w-[165px]" },
  { placeholder: "Nation", width: "w-[165px]" },
];

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

export const AddNewUser = (): JSX.Element => {
  const shortLabels: Record<string, string> = {};
  Object.keys(en).forEach((key) => {
    shortLabels[key] = key; // يظهر SY, US, EG بدل اسم الدولة
  });
  const [country, setCountry] = useState("");
  const { local, handleLanguageClick } = useLanguage();
  const [showPassword, setShowPassword] = useState(false);
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

          <div className="w-10 h-[17.5px] relative">
            {/* <DarkModeToggle /> */}
          </div>

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

      <Card className="flex flex-col h-full items-start gap-5 p-[20px] relative w-full rounded-2xl overflow-hidden bg-background-tertiary">
        <CardContent className="w-full overflow-y-auto scroll-x-hidden ">
          {/* Account Tab */}
          <Tabs
            dir={`${local === "ar" ? "rtl" : "ltr"}`}
            defaultValue="account"
          >
            <TabsList className="flex items-center w-full h-[50px] py-[8px] px-[12px] bg-primary-foreground rounded-[14px] border border-border-light shadow-lg">
              {tabItems.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex w-[270px] items-center gap-[19px] p-1.5 rounded-lg font-lato font-bold text-[sm] leading-[125%] tracking-[0] text-text-primary"
                >
                  {t(`${tab.label}`)}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent
              value="account"
              className="w-full flex flex-col min-h-screen"
            >
              <div className=" w-full mt-[20px] bg-background-primary p-[16px] rounded-[16px]">
                <form className="w-full ">
                  <div className="flex items-center gap-[32px]">
                    <label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                      {t("User Name")}
                    </label>
                    <Input
                      placeholder={t("Enter User Name")}
                      className="w-[360px] h-[48px] bg-primary-foreground border border-border-light rounded-[4px] placeholder:font-lato placeholder:font-regular placeholder:text-base placeholder:leading-[124%] placeholder:tracking-[0] placeholder:text-text-secondary"
                    />
                  </div>
                  <div className="flex w-full gap-[25px] mt-[24px]">
                    <div className="w-full">
                      <div className="flex items-center gap-[32px]">
                        <label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Password")}
                        </label>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder={t("Enter Password")}
                            className="w-[360px] h-[48px] bg-primary-foreground border border-border-light rounded-[4px] placeholder:font-lato placeholder:font-regular placeholder:text-base placeholder:leading-[124%] placeholder:tracking-[0] placeholder:text-text-secondary"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className={`absolute ${
                              local === "ar" ? "left-3" : "right-3"
                            } top-1/2 transform -translate-y-1/2 text-gray-400`}
                          >
                            {showPassword ? (
                              <EyeOff size={20} />
                            ) : (
                              <Eye size={20} />
                            )}
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center gap-[32px] mt-[24px]">
                        <label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Role")}
                        </label>
                        <Select dir={`${local === "ar" ? "rtl" : "ltr"}`}>
                          <SelectTrigger className="w-[360px] h-[48px] bg-primary-foreground border border-border-light rounded-[4px] ">
                            <SelectValue
                              placeholder={t("Assign Roles to User")}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Admin">{t("Admin")}</SelectItem>
                            <SelectItem value="Doctor">
                              {t("Doctor")}
                            </SelectItem>
                            <SelectItem value="Staf">{t("Staf")}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center gap-[32px] mt-[24px]">
                        <label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Medical Complex")}
                        </label>
                        <Select dir={`${local === "ar" ? "rtl" : "ltr"}`}>
                          <SelectTrigger className="w-[360px] h-[48px] bg-primary-foreground border border-border-light rounded-[4px]">
                            <SelectValue
                              placeholder={t("Select Medical Complex")}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="option1">
                              {t("option")}1
                            </SelectItem>
                            <SelectItem value="option2">
                              {t("option")}2
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="flex items-center gap-[32px]">
                        <label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Confirm Password")}
                        </label>
                        <div className="relative ">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder={t("Confirm Password")}
                            className="w-[360px] h-[48px] bg-primary-foreground border border-border-light rounded-[4px] placeholder:font-lato placeholder:font-regular placeholder:text-base placeholder:leading-[124%] placeholder:tracking-[0] placeholder:text-text-secondary "
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className={`absolute ${
                              local === "ar" ? "left-3" : "right-3"
                            } top-1/2 transform -translate-y-1/2 text-gray-400`}
                          >
                            {showPassword ? (
                              <EyeOff size={20} />
                            ) : (
                              <Eye size={20} />
                            )}
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center gap-[32px] mt-[24px]">
                        <label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("User Type")}
                        </label>
                        <Select dir={`${local === "ar" ? "rtl" : "ltr"}`}>
                          <SelectTrigger className="w-[360px] h-[48px] bg-primary-foreground border border-border-light rounded-[4px]">
                            <SelectValue placeholder={t("Select User Type")} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Doctor">
                              {t("Doctor")}
                            </SelectItem>
                            <SelectItem value="Staf">{t("Staf")}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center gap-[32px] mt-[24px]">
                        <label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Clinics")}
                        </label>
                        <Select dir={`${local === "ar" ? "rtl" : "ltr"}`}>
                          <SelectTrigger className="w-[360px] h-[48px] bg-primary-foreground border border-border-light rounded-[4px]">
                            <SelectValue placeholder={t("Select Clinic")} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="option1">
                              {t("option")}1
                            </SelectItem>
                            <SelectItem value="option2">
                              {t("option")}2
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div
                dir="ltr"
                className={`mt-auto flex ${
                  local === "ar" ? "justify-start" : "justify-end"
                } gap-[12px] w-full h-[40px]`}
              >
                <button className="w-[200px] h-[40px] rounded-[50px] border border-[#D5D7DA] shadow-[0px_1px_2px_0px_#0A0D120D] bg-[#FFFFFF] font-inter font-semibold text-base leading-[16px] tracking-[0] text-text-primary">
                  {t("Cancel")}
                </button>

                <button className="relative w-[200px] h-[40px] rounded-[50px] border border-secondary-dark shadow-[0px_1px_2px_0px_#0A0D120D] bg-secondary-dark font-inter font-semibold text-base leading-[16px] tracking-[0] text-[#FFFFFF]">
                  {t("Next")}
                  <svg
                    className="absolute top-[11px] right-[55px]"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.18306 15.4419C7.93898 15.1979 7.93898 14.8021 8.18306 14.5581L12.7411 10L8.18306 5.44194C7.93898 5.19786 7.93898 4.80214 8.18306 4.55806C8.42714 4.31398 8.82286 4.31398 9.06694 4.55806L14.0669 9.55806C14.311 9.80214 14.311 10.1979 14.0669 10.4419L9.06694 15.4419C8.82286 15.686 8.42714 15.686 8.18306 15.4419Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </TabsContent>
            <TabsContent
              value="personal"
              className="w-full flex flex-col min-h-screen gap-[16px] mt-[20px]"
            >
              <Card className="w-full bg-background-primary rounded-[16px] p-[16px] ">
                <CardContent dir={local === "en" ? "ltr" : "rtl"}>
                  <div className="flex flex-col gap-[16px]">
                    <h3 className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-primary-default">
                      {t("Profile & Identity Info")}
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
                          placeholder={t("Enter Full Name")}
                          className="flex-1 h-[48px] bg-primary-foreground border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary"
                        />
                      </div>
                      <div className="flex items-center gap-[32px] w-full">
                        <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Gender")}
                        </Label>
                        <input className="w-5 h-5" type="radio" name="Gender" />
                        <label className="font-lato font-regular text-sm leading-[154%] tracking-[0] text-text-primary">
                          {t("Male")}
                        </label>
                        <input className="w-5 h-5" type="radio" name="Gender" />
                        <label className="font-lato font-regular text-sm leading-[154%] tracking-[0] text-text-primary">
                          {t("Female")}
                        </label>
                      </div>
                      <div className="flex items-center gap-[32px] w-full">
                        <Label className="w-40 font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-gray-700 text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
                          {t("Date of Birth")} *
                        </Label>
                        <DateInput lang={local} />
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
                          placeholder={t("Enter Card Number")}
                          className=" flex-1 h-[48px] bg-primary-foreground border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary"
                        />
                      </div>
                      <div className="flex items-center gap-[32px] w-full">
                        <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Marital Status")}
                        </Label>
                        <Select defaultValue={t("Select Marital Status")}>
                          <SelectTrigger className="flex-1 h-[48px] bg-primary-foreground border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Married">
                              {t("Married")}
                            </SelectItem>
                            <SelectItem value="Single">
                              {t("Single")}
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center gap-[32px] w-full">
                        <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Number of children")}
                        </Label>
                        <Input
                          placeholder={t("Enter Number of children")}
                          className="flex-1 h-[48px] bg-primary-foreground border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="w-full bg-background-primary rounded-[16px] p-[16px]">
                <CardContent dir={local === "en" ? "ltr" : "rtl"}>
                  <h3 className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-primary-default">
                    {t("Contact Info")}
                  </h3>
                  <div className="flex flex-col gap-[16px]">
                    <div className="grid grid-cols-2 gap-[22px] w-full">
                      <div className="flex items-center gap-[32px] w-full">
                        <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Phone Number")}
                        </Label>
                        <div className="flex-1 min-w-0">
                          <PhoneInputCustom />
                        </div>
                      </div>
                      <div className="flex items-center gap-[32px] w-full">
                        <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Email")}
                        </Label>
                        <Input
                          placeholder={t("Enter Email")}
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
                          placeholder={t(`${field.placeholder}`)}
                          key={index}
                          className={`${field.width} flex-1 h-[48px] bg-primary-foreground border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary`}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="w-full bg-background-primary rounded-[16px] p-[16px]">
                <CardContent dir={local === "en" ? "ltr" : "rtl"}>
                  <h3 className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-primary-default">
                    {t("Emergency Contact Info")}
                  </h3>
                  <div className="flex flex-col gap-[16px]">
                    <div className="grid grid-cols-2 gap-[22px]">
                      <div className="flex items-center gap-[32px] w-full">
                        <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Emergency Contact")}
                        </Label>
                        <Input
                          placeholder={t("Enter Name")}
                          className="flex-1 h-[48px] bg-primary-foreground border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary"
                        />
                      </div>
                      <div className="flex items-center gap-[32px] w-full">
                        <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Relationship")}
                        </Label>
                        <Input
                          placeholder={t("Enter Relationship")}
                          className="flex-1 h-[48px] bg-primary-foreground border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-[22px]">
                      <div className="flex items-center gap-[32px] w-full">
                        <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Emergency Number")}
                        </Label>
                        <div className="flex-1 min-w-0">
                          <PhoneInputCustom />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div
                dir="ltr"
                className={`mt-auto flex ${
                  local === "ar" ? "justify-start" : "justify-end"
                } gap-[12px] w-full h-[40px]`}
              >
                <button className="relative w-[200px] h-[40px] rounded-[50px] border border-[#D5D7DA] shadow-[0px_1px_2px_0px_#0A0D120D] bg-[#FFFFFF] font-inter font-semibold text-base leading-[16px] tracking-[0] text-text-primary">
                  <svg
                    className="absolute top-[11px] left-[40px]"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.3169 4.55806C12.561 4.80214 12.561 5.19786 12.3169 5.44194L7.75888 10L12.3169 14.5581C12.561 14.8021 12.561 15.1979 12.3169 15.4419C12.0729 15.686 11.6771 15.686 11.4331 15.4419L6.43306 10.4419C6.18898 10.1979 6.18898 9.80214 6.43306 9.55806L11.4331 4.55806C11.6771 4.31398 12.0729 4.31398 12.3169 4.55806Z"
                      fill="currentColor"
                    />
                  </svg>

                  {t("Previous")}
                </button>

                <button className="relative w-[200px] h-[40px] rounded-[50px] border border-secondary-dark shadow-[0px_1px_2px_0px_#0A0D120D] bg-secondary-dark font-inter font-semibold text-base leading-[16px] tracking-[0] text-[#FFFFFF]">
                  {t("Next")}
                  <svg
                    className="absolute top-[11px] right-[55px]"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.18306 15.4419C7.93898 15.1979 7.93898 14.8021 8.18306 14.5581L12.7411 10L8.18306 5.44194C7.93898 5.19786 7.93898 4.80214 8.18306 4.55806C8.42714 4.31398 8.82286 4.31398 9.06694 4.55806L14.0669 9.55806C14.311 9.80214 14.311 10.1979 14.0669 10.4419L9.06694 15.4419C8.82286 15.686 8.42714 15.686 8.18306 15.4419Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </TabsContent>

            <TabsContent
              value="employment"
              className="w-full flex flex-col min-h-screen gap-[16px] mt-[20px]"
            >
              <Card className="w-full bg-background-primary rounded-[16px] p-[16px]">
                <CardContent dir={local === "en" ? "ltr" : "rtl"}>
                  <h2 className="text-primary-default text-[16px] font-lato font-bold leading-[124%] tracking-[0] ">
                    {t("Job Details")}
                  </h2>

                  <div className="flex flex-col items-start gap-4 mt-[20px] relative">
                    <div className="flex items-center gap-[21.5px] w-full">
                      <div className="flex items-center gap-[32px] w-full">
                        <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Job Title")}
                        </Label>
                        <Input
                          placeholder={t("Enter Job Title")}
                          className="bg-primary-foreground border-border-light w-full h-[48px] shadow-[0px_1px_2px_0px_#0A0D120D] rounder-[4px] text-text-secondary font-lato font-semibold text-sm leading-[125%] tracking-[0]"
                        />
                      </div>
                      <div className="flex items-center gap-[32px] w-full">
                        <Label className="w-[170px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Date of Hire")}
                        </Label>
                        <DateInput lang={local} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="w-full bg-background-primary rounded-[16px] p-[16px]">
                <CardContent dir={local === "en" ? "ltr" : "rtl"}>
                  <WorkingDaysList />
                </CardContent>
              </Card>
              <div
                dir="ltr"
                className={`mt-auto flex ${
                  local === "ar" ? "justify-start" : "justify-end"
                } gap-[12px] w-full h-[40px]`}
              >
                <button className="relative w-[200px] h-[40px] rounded-[50px] border border-[#D5D7DA] shadow-[0px_1px_2px_0px_#0A0D120D] bg-[#FFFFFF] font-inter font-semibold text-base leading-[16px] tracking-[0] text-text-primary">
                  <svg
                    className="absolute top-[11px] left-[40px]"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.3169 4.55806C12.561 4.80214 12.561 5.19786 12.3169 5.44194L7.75888 10L12.3169 14.5581C12.561 14.8021 12.561 15.1979 12.3169 15.4419C12.0729 15.686 11.6771 15.686 11.4331 15.4419L6.43306 10.4419C6.18898 10.1979 6.18898 9.80214 6.43306 9.55806L11.4331 4.55806C11.6771 4.31398 12.0729 4.31398 12.3169 4.55806Z"
                      fill="currentColor"
                    />
                  </svg>

                  {t("Previous")}
                </button>

                <button className="relative w-[200px] h-[40px] rounded-[50px] border border-secondary-dark shadow-[0px_1px_2px_0px_#0A0D120D] bg-secondary-dark font-inter font-semibold text-base leading-[16px] tracking-[0] text-[#FFFFFF]">
                  {t("Next")}
                  <svg
                    className="absolute top-[11px] right-[55px]"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.18306 15.4419C7.93898 15.1979 7.93898 14.8021 8.18306 14.5581L12.7411 10L8.18306 5.44194C7.93898 5.19786 7.93898 4.80214 8.18306 4.55806C8.42714 4.31398 8.82286 4.31398 9.06694 4.55806L14.0669 9.55806C14.311 9.80214 14.311 10.1979 14.0669 10.4419L9.06694 15.4419C8.82286 15.686 8.42714 15.686 8.18306 15.4419Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </TabsContent>
            <TabsContent value="documents">
              <Card className="w-full bg-background-primary rounded-[16px] p-[16px]">
                <CardContent dir={local === "en" ? "ltr" : "rtl"}>
                  <h2 className="text-primary-default text-[16px] font-lato font-bold leading-[124%] tracking-[0] ">
                    {t("Documents")}
                  </h2>

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

                        {doc.effectiveDate && <DateInput lang={local} />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};
