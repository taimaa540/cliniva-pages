import {
  BellIcon,
  CalendarIcon,

} from "lucide-react";
import React from "react";
import TimeRangePicker from "../../CommonComponents/timeRangePicker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import Avatar from "@mui/material/Avatar";

import { Edit2Icon } from "lucide-react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import { FacebookIcon } from "lucide-react";
import { XIcon } from "lucide-react";
import { InstagramIcon } from "lucide-react";
  import { LinkedinIcon } from "lucide-react";
  
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../components/ui/pagination";
import Toggle from "../../../components/ui/SwitchToggel";
import { SideBarPlan2 } from "../../CommonComponents/SideBarPlan2";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import ReusableCollapsible from "../../../components/ui/Collapsibles";
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import Checkbox from '@mui/material/Checkbox';
import { ThemeToggle } from "../../../components/theme/ThemeSwitcher";
const capacityData = [
  {
    title: "Staff Capacity",
    value: "250/300",
    icon: (
      <svg className="w-full" viewBox="0 0 48 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.9842 20.6097C23.9946 19.2713 25.5209 17.3215 26.3374 15.0485C27.1539 12.7756 27.2173 10.3002 26.5182 7.9885C25.8191 5.67676 24.3945 3.65138 22.4553 2.21186C20.516 0.772343 18.165 -0.00488281 15.7498 -0.00488281C13.3347 -0.00488281 10.9837 0.772343 9.04442 2.21186C7.10517 3.65138 5.68065 5.67676 4.98152 7.9885C4.28239 10.3002 4.34577 12.7756 5.16228 15.0485C5.9788 17.3215 7.50509 19.2713 9.51547 20.6097C5.8789 21.95 2.77317 24.4302 0.661724 27.6803C0.550753 27.8452 0.473673 28.0306 0.434964 28.2256C0.396254 28.4206 0.396688 28.6213 0.436239 28.8161C0.47579 29.0109 0.55367 29.1959 0.665351 29.3604C0.777033 29.5248 0.920289 29.6654 1.08679 29.774C1.25329 29.8826 1.43972 29.9571 1.63524 29.993C1.83076 30.0289 2.03146 30.0256 2.22569 29.9832C2.41992 29.9409 2.6038 29.8604 2.76663 29.7464C2.92947 29.6324 3.06802 29.4871 3.17422 29.3191C4.5362 27.2243 6.39989 25.5029 8.59604 24.3113C10.7922 23.1196 13.2512 22.4955 15.7498 22.4955C18.2485 22.4955 20.7075 23.1196 22.9037 24.3113C25.0998 25.5029 26.9635 27.2243 28.3255 29.3191C28.5455 29.646 28.8853 29.8733 29.2716 29.9517C29.6578 30.0301 30.0594 29.9534 30.3895 29.7381C30.7196 29.5228 30.9517 29.1862 31.0356 28.8011C31.1195 28.4161 31.0485 28.0135 30.838 27.6803C28.7265 24.4302 25.6208 21.95 21.9842 20.6097ZM7.49985 11.2497C7.49985 9.61799 7.9837 8.02293 8.89022 6.66623C9.79675 5.30952 11.0852 4.2521 12.5927 3.62768C14.1002 3.00325 15.759 2.83988 17.3593 3.1582C18.9597 3.47653 20.4297 4.26227 21.5835 5.41605C22.7373 6.56983 23.523 8.03984 23.8413 9.64019C24.1597 11.2405 23.9963 12.8993 23.3719 14.4068C22.7474 15.9143 21.69 17.2028 20.3333 18.1093C18.9766 19.0158 17.3815 19.4997 15.7498 19.4997C13.5626 19.4972 11.4656 18.6272 9.91896 17.0806C8.37232 15.5339 7.50233 13.437 7.49985 11.2497ZM46.9011 29.7559C46.5679 29.9732 46.1621 30.0492 45.7728 29.9673C45.3836 29.8854 45.0428 29.6522 44.8255 29.3191C43.4651 27.223 41.6017 25.5009 39.4051 24.3098C37.2085 23.1186 34.7486 22.4963 32.2499 22.4997C31.852 22.4997 31.4705 22.3416 31.1892 22.0603C30.9079 21.779 30.7499 21.3975 30.7499 20.9997C30.7499 20.6019 30.9079 20.2203 31.1892 19.939C31.4705 19.6577 31.852 19.4997 32.2499 19.4997C33.4648 19.4985 34.6645 19.2291 35.7632 18.7105C36.8619 18.192 37.8326 17.4372 38.6058 16.5C39.379 15.5629 39.9356 14.4665 40.236 13.2893C40.5363 12.112 40.573 10.883 40.3433 9.68996C40.1136 8.49693 39.6232 7.36935 38.9072 6.3878C38.1913 5.40625 37.2673 4.59495 36.2014 4.01187C35.1355 3.42879 33.954 3.08833 32.7413 3.01481C31.5286 2.94128 30.3146 3.13652 29.1861 3.58656C29.0021 3.6661 28.804 3.70795 28.6036 3.70965C28.4031 3.71134 28.2044 3.67284 28.019 3.59642C27.8337 3.52 27.6656 3.40721 27.5246 3.26471C27.3836 3.12222 27.2726 2.95291 27.1982 2.76679C27.1237 2.58067 27.0873 2.38151 27.0912 2.18109C27.095 1.98067 27.1389 1.78305 27.2204 1.5999C27.3019 1.41676 27.4193 1.25181 27.5656 1.11479C27.712 0.977776 27.8843 0.871479 28.0724 0.802182C30.6551 -0.227848 33.5278 -0.264914 36.1362 0.698132C38.7447 1.66118 40.9041 3.5561 42.1978 6.01734C43.4916 8.47858 43.8281 11.3317 43.1423 14.0264C42.4565 16.7211 40.7971 19.0663 38.4842 20.6097C42.1208 21.95 45.2265 24.4302 47.338 27.6803C47.5552 28.0135 47.6313 28.4193 47.5494 28.8086C47.4674 29.1978 47.2342 29.5386 46.9011 29.7559Z" fill="#414651" />
      </svg>


    ),
    bgColor: "bg-secondary-light",
  },
  {
    title: "Doctors Capacity",
    value: "178/200",
    icon: (
      <svg className="w-full" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33.75 24C33.75 24.445 33.618 24.88 33.3708 25.25C33.1236 25.62 32.7722 25.9084 32.361 26.0787C31.9499 26.249 31.4975 26.2936 31.061 26.2068C30.6246 26.12 30.2237 25.9057 29.909 25.591C29.5943 25.2763 29.38 24.8754 29.2932 24.439C29.2064 24.0025 29.251 23.5501 29.4213 23.139C29.5916 22.7278 29.88 22.3764 30.25 22.1292C30.62 21.882 31.055 21.75 31.5 21.75C32.0967 21.75 32.669 21.9871 33.091 22.409C33.5129 22.831 33.75 23.4033 33.75 24ZM32.8969 31.3669C32.5674 33.4909 31.4898 35.4273 29.8585 36.827C28.2272 38.2266 26.1494 38.9972 24 39H19.5C17.1138 38.9975 14.8261 38.0485 13.1388 36.3612C11.4515 34.6739 10.5025 32.3862 10.5 30V22.4044C7.60037 22.0391 4.93372 20.6281 3.0005 18.4363C1.06727 16.2445 0.000366759 13.4226 0 10.5V1.5C0 1.10218 0.158036 0.720645 0.43934 0.43934C0.720645 0.158036 1.10218 0 1.5 0H6C6.39782 0 6.77936 0.158036 7.06066 0.43934C7.34196 0.720645 7.5 1.10218 7.5 1.5C7.5 1.89782 7.34196 2.27936 7.06066 2.56066C6.77936 2.84196 6.39782 3 6 3H3V10.5C2.99989 11.6921 3.2366 12.8723 3.69638 13.9721C4.15616 15.0719 4.82984 16.0695 5.67832 16.9068C6.5268 17.7441 7.53317 18.4045 8.63899 18.8497C9.74481 19.2948 10.928 19.5159 12.12 19.5C17.0156 19.4363 21 15.3281 21 10.3444V3H18C17.6022 3 17.2206 2.84196 16.9393 2.56066C16.658 2.27936 16.5 1.89782 16.5 1.5C16.5 1.10218 16.658 0.720645 16.9393 0.43934C17.2206 0.158036 17.6022 0 18 0H22.5C22.8978 0 23.2794 0.158036 23.5607 0.43934C23.842 0.720645 24 1.10218 24 1.5V10.3444C24 16.5019 19.4006 21.6487 13.5 22.4025V30C13.5 31.5913 14.1321 33.1174 15.2574 34.2426C16.3826 35.3679 17.9087 36 19.5 36H24C25.3625 35.9977 26.6839 35.5327 27.7475 34.681C28.811 33.8293 29.5537 32.6416 29.8538 31.3125C28.0422 30.9056 26.446 29.8412 25.3739 28.3252C24.3019 26.8093 23.8303 24.9496 24.0503 23.106C24.2704 21.2624 25.1664 19.5659 26.5652 18.3449C27.9639 17.1238 29.7658 16.465 31.6222 16.4959C33.4787 16.5268 35.2577 17.2451 36.615 18.512C37.9723 19.7789 38.8115 21.5043 38.9701 23.3542C39.1287 25.2041 38.5954 27.0471 37.4736 28.5265C36.3517 30.006 34.721 31.0167 32.8969 31.3631V31.3669ZM36 24C36 23.11 35.7361 22.24 35.2416 21.4999C34.7471 20.7599 34.0443 20.1831 33.2221 19.8425C32.3998 19.5019 31.495 19.4128 30.6221 19.5865C29.7492 19.7601 28.9474 20.1887 28.318 20.818C27.6887 21.4474 27.2601 22.2492 27.0865 23.1221C26.9128 23.995 27.0019 24.8998 27.3425 25.7221C27.6831 26.5443 28.2599 27.2471 28.9999 27.7416C29.74 28.2361 30.61 28.5 31.5 28.5C32.6935 28.5 33.8381 28.0259 34.682 27.182C35.5259 26.3381 36 25.1935 36 24Z" fill="#414651" />
      </svg>



    ),
    bgColor: "bg-secondary-light",
  },
  {
    title: "Patients Capacity",
    value: "2500/3500",
    icon: (
      <svg className="w-full" viewBox="0 0 48 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33 13.4997C33 13.8975 32.842 14.279 32.5607 14.5603C32.2794 14.8416 31.8978 14.9997 31.5 14.9997H16.5C16.1022 14.9997 15.7206 14.8416 15.4393 14.5603C15.158 14.279 15 13.8975 15 13.4997C15 13.1018 15.158 12.7203 15.4393 12.439C15.7206 12.1577 16.1022 11.9997 16.5 11.9997H31.5C31.8978 11.9997 32.2794 12.1577 32.5607 12.439C32.842 12.7203 33 13.1018 33 13.4997ZM31.5 17.9997H16.5C16.1022 17.9997 15.7206 18.1577 15.4393 18.439C15.158 18.7203 15 19.1018 15 19.4997C15 19.8975 15.158 20.279 15.4393 20.5603C15.7206 20.8416 16.1022 20.9997 16.5 20.9997H31.5C31.8978 20.9997 32.2794 20.8416 32.5607 20.5603C32.842 20.279 33 19.8975 33 19.4997C33 19.1018 32.842 18.7203 32.5607 18.439C32.2794 18.1577 31.8978 17.9997 31.5 17.9997ZM48 13.4997V17.9997C48 19.591 47.3679 21.1171 46.2426 22.2423C45.1174 23.3675 43.5913 23.9997 42 23.9997H41.0269C39.6787 26.9622 36.9413 29.5178 32.9213 31.5297C30.1744 32.8768 27.2664 33.8667 24.2681 34.4753C24.0909 34.5078 23.9091 34.5078 23.7319 34.4753C20.7336 33.8667 17.8256 32.8768 15.0787 31.5297C11.0625 29.5178 8.32125 26.9622 6.97312 23.9997H6C4.4087 23.9997 2.88258 23.3675 1.75736 22.2423C0.632141 21.1171 0 19.591 0 17.9997V13.4997C0 11.9084 0.632141 10.3822 1.75736 9.25701C2.88258 8.1318 4.4087 7.49966 6 7.49966H6.15937C6.30117 7.07061 6.53804 6.67914 6.85232 6.35447C7.16661 6.0298 7.55017 5.78032 7.97437 5.62466L22.9744 0.17028C23.6371 -0.0697807 24.3629 -0.0697807 25.0256 0.17028L40.0256 5.62466C40.4498 5.78032 40.8334 6.0298 41.1477 6.35447C41.462 6.67914 41.6988 7.07061 41.8406 7.49966H42C43.5913 7.49966 45.1174 8.1318 46.2426 9.25701C47.3679 10.3822 48 11.9084 48 13.4997ZM6.10312 20.9997C6.03462 20.5026 6.00017 20.0014 6 19.4997V10.4997C5.20435 10.4997 4.44129 10.8157 3.87868 11.3783C3.31607 11.9409 3 12.704 3 13.4997V17.9997C3 18.7953 3.31607 19.5584 3.87868 20.121C4.44129 20.6836 5.20435 20.9997 6 20.9997H6.10312ZM39 19.4997V8.45403L24 2.99965L9 8.45403V19.4997C9 27.9372 21.9544 31.0347 24 31.4697C26.0419 31.0347 39 27.9372 39 19.4997ZM45 13.4997C45 12.704 44.6839 11.9409 44.1213 11.3783C43.5587 10.8157 42.7956 10.4997 42 10.4997V19.4997C41.9998 20.0014 41.9654 20.5026 41.8969 20.9997H42C42.7956 20.9997 43.5587 20.6836 44.1213 20.121C44.6839 19.5584 45 18.7953 45 17.9997V13.4997Z" fill="#414651" />
      </svg>

    ),
    bgColor: "bg-secondary-light",
  },
];



const contactInfo = {
  phoneNumbers: "+966 55 123 4567, +966 11 987 6543",
  email: "info@medcaregroup.com",
  physicalAddress: "245, King Fahd Road, Al Olaya, Saudi Arabia, KSA",
  website: "www.medcaregroup.com",
  mapsLocation: "www.medcaregroup.com"
};


const socialMedia = {
  linkedin: "https://www.linkedin.com/company/medcare-group",
  facebook: "https://facebook.com/medcaregroup",
  twitter: "https://twitter.com/medcaregroup",
  instagram: "https://instagram.com/medcaregroup"
};


const companyInfo = {
  logo: "/vector.svg",
  tradeName: "MedCare Group",
  yearEstablished: "2011.",
  SessionSlot: "30 minutes",
  ServicesOffered: "General Consultation,Pediatric Care.",
  goals: "Expand to 50+ clinics by 2027 Implement fully digital patient records",
  PIC: "Dr. Layla Al Saeed",
  Description: "Al Noor Clinic is a multi-specialty clinic offering high-quality care with modern facilities."
};




const doctorsAndStaff = [
  {
    number: 1,
    userId: "444",
    name: "Dr. Ahmed Hassan",
    clinic: "Cardiology Clinic",
    userType: "Doctor",
    status: "Active",
    avatar: "",
  },
  {
    number: 2,
    userId: "6666",
    name: "Dr. Ahmed Hassan",
    clinic: "Cardiology Clinic",
    userType: "Doctor",
    status: "Active",
  },
  {
    number: 3,
    userId: "1234",
    name: "Dr. Ahmed Hassan",
    clinic: "Cardiology Clinic",
    userType: "Doctor",
    status: "Active",
  },
  {
    number: 4,
    userId: "5667",
    name: "Dr. Ahmed Hassan",
    clinic: "Cardiology Clinic",
    userType: "Doctor",
    status: "Active",
  },
];

const workingScheduleData = (t: (key: string) => string) => [
  { day: t("Sunday"), startTime: "09:00", endTime: "16:00" },
  { day: t("Monday"), startTime: "09:00", endTime: "16:00" },
  { day: t("Tuesday"), startTime: "09:00", endTime: "16:00" },
  { day: t("Wednesday"), startTime: "09:00", endTime: "16:00" },
  { day: t("Thursday"), startTime: "09:00", endTime: "16:00" },
  { day: t("Friday"), startTime: "09:00", endTime: "16:00" },
  { day: t("Saturday"), startTime: "09:00", endTime: "16:00" },
];

interface NoDataSectionProps {
  local: string;
  dark: boolean;
  handelDarkClick: () => void;
  handleLanguageClick: () => void;
  onOpenSidebar:()=>void;
}

export const ContentViewDetailsClinicP3 = ({ handleLanguageClick, local, dark, handelDarkClick ,}: NoDataSectionProps): JSX.Element => {
  const { t, i18n } = useTranslation();



  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);
  // حالة منفصلة لكل مكون Collapsible
  const [isOpen, setIsOpen] = useState({
    clinicInfo: true,
    contactInfo: true,
    workingDays: true,
    social: true,
    doctorsStaff: true,
    mapsLocation: true
  });
  const handleToggle = (key: keyof typeof isOpen, open: boolean) => {
    setIsOpen(prev => ({
      ...prev,
      [key]: open
    }))
  };



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
                <SideBarPlan2
        local={local}
        handleLanguageClick={handleLanguageClick}
        handleDarkClick={() => {}}
        isOpen={showSidebar}
        onOpenSidebar={onOpenSidebar}
        onCloseSidebar={onCloseSidebar}
      />
    <div

      className={`flex flex-col w-full overflow-hidden items-start gap-4  py-4  self-stretch relative bg-background-primary
      } `}
    >


            <header className="flex h-[50px] justify-between pl-[4px] pr-0 py-0 self-stretch w-full items-center bg-background-primary">
        {/* زر Hamburger - يظهر فقط على الموبايل */}
            <button
              className="md:hidden p-2 rounded-lg bg-secondary-light"
              onClick={onOpenSidebar} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <h1 className="font-bold text-[clamp(11px,1.1vw,22px)]  text-on-surface-primary">
                 {t("Medical Clinic Details")}
            </h1>
            <p className="text-[clamp(9px,1.1vw,18px)]  text-on-surface-primary">
                  {t("Medical Facilities")}
            </p>
          </div>
        </div>
      
        {/* Right Side */}
        <div className="inline-flex gap-3 flex-[0_0_auto] items-center px-4">
          {/* Notification */}
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
      
          {/* Language Switch */}
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
      
          {/* Theme Toggle */}
          <div className="relative">
            <ThemeToggle />
          </div>
      
          {/* User Info */}
          <div className="items-center gap-3 inline-flex flex-[0_0_auto]">
            <div className="inline-flex items-center w-[40px] h-[40px] bg-app-primary rounded-3xl" />
            <div className="flex-col items-start gap-1 inline-flex">
              <div className="text-sm md:text-base font-bold text-on-surface-primary">
                Anahera Jones
              </div>
              <div className="text-xs md:text-sm text-on-surface-tertiary">
                {t("Admin")}
              </div>
            </div>
          </div>
        </div>
      </header>

 






      <Card className="flex flex-col h-auto items-start gap-6 p-5 mt-[10px] bg-background-tertiary relative self-stretch w-full rounded-2xl overflow-hidden">
        <CardContent className="p-0 w-full overflow-y-auto gap-5 h-auto">
             <div className="flex justify-end" dir={local === 'ar' ? 'rtl' : 'ltr'}>
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
  {t("Edit")}
</Button>

</div>






              <Card
          className="bg-surface-default rounded-2xl  w-full mt-5"
          dir={local === "ar" ? "rtl" : "ltr"}
        >
          <div
            style={{
              fontFamily: "Lato",
              fontWeight: 600,
              fontStyle: "SemiBold",
              fontSize: "16px",
              lineHeight: "124%",
              letterSpacing: "0%",
            }}
            className="text-text-accent font-bold p-5 w-fit text-start"
          >
            <h2>{t("Capacity")}:</h2>
          </div>
        
          <div className="px-4 pb-4">
            <div
              className="
                grid 
                grid-cols-2
                sm:grid-cols-2
                lg:grid-cols-3
                gap-4
                md:gap-8
                justify-items-center  
              "
            >
        {capacityData.map((item, index) => (
          <Card
            key={index}
            className={`
              ${item.bgColor} 
              rounded-[25px] 
              shadow-[0px_2px_8px_#e2f6ec] 
              w-full              // دايمًا يملا عرض العمود
              lg:max-w-[350px]    // على اللابتوب الحد الأقصى 350px
              lg:h-[100px]        // الطول 100px فقط على اللابتوب
            `}
          >
            <CardContent className="flex items-center justify-between p-5 h-full">
              <div className="flex items-center justify-center">
              <div className="grid">
         <div className="font-semibold text-text-primary items-center text-sm sm:text-base md:text-lg lg:text-xl">
          {item.title}
        </div>
        <div className="font-semibold text-text-primary items-center text-xs sm:text-sm md:text-base lg:text-lg">
          {item.value}
        </div>
     
              </div>
                   <div  className="w-12 h-12 sm:w-12 mt-4 sm:h-12 md:w-14 md:h-13">
                {item.icon}
              </div>
              </div>
            
            </CardContent>
          </Card>
        ))}
        
        
        
            </div>
          </div>
        </Card>



          {/* Clinic Information Collapsible */}


          <ReusableCollapsible dir={`${local === "ar" ? "rtl" : "ltr"}`}
            title={t("Clinic Information")}
            initiallyOpen={isOpen.clinicInfo}
            onOpenChange={(open) => handleToggle("clinicInfo", open)}
            content={<div className="px-4 pb-4">  
  {/* Logo */}
  <div className="grid grid-cols-[200px_1fr] pb-5 items-start gap-2">
    <div
      style={{
        fontWeight: 600,
        fontStyle: "SemiBold",
        fontSize: "16px",
        lineHeight: "124%",
        letterSpacing: "0%",
      }}
    >
      <img
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
        src="/logo.png"
      />
    </div>
  </div>

  {/* المعلومات الرئيسية */}
  <div>
    {/* responsive grid → col-1 بالموبايل, col-2 من md وفوق */}
    <div className="grid grid-cols-1 :grid-cols-2 gap-x-8 gap-y-6"> 
      {/* العمود الأول */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
          <span className="min-w-[160px] font-semibold text-text-primary text-[clamp(14px,2vw,16px)]">
            {t("Clinic Name")} :
          </span>
          <span className="text-text-primary font-regular text-[clamp(12px,2vw,16px)]">
            {companyInfo.tradeName}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
          <span className="min-w-[160px] font-semibold text-text-primary text-[clamp(14px,2vw,16px)]">
            {t("Session Slot")}:
          </span>
          <span className="text-text-primary font-regular text-[clamp(12px,2vw,16px)]">
            {companyInfo.SessionSlot}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
          <span className="min-w-[160px] font-semibold text-text-primary text-[clamp(14px,2vw,16px)]">
            {t("Services Offered")}:
          </span>
          <span className="text-text-primary font-regular text-[clamp(12px,2vw,16px)]">
            {companyInfo.ServicesOffered}
          </span>
        </div>
      </div>

      {/* العمود الثاني */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
          <span className="min-w-[160px] font-semibold text-text-primary text-[clamp(14px,2vw,16px)]">
            {t("Year of Establishment")}:
          </span>
          <span className="text-text-primary font-regular text-[clamp(12px,2vw,16px)]">
            3 April 2011
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
          <span className="min-w-[160px] font-semibold text-text-primary text-[clamp(14px,2vw,16px)]">
            {t("PIC")}:
          </span>
          <span className="text-text-primary font-regular text-[clamp(12px,2vw,16px)]">
            Hessa AlMutairi
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
          <span className="min-w-[160px] font-semibold text-text-primary text-[clamp(14px,2vw,16px)]">
            {t("Vision")}:
          </span>
          <span className="text-text-primary font-regular text-[clamp(12px,2vw,16px)]">
            {companyInfo.PIC}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
          <span className="min-w-[160px] font-semibold text-text-primary text-[clamp(14px,2vw,16px)]">
            {t("Description")}:
          </span>
          <span className="text-text-primary font-regular text-[clamp(12px,2vw,16px)]">
            {companyInfo.Description}
          </span>
        </div>
      </div>
    </div>
  </div>

  {/* Created On */}
  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-6">
    <div className="flex items-center gap-2">
      <CalendarIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      <span className="min-w-[130px] font-semibold text-text-primary text-[clamp(14px,2vw,16px)]">
        {t("Created on")}:
      </span>
    </div>
    <span className="text-text-primary font-regular text-[clamp(12px,2vw,16px)]">
      12 March 2023
    </span>
  </div>
</div>

}

          />






          {/* clinic Contact Information Collapsible */}







<ReusableCollapsible dir={`${local === "ar" ? "rtl" : "ltr"}`}
    title={t("Clinic Contact Information")}
            initiallyOpen={isOpen.contactInfo}
            onOpenChange={(open) => handleToggle("contactInfo", open)}
  content={
    <div className="px-4 pb-4">
      {/* grid: عمود واحد بالموبايل، عمودين من md وفوق */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* العمود الأول */}
        <div className="flex flex-col gap-6">
          {/* LinkedIn */}
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-start gap-y-2 md:gap-y-0 md:gap-x-4 lg:gap-x-6">
            {/* أيقونة + لايبل (دايمًا جنب بعض) */}
            <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
              <LinkedinIcon className="text-text-primary w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"/>
              <span className="font-semibold text-[clamp(14px,2vw,16px)]">
                 {t("Phone Numbers")}:
              </span>
            </div>

            {/* المحتوى (يبقى في نفس الـ grid عشان يرجع جانبياً على md+) */}
            <a
              href= {contactInfo.phoneNumbers}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[clamp(12px,2vw,16px)] text-on-surface-primary break-all"
            >
              {contactInfo.phoneNumbers}
            </a>
          </div>

          {/* Facebook */}
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-start gap-y-2 md:gap-y-0 md:gap-x-4 lg:gap-x-6">
            <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
              <FacebookIcon className="text-text-primary w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
              <span className="font-semibold text-[clamp(14px,2vw,16px)]">
              {t("Physical Address")}:
              </span>
            </div>
            <div className="text-[clamp(12px,2vw,16px)] text-on-surface-primary break-words">
               {contactInfo.physicalAddress}
            </div>
          </div>

             <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-start gap-y-2 md:gap-y-0 md:gap-x-4 lg:gap-x-6">
            <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
              <FacebookIcon className="text-text-primary w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
              <span className="font-semibold text-[clamp(14px,2vw,16px)]">
               {t("Maps Location")}:
              </span>
            </div>
            <div className="text-[clamp(12px,2vw,16px)] text-on-surface-primary break-words">
            {contactInfo.mapsLocation}
            </div>
          </div>
        </div>

        {/* العمود الثاني */}
        <div className="flex flex-col gap-6">
          {/* Twitter */}
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-start gap-y-2 md:gap-y-0 md:gap-x-4 lg:gap-x-6">
            <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
              <XIcon className="text-text-primary w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
              <span className="font-semibold text-[clamp(14px,2vw,16px)]">
                  {t("Email")}:
              </span>
            </div>
            <div className="text-[clamp(12px,2vw,16px)] text-on-surface-primary break-words">
              {contactInfo.email}
            </div>
          </div>

          {/* Instagram */}
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-start gap-y-2 md:gap-y-0 md:gap-x-4 lg:gap-x-6">
            <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
              <InstagramIcon className="text-text-primary w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"/>
              <span className="font-semibold text-[clamp(14px,2vw,16px)]">
                  {t("Company Website")}:
              </span>
            </div>
            <div className="text-[clamp(12px,2vw,16px)] text-on-surface-primary break-words">
            {contactInfo.website}
            </div>
          </div>
        </div>
      </div>
    </div>
  }
/>

          










<ReusableCollapsible
  title={t("Social Media Accounts")}
  initiallyOpen={isOpen.social}
  dir={local === "ar" ? "rtl" : "ltr"}
  onOpenChange={(open) => handleToggle("social", open)}
  content={
    <div className="px-4 pb-4">
      {/* grid: عمود واحد بالموبايل، عمودين من md وفوق */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* العمود الأول */}
        <div className="flex flex-col gap-6">
          {/* LinkedIn */}
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-start gap-y-2 md:gap-y-0 md:gap-x-4 lg:gap-x-6">
            {/* أيقونة + لايبل (دايمًا جنب بعض) */}
            <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
              <LinkedinIcon className="text-text-primary w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"/>
              <span className="font-semibold text-[clamp(14px,2vw,16px)]">
                {t("LinkedIn")}:
              </span>
            </div>

            {/* المحتوى (يبقى في نفس الـ grid عشان يرجع جانبياً على md+) */}
            <a
              href={socialMedia.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[clamp(12px,2vw,16px)] text-on-surface-primary break-all"
            >
              {socialMedia.linkedin}
            </a>
          </div>

          {/* Facebook */}
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-start gap-y-2 md:gap-y-0 md:gap-x-4 lg:gap-x-6">
            <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
              <FacebookIcon className="text-text-primary w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
              <span className="font-semibold text-[clamp(14px,2vw,16px)]">
                {t("Facebook")}:
              </span>
            </div>
            <div className="text-[clamp(12px,2vw,16px)] text-on-surface-primary break-words">
              {socialMedia.facebook}
            </div>
          </div>
        </div>

        {/* العمود الثاني */}
        <div className="flex flex-col gap-6">
          {/* Twitter */}
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-start gap-y-2 md:gap-y-0 md:gap-x-4 lg:gap-x-6">
            <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
              <XIcon className="text-text-primary w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
              <span className="font-semibold text-[clamp(14px,2vw,16px)]">
                {t("Twitter")}:
              </span>
            </div>
            <div className="text-[clamp(12px,2vw,16px)] text-on-surface-primary break-words">
              {socialMedia.twitter}
            </div>
          </div>

          {/* Instagram */}
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-start gap-y-2 md:gap-y-0 md:gap-x-4 lg:gap-x-6">
            <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
              <InstagramIcon className="text-text-primary w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"/>
              <span className="font-semibold text-[clamp(14px,2vw,16px)]">
                {t("Instagram")}:
              </span>
            </div>
            <div className="text-[clamp(12px,2vw,16px)] text-on-surface-primary break-words">
              {socialMedia.instagram}
            </div>
          </div>
        </div>
      </div>
    </div>
  }
/>







          {/* Working Days Collapsible */}
          <ReusableCollapsible
            title={t("Working Days")}
            dir={local === "ar" ? "rtl" : "ltr"}
            initiallyOpen={isOpen.workingDays}
            onOpenChange={(open) => handleToggle("workingDays", open)}
            content={
              <div className="px-4 pb-4">
                <div className="bg-surface-default rounded-2xl overflow-x-auto">
                  <Table className="min-w-[320px]">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-text-primary text-start px-2 py-2 text-[clamp(14px,2vw,16px)] sm:text-xs md:text-sm">
                          {t("Working Days")}
                        </TableHead>
                        <TableHead className="text-center text-text-primary px-2 py-2 text-[clamp(14px,2vw,16px)] sm:text-xs md:text-sm">
                          {t("Start Time")}
                        </TableHead>
                        <TableHead className="text-end text-text-primary px-2 py-2 text-[clamp(14px,2vw,16px)] sm:text-xs md:text-sm">
                          {t("End Time")}
                        </TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {workingScheduleData(t).map((schedule, index) => (
                        <TableRow
                          key={index}
                          className="border-b border-[#e4e2dd] h-[40px] sm:h-[48px]"
                        >
                          <TableCell className="text-start  px-2 text-[clamp(12px,2vw,16px)] sm:text-xs md:text-sm">
                            {schedule.day}
                          </TableCell>
                          <TableCell className="text-center px-2 text-[clamp(12px,2vw,16px)] sm:text-xs md:text-sm">
                            {schedule.startTime}
                          </TableCell>
                          <TableCell className="text-end pe-4 text-[clamp(12px,2vw,16px)] sm:text-xs md:text-sm">
                            {schedule.endTime}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            }
          />













          <ReusableCollapsible
            dir={local === "ar" ? "rtl" : "ltr"}
            title={
              <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
                <h2 className="font-title-16px-bold text-primary-dark text-[clamp(10px,2vw,16px)]">
                  {t("Doctors")}
                </h2>
                <h2 className="font-title-16px-bold text-primary-dark text-[clamp(10px,2vw,16px)]">
                  {t("&")}
                </h2>
                <h2 className="font-title-16px-bold text-primary-dark text-[clamp(10px,2vw,16px)]">
                  {t("Staff")}
                </h2>

                <div className="flex items-center gap-1 sm:gap-2 ml-2">
                  <Badge className="bg-secondary-light text-on-surface-primary rounded-[20px] px-1.5 py-0.5 text-[clamp(9px,2vw,14px)]">
                    {t("All")}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-bg text-on-surface-primary rounded-[20px] px-1.5 py-0.5 text-[clamp(9px,2vw,14px)]"
                  >
                    {t("Doctors")}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-bg text-on-surface-primary rounded-[20px] px-1.5 py-0.5 text-[clamp(9px,2vw,14px)]"
                  >
                    {t("Staff")}
                  </Badge>
                </div>
              </div>


            }
            initiallyOpen={isOpen.doctorsStaff}
            onOpenChange={(open) => handleToggle("doctorsStaff", open)}
            content={
              <div className="w-full">
                {/* جدول مع سكرول جانبي */}
                <div className="w-full overflow-x-auto">
                  <Table className="min-w-[700px]">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[58px] text-center font-semibold text-[clamp(14px,2vw,16px)] sm:text-xs md:text-sm">
                          {t("NO")}
                        </TableHead>
                        <TableHead className="text-center font-semibold text-[clamp(14px,2vw,16px)] sm:text-xs md:text-sm">
                          {t("User-ID")}
                        </TableHead>
                        <TableHead className="text-center font-semibold text-[clamp(14px,2vw,16px)] sm:text-xs md:text-sm">
                          {t("Name")}
                        </TableHead>
                        <TableHead className="w-[225px] text-center font-semibold text-[clamp(14px,2vw,16px)] sm:text-xs md:text-sm">
                          {t("Clinic")}
                        </TableHead>
                        <TableHead className="text-center font-semibold text-[clamp(14px,2vw,16px)] sm:text-xs md:text-sm">
                          {t("User Type")}
                        </TableHead>
                        <TableHead className="text-center font-semibold text-[clamp(14px,2vw,16px)] sm:text-xs md:text-sm">
                          {t("Status")}
                        </TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {doctorsAndStaff.map((person) => (
                        <TableRow
                          key={person.number}
                          className="border-b border-[#e4e2dd]"
                        >
                          <TableCell className="text-center font-medium text-[clamp(12px,2vw,16px)] sm:text-xs md:text-sm">
                            {person.number}
                          </TableCell>
                          <TableCell className="text-center font-medium text-[clamp(12px,2vw,16px)] sm:text-xs md:text-sm">
                            {person.userId}
                          </TableCell>
                          <TableCell className="text-center font-medium text-[clamp(12px,2vw,16px)] sm:text-xs md:text-sm">
                            <div className="flex items-center gap-2 justify-center">
                              <Avatar
                                src={person.avatar}
                                alt={person.name}
                                sx={{
                                  width: 28,
                                  height: 28,
                                  bgcolor: !person.avatar
                                    ? "var(--theme-text-accent)"
                                    : "transparent",
                                }}
                              />
                              <span>{person.name}</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-center font-medium text-[clamp(12px,2vw,16px)] sm:text-xs md:text-sm">
                            {person.clinic}
                          </TableCell>
                          <TableCell className="text-center font-medium text-[clamp(12px,2vw,16px)] sm:text-xs md:text-sm">
                            {person.userType}
                          </TableCell>
                          <TableCell className="w-[15%] text-center">
                            <Badge className="bg-secondary-light text-secondary-dark rounded-[20px] sm:w-[92px] h-[20px] sm:h-[24px] flex items-center justify-center mx-auto text-[clamp(14px,2vw,16px)] sm:text-xs">
                              {t("Active")}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {/* Pagination + Showing section */}
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-[clamp(10px,2vw,12px)] text-on-surface-secondary">
                      {t("Showing")}
                    </span>

                    <Select defaultValue="1">
                      <SelectTrigger className="w-auto bg-secondary-light rounded-[20px] border-0 px-2 py-1.5 text-[clamp(10px,2vw,12px)]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                      </SelectContent>
                    </Select>

                    <span className="text-[clamp(10px,2vw,12px)] text-on-surface-secondary">
                      {t("out of 14")}
                    </span>
                  </div>

                  {/* الحاوية الجديدة مع overflow-x-auto */}
                  <div className="max-w-full overflow-x-auto">

                    {/* نسخة الموبايل (تظهر فقط تحت sm) */}
                    <Pagination className="flex sm:hidden justify-center">
                      <PaginationContent className="flex-nowrap gap-2">

                        {/* previous */}
                        <PaginationItem>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-7 h-7 sm:w-8 sm:h-8 p-1 rounded-full border-[#f1f1f1]"
                          >
                            {local === "en" ? (
                              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                                <path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" fill="#333" />
                              </svg>
                            ) : (
                              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                                <path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="#333" />
                              </svg>
                            )}
                          </Button>
                        </PaginationItem>

                        {/* current page */}
                        <PaginationItem>
                          <PaginationLink
                            isActive
                            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-secondary-dark text-white rounded-full font-semibold text-[clamp(10px,2vw,13px)]"
                          >
                            1
                          </PaginationLink>
                        </PaginationItem>

                        {/* next */}
                        <PaginationItem>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-7 h-7 sm:w-8 sm:h-8 p-1 rounded-full border-[#f1f1f1]"
                          >
                            {local === "en" ? (
                              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                                <path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="#333" />
                              </svg>
                            ) : (
                              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                                <path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" fill="#333" />
                              </svg>
                            )}
                          </Button>
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>

                    {/* نسخة الديسكتوب (الكاملة) */}
                    <Pagination className="hidden sm:flex justify-end">
                      <PaginationContent className="flex-nowrap gap-0.5 sm:gap-1 md:gap-2">

                        <PaginationItem className="shrink-0">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-7 h-7 sm:w-8 sm:h-8 p-1 rounded-full border-[#f1f1f1]"
                          >
                            {local === "en" ? (
                              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                                <path d="M11.726 12L12.666 11.06L9.61268 8L12.666 4.94L11.726 4L7.72602 8L11.726 12Z" fill="#333" />
                                <path d="M7.33344 12L8.27344 11.06L5.2201 8L8.27344 4.94L7.33344 4L3.33344 8L7.33344 12Z" fill="#333" />
                              </svg>
                            ) : (
                              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                                <path d="M4.27398 4L3.33398 4.94L6.38732 8L3.33398 11.06L4.27398 12L8.27398 8L4.27398 4Z" fill="#333" />
                                <path d="M8.66656 4L7.72656 4.94L10.7799 8L7.72656 11.06L8.66656 12L12.6666 8L8.66656 4Z" fill="#333" />
                              </svg>
                            )}
                          </Button>
                        </PaginationItem>

                        <PaginationItem className="shrink-0">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-7 h-7 sm:w-8 sm:h-8 p-1 rounded-full border-[#f1f1f1]"
                          >
                            {local === "en" ? (
                              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                                <path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" fill="#333" />
                              </svg>
                            ) : (
                              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                                <path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="#333" />
                              </svg>
                            )}
                          </Button>
                        </PaginationItem>

                        <PaginationItem className="shrink-0">
                          <PaginationLink
                            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-secondary-dark text-white rounded-full font-semibold text-[clamp(10px,2vw,13px)]"
                            isActive
                          >
                            1
                          </PaginationLink>
                        </PaginationItem>

                        <PaginationItem className="shrink-0">
                          <PaginationLink className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-white text-[#333] rounded-full border font-semibold text-[clamp(10px,2vw,13px)]">
                            2
                          </PaginationLink>
                        </PaginationItem>

                        <PaginationItem className="shrink-0">
                          <PaginationLink className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-white text-[#333] rounded-full border font-semibold text-[clamp(10px,2vw,13px)]">
                            3
                          </PaginationLink>
                        </PaginationItem>

                        <PaginationItem className="shrink-0">
                          <span className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-white text-[#333] rounded-lg font-semibold text-[clamp(10px,2vw,13px)]">
                            ...
                          </span>
                        </PaginationItem>

                        <PaginationItem className="shrink-0">
                          <PaginationLink className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-white text-[#333] rounded-full border font-semibold text-[clamp(10px,2vw,13px)]">
                            10
                          </PaginationLink>
                        </PaginationItem>

                        <PaginationItem className="shrink-0">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-7 h-7 sm:w-8 sm:h-8 p-1 rounded-full border-[#f1f1f1]"
                          >
                            {local === "en" ? (
                              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                                <path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="#333" />
                              </svg>
                            ) : (
                              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                                <path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" fill="#333" />
                              </svg>
                            )}
                          </Button>
                        </PaginationItem>

                        <PaginationItem className="shrink-0">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-7 h-7 sm:w-8 sm:h-8 p-1 rounded-full border-[#f1f1f1]"
                          >
                            {local === "en" ? (
                              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                                <path d="M4.27398 4L3.33398 4.94L6.38732 8L3.33398 11.06L4.27398 12L8.27398 8L4.27398 4Z" fill="#333" />
                                <path d="M8.66656 4L7.72656 4.94L10.7799 8L7.72656 11.06L8.66656 12L12.6666 8L8.66656 4Z" fill="#333" />
                              </svg>
                            ) : (
                              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                                <path d="M11.726 12L12.666 11.06L9.61268 8L12.666 4.94L11.726 4L7.72602 8L11.726 12Z" fill="#333" />
                                <path d="M7.33344 12L8.27344 11.06L5.2201 8L8.27344 4.94L7.33344 4L3.33344 8L7.33344 12Z" fill="#333" />
                              </svg>
                            )}
                          </Button>
                        </PaginationItem>

                      </PaginationContent>
                    </Pagination>
                  </div>

                </div>
              </div>
            }
          />











          {/* Maps Location Collapsible */}
          <ReusableCollapsible dir={`${local === "ar" ? "rtl" : "ltr"}`}
            title={t("Maps Location")}
            initiallyOpen={isOpen.mapsLocation}
            onOpenChange={(open) => handleToggle("mapsLocation", open)}
            content={<div>      <div className="w-full h-[332px] bg-[url(/background.png)] bg-cover bg-center rounded" />
              <p className="font-title-14px-regular font-[number:var(--title-14px-regular-font-weight)] text-on-surface-primary text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] [font-style:var(--title-14px-regular-font-style)]">
                {t("245, King Fahd Road, Al Olaya, Saudi Arabia, KSA")}
              </p></div>}

          />



        </CardContent>
      </Card>
    </div></div>
  );
};