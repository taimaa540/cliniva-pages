import { ArrowLeftIcon, BellIcon, FileTextIcon } from "lucide-react";
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

import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../lib/LanguageContext";
import SwitchWithLabel from "../../CommonComponents/SwitchLabel";
import { SideBar } from "../../CommonComponents/SideBarPlan2";
import Toggle from "../../../components/ui/SwitchToggel";
const personalInfoData = [
  { label: "Gender", value: "Male" },
  { label: "Date of Birth", value: "Nov 20, 1994" },
  { label: "Nationality", value: "Sy" },
  { label: "Card ID", value: "02200075921" },
  { label: "Marital Status", value: "Married" },
  { label: "children Number", value: "1" },
];
import { Edit2Icon } from "lucide-react";
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
  { title: "Contract", date: " May 01, 2026 ", size: "00.5 MB" },
  { title: "CV / Resume", date: " May 30, 2028", size: "1.0 MB" },
  { title: "Work Permit", date: " Mar 01, 2027", size: "0.7 MB" },
  { title: "Certifications", date: " Mar 01, 2028", size: "0.4 MB" },
];
import { ThemeToggle } from "../../../components/theme/ThemeSwitcher";
export const ViewDoctorDetails = (): JSX.Element => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpe7] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  // التحقق من حجم الشاشة لتطبيق السلوك على الموبايل فقط
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
                  {t("Doctors")}
                </h1>
                   <Link to='/ViewDoctorList'><div className="flex gap-1 items-center ">
                    
                                    <ArrowLeftIcon className="relative w-4 h-4 pt-1" />
                                 
                    <p className="text-sm md:text-base text-on-surface-primary">
                  {t("View Doctor details")}
                </p></div>   </Link>
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
                  {t("Doctors")}
                </h1>
                                <Link to='/ViewDoctorList'><div className="flex gap-2 items-center ">
                    
                                    <ArrowLeftIcon className="relative w-5 h-5 pt-1" />
                                 
                    <p className="text-sm md:text-base text-on-surface-primary">
                  {t("View Doctor details")}
                </p></div>   </Link>
       
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
            <main className="flex flex-col gap-[20px] w-full items-end rounded-2xl">
              <div className="flex justify-end" dir={local === 'ar' ? 'rtl' : 'ltr'}>
                <Link to="/ViewDoctorList/ViewDoctorDetails/EditDoctorDetials" >
                  <Button
                    className="
                      flex items-center justify-center gap-2
                      w-[140px] sm:w-[150px] md:w-[180px] lg:w-[200px]
                      h-9 sm:h-10 md:h-11 lg:h-10
                      bg-secondary-dark text-text-inverse rounded-[20px]
                      font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)]
                      text-xs sm:text-sm md:text-base lg:text-base
                      leading-[var(--btn-14px-medium-line-height)]
                      tracking-[var(--btn-14px-medium-letter-spacing)]
                      [font-style:var(--btn-14px-medium-font-style)]
                      self-end
                    "
                  >
                    <Edit2Icon
                      className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 text-text-inverse"
                    />
                    Edit
                  </Button></Link>

              </div>



             <div className={`gap-[20px] relative w-full max-w-full  ${isMobile && !isOpen1 ? "grid" : "grid grid-cols-4"} `}>


                <aside className="flex-1 col-span-1 " >


                  {(!isMobile) && (<Card className={`flex flex-col items-center w-full bg-background-primary rounded-[16px] p-[16px]
               
                transition-all duration-300 overflow-hidden
               
              `}
                  >





                    {/* المحتوى يظهر إذا مفتوح أو على شاشة كبيرة */}

                    <CardContent className="flex flex-col w-full">
                      <section className="flex flex-col items-center justify-center gap-[24px] h-[208px]">
                        <div className="w-[100px] h-[100px] bg-[#A5C8F2] rounded-[50px]" />
                        <div>
                          <h2 className="font-lato font-bold text-lg leading-[120%] tracking-[0] text-text-primary">
                            Ammar Al Sawwa
                          </h2>
                          <div className="flex items-center justify-center gap-[6px] mt-[6px]">
                            <span className="font-lato font-regular text-[clamp(12px,2vw,14px)]  leading-[130%] tracking-[0] text-text-secondary">
                              US-001
                            </span>
                            <div className=" w-[4px] h-[4px] bg-border-light rounded-sm" />
                            <span className="font-lato font-regular text-[clamp(12px,2vw,14px)]  leading-[130%] tracking-[0] text-text-primary">
                              {t('Staff')}
                            </span>
                          </div>
                        </div>
                      </section>

                      <Separator className=" w-full h-px " />

                      <section className="flex flex-col gap-[16px] pt-[24px] pb-[42px] px-[12px] h-full">
                        <h3 className="font-lato font-semibold text-[clamp(14px,2vw,16px)] leading-[125%] tracking-[0] text-secondary-dark">
                          {t("Profile & Identity Info")}
                        </h3>
                        <div className="inline-flex flex-col items-start gap-4 px-[4px]">
                          {personalInfoData.map((item, index) => (
                            <div
                              key={index}
                              className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-4"
                            >
                              <span className="font-lato font-semibold text-[clamp(14px,2vw,16px)] leading-[125%] tracking-[0] text-text-primary lg:w-[110px]">
                                {t(`${item.label}`)}
                              </span>
                              <span className="font-lato font-regular text-[clamp(12px,2vw,14px)] leading-[125%] tracking-[0] text-text-primary">
                                {t(`${item.value}`)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </section>


                      <Separator className=" w-full h-px" />


                      <section className="flex flex-col gap-[16px] py-[24px] px-[12px]">
                        <h3 className="font-lato font-semibold text-[clamp(14px,2vw,16px)] leading-[125%] tracking-[0] text-secondary-dark">
                          {t("Contact Info")}
                        </h3>
                        <div className="relative grid gap-x-[12px] gap-y-[16px] items-start px-[4px]">
                          <div className="flex flex-col items-center gap-2 md:flex-col sm:items-start lg:flex-row lg:items-center lg:gap-4">
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
                            <span className="font-lato font-semibold text-[clamp(12px,2vw,14px)] leading-[130%] tracking-[0] text-text-primary break-words w-full">
                              +966 50 123 4567
                            </span>
                          </div>

                          <div className="flex flex-col items-center gap-2 md:flex-col sm:items-start lg:flex-row lg:items-center lg:gap-4">
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
                            <span className="font-lato font-semibold text-[clamp(12px,2vw,14px)] leading-[130%] tracking-[0] text-text-primary break-words w-full">
                              ammarsvu91@gmail.com
                            </span>
                          </div>

                          <div className="flex flex-col items-center gap-2 md:flex-col sm:items-start lg:flex-row lg:items-center lg:gap-4">
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
                            <span className="font-lato font-semibold text-[clamp(12px,2vw,14px)] leading-[130%] tracking-[0] text-text-primary break-words w-full">
                              2154 Abdulaziz Street, Al Olaya District, Riyadh, Saudi Arabia
                            </span>
                          </div>
                        </div>
                      </section>



                      <Separator className=" w-full h-px" />

           <section className="flex flex-col gap-[16px] py-[24px] px-[12px]">
  <h3 className="font-lato font-semibold text-[clamp(14px,2vw,16px)] leading-[125%] tracking-[0] text-secondary-dark">
    {t("Emergency Contact Info")}
  </h3>
  <div className="relative grid gap-x-[12px] gap-y-[16px] items-start px-[4px]">
    <div className="flex flex-col items-center gap-2 md:flex-col md:items-start sm:items-start lg:flex-row lg:items-center lg:gap-4">
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
            d="M19.2727 17C19.1439 17 19.0361 16.9548 18.9491 16.8645C18.8621 16.7741 18.8185 16.6624 18.8182 16.5294C18.8179 16.3964 18.8615 16.2847 18.9491 16.1943C19.0367 16.104 19.1445 16.0588 19.2727 16.0588H19.5455L20.4432 12.9647C20.5038 12.7608 20.6156 12.5981 20.7786 12.4767C20.9417 12.3553 21.1215 12.2944 21.3182 12.2941H22.6818C22.8788 12.2941 23.0588 12.355 23.2218 12.4767C23.3848 12.5984 23.4965 12.7611 23.5568 12.9647L24.4545 16.0588H24.7273C24.8561 16.0588 24.9641 16.104 25.0514 16.1943C25.1386 16.2847 25.1821 16.3964 25.1818 16.5294C25.1815 16.6624 25.1379 16.7743 25.0509 16.8649C24.9639 16.9556 24.8561 17.0006 24.7273 17H19.2727Z"
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

      <span className="font-lato font-semibold text-[clamp(12px,2vw,14px)] leading-[130%] tracking-[0] text-text-primary break-words w-full">
        Mohammed Zaki, Father +963933348151
      </span>
    </div>
  </div>
</section>

                    </CardContent>

                  </Card>)}



                </aside>



                <section className="flex  flex-col gap-[16px] flex-1 items-start col-span-3">


                  {(!isMobile) && (  <Card
                    className={`
        flex flex-col bg-background-primary rounded-[16px] p-[16px]
        transition-all duration-300 overflow-hidden
        ${isMobile && !isOpen2 ? "h-[60px] w-full" : "h-auto w-full"}
      `}
                  >
                    {/* عنوان الكارد + زر الفتح/الإغلاق على الموبايل */}
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => isMobile && setIsOpen2(!isOpen2)}
                    >
                      <h2 className="font-lato font-bold text-base leading-[124%] tracking-[0] text-primary-default">
                        {t("Account Information")}
                      </h2>
                      {isMobile && <span className="text-xl">{isOpen2 ? <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5303 7.78033C13.2374 8.07322 12.7626 8.07322 12.4697 7.78033L7 2.31066L1.53033 7.78033C1.23744 8.07322 0.762562 8.07322 0.469669 7.78033C0.176777 7.48744 0.176777 7.01256 0.469669 6.71967L6.46967 0.71967C6.76256 0.426776 7.23744 0.426776 7.53033 0.71967L13.5303 6.71967C13.8232 7.01256 13.8232 7.48744 13.5303 7.78033Z" fill="#414651" />
                      </svg>
                        : <ChevronDownIcon className="w-5 h-5  sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-text-primary" />}</span>}
                    </div>

                    {/* المحتوى يظهر إذا مفتوح أو على شاشة كبيرة */}
                    {(isOpen2 || !isMobile) && (
                      <CardContent dir={local === "en" ? "ltr" : "rtl"} className="w-full h-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-7 gap-x-[min(70px,4vw)] w-full h-full pb-4 mt-4">

                          {/* العمود الأول */}
                          <div className="grid gap-y-4 min-w-0">
                            {/* User Name */}
                            <div className="flex flex-col lg:flex-row gap-1">
                              <h4 className="font-lato font-semibold text-base text-text-primary flex-shrink-0 min-w-[120px]">
                                {t('User Name')}
                              </h4>
                              <h5 className="font-lato text-sm text-text-primary flex-1 truncate">
                                Ammar Al Sawwa
                              </h5>
                            </div>

                            {/* Account Status + Toggle */}
                            <div className="flex flex-col lg:flex-row gap-1">
                              <h4 className="font-lato font-semibold text-base text-text-primary flex-shrink-0 min-w-[120px]">
                                {t('Account Status')}
                              </h4>
                              <div className="flex-1">
                                <Toggle />
                              </div>
                            </div>

                            {/* Assigned Permissions */}
                            <div className="flex flex-col lg:flex-row gap-1">
                              <h4 className="font-lato font-semibold text-base text-text-primary flex-shrink-0 min-w-[120px]">
                                {t("assignedPermissions")}
                              </h4>
                              <div className="flex-1 text-sm">
                                <p className="break-words">
                                  View All Clinics and Departments, Manage Staff Accounts, Access Reports and Analytics, Manage Appointments, Approve/Reject Requests, Configure System Settings, Assign Roles and Permissions, View Billing and Financial Reports, Internal Communication Access
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* العمود الثاني */}
                          <div className="grid gap-y-4 min-w-0">
                            {[
                              { label: 'Account Creation Date', value: 'April 28, 2024' },
                              { label: 'Last Modified Date', value: 'April 28, 2025' },
                              { label: 'Last Login Date & Time', value: 'May 22, 2025 | 23:49' },
                              { label: 'Role', value: 'Admin' },
                              { label: 'Workplace', value: 'TCT Complex - X-Ray Clinic' }
                            ].map((item, idx) => (
                              <div key={idx} className="flex flex-col lg:flex-row gap-1">
                                <h4 className="font-lato font-semibold text-base text-text-primary flex-shrink-0 min-w-[120px]">
                                  {t(item.label)}
                                </h4>
                                <h5 className="font-lato text-sm text-text-primary flex-1 truncate">
                                  {item.value}
                                </h5>
                              </div>
                            ))}
                          </div>

                        </div>
                      </CardContent>

                    )}
                  </Card>)}




                  {(!isMobile) && (<Card className={`
  flex flex-col bg-background-primary rounded-[16px] p-[16px]
  transition-all duration-300
  max-w-full 
 h-auto w-full

`}>
                    {/* عنوان الكارد + زر الفتح/الإغلاق على الموبايل */}
                    <div

                    >
                      <h2 className="font-lato font-bold text-[clamp(14px,2vw,16px)]  leading-[124%] tracking-[0] text-primary-default">
                        {t("Employment information")}
                      </h2>
                      {isMobile && <span className="text-xl">{isOpen3 ? <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5303 7.78033C13.2374 8.07322 12.7626 8.07322 12.4697 7.78033L7 2.31066L1.53033 7.78033C1.23744 8.07322 0.762562 8.07322 0.469669 7.78033C0.176777 7.48744 0.176777 7.01256 0.469669 6.71967L6.46967 0.71967C6.76256 0.426776 7.23744 0.426776 7.53033 0.71967L13.5303 6.71967C13.8232 7.01256 13.8232 7.48744 13.5303 7.78033Z" fill="#414651" />
                      </svg>
                        : <ChevronDownIcon className="w-5 h-5  sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-text-primary" />}</span>}
                    </div>

                    <CardContent
                      dir={local === "en" ? "ltr" : "rtl"}
                      className="w-full"
                    >

                      <div className="mt-[16px] flex flex-col gap-[24px]">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 w-full">

                          <h2 className="w-[108px] font-lato font-semibold text-[clamp(12px,2vw,14px)]  leading-[125%] text-secondary-dark">
                            {t('Job Details')}
                          </h2>

                          <div className="flex flex-col lg:flex-row gap-y-6   ">
                            <div className="flex gap-4">
                              <span className="w-[108px] font-lato font-bold text-[clamp(12px,2vw,14px)]  leading-[125%] text-text-primary">
                                {t("Job Title")}
                              </span>
                              <span className="font-lato font-regular text-[clamp(12px,2vw,14px)] w-full max-w-[404px] leading-[125%] text-text-primary">
                                {t("Manager")}
                              </span>
                            </div>

                            <div className="flex gap-4">
                              <span className="w-[108px] font-lato font-bold text-[clamp(12px,2vw,14px)]  leading-[125%] text-text-primary">
                                {t("Date of Hire")}
                              </span>
                              <span className="font-lato w-24 font-regular text-[clamp(12px,2vw,14px)]  leading-[125%] text-text-primary">
                                {t('April')} 27, 2025
                              </span>
                            </div>
                          </div>
                        </div>


                        <div className="flex flex-col lg:flex-row items-start gap-4 w-full">
                          <span className="w-[108px] font-lato font-semibold text-[clamp(12px,2vw,14px)]  leading-[125%] tracking-[0] text-secondary-dark">
                            {t("Working Days")}
                          </span>

                          <div className="flex flex-col w-full items-start">
                            <div className="w-full overflow-x-auto">
                              <table className="w-full border-collapse">
                                <thead className="bg-gray-50">
                                  <tr>
                                    <th className="w-[62px] text-center font-lato font-semibold text-[clamp(12px,2vw,14px)]  text-text-primary py-2">
                                      {t("Days")}
                                    </th>
                                    <th className="w-[106px] text-center font-lato font-semibold text-[clamp(12px,2vw,14px)]  text-text-primary py-2">
                                      {t("Shift")} 1
                                    </th>
                                    <th className="w-[126px] text-center font-lato font-semibold text-[clamp(12px,2vw,14px)]  text-text-primary py-2">
                                      {t("Shift")} 2
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {workingDaysData.map((day, index) => (
                                    <tr key={index} className="border-b border-border-light h-[38px]">
                                      <td className="w-[62px] text-center font-lato font-regular text-[clamp(12px,2vw,14px)]  text-text-primary">
                                        {t(day.day)}
                                      </td>
                                      <td className="w-[122px] text-center font-lato font-regular text-[clamp(12px,2vw,14px)]  text-text-primary">
                                        {t(day.shift1)}
                                      </td>
                                      <td className="w-[128px] text-center font-lato font-regular text-[clamp(12px,2vw,14px)]  text-text-primary">
                                        {t(day.shift2)}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>








                          </div>
                        </div>

                      </div>
                    </CardContent>





                  </Card>)}






                  {(!isMobile) && (<Card
                    className={`
                     flex flex-col bg-background-primary rounded-[16px] p-[16px]
                     transition-all duration-300 overflow-hidden
                      h-auto w-full
                   `}
                  >
                    {/* عنوان الكارد + زر الفتح/الإغلاق على الموبايل */}
                    <div

                    >
                      <h2 className="font-lato font-bold text-[clamp(14px,2vw,16px)]  leading-[124%] tracking-[0] text-primary-default">
                        {t("Documents")}
                      </h2>

                    </div>


                    <CardContent
                      dir={local === "en" ? "ltr" : "rtl"}
                      className="w-full"
                    >
                      <div className="">

                        <div
                          className="
                 grid grid-cols-1 
             
                 md:grid-cols-1 
                
                 
                 lg:grid-cols-2
                 gap-x-[32px] gap-y-[16px] mt-[16px]
                 
               "
                        >
                          {documentsData.map((doc, index) => (
                            <Card
                              key={index}
                              className="flex gap-[12px] w-[min(100%,360px)] h-[48px] px-[12px]  py-[5px] bg-background-tertiary rounded-[16px]"
                            >
                              <CardContent className="flex w-[38px] h-[38px] items-center justify-center gap-2.5 px-0 py-px relative bg-app-primary rounded-[10px] p-0">
                                <FileTextIcon className="relative w-5 h-5" />
                              </CardContent>

                              <div className="flex flex-col items-start gap-1.5 relative flex-1 grow">
                                <h4 className="font-lato font-semibold text-[clamp(12px,2vw,14px)]  leading-[130%] tracking-[0] text-text-primary">
                                  {t(`${doc.title}`)}
                                </h4>

                                <div className="inline-flex items-center gap-4">
                                  <span className="font-lato font-regular text-[clamp(12px,2vw,14px)]  leading-[124%] tracking-[0] text-text-secondary">
                                    <span className="font-lato font-bold text-[clamp(12px,2vw,14px)]  leading-[124%] tracking-[0] text-text-secondary">
                                      {doc.date}
                                    </span>
                                  </span>
                                  <div className="w-[4px] h-[4px] bg-border-light rounded-sm" />
                                  <span className="font-lato font-regular text-[clamp(12px,2vw,14px)]  leading-[124%] tracking-[0] text-text-secondary">
                                    {doc.size}
                                  </span>
                                </div>
                              </div>
                            </Card>
                          ))}
                        </div>

                      </div>
                    </CardContent>



                  </Card>)}
                </section></div>


              <div className={` relative w-full max-w-full gap-[16px] ${isMobile && !isOpen1 ? "grid" : "flex"} `}>

                <aside className="flex-1 gap-[16px]" >

                  {(isMobile) && (
                    
                    <Card className={`flex flex-col items-center gap-[16px] mb-5 w-full bg-background-primary rounded-[16px] p-[16px]
               
                transition-all duration-300 overflow-hidden
               
              `}
                  >
                    {/* عنوان الكارد + زر الفتح/الإغلاق على الموبايل */}
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => isMobile && setIsOpen1(!isOpen1)}
                    >

                             {(isMobile) && (
                                     <Card className={`flex flex-col items-center w-full bg-background-primary rounded-[16px] p-[16px]
                                 
                                  transition-all duration-300 overflow-hidden
                                 
                                `}
                                    >
                  
                  
                  
                  
                  
                                      {/* المحتوى يظهر إذا مفتوح أو على شاشة كبيرة */}
                  
                                      <CardContent className="flex flex-col w-full">
                                        <section className="flex flex-col items-center justify-center gap-[24px] h-[208px]">
                                          <div className="w-[100px] h-[100px] bg-[#A5C8F2] rounded-[50px]" />
                                          <div>
                                            <h2 className="font-lato font-bold text-lg leading-[120%] tracking-[0] text-text-primary">
                                              Ammar Al Sawwa
                                            </h2>
                                            <div className="flex items-center justify-center gap-[6px] mt-[6px]">
                                              <span className="font-lato font-regular text-[clamp(12px,2vw,14px)]  leading-[130%] tracking-[0] text-text-secondary">
                                                US-001
                                              </span>
                                              <div className=" w-[4px] h-[4px] bg-border-light rounded-sm" />
                                              <span className="font-lato font-regular text-[clamp(12px,2vw,14px)]  leading-[130%] tracking-[0] text-text-primary">
                                                {t('Staff')}
                                              </span>
                                            </div>
                                          </div>
                                        </section>
                  
                                        <Separator className=" w-full h-px " />
                  
                                        <section className="flex flex-col gap-[16px] pt-[24px] pb-[42px] px-[12px] h-full">
                                          <h3 className="font-lato font-semibold text-[clamp(14px,2vw,16px)] leading-[125%] tracking-[0] text-secondary-dark">
                                            {t("Profile & Identity Info")}
                                          </h3>
                                          <div className="inline-flex flex-col items-start gap-4  px-[4px]">
                                            {personalInfoData.map((item, index) => (
                                              <div
                                                key={index}
                                                className="flex gap-4"
                                              >
                                                <span className="font-lato font-semibold text-[clamp(14px,2vw,16px)] leading-[125%] tracking-[0] text-text-primary w-[110px]">
                                                  {t(`${item.label}`)}
                                                </span>
                                                <span className="font-lato font-regular text-[clamp(12px,2vw,14px)] leading-[125%] tracking-[0] text-text-primary">
                                                  {t(`${item.value}`)}
                                                </span>
                                              </div>
                                            ))}
                                          </div>
                                        </section>
                  
                  
                                        <Separator className=" w-full h-px" />
                  
                  
                                        <section className="flex flex-col gap-[16px] py-[24px] px-[12px]">
                                          <h3 className="font-lato font-semibold text-[clamp(14px,2vw,16px)] leading-[125%] tracking-[0] text-secondary-dark">
                                            {t("Contact Info")}
                                          </h3>
                                          <div className="relative grid gap-x-[12px] gap-y-[16px] items-start px-[4px]">
                                            <div className="flex  items-center gap-2 flex-row lg:items-center lg:gap-4">
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
                                              <span className="font-lato font-semibold text-[clamp(12px,2vw,14px)] leading-[130%] tracking-[0] text-text-primary break-words w-full">
                                                +966 50 123 4567
                                              </span>
                                            </div>
                  
                                            <div className="flex items-center gap-2 flex-row lg:items-center lg:gap-4">
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
                                              <span className="font-lato font-semibold text-[clamp(12px,2vw,14px)] leading-[130%] tracking-[0] text-text-primary break-words w-full">
                                                ammarsvu91@gmail.com
                                              </span>
                                            </div>
                  
                                            <div className="flex  items-center gap-2  flex-row lg:items-center lg:gap-4">
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
                                              <span className="font-lato font-semibold text-[clamp(12px,2vw,14px)] leading-[130%] tracking-[0] text-text-primary break-words w-full">
                                                2154 Abdulaziz Street, Al Olaya District, Riyadh, Saudi Arabia
                                              </span>
                                            </div>
                                          </div>
                                        </section>
                  
                  
                  
                                        <Separator className=" w-full h-px" />
                  
                             <section className="flex flex-col gap-[16px] py-[24px] px-[12px]">
                    <h3 className="font-lato font-semibold text-[clamp(14px,2vw,16px)] leading-[125%] tracking-[0] text-secondary-dark">
                      {t("Emergency Contact Info")}
                    </h3>
                    <div className="relative grid gap-x-[12px] gap-y-[16px] items-start px-[4px]">
                      <div className="flex   gap-2  flex-row items-center lg:gap-4">
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
                              d="M19.2727 17C19.1439 17 19.0361 16.9548 18.9491 16.8645C18.8621 16.7741 18.8185 16.6624 18.8182 16.5294C18.8179 16.3964 18.8615 16.2847 18.9491 16.1943C19.0367 16.104 19.1445 16.0588 19.2727 16.0588H19.5455L20.4432 12.9647C20.5038 12.7608 20.6156 12.5981 20.7786 12.4767C20.9417 12.3553 21.1215 12.2944 21.3182 12.2941H22.6818C22.8788 12.2941 23.0588 12.355 23.2218 12.4767C23.3848 12.5984 23.4965 12.7611 23.5568 12.9647L24.4545 16.0588H24.7273C24.8561 16.0588 24.9641 16.104 25.0514 16.1943C25.1386 16.2847 25.1821 16.3964 25.1818 16.5294C25.1815 16.6624 25.1379 16.7743 25.0509 16.8649C24.9639 16.9556 24.8561 17.0006 24.7273 17H19.2727Z"
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
                  
                        <span className="font-lato font-semibold text-[clamp(12px,2vw,14px)] leading-[130%] tracking-[0] text-text-primary break-words w-full">
                          Mohammed Zaki, Father +963933348151
                        </span>
                      </div>
                    </div>
                  </section>
                  
                                      </CardContent>
                  
                                    </Card>)}


                    </div>





                  </Card>)}




     
                </aside>


                <section className="flex flex-col gap-[16px] flex-1 items-start">


                  {(isMobile) && (  <Card
                    className={`
        flex flex-col bg-background-primary rounded-[16px] p-[16px]
        transition-all duration-300 overflow-hidden
        ${isMobile && !isOpen2 ? "h-[60px] w-full" : "h-auto w-full"}
      `}
                  >
                    {/* عنوان الكارد + زر الفتح/الإغلاق على الموبايل */}
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => isMobile && setIsOpen2(!isOpen2)}
                    >
                      <h2 className="font-lato font-bold text-base leading-[124%] tracking-[0] text-primary-default">
                        {t("Account Information")}
                      </h2>
                      {isMobile && <span className="text-xl">{isOpen2 ? <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5303 7.78033C13.2374 8.07322 12.7626 8.07322 12.4697 7.78033L7 2.31066L1.53033 7.78033C1.23744 8.07322 0.762562 8.07322 0.469669 7.78033C0.176777 7.48744 0.176777 7.01256 0.469669 6.71967L6.46967 0.71967C6.76256 0.426776 7.23744 0.426776 7.53033 0.71967L13.5303 6.71967C13.8232 7.01256 13.8232 7.48744 13.5303 7.78033Z" fill="#414651" />
                      </svg>
                        : <ChevronDownIcon className="w-5 h-5  sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-text-primary" />}</span>}
                    </div>

                    {/* المحتوى يظهر إذا مفتوح أو على شاشة كبيرة */}
                    {(isOpen2 || !isMobile) && (
                      <CardContent dir={local === "en" ? "ltr" : "rtl"} className="w-full h-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-7 gap-x-[min(70px,4vw)] w-full h-full pb-4 mt-4">

                          {/* العمود الأول */}
                          <div className="grid gap-y-4 min-w-0">
                            {/* User Name */}
                            <div className="flex flex-col lg:flex-row gap-1">
                              <h4 className="font-lato font-semibold text-base text-text-primary flex-shrink-0 min-w-[120px]">
                                {t('User Name')}
                              </h4>
                              <h5 className="font-lato text-sm text-text-primary flex-1 truncate">
                                Ammar Al Sawwa
                              </h5>
                            </div>

                            {/* Account Status + Toggle */}
                            <div className="flex flex-col lg:flex-row gap-1">
                              <h4 className="font-lato font-semibold text-base text-text-primary flex-shrink-0 min-w-[120px]">
                                {t('Account Status')}
                              </h4>
                              <div className="flex-1">
                                <Toggle />
                              </div>
                            </div>

                            {/* Assigned Permissions */}
                            <div className="flex flex-col lg:flex-row gap-1">
                              <h4 className="font-lato font-semibold text-base text-text-primary flex-shrink-0 min-w-[120px]">
                                {t("assignedPermissions")}
                              </h4>
                              <div className="flex-1 text-sm">
                                <p className="break-words">
                                  View All Clinics and Departments, Manage Staff Accounts, Access Reports and Analytics, Manage Appointments, Approve/Reject Requests, Configure System Settings, Assign Roles and Permissions, View Billing and Financial Reports, Internal Communication Access
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* العمود الثاني */}
                          <div className="grid gap-y-4 min-w-0">
                            {[
                              { label: 'Account Creation Date', value: 'April 28, 2024' },
                              { label: 'Last Modified Date', value: 'April 28, 2025' },
                              { label: 'Last Login Date & Time', value: 'May 22, 2025 | 23:49' },
                              { label: 'Role', value: 'Admin' },
                              { label: 'Workplace', value: 'TCT Complex - X-Ray Clinic' }
                            ].map((item, idx) => (
                              <div key={idx} className="flex flex-col lg:flex-row gap-1">
                                <h4 className="font-lato font-semibold text-base text-text-primary flex-shrink-0 min-w-[120px]">
                                  {t(item.label)}
                                </h4>
                                <h5 className="font-lato text-sm text-text-primary flex-1 truncate">
                                  {item.value}
                                </h5>
                              </div>
                            ))}
                          </div>

                        </div>
                      </CardContent>

                    )}
                  </Card>)}




                  {(isMobile) && (<Card className={`
  flex flex-col bg-background-primary rounded-[16px] p-[16px]
  transition-all duration-300
  max-w-full w-full
  ${isMobile && !isOpen3 ? "h-[60px] w-full" : "h-auto w-full"}

`}>
                    {/* عنوان الكارد + زر الفتح/الإغلاق على الموبايل */}
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => isMobile && setIsOpen3(!isOpen3)}
                    >
                      <h2 className="font-lato font-bold text-[clamp(14px,2vw,16px)]  leading-[124%] tracking-[0] text-primary-default">
                        {t("Employment information")}
                      </h2>
                      {isMobile && <span className="text-xl">{isOpen3 ? <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5303 7.78033C13.2374 8.07322 12.7626 8.07322 12.4697 7.78033L7 2.31066L1.53033 7.78033C1.23744 8.07322 0.762562 8.07322 0.469669 7.78033C0.176777 7.48744 0.176777 7.01256 0.469669 6.71967L6.46967 0.71967C6.76256 0.426776 7.23744 0.426776 7.53033 0.71967L13.5303 6.71967C13.8232 7.01256 13.8232 7.48744 13.5303 7.78033Z" fill="#414651" />
                      </svg>
                        : <ChevronDownIcon className="w-5 h-5  sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-text-primary" />}</span>}
                    </div>
                    {(isOpen3) && (
                      <CardContent
                        dir={local === "en" ? "ltr" : "rtl"}
                        className="w-full"
                      >

                        <div className="mt-[16px] flex flex-col gap-[24px]">
                          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 w-full">

                            <h2 className="w-[108px] font-lato font-semibold text-[clamp(12px,2vw,14px)]  leading-[125%] text-secondary-dark">
                              {t('Job Details')}
                            </h2>

                            <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-[404px]  ">
                              <div className="flex gap-4">
                                <span className="w-[108px] font-lato font-bold text-[clamp(12px,2vw,14px)]  leading-[125%] text-text-primary">
                                  {t("Job Title")}
                                </span>
                                <span className="font-lato font-regular text-[clamp(12px,2vw,14px)]  leading-[125%] text-text-primary">
                                  {t("Manager")}
                                </span>
                              </div>

                              <div className="flex gap-4">
                                <span className="w-[108px] font-lato font-bold text-[clamp(12px,2vw,14px)]  leading-[125%] text-text-primary">
                                  {t("Date of Hire")}
                                </span>
                                <span className="font-lato w-24 font-regular text-[clamp(12px,2vw,14px)]  leading-[125%] text-text-primary">
                                  {t('April')} 27, 2025
                                </span>
                              </div>
                            </div>
                          </div>


                          <div className="flex flex-col lg:flex-row items-start gap-4 w-full">
                            <span className="w-[108px] font-lato font-semibold text-[clamp(12px,2vw,14px)]  leading-[125%] tracking-[0] text-secondary-dark">
                              {t("Working Days")}
                            </span>

                            <div className="flex flex-col w-full items-start">
                              <div className="w-full overflow-x-auto">
                                <table className="w-full border-collapse">
                                  <thead className="bg-gray-50">
                                    <tr>
                                      <th className="w-[62px] text-center font-lato font-semibold text-[clamp(12px,2vw,14px)]  text-text-primary py-2">
                                        {t("Days")}
                                      </th>
                                      <th className="w-[106px] text-center font-lato font-semibold text-[clamp(12px,2vw,14px)]  text-text-primary py-2">
                                        {t("Shift")} 1
                                      </th>
                                      <th className="w-[126px] text-center font-lato font-semibold text-[clamp(12px,2vw,14px)]  text-text-primary py-2">
                                        {t("Shift")} 2
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {workingDaysData.map((day, index) => (
                                      <tr key={index} className="border-b border-border-light h-[38px]">
                                        <td className="w-[62px] text-center font-lato font-regular text-[clamp(12px,2vw,14px)]  text-text-primary">
                                          {t(day.day)}
                                        </td>
                                        <td className="w-[122px] text-center font-lato font-regular text-[clamp(12px,2vw,14px)]  text-text-primary">
                                          {t(day.shift1)}
                                        </td>
                                        <td className="w-[128px] text-center font-lato font-regular text-[clamp(12px,2vw,14px)]  text-text-primary">
                                          {t(day.shift2)}
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>








                            </div>
                          </div>

                        </div>
                      </CardContent>)}





                  </Card>)}






                  {(isMobile) && (<Card
                    className={`
                     flex flex-col bg-background-primary rounded-[16px] p-[16px]
                     transition-all duration-300 overflow-hidden
                     ${isMobile && !isOpen4 ? "h-[60px] w-full" : "h-auto w-full"}
                   `}
                  >
                    {/* عنوان الكارد + زر الفتح/الإغلاق على الموبايل */}
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => isMobile && setIsOpen4(!isOpen4)}
                    >
                      <h2 className="font-lato font-bold text-[clamp(14px,2vw,16px)]  leading-[124%] tracking-[0] text-primary-default">
                        {t("Documents")}
                      </h2>
                      {isMobile && <span className="text-xl">{isOpen4 ? <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5303 7.78033C13.2374 8.07322 12.7626 8.07322 12.4697 7.78033L7 2.31066L1.53033 7.78033C1.23744 8.07322 0.762562 8.07322 0.469669 7.78033C0.176777 7.48744 0.176777 7.01256 0.469669 6.71967L6.46967 0.71967C6.76256 0.426776 7.23744 0.426776 7.53033 0.71967L13.5303 6.71967C13.8232 7.01256 13.8232 7.48744 13.5303 7.78033Z" fill="#414651" />
                      </svg>
                        : <ChevronDownIcon className="w-5 h-5  sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-text-primary" />}</span>}
                    </div>

                    {(isOpen4) && (
                      <CardContent
                        dir={local === "en" ? "ltr" : "rtl"}
                        className="w-full"
                      >
                        <div className="">

                          <div
                            className="
                 grid grid-cols-1 
             
                 md:grid-cols-1 
                
                 
                 lg:grid-cols-2
                 gap-x-[32px] gap-y-[16px] mt-[16px]
                 
               "
                          >
                            {documentsData.map((doc, index) => (
                              <Card
                                key={index}
                                className="flex gap-[12px] w-[min(100%,360px)] h-[48px] px-[12px]  py-[5px] bg-background-tertiary rounded-[16px]"
                              >
                                <CardContent className="flex w-[38px] h-[38px] items-center justify-center gap-2.5 px-0 py-px relative bg-app-primary rounded-[10px] p-0">
                                  <FileTextIcon className="relative w-5 h-5" />
                                </CardContent>

                                <div className="flex flex-col items-start gap-1.5 relative flex-1 grow">
                                  <h4 className="font-lato font-semibold text-[clamp(12px,2vw,14px)]  leading-[130%] tracking-[0] text-text-primary">
                                    {t(`${doc.title}`)}
                                  </h4>

                                  <div className="inline-flex items-center gap-4">
                                    <span className="font-lato font-regular text-[clamp(12px,2vw,14px)]  leading-[124%] tracking-[0] text-text-secondary">
                                      <span className="font-lato font-bold text-[clamp(12px,2vw,14px)]  leading-[124%] tracking-[0] text-text-secondary">
                                        {doc.date}
                                      </span>
                                    </span>
                                    <div className="w-[4px] h-[4px] bg-border-light rounded-sm" />
                                    <span className="font-lato font-regular text-[clamp(12px,2vw,14px)]  leading-[124%] tracking-[0] text-text-secondary">
                                      {doc.size}
                                    </span>
                                  </div>
                                </div>
                              </Card>
                            ))}
                          </div>

                        </div>
                      </CardContent>)}



                  </Card>)}
                </section>
              </div>
            </main>
          </CardContent>
        </Card>
      </div></div>
  );
};
