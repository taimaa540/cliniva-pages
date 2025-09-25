import { BellIcon, ChevronDownIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { useLanguage } from "../../lib/LanguageContext";
import Pagination from "@mui/material/Pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../components/ui/collapsible";
import { ThemeToggle } from "../../components/theme/ThemeSwitcher";
import { useState } from "react";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Label } from "../../components/ui/label";
import { SideBar } from "../CommonComponents/SideBarPlan2";
export const MoreDetails = (): JSX.Element => {
  const [num, setNum] = useState("1");
  const { local, handleLanguageClick } = useLanguage();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);
  const [open, setOpen] = useState({
    appointmentDetails: true,
    serviceDetails: true,
    sessionList: true,
    generalInformations: true,
  });

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
        handleDarkClick={() => { }}
        isOpen={showSidebar}
        onOpenSidebar={onOpenSidebar}
        onCloseSidebar={onCloseSidebar}
      />
      <>
        <div className="flex flex-col w-full overflow-hidden h-full items-start gap-4 py-4 pl-0 pr-5">
          <header className="flex h-[50px] w-full  items-center bg-background-primary px-2">
            {/* نسخة الموبايل */}
            <div className="flex w-full items-center justify-between md:hidden">
              {/* Left Side -> العنوان */}
              <div className="flex items-center gap-2">
                <button
                  className="md:hidden p-2 rounded-lg bg-secondary-light"
                  onClick={onOpenSidebar}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>

                <div className="flex flex-col">
                  <h1 className="font-bold text-sm text-on-surface-primary">
                    {t("Medical Clinic Details")}
                  </h1>
                  <p className="text-xs text-on-surface-primary">
                    {t("Medical Facilities")}
                  </p>
                </div>
              </div>

              {/* Right Side -> الإشعار */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="p-2.5 bg-secondary-light rounded-[20px] h-auto"
                >
                  <BellIcon className="w-5 h-5" />
                </Button>
                <div className="absolute top-1 left-6 w-2 h-2 bg-[#fa812d] rounded-full" />
              </div>
            </div>




            {/* نسخة الـ Desktop/Laptop */}
            <div className="hidden md:flex w-full items-center justify-between">
              {/* Left Side */}
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <h1 className="font-bold text-base md:text-lg lg:text-xl text-on-surface-primary">
                    {t("Medical Clinic Details")}
                  </h1>
                  <p className="text-sm md:text-base text-on-surface-primary">
                    {t("Medical Facilities")}
                  </p>
                </div>
              </div>

              {/* Right Side */}
              <div className="inline-flex gap-3 items-center px-4">
                {/* Notification */}
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="p-2.5 bg-secondary-light rounded-[20px] h-auto"
                  >
                    <BellIcon className="w-5 h-5" />
                  </Button>
                  <div className="absolute top-1 left-6 w-2 h-2 bg-[#fa812d] rounded-full" />
                </div>

                {/* Language Switch */}
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`p-2.5 ${local === "ar" ? "bg-[green]" : "bg-secondary-light"
                      } rounded-[20px] h-auto transition-all duration-[1000ms]`}
                    onClick={handleLanguageClick}
                  >
                    <TranslateIcon className="w-5 h-5" />
                  </Button>
                </div>

                {/* Theme Toggle */}
                <div className="relative">
                  <ThemeToggle />
                </div>

                {/* User Info */}
                <div className="items-center gap-3 inline-flex flex-[0_0_auto]">
                  <div className="inline-flex items-center w-[40px] h-[40px] bg-app-primary rounded-3xl" />
                  <div className="flex-col items-start gap-1 inline-flex">
                    <div className="text-base font-bold text-on-surface-primary">
                      Anahera Jones
                    </div>
                    <div className="text-sm text-on-surface-tertiary">
                      {t("Admin")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <Card className=" h-full items-start gap-5 p-[20px] pr-0 relative w-full rounded-2xl overflow-hidden bg-background-tertiary">
            <CardContent className="w-full overflow-y-auto scroll-x-hidden h-full ">
              <div
                className={`w-full h-[866px] flex flex-col items-end gap-[20px] ${local === "ar" ? "pl-[20px]" : "pr-[20px]"
                  } `}
              >
                <Card className="w-full bg-background-primary rounded-[16px] p-[16px]">
                  <CardContent dir={local === "en" ? "ltr" : "rtl"}>
                    <Collapsible
                      open={open.appointmentDetails}
                      onOpenChange={() =>
                        setOpen({
                          ...open,
                          appointmentDetails: !open.appointmentDetails,
                        })
                      }
                      className="w-full"
                    >
                      <CollapsibleTrigger asChild>
                        <Button
                          variant="ghost"
                          className="p-0 hover:bg-[none] w-full"
                        >
                          <div className="flex w-full items-center justify-between mb-[12px] ">
                            <h2 className="text-primary-default text-base font-lato font-bold leading-[124%] tracking-[0] ">
                              {t("Appointment Details")}
                            </h2>
                            <ChevronDownIcon
                              style={{ width: "24px", height: "24px" }}
                              className={`transition-transform duration-200 ${open.appointmentDetails
                                ? "rotate-180"
                                : "rotate-0"
                                }`}
                            />
                          </div>
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="w-full mt-[22px]">
                        <div className="grid grid-cols-2 gap-x-[35px] gap-y-[24px]">
                          <div className="flex items-center gap-[32px] w-full">
                            <Label
                              className={`${local === "ar" ? "w-[100px]" : "w-[155px]"
                                } font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary`}
                            >
                              {t("Appointment ID")}
                            </Label>
                            <Label className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                              Appt-4452
                            </Label>
                          </div>
                          <div className="flex items-center gap-[32px] w-full">
                            <Label
                              className={`${local === "ar" ? "w-[100px]" : "w-[155px]"
                                } font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary`}
                            >
                              {t("Clinic Name")}
                            </Label>
                            <Label className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                              Noor Clinic
                            </Label>
                          </div>
                          <div className="flex items-center gap-[32px] w-full">
                            <Label
                              className={`${local === "ar" ? "w-[100px]" : "w-[155px]"
                                } font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary`}
                            >
                              {t("Appointment Time")}
                            </Label>
                            <Label className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                              9:00 {t("AM")} -10:00 {t("AM")}
                            </Label>
                          </div>
                          <div className="flex items-center gap-[32px] w-full">
                            <Label
                              className={`${local === "ar" ? "w-[100px]" : "w-[155px]"
                                } font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary`}
                            >
                              {t("Doctor Name")}
                            </Label>
                            <Label className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                              emp-t9a3eMahmoud Fadel
                            </Label>
                          </div>
                          <div className="flex items-start gap-[32px] w-full">
                            <Label
                              className={`${local === "ar" ? "w-[100px]" : "w-[155px]"
                                } font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary`}
                            >
                              {t("Appointment Date")}
                            </Label>
                            <Label className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                              {t("Sep")} 19, 2025
                            </Label>
                          </div>
                          <div className="flex items-start gap-[32px] w-full">
                            <Label
                              className={`${local === "ar" ? "w-[100px]" : "w-[155px]"
                                } font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary`}
                            >
                              {t("Status")}
                            </Label>
                            <Label className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-primary-default">
                              <span className="block py-[3px] px-[14px] bg-[#E1EDFB] rounded-[20px]">
                                {t("Scheduled")}
                              </span>
                            </Label>
                          </div>
                          <div className="flex items-center gap-[32px] w-full">
                            <Label
                              className={`${local === "ar" ? "w-[100px]" : "w-[155px]"
                                } font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary`}
                            >
                              {t("Patient Name")}
                            </Label>
                            <Select
                              dir={`${local === "ar" ? "rtl" : "ltr"}`}
                              defaultValue="PAT-df4c3 Sarah Miller"
                            >
                              <SelectTrigger className="flex-1 h-[48px] bg-primary-foreground border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="PAT-df4c3 Sarah Miller">
                                  PAT-df4c3 Sarah Miller
                                </SelectItem>
                                <SelectItem value="Patient 1">
                                  {t("Patient")} 1
                                </SelectItem>
                                <SelectItem value="Patient 2">
                                  {t("Patient")} 2
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="flex items-start gap-[32px] w-full">
                            <Label
                              className={`${local === "ar" ? "w-[100px]" : "w-[155px]"
                                } font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary`}
                            >
                              {t("Notes")}
                            </Label>
                            <Label className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                              ----
                            </Label>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </CardContent>
                </Card>

                <Card className="w-full bg-background-primary rounded-[16px] p-[16px]">
                  <CardContent dir={local === "en" ? "ltr" : "rtl"}>
                    <Collapsible
                      open={open.serviceDetails}
                      onOpenChange={() =>
                        setOpen({
                          ...open,
                          serviceDetails: !open.serviceDetails,
                        })
                      }
                      className="w-full"
                    >
                      <CollapsibleTrigger asChild>
                        <Button
                          variant="ghost"
                          className="p-0 hover:bg-[none] w-full"
                        >
                          <div className="flex w-full items-center justify-between mb-[12px] ">
                            <h2 className="text-primary-default text-base font-lato font-bold leading-[124%] tracking-[0] ">
                              {t("Service Details")}
                            </h2>
                            <ChevronDownIcon
                              style={{ width: "24px", height: "24px" }}
                              className={`transition-transform duration-200 ${open.serviceDetails ? "rotate-180" : "rotate-0"
                                }`}
                            />
                          </div>
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="w-full mt-[22px]">
                        <div className="grid grid-cols-2 gap-x-[35px] gap-y-[24px]">
                          <div className="flex items-center gap-[32px] w-full">
                            <Label
                              className={`${local === "ar" ? "w-[100px]" : "w-[155px]"
                                } font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary`}
                            >
                              {t("Service Name")}
                            </Label>
                            <Select
                              dir={`${local === "ar" ? "rtl" : "ltr"}`}
                              defaultValue="SER-Gsl7m Initial Consultation"
                            >
                              <SelectTrigger className="flex-1 h-[48px] bg-primary-foreground border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="SER-Gsl7m Initial Consultation">
                                  SER-Gsl7m Initial Consultation
                                </SelectItem>
                                <SelectItem value="Service 1">
                                  {t("Service")} 1
                                </SelectItem>
                                <SelectItem value="Service 2">
                                  {t("Service")} 2
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="flex items-center gap-[32px] w-full">
                            <Label
                              className={`${local === "ar" ? "w-[100px]" : "w-[155px]"
                                } font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary`}
                            >
                              {t("Service Category")}
                            </Label>
                            <Label className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                              Specialized Care
                            </Label>
                          </div>
                          <div className="flex items-center gap-[32px] w-full">
                            <Label
                              className={`${local === "ar" ? "w-[100px]" : "w-[155px]"
                                } font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary`}
                            >
                              {t("Required Equipments")}
                            </Label>
                            <Label className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                              Blood Glucose Monitor, Lab Kit, ECG Machine
                            </Label>
                          </div>
                          <div className="flex items-center gap-[32px] w-full">
                            <Label
                              className={`${local === "ar" ? "w-[100px]" : "w-[155px]"
                                } font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary`}
                            >
                              {t("Service Description")}
                            </Label>
                            <Label className="flex-1 font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                              {t('Full diagnostic evaluation for diabetes including lab tests, physical exam, and consultation.')}
                            </Label>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </CardContent>
                </Card>

                <Card className="w-full bg-background-primary rounded-[16px] p-[16px]">
                  <CardContent dir={local === "en" ? "ltr" : "rtl"}>
                    <Collapsible
                      open={open.sessionList}
                      onOpenChange={() =>
                        setOpen({ ...open, sessionList: !open.sessionList })
                      }
                      className="w-full"
                    >
                      <CollapsibleTrigger asChild>
                        <Button
                          variant="ghost"
                          className="p-0 hover:bg-[none] w-full"
                        >
                          <div className="flex w-full items-center justify-between mb-[12px] ">
                            <h2 className="text-primary-default text-base font-lato font-bold leading-[124%] tracking-[0] ">
                              {t("Sessions List")}
                            </h2>
                            <ChevronDownIcon
                              style={{ width: "24px", height: "24px" }}
                              className={`transition-transform duration-200 ${open.sessionList ? "rotate-180" : "rotate-0"
                                }`}
                            />
                          </div>
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="w-full">
                        <div className="flex flex-col h-full items-end gap-[16px] w-full">
                          <table className="w-full text-center">
                            <thead>
                              <tr className="h-[56px] bg-background-primary border-b border-border-light w-full">
                                <td className="font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                                  {t("No.")}
                                </td>
                                <td className="font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                                  {t("Session Name")}
                                </td>
                                <td className="font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                                  {t("Duration")}
                                </td>
                                <td className="font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                                  {t("Next Session")}
                                </td>
                                <td className="font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                                  {t("Description")}
                                </td>
                                <td className="font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                                  {t("Appt Required")}
                                </td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="h-[54px] bg-background-primary border-b border-border-light w-full">
                                <td className="align-middle font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                                  1
                                </td>
                                <td className="align-middle font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary w-[250px]">
                                  Initial Consultation
                                </td>
                                <td className="align-middle  font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                                  00:50
                                </td>
                                <td className="align-middle  font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                                  25 {t('Day')}
                                </td>
                                <td className="align-middle  font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary w-[400px]">
                                  Blood sugar, HbA1c, cholesterol
                                </td>
                                <td className="align-middle font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                                  <svg
                                    className="mx-auto"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M12 21V21C7.029 21 3 16.971 3 12V12C3 7.029 7.029 3 12 3V3C16.971 3 21 7.029 21 12V12C21 16.971 16.971 21 12 21Z"
                                      stroke="#323232"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M16 10L11 15L8 12"
                                      stroke="#323232"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                </td>
                              </tr>
                              <tr className="h-[54px] bg-background-primary border-b border-border-light w-full">
                                <td className="align-middle font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                                  2
                                </td>
                                <td className="align-middle font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary w-[250px]">
                                  Initial Consultation
                                </td>
                                <td className="align-middle  font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                                  00:50
                                </td>
                                <td className="align-middle  font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                                  25 {t('Day')}
                                </td>
                                <td className="align-middle  font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary w-[400px]">
                                  Blood sugar, HbA1c, cholesterol
                                </td>
                                <td className="align-middle font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                                  <svg
                                    className="mx-auto"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M12 21V21C7.029 21 3 16.971 3 12V12C3 7.029 7.029 3 12 3V3C16.971 3 21 7.029 21 12V12C21 16.971 16.971 21 12 21Z"
                                      stroke="#323232"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M16 10L11 15L8 12"
                                      stroke="#323232"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                </td>
                              </tr>
                              <tr className="h-[54px] bg-background-primary border-b border-border-light w-full">
                                <td className="align-middle font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                                  3
                                </td>
                                <td className="align-middle font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary w-[250px]">
                                  Initial Consultation
                                </td>
                                <td className="align-middle  font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                                  00:50
                                </td>
                                <td className="align-middle  font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                                  25 {t('Day')}
                                </td>
                                <td className="align-middle  font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary w-[400px]">
                                  Blood sugar, HbA1c, cholesterol
                                </td>
                                <td className="align-middle font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                                  <svg
                                    className="mx-auto"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M12 21V21C7.029 21 3 16.971 3 12V12C3 7.029 7.029 3 12 3V3C16.971 3 21 7.029 21 12V12C21 16.971 16.971 21 12 21Z"
                                      stroke="#323232"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M16 10L11 15L8 12"
                                      stroke="#323232"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                </td>
                              </tr>
                              <tr className="h-[54px] bg-background-primary border-b border-border-light w-full">
                                <td className="align-middle font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                                  4
                                </td>
                                <td className="align-middle font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary w-[250px]">
                                  Initial Consultation
                                </td>
                                <td className="align-middle  font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                                  00:50
                                </td>
                                <td className="align-middle  font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                                  25 {t('Day')}
                                </td>
                                <td className="align-middle  font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary w-[400px]">
                                  Blood sugar, HbA1c, cholesterol
                                </td>
                                <td className="align-middle font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                                  <svg
                                    className="mx-auto"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M14.8319 9.16992L9.17188 14.8299"
                                      stroke="#323232"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M14.8319 14.8299L9.17188 9.16992"
                                      stroke="#323232"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M12 21V21C7.029 21 3 16.971 3 12V12C3 7.029 7.029 3 12 3V3C16.971 3 21 7.029 21 12V12C21 16.971 16.971 21 12 21Z"
                                      stroke="#323232"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <footer
                            dir="ltr"
                            className="flex items-center justify-between self-stretch w-full flex-[0_0_auto] bg-transparent mt-[10px]"
                          >
                            <div
                              dir={`${local === "ar" ? "rtl" : "ltr"}`}
                              className="inline-flex gap-2.5 flex-[0_0_auto] items-center"
                            >
                              <span className="w-fit font-title-11px-regular font-[number:var(--title-11px-regular-font-weight)] text-on-surface-secondary text-[length:var(--title-11px-regular-font-size)] tracking-[var(--title-11px-regular-letter-spacing)] leading-[var(--title-11px-regular-line-height)] whitespace-nowrap [font-style:var(--title-11px-regular-font-style)]">
                                {t("Showing")}
                              </span>

                              <Select
                                value={num}
                                onValueChange={(value) => setNum(value)}
                              >
                                <SelectTrigger className="inline-flex items-center gap-1 pl-2 pr-1.5 py-1.5 flex-[0_0_auto] bg-secondary-light rounded-[20px] border-0 h-auto">
                                  <SelectValue>
                                    <span className="w-fit font-[number:var(--btn-11px-medium-font-weight)] text-on-surface-primary text-[length:var(--btn-11px-medium-font-size)] text-center leading-[var(--btn-11px-medium-line-height)] whitespace-nowrap mt-[-1.00px] font-btn-11px-medium tracking-[var(--btn-11px-medium-letter-spacing)] [font-style:var(--btn-11px-medium-font-style)]">
                                      {num}
                                    </span>
                                  </SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="10">2</SelectItem>
                                  <SelectItem value="25">5</SelectItem>
                                  <SelectItem value="50">10</SelectItem>
                                </SelectContent>
                              </Select>

                              <span className="w-fit font-title-11px-regular font-[number:var(--title-11px-regular-font-weight)] text-on-surface-secondary text-[length:var(--title-11px-regular-font-size)] tracking-[var(--title-11px-regular-letter-spacing)] leading-[var(--title-11px-regular-line-height)] whitespace-nowrap [font-style:var(--title-11px-regular-font-style)]">
                                {t("out of")} 14
                              </span>
                            </div>

                            <Pagination
                              count={10}
                              variant="outlined"
                              siblingCount={0}
                              boundaryCount={1}
                              sx={{
                                "& .MuiPaginationItem-root": {
                                  backgroundColor: "#E2F6EC",
                                  borderColor: "#E2F6EC",
                                  color: "#333",
                                  "&:hover": {
                                    backgroundColor: "#cceede",
                                  },
                                },
                                "& .Mui-selected": {
                                  backgroundColor: "#00B48D !important",
                                  borderColor: "#00B48D",
                                  color: "#fff",
                                  "&:hover": {
                                    backgroundColor: "#00A57F",
                                  },
                                },
                              }}
                            />
                          </footer>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </CardContent>
                </Card>

                <Card className="w-full bg-background-primary rounded-[16px] p-[16px]">
                  <CardContent dir={local === "en" ? "ltr" : "rtl"}>
                    <Collapsible
                      open={open.generalInformations}
                      onOpenChange={() =>
                        setOpen({
                          ...open,
                          generalInformations: !open.generalInformations,
                        })
                      }
                      className="w-full"
                    >
                      <CollapsibleTrigger asChild>
                        <Button
                          variant="ghost"
                          className="p-0 hover:bg-[none] w-full"
                        >
                          <div className="flex w-full items-center justify-between mb-[12px] ">
                            <h2 className="text-primary-default text-base font-lato font-bold leading-[124%] tracking-[0] ">
                              {t("General informations")}
                            </h2>
                            <ChevronDownIcon
                              style={{ width: "24px", height: "24px" }}
                              className={`transition-transform duration-200 ${open.generalInformations
                                ? "rotate-180"
                                : "rotate-0"
                                }`}
                            />
                          </div>
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="w-full mt-[22px] flex flex-col gap-[16px]">
                        <div className="flex items-center gap-[32px] w-full">
                          <Label
                            className={`${local === "ar" ? "w-[100px]" : "w-[155px]"
                              } font-lato font-bold text-base leading-[124%] tracking-[0] text-text-primary`}
                          >
                            {t("Clinic Description")}
                          </Label>
                          <Label className="w-[500px] font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                            {t(
                              "Providing specialized care in a comfortable and professional setting. Our clinic is equipped to handle a variety of medical needs, ensuring fast and reliable service for every patient."
                            )}
                          </Label>
                        </div>
                        <div className="flex items-center gap-[32px] w-full mb-[16px]">
                          <Label
                            className={`${local === "ar" ? "w-[100px]" : "w-[155px]"
                              } font-lato font-bold text-base leading-[124%] tracking-[0] text-text-primary`}
                          >
                            {t("Doctor Description")}
                          </Label>
                          <Label className="w-[500px] font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                            {t(
                              "Experienced and compassionate physician dedicated to personalized care and accurate diagnosis, with a focus on patient well-being and satisfaction."
                            )}
                          </Label>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </CardContent>
                </Card>

                <div className="flex gap-[16px] mt-auto">
                  <button className=" w-[200px] h-[40px] rounded-[20px] border border-border-light bg-surface-primary  font-lato font-medium text-sm leading-[100%] tracking-[0] text-text-primary">
                    {t("Cancel")}
                  </button>
                  <button className=" w-[200px] h-[40px] rounded-[20px] bg-secondary-dark font-lato font-medium text-sm leading-[100%] tracking-[0] text-surface-primary">
                    {t("Save")}
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </></div>
  );
};
