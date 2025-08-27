import { BellIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import DarkModeToggle from "../../../ElementUsersNoDataTo/DarkMode";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import TranslateIcon from "@mui/icons-material/Translate";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";
import WorkDays from "../../../workDays";
import FileUpload from "../../../fillUpLoad";

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

const formFields = [
  {
    id: "username",
    label: "User Name",
    placeholder: "Enter User Name",
    type: "input",
    inputType: "username",
  },
  {
    id: "password",
    label: "Password",
    placeholder: "Enter Password",
    type: "input",
    inputType: "password",
  },
  {
    id: "confirmPassword",
    label: "Confirm Password",
    placeholder: "Enter Password",
    type: "input",
    inputType: "password",
  },
  {
    id: "role",
    label: "Role",
    placeholder: "Assign Roles to User",
    type: "select",
    inputType: "Role",
  },
  {
    id: "userType",
    label: "User Type",
    placeholder: "Select User Type",
    type: "select",
    inputType: "UserType",
  },
  {
    id: "medicalComplex",
    label: "Medical Complex",
    placeholder: "Select Medical Complex",
    type: "select",
    inputType: "complex",
  },
  {
    id: "clinics",
    label: "Clinic",
    placeholder: "Select Clinic",
    type: "select",
    inputType: "clinics",
  },
];

const documentFields = [
  {
    label: "Employment Contract",
  },
  {
    label: "Certifications",
  },
  {
    label: "Work Permit",
  },
  {
    label: "CV / Resume",
  },
];

interface NoDataSectionProps {
  local: string;
  dark: boolean;
  handelDarkClick: () => void;
  handleLanguageClick: () => void;
}

export const UserDetailsSection = ({
  handleLanguageClick,
  local,
  dark,
  handelDarkClick,
}: NoDataSectionProps): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);
  return (
    <div
      className={`flex flex-col w-full overflow-hidden h-full items-start gap-4  py-4  self-stretch relative ${
        local === "ar" ? "pr-0 pl-5" : "pl-0 pr-5"
      
      } ${dark ? "bg-[#030711]" : ""}`}
    >
      
      <header className="flex h-[50px] justify-between pl-[4px] pr-0 py-0 self-stretch w-full items-center">
        <div className="flex flex-col w-[340px] items-start gap-1.5 px-0 py-0.5">
          <h1
            className={`self-stretch mt-[-1.00px] font-h5-22px-bold font-[number:var(--h5-22px-bold-font-weight)] ${
              dark ? "text-white" : "text-[#2a2b2a]"
            } text-on-surface-primary text-[length:var(--h5-22px-bold-font-size)] tracking-[var(--h5-22px-bold-letter-spacing)] leading-[var(--h5-22px-bold-line-height)] [font-style:var(--h5-22px-bold-font-style)]`}
          >
            {t("Users")}
          </h1>
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
                } font-title-16px-bold font-[number:var(--title-16px-bold-font-weight)] text-on-surface-primary text-[length:var(--title-16px-bold-font-size)] tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] whitespace-nowrap [font-style:var(--title-16px-bold-font-style)]`}
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

      <Card
        className={`flex flex-col w-[1197px] h-[866px] items-start gap-5 p-5 mt-[10px] relative self-stretch w-[1197px] flex-[0_0_auto] ${
          dark ? "bg-[#272932] border-[white]" : "bg-bg"
        } rounded-2xl overflow-hidden`}
      >
        <CardContent className="p-0 w-full overflow-y-auto scroll-x-hidden h-full">
          <div className="flex w-full h-[50px] justify-between pl-1 pr-0 py-0 items-center relative">
        
            <div className="flex flex-col w-[340px] items-start gap-1.5 px-0 py-0.5 relative mt-[-1.00px] mb-[-1.00px]">
              <Button
                variant="ghost"
                className="inline-flex items-center gap-1.5 relative flex-[0_0_auto] p-0 h-auto"
              >
                <div className="relative w-4 h-4">
                  <img
                    className={`absolute w-3 h-2.5 top-[3px] left-0.5 ${
                      local === "ar" ? "rotate-[180deg]" : ""
                    } `}
                    alt="Vector"
                    src="/Vector.svg"
                  />
                </div>

                <div className="relative w-fit mt-[-1.00px] font-title-12px-regular font-[number:var(--title-12px-regular-font-weight)] text-on-surface-secondary text-[length:var(--title-12px-regular-font-size)] tracking-[var(--title-12px-regular-letter-spacing)] leading-[var(--title-12px-regular-line-height)] whitespace-nowrap [font-style:var(--title-12px-regular-font-style)]">
                  {t("Back to Users")}
                </div>
              </Button>

              <h2
                className={`relative self-stretch font-h5-22px-bold ${
                  dark ? "text-white" : "text-[#2a2b2a]"
                } font-[number:var(--h5-22px-bold-font-weight)] text-on-surface-primary text-[length:var(--h5-22px-bold-font-size)] tracking-[var(--h5-22px-bold-letter-spacing)] leading-[var(--h5-22px-bold-line-height)] [font-style:var(--h5-22px-bold-font-style)]`}
              >
                {t("Add New User")}
              </h2>
            </div>
          </div>

          <div className="w-full h-[866px] ">
            {/* Account Tab */}
            <Tabs
              dir={`${local === "ar" ? "rtl" : "ltr"}`}
              defaultValue="account"
            >
              <TabsList className="flex items-center w-[1160px] mt-[10px] gap-2 relative top-3 -left-px bg-white rounded-[14px] border border-solid border-[#d1d1d1] shadow-[0px_8px_8px_-4px_#0a0d120a] h-auto">
                {tabItems.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className={`flex w-[278px] items-center gap-1.5 p-1.5 relative ${
                      dark
                        ? "data-[state=active]:bg-[#2d3732]"
                        : "data-[state=active]:bg-secondary-light"
                    } rounded-lg`}
                  >
                    <div
                      className={`relative mt-[-1.00px]  font-text-text-bold-text-sm-bold font-[number:var(--text-text-bold-text-sm-bold-font-weight)] ${
                        dark
                          ? "data-[state=active]:text-[white]"
                          : "data-[state=active]:text-[red]"
                      }  text-[length:var(--text-text-bold-text-sm-bold-font-size)] tracking-[var(--text-text-bold-text-sm-bold-letter-spacing)] leading-[var(--text-text-bold-text-sm-bold-line-height)] whitespace-nowrap [font-style:var(--text-text-bold-text-sm-bold-font-style)]`}
                    >
                      {t(`${tab.label}`)}
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent
                value="account"
                className="relative self-stretch w-full h-[576px] mt-[50px]"
              >
                <div className="flex flex-col w-full h-[576px] items-start gap-4 relative left-2.5">
                  {formFields.map((field) => (
                    <div
                      key={field.id}
                      className="flex items-center justify-center text-center gap-8 relative self-stretch w-full flex-[0_0_auto]"
                    >
                      <Label
                        className={`relative w-40 h-3.5 mt-[-1.00px] ${
                          dark ? "text-white" : "text-[#2a2b2a]"
                        } font-btn-14px-medium text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] whitespace-nowrap`}
                      >
                        {t(`${field.label}`)}
                      </Label>

                      <div className="flex-col items-start gap-1.5 flex-1 grow flex relative">
                        <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                          {field.type === "input" &&
                            field.inputType !== "password" && (
                              <Input
                                placeholder={field.placeholder}
                                className="flex items-center gap-2 px-3.5 py-2.5 w-full bg-base-white rounded-lg border border-[#d5d6d9] shadow-xs text-gray-500"
                              />
                            )}

                          {field.type === "input" &&
                            field.inputType === "password" && (
                              <div className="relative w-full">
                                <Input
                                  type={showPassword ? "text" : "password"}
                                  placeholder={field.placeholder}
                                  className="flex items-center gap-2 px-3.5 py-2.5 w-full bg-base-white rounded-lg border border-[#d5d6d9] shadow-xs text-gray-500 pr-10"
                                />
                                <button
                                  type="button"
                                  onClick={() => setShowPassword(!showPassword)}
                                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                >
                                  {showPassword ? (
                                    <EyeOff size={20} />
                                  ) : (
                                    <Eye size={20} />
                                  )}
                                </button>
                              </div>
                            )}

                          {field.type === "select" && (
                            <Select>
                              <SelectTrigger className="bg-white flex items-center gap-2 px-3.5 py-2.5 w-full rounded-lg border border-[#d5d6d9] shadow-xs text-gray-500">
                                <SelectValue
                                  placeholder={field.placeholder}
                                  className="flex items-center gap-2 px-3.5 py-2.5 w-full bg-white rounded-lg border border-[#d5d6d9] shadow-xs text-gray-500"
                                />
                              </SelectTrigger>

                              <SelectContent>
                                {field.inputType === "Role" && (
                                  <>
                                    <SelectItem value="Admin">Admin</SelectItem>
                                    <SelectItem value="Doctor">
                                      Doctor
                                    </SelectItem>
                                    <SelectItem value="Staf">Staf</SelectItem>
                                  </>
                                )}

                                {field.inputType === "UserType" && (
                                  <>
                                    <SelectItem value="Doctor">
                                      Doctor
                                    </SelectItem>
                                    <SelectItem value="Staf">Staf</SelectItem>
                                  </>
                                )}

                                {field.inputType !== "Role" &&
                                  field.inputType !== "UserType" && (
                                    <>
                                      <SelectItem value="option1">
                                        option1
                                      </SelectItem>
                                      <SelectItem value="option2">
                                        option2
                                      </SelectItem>
                                    </>
                                  )}
                              </SelectContent>
                            </Select>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  dir={`${local === "ar" ? "ltr" : "rtl"}`}
                 className={`relative self-stretch w-full h-[58px] top-[40px] border border-red-500 ${
                    local === "ar" ? "right-[450px]" : "right-[550px]"
                  } `}
                >
                  <div
                    dir="ltr"
                    className="w-[663px] h-10 items-start gap-3 pt-0 pb-6 px-6 top-[0px] left-[494px] flex relative"
                  >
                    <Button
                      variant="outline"
                      className="flex items-center justify-center gap-2 px-[18px] py-2.5 relative flex-1 grow mb-[-28.00px] bg-base-white rounded-[50px] overflow-hidden border border-solid border-[#d5d6d9] shadow-shadow-xs h-auto"
                    >
                      <div
                        className={`relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] ${
                          dark ? "text-white" : "text-[#2a2b2a]"
                        } text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]`}
                      >
                        {t("Cancel")}
                      </div>
                    </Button>

                    <Button className="flex hover:bg-blue-500 items-center justify-center gap-2 px-[18px] py-2.5 relative flex-1 grow mb-[-28.00px] bg-secondary-dark rounded-[50px] overflow-hidden border border-solid border-[#00b48d] shadow-shadow-xs h-auto">
                      <div className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-base-white text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                        {t("Next")}
                      </div>

                      <img
                        className="absolute w-[5px] h-[9px] top-[15px] left-[173px]"
                        alt="Vector stroke"
                        src="/Vector (Stroke).svg"
                      />
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="personal"
                className="relative self-stretch w-full h-[576px] mt-[50px]"
              >
                <div className="relative self-stretch w-full h-[575px]">
                   <form className="flex flex-col h-[676px] w-full text-center items-start gap-4 relative left-2.5">
                    <div className="flex items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
                      <Label
                        className={`relative w-40 h-3.5 mt-[-1.00px] font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] ${
                          dark ? "text-white" : "text-[#2a2b2a]"
                        } text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] whitespace-nowrap [font-style:var(--btn-14px-medium-font-style)]`}
                      >
                        {t("Full Name")}
                      </Label>

                      <div className="flex flex-col items-start gap-1.5 relative flex-1 grow">
                        <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                          <Input
                            placeholder="Enter User Name"
                            className="flex items-center gap-2 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-base-white rounded-lg overflow-hidden border border-solid border-[#d5d6d9] shadow-shadow-xs font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-gray-500 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] [font-style:var(--title-16px-regular-font-style)]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
                      <Label
                        className={`relative w-40 mt-[-1.00px] font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] ${
                          dark ? "text-white" : "text-[#2a2b2a]"
                        } text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]`}
                      >
                        {t("Gender")}
                      </Label>

                      <div className="flex flex-col w-[370.5px] items-start gap-1.5 relative">
                        <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                          <Select>
                            <SelectTrigger className="bg-[#FFFFFF] flex items-center gap-2 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto]  rounded-lg overflow-hidden border border-solid border-[#d5d6d9] shadow-shadow-xs font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-gray-500 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] [font-style:var(--title-16px-regular-font-style)]">
                              <SelectValue
                                placeholder="Select Gender"
                                className="font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-gray-500 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] [font-style:var(--title-16px-regular-font-style)]"
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Label
                        className={`relative w-40 mt-[-1.00px] font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] ${
                          dark ? "text-white" : "text-[#2a2b2a]"
                        } text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]`}
                      >
                        {t("Date of Birth")}
                      </Label>

                      <div className="flex flex-col items-start gap-1.5 relative flex-1 grow">
                        <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                          <Input
                            type="date"
                            placeholder="Select Date"
                            className="block px-3.5 py-2.5 relative self-stretch w-full bg-base-white rounded-lg overflow-hidden border border-solid border-[#d5d6d9] shadow-shadow-xs font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-gray-500 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] [font-style:var(--title-16px-regular-font-style)]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
                      <Label
                        className={`relative w-40 mt-[-1.00px] font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] ${
                          dark ? "text-white" : "text-[#2a2b2a]"
                        } text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]`}
                      >
                        {t("Card Number")}
                      </Label>

                      <div className="flex flex-col items-start gap-1.5 relative flex-1 grow">
                        <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                          <Input
                            placeholder="Enter Card Number"
                            className="flex items-center justify-center gap-2 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-base-white rounded-lg overflow-hidden border border-solid border-[#d5d6d9] shadow-shadow-xs font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-gray-500 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] [font-style:var(--title-16px-regular-font-style)]"
                          />
                        </div>
                      </div>

                      <Label
                        className={`relative w-40 mt-[-1.00px] font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] ${
                          dark ? "text-white" : "text-[#2a2b2a]"
                        } text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]`}
                      >
                        {t("Nationality")}
                      </Label>

                      <div className="flex flex-col items-start gap-1.5 relative flex-1 grow">
                        <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                          <Select>
                            <SelectTrigger className="bg-[#FFFFFF] flex items-center gap-2 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto]  rounded-lg overflow-hidden border border-solid border-[#d5d6d9] shadow-shadow-xs font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-gray-500 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] [font-style:var(--title-16px-regular-font-style)]">
                              <SelectValue
                                placeholder="Select Nationality"
                                className="font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-gray-500 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] [font-style:var(--title-16px-regular-font-style)]"
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="us">United States</SelectItem>
                              <SelectItem value="uk">United Kingdom</SelectItem>
                              <SelectItem value="ca">Canada</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
                      <Label
                        className={`relative w-40 mt-[-1.00px] font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] ${
                          dark ? "text-white" : "text-[#2a2b2a]"
                        } text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]`}
                      >
                        {t("Marital Status")}
                      </Label>

                      <div className="flex flex-col items-start gap-1.5 relative flex-1 grow">
                        <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                          <Select>
                            <SelectTrigger className="bg-[#FFFFFF] flex items-center gap-2 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto]  rounded-lg overflow-hidden border border-solid border-[#d5d6d9] shadow-shadow-xs font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-gray-500 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] [font-style:var(--title-16px-regular-font-style)]">
                              <SelectValue
                                placeholder="Select Marital Status"
                                className="font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-gray-500 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] [font-style:var(--title-16px-regular-font-style)]"
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="single">Single</SelectItem>
                              <SelectItem value="married">Married</SelectItem>
                              <SelectItem value="divorced">Divorced</SelectItem>
                              <SelectItem value="widowed">Widowed</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Label
                        className={`relative w-40 mt-[-1.00px] font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] ${
                          dark ? "text-white" : "text-[#2a2b2a]"
                        } text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]`}
                      >
                        {t("Number of children")}
                      </Label>

                      <div className="flex flex-col items-start gap-1.5 relative flex-1 grow">
                        <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                          <Input
                            placeholder="Enter Number of children"
                            className="flex items-center justify-center gap-2 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-base-white rounded-lg overflow-hidden border border-solid border-[#d5d6d9] shadow-shadow-xs font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-gray-500 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] [font-style:var(--title-16px-regular-font-style)]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
                      <Label
                        className={`relative w-40 mt-[-1.00px] font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] ${
                          dark ? "text-white" : "text-[#2a2b2a]"
                        } text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]`}
                      >
                        {t("Phone Number")}
                      </Label>

                      <div className="flex flex-col items-start gap-1.5 relative flex-1 grow">
                        <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                          <div className="flex items-start relative self-stretch w-full flex-[0_0_auto] bg-base-white rounded-lg border border-solid border-[#d5d6d9] shadow-shadow-xs">
                            <div className="inline-flex items-center pl-3.5 pr-3 py-2.5 relative flex-[0_0_auto] bg-[#d5d7da] rounded-[8px_0px_0px_8px]">
                              <div className="relative w-fit mt-[-1.00px] font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-on-surface-primary text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] whitespace-nowrap [font-style:var(--text-md-regular-font-style)]">
                                +XXX
                              </div>
                            </div>

                            <Input
                              placeholder="XX XXX XXXX"
                              className="flex h-[44px] items-center gap-2 px-3.5 py-2.5 relative flex-1 self-stretch grow bg-base-white rounded-[0px_8px_8px_0px] overflow-hidden border border-solid border-[#d5d6d9] font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-on-surface-primary text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]"
                            />
                          </div>
                        </div>
                      </div>

                      <Label
                        className={`relative w-40 mt-[-1.00px] font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] ${
                          dark ? "text-white" : "text-[#2a2b2a]"
                        } text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]`}
                      >
                        {t("Phone Number")}
                      </Label>

                      <div className="flex flex-col items-start gap-1.5 relative flex-1 grow">
                        <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                          <div className="flex items-start relative self-stretch w-full flex-[0_0_auto] bg-base-white rounded-lg border border-solid border-[#d5d6d9] shadow-shadow-xs">
                            <div className="inline-flex items-center pl-3.5 pr-3 py-2.5 relative flex-[0_0_auto] bg-[#d5d7da] rounded-[8px_0px_0px_8px]">
                              <div
                                className="relative w-fit mt-[-1.00px] font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-on-surface-primary text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] whitespace-nowrap [font-style:var(--
text-md-regular-font-style)]"
                              >
                                +XXX
                              </div>
                            </div>

                            <Input
                              placeholder="XX XXX XXXX"
                              className="flex h-[44px] items-center gap-2 px-3.5 py-2.5 relative flex-1 self-stretch grow bg-base-white rounded-[0px_8px_8px_0px] overflow-hidden border border-solid border-[#d5d6d9] font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-on-surface-primary text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
                      <Label
                        className={`relative w-40 mt-[-1.00px] font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] ${
                          dark ? "text-white" : "text-[#2a2b2a]"
                        } text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]`}
                      >
                        {t("Email")}
                      </Label>

                      <div className="flex flex-col items-start gap-1.5 relative flex-1 grow">
                        <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                          <Input
                            placeholder="Enter Email"
                            className="flex items-center justify-center gap-2 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-base-white rounded-lg overflow-hidden border border-solid border-[#d5d6d9] shadow-shadow-xs font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-gray-500 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] [font-style:var(--title-16px-regular-font-style)]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                      <Label
                        className={`relative w-40 mt-[-1.00px] font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] ${
                          dark ? "text-white" : "text-[#2a2b2a]"
                        } text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]`}
                      >
                        {t("Address")}
                      </Label>

                      {addressFields.map((field, index) => (
                        <div
                          key={index}
                          className={`flex ${field.width} h-10 items-center justify-center gap-1.5 relative`}
                        >
                          <div className="flex flex-col items-start gap-1.5 relative flex-1 grow">
                            <Input
                              placeholder={field.placeholder}
                              className="flex items-center justify-center gap-2 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-base-white rounded-lg overflow-hidden border border-solid border-[#d5d6d9] shadow-shadow-xs font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-gray-500 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] [font-style:var(--title-16px-regular-font-style)]"
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
                      <Label
                        className={`relative w-40 mt-[-1.00px] font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] ${
                          dark ? "text-white" : "text-[#2a2b2a]"
                        } text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]`}
                      >
                        {t("Emergency Contact")}
                      </Label>

                      <div className="flex flex-col items-start gap-1.5 relative flex-1 grow">
                        <div className="flex  flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                          <Input
                            placeholder="Full Name"
                            className="flex items-center justify-center gap-2 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-base-white rounded-lg overflow-hidden border border-solid border-[#d5d6d9] shadow-shadow-xs font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-gray-500 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] [font-style:var(--title-16px-regular-font-style)]"
                          />
                        </div>
                      </div>

                      <Label
                        className={`relative w-fit mt-[-1.00px] font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] ${
                          dark ? "text-white" : "text-[#2a2b2a]"
                        } text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] whitespace-nowrap [font-style:var(--btn-14px-medium-font-style)]`}
                      >
                        {t("Relationship")}
                      </Label>

                      <div className="flex flex-col items-start gap-1.5 relative flex-1 grow">
                        <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                          <Input
                            placeholder="Relationship"
                            className="flex items-center justify-center gap-2 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-base-white rounded-lg overflow-hidden border border-solid border-[#d5d6d9] shadow-shadow-xs font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-gray-500 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] [font-style:var(--title-16px-regular-font-style)]"
                          />
                        </div>
                      </div>

                      <Label
                        className={`relative w-fit mt-[-1.00px] font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] ${
                          dark ? "text-white" : "text-[#2a2b2a]"
                        } text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] whitespace-nowrap [font-style:var(--btn-14px-medium-font-style)]`}
                      >
                        {t("Emergency Number")}
                      </Label>

                      <div className="flex items-start relative flex-1 grow bg-base-white rounded-lg border border-solid border-[#d5d6d9] shadow-shadow-xs">
                        <div className="inline-flex items-center pl-3.5 pr-3 py-2.5 relative flex-[0_0_auto] bg-[#d5d7da] rounded-[8px_0px_0px_8px]">
                          <div className="relative w-fit mt-[-1.00px] font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-on-surface-primary text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] whitespace-nowrap [font-style:var(--text-md-regular-font-style)]">
                            +XXX
                          </div>
                        </div>

                        <Input
                          placeholder="XX XXX XXXX"
                          className="flex h-[44px] items-center gap-2 px-3.5 py-2.5 relative flex-1 self-stretch grow bg-base-white rounded-[0px_8px_8px_0px] overflow-hidden border border-solid border-[#d5d6d9] font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-on-surface-primary text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
                      <Label
                        className={`relative w-40 mt-[-1.00px] [font-family:'Lato',Helvetica] font-medium ${
                          dark ? "text-white" : "text-[#2a2b2a]"
                        } text-base tracking-[0] leading-4`}
                      >
                        {t("Profile Picture")}
                      </Label>
                      <FileUpload
                        amount="SVG, PNG, JPG or GIF , Maximum file size 2MB"
                        size={2 * 1024 * 1024}
                      />
                    </div>
                  </form>
                </div>
                <div
                  dir={`${local === "ar" ? "ltr" : "rtl"}`}
                   className={`relative self-stretch w-full h-[58px] top-[40px] border border-red-500 ${
                    local === "ar" ? "right-[450px]" : "right-[550px]"
                  } `}
                >
                  <div
                    dir="ltr"
                    className="w-[663px] h-10 items-start gap-3 pt-0 pb-6 px-6 top-[0px] left-[494px] flex relative"
                  >
                    <Button
                      variant="outline"
                      className="flex items-center justify-center gap-2 px-[18px] py-2.5 relative flex-1 grow mb-[-28.00px] bg-base-white rounded-[50px] overflow-hidden border border-solid border-[#d5d6d9] shadow-shadow-xs h-auto"
                    >
                      <div
                        className={`relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] ${
                          dark ? "text-white" : "text-[#2a2b2a]"
                        } text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]`}
                      >
                        {t("Previous")}
                      </div>
                      <img
                        className="absolute top-[10px] left-[100px] "
                        alt="Vector stroke"
                        src="/CaretRight.svg"
                      />
                    </Button>

                    <Button className="flex hover:bg-blue-500 items-center justify-center gap-2 px-[18px] py-2.5 relative flex-1 grow mb-[-28.00px] bg-secondary-dark rounded-[50px] overflow-hidden border border-solid border-[#00b48d] shadow-shadow-xs h-auto">
                      <div className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-base-white text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                        {t("Next")}
                      </div>

                      <img
                        className="absolute w-[5px] h-[9px] top-[15px] left-[173px]"
                        alt="Vector stroke"
                        src="/Vector (Stroke).svg"
                      />
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="employment"
                className="relative self-stretch w-full h-[576px] mt-[50px]"
              >
                <div className="self-stretch w-[1137px] h-[578px]">
                  <div className="flex flex-col w-full h-[578px] items-start gap-4 left-2.5">
                    <div className="gap-8 self-stretch w-full flex-[0_0_auto] flex items-start">
                      <label
                        className={`w-40 h-3.5 mt-[-1.00px] font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] ${
                          dark ? "text-white" : "text-[#2a2b2a]"
                        } text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] whitespace-nowrap [font-style:var(--btn-14px-medium-font-style)]`}
                      >
                        {t("Job Title")}
                      </label>
                      <div className="flex flex-col items-start gap-1.5 flex-1 grow">
                        <Input
                          placeholder="Enter Job Title"
                          className="flex items-center gap-2 px-3.5 py-2.5 self-stretch w-full flex-[0_0_auto] bg-base-white rounded-lg overflow-hidden border border-solid border-[#d5d6d9] shadow-shadow-xs"
                        />
                      </div>
                      <label
                        className={`w-40 mt-[-1.00px] font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] ${
                          dark ? "text-white" : "text-[#2a2b2a]"
                        } text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]`}
                      >
                        {t("Date of Hire")}
                      </label>
                      <div className="flex flex-col h-10 items-center justify-center gap-2  top-0 left-[885px] bg-base-white rounded-lg overflow-hidden  shadow-shadow-xs">
                        <Input
                          type="date"
                          placeholder="Select Date"
                          className=" block  items-center w-[252px] gap-2 px-3.5 py-2.5 relative self-stretch  flex-[0_0_auto] bg-base-white rounded-lg overflow-hidden border border-solid border-[#d5d6d9] shadow-shadow-xs font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-gray-500 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] [font-style:var(--title-16px-regular-font-style)]"
                        />
                      </div>
                    </div>
                    <WorkDays local={local} dark={dark} />
                  </div>
                </div>
                <div
                  dir={`${local === "ar" ? "ltr" : "rtl"}`}
                  className={`relative self-stretch w-full h-[58px] top-[40px] border border-red-500 ${
                    local === "ar" ? "right-[450px]" : "right-[550px]"
                  } `}
                >
                  <div
                    dir="ltr"
                    className="w-[663px] h-10 items-start gap-3 pt-0 pb-6 px-6 top-[0px] left-[494px] flex relative"
                  >
                    <Button
                      variant="outline"
                      className="flex items-center justify-center gap-2 px-[18px] py-2.5 relative flex-1 grow mb-[-28.00px] bg-base-white rounded-[50px] overflow-hidden border border-solid border-[#d5d6d9] shadow-shadow-xs h-auto"
                    >
                      <div
                        className={`relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] ${
                          dark ? "text-white" : "text-[#2a2b2a]"
                        } text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]`}
                      >
                        {t("Previous")}
                      </div>
                      <img
                        className="absolute top-[10px] left-[100px] "
                        alt="Vector stroke"
                        src="/CaretRight.svg"
                      />
                    </Button>

                    <Button className="flex hover:bg-blue-500 items-center justify-center gap-2 px-[18px] py-2.5 relative flex-1 grow mb-[-28.00px] bg-secondary-dark rounded-[50px] overflow-hidden border border-solid border-[#00b48d] shadow-shadow-xs h-auto">
                      <div className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-base-white text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                        {t("Next")}
                      </div>

                      <img
                        className="absolute w-[5px] h-[9px] top-[15px] left-[173px]"
                        alt="Vector stroke"
                        src="/Vector (Stroke).svg"
                      />
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="documents">
                <div className="self-stretch w-full h-[866px] relative mt-[50px]">
                  <div
                    dir="ltr"
                    className="flex flex-col w-[1137px]  items-start gap-4 left-2.5 relative"
                  >
                    {documentFields.map((field, index) => (
                      <div
                        key={index}
                        className="self-stretch w-full h-[61.42px] relative"
                      >
                        <div className="absolute w-[178px] -top-px left-0 [font-family:'Lato',Helvetica] font-medium text-on-surface-primary text-base tracking-[0] leading-4">
                          <span
                            className={` ${
                              dark ? "text-white" : "text-[#414651]"
                            }`}
                          >
                            {t(`${field.label}`)}
                          </span>
                        </div>

                        <div className="inline-flex items-center justify-center gap-[8.19px] absolute top-0 left-[210px]">
                          <FileUpload
                            amount="PDF File , Maximum file size 1MB."
                            size={1 * 1024 * 1024}
                          />
                        </div>
                        <div
                          className={`absolute w-40 -top-px left-[722px] font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] ${
                            dark ? "text-white" : "text-[#414651]"
                          } text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]`}
                        >
                          {t("Effective Date")}
                        </div>

                        <div className="inline-flex flex-col h-10 items-center justify-center gap-2 absolute top-0 left-[885px] bg-base-white rounded-lg overflow-hidden  shadow-shadow-xs">
                          <Input
                            type="date"
                            placeholder="Select Date"
                            className=" block  items-center w-[252px] gap-2 px-3.5 py-2.5 relative self-stretch  flex-[0_0_auto] bg-base-white rounded-lg overflow-hidden border border-solid border-[#d5d6d9] shadow-shadow-xs font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-gray-500 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] [font-style:var(--title-16px-regular-font-style)]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div
                    dir={`${local === "ar" ? "ltr" : "rtl"}`}
                    className={`relative self-stretch w-full h-[58px] top-[320px] border border-red-500 ${
                      local === "ar" ? "right-[450px]" : "right-[550px]"
                    } `}
                  >
                    <div
                      dir="ltr"
                      className="w-[663px] h-10 items-start gap-3 pt-0 pb-6 px-6 top-[0px] left-[494px] flex relative"
                    >
                      <Button
                        variant="outline"
                        className="flex items-center justify-center gap-2 px-[18px] py-2.5 relative flex-1 grow mb-[-28.00px] bg-base-white rounded-[50px] overflow-hidden border border-solid border-[#d5d6d9] shadow-shadow-xs h-auto"
                      >
                        <div
                          className={`relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] ${
                            dark ? "text-white" : "text-[#414651]"
                          } text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]`}
                        >
                          {t("Previous")}
                        </div>
                        <img
                          className="absolute top-[10px] left-[100px] "
                          alt="Vector stroke"
                          src="/CaretRight.svg"
                        />
                      </Button>

                      <Button className="flex hover:bg-blue-500 items-center justify-center gap-2 px-[18px] py-2.5 relative flex-1 grow mb-[-28.00px] bg-secondary-dark rounded-[50px] overflow-hidden border border-solid border-[#00b48d] shadow-shadow-xs h-auto">
                        <div className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-base-white text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                          {t("Save")}
                        </div>

                        <img
                          className="absolute w-[5px] h-[9px] top-[15px] left-[173px]"
                          alt="Vector stroke"
                          src="/Vector (Stroke).svg"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
      
    </div>
  );
};
