import { BellIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useLanguage } from "../../lib/LanguageContext";
import SwitchWithLabel from "../CommonComponents/SwitchLabel";

const personalInfoData = [
  { label: "Nationality", value: "Sy" },
  { label: "Card Number", value: "4455566688" },
  { label: "Preferred Language", value: "English" },
  { label: "Religion", value: "Muslim" },
  { label: "Date of Birth", value: "Nov 20, 1994" },
  { label: "Age", value: "25" },
  { label: "Marital Status", value: "Married" },
  { label: "Gender", value: "Male" },
];
import { ThemeToggle } from "../../components/theme/ThemeSwitcher";
import { useState } from "react";
import { SideBar } from "../CommonComponents/SideBarPlan2";
import { Link } from "react-router-dom";
export const PatientDetails = (): JSX.Element => {
  const { local, handleLanguageClick } = useLanguage();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);
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
      <div className="flex flex-col w-full overflow-hidden min-h-screen items-start gap-4 py-4 pl-0 pr-5">

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
                  {t("Patients Management")}
                </h1>
                <p className="text-xs text-on-surface-primary">
                  {t("View Patient Details")}
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
                  {t("Patients Management")}
                </h1>
                <p className="text-sm md:text-base text-on-surface-primary">
                  {t("View Patient Details")}
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

        <Card className="flex flex-col h-full items-start gap-5 p-[20px] pr-0 relative w-full rounded-2xl overflow-hidden bg-background-tertiary">
          <CardContent className="w-full overflow-y-auto scroll-x-hidden pr-[20px] ">
            <main className="flex flex-col gap-[20px] w-full rounded-2xl">
              <div className="flex justify-between">
                <div className="flex gap-[9px] items-center">
                  <span className="font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">{t('Patient Status')}</span>
                  <SwitchWithLabel />
                </div>
                <div className="flex gap-[16px]">
                  <button className="flex items-center justify-center gap-[6px] w-[200px] h-[40px] rounded-[20px] bg-[#E46962] font-lato font-medium text-sm leading-[100%] tracking-[0] text-surface-primary">
                    <svg
                      className="text-surface-primary"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.5 5H13V4.5C13 4.10218 12.842 3.72064 12.5607 3.43934C12.2794 3.15804 11.8978 3 11.5 3H8.5C8.10218 3 7.72064 3.15804 7.43934 3.43934C7.15804 3.72064 7 4.10218 7 4.5V5H4.5C4.36739 5 4.24021 5.05268 4.14645 5.14645C4.05268 5.24021 4 5.36739 4 5.5C4 5.63261 4.05268 5.75979 4.14645 5.85355C4.24021 5.94732 4.36739 6 4.5 6H5V15C5 15.2652 5.10536 15.5196 5.29289 15.7071C5.48043 15.8946 5.73478 16 6 16H14C14.2652 16 14.5196 15.8946 14.7071 15.7071C14.8946 15.5196 15 15.2652 15 15V6H15.5C15.6326 6 15.7598 5.94732 15.8536 5.85355C15.9473 5.75979 16 5.63261 16 5.5C16 5.36739 15.9473 5.24021 15.8536 5.14645C15.7598 5.05268 15.6326 5 15.5 5ZM8 4.5C8 4.36739 8.05268 4.24021 8.14645 4.14645C8.24021 4.05268 8.36739 4 8.5 4H11.5C11.6326 4 11.7598 4.05268 11.8536 4.14645C11.9473 4.24021 12 4.36739 12 4.5V5H8V4.5ZM14 15H6V6H14V15ZM9 8.5V12.5C9 12.6326 8.94732 12.7598 8.85355 12.8536C8.75979 12.9473 8.63261 13 8.5 13C8.36739 13 8.24021 12.9473 8.14645 12.8536C8.05268 12.7598 8 12.6326 8 12.5V8.5C8 8.36739 8.05268 8.24021 8.14645 8.14645C8.24021 8.05268 8.36739 8 8.5 8C8.63261 8 8.75979 8.05268 8.85355 8.14645C8.94732 8.24021 9 8.36739 9 8.5ZM12 8.5V12.5C12 12.6326 11.9473 12.7598 11.8536 12.8536C11.7598 12.9473 11.6326 13 11.5 13C11.3674 13 11.2402 12.9473 11.1464 12.8536C11.0527 12.7598 11 12.6326 11 12.5V8.5C11 8.36739 11.0527 8.24021 11.1464 8.14645C11.2402 8.05268 11.3674 8 11.5 8C11.6326 8 11.7598 8.05268 11.8536 8.14645C11.9473 8.24021 12 8.36739 12 8.5Z"
                        fill="currentColor"
                      />
                    </svg>
                    {t("Delete")}
                  </button>
                  <Link to='/EditPaitentDetails'>
                  <button className="flex items-center justify-center gap-[6px] w-[200px] h-[40px] rounded-[20px] bg-secondary-dark font-lato font-medium text-sm leading-[100%] tracking-[0] text-surface-primary">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.832 3.99955C14.0071 3.82445 14.215 3.68556 14.4438 3.5908C14.6725 3.49604 14.9177 3.44727 15.1654 3.44727C15.413 3.44727 15.6582 3.49604 15.887 3.5908C16.1157 3.68556 16.3236 3.82445 16.4987 3.99955C16.6738 4.17465 16.8127 4.38252 16.9074 4.61129C17.0022 4.84006 17.051 5.08526 17.051 5.33288C17.051 5.58051 17.0022 5.8257 16.9074 6.05448C16.8127 6.28325 16.6738 6.49112 16.4987 6.66622L7.4987 15.6662L3.83203 16.6662L4.83203 12.9995L13.832 3.99955Z"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    {t("Edit")}
                  </button></Link>
                </div>
              </div>
              <div className="flex gap-[20px] w-full">
                <aside
                  dir={local === "en" ? "ltr" : "rtl"}
                  className="w-[277px] h-[884px] bg-background-primary rounded-[16px] py-[22px] px-[8px] shadow-[0px_20px_24px_0px_#0A0D121A]"
                >
                  <Card className=" w-full">
                    <CardContent className="flex flex-col w-[245px]">
                      <section className="flex flex-col items-center justify-center gap-[24px] h-[208px]">
                        <img alt="" src="./Avatar.png" />
                        <div>
                          <h2 className="font-lato font-bold text-lg leading-[120%] tracking-[0] text-text-primary">
                            Ahmad Hassan
                          </h2>
                          <span className="font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-secondary text-center block">
                            PAT-df4c3
                          </span>
                        </div>
                      </section>

                      <Separator className=" w-full h-px " />

                      <section className="flex flex-col gap-[16px] py-[8px] px-[12px]">
                        <h3 className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-secondary-dark">
                          {t("Profile & Identity Info")}
                        </h3>
                        <div className="inline-flex flex-col items-start gap-[16px] px-[4px]">
                          {personalInfoData.map((item, index) => (
                            <div
                              key={index}
                              className="grid grid-cols-[110px_1fr] gap-4 items-center"
                            >
                              <span className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                                {t(`${item.label}`)}
                              </span>
                              <span className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                                {t(`${item.value}`)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </section>

                      <Separator className=" w-full h-px" />

                      <section className="flex flex-col gap-[16px] py-[8px] px-[12px]">
                        <h3 className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-secondary-dark">
                          {t("Contact Info")}
                        </h3>
                        <div className="relative grid grid-cols-[36px_1fr] gap-x-[12px] gap-y-[16px] items-center px-[4px]">
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect width="36" height="36" rx="18" fill="#E1EDFB" />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.8282 11.844C14.808 11.8428 14.7732 11.8438 14.719 11.853C14.0839 11.9603 13.5036 12.2827 13.0766 12.7678C12.7291 13.1625 12.5014 13.6442 12.4147 14.1567C12.3639 14.4568 12.3691 14.7833 12.3905 15.1498C12.5186 17.3455 13.4475 19.4255 15.0113 20.9893C16.6366 22.6146 18.8196 23.5541 21.1105 23.6215C21.3789 23.6294 21.6212 23.6236 21.8438 23.5859C22.3563 23.4992 22.838 23.2714 23.2328 22.924C23.7448 22.4732 24.0756 21.8518 24.1635 21.1754L24.1626 21.175L24.1626 21.175L20.8721 19.7618L20.8721 19.7619L20.872 19.7618L19.1165 20.9345C19.116 20.9349 19.1156 20.9352 19.1151 20.9355C18.9535 21.0442 18.7664 21.1091 18.5722 21.1239C18.3774 21.1387 18.1822 21.1025 18.0056 21.0189L18.0025 21.0174C16.6911 20.3866 15.6321 19.3302 14.9979 18.0205L14.9967 18.0182L14.9967 18.0182C14.9137 17.8446 14.8765 17.6526 14.8888 17.4606C14.9011 17.2685 14.9625 17.0829 15.067 16.9213L15.0693 16.9179L15.0693 16.9179L16.2397 15.1377L16.2387 15.1352L16.2387 15.1352L14.8282 11.844ZM24.1642 21.1701L24.1642 21.1703L24.1642 21.1701ZM14.5315 10.7437C14.7804 10.7016 15.1978 10.6775 15.5504 10.9749C15.6849 11.0884 15.7915 11.2327 15.8604 11.3966L17.2716 14.6896C17.2718 14.69 17.272 14.6905 17.2722 14.691C17.3453 14.8598 17.3758 15.044 17.3612 15.2274C17.3465 15.4114 17.2867 15.5888 17.1873 15.7442L17.1835 15.75L17.1835 15.75L16.0115 17.5325C16.5346 18.6114 17.407 19.4817 18.487 20.0021L18.4893 20.0006L18.4893 20.0006L20.2458 18.8273C20.4016 18.722 20.5815 18.6578 20.7689 18.6406C20.9562 18.6233 21.1448 18.6536 21.3173 18.7286C21.318 18.7289 21.3187 18.7292 21.3194 18.7295L24.6042 20.1403C24.829 20.2348 25.0168 20.4001 25.1389 20.6113C25.2616 20.8235 25.3112 21.0701 25.28 21.3132C25.1584 22.263 24.6948 23.1358 23.9761 23.7684C23.4234 24.2549 22.7491 24.5737 22.0316 24.6951C21.7017 24.751 21.3741 24.7547 21.0774 24.746C18.5001 24.6702 16.0443 23.6133 14.2158 21.7848C12.4565 20.0255 11.4115 17.6855 11.2674 15.2153C11.2452 14.8352 11.2322 14.4017 11.3054 13.969C11.4269 13.2515 11.7457 12.5771 12.2322 12.0245C12.83 11.3453 13.6424 10.8939 14.5315 10.7437Z"
                              fill="currentColor"
                            />
                          </svg>
                          <span className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                            +966 50 123 4567
                          </span>
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect width="36" height="36" rx="18" fill="#E1EDFB" />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M17.688 10.782C17.877 10.656 18.1231 10.656 18.3121 10.782L25.0621 15.282C25.2185 15.3863 25.3125 15.5619 25.3125 15.75V23.0625C25.3125 23.3609 25.194 23.647 24.983 23.858C24.7721 24.069 24.4859 24.1875 24.1875 24.1875H11.8125C11.5142 24.1875 11.228 24.069 11.017 23.858C10.8061 23.647 10.6875 23.3609 10.6875 23.0625V15.75C10.6875 15.5619 10.7815 15.3863 10.938 15.282L17.688 10.782ZM11.8125 16.051V23.0625H24.1875V16.051L18 11.926L11.8125 16.051Z"
                              fill="CurrentColor"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M17.229 19.3629C17.4082 19.6166 17.3479 19.9676 17.0942 20.1469L11.7504 23.9227C11.4967 24.1019 11.1457 24.0416 10.9664 23.7879C10.7872 23.5342 10.8475 23.1832 11.1012 23.0039L16.445 19.2281C16.6987 19.0488 17.0497 19.1092 17.229 19.3629Z"
                              fill="CurrentColor"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.7711 19.3629C18.9504 19.1092 19.3014 19.0488 19.5551 19.2281L24.8989 23.0039C25.1526 23.1832 25.2129 23.5342 25.0337 23.7879C24.8544 24.0416 24.5034 24.1019 24.2497 23.9227L18.9059 20.1469C18.6522 19.9676 18.5918 19.6166 18.7711 19.3629Z"
                              fill="CurrentColor"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.7921 15.4233C10.9725 15.1704 11.3238 15.1117 11.5767 15.2921L16.9496 19.125H19.0504L24.4234 15.2921C24.6763 15.1117 25.0276 15.1704 25.208 15.4233C25.3884 15.6762 25.3296 16.0275 25.0767 16.2079L19.5572 20.1454C19.4618 20.2134 19.3476 20.25 19.2305 20.25H16.7696C16.6525 20.25 16.5383 20.2134 16.4429 20.1454L10.9234 16.2079C10.6705 16.0275 10.6117 15.6762 10.7921 15.4233Z"
                              fill="currentColor"
                            />
                          </svg>
                          <span className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                            ammarsvu91@gmail.com
                          </span>
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect width="36" height="36" rx="18" fill="#E1EDFB" />
                            <path
                              d="M15.75 25.5V18H20.25V25.5M11.25 15.75L18 10.5L24.75 15.75V24C24.75 24.3978 24.592 24.7794 24.3107 25.0607C24.0294 25.342 23.6478 25.5 23.25 25.5H12.75C12.3522 25.5 11.9706 25.342 11.6893 25.0607C11.408 24.7794 11.25 24.3978 11.25 24V15.75Z"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <span className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                            2154 Abdulaziz Street, Al Olaya District, Riyadh,
                            Saudi Arabia
                          </span>
                        </div>
                      </section>
                      <Separator className=" w-full h-px" />

                      <section className="flex flex-col gap-[16px] py-[24px] px-[12px]">
                        <h3 className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-secondary-dark">
                          {t("Emergency Contact Info")}
                        </h3>
                        <div className="relative grid grid-cols-[36px_1fr] gap-x-[12px] gap-y-[16px] items-center px-[4px]">
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect width="36" height="36" rx="18" fill="#E1EDFB" />
                            <g clip-path="url(#clip0_6375_72054)">
                              <path
                                d="M24.4981 22.6901V24.9401C24.499 25.1489 24.4562 25.3557 24.3725 25.5471C24.2888 25.7385 24.1661 25.9103 24.0122 26.0515C23.8583 26.1927 23.6765 26.3002 23.4787 26.3671C23.2808 26.434 23.0711 26.4589 22.8631 26.4401C20.5552 26.1893 18.3384 25.4007 16.3906 24.1376C14.5785 22.9861 13.0421 21.4497 11.8906 19.6376C10.6231 17.681 9.8343 15.4533 9.58812 13.1351C9.56938 12.9277 9.59402 12.7186 9.66049 12.5213C9.72696 12.3239 9.8338 12.1426 9.97419 11.9888C10.1146 11.835 10.2855 11.7121 10.476 11.628C10.6665 11.5438 10.8724 11.5003 11.0806 11.5001H13.3306C13.6946 11.4965 14.0475 11.6254 14.3234 11.8627C14.5994 12.1001 14.7797 12.4297 14.8306 12.7901C14.9256 13.5101 15.1017 14.2171 15.3556 14.8976C15.4565 15.166 15.4784 15.4578 15.4185 15.7382C15.3587 16.0187 15.2198 16.2762 15.0181 16.4801L14.0656 17.4326C15.1333 19.3102 16.688 20.8649 18.5656 21.9326L19.5181 20.9801C19.722 20.7784 19.9795 20.6395 20.26 20.5796C20.5404 20.5198 20.8322 20.5417 21.1006 20.6426C21.7811 20.8965 22.4881 21.0726 23.2081 21.1676C23.5724 21.219 23.9052 21.4025 24.143 21.6832C24.3809 21.9639 24.5072 22.3223 24.4981 22.6901Z"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M19.2727 17C19.1439 17 19.0361 16.9548 18.9491 16.8645C18.8621 16.7741 18.8185 16.6624 18.8182 16.5294C18.8179 16.3964 18.8615 16.2847 18.9491 16.1943C19.0367 16.104 19.1445 16.0588 19.2727 16.0588H19.5455L20.4432 12.9647C20.5038 12.7608 20.6156 12.5981 20.7786 12.4767C20.9417 12.3553 21.1215 12.2944 21.3182 12.2941H22.6818C22.8788 12.2941 23.0588 12.355 23.2218 12.4767C23.3848 12.5984 23.4965 12.7611 23.5568 12.9647L24.4545 16.0588H24.7273C24.8561 16.0588 24.9641 16.104 25.0514 16.1943C25.1386 16.2847 25.1821 16.3964 25.1818 16.5294C25.1815 16.6624 25.1379 16.7743 25.0509 16.8649C24.9639 16.9556 24.8561 17.0006 24.7273 17H19.2727ZM20.5 16.0588H23.5L22.6818 13.2353H21.3182L20.5 16.0588ZM21.5455 10.8824V9.47059C21.5455 9.33726 21.5891 9.22557 21.6764 9.13553C21.7636 9.04549 21.8715 9.00032 22 9C22.1285 8.99969 22.2365 9.04486 22.3241 9.13553C22.4117 9.2262 22.4552 9.33788 22.4545 9.47059V10.8824C22.4545 11.0157 22.4109 11.1275 22.3236 11.2179C22.2364 11.3082 22.1285 11.3533 22 11.3529C21.8715 11.3526 21.7636 11.3075 21.6764 11.2174C21.5891 11.1274 21.5455 11.0157 21.5455 10.8824ZM23.9318 11.5176L24.8977 10.5176C24.9811 10.4314 25.0853 10.3862 25.2105 10.3821C25.3356 10.378 25.4435 10.4232 25.5341 10.5176C25.6174 10.6039 25.6591 10.7137 25.6591 10.8471C25.6591 10.9804 25.6174 11.0902 25.5341 11.1765L24.5682 12.1882C24.4773 12.2824 24.3712 12.3294 24.25 12.3294C24.1288 12.3294 24.0227 12.2824 23.9318 12.1882C23.8409 12.0941 23.7955 11.9824 23.7955 11.8532C23.7955 11.7239 23.8409 11.6121 23.9318 11.5176ZM25.1818 13.7059H26.5455C26.6742 13.7059 26.7823 13.7511 26.8695 13.8414C26.9568 13.9318 27.0003 14.0434 27 14.1765C26.9997 14.3095 26.9561 14.4213 26.8691 14.512C26.7821 14.6027 26.6742 14.6477 26.5455 14.6471H25.1818C25.053 14.6471 24.9452 14.6019 24.8582 14.5115C24.7712 14.4212 24.7276 14.3095 24.7273 14.1765C24.727 14.0434 24.7706 13.9318 24.8582 13.8414C24.9458 13.7511 25.0536 13.7059 25.1818 13.7059ZM19.4318 12.1765L18.4659 11.1765C18.3826 11.0902 18.3391 10.9824 18.3355 10.8532C18.3318 10.7239 18.3753 10.6121 18.4659 10.5176C18.5492 10.4314 18.6553 10.3882 18.7841 10.3882C18.9129 10.3882 19.0189 10.4314 19.1023 10.5176L20.0795 11.5176C20.1705 11.6118 20.2159 11.7216 20.2159 11.8471C20.2159 11.9725 20.1705 12.0824 20.0795 12.1765C19.9886 12.2706 19.8808 12.3176 19.7559 12.3176C19.6311 12.3176 19.523 12.2706 19.4318 12.1765ZM17.4545 14.6471C17.3258 14.6471 17.2179 14.6019 17.1309 14.5115C17.0439 14.4212 17.0003 14.3095 17 14.1765C16.9997 14.0434 17.0433 13.9318 17.1309 13.8414C17.2185 13.7511 17.3264 13.7059 17.4545 13.7059H18.8182C18.947 13.7059 19.055 13.7511 19.1423 13.8414C19.2295 13.9318 19.273 14.0434 19.2727 14.1765C19.2724 14.3095 19.2288 14.4213 19.1418 14.512C19.0548 14.6027 18.947 14.6477 18.8182 14.6471H17.4545Z"
                                fill="currentColor"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_6375_72054">
                                <rect
                                  width="18"
                                  height="18"
                                  fill="currentColor"
                                  transform="translate(9 9)"
                                />
                              </clipPath>
                            </defs>
                          </svg>

                          <span className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                            Mohammed Zaki, Father +963933348151
                          </span>
                        </div>
                      </section>
                    </CardContent>
                  </Card>
                </aside>

                <section className="flex flex-col gap-[16px] w-full items-start">
                  <Card className="flex flex-col items-start w-full bg-background-primary rounded-[16px] p-[16px]">
                    <CardContent
                      dir={local === "en" ? "ltr" : "rtl"}
                      className="w-full"
                    >
                      <h2 className="font-lato font-bold text-base leading-[124%] tracking-[0] text-primary-default">
                        {t("Insurance Info")}
                      </h2>

                      <div className="flex items-start  w-full gap-[85px] mt-[18px]">
                        {/* العمود الأول */}
                        <div className="grid grid-cols-[155px_1fr] gap-[32px]">
                          <h4 className="font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                            {t("Member Number")} :
                          </h4>
                          <h5 className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                            36884674
                          </h5>
                          <h4 className="font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                            {t("Insurance Company")} :
                          </h4>
                          <h5 className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                            BUPA Arabia for Cooperative Insurance شركة بوبا
                            العربية للتأمين
                          </h5>
                          <h4 className="font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                            {t("Policy ID")} :
                          </h4>
                          <h5 className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                            513029001
                          </h5>
                          <h4 className="font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                            {t("Co-payment")} :
                          </h4>
                          <h5 className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                            % 20.00
                          </h5>
                          <h4 className="font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                            {t("Coverage Start Date")} :
                          </h4>
                          <h5 className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                            {t('Nov')} 20,2026
                          </h5>
                          <h4 className="font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                            {t("Insurance Status")} :
                          </h4>
                          <h5 className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                            {t("Active")}
                          </h5>
                        </div>

                        {/* العمود الثاني */}
                        <div className="grid grid-cols-[155px_1fr] gap-x-[32px] gap-y-[42px]">
                          <h4 className="font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                            {t("Member Type")} :
                          </h4>
                          <h5 className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                            {t('Main')}
                          </h5>
                          <h4 className="font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                            {t("Provider Network")} :
                          </h4>
                          <h5 className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                            300186
                          </h5>
                          <h4 className="font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                            {t("Class")} :
                          </h4>
                          <h5 className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                            essential 1.0
                          </h5>
                          <h4 className="font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                            {t("Coverage Limit")} :
                          </h4>
                          <h5 className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                            75.00
                          </h5>
                          <h4 className="font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                            {t("Coverage End Date")} :
                          </h4>
                          <h5 className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                            {t('Nov')} 20,2026
                          </h5>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="flex flex-col items-start w-full bg-background-primary rounded-[16px] p-[16px]">
                    <CardContent
                      dir={local === "en" ? "ltr" : "rtl"}
                      className="w-full"
                    >
                      <h2 className="font-lato font-bold text-base leading-[124%] tracking-[0] text-primary-default">
                        {t("Personal Documents")}
                      </h2>
                      <div className="mt-[16px] grid grid-cols-2">
                        <Card className="flex gap-[12px] h-[48px] px-[12px] py-[5px] bg-background-tertiary rounded-[16px]">
                          <CardContent className="flex w-[38px] h-[38px] items-center justify-center gap-2.5 px-0 py-px relative bg-app-primary rounded-[10px] p-0">
                            <svg
                              width="38"
                              height="38"
                              viewBox="0 0 38 38"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="38"
                                height="38"
                                rx="10"
                                fill="#A5C8F2"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.4911 11.2411C12.7255 11.0067 13.0435 10.875 13.375 10.875H20.875C21.0408 10.875 21.1997 10.9408 21.3169 11.0581L25.6919 15.4331C25.8092 15.5503 25.875 15.7092 25.875 15.875V19C25.875 19.3452 25.5952 19.625 25.25 19.625C24.9048 19.625 24.625 19.3452 24.625 19V16.1339L20.6161 12.125L13.375 12.125L13.375 19C13.375 19.3452 13.0952 19.625 12.75 19.625C12.4048 19.625 12.125 19.3452 12.125 19V12.125C12.125 11.7935 12.2567 11.4755 12.4911 11.2411Z"
                                fill="#414651"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M20.875 10.875C21.2202 10.875 21.5 11.1548 21.5 11.5V15.25H25.25C25.5952 15.25 25.875 15.5298 25.875 15.875C25.875 16.2202 25.5952 16.5 25.25 16.5H20.875C20.5298 16.5 20.25 16.2202 20.25 15.875V11.5C20.25 11.1548 20.5298 10.875 20.875 10.875Z"
                                fill="#414651"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.125 22.125C12.125 21.7798 12.4048 21.5 12.75 21.5H14C14.4973 21.5 14.9742 21.6975 15.3258 22.0492C15.6775 22.4008 15.875 22.8777 15.875 23.375C15.875 23.8723 15.6775 24.3492 15.3258 24.7008C14.9742 25.0525 14.4973 25.25 14 25.25H13.375V25.875C13.375 26.2202 13.0952 26.5 12.75 26.5C12.4048 26.5 12.125 26.2202 12.125 25.875V22.125ZM13.375 24H14C14.1658 24 14.3247 23.9342 14.4419 23.8169C14.5592 23.6997 14.625 23.5408 14.625 23.375C14.625 23.2092 14.5592 23.0503 14.4419 22.9331C14.3247 22.8158 14.1658 22.75 14 22.75H13.375V24Z"
                                fill="#414651"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M23.0625 22.125C23.0625 21.7798 23.3423 21.5 23.6875 21.5H25.875C26.2202 21.5 26.5 21.7798 26.5 22.125C26.5 22.4702 26.2202 22.75 25.875 22.75H24.3125V25.875C24.3125 26.2202 24.0327 26.5 23.6875 26.5C23.3423 26.5 23.0625 26.2202 23.0625 25.875V22.125Z"
                                fill="#414651"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M23.0625 24.3125C23.0625 23.9673 23.3423 23.6875 23.6875 23.6875H25.5625C25.9077 23.6875 26.1875 23.9673 26.1875 24.3125C26.1875 24.6577 25.9077 24.9375 25.5625 24.9375H23.6875C23.3423 24.9375 23.0625 24.6577 23.0625 24.3125Z"
                                fill="#414651"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M17.2812 22.125C17.2812 21.7798 17.5611 21.5 17.9062 21.5H19C19.663 21.5 20.2989 21.7634 20.7678 22.2322C21.2366 22.7011 21.5 23.337 21.5 24C21.5 24.663 21.2366 25.2989 20.7678 25.7678C20.2989 26.2366 19.663 26.5 19 26.5H17.9062C17.5611 26.5 17.2812 26.2202 17.2812 25.875V22.125ZM18.5312 22.75V25.25H19C19.3315 25.25 19.6495 25.1183 19.8839 24.8839C20.1183 24.6495 20.25 24.3315 20.25 24C20.25 23.6685 20.1183 23.3505 19.8839 23.1161C19.6495 22.8817 19.3315 22.75 19 22.75H18.5312Z"
                                fill="#414651"
                              />
                            </svg>
                          </CardContent>
                          <div className="flex flex-col items-start gap-1.5 relative flex-1 grow">
                            <h4 className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                              {t("Previous Medical Records")}
                            </h4>
                            <div className="inline-flex items-center gap-4">
                              <div className="inline-flex items-center gap-4">
                                <span className="font-lato font-regular text-xs leading-[124%] tracking-[0] text-text-secondary">
                                  E <span className="font-lato font-bold text-xs leading-[124%] tracking-[0] text-text-secondary">{t('Nov')} 20,2025</span>
                                </span>
                                <div className=" w-[4px] h-[4px] bg-border-light rounded-sm" />
                                <span className="font-lato font-regular text-xs leading-[124%] tracking-[0] text-text-secondary ">
                                  0.5 MB
                                </span>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="flex flex-col items-start w-full bg-background-primary rounded-[16px] p-[16px]">
                    <CardContent
                      dir={local === "en" ? "ltr" : "rtl"}
                      className="w-full"
                    >
                      <div className="">
                        <h3 className="font-lato font-semibold text-base leading-[124%] tracking-[0] text-primary-default">
                          {t("Record History")}
                        </h3>
                        <div className="flex justify-between mt-[16px]">
                          <div className="grid grid-cols-[155px_1fr] gap-[16px]">
                            <h4 className="font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">{t('Registration Date')}</h4>
                            <h5 className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">{t('Nov')} 20,2026</h5>
                          </div>
                          <div className="grid grid-cols-[155px_1fr] gap-[16px]">
                            <h4 className="font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">{t('Last Edit Date')}</h4>
                            <h5 className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">{t('Nov')} 20,2026</h5>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>
              </div>
            </main>
          </CardContent>
        </Card>
      </div></div>
  );
};
