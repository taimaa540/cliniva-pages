import { BellIcon, FileTextIcon } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Separator } from "../../../components/ui/separator";
import TranslateIcon from "@mui/icons-material/Translate";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useLanguage } from "../../../lib/LanguageContext";
import SwitchWithLabel from "../../CommonComponents/SwitchLabel";
import Toggle from "../../../components/ui/SwitchToggel";
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

export const ViewStaffDetails = (): JSX.Element => {
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
            {t("Staff")}
          </h1>
          <p className="flex gap-[8px] font-lato font-semibold text-sm text-text-primary leading-[125%] tracking-[0]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21 12C21 12.4142 20.6642 12.75 20.25 12.75L3.75 12.75C3.33579 12.75 3 12.4142 3 12C3 11.5858 3.33579 11.25 3.75 11.25L20.25 11.25C20.6642 11.25 21 11.5858 21 12Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.0303 4.71967C11.3232 5.01256 11.3232 5.48744 11.0303 5.78033L4.81066 12L11.0303 18.2197C11.3232 18.5126 11.3232 18.9874 11.0303 19.2803C10.7374 19.5732 10.2626 19.5732 9.96967 19.2803L3.21967 12.5303C2.92677 12.2374 2.92677 11.7626 3.21967 11.4697L9.96967 4.71967C10.2626 4.42678 10.7374 4.42678 11.0303 4.71967Z"
                fill="currentColor"
              />
            </svg>
            {t("View Staff Member details")}
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
      <Card className="flex flex-col h-full items-start gap-5 p-[20px] pr-0 relative w-full rounded-2xl overflow-hidden bg-background-tertiary">
        <CardContent className="w-full overflow-y-auto scroll-x-hidden pr-[20px] ">
          <main className="flex flex-col gap-[20px] w-full items-end rounded-2xl">
            <div className="flex gap-[16px]">
      
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
                {t('Edit')}
              </button>
            </div>
            <div className="flex gap-[20px] w-full">
              <aside
                dir={local === "en" ? "ltr" : "rtl"}
                className="w-[277px] h-[880px] bg-background-primary rounded-[16px] py-[22px] px-[8px] shadow-[0px_20px_24px_0px_#0A0D121A]"
              >



                <Card className=" w-full">
                  <CardContent className="flex flex-col w-[245px]">
                    <section className="flex flex-col items-center justify-center gap-[24px] h-[208px]">
                      <div className="w-[100px] h-[100px] bg-[#A5C8F2] rounded-[50px]" />
                      <div>
                        <h2 className="font-lato font-bold text-lg leading-[120%] tracking-[0] text-text-primary">
                          Ammar Al Sawwa
                        </h2>
                        <div className="flex items-center justify-center gap-[6px] mt-[6px]">
                          <span className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary">
                            US-001
                          </span>
                          <div className=" w-[4px] h-[4px] bg-border-light rounded-sm" />
                          <span className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-primary">
                            {t('Staff')}
                          </span>
                        </div>
                      </div>
                    </section>

                    <Separator className=" w-full h-px " />

                    <section className="flex flex-col gap-[16px] pt-[24px] pb-[42px] px-[12px] h-[282]">
                      <h3 className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-secondary-dark">
                        {t("Profile & Identity Info")}
                      </h3>
                      <div className="inline-flex flex-col items-start gap-4 px-[4px]">
                        {personalInfoData.map((item, index) => (
                          <div
                            key={index}
                            className="grid grid-cols-[110px_1fr] gap-4"
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

                    <section className="flex flex-col gap-[16px] py-[24px] px-[12px]">
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
                          className={`absolute top-[57px] ${local === "ar" ? "left-[5px]" : "right-[5px]"} `}
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
                            fill="CurrentColor"
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


             <Card className="flex flex-col items-start w-full h-[316px] bg-background-primary rounded-[16px] p-[16px]">
  <CardContent
    dir={local === "en" ? "ltr" : "rtl"}
    className="w-full"
  >
    <h2 className="font-lato font-bold text-base leading-[124%] tracking-[0] text-primary-default">
      {t("Account Information")}
    </h2>

    <div className="flex flex-nowrap items-start w-full gap-[min(70.17px,4vw)] mt-[18px] overflow-hidden min-w-0">
      
      {/* العمود الأول */}
      <div className="grid gap-x-16 gap-y-[16px] min-w-0 flex-shrink">
               <div className="flex ">
          <h4 className="font-lato font-semibold w-[172px] text-base leading-[124%] tracking-[0] text-text-primary">
            {t('User ID')}
          </h4>
        <div  className="font-lato text-[14px] w-24 font-regular leading-[125%] tracking-[0] text-text-primary">
     US-0001
          
</div>
        </div>

                       <div className="flex ">
          <h4 className="font-lato font-semibold  w-[172px] text-base leading-[124%] tracking-[0] text-text-primary">
            {t('Full Name')}
          </h4>
        <div  className="font-lato text-[14px] w-96 font-regular leading-[125%] tracking-[0] text-text-primary">
  Ammar Mohammed  Al Sawwa
          
</div>
        </div>
        {/* User Name */}
        <div className="grid grid-cols-[108px_1fr] w-[431px] gap-x-16">
          <div>
            <h4 className="font-lato w-[172px] font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
              {t('User Name')}
            </h4>
          </div>
          <h5 className="font-lato text-[14px] w-96 font-regular leading-[125%] tracking-[0] text-text-primary">
            Ammar Al Sawwa
          </h5>
        </div>

 

      

          {/* Role */}
          <div className="flex gap-y-[16px] ">
        <h4 className="font-lato w-[172px] font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
          {t('Role')}
        </h4>
        <h5 className="font-lato gap-y-[16px] font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
          {t('Admin')}
        </h5>
</div>

                <div className="flex ">
          <h4 className="font-lato font-semibold   w-[172px] text-base leading-[124%] tracking-[0] text-text-primary">
            {t('User Type')}
          </h4>
        <div  className="font-lato text-[14px] w-24 font-regular leading-[125%] tracking-[0] text-text-primary">
  {t('Staff')}
          
</div>
        </div>
        {/* Workplace */}
        <div className="flex ">
        <h4 className="font-lato w-[172px] font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
          {t('Workplace')}
        </h4>
        <h5 className="font-lato font-regular text-[14px] leading-[125%] tracking-[0] text-text-primary">
TCT Complex - X-Ray Clinic
        </h5>
        </div>
      </div>

      {/* العمود الثاني */}
      <div className="grid grid-cols-[165px_1fr] gap-[16px] min-w-0 flex-shrink">
                       
          <h4 className="font-lato font-semibold  w-28 text-base leading-[124%] tracking-[0] text-text-primary">
            {t('Account Status')}
          </h4>
        <div  className="font-lato text-[14px] w-8 font-regular leading-[125%] tracking-[0] text-text-primary">
           {t('Active')}
          
</div>
       


        {/* Account Creation Date */}
        <h4 className="font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
          {t('Account Creation Date')}
        </h4>
        <h5 className="font-lato text-[14px] font-regular  leading-[125%] tracking-[0] text-text-primary">
          {t('April')} 28, 2024
        </h5>

        {/* Last Modified Date */}
        <h4 className="font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
          {t('Last Modified Date')}
        </h4>
        <h5 className="font-lato font-regular text-[14px] leading-[125%] tracking-[0] text-text-primary">
          {t('April')} 28, 2025
        </h5>

        {/* Last Login Date */}
        <h4 className="font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
          {t('Last Login Date & Time')}
        </h4>
        <h5 className="font-lato font-regular text-[14px] leading-[125%] tracking-[0] text-text-primary">
          {t('May')} 22, 2025 | 23:49
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
                      {t("Employment information")}
                    </h2>
                    <div className="mt-[16px] flex flex-col gap-[24px]">
                      <div className="flex items-center gap-[16px]">
                        <h2 className="w-[108px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-secondary-dark">
                          {t('Job Details')}
                        </h2>
                        <div className="flex gap-[410px]">
                          <div className="flex gap-[16px]">
                            <span className="w-[108px] font-lato font-bold text-sm leading-[125%] tracking-[0] text-text-primary">
                              {t("Job Title")}
                            </span>
                            <span className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                              {t("Manager")}
                            </span>
                          </div>
                          <div className="flex gap-[16px]">
                            <span className="w-[108px] font-lato font-bold text-sm leading-[125%] tracking-[0] text-text-primary">
                              {t("Date of Hire")}
                            </span>
                            <span className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                              {t('April')} 27, 2025
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="inline-flex items-start gap-4 ">
                        <span className="w-[108px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-secondary-dark">
                          {t("Working Days")}
                        </span>

                        <div className="flex flex-col w-full items-start">
                          <Table>
                            <TableHeader className="flex items-center justify-between w-full">
                              <TableRow className="flex items-center justify-between w-full">
                                <TableHead className="w-[62px] text-center">
                                  <span className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                                    {t("Days")}
                                  </span>
                                </TableHead>
                                <TableHead className="w-[106px] text-center">
                                  <span className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                                    {t("Shift")} 1
                                  </span>
                                </TableHead>
                                <TableHead className="w-[126px] text-center">
                                  <span className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                                    {t("Shift")} 2
                                  </span>
                                </TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {workingDaysData.map((day, index) => (
                                <TableRow
                                  key={index}
                                  className="flex items-center justify-between w-full h-[38px] mt-[8px] border-b border-border-light "
                                >
                                  <TableCell className="w-[62px] text-center">
                                    <span className="font-lato font-regular text-xs leading-[124%] tracking-[0] text-text-primary">
                                      {t(`${day.day}`)}
                                    </span>
                                  </TableCell>
                                  <TableCell className="w-[122px]">
                                    <span className="font-lato font-regular text-xs leading-[124%] tracking-[0] text-text-primary">
                                      {t(`${day.shift1}`)}
                                    </span>
                                  </TableCell>
                                  <TableCell className="w-[128px]">
                                    <span className="font-lato font-regular text-xs leading-[124%] tracking-[0] text-text-primary">
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
                  </CardContent>
                </Card>
                <Card className="flex flex-col items-start w-full bg-background-primary rounded-[16px] p-[16px]">
                  <CardContent
                    dir={local === "en" ? "ltr" : "rtl"}
                    className="w-full"
                  >
                    <div className="">
                      <h3 className="font-lato font-semibold text-base leading-[124%] tracking-[0] text-primary-default">
                        {t("Documents")}
                      </h3>
                      <div className="grid grid-cols-[400px_1fr] gap-x-[32px] gap-y-[16px]  mt-[16px]">
                        {documentsData.map((doc, index) => (
                          <Card
                            key={index}
                            className="flex gap-[12px] h-[48px] px-[12px] py-[5px] bg-background-tertiary rounded-[16px]"
                          >
                            <CardContent className="flex w-[38px] h-[38px] items-center justify-center gap-2.5 px-0 py-px relative bg-app-primary rounded-[10px] p-0">
                              <FileTextIcon className="relative w-5 h-5" />
                            </CardContent>

                            <div className="flex flex-col items-start gap-1.5 relative flex-1 grow">
                              <h4 className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                                {t(`${doc.title}`)}
                              </h4>

                              <div className="inline-flex items-center gap-4">
                                <span className="font-lato font-regular text-xs leading-[124%] tracking-[0] text-text-secondary">
                                  E<span className="font-lato font-bold text-xs leading-[124%] tracking-[0] text-text-secondary">{doc.date}</span>
                                </span>
                                <div className=" w-[4px] h-[4px] bg-border-light rounded-sm" />
                                <span className="font-lato font-regular text-xs leading-[124%] tracking-[0] text-text-secondary ">
                                  {doc.size}
                                </span>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
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
