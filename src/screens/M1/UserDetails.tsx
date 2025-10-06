import { BellIcon, FileTextIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import TranslateIcon from "@mui/icons-material/Translate";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useLanguage } from "../../lib/LanguageContext";
import SwitchWithLabel from "../CommonComponents/SwitchLabel";

const personalInfoData = [
  { label: "Gender", value: "Male" },
  { label: "Date of Birth", value: "Nov 20, 1994" },
  { label: "Nationality", value: "Sy" },
  { label: "Card ID", value: "02200075921" },
  { label: "Marital Status", value: "Married" },
  { label: "children Number", value: "1" },
];

const workingDaysData = [
  {
    day: "Sunday",
    shift1: "9:00 AM - 17:00 PM",
    shift2: "19:00 PM - 21:00 PM",
  },
  {
    day: "Monday",
    shift1: "9:00 AM - 17:00 PM",
    shift2: "19:00 PM - 21:00 PM",
  },
  {
    day: "Tuesday",
    shift1: "9:00 AM - 17:00 PM",
    shift2: "19:00 PM - 21:00 PM",
  },
  {
    day: "Wednesday",
    shift1: "9:00 AM - 17:00 PM",
    shift2: "19:00 PM - 21:00 PM",
  },
  {
    day: "Thursday",
    shift1: "9:00 AM - 17:00 PM",
    shift2: "19:00 PM - 21:00 PM",
  },
  { day: "Friday", shift1: "OFF", shift2: "OFF" },
  { day: "Saturday", shift1: "OFF", shift2: "OFF" },
];

const documentsData = [
  { title: "Contract", date: " May 01, 2026 ", size: "0.5 MB" },
  { title: "CV / Resume", date: " May 30, 2028", size: "1.0 MB" },
  { title: "Work Permit", date: " Mar 01, 2027", size: "0.7 MB" },
  { title: "Certifications", date: " Mar 01, 2028", size: "0.4 MB" },
];

export const UserDetails = (): JSX.Element => {
  const { local, handleLanguageClick } = useLanguage();
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    i18n.changeLanguage(local);
  }, [local, i18n]);

  return (
    <div className="flex flex-col w-full min-h-screen items-start gap-2 sm:gap-4 p-2 sm:p-4 max-w-full overflow-x-hidden">
      {/* Responsive Header */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full max-w-full">
        <div className="flex flex-col items-start gap-1.5 min-w-0 flex-1">
          <h1 className="font-lato font-semibold text-lg sm:text-xl text-text-primary leading-[116%] tracking-[0] break-words">
            {t("Users Management")}
          </h1>
          <p className="flex gap-2 font-lato font-semibold text-sm text-text-primary leading-[125%] tracking-[0] items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21 12C21 12.4142 20.6642 12.75 20.25 12.75L3.75 12.75C3.33579 12.75 3 12.4142 3 12C3 11.5858 3.33579 11.25 3.75 11.25L20.25 11.25C20.6642 11.25 21 11.5858 21 12Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.0303 4.71967C11.3232 5.01256 11.3232 5.48744 11.0303 5.78033L4.81066 12L11.0303 18.2197C11.3232 18.5126 11.3232 18.9874 11.0303 19.2803C10.7374 19.5732 10.2626 19.5732 9.96967 19.2803L3.21967 12.5303C2.92677 12.2374 2.92677 11.7626 3.21967 11.4697L9.96967 4.71967C10.2626 4.42678 10.7374 4.42678 11.0303 4.71967Z"
                fill="currentColor"
              />
            </svg>
            <span className="break-words">{t("User Details")}</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-3 items-center justify-end w-full sm:w-auto">
          {/* Notification and Language buttons */}
          <div className="flex gap-3 items-center">
            <button className="flex items-center justify-center p-2.5 bg-secondary-light rounded-[20px] relative">
              <BellIcon className="w-5 h-5" />
              <div className="absolute top-1 left-4 w-2 h-2 bg-[#fa812d] rounded-full" />
            </button>

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

          {/* User Profile */}
          <div className="flex items-center gap-3">
            <div className="w-[40px] h-[40px] bg-app-primary rounded-3xl shrink-0" />
            <div className="flex flex-col items-start gap-1 min-w-0">
              <div className="text-[#2a2b2a] font-title-16px-bold font-[number:var(--title-16px-bold-font-weight)] text-[length:var(--title-16px-bold-font-size)] tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] truncate max-w-[150px] sm:max-w-none">
                Anahera Jones
              </div>
              <div className="font-title-11px-regular font-[number:var(--title-11px-regular-font-weight)] text-on-surface-tertiary text-[length:var(--title-11px-regular-font-size)] tracking-[var(--title-11px-regular-letter-spacing)] leading-[var(--title-11px-regular-line-height)]">
                Admin
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Card */}
      <Card className="flex flex-col w-full max-w-full min-h-0 flex-1 items-start gap-5 p-4 sm:p-5 relative rounded-2xl overflow-hidden bg-background-tertiary">
        <CardContent className="w-full max-w-full overflow-y-auto scroll-x-hidden p-0">
          <main className="flex flex-col gap-4 sm:gap-5 w-full max-w-full items-end rounded-2xl">
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <button className="flex items-center justify-center gap-2 w-full sm:w-auto min-w-[160px] h-[40px] px-4 rounded-[20px] bg-[#E46962] font-lato font-medium text-sm leading-[100%] tracking-[0] text-surface-primary">
                <svg
                  className="text-surface-primary shrink-0"
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
                <span className="truncate">{t("Delete")}</span>
              </button>
              <button className="flex items-center justify-center gap-2 w-full sm:w-auto min-w-[160px] h-[40px] px-4 rounded-[20px] bg-secondary-dark font-lato font-medium text-sm leading-[100%] tracking-[0] text-surface-primary">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0"
                >
                  <path
                    d="M13.832 3.99955C14.0071 3.82445 14.215 3.68556 14.4438 3.5908C14.6725 3.49604 14.9177 3.44727 15.1654 3.44727C15.413 3.44727 15.6582 3.49604 15.887 3.5908C16.1157 3.68556 16.3236 3.82445 16.4987 3.99955C16.6738 4.17465 16.8127 4.38252 16.9074 4.61129C17.0022 4.84006 17.051 5.08526 17.051 5.33288C17.051 5.58051 17.0022 5.8257 16.9074 6.05448C16.8127 6.28325 16.6738 6.49112 16.4987 6.66622L7.4987 15.6662L3.83203 16.6662L4.83203 12.9995L13.832 3.99955Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="truncate">{t("Edit")}</span>
              </button>
            </div>

            {/* Main Content Layout - Fully Responsive */}
            <div className="flex flex-col xl:flex-row gap-4 sm:gap-5 w-full max-w-full">
              {/* Sidebar */}
              <aside
                dir={local === "en" ? "ltr" : "rtl"}
                className="w-full xl:w-[300px] xl:max-w-[300px] bg-background-primary rounded-[16px] py-4 sm:py-6 px-3 sm:px-4 shadow-[0px_20px_24px_0px_#0A0D121A]"
              >
                <Card className="w-full max-w-full">
                  <CardContent className="flex flex-col w-full p-0">
                    {/* User Profile Section */}
                    <section className="flex flex-col items-center justify-center gap-4 sm:gap-6 py-4">
                      <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] bg-[#A5C8F2] rounded-full shrink-0" />
                      <div className="text-center w-full">
                        <h2 className="font-lato font-bold text-base sm:text-lg leading-[120%] tracking-[0] text-text-primary break-words">
                          Ammar Al Sawwa
                        </h2>
                        <div className="flex items-center justify-center gap-2 mt-2 flex-wrap">
                          <span className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary">
                            US-001
                          </span>
                          <div className="w-[4px] h-[4px] bg-border-light rounded-sm shrink-0" />
                          <span className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-primary">
                            {t("Staff")}
                          </span>
                        </div>
                      </div>
                    </section>

                    <Separator className="w-full h-px my-2" />

                    {/* Personal Info Section */}
                    <section className="flex flex-col gap-4 py-4 px-2">
                      <h3 className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-secondary-dark">
                        {t("Profile & Identity Info")}
                      </h3>
                      <div className="flex flex-col items-start gap-3 w-full">
                        {personalInfoData.map((item, index) => (
                          <div
                            key={index}
                            className="flex flex-col sm:grid sm:grid-cols-[1fr_1fr] gap-1 sm:gap-2 w-full"
                          >
                            <span className="font-lato font-semibold text-xs sm:text-sm leading-[125%] tracking-[0] text-text-primary break-words">
                              {t(`${item.label}`)}
                            </span>
                            <span className="font-lato font-regular text-xs sm:text-sm leading-[125%] tracking-[0] text-text-primary break-words">
                              {t(`${item.value}`)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </section>

                    <Separator className="w-full h-px my-2" />

                    {/* Contact Info Section */}
                    <section className="flex flex-col gap-4 py-4 px-2">
                      <h3 className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-secondary-dark">
                        {t("Contact Info")}
                      </h3>
                      <div className="flex flex-col gap-4 w-full">
                        <div className="flex items-start gap-3 w-full">
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="shrink-0"
                          >
                            <rect width="36" height="36" rx="18" fill="#E1EDFB" />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M14.8282 11.844C14.808 11.8428 14.7732 11.8438 14.719 11.853C14.0839 11.9603 13.5036 12.2827 13.0766 12.7678C12.7291 13.1625 12.5014 13.6442 12.4147 14.1567C12.3639 14.4568 12.3691 14.7833 12.3905 15.1498C12.5186 17.3455 13.4475 19.4255 15.0113 20.9893C16.6366 22.6146 18.8196 23.5541 21.1105 23.6215C21.3789 23.6294 21.6212 23.6236 21.8438 23.5859C22.3563 23.4992 22.838 23.2714 23.2328 22.924C23.7448 22.4732 24.0756 21.8518 24.1635 21.1754L24.1626 21.175L24.1626 21.175L20.8721 19.7618L20.8721 19.7619L20.872 19.7618L19.1165 20.9345C19.116 20.9349 19.1156 20.9352 19.1151 20.9355C18.9535 21.0442 18.7664 21.1091 18.5722 21.1239C18.3774 21.1387 18.1822 21.1025 18.0056 21.0189L18.0025 21.0174C16.6911 20.3866 15.6321 19.3302 14.9979 18.0205L14.9967 18.0182L14.9967 18.0182C14.9137 17.8446 14.8765 17.6526 14.8888 17.4606C14.9011 17.2685 14.9625 17.0829 15.067 16.9213L15.0693 16.9179L15.0693 16.9179L16.2397 15.1377L16.2387 15.1352L16.2387 15.1352L14.8282 11.844ZM24.1642 21.1701L24.1642 21.1703L24.1642 21.1701ZM14.5315 10.7437C14.7804 10.7016 15.1978 10.6775 15.5504 10.9749C15.6849 11.0884 15.7915 11.2327 15.8604 11.3966L17.2716 14.6896C17.2718 14.69 17.272 14.6905 17.2722 14.691C17.3453 14.8598 17.3758 15.044 17.3612 15.2274C17.3465 15.4114 17.2867 15.5888 17.1873 15.7442L17.1835 15.75L17.1835 15.75L16.0115 17.5325C16.5346 18.6114 17.407 19.4817 18.487 20.0021L18.4893 20.0006L18.4893 20.0006L20.2458 18.8273C20.4016 18.722 20.5815 18.6578 20.7689 18.6406C20.9562 18.6233 21.1448 18.6536 21.3173 18.7286C21.318 18.7289 21.3187 18.7292 21.3194 18.7295L24.6042 20.1403C24.829 20.2348 25.0168 20.4001 25.1389 20.6113C25.2616 20.8235 25.3112 21.0701 25.28 21.3132C25.1584 22.263 24.6948 23.1358 23.9761 23.7684C23.4234 24.2549 22.7491 24.5737 22.0316 24.6951C21.7017 24.751 21.3741 24.7547 21.0774 24.746C18.5001 24.6702 16.0443 23.6133 14.2158 21.7848C12.4565 20.0255 11.4115 17.6855 11.2674 15.2153C11.2452 14.8352 11.2322 14.4017 11.3054 13.969C11.4269 13.2515 11.7457 12.5771 12.2322 12.0245C12.83 11.3453 13.6424 10.8939 14.5315 10.7437Z"
                              fill="currentColor"
                            />
                          </svg>
                          <span className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary break-all min-w-0 flex-1">
                            +966 50 123 4567
                          </span>
                        </div>

                        <div className="flex items-start gap-3 w-full">
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="shrink-0"
                          >
                            <rect width="36" height="36" rx="18" fill="#E1EDFB" />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M17.688 10.782C17.877 10.656 18.1231 10.656 18.3121 10.782L25.0621 15.282C25.2185 15.3863 25.3125 15.5619 25.3125 15.75V23.0625C25.3125 23.3609 25.194 23.647 24.983 23.858C24.7721 24.069 24.4859 24.1875 24.1875 24.1875H11.8125C11.5142 24.1875 11.228 24.069 11.017 23.858C10.8061 23.647 10.6875 23.3609 10.6875 23.0625V15.75C10.6875 15.5619 10.7815 15.3863 10.938 15.282L17.688 10.782ZM11.8125 16.051V23.0625H24.1875V16.051L18 11.926L11.8125 16.051Z"
                              fill="currentColor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M17.229 19.3629C17.4082 19.6166 17.3479 19.9676 17.0942 20.1469L11.7504 23.9227C11.4967 24.1019 11.1457 24.0416 10.9664 23.7879C10.7872 23.5342 10.8475 23.1832 11.1012 23.0039L16.445 19.2281C16.6987 19.0488 17.0497 19.1092 17.229 19.3629Z"
                              fill="currentColor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M18.7711 19.3629C18.9504 19.1092 19.3014 19.0488 19.5551 19.2281L24.8989 23.0039C25.1526 23.1832 25.2129 23.5342 25.0337 23.7879C24.8544 24.0416 24.5034 24.1019 24.2497 23.9227L18.9059 20.1469C18.6522 19.9676 18.5918 19.6166 18.7711 19.3629Z"
                              fill="currentColor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10.7921 15.4233C10.9725 15.1704 11.3238 15.1117 11.5767 15.2921L16.9496 19.125H19.0504L24.4234 15.2921C24.6763 15.1117 25.0276 15.1704 25.208 15.4233C25.3884 15.6762 25.3296 16.0275 25.0767 16.2079L19.5572 20.1454C19.4618 20.2134 19.3476 20.25 19.2305 20.25H16.7696C16.6525 20.25 16.5383 20.2134 16.4429 20.1454L10.9234 16.2079C10.6705 16.0275 10.6117 15.6762 10.7921 15.4233Z"
                              fill="currentColor"
                            />
                          </svg>
                          <span className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary break-all min-w-0 flex-1">
                            ammarsvu91@gmail.com
                          </span>
                        </div>

                        <div className="flex items-start gap-3 w-full">
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="shrink-0"
                          >
                            <rect width="36" height="36" rx="18" fill="#E1EDFB" />
                            <path
                              d="M15.75 25.5V18H20.25V25.5M11.25 15.75L18 10.5L24.75 15.75V24C24.75 24.3978 24.592 24.7794 24.3107 25.0607C24.0294 25.342 23.6478 25.5 23.25 25.5H12.75C12.3522 25.5 11.9706 25.342 11.6893 25.0607C11.408 24.7794 11.25 24.3978 11.25 24V15.75Z"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary break-words min-w-0 flex-1">
                            2154 Abdulaziz Street, Al Olaya District, Riyadh, Saudi Arabia
                          </span>
                        </div>
                      </div>
                    </section>

                    <Separator className="w-full h-px my-2" />

                    {/* Emergency Contact Section */}
                    
                    <section className="flex flex-col gap-4 py-4 px-2">
                      <h3 className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-secondary-dark">
                        {t("Emergency Contact Info")}
                      </h3>
                      <div className="flex items-start gap-3 w-full">
                        <svg
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0"
                        >
                          <rect width="36" height="36" rx="18" fill="#E1EDFB" />
                          <g clipPath="url(#clip0_6375_72054)">
                            <path
                              d="M24.4981 22.6901V24.9401C24.499 25.1489 24.4562 25.3557 24.3725 25.5471C24.2888 25.7385 24.1661 25.9103 24.0122 26.0515C23.8583 26.1927 23.6765 26.3002 23.4787 26.3671C23.2808 26.434 23.0711 26.4589 22.8631 26.4401C20.5552 26.1893 18.3384 25.4007 16.3906 24.1376C14.5785 22.9861 13.0421 21.4497 11.8906 19.6376C10.6231 17.681 9.8343 15.4533 9.58812 13.1351C9.56938 12.9277 9.59402 12.7186 9.66049 12.5213C9.72696 12.3239 9.8338 12.1426 9.97419 11.9888C10.1146 11.835 10.2855 11.7121 10.476 11.628C10.6665 11.5438 10.8724 11.5003 11.0806 11.5001H13.3306C13.6946 11.4965 14.0475 11.6254 14.3234 11.8627C14.5994 12.1001 14.7797 12.4297 14.8306 12.7901C14.9256 13.5101 15.1017 14.2171 15.3556 14.8976C15.4565 15.166 15.4784 15.4578 15.4185 15.7382C15.3587 16.0187 15.2198 16.2762 15.0181 16.4801L14.0656 17.4326C15.1333 19.3102 16.688 20.8649 18.5656 21.9326L19.5181 20.9801C19.722 20.7784 19.9795 20.6395 20.26 20.5796C20.5404 20.5198 20.8322 20.5417 21.1006 20.6426C21.7811 20.8965 22.4881 21.0726 23.2081 21.1676C23.5724 21.219 23.9052 21.4025 24.143 21.6832C24.3809 21.9639 24.5072 22.3223 24.4981 22.6901Z"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
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
                        <span className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary break-words min-w-0 flex-1">
                          Mohammed Zaki, Father +963933348151
                        </span>
                      </div>
                    </section>
                  </CardContent>
                </Card>
              </aside>

              {/* Main Content Section */}
              <section className="flex flex-col gap-4 w-full max-w-full min-w-0 flex-1">
                {/* Account Information Card */}
                <Card className="flex flex-col w-full max-w-full bg-background-primary rounded-[16px] p-4 sm:p-4">
                  <CardContent
                    dir={local === "en" ? "ltr" : "rtl"}
                    className="w-full max-w-full p-0"
                  >
                    <h2 className="font-lato font-bold text-base leading-[124%] tracking-[0] text-primary-default mb-4">
                      {t("Account Information")}
                    </h2>

                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full max-w-full">
                      {/* First Column */}
                      <div className="flex flex-col gap-3 w-full lg:w-1/2 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                          <h4 className="font-lato font-semibold text-sm sm:text-base leading-[124%] tracking-[0] text-text-primary sm:w-[120px] shrink-0">
                            {t("User Name")}
                          </h4>
                          <h5 className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary break-words">
                            Ammar Al Sawwa
                          </h5>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                          <h4 className="font-lato font-semibold text-sm sm:text-base leading-[124%] tracking-[0] text-text-primary sm:w-[120px] shrink-0">
                            {t("Role")}
                          </h4>
                          <h5 className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary break-words">
                            {t("Admin")}
                          </h5>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                          <h4 className="font-lato font-semibold text-sm sm:text-base leading-[124%] tracking-[0] text-text-primary sm:w-[120px] shrink-0">
                            {t("Workplace")}
                          </h4>
                          <h5 className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary break-words">
                            TCT {t("Complex")} - X-Ray {t("Clinic")}
                          </h5>
                        </div>
                      </div>

                      {/* Second Column */}
                      <div className="flex flex-col gap-3 w-full lg:w-1/2 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                          <h4 className="font-lato font-semibold text-sm sm:text-base leading-[124%] tracking-[0] text-text-primary sm:w-[165px] shrink-0">
                            {t("Account Status")}
                          </h4>
                          <SwitchWithLabel />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                          <h4 className="font-lato font-semibold text-sm sm:text-base leading-[124%] tracking-[0] text-text-primary sm:w-[165px] shrink-0">
                            {t("Account Creation Date")}
                          </h4>
                          <h5 className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary break-words">
                            {t("April")} 28, 2024
                          </h5>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                          <h4 className="font-lato font-semibold text-sm sm:text-base leading-[124%] tracking-[0] text-text-primary sm:w-[165px] shrink-0">
                            {t("Last Modified Date")}
                          </h4>
                          <h5 className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary break-words">
                            {t("April")} 28, 2025
                          </h5>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                          <h4 className="font-lato font-semibold text-sm sm:text-base leading-[124%] tracking-[0] text-text-primary sm:w-[165px] shrink-0">
                            {t("Last Login Date & Time")}
                          </h4>
                          <h5 className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary break-words">
                            {t("May")} 22, 2025 | 23:49
                          </h5>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Employment Information Card */}
                <Card className="flex flex-col w-full max-w-full bg-background-primary rounded-[16px] p-4 sm:p-4">
                  <CardContent
                    dir={local === "en" ? "ltr" : "rtl"}
                    className="w-full max-w-full p-0"
                  >
                    <h2 className="font-lato font-bold text-base leading-[124%] tracking-[0] text-primary-default mb-4">
                      {t("Employment information")}
                    </h2>
                    <div className="flex flex-col gap-6 w-full max-w-full">
                      {/* Job Details */}
                      <div className="flex flex-col lg:flex-row gap-4 w-full">
                        <h2 className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-secondary-dark lg:w-[108px] shrink-0">
                          {t("Job Details")}
                        </h2>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full min-w-0">
                          <div className="flex flex-col gap-1 min-w-0">
                            <span className="font-lato font-bold text-sm leading-[125%] tracking-[0] text-text-primary">
                              {t("Job Title")}
                            </span>
                            <span className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary break-words">
                              {t("Manager")}
                            </span>
                          </div>
                          <div className="flex flex-col gap-1 min-w-0">
                            <span className="font-lato font-bold text-sm leading-[125%] tracking-[0] text-text-primary">
                              {t("Date of Hire")}
                            </span>
                            <span className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary break-words">
                              {t("April")} 27, 2025
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Working Days */}
                      <div className="flex flex-col gap-4 w-full max-w-full">
                        <span className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-secondary-dark">
                          {t("Working Days")}
                        </span>

                        <div className="w-full overflow-x-auto">
                          <div className="min-w-[320px]">
                            <Table className="w-full">
                              <TableHeader>
                                <TableRow className="grid grid-cols-3 w-full">
                                  <TableHead className="text-center p-2">
                                    <span className="font-lato font-semibold text-xs sm:text-sm leading-[125%] tracking-[0] text-text-primary">
                                      {t("Days")}
                                    </span>
                                  </TableHead>
                                  <TableHead className="text-center p-2">
                                    <span className="font-lato font-semibold text-xs sm:text-sm leading-[125%] tracking-[0] text-text-primary">
                                      {t("Shift")} 1
                                    </span>
                                  </TableHead>
                                  <TableHead className="text-center p-2">
                                    <span className="font-lato font-semibold text-xs sm:text-sm leading-[125%] tracking-[0] text-text-primary">
                                      {t("Shift")} 2
                                    </span>
                                  </TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {workingDaysData.map((day, index) => (
                                  <TableRow
                                    key={index}
                                    className="grid grid-cols-3 w-full h-[38px] border-b border-border-light"
                                  >
                                    <TableCell className="text-center flex items-center justify-center p-1">
                                      <span className="font-lato font-regular text-xs leading-[124%] tracking-[0] text-text-primary">
                                        {t(`${day.day}`)}
                                      </span>
                                    </TableCell>
                                    <TableCell className="text-center flex items-center justify-center p-1">
                                      <span className="font-lato font-regular text-xs leading-[124%] tracking-[0] text-text-primary break-words">
                                        {t(`${day.shift1}`)}
                                      </span>
                                    </TableCell>
                                    <TableCell className="text-center flex items-center justify-center p-1">
                                      <span className="font-lato font-regular text-xs leading-[124%] tracking-[0] text-text-primary break-words">
                                        {t(`${day.shift2}`)}
                                      </span>
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Documents Card */}
                <Card className="flex flex-col w-full max-w-full bg-background-primary rounded-[16px] p-4 sm:p-4">
                  <CardContent
                    dir={local === "en" ? "ltr" : "rtl"}
                    className="w-full max-w-full p-0"
                  >
                    <h3 className="font-lato font-semibold text-base leading-[124%] tracking-[0] text-primary-default mb-4">
                      {t("Documents")}
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-full">
                      {documentsData.map((doc, index) => (
                        <Card
                          key={index}
                          className="flex gap-3 min-h-[48px] px-3 py-2 bg-background-tertiary rounded-[16px] w-full max-w-full"
                        >
                          <div className="flex w-[38px] h-[38px] items-center justify-center bg-app-primary rounded-[10px] shrink-0">
                            <FileTextIcon className="w-5 h-5" />
                          </div>

                          <div className="flex flex-col justify-center gap-1 min-w-0 flex-1">
                            <h4 className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary truncate">
                              {t(`${doc.title}`)}
                            </h4>

                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-lato font-regular text-xs leading-[124%] tracking-[0] text-text-secondary">
                                E
                                <span className="font-lato font-bold text-xs leading-[124%] tracking-[0] text-text-secondary">
                                  {doc.date}
                                </span>
                              </span>
                              <div className="w-[4px] h-[4px] bg-border-light rounded-sm shrink-0" />
                              <span className="font-lato font-regular text-xs leading-[124%] tracking-[0] text-text-secondary">
                                {doc.size}
                              </span>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>
          </main>
        </CardContent>
      </Card>
    </div>
  );
};