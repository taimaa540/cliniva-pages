import {
  BellIcon,
  CalendarIcon,
  ChevronDownIcon,
  FacebookIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  StethoscopeIcon,
  TwitterIcon,
  UserCheckIcon,
  UsersIcon,
  ArrowLeftIcon,
} from "lucide-react";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import Avatar from "@mui/material/Avatar";
import DarkModeToggle from "../../../ElementUsersNoDataTo/DarkMode";

import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../components/ui/collapsible";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../../components/ui/pagination";
import Toggle from "../../../../components/ui/SwitchToggel";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import Checkbox from '@mui/material/Checkbox';
const capacityData = [
  {
    title: "Staff Capacity",
    value: "250/300",
    icon: (
  <svg width="48" height="31" viewBox="0 0 48 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.9842 20.6097C23.9946 19.2713 25.5209 17.3215 26.3374 15.0485C27.1539 12.7756 27.2173 10.3002 26.5182 7.9885C25.8191 5.67676 24.3945 3.65138 22.4553 2.21186C20.516 0.772343 18.165 -0.00488281 15.7498 -0.00488281C13.3347 -0.00488281 10.9837 0.772343 9.04442 2.21186C7.10517 3.65138 5.68065 5.67676 4.98152 7.9885C4.28239 10.3002 4.34577 12.7756 5.16228 15.0485C5.9788 17.3215 7.50509 19.2713 9.51547 20.6097C5.8789 21.95 2.77317 24.4302 0.661724 27.6803C0.550753 27.8452 0.473673 28.0306 0.434964 28.2256C0.396254 28.4206 0.396688 28.6213 0.436239 28.8161C0.47579 29.0109 0.55367 29.1959 0.665351 29.3604C0.777033 29.5248 0.920289 29.6654 1.08679 29.774C1.25329 29.8826 1.43972 29.9571 1.63524 29.993C1.83076 30.0289 2.03146 30.0256 2.22569 29.9832C2.41992 29.9409 2.6038 29.8604 2.76663 29.7464C2.92947 29.6324 3.06802 29.4871 3.17422 29.3191C4.5362 27.2243 6.39989 25.5029 8.59604 24.3113C10.7922 23.1196 13.2512 22.4955 15.7498 22.4955C18.2485 22.4955 20.7075 23.1196 22.9037 24.3113C25.0998 25.5029 26.9635 27.2243 28.3255 29.3191C28.5455 29.646 28.8853 29.8733 29.2716 29.9517C29.6578 30.0301 30.0594 29.9534 30.3895 29.7381C30.7196 29.5228 30.9517 29.1862 31.0356 28.8011C31.1195 28.4161 31.0485 28.0135 30.838 27.6803C28.7265 24.4302 25.6208 21.95 21.9842 20.6097ZM7.49985 11.2497C7.49985 9.61799 7.9837 8.02293 8.89022 6.66623C9.79675 5.30952 11.0852 4.2521 12.5927 3.62768C14.1002 3.00325 15.759 2.83988 17.3593 3.1582C18.9597 3.47653 20.4297 4.26227 21.5835 5.41605C22.7373 6.56983 23.523 8.03984 23.8413 9.64019C24.1597 11.2405 23.9963 12.8993 23.3719 14.4068C22.7474 15.9143 21.69 17.2028 20.3333 18.1093C18.9766 19.0158 17.3815 19.4997 15.7498 19.4997C13.5626 19.4972 11.4656 18.6272 9.91896 17.0806C8.37232 15.5339 7.50233 13.437 7.49985 11.2497ZM46.9011 29.7559C46.5679 29.9732 46.1621 30.0492 45.7728 29.9673C45.3836 29.8854 45.0428 29.6522 44.8255 29.3191C43.4651 27.223 41.6017 25.5009 39.4051 24.3098C37.2085 23.1186 34.7486 22.4963 32.2499 22.4997C31.852 22.4997 31.4705 22.3416 31.1892 22.0603C30.9079 21.779 30.7499 21.3975 30.7499 20.9997C30.7499 20.6019 30.9079 20.2203 31.1892 19.939C31.4705 19.6577 31.852 19.4997 32.2499 19.4997C33.4648 19.4985 34.6645 19.2291 35.7632 18.7105C36.8619 18.192 37.8326 17.4372 38.6058 16.5C39.379 15.5629 39.9356 14.4665 40.236 13.2893C40.5363 12.112 40.573 10.883 40.3433 9.68996C40.1136 8.49693 39.6232 7.36935 38.9072 6.3878C38.1913 5.40625 37.2673 4.59495 36.2014 4.01187C35.1355 3.42879 33.954 3.08833 32.7413 3.01481C31.5286 2.94128 30.3146 3.13652 29.1861 3.58656C29.0021 3.6661 28.804 3.70795 28.6036 3.70965C28.4031 3.71134 28.2044 3.67284 28.019 3.59642C27.8337 3.52 27.6656 3.40721 27.5246 3.26471C27.3836 3.12222 27.2726 2.95291 27.1982 2.76679C27.1237 2.58067 27.0873 2.38151 27.0912 2.18109C27.095 1.98067 27.1389 1.78305 27.2204 1.5999C27.3019 1.41676 27.4193 1.25181 27.5656 1.11479C27.712 0.977776 27.8843 0.871479 28.0724 0.802182C30.6551 -0.227848 33.5278 -0.264914 36.1362 0.698132C38.7447 1.66118 40.9041 3.5561 42.1978 6.01734C43.4916 8.47858 43.8281 11.3317 43.1423 14.0264C42.4565 16.7211 40.7971 19.0663 38.4842 20.6097C42.1208 21.95 45.2265 24.4302 47.338 27.6803C47.5552 28.0135 47.6313 28.4193 47.5494 28.8086C47.4674 29.1978 47.2342 29.5386 46.9011 29.7559Z" fill="#414651"/>
</svg>


    ),
    bgColor: "bg-secondary-light",
  },
  {
    title: "Doctors Capacity",
    value: "178/200",
    icon: (
<svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.75 24C33.75 24.445 33.618 24.88 33.3708 25.25C33.1236 25.62 32.7722 25.9084 32.361 26.0787C31.9499 26.249 31.4975 26.2936 31.061 26.2068C30.6246 26.12 30.2237 25.9057 29.909 25.591C29.5943 25.2763 29.38 24.8754 29.2932 24.439C29.2064 24.0025 29.251 23.5501 29.4213 23.139C29.5916 22.7278 29.88 22.3764 30.25 22.1292C30.62 21.882 31.055 21.75 31.5 21.75C32.0967 21.75 32.669 21.9871 33.091 22.409C33.5129 22.831 33.75 23.4033 33.75 24ZM32.8969 31.3669C32.5674 33.4909 31.4898 35.4273 29.8585 36.827C28.2272 38.2266 26.1494 38.9972 24 39H19.5C17.1138 38.9975 14.8261 38.0485 13.1388 36.3612C11.4515 34.6739 10.5025 32.3862 10.5 30V22.4044C7.60037 22.0391 4.93372 20.6281 3.0005 18.4363C1.06727 16.2445 0.000366759 13.4226 0 10.5V1.5C0 1.10218 0.158036 0.720645 0.43934 0.43934C0.720645 0.158036 1.10218 0 1.5 0H6C6.39782 0 6.77936 0.158036 7.06066 0.43934C7.34196 0.720645 7.5 1.10218 7.5 1.5C7.5 1.89782 7.34196 2.27936 7.06066 2.56066C6.77936 2.84196 6.39782 3 6 3H3V10.5C2.99989 11.6921 3.2366 12.8723 3.69638 13.9721C4.15616 15.0719 4.82984 16.0695 5.67832 16.9068C6.5268 17.7441 7.53317 18.4045 8.63899 18.8497C9.74481 19.2948 10.928 19.5159 12.12 19.5C17.0156 19.4363 21 15.3281 21 10.3444V3H18C17.6022 3 17.2206 2.84196 16.9393 2.56066C16.658 2.27936 16.5 1.89782 16.5 1.5C16.5 1.10218 16.658 0.720645 16.9393 0.43934C17.2206 0.158036 17.6022 0 18 0H22.5C22.8978 0 23.2794 0.158036 23.5607 0.43934C23.842 0.720645 24 1.10218 24 1.5V10.3444C24 16.5019 19.4006 21.6487 13.5 22.4025V30C13.5 31.5913 14.1321 33.1174 15.2574 34.2426C16.3826 35.3679 17.9087 36 19.5 36H24C25.3625 35.9977 26.6839 35.5327 27.7475 34.681C28.811 33.8293 29.5537 32.6416 29.8538 31.3125C28.0422 30.9056 26.446 29.8412 25.3739 28.3252C24.3019 26.8093 23.8303 24.9496 24.0503 23.106C24.2704 21.2624 25.1664 19.5659 26.5652 18.3449C27.9639 17.1238 29.7658 16.465 31.6222 16.4959C33.4787 16.5268 35.2577 17.2451 36.615 18.512C37.9723 19.7789 38.8115 21.5043 38.9701 23.3542C39.1287 25.2041 38.5954 27.0471 37.4736 28.5265C36.3517 30.006 34.721 31.0167 32.8969 31.3631V31.3669ZM36 24C36 23.11 35.7361 22.24 35.2416 21.4999C34.7471 20.7599 34.0443 20.1831 33.2221 19.8425C32.3998 19.5019 31.495 19.4128 30.6221 19.5865C29.7492 19.7601 28.9474 20.1887 28.318 20.818C27.6887 21.4474 27.2601 22.2492 27.0865 23.1221C26.9128 23.995 27.0019 24.8998 27.3425 25.7221C27.6831 26.5443 28.2599 27.2471 28.9999 27.7416C29.74 28.2361 30.61 28.5 31.5 28.5C32.6935 28.5 33.8381 28.0259 34.682 27.182C35.5259 26.3381 36 25.1935 36 24Z" fill="#414651"/>
</svg>



    ),
    bgColor: "bg-secondary-light",
  },
  {
    title: "Patients Capacity",
    value: "2500/3500",
    icon: (
     <svg width="48" height="35" viewBox="0 0 48 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33 13.4997C33 13.8975 32.842 14.279 32.5607 14.5603C32.2794 14.8416 31.8978 14.9997 31.5 14.9997H16.5C16.1022 14.9997 15.7206 14.8416 15.4393 14.5603C15.158 14.279 15 13.8975 15 13.4997C15 13.1018 15.158 12.7203 15.4393 12.439C15.7206 12.1577 16.1022 11.9997 16.5 11.9997H31.5C31.8978 11.9997 32.2794 12.1577 32.5607 12.439C32.842 12.7203 33 13.1018 33 13.4997ZM31.5 17.9997H16.5C16.1022 17.9997 15.7206 18.1577 15.4393 18.439C15.158 18.7203 15 19.1018 15 19.4997C15 19.8975 15.158 20.279 15.4393 20.5603C15.7206 20.8416 16.1022 20.9997 16.5 20.9997H31.5C31.8978 20.9997 32.2794 20.8416 32.5607 20.5603C32.842 20.279 33 19.8975 33 19.4997C33 19.1018 32.842 18.7203 32.5607 18.439C32.2794 18.1577 31.8978 17.9997 31.5 17.9997ZM48 13.4997V17.9997C48 19.591 47.3679 21.1171 46.2426 22.2423C45.1174 23.3675 43.5913 23.9997 42 23.9997H41.0269C39.6787 26.9622 36.9413 29.5178 32.9213 31.5297C30.1744 32.8768 27.2664 33.8667 24.2681 34.4753C24.0909 34.5078 23.9091 34.5078 23.7319 34.4753C20.7336 33.8667 17.8256 32.8768 15.0787 31.5297C11.0625 29.5178 8.32125 26.9622 6.97312 23.9997H6C4.4087 23.9997 2.88258 23.3675 1.75736 22.2423C0.632141 21.1171 0 19.591 0 17.9997V13.4997C0 11.9084 0.632141 10.3822 1.75736 9.25701C2.88258 8.1318 4.4087 7.49966 6 7.49966H6.15937C6.30117 7.07061 6.53804 6.67914 6.85232 6.35447C7.16661 6.0298 7.55017 5.78032 7.97437 5.62466L22.9744 0.17028C23.6371 -0.0697807 24.3629 -0.0697807 25.0256 0.17028L40.0256 5.62466C40.4498 5.78032 40.8334 6.0298 41.1477 6.35447C41.462 6.67914 41.6988 7.07061 41.8406 7.49966H42C43.5913 7.49966 45.1174 8.1318 46.2426 9.25701C47.3679 10.3822 48 11.9084 48 13.4997ZM6.10312 20.9997C6.03462 20.5026 6.00017 20.0014 6 19.4997V10.4997C5.20435 10.4997 4.44129 10.8157 3.87868 11.3783C3.31607 11.9409 3 12.704 3 13.4997V17.9997C3 18.7953 3.31607 19.5584 3.87868 20.121C4.44129 20.6836 5.20435 20.9997 6 20.9997H6.10312ZM39 19.4997V8.45403L24 2.99965L9 8.45403V19.4997C9 27.9372 21.9544 31.0347 24 31.4697C26.0419 31.0347 39 27.9372 39 19.4997ZM45 13.4997C45 12.704 44.6839 11.9409 44.1213 11.3783C43.5587 10.8157 42.7956 10.4997 42 10.4997V19.4997C41.9998 20.0014 41.9654 20.5026 41.8969 20.9997H42C42.7956 20.9997 43.5587 20.6836 44.1213 20.121C44.6839 19.5584 45 18.7953 45 17.9997V13.4997Z" fill="#414651"/>
</svg>

    ),
    bgColor: "bg-secondary-light",
  },
];


const clinicInfo = [
  { label: "Clinic Name", value: "Al Noor Clinic" },
  { label: "Session Slot:", value: "30 minutes" },
  { label: "Services Offered:", value: "General Consultation,Pediatric Care" },
  { label: "Year of Establishment", value: "3 April 2011" },
  { label: "PIC", value: "Dr. Layla Al Saeed" },
  {
    label: "Description",
    value:
      "Al Noor Clinic is a multi-specialty clinic offering high-quality care with modern facilities.",
  },
];

const contactInfo = [
  {
    icon: PhoneIcon,
    label: "PhoneIcon Numbers:",
    value: "+966 55 123 4567, +966 11 987 6543",
  },
  { icon: MailIcon, label: "Email:", value: "info@medcaregroup.com" },
  {
    icon: MapPinIcon,
    label: "Physical Address:",
    value: "245, King Fahd Road, Al Olaya, Saudi Arabia, KSA",
  },
  { icon: GlobeIcon, label: "Company Website:", value: "www.medcaregroup.com" },
];

const socialMedia = [
  {
    icon: LinkedinIcon,
    label: "LinkedIn:",
    value: "https://www.linkedin.com/company/medcare-group",
    isLink: true,
  },
  {
    icon: FacebookIcon,
    label: "Facebook:",
    value: "https://facebook.com/medcaregroup",
  },
  {
    icon: TwitterIcon,
    label: "Twitter:",
    value: "https://twitter.com/medcaregroup",
    isLink: true,
  },
  {
    icon: InstagramIcon,
    label: "Instagram:",
    value: "https://instagram.com/medcaregroup",
  },
];

const workingDays = [
  { day: "Sunday", startTime: "09:00", endTime: "18:00", isActive: true },
  { day: "Monday", startTime: "09:00", endTime: "18:00", isActive: true },
  { day: "Tuesday", startTime: "09:00", endTime: "18:00", isActive: true },
  { day: "Wednesday", startTime: "09:00", endTime: "18:00", isActive: true },
  { day: "Thursday", startTime: "09:00", endTime: "18:00", isActive: true },
  { day: "Friday", startTime: "09:00", endTime: "18:00", isActive: false },
  { day: "Saturday", startTime: "09:00", endTime: "18:00", isActive: true },
];

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
    name:  "Dr. Ahmed Hassan",
    clinic: "Cardiology Clinic",
    userType: "Doctor",
    status: "Active",
  },
];

interface NoDataSectionProps {
  local: string;
  dark: boolean;
  handelDarkClick: () => void;
  handleLanguageClick: () => void;
}

export const MedicalDetailsSection = ({ handleLanguageClick, local, dark, handelDarkClick }: NoDataSectionProps): JSX.Element => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);



  return (
    <div

      className={`flex flex-col w-full overflow-hidden items-start gap-4  py-4  self-stretch relative bg-background-primary 
      } `}
    >

      <header className="flex h-[50px] justify-between pl-[4px] pr-0 py-0 self-stretch bg-background-primary w-full items-center">
        <div className="flex flex-col w-[340px] items-start gap-1.5 px-0 py-0.5">
          <h1
            className={`self-stretch mt-[-1.00px] font-h5-22px-bold font-[number:var(--h5-22px-bold-font-weight)] 
              text-primary
            } text-on-surface-primary text-[length:var(--h5-22px-bold-font-size)] tracking-[var(--h5-22px-bold-letter-spacing)] leading-[var(--h5-22px-bold-line-height)] [font-style:var(--h5-22px-bold-font-style)]`}
          >
            {t("Users")}
          </h1>
        </div>

        <div className="inline-flex gap-3 flex-[0_0_auto] rounded-[28px] items-center " style={{ borderRadius: '16px', padding: '16px' }}>
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
              className={`p-2.5 bg-secondary-light ${local === "ar"
                  ? "bg-[green]"
                  : "bg-secondary-light"
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
                className={`w-fit mt-[-1.00px] 
                 text-primary
                } font-title-16px-bold font-[number:var(--title-16px-bold-font-weight)] text-on-surface-primary text-[length:var(--title-16px-bold-font-size)] tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] whitespace-nowrap [font-style:var(--title-16px-bold-font-style)]`}
              >
                Anahera Jones
              </div>
              <div className="w-fit font-title-11px-regular font-[number:var(--title-11px-regular-font-weight)] text-on-surface-tertiary text-[length:var(--title-11px-regular-font-size)] tracking-[var(--title-11px-regular-letter-spacing)] leading-[var(--title-11px-regular-line-height)] whitespace-nowrap [font-style:var(--title-11px-regular-font-style)] border-medium ">
                Admin
              </div>
            </div>
          </div>
        </div>
      </header>






      <Card className="flex flex-col h-auto items-start gap-6 p-5 mt-[10px] bg-background-tertiary relative self-stretch w-full rounded-2xl overflow-hidden">
        <CardContent className="p-0 w-full overflow-y-auto gap-5 h-auto">
  <div className="flex justify-between items-center w-full">
  <Toggle />
  <Button className="w-[200px] rounded-[20px] font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-surface-default text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
    Edit
  </Button>
</div>
        <Card className="w-full mt-5 rounded-2xl">
  <CardContent className="p-4">
    <h2 className="font-title-16px-bold text-primary-dark mb-4">
      Capacity
    </h2>
    <div className="flex flex-col md:flex-row gap-4 md:gap-[38px]">
      {capacityData.map((item, index) => (
        <Card 
          key={index}
          className={`flex-1 h-[100px] ${item.bgColor} rounded-[25px] shadow-[0px_2px_8px_#e2f6ec]`}
        >
          <CardContent className="relative p-0 h-full">
            <div className="absolute w-12 h-12 top-[26px] right-[40px]">
              {item.icon}
            </div>
            <div className="absolute top-3.5 left-10 font-title-18px-semibold text-on-surface-primary">
              {item.title}
            </div>
            <div className="absolute top-[52px] left-10 font-h3-26px-semibold text-on-surface-primary">
              {item.value}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </CardContent>
</Card>










          <Collapsible defaultOpen className="w-full bg-background-primary mt-5 rounded-2xl">
  <Card className="bg-surface-default rounded-2xl">
    <CollapsibleTrigger className="w-full">
      <CardContent className="p-6 flex items-center justify-between">
        <div
          style={{
            fontFamily: "Lato",
            fontWeight: 600,
            fontStyle: "SemiBold",
            fontSize: "16px",
            lineHeight: "124%",
            letterSpacing: "0%",
          }}
          className="text-text-accent font-bold size-16 w-56 text-start"
        >
          <h2>{t("Clinic Info")}:</h2>
        </div>
        <ChevronDownIcon className="text-text-primary w-8 h-8" />
      </CardContent>
    </CollapsibleTrigger>

    <CollapsibleContent className="w-full mt-5 rounded-2xl">
      <CardContent className="p-4 pt-0">
        {/* الأعمدة الرئيسية */}
        <div className="grid grid-cols-2 gap-8">
          {/* العمود الأول */}
          <div className="space-y-4">
            <div className="flex items-center gap-8">
              <label className="w-40 text-text-primary font-semibold text-base">
                {t("Clinic Name")}
              </label>
              Al Noor Clinic
            </div>

            <div className="flex items-center gap-8">
              <label className="w-40 text-text-primary font-semibold text-base">
               Session Slot:
               
              </label>
              30 minutes
            </div>

            <div className="flex items-center gap-8">
              <label className="w-40 text-text-primary font-semibold text-base">
               Services Offered:
             
              </label>
              General Consultation
            </div>
          </div>

          {/* العمود الثاني */}
          <div className="space-y-4">
            <div className="flex items-center gap-8">
              <label className="w-40 text-text-primary font-semibold text-base">
                {t("Year of Establishment")}
              </label>
              April 3 2011
            </div>

            <div className="flex items-center gap-8">
              <label className="w-40 text-text-primary font-semibold text-base">
                {t("PIC Name")}
              </label>
              Dr. Layla Al Saeed
            </div>

            <div className="flex items-center gap-8">
              <label className="w-40 text-text-primary font-semibold text-base">
                {t("Description")}
              </label>
              <div className="w-[360px]">
                Al Noor Clinic is a multi-specialty clinic offering high-quality care with modern facilities.
              </div>
            </div>
          </div>
        </div>

        {/* Assigned Departments */}
        <div className="mt-6">
          <h2 className="mb-4 text-text-primary font-semibold">{t("Assigned Departments")}</h2>
          <div className="grid grid-cols-2 gap-8">
            {/* عمود الاسم */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <label className="w-40 text-text-primary font-semibold">{t("Department Name")}</label>
                Al Razi Department
              </div>
            </div>

            {/* عمود الوصف */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <label className="w-40 text-text-primary font-semibold">{t("Description")}</label>
                <div className="w-[360px]">
                  Al Noor Clinic is a multi-specialty clinic offering high-quality care with modern facilities.
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </CollapsibleContent>
  </Card>
</Collapsible>










          <Collapsible defaultOpen className="w-full bg-background-primary  mt-5 rounded-2xl">
            <Card className="bg-surface-default rounded-2xl">
              <CollapsibleTrigger className="w-full">
                <CardContent className="p-4 flex items-center justify-between">
                  <div style={{
                    fontFamily: "Lato",
                    fontWeight: 600,
                    fontStyle: "SemiBold",
                    fontSize: "16px",
                    lineHeight: "124%",
                    letterSpacing: "0%",
                  }}
                    className="text-text-accent font-bold size-16 w-56 text-start ">
                    <h2 className="mt-6">                      {t("Company Contact Information")}:</h2></div>
                  <ChevronDownIcon className="text-text-primary font-semiboldy w-8 h-8" />
                </CardContent>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <CardContent className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2">
                        <div className="text-text-primary"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.77089 1.7914C4.74396 1.7897 4.69757 1.79107 4.62528 1.80329C3.77857 1.94638 3.00486 2.37623 2.43547 3.02308C1.97218 3.5494 1.66854 4.19168 1.55287 4.87501C1.48516 5.27504 1.49216 5.71047 1.52066 6.19911C1.69143 9.12669 2.92996 11.9001 5.01501 13.9851C7.18212 16.1522 10.0928 17.4049 13.1473 17.4946C13.5053 17.5052 13.8283 17.4975 14.1251 17.4472C14.8084 17.3316 15.4507 17.0279 15.977 16.5646C16.6598 15.9637 17.1008 15.1351 17.218 14.2332L17.2168 14.2327L17.2168 14.2327L12.8295 12.3484L12.8294 12.3485L12.8294 12.3485L10.4887 13.912C10.4881 13.9125 10.4874 13.9129 10.4868 13.9134C10.2713 14.0583 10.0219 14.1449 9.76298 14.1645C9.50325 14.1843 9.24287 14.136 9.00745 14.0245L9.00328 14.0226C7.25484 13.1814 5.84277 11.773 4.99715 10.0267L4.99564 10.0236L4.99565 10.0236C4.88489 9.79214 4.83535 9.53616 4.85176 9.28011C4.86817 9.02405 4.94999 8.77649 5.0894 8.56108L5.09234 8.55653L5.09236 8.55654L6.65297 6.18292L6.65155 6.17964L6.65156 6.17964L4.77089 1.7914ZM17.2189 14.2261L17.2189 14.2264L17.2189 14.2261ZM4.37532 0.324261C4.70725 0.268164 5.26379 0.235978 5.73387 0.632501C5.91326 0.783819 6.05538 0.976218 6.14718 1.19487L8.02884 5.58542C8.02911 5.58605 8.02938 5.58667 8.02965 5.5873C8.12707 5.81244 8.16779 6.05805 8.14822 6.3026C8.1286 6.54783 8.04897 6.78447 7.91634 6.99167L7.9114 6.99939L7.91135 6.99935L6.3487 9.37608C7.04612 10.8145 8.20932 11.9749 9.6494 12.6688L9.65244 12.6668L9.65244 12.6668L11.9944 11.1024C12.2022 10.9621 12.4421 10.8764 12.6918 10.8534C12.9415 10.8304 13.193 10.8708 13.423 10.9708C13.4239 10.9712 13.4249 10.9716 13.4258 10.972L17.8056 12.8531C18.1054 12.979 18.3558 13.1995 18.5186 13.4811C18.6822 13.764 18.7483 14.0929 18.7067 14.417C18.5445 15.6833 17.9264 16.8471 16.9681 17.6906C16.2313 18.3392 15.3321 18.7643 14.3755 18.9262C13.9356 19.0007 13.4989 19.0056 13.1033 18.994C9.66683 18.893 6.39236 17.4838 3.95435 15.0458C1.60865 12.7001 0.215328 9.58005 0.0232104 6.28646C-0.00635157 5.77966 -0.0237603 5.20168 0.0739086 4.62467C0.235831 3.66806 0.660897 2.76886 1.30954 2.03198C2.1067 1.12638 3.18988 0.524605 4.37532 0.324261Z" fill="CurrentColor" />
                        </svg></div>

                        <span className="font-[number:var(--title-16px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-16px-semibold-font-size)] leading-[var(--title-16px-semibold-line-height)] font-title-16px-semibold tracking-[var(--title-16px-semibold-letter-spacing)] [font-style:var(--title-16px-semibold-font-style)]">
                          PhoneIcon Numbers:
                        </span>
                      </div>
                      <span className="font-title-14px-regular font-[number:var(--title-14px-regular-font-weight)] text-on-surface-primary text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] [font-style:var(--title-14px-regular-font-style)]">
                        +966 55 123 4567, +966 11 987 6543
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2">
                        <div className="text-text-primary">   <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.07923 0.787497C10.0441 0.737503 11.9541 0.737499 13.9191 0.787497C17.157 0.869496 18.9413 0.915255 20.2843 2.25625C21.6291 3.61122 21.6655 5.3485 21.7325 8.50136C21.7535 9.50833 21.7535 10.4866 21.7325 11.4936C21.6656 14.6461 21.6288 16.3819 20.2872 17.7348C18.9422 19.0788 17.158 19.1244 13.92 19.2064C12.9381 19.2314 11.9691 19.2445 11.0001 19.2445C10.0312 19.2445 9.06212 19.2314 8.0802 19.2064C4.84234 19.1244 3.05795 19.0785 1.71497 17.7377C0.370009 16.3827 0.332745 14.6454 0.265749 11.4926C0.24475 10.4856 0.244751 9.50735 0.265749 8.50039C0.332749 5.34739 0.370038 3.6112 1.71204 2.2582C3.05703 0.914271 4.84128 0.869495 8.07923 0.787497ZM13.881 2.28554C11.9421 2.23555 10.0572 2.23555 8.11731 2.28554C5.07934 2.36254 3.69256 2.39684 2.77356 3.31582C1.85556 4.24182 1.82677 5.58664 1.76477 8.53164C1.74378 9.5165 1.74378 10.4745 1.76477 11.4603C1.82677 14.4053 1.85648 15.7502 2.77747 16.6771C3.69447 17.593 5.08048 17.6294 8.11829 17.7064C10.0572 17.7564 11.9421 17.7564 13.882 17.7064C16.9199 17.6294 18.3057 17.5941 19.2247 16.6752C20.1427 15.7492 20.1715 14.4053 20.2335 11.4603C20.2545 10.4755 20.2545 9.5175 20.2335 8.53164C20.1715 5.58664 20.1428 4.24086 19.2218 3.31386C18.3048 2.39817 16.9186 2.36253 13.881 2.28554ZM5.35462 6.11074C5.56562 5.75474 6.02596 5.63509 6.38196 5.84609L9.32337 7.58633C10.7954 8.45333 11.2039 8.45333 12.6779 7.58633L15.6183 5.84707C15.9753 5.63607 16.4356 5.75472 16.6456 6.11172C16.8564 6.46859 16.7387 6.92802 16.382 7.13808L13.4396 8.87832C12.4588 9.45619 11.73 9.74442 11.0001 9.74453C10.2711 9.74453 9.54165 9.45532 8.56165 8.87832L5.61829 7.13711C5.26276 6.92603 5.14393 6.46654 5.35462 6.11074Z" fill="CurrentColor" />
                        </svg></div>

                        <span className="font-[number:var(--title-16px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-16px-semibold-font-size)] leading-[var(--title-16px-semibold-line-height)] font-title-16px-semibold tracking-[var(--title-16px-semibold-letter-spacing)] [font-style:var(--title-16px-semibold-font-style)]">
                          Email:
                        </span>
                      </div>
                      <span className="font-title-14px-regular font-[number:var(--title-14px-regular-font-weight)] text-on-surface-primary text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] [font-style:var(--title-14px-regular-font-style)]">
                        info@medcaregroup.com
                      </span>
                    </div>
                  </div>

                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>






          <Collapsible defaultOpen className="w-full bg-background-primary  mt-5 rounded-2xl">
            <Card className="bg-surface-default rounded-2xl">
              <CollapsibleTrigger className="w-full rounded-2xl">
                <CardContent className="flex flex-row items-center rounded-2xl  justify-between">
                  <div style={{
                    fontFamily: "Lato",
                    fontWeight: 600,
                    fontStyle: "SemiBold",
                    fontSize: "16px",
                    lineHeight: "124%",
                    letterSpacing: "0%",
                  }}
                    className="text-text-accent font-bold size-16 w-56 text-start">
                    <h2>                        {t("                               working Days   ")}:</h2></div>
                  <ChevronDownIcon className=" w-8 h-8 text-text-primary font-semibold" />
                </CardContent>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="flex flex-col gap-4">
                  {workingDays.map((day) => (
                    <div key={day.day} className="flex items-center gap-8 text-text-primary font-semibold" >
                      <div className="flex items-center gap-4 w-40">
                        <Checkbox

                          className="w-4 h-4 bg-primary-dark border-primary-dark data-[state=checked]:bg-primary-dark"
                        />
                        <span className="[font-family:'Lato',Helvetica] text-text-primary font-semibold text-sm tracking-[0.07px] leading-6">
                          {day.day}
                        </span>
                      </div>
                      <div
                        className={`flex items-center justify-between w-[360px] h-12 px-4 py-2 rounded border border-[#e4e2dd] shadow-[0px_1px_2px_#0a0d120d] ${day.isActive ? "bg-background-secondar" : "bg-border-light"}`}
                      >
                        <span className="[font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-sm tracking-[0] leading-[21px]">
                          {day.startTime}
                        </span>

                        <div className="flex items-center">


                          {local === "en" ? (
                            <ArrowForwardIcon className="w-6 h-6" />
                          ) : (
                            <ArrowLeftIcon className="w-6 h-6" />
                          )}


                        </div>

                        <span className="[font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-sm tracking-[0] leading-[21px]">
                          {day.endTime}
                        </span>
                        <div className="w-5 h-5 bg-[url(/union.svg)] bg-[100%_100%]" />
                      </div>
                    </div>
                  ))}

                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>

 <Collapsible
      defaultOpen
      className="w-full bg-background-primary  mt-5 rounded-2xl"
    >
      <Card className="bg-surface-default rounded-2xl">
        <CollapsibleTrigger className="w-full">
          <CardContent className="p-4 flex items-center justify-between">
            <div
              style={{
                fontFamily: "Lato",
                fontWeight: 600,
                fontStyle: "SemiBold",
                fontSize: "16px",
                lineHeight: "124%",
                letterSpacing: "0%",
              }}
              className="text-text-accent"
            >
              <h2>
                <div className="flex items-center gap-4">
                  <h2 className="font-title-16px-bold font-[number:var(--title-16px-bold-font-weight)] text-primary-dark text-[length:var(--title-16px-bold-font-size)] tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] [font-style:var(--title-16px-bold-font-style)]">
                    {t("Doctors & Staff")}
                  </h2>
                  <div className="flex gap-2">
                    <Badge className="bg-secondary-light text-on-surface-primary rounded-[20px] px-2.5 py-1.5">
                      {t("All")}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-bg text-on-surface-primary rounded-[20px] px-2.5 py-1.5"
                    >
                      {t("Doctors")}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-bg text-on-surface-primary rounded-[20px] px-2.5 py-1.5"
                    >
                      {t("Staff")}
                    </Badge>
                  </div>
                </div>
              </h2>
            </div>
            <ChevronDownIcon className="text-text-primary font-semibold w-8 h-8" />
          </CardContent>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="">
                <TableRow>
                  <TableHead className="w-[58px] text-left text-text-praimary font-semibold">
                    {t("Number")}
                  </TableHead>
                  <TableHead className="text-center text-text-praimary font-semibold">
                    {t("User-ID")}
                  </TableHead>
                  <TableHead className="text-center text-text-praimary font-semibold">
                    {t("Name")}
                  </TableHead>
                  <TableHead className="w-[225px] text-center text-text-praimary font-semibold">
                    {t("Clinic")}
                  </TableHead>
                  <TableHead className="text-center text-text-praimary font-semibold">
                    {t("User Type")}
                  </TableHead>
                  <TableHead className="text-center text-text-praimary font-semibold">
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
                    <TableCell className="text-center text-text-praimary font-semibold">
                      {person.number}
                    </TableCell>
                    <TableCell className="text-center text-text-primary font-title-14px-semibold">
                      {person.userId}
                    </TableCell>
                    <TableCell className="text-center text-text-primary font-title-14px-semibold">
                      <div className="flex items-center gap-2 justify-center">
     <Avatar
  src={person.avatar}
  alt={person.name}
  sx={{
    width: 32,
    height: 32,
    bgcolor: !person.avatar ? "var(--theme-text-accent)" : "transparent", // لون الدائرة من متغير الثيم
  }}
>
  {/* إذا ما في صورة، تظل الدائرة ملونة بدون أي نص */}
</Avatar>
                        <span>{person.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center text-text-primary font-title-14px-semibold">
                      {person.clinic}
                    </TableCell>
                    <TableCell className="text-center text-text-primary font-title-14px-semibold">
                      {person.userType}
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Badge className="bg-secondary-light text-secondary-dark rounded-[20px] w-[92px] y-[24px] justify-center">
                          {person.status}
                        </Badge>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
              <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-2.5">
                <span className="font-title-11px-regular font-[number:var(--title-11px-regular-font-weight)] text-on-surface-secondary text-[length:var(--title-11px-regular-font-size)] tracking-[var(--title-11px-regular-letter-spacing)] leading-[var(--title-11px-regular-line-height)] [font-style:var(--title-11px-regular-font-style)]">
              { t("                           Showing ")}
                </span>
                <Select defaultValue="1">
                  <SelectTrigger className="w-auto bg-secondary-light rounded-[20px] border-0 px-2 py-1.5">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                  </SelectContent>
                </Select>
                <span className="font-title-11px-regular font-[number:var(--title-11px-regular-font-weight)] text-on-surface-secondary text-[length:var(--title-11px-regular-font-size)] tracking-[var(--title-11px-regular-letter-spacing)] leading-[var(--title-11px-regular-line-height)] [font-style:var(--title-11px-regular-font-style)]">
                { t("                             out of 14 ")}
                </span>
              </div>
              

              
              <Pagination className="justify-end">
                <PaginationContent className="gap-[5px]">
                  <PaginationItem>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-8 h-8 p-2.5 rounded-[32px] border-[#f1f1f1]"
                    >
                           
     {local === "en" ? (
               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.726 12L12.666 11.06L9.61268 8L12.666 4.94L11.726 4L7.72602 8L11.726 12Z" fill="CurrentColor"/>
<path d="M7.33344 12L8.27344 11.06L5.2201 8L8.27344 4.94L7.33344 4L3.33344 8L7.33344 12Z" fill="CurrentColor"/>
</svg>
) : (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.27398 4L3.33398 4.94L6.38732 8L3.33398 11.06L4.27398 12L8.27398 8L4.27398 4Z" fill="CurrentColor"/>
<path d="M8.66656 4L7.72656 4.94L10.7799 8L7.72656 11.06L8.66656 12L12.6666 8L8.66656 4Z" fill="CurrentColor"/>
</svg>
)}
        

                    </Button>
                  </PaginationItem>
                  <PaginationItem>
                     <Button
                      variant="outline"
                      size="sm"
                      className="w-8 h-8 p-2.5 rounded-[32px] border-[#f1f1f1]"
                    >
 


 {local === "en" ? (
                           <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" fill="CurrentColor"/>
</svg>
) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="CurrentColor"/>
</svg>
)}
  </Button>

                 
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      className="w-8 h-8 p-2.5 bg-secondary-dark text-white rounded-[32px] [font-family:'Open_Sans',Helvetica] font-semibold text-[13px]"
                      isActive
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink className="w-8 h-8 p-2.5 bg-white text-[#333333] rounded-[32px] border border-[#f1f1f1] [font-family:'Open_Sans',Helvetica] font-semibold text-[13px]">
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink className="w-8 h-8 p-2.5 bg-white text-[#333333] rounded-[32px] border border-[#f1f1f1] [font-family:'Open_Sans',Helvetica] font-semibold text-[13px]">
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <span className="w-8 h-8 p-2.5 bg-white text-[#333333] rounded-lg flex items-center justify-center [font-family:'Open_Sans',Helvetica] font-semibold text-[13px]">
                      ...
                    </span>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink className="w-8 h-8 p-2.5 bg-white text-[#333333] rounded-[32px] border border-[#f1f1f1] [font-family:'Open_Sans',Helvetica] font-semibold text-[13px]">
                      10
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                   <Button
                      variant="outline"
                      size="sm"
                      className="w-8 h-8 p-2.5 rounded-[32px] border-[#f1f1f1]"
                    >
                      <div>
                        
                        
                        
                        
 {local === "en" ? (
                                     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="black"/>
</svg>
) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" fill="CurrentColor"/>
</svg>
)}
                        
    

</div>
               </Button>
                  </PaginationItem>
                  <PaginationItem>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-8 h-8 p-2.5 rounded-[32px] border-[#f1f1f1]"
                    >




{local === "en" ? (
                             
                     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.27398 4L3.33398 4.94L6.38732 8L3.33398 11.06L4.27398 12L8.27398 8L4.27398 4Z" fill="CurrentColor"/>
<path d="M8.66656 4L7.72656 4.94L10.7799 8L7.72656 11.06L8.66656 12L12.6666 8L8.66656 4Z" fill="CurrentColor"/>
</svg>
) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.726 12L12.666 11.06L9.61268 8L12.666 4.94L11.726 4L7.72602 8L11.726 12Z" fill="CurrentColor"/>
<path d="M7.33344 12L8.27344 11.06L5.2201 8L8.27344 4.94L7.33344 4L3.33344 8L7.33344 12Z" fill="CurrentColor"/>
</svg>
)}




                    </Button>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>


          <Collapsible defaultOpen className="w-full bg-background-primary  mt-5 rounded-2xl">
            <Card className="bg-surface-default rounded-2xl">
              <CollapsibleTrigger className="w-full">
                <CardContent className="p-4 flex items-center justify-between">
                  <div style={{
                    fontFamily: "Lato",
                    fontWeight: 600,
                    fontStyle: "SemiBold",
                    fontSize: "16px",
                    lineHeight: "124%",
                    letterSpacing: "0%",
                  }}
                    className="text-text-accent font-bold size-16 w-56 text-start ">
                    <h2 className="mt-6">                      {t("                             Maps Location   ")}:</h2></div>
                  <ChevronDownIcon className="text-text-primary font-semiboldy w-8 h-8" />
                </CardContent>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <CardContent className="flex flex-col gap-4">
                  <div className="w-full h-[332px] bg-[url(/background.png)] bg-cover bg-center rounded" />
                  <p className="font-title-14px-regular font-[number:var(--title-14px-regular-font-weight)] text-on-surface-primary text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] [font-style:var(--title-14px-regular-font-style)]">
                    {t("                         245, King Fahd Road, Al Olaya, Saudi Arabia, KSA")}
                  </p>

                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        </CardContent>
      </Card>
    </div>
  );
};