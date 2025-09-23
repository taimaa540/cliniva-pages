import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BellIcon,
  ChevronDownIcon,
  MapPinIcon,
  MinusIcon,
  PhoneIcon,
  PlusIcon,
} from "lucide-react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Badge } from "../../../../../components/ui/badge";
import { Button } from "../../../../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../../../../components/ui/card";

import { Input } from "../../../../../components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../../../components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../components/ui/select";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";



import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../../components/ui/table";
import Toggle from "../../../../../components/ui/SwitchToggel";
import { Textarea } from "../../../../../components/ui/textarea";
import Switch from '@mui/material/Switch';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../../../../../components/ui/collapsible'
import Checkbox from '@mui/material/Checkbox';
import Avatar from "@mui/material/Avatar";
import ReusableCollapsible from "../../../../../components/ui/Collapsibles";
import TimeRangePicker from "../../../../CommonComponents/timeRangePicker";
import DateInput from "../../../../CommonComponents/DateInput";
import PhoneInputCustom from "../../../../CommonComponents/PhoneInput";
import CustomCheckbox from "../../../../CommonComponents/customCheckbox";

import DatePicker from "../../../../../components/ui/DatePicker";
import { ThemeToggle } from "../../../../../components/theme/ThemeSwitcher";
import { SideBarPlan2 } from "../../../../CommonComponents/SideBarPlan2";
const complexInformation = {
  name: "AlTadawi Medical Complex",
  description:
    "A modern multi-specialty healthcare complex offering outpatient and diagnostic services in Riyadh.",
  establishmentYear: "2011",
  pic: "Hessa AlMutairi",
  staffCapacity: "2150",
  doctorsCapacity: "1780",
  patientCapacity: "250",
};

interface SpecialtyDetail {
  title: string;
  value: string;
  icon: JSX.Element;
  bgColor?: string;
}
const capacityData = (t: (key: string) => string): SpecialtyDetail[] => [

  {
      title: "Staff Capacity",
    value: "250/300",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 48 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.9842 20.6097C23.9946 19.2713 25.5209 17.3215 26.3374 15.0485C27.1539 12.7756 27.2173 10.3002 26.5182 7.9885C25.8191 5.67676 24.3945 3.65138 22.4553 2.21186C20.516 0.772343 18.165 -0.00488281 15.7498 -0.00488281C13.3347 -0.00488281 10.9837 0.772343 9.04442 2.21186C7.10517 3.65138 5.68065 5.67676 4.98152 7.9885C4.28239 10.3002 4.34577 12.7756 5.16228 15.0485C5.9788 17.3215 7.50509 19.2713 9.51547 20.6097C5.8789 21.95 2.77317 24.4302 0.661724 27.6803C0.550753 27.8452 0.473673 28.0306 0.434964 28.2256C0.396254 28.4206 0.396688 28.6213 0.436239 28.8161C0.47579 29.0109 0.55367 29.1959 0.665351 29.3604C0.777033 29.5248 0.920289 29.6654 1.08679 29.774C1.25329 29.8826 1.43972 29.9571 1.63524 29.993C1.83076 30.0289 2.03146 30.0256 2.22569 29.9832C2.41992 29.9409 2.6038 29.8604 2.76663 29.7464C2.92947 29.6324 3.06802 29.4871 3.17422 29.3191C4.5362 27.2243 6.39989 25.5029 8.59604 24.3113C10.7922 23.1196 13.2512 22.4955 15.7498 22.4955C18.2485 22.4955 20.7075 23.1196 22.9037 24.3113C25.0998 25.5029 26.9635 27.2243 28.3255 29.3191C28.5455 29.646 28.8853 29.8733 29.2716 29.9517C29.6578 30.0301 30.0594 29.9534 30.3895 29.7381C30.7196 29.5228 30.9517 29.1862 31.0356 28.8011C31.1195 28.4161 31.0485 28.0135 30.838 27.6803C28.7265 24.4302 25.6208 21.95 21.9842 20.6097ZM7.49985 11.2497C7.49985 9.61799 7.9837 8.02293 8.89022 6.66623C9.79675 5.30952 11.0852 4.2521 12.5927 3.62768C14.1002 3.00325 15.759 2.83988 17.3593 3.1582C18.9597 3.47653 20.4297 4.26227 21.5835 5.41605C22.7373 6.56983 23.523 8.03984 23.8413 9.64019C24.1597 11.2405 23.9963 12.8993 23.3719 14.4068C22.7474 15.9143 21.69 17.2028 20.3333 18.1093C18.9766 19.0158 17.3815 19.4997 15.7498 19.4997C13.5626 19.4972 11.4656 18.6272 9.91896 17.0806C8.37232 15.5339 7.50233 13.437 7.49985 11.2497ZM46.9011 29.7559C46.5679 29.9732 46.1621 30.0492 45.7728 29.9673C45.3836 29.8854 45.0428 29.6522 44.8255 29.3191C43.4651 27.223 41.6017 25.5009 39.4051 24.3098C37.2085 23.1186 34.7486 22.4963 32.2499 22.4997C31.852 22.4997 31.4705 22.3416 31.1892 22.0603C30.9079 21.779 30.7499 21.3975 30.7499 20.9997C30.7499 20.6019 30.9079 20.2203 31.1892 19.939C31.4705 19.6577 31.852 19.4997 32.2499 19.4997C33.4648 19.4985 34.6645 19.2291 35.7632 18.7105C36.8619 18.192 37.8326 17.4372 38.6058 16.5C39.379 15.5629 39.9356 14.4665 40.236 13.2893C40.5363 12.112 40.573 10.883 40.3433 9.68996C40.1136 8.49693 39.6232 7.36935 38.9072 6.3878C38.1913 5.40625 37.2673 4.59495 36.2014 4.01187C35.1355 3.42879 33.954 3.08833 32.7413 3.01481C31.5286 2.94128 30.3146 3.13652 29.1861 3.58656C29.0021 3.6661 28.804 3.70795 28.6036 3.70965C28.4031 3.71134 28.2044 3.67284 28.019 3.59642C27.8337 3.52 27.6656 3.40721 27.5246 3.26471C27.3836 3.12222 27.2726 2.95291 27.1982 2.76679C27.1237 2.58067 27.0873 2.38151 27.0912 2.18109C27.095 1.98067 27.1389 1.78305 27.2204 1.5999C27.3019 1.41676 27.4193 1.25181 27.5656 1.11479C27.712 0.977776 27.8843 0.871479 28.0724 0.802182C30.6551 -0.227848 33.5278 -0.264914 36.1362 0.698132C38.7447 1.66118 40.9041 3.5561 42.1978 6.01734C43.4916 8.47858 43.8281 11.3317 43.1423 14.0264C42.4565 16.7211 40.7971 19.0663 38.4842 20.6097C42.1208 21.95 45.2265 24.4302 47.338 27.6803C47.5552 28.0135 47.6313 28.4193 47.5494 28.8086C47.4674 29.1978 47.2342 29.5386 46.9011 29.7559Z" fill="#414651" />
      </svg>


    ),
    bgColor: "bg-secondary-light",
  },
  {
    title: "Doctors Capacity",
    value: "178/200",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33.75 24C33.75 24.445 33.618 24.88 33.3708 25.25C33.1236 25.62 32.7722 25.9084 32.361 26.0787C31.9499 26.249 31.4975 26.2936 31.061 26.2068C30.6246 26.12 30.2237 25.9057 29.909 25.591C29.5943 25.2763 29.38 24.8754 29.2932 24.439C29.2064 24.0025 29.251 23.5501 29.4213 23.139C29.5916 22.7278 29.88 22.3764 30.25 22.1292C30.62 21.882 31.055 21.75 31.5 21.75C32.0967 21.75 32.669 21.9871 33.091 22.409C33.5129 22.831 33.75 23.4033 33.75 24ZM32.8969 31.3669C32.5674 33.4909 31.4898 35.4273 29.8585 36.827C28.2272 38.2266 26.1494 38.9972 24 39H19.5C17.1138 38.9975 14.8261 38.0485 13.1388 36.3612C11.4515 34.6739 10.5025 32.3862 10.5 30V22.4044C7.60037 22.0391 4.93372 20.6281 3.0005 18.4363C1.06727 16.2445 0.000366759 13.4226 0 10.5V1.5C0 1.10218 0.158036 0.720645 0.43934 0.43934C0.720645 0.158036 1.10218 0 1.5 0H6C6.39782 0 6.77936 0.158036 7.06066 0.43934C7.34196 0.720645 7.5 1.10218 7.5 1.5C7.5 1.89782 7.34196 2.27936 7.06066 2.56066C6.77936 2.84196 6.39782 3 6 3H3V10.5C2.99989 11.6921 3.2366 12.8723 3.69638 13.9721C4.15616 15.0719 4.82984 16.0695 5.67832 16.9068C6.5268 17.7441 7.53317 18.4045 8.63899 18.8497C9.74481 19.2948 10.928 19.5159 12.12 19.5C17.0156 19.4363 21 15.3281 21 10.3444V3H18C17.6022 3 17.2206 2.84196 16.9393 2.56066C16.658 2.27936 16.5 1.89782 16.5 1.5C16.5 1.10218 16.658 0.720645 16.9393 0.43934C17.2206 0.158036 17.6022 0 18 0H22.5C22.8978 0 23.2794 0.158036 23.5607 0.43934C23.842 0.720645 24 1.10218 24 1.5V10.3444C24 16.5019 19.4006 21.6487 13.5 22.4025V30C13.5 31.5913 14.1321 33.1174 15.2574 34.2426C16.3826 35.3679 17.9087 36 19.5 36H24C25.3625 35.9977 26.6839 35.5327 27.7475 34.681C28.811 33.8293 29.5537 32.6416 29.8538 31.3125C28.0422 30.9056 26.446 29.8412 25.3739 28.3252C24.3019 26.8093 23.8303 24.9496 24.0503 23.106C24.2704 21.2624 25.1664 19.5659 26.5652 18.3449C27.9639 17.1238 29.7658 16.465 31.6222 16.4959C33.4787 16.5268 35.2577 17.2451 36.615 18.512C37.9723 19.7789 38.8115 21.5043 38.9701 23.3542C39.1287 25.2041 38.5954 27.0471 37.4736 28.5265C36.3517 30.006 34.721 31.0167 32.8969 31.3631V31.3669ZM36 24C36 23.11 35.7361 22.24 35.2416 21.4999C34.7471 20.7599 34.0443 20.1831 33.2221 19.8425C32.3998 19.5019 31.495 19.4128 30.6221 19.5865C29.7492 19.7601 28.9474 20.1887 28.318 20.818C27.6887 21.4474 27.2601 22.2492 27.0865 23.1221C26.9128 23.995 27.0019 24.8998 27.3425 25.7221C27.6831 26.5443 28.2599 27.2471 28.9999 27.7416C29.74 28.2361 30.61 28.5 31.5 28.5C32.6935 28.5 33.8381 28.0259 34.682 27.182C35.5259 26.3381 36 25.1935 36 24Z" fill="#414651" />
      </svg>



    ),
    bgColor: "bg-secondary-light",
  },
  {
    title:"Patients Capacity",
    value: "2500/3500",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 48 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33 13.4997C33 13.8975 32.842 14.279 32.5607 14.5603C32.2794 14.8416 31.8978 14.9997 31.5 14.9997H16.5C16.1022 14.9997 15.7206 14.8416 15.4393 14.5603C15.158 14.279 15 13.8975 15 13.4997C15 13.1018 15.158 12.7203 15.4393 12.439C15.7206 12.1577 16.1022 11.9997 16.5 11.9997H31.5C31.8978 11.9997 32.2794 12.1577 32.5607 12.439C32.842 12.7203 33 13.1018 33 13.4997ZM31.5 17.9997H16.5C16.1022 17.9997 15.7206 18.1577 15.4393 18.439C15.158 18.7203 15 19.1018 15 19.4997C15 19.8975 15.158 20.279 15.4393 20.5603C15.7206 20.8416 16.1022 20.9997 16.5 20.9997H31.5C31.8978 20.9997 32.2794 20.8416 32.5607 20.5603C32.842 20.279 33 19.8975 33 19.4997C33 19.1018 32.842 18.7203 32.5607 18.439C32.2794 18.1577 31.8978 17.9997 31.5 17.9997ZM48 13.4997V17.9997C48 19.591 47.3679 21.1171 46.2426 22.2423C45.1174 23.3675 43.5913 23.9997 42 23.9997H41.0269C39.6787 26.9622 36.9413 29.5178 32.9213 31.5297C30.1744 32.8768 27.2664 33.8667 24.2681 34.4753C24.0909 34.5078 23.9091 34.5078 23.7319 34.4753C20.7336 33.8667 17.8256 32.8768 15.0787 31.5297C11.0625 29.5178 8.32125 26.9622 6.97312 23.9997H6C4.4087 23.9997 2.88258 23.3675 1.75736 22.2423C0.632141 21.1171 0 19.591 0 17.9997V13.4997C0 11.9084 0.632141 10.3822 1.75736 9.25701C2.88258 8.1318 4.4087 7.49966 6 7.49966H6.15937C6.30117 7.07061 6.53804 6.67914 6.85232 6.35447C7.16661 6.0298 7.55017 5.78032 7.97437 5.62466L22.9744 0.17028C23.6371 -0.0697807 24.3629 -0.0697807 25.0256 0.17028L40.0256 5.62466C40.4498 5.78032 40.8334 6.0298 41.1477 6.35447C41.462 6.67914 41.6988 7.07061 41.8406 7.49966H42C43.5913 7.49966 45.1174 8.1318 46.2426 9.25701C47.3679 10.3822 48 11.9084 48 13.4997ZM6.10312 20.9997C6.03462 20.5026 6.00017 20.0014 6 19.4997V10.4997C5.20435 10.4997 4.44129 10.8157 3.87868 11.3783C3.31607 11.9409 3 12.704 3 13.4997V17.9997C3 18.7953 3.31607 19.5584 3.87868 20.121C4.44129 20.6836 5.20435 20.9997 6 20.9997H6.10312ZM39 19.4997V8.45403L24 2.99965L9 8.45403V19.4997C9 27.9372 21.9544 31.0347 24 31.4697C26.0419 31.0347 39 27.9372 39 19.4997ZM45 13.4997C45 12.704 44.6839 11.9409 44.1213 11.3783C43.5587 10.8157 42.7956 10.4997 42 10.4997V19.4997C41.9998 20.0014 41.9654 20.5026 41.8969 20.9997H42C42.7956 20.9997 43.5587 20.6836 44.1213 20.121C44.6839 19.5584 45 18.7953 45 17.9997V13.4997Z" fill="#414651" />
      </svg>

    ),
    bgColor: "bg-secondary-light",
  },
];


const addressFields = [
  { label: "Building Number", value: "Building Number" },
  { label: "Street Name", value: "Street Name" },
  { label: "Region", value: "Region" },
  { label: "Country", value: "Country" },
  { label: "Nation", value: "Nation" },
];

const contactInfo = {
  phoneNumbers:  ["+966 50 000-0000"],
  email: "info@medcaregroup.com",
  physicalAddress: {
    buildingNumber: "Building Number",
    streetName: "Street Name",
    region: "Region",
    country: "Country",
    nation: "Nation",
  },
  mapsLocation: "www.medcaregroup.com",
};

const linkedClinics = [
  {
    number: 1,
    name: "Internal Medicine",
    pic: "Hessa AlMutairi",
    appointmentsCount: 10,
    doctors: 5,
    status: "Active",
  },
  {
    number: 2,
    name: "Internal Medicine",
    pic: "Hessa AlMutairi",
    appointmentsCount: 10,
    doctors: 5,
    status: "Active",
  },
  {
    number: 3,
    name: "Internal Medicine",
    pic: "Hessa AlMutairi",
    appointmentsCount: 10,
    doctors: 5,
    status: "Active",
  },
  {
    number: 4,
    name: "Internal Medicine",
    pic: "Hessa AlMutairi",
    appointmentsCount: 10,
    doctors: 5,
    status: "Active",
  },
];

const departments = [
  {
    number: 1,
    name: "Internal Medicine",
    description:
      "Handles the diagnosis and nonsurgical treatment of diseases in adults, including chronic conditions such as hypertension and diabetes.",
  },
  {
    number: 2,
    name: "Internal Medicine",
    description:
      "Handles the diagnosis and nonsurgical treatment of diseases in adults, including chronic conditions such as hypertension and diabetes.",
  },
  {
    number: 3,
    name: "Internal Medicine",
    description:
      "Handles the diagnosis and nonsurgical treatment of diseases in adults, including chronic conditions such as hypertension and diabetes.",
  },
];

const doctorsAndStaff = [
  {
    number: 1,
    userId: "444",
    name: "Dr. Ahmed Hassan",
    clinic: "Cardiology Clinic",
    userType: "Doctor",
    status: "Active",
    
avatar:null,
  },
  {
    number: 2,
    userId: "6666",
    name: "Dr. Ahmed Hassan",
    clinic: "Cardiology Clinic",
    userType: "Doctor",
    status: "Active",
avatar:null,  },
  {
    number: 3,
    userId: "1234",
    name: "Dr. Ahmed Hassan",
    clinic: "Cardiology Clinic",
    userType: "Doctor",
    status: "Active",
  avatar:null,},
  {
    number: 4,
    userId: "5667",
    name: "Dr. Ahmed Hassan",
    clinic: "Cardiology Clinic",
    userType: "Doctor",
    status: "Active",
 avatar:null, },
];

const workingDays = (t: (key: string) => string) => [
  { day: t("Sunday"),    startTime: "09:00", endTime: "18:00", isActive: true },
  { day: t("Monday"),    startTime: "09:00", endTime: "18:00", isActive: true },
  { day: t("Tuesday"),   startTime: "09:00", endTime: "18:00", isActive: true },
  { day: t("Wednesday"), startTime: "09:00", endTime: "18:00", isActive: true },
  { day: t("Thursday"),  startTime: "09:00", endTime: "18:00", isActive: true },
  { day: t("Friday"),    startTime: "09:00", endTime: "18:00", isActive: false },
  { day: t("Saturday"),  startTime: "09:00", endTime: "18:00", isActive: true },
];






interface NoDataSectionProps {
  local: string;
  dark: boolean;
  handelDarkClick: () => void;
  handleLanguageClick: () => void;
// ⬅️ البروبس الجديد
}


export const MedicalDetailsSection = ({ local, dark, handleLanguageClick ,  }: NoDataSectionProps): JSX.Element => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);




  const [activeDays, setActiveDays] = useState(workingDays(t).map(() => false));

  const [isOpen, setIsOpen] = useState({
    clinicInfo: true,
    contactInfo: true,
    departments:true,
    workingDays: true,
    doctorsStaff: true,
    mapsLocation: true
  });
  const handleToggle = (key: keyof typeof isOpen, open: boolean) => {
    setIsOpen(prev => ({
      ...prev,
      [key]: open
    }))
  };

  const toggleDay = (index: number) => {
    setActiveDays((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };
  const handleDateChange = (date: Date) => {

    // يمكنك هنا إجراء أي عمل تريده مع التاريخ المحدد
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
   <div className="flex flex-col w-full overflow-hidden  min-h-screen items-start gap-4 py-4 pl-0 pr-5">
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
        {t("Medical Facilities")}
      </h1>
      <p className="text-xs text-on-surface-primary">
        {t("Edit Complex Details")}
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
    <div className="absolute top-1 left-4 w-2 h-2 bg-[#fa812d] rounded-full" />
  </div>
</div>




  {/* نسخة الـ Desktop/Laptop */}
  <div className="hidden md:flex w-full items-center justify-between">
    {/* Left Side */}
    <div className="flex items-center gap-4">
      <div className="flex flex-col">
        <h1 className="font-bold text-base md:text-lg lg:text-xl text-on-surface-primary">
           {t("Medical Facilities")}
        </h1>
        <p className="text-sm md:text-base text-on-surface-primary">
                 {t("Edit Complex Details")}
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
        <div className="absolute top-1 left-4 w-2 h-2 bg-[#fa812d] rounded-full" />
      </div>

      {/* Language Switch */}
      <div className="relative">
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



 
  <Card className="flex flex-col h-full items-start  gap-5 p-[20px] w-full rounded-2xl overflow-hidden bg-background-tertiary">
        <CardContent className="w-full overflow-y-auto scroll-x-hidden ">
          <div className="flex justify-between items-center w-full" dir={local === 'ar' ? 'rtl' : 'ltr'}>
            <Toggle />
      <div className="flex gap-[14px]  justify-end p-3 items-end text-end pb-2 sm:pb-3 md:pb-3 lg:pb-4 "  dir={local === 'ar' ? 'rtl' : 'ltr'} >
              <button className="     w-[100px] h-[40px]       /* الموبايل الافتراضي */
    sm:w-[100px] sm:h-[26px] 
    md:w-[180px] md:h-[38px]
    lg:w-[200px] lg:h-[40px] 
 
      rounded-[20px] border border-border-light bg-surface-primary  font-lato font-medium text-sm leading-[100%] tracking-[0] text-text-primary">
                {t("Cancel")}
              </button>
              <button className="  w-[100px] h-[40px]       /* الموبايل الافتراضي */
    sm:w-[100px] sm:h-[24px] 
    md:w-[160px] md:h-[36px]
    lg:w-[200px] lg:h-[40px]  rounded-[20px] bg-secondary-dark font-lato font-medium text-sm leading-[100%] tracking-[0] text-surface-primary">
                {t("Save")}
              </button>
        
          </div>
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
    {capacityData(t).map((item, index) => (
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
          <div className="grid">
     <div className="font-semibold text-text-primary  text-[clamp(14px,1.1vw,16px)] md:text-lg lg:text-xl">
      {item.title}
    </div>
    <div className="font-semibold text-text-primary text-xs sm:text-sm md:text-base lg:text-lg">
      {item.value}
    </div>
          </div>
          <div  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-13">
            {item.icon}
          </div>
        </CardContent>
      </Card>
    ))}
    
    
    
        </div>
      </div>
    </Card>


   <ReusableCollapsible
  dir={local === "ar" ? "rtl" : "ltr"}
  title={t("Complax Information")}
  initiallyOpen={isOpen.mapsLocation}
  onOpenChange={(open) => handleToggle("mapsLocation", open)}
  content={
    <div className="flex flex-col lg:flex-row items-start pb-4 justify-between gap-6 w-full">
      {/* العمود الأول */}
      <div className="grid gap-y-6 flex-1 w-full">
        {/* Complex Name */}
        <div className="flex flex-col sm:flex-row sm:items-center  w-full">
          <label className="min-w-[160px] text-[clamp(12px,1.1vw,16px)] text-text-primary font-semibold tpx">
            {t("Complex Name")}:
          </label>
          <Input
            defaultValue={complexInformation.name}
            className="w-full max-w-[360px] h-9 sm:h-10 md:h-12  bg-background-secondary border-border-light text-[clamp(12px,1.1vw,16px)]"
            placeholder={t("Enter complex name")}
          />
        </div>

        {/* Description */}
        <div className="flex flex-col sm:flex-row sm:items-start  w-full">
          <label className="min-w-[160px] text-text-primary font-semibold  text-[clamp(14px,1.1vw,16px)]">
            {t("Description")}:
          </label>
          <Textarea
            className="w-full max-w-[360px] min-h-[96px] border-light border bg-background-secondary text-text-primary text-[clamp(12px,1.1vw,16px)]"
            defaultValue={complexInformation.description}
            placeholder={t("Enter description")}
          />
        </div>
      </div>

      {/* العمود الثاني */}
      <div className="grid gap-6 flex-1 w-full">
        {/* Date Picker */}
        <div className="flex flex-col sm:flex-row sm:items-center  w-full">
     
          <DatePicker
            width="clamp(200px,90vw,360px)"
           
          />
        </div>

    {/* PIC */}
<div className="flex flex-col sm:flex-row sm:items-center  w-full">
  <label className="min-w-[160px]  text-text-primary font-semibold  text-[clamp(14px,1.1vw,16px)]">
    {t("PIC")}:
  </label>
  <Input
    defaultValue={complexInformation.pic}
    className="w-full max-w-[360px] h-9 sm:h-10 md:h-12  bg-background-secondary border-border-light text-[clamp(12px,1.1vw,16px)]"
    placeholder={t("Enter PIC")}
  />
</div>
      </div>
    </div>
  }
/>






<ReusableCollapsible
  dir={local === "ar" ? "rtl" : "ltr"}
  title={t("Department List")}
  initiallyOpen={isOpen.departments}
  onOpenChange={(open) => handleToggle("departments", open)}
  content={
    <div className="p-0">
      <div className="overflow-x-auto w-full">
        <Table className="min-w-[600px] border-collapse w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[10%] text-text-praimary font-semibold text-center px-1 sm:px-2 md:px-4">
                {t("No")}
              </TableHead>
              <TableHead className="w-[30%] text-center text-text-praimary font-semibold px-1 sm:px-2 md:px-4">
                {t("Department Name")}
              </TableHead>
              <TableHead className="w-[60%] text-center text-text-praimary font-semibold px-1 sm:px-2 md:px-4">
                {t("Description")}
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {departments.map((department, index) => (
              <TableRow
                key={department.number}
                className="border-b border-[#e4e2dd]"
              >
                {/* Number */}
                <TableCell className="text-center text-text-primary font-title-14px-semibold px-1 sm:px-2 md:px-4">
                  {department.number}
                </TableCell>

                {/* Department Name */}
                <TableCell className="text-text-primary font-title-14px-semibold px-1 sm:px-2 md:px-4">
                  <div className="flex justify-center">
                    <Input
                      defaultValue={department.name}
                      className="w-[160px] sm:w-[200px] md:w-[240px] h-[32px] rounded-none text-text-primary border-border-light"
                    />
                  </div>
                </TableCell>

                {/* Description */}
                <TableCell className="px-1 sm:px-2 md:px-4">
                  <div className="flex justify-center">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <Textarea
                        defaultValue={department.description}
                        className="w-[240px] sm:w-[360px] md:w-[480px] lg:w-[514px] h-[54px] text-text-primary border-[#e4e2dd] resize-none"
                      />
                      {index > 0 ? (
                        <MinusIcon className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-dark" />
                      ) : (
                        <MinusIcon className="w-5 h-5 invisible" />
                      )}
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Add Button */}
      <div className="flex justify-end p-2">
        <PlusIcon className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer text-secondary-dark" />
      </div>
    </div>
  }
/>





        {/* Clinic Contact Information Collapsible */}
          <ReusableCollapsible
            title={t("Complex Contact Information")}
            initiallyOpen={isOpen.clinicInfo}
            dir={local === 'ar' ? 'rtl' : 'ltr'}
            onOpenChange={(open) => handleToggle("clinicInfo", open)}
            content={<div className="px-4 pb-4  ">      <div className="space-y-7 justi">




              <div className=" flex gap-x-[123px]  flex-wrap  " >



              <div className="w-auto rounded-md py-1">
                  {/* Label + Input */} <div className="flex flex-col sm:w-[520px] sm:flex-row"> {/* Label + Icon */} <div className="flex items-center gap-2"> 
                    <div className="text-text-primary"> <svg  className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.77089 1.79165C4.74396 1.78995 4.69757 1.79131 4.62528 1.80353C3.77857 1.94663 3.00486 2.37648 2.43547 3.02333C1.97218 3.54965 1.66854 4.19192 1.55287 4.87525C1.48516 5.27528 1.49216 5.71071 1.52066 6.19936C1.69143 9.12694 2.92996 11.9003 5.01501 13.9853C7.18212 16.1525 10.0928 17.4051 13.1473 17.4949C13.5053 17.5054 13.8283 17.4977 14.1251 17.4475C14.8084 17.3318 15.4507 17.0282 15.977 16.5649C16.6598 15.9639 17.1008 15.1353 17.218 14.2335L17.2168 14.233L17.2168 14.2329L12.8295 12.3487L12.8294 12.3487L12.8294 12.3487L10.4887 13.9123C10.4881 13.9127 10.4874 13.9132 10.4868 13.9136C10.2713 14.0586 10.0219 14.1451 9.76298 14.1648C9.50325 14.1845 9.24287 14.1363 9.00745 14.0248L9.00328 14.0228C7.25484 13.1817 5.84277 11.7732 4.99715 10.0269L4.99564 10.0238L4.99565 10.0238C4.88489 9.79239 4.83535 9.5364 4.85176 9.28035C4.86817 9.0243 4.94999 8.77673 5.0894 8.56133L5.09234 8.55678L5.09236 8.55679L6.65297 6.18316L6.65155 6.17989L6.65156 6.17988L4.77089 1.79165ZM17.2189 14.2264L17.2189 14.2266L17.2189 14.2264ZM4.37532 0.324505C4.70725 0.268408 5.26379 0.236222 5.73387 0.632745C5.91326 0.784063 6.05538 0.976462 6.14718 1.19512L8.02884 5.58566C8.02911 5.58629 8.02938 5.58692 8.02965 5.58755C8.12707 5.81269 8.16779 6.05829 8.14822 6.30284C8.1286 6.54807 8.04897 6.78472 7.91634 6.99191L7.9114 6.99963L7.91135 6.9996L6.3487 9.37632C7.04612 10.8147 8.20932 11.9751 9.6494 12.6691L9.65244 12.667L9.65244 12.667L11.9944 11.1026C12.2022 10.9623 12.4421 10.8767 12.6918 10.8537C12.9415 10.8307 13.193 10.871 13.423 10.9711C13.4239 10.9715 13.4249 10.9719 13.4258 10.9723L17.8056 12.8533C18.1054 12.9793 18.3558 13.1998 18.5186 13.4813C18.6822 13.7643 18.7483 14.0931 18.7067 14.4173C18.5445 15.6835 17.9264 16.8473 16.9681 17.6908C16.2313 18.3395 15.3321 18.7645 14.3755 18.9264C13.9356 19.0009 13.4989 19.0059 13.1033 18.9942C9.66683 18.8932 6.39236 17.484 3.95435 15.046C1.60865 12.7003 0.215328 9.58029 0.0232104 6.28671C-0.00635157 5.77991 -0.0237603 5.20192 0.0739086 4.62491C0.235831 3.6683 0.660897 2.76911 1.30954 2.03223C2.1067 1.12662 3.18988 0.524849 4.37532 0.324505Z" fill="CurrentColor"/>
</svg>
 </div> 
                    <div className="text-text-primary  font-semibold sm:w-[clamp(120px,10vw,160px)]  text-[clamp(14px,1.1vw,16px)]"> 
                      {t("Phone Number")}: </div>
                       </div> {/* Phone Input */}
                        <div className="relative w-full "> 
                            <PhoneInputCustom value={contactInfo.phoneNumbers} 
                                                   /> 
                         </div> </div>
                              {/* Plus Icon */} 
                              <div className="flex text-secondary-dark justify-end p-2"> 
                                <PlusIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 cursor-pointer" /> </div> 
                              </div>

                {/* Email */}



                <div className="flex flex-col sm:flex-row lg:items-start sm:items-center gap-y-2 gap-x-4  w-full sm:w-[520px]">
                  {/* Label + Icon */}
                  <div className="flex items-center mt-2 gap-2 min-w-[180px] sm:justify-start">
                    <svg
                      className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6"
                      viewBox="0 0 22 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.07923 0.787497C10.0441 0.737503 11.9541 0.737499 13.9191 0.787497C17.157 0.869496 18.9413 0.915255 20.2843 2.25625C21.6291 3.61122 21.6655 5.3485 21.7325 8.50136C21.7535 9.50833 21.7535 10.4866 21.7325 11.4936C21.6656 14.6461 21.6288 16.3819 20.2872 17.7348C18.9422 19.0788 17.158 19.1244 13.92 19.2064C12.9381 19.2314 11.9691 19.2445 11.0001 19.2445C10.0312 19.2445 9.06212 19.2314 8.0802 19.2064C4.84234 19.1244 3.05795 19.0785 1.71497 17.7377C0.370009 16.3827 0.332745 14.6454 0.265749 11.4926C0.24475 10.4856 0.244751 9.50735 0.265749 8.50039C0.332749 5.34739 0.370038 3.6112 1.71204 2.2582C3.05703 0.914271 4.84128 0.869495 8.07923 0.787497ZM13.881 2.28554C11.9421 2.23555 10.0572 2.23555 8.11731 2.28554C5.07934 2.36254 3.69256 2.39684 2.77356 3.31582C1.85556 4.24182 1.82677 5.58664 1.76477 8.53164C1.74378 9.5165 1.74378 10.4745 1.76477 11.4603C1.82677 14.4053 1.85648 15.7502 2.77747 16.6771C3.69447 17.593 5.08048 17.6294 8.11829 17.7064C10.0572 17.7564 11.9421 17.7564 13.882 17.7064C16.9199 17.6294 18.3057 17.5941 19.2247 16.6752C20.1427 15.7492 20.1715 14.4053 20.2335 11.4603C20.2545 10.4755 20.2545 9.5175 20.2335 8.53164C20.1715 5.58664 20.1428 4.24086 19.2218 3.31386C18.3048 2.39817 16.9186 2.36253 13.881 2.28554ZM5.35462 6.11074C5.56562 5.75474 6.02596 5.63509 6.38196 5.84609L9.32337 7.58633C10.7954 8.45333 11.2039 8.45333 12.6779 7.58633L15.6183 5.84707C15.9753 5.63607 16.4356 5.75472 16.6456 6.11172C16.8564 6.46859 16.7387 6.92802 16.382 7.13808L13.4396 8.87832C12.4588 9.45619 11.73 9.74442 11.0001 9.74453C10.2711 9.74453 9.54165 9.45532 8.56165 8.87832L5.61829 7.13711C5.26276 6.92603 5.14393 6.46654 5.35462 6.11074Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-text-primary  font-semibold  text-[clamp(14px,1.1vw,16px)]">
                      {t("Email")}:
                    </span>
                  </div>

                  {/* Input */}
                  <Input
                    className="flex-1 w-[min(100%,360px)]  h-9 sm:h-10 md:h-12 
      border-light border bg-background-secondary 
      text-text-primary font-sans"
                    defaultValue={contactInfo.email}
                  />
                </div>

              </div>






              <div className="flex flex-col md:flex-row md:items-start lg:items-start   gap-3">
                <div className="flex w-[186px] items-center gap-4 mt-2">
                  <div className="  text-text-primary ">     <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 7.5C10.5 7.20333 10.588 6.91332 10.7528 6.66665C10.9176 6.41997 11.1519 6.22771 11.426 6.11418C11.7001 6.00065 12.0017 5.97094 12.2926 6.02882C12.5836 6.0867 12.8509 6.22956 13.0607 6.43934C13.2704 6.64912 13.4133 6.91639 13.4712 7.20736C13.5291 7.49834 13.4994 7.79994 13.3858 8.07403C13.2723 8.34811 13.08 8.58238 12.8334 8.7472C12.5867 8.91203 12.2967 9 12 9C11.6022 9 11.2206 8.84196 10.9393 8.56066C10.658 8.27936 10.5 7.89782 10.5 7.5ZM6 7.5C6 5.9087 6.63214 4.38258 7.75736 3.25736C8.88258 2.13214 10.4087 1.5 12 1.5C13.5913 1.5 15.1174 2.13214 16.2426 3.25736C17.3679 4.38258 18 5.9087 18 7.5C18 13.1203 12.6019 16.2694 12.375 16.4016C12.2617 16.4663 12.1334 16.5004 12.0028 16.5004C11.8723 16.5004 11.744 16.4663 11.6306 16.4016C11.3981 16.2694 6 13.125 6 7.5ZM7.5 7.5C7.5 11.4563 10.86 14.0822 12 14.8594C13.1391 14.0831 16.5 11.4563 16.5 7.5C16.5 6.30653 16.0259 5.16193 15.182 4.31802C14.3381 3.47411 13.1935 3 12 3C10.8065 3 9.66193 3.47411 8.81802 4.31802C7.97411 5.16193 7.5 6.30653 7.5 7.5ZM19.0097 13.8403C18.8251 13.7793 18.624 13.7924 18.4489 13.8768C18.2738 13.9612 18.1382 14.1102 18.0709 14.2926C18.0035 14.475 18.0096 14.6764 18.0879 14.8543C18.1661 15.0323 18.3104 15.1729 18.4903 15.2466C20.0381 15.8194 21 16.5863 21 17.25C21 18.5025 17.5763 20.25 12 20.25C6.42375 20.25 3 18.5025 3 17.25C3 16.5863 3.96187 15.8194 5.50969 15.2475C5.6896 15.1739 5.8339 15.0332 5.91215 14.8553C5.99039 14.6773 5.99648 14.4759 5.92913 14.2935C5.86178 14.1112 5.72624 13.9621 5.5511 13.8777C5.37596 13.7933 5.17491 13.7803 4.99031 13.8412C2.73937 14.6709 1.5 15.8822 1.5 17.25C1.5 20.1731 6.91031 21.75 12 21.75C17.0897 21.75 22.5 20.1731 22.5 17.25C22.5 15.8822 21.2606 14.6709 19.0097 13.8403Z" fill="currentColor" />
                  </svg>
                  </div>

                  <div className="min-w-[160px] text-text-primary font-semibold  text-[clamp(14px,1.1vw,16px)]">
                    {t("Physical Address")}:
                  </div >
                </div>
                <div className="grid gap-4 w-full grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
                  {addressFields.map((field, index) => (
                    <Input
                      key={index}
                      className=" w-[min(100%,172px)] h-9 sm:h-10 md:h-12  border-light border bg-background-secondary  text-text-primary  font-sans"
                      placeholder={field.label}
                    />
                  ))}
                </div>
              </div>





              <div className=" flex gap-x-[121px]  gap-y-11 flex-wrap ">






                <div className="flex flex-col sm:flex-row sm:items-center w-full sm:w-[520px]  h-12 gap-y-2 gap-x-8">
                  {/* Label + Icon */}
                  <div className="flex items-center gap-2 sm:w-[166px] h-6 flex-shrink-0">
                    <div className="   text-text-primary "> <svg className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 0.25C8.07164 0.25 6.18657 0.821828 4.58319 1.89317C2.97982 2.96451 1.73013 4.48726 0.992179 6.26884C0.254225 8.05042 0.061142 10.0108 0.437348 11.9021C0.813554 13.7934 1.74215 15.5307 3.10571 16.8943C4.46928 18.2579 6.20656 19.1865 8.09787 19.5627C9.98919 19.9389 11.9496 19.7458 13.7312 19.0078C15.5127 18.2699 17.0355 17.0202 18.1068 15.4168C19.1782 13.8134 19.75 11.9284 19.75 10C19.747 7.41505 18.7188 4.93683 16.891 3.109C15.0632 1.28116 12.585 0.252977 10 0.25ZM18.25 10C18.2507 10.7608 18.1456 11.5181 17.9378 12.25H14.3275C14.5575 10.7588 14.5575 9.24118 14.3275 7.75H17.9378C18.1456 8.48192 18.2507 9.23916 18.25 10ZM7.5625 13.75H12.4375C11.9572 15.3237 11.1235 16.7667 10 17.9688C8.87695 16.7664 8.04326 15.3235 7.5625 13.75ZM7.19688 12.25C6.93939 10.7611 6.93939 9.23895 7.19688 7.75H12.8106C13.0681 9.23895 13.0681 10.7611 12.8106 12.25H7.19688ZM1.75 10C1.74935 9.23916 1.85442 8.48192 2.06219 7.75H5.6725C5.4425 9.24118 5.4425 10.7588 5.6725 12.25H2.06219C1.85442 11.5181 1.74935 10.7608 1.75 10ZM12.4375 6.25H7.5625C8.04277 4.67632 8.87652 3.2333 10 2.03125C11.1231 3.23361 11.9567 4.67653 12.4375 6.25ZM17.3434 6.25H14.0041C13.5832 4.70585 12.8738 3.25532 11.9134 1.975C13.0738 2.25375 14.1602 2.7801 15.098 3.51799C16.0359 4.25588 16.8032 5.18784 17.3472 6.25H17.3434ZM8.08657 1.975C7.12619 3.25532 6.41683 4.70585 5.99594 6.25H2.65282C3.19682 5.18784 3.96407 4.25588 4.90196 3.51799C5.83985 2.7801 6.92621 2.25375 8.08657 1.975ZM2.65282 13.75H5.99594C6.41683 15.2941 7.12619 16.7447 8.08657 18.025C6.92621 17.7463 5.83985 17.2199 4.90196 16.482C3.96407 15.7441 3.19682 14.8122 2.65282 13.75ZM11.9134 18.025C12.8738 16.7447 13.5832 15.2941 14.0041 13.75H17.3472C16.8032 14.8122 16.0359 15.7441 15.098 16.482C14.1602 17.2199 13.0738 17.7463 11.9134 18.025Z" fill="CurrentColor" />
                    </svg></div>
                    <span className="min-w-[160px] text-text-primary font-semibold  text-[clamp(14px,1.1vw,16px)] leading-6">
                      {t("Company Website")}:
                    </span>
                  </div>

                  {/* Input */}
                  <div className="w-[min(100%,360px)]">
                    <Input
                      className="w-[min(100%,360px)] h-9 sm:h-10 md:h-12 
                 border border-light rounded-md bg-background-secondary 
                 text-text-primary font-sans"
                      defaultValue={contactInfo.mapsLocation}
                    />
                  </div>
                </div>









                <div className="flex flex-col sm:flex-row sm:items-center w-full sm:w-[520px] gap-y-2 gap-x-10">
                  {/* Label + Icon */}
                  <div className="flex items-center gap-2 w-full sm:w-[160px]">
                    <div className="   text-text-primary "> <svg className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.5 11.2506C20.3402 11.2506 22.75 13.5936 22.75 16.4635C22.7499 17.934 22.125 19.158 21.2783 20.1461C20.4378 21.127 19.3524 21.9075 18.3545 22.5182L18.3438 22.525L18.332 22.5318C18.0781 22.6751 17.7914 22.7506 17.5 22.7506C17.2086 22.7506 16.9219 22.6751 16.668 22.5318L16.6543 22.524L16.6416 22.5162C15.649 21.9017 14.5644 21.1239 13.7236 20.1461C12.876 19.1602 12.2501 17.9387 12.25 16.4635C12.25 13.5936 14.6598 11.2506 17.5 11.2506ZM17.5 12.7506C15.4697 12.7506 13.75 14.4405 13.75 16.4635C13.7501 17.4816 14.1747 18.3689 14.8613 19.1676C15.5508 19.9694 16.4773 20.6494 17.4131 21.2301C17.4395 21.2433 17.4696 21.2506 17.5 21.2506C17.5308 21.2506 17.5612 21.2427 17.5879 21.2291C18.5226 20.6559 19.4494 19.9747 20.1387 19.1705C20.8255 18.3689 21.2499 17.4779 21.25 16.4635C21.25 14.4405 19.5303 12.7506 17.5 12.7506ZM7.98828 1.75156C8.49476 1.73509 8.95906 1.85034 9.4541 2.04257C9.92734 2.22637 10.4758 2.49992 11.1445 2.83457L14.5068 4.51816C14.7443 4.63698 14.8895 4.70636 14.9902 4.75058C14.9935 4.75054 14.9967 4.75058 15 4.75058C15.1285 4.75058 15.2478 4.78545 15.3535 4.84238C15.4629 4.84963 15.6273 4.85312 15.9209 4.85312H18.0527C18.9499 4.85309 19.7008 4.85276 20.2969 4.93515C20.9286 5.02252 21.4976 5.21564 21.9522 5.6832C22.4036 6.14772 22.5873 6.72345 22.6709 7.36289C22.7505 7.97187 22.75 8.74029 22.75 9.6666V10.5006C22.7498 10.9146 22.4141 11.2506 22 11.2506C21.5859 11.2506 21.2502 10.9146 21.25 10.5006V9.71738C21.25 8.72711 21.248 8.05747 21.1826 7.55722C21.1198 7.07661 21.0101 6.86605 20.876 6.72812C20.7447 6.59331 20.5488 6.48469 20.0918 6.42148C19.6105 6.35491 18.9646 6.35312 18 6.35312H15.8594C15.8223 6.35314 15.7858 6.35121 15.75 6.35117V9.50058C15.7498 9.91462 15.4141 10.2506 15 10.2506C14.5859 10.2506 14.2502 9.91462 14.25 9.50058V6.05918C14.1373 6.00639 14.0183 5.95079 13.8916 5.8873C13.8732 5.87808 13.8547 5.86839 13.8359 5.85898L10.5039 4.19199C9.79625 3.83786 9.31111 3.59536 8.91113 3.44003C8.85496 3.41822 8.80094 3.40003 8.75 3.38242V16.8199C9.25305 16.9102 9.71472 17.1023 10.1191 17.3014C10.3418 17.4109 10.5589 17.5281 10.7598 17.6373L10.7891 17.6539C10.9828 17.7592 11.1613 17.8556 11.3359 17.943C11.7063 18.1284 11.8562 18.5794 11.6709 18.9498C11.4855 19.3202 11.0345 19.4701 10.6641 19.2848C10.4657 19.1855 10.2667 19.0772 10.0791 18.9752L10.043 18.9557C9.84013 18.8454 9.64784 18.7414 9.45606 18.6471C9.06955 18.4569 8.72722 18.3275 8.40235 18.2828C7.65872 18.1807 7.05177 18.5352 6.11914 19.0797L6.0625 19.1119C5.44356 19.4733 4.92893 19.7738 4.50293 19.9674C4.07219 20.1631 3.60392 20.313 3.10938 20.2242C2.57481 20.1282 2.09595 19.839 1.75684 19.4156C1.44633 19.0279 1.34269 18.5482 1.2959 18.0699C1.24954 17.5959 1.24999 16.9896 1.25 16.2555V7.96445C1.24999 7.40957 1.24969 6.94068 1.28711 6.55234C1.32684 6.14027 1.41321 5.75989 1.61914 5.39609C1.82569 5.03132 2.10707 4.7646 2.43945 4.52304C2.75106 4.29661 3.14922 4.06381 3.61719 3.79062C3.62723 3.78476 3.63735 3.77894 3.64746 3.77304L4.90527 3.03867C5.55205 2.66105 6.08217 2.35153 6.54297 2.1373C7.02501 1.91324 7.48175 1.76809 7.98828 1.75156ZM7.17578 3.49765C6.78602 3.67883 6.3162 3.95162 5.63184 4.35117L4.40332 5.06796C3.89687 5.36364 3.56483 5.559 3.32129 5.73593C3.09187 5.90266 2.98989 6.02043 2.92481 6.13535C2.8591 6.25142 2.80846 6.40366 2.78027 6.69589C2.75059 7.00379 2.75 7.40011 2.75 7.99863V16.2164C2.75 16.9999 2.75071 17.5323 2.78906 17.9244C2.82785 18.3205 2.89603 18.4385 2.92774 18.4781C3.0441 18.6234 3.20391 18.7169 3.375 18.7477C3.41122 18.754 3.53316 18.761 3.88281 18.6021C4.23043 18.4442 4.67832 18.1838 5.3418 17.7965C5.39461 17.7656 5.44886 17.7332 5.50391 17.7008C5.99631 17.4105 6.57792 17.0673 7.25 16.8883V3.46543C7.22602 3.4761 7.20084 3.486 7.17578 3.49765ZM17.5088 15.5006C18.0611 15.5006 18.5088 15.9483 18.5088 16.5006C18.5086 17.0527 18.0609 17.5006 17.5088 17.5006H17.5C16.9478 17.5006 16.5002 17.0527 16.5 16.5006C16.5 15.9483 16.9477 15.5006 17.5 15.5006H17.5088Z" fill="currentColor" />
                    </svg></div>
                    <span className="text-text-primary min-w-[160px] font-semibold  text-[clamp(14px,1.1vw,16px)]">
                      {t("Maps Location")}:
                    </span>
                  </div>

                  {/* Input */}
                  <Input
                    className="w-[min(100%,360px)] md:w-[360px] h-9 sm:h-10 md:h-12 
               border border-light rounded-md bg-background-secondary 
               text-text-primary font-sans"
                    defaultValue={contactInfo.mapsLocation}
                  />
                </div>







              </div>


            </div></div>}

          />











          <ReusableCollapsible
            title={t("  Linked Clinics ")}
            dir={local === 'ar' ? 'rtl' : 'ltr'}
            initiallyOpen={isOpen.mapsLocation}
            onOpenChange={(open) => handleToggle("mapsLocation", open)}
            content={<div className="p-0">    
    <div className="w-full overflow-x-auto">
  <Table className="min-w-[700px]"> {/* بتحدد أقل عرض مشان السكرول يشتغل */}
    <TableHeader>
      <TableRow>
        <TableHead className="w-[58px] text-center font-semiboldtext-[clamp(14px,2vw,16px)]  text-text-primary">
          {t("NO")}
        </TableHead>
        <TableHead className="text-center w-[175px] font-semiboldtext-[clamp(14px,2vw,16px)]  text-text-primary">
          {t("Name")}
        </TableHead>
        <TableHead className="text-center w-[175px] font-semiboldtext-[clamp(14px,2vw,16px)]  text-text-primary">
          {t("PIC")}
        </TableHead>
        <TableHead className="w-[255px] text-center font-semiboldtext-[clamp(14px,2vw,16px)]  text-text-primary">
          {t("Scheduled Appointments Count")}
        </TableHead>
        <TableHead className="text-center w-[125px] font-semiboldtext-[16px]  text-text-primary">
          {t("Doctors")}
        </TableHead>
        <TableHead className="text-center w-[125px] font-semiboldtext-[16px]  text-text-primary">
          {t("Status")}
        </TableHead>
      </TableRow>
    </TableHeader>

    <TableBody>
      {linkedClinics.map((clinic) => (
        <TableRow key={clinic.number} className="border-b border-[#e4e2dd]">
          <TableCell className="text-center font-mediumtext-[14px]  w-[58px] text-text-primary">
            {clinic.number}
          </TableCell>
          <TableCell className="text-center w-[175px] font-mediumtext-[14px]  text-text-primary">
            {clinic.name}
          </TableCell>
          <TableCell className="text-center w-[170px] font-mediumtext-[14px] text-text-primary">
            {clinic.pic}
          </TableCell>
          <TableCell className="text-center w-[255px]  font-mediumtext-[14px]  text-text-primary">
            {clinic.appointmentsCount}
          </TableCell>
          <TableCell className="text-center w-[150px] font-mediumtext-[14px]  text-text-primary">
            {clinic.doctors}
          </TableCell>
          <TableCell className="text-center">
            <div className="flex items-center justify-center gap-2">
              <Badge className="bg-secondary-light text-secondary-dark rounded-[20px] w-[92px] h-[24px] justify-centertext-[16px] sm:text-xs md:text-sm">
                  {t("Active")}
              </Badge>
            </div>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</div>

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
                <path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" fill="#333"/>
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="#333"/>
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
                <path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="#333"/>
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" fill="#333"/>
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
                <path d="M11.726 12L12.666 11.06L9.61268 8L12.666 4.94L11.726 4L7.72602 8L11.726 12Z" fill="#333"/>
                <path d="M7.33344 12L8.27344 11.06L5.2201 8L8.27344 4.94L7.33344 4L3.33344 8L7.33344 12Z" fill="#333"/>
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M4.27398 4L3.33398 4.94L6.38732 8L3.33398 11.06L4.27398 12L8.27398 8L4.27398 4Z" fill="#333"/>
                <path d="M8.66656 4L7.72656 4.94L10.7799 8L7.72656 11.06L8.66656 12L12.6666 8L8.66656 4Z" fill="#333"/>
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
                <path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" fill="#333"/>
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="#333"/>
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
                <path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="#333"/>
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" fill="#333"/>
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
                <path d="M4.27398 4L3.33398 4.94L6.38732 8L3.33398 11.06L4.27398 12L8.27398 8L4.27398 4Z" fill="#333"/>
                <path d="M8.66656 4L7.72656 4.94L10.7799 8L7.72656 11.06L8.66656 12L12.6666 8L8.66656 4Z" fill="#333"/>
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M11.726 12L12.666 11.06L9.61268 8L12.666 4.94L11.726 4L7.72602 8L11.726 12Z" fill="#333"/>
                <path d="M7.33344 12L8.27344 11.06L5.2201 8L8.27344 4.94L7.33344 4L3.33344 8L7.33344 12Z" fill="#333"/>
              </svg>
            )}
          </Button>
        </PaginationItem>

      </PaginationContent>
    </Pagination>
  </div>

</div>
 </div>}

          />































<ReusableCollapsible
  dir={local === "ar" ? "rtl" : "ltr"}
  title={
<div className="flex items-center gap-1 sm:gap-2 md:gap-4">
  <h2 className="font-title-16px-bold text-primary-dark text-[clamp(14px,2vw,16px)]">
    {t("Doctors")}
  </h2>
  <h2 className="font-title-16px-bold text-primary-dark text-[clamp(14px,2vw,16px)]">
    {t("&")}
  </h2>
  <h2 className="font-title-16px-bold text-primary-dark text-[clamp(14px,2vw,16px)]">
    {t("Staff")}
  </h2>

  <div className="flex items-center gap-1 sm:gap-2 ml-2">
    <Badge className="bg-secondary-light text-on-surface-primary rounded-[20px] px-1.5 py-0.5 text-[clamp(12px,2vw,14px)]">
      {t("All")}
    </Badge>
    <Badge
      variant="outline"
      className="bg-bg text-on-surface-primary rounded-[20px] px-1.5 py-0.5 text-[clamp(12px,2vw,14px)]"
    >
      {t("Doctors")}
    </Badge>
    <Badge
      variant="outline"
      className="bg-bg text-on-surface-primary rounded-[20px] px-1.5 py-0.5 text-[clamp(12px,2vw,14px)]"
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
              <TableHead className="w-[58px] text-center text-text-primary font-semiboldtext-[clamp(14px,2vw,16px)] sm:text-xs md:text-sm">
                {t("NO")}
              </TableHead>
              <TableHead className="text-center text-text-primary  font-semiboldtext-[clamp(14px,2vw,16px)] sm:text-xs md:text-sm">
                {t("User-ID")}
              </TableHead>
              <TableHead className="text-center text-text-primary  font-semiboldtext-[clamp(14px,2vw,16px)] sm:text-xs md:text-sm">
                {t("Name")}
              </TableHead>
              <TableHead className="w-[225px]  text-text-primary  text-center font-semiboldtext-[clamp(14px,2vw,16px)] sm:text-xs md:text-sm">
                {t("Clinic")}
              </TableHead>
              <TableHead className="text-center text-text-primary  font-semiboldtex t-[16px] sm:text-xs md:text-sm">
                {t("User Type")}
              </TableHead>
              <TableHead className="text-center text-text-primary  font-semiboldtext-[clamp(14px,2vw,16px)] ">
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
                <TableCell className="text-center font-mediumtext-[clamp(12px,2vw,16px)] sm:text-xs md:text-sm">
                  {person.number}
                </TableCell>
                <TableCell className="text-center font-mediumtext-[clamp(12px,2vw,16px)] sm:text-xs md:text-sm">
                  {person.userId}
                </TableCell>
                <TableCell className="text-center font-mediumtext-[clamp(12px,2vw,16px)] sm:text-xs md:text-sm">
                  <div className="flex items-center gap-2 justify-center">
                    <Avatar
                      src={person.avatar??undefined}
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
                <TableCell className="text-center font-mediumtext-[clamp(12px,2vw,16px)] sm:text-xs md:text-sm">
                  {person.clinic}
                </TableCell>
                <TableCell className="text-center font-mediumtext-[clamp(12px,2vw,16px)] sm:text-xs md:text-sm">
                  {person.userType}
                </TableCell>
                <TableCell className="text-center">
                  <Badge className="bg-secondary-light text-secondary-dark rounded-[20px] w-[70px] sm:w-[92px] h-[20px] sm:h-[24px] mx-auto flex justify-center items-centertext-[16px] sm:text-xs">
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
                <path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" fill="#333"/>
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="#333"/>
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
                <path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="#333"/>
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" fill="#333"/>
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
                <path d="M11.726 12L12.666 11.06L9.61268 8L12.666 4.94L11.726 4L7.72602 8L11.726 12Z" fill="#333"/>
                <path d="M7.33344 12L8.27344 11.06L5.2201 8L8.27344 4.94L7.33344 4L3.33344 8L7.33344 12Z" fill="#333"/>
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M4.27398 4L3.33398 4.94L6.38732 8L3.33398 11.06L4.27398 12L8.27398 8L4.27398 4Z" fill="#333"/>
                <path d="M8.66656 4L7.72656 4.94L10.7799 8L7.72656 11.06L8.66656 12L12.6666 8L8.66656 4Z" fill="#333"/>
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
                <path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" fill="#333"/>
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="#333"/>
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
                <path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="#333"/>
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" fill="#333"/>
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
                <path d="M4.27398 4L3.33398 4.94L6.38732 8L3.33398 11.06L4.27398 12L8.27398 8L4.27398 4Z" fill="#333"/>
                <path d="M8.66656 4L7.72656 4.94L10.7799 8L7.72656 11.06L8.66656 12L12.6666 8L8.66656 4Z" fill="#333"/>
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M11.726 12L12.666 11.06L9.61268 8L12.666 4.94L11.726 4L7.72602 8L11.726 12Z" fill="#333"/>
                <path d="M7.33344 12L8.27344 11.06L5.2201 8L8.27344 4.94L7.33344 4L3.33344 8L7.33344 12Z" fill="#333"/>
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








      {/* Working Days Collapsible */}
<ReusableCollapsible
  dir={local === "ar" ? "rtl" : "ltr"}
  title={t("Working Days")}
  initiallyOpen={isOpen.workingDays}
  onOpenChange={(open) => handleToggle("workingDays", open)}
  content={
    <div>
      <div className="flex flex-col pb-5 gap-3 sm:gap-4">
        {workingDays(t).map((workDay, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 md:gap-8 w-full"
          >
            {/* اليوم + الشيك بوكس */}
            <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-[160px]">
              <CustomCheckbox
                checked={activeDays[index]}
                onChange={() => toggleDay(index)}
              />
              <label
                className={`${
                  dark ? "text-white" : "text-[#2a2b2a]"
                } tracking-[0.07px] font-normal text-[clamp(14px,1.1vw,16px)] leading-5 sm:leading-6 whitespace-nowrap`}
              >
                {t(`${workDay.day}`)}
              </label>
            </div>

            {/* وقت العمل */}
            <div className="flex-1 w-full">
<div
  className={`flex items-center 
    w-full max-w-[calc(100%-16px)]  /* موبايل: ما يطلع برا الشاشة */
    sm:w-[360px] sm:h-[48px]        /* لابتوب: ثابت */
    py-2 px-3 border rounded transition
    ${
      activeDays[index]
        ? "bg-background-primary border-[#e4e2dd]"
        : "bg-background-tertiary"
    }`}
>
                  <div className="w-full min-w-0">
    <TimeRangePicker />
  </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  }
/>


    
    


        {/* Maps Location Collapsible */}
          <ReusableCollapsible   dir={local === 'ar' ? 'rtl' : 'ltr'}
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
