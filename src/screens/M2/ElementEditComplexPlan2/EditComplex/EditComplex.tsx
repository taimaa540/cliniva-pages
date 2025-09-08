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
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../../../components/ui/card";

import { Input } from "../../../../components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../../components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import TranslateIcon from "@mui/icons-material/Translate";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import Toggle from "../../../../components/ui/SwitchToggel";
import DateInput from "../../../CommonComponents/DateInput";
import { Textarea } from "../../../../components/ui/textarea";
import CustomCheckbox from '../../../CommonComponents/customCheckbox';
import Switch from '@mui/material/Switch';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../../../../components/ui/collapsible'
import Checkbox from '@mui/material/Checkbox';
import Avatar from "@mui/material/Avatar";
import ReusableCollapsible from "../../../../components/ui/Collapsibles";
import TimeRangePicker from '../../../CommonComponents/timeRangePicker';
import {

  Container,
  Edit2Icon,

  StethoscopeIcon,
  UserCheckIcon,
  UsersIcon,
}from "lucide-react";
    import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
 
const complexInformation = {
  name: "AlTadawi Medical Complex",
  description:
    "A modern multi-specialty healthcare complex offering outpatient and diagnostic services in Riyadh.",
  establishmentYear: "2011",
  pic: "Hessa AlMutairi",
  staffCapacity: "2150",
  doctorsCapacity: "1780",
  patientCapacity: "250",
  StaffCapacity:"2150",
DoctorsCapacity:"1780",
PatientCapacity:"250",
};
 
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


const contactInfo = {
  phoneNumbers: "+966 50 000-0000",
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

const workingDays = [
  { day: "Sunday", startTime: "09:00", endTime: "18:00", isActive: true },
  { day: "Monday", startTime: "09:00", endTime: "18:00", isActive: true },
  { day: "Tuesday", startTime: "09:00", endTime: "18:00", isActive: true },
  { day: "Wednesday", startTime: "09:00", endTime: "18:00", isActive: true },
  { day: "Thursday", startTime: "09:00", endTime: "18:00", isActive: true },
  { day: "Friday", startTime: "09:00", endTime: "18:00", isActive: false },
  { day: "Saturday", startTime: "09:00", endTime: "18:00", isActive: true },
];






interface NoDataSectionProps {
    dark: boolean;
  local: string;
  
  handelDarkClick : () => void;
  handleLanguageClick: () => void;
}

export const EditComplex = ({local, dark, handelDarkClick, handleLanguageClick } :NoDataSectionProps): JSX.Element => {
const {t, i18n} = useTranslation('en')
 useEffect(() => {
      i18n.changeLanguage(local);
    }, []);

  const [activeDays, setActiveDays] = useState(workingDays.map(() => false));

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

  return (
  <div

      className={`flex flex-col w-full overflow-hidden items-start gap-4  py-4  self-stretch relative bg-background-primary
      } `}
    >      
     <header className="flex h-[50px] justify-between pl-[4px] pr-0 py-0 bg-background-primary self-stretch w-full items-center">
       <div className="flex items-center gap-4 rounded-2xl ">
       

          <div className="flex flex-col">
            <h1 className="font-h5-22px-bold font-[number:var(--h5-22px-bold-font-weight)] text-on-surface-primary text-[length:var(--h5-22px-bold-font-size)] tracking-[var(--h5-22px-bold-letter-spacing)] leading-[var(--h5-22px-bold-line-height)] [font-style:var(--h5-22px-bold-font-style)]">
              { t("Medical Complex Details")} 
            </h1>
            <p className="font-title-14px-semibold font-[number:var(--title-14px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-14px-semibold-font-size)] tracking-[var(--title-14px-semibold-letter-spacing)] leading-[var(--title-14px-semibold-line-height)] [font-style:var(--title-14px-semibold-font-style)]">
              { t(" Edit Medical Facilities")}
            </p>
          </div>
        </div>

        <div className="inline-flex gap-3 flex-[0_0_auto] rounded-[28px] items-center " style={{borderRadius:'16px', padding:'16px' }}>
          <div className="relative  ">
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
                local === "ar"
                  ? "bg-[green]"
                  : "bg-secondary-light"
              } rounded-[20px] h-auto transition-all duration-[1000ms]`}
              onClick={handleLanguageClick}
            >
              <TranslateIcon className="w-5 h-5" />
            </Button>
          </div>

          <div className="w-10 h-[17.5px] relative">
          
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
                { t(" Admin")}
              </div>
            </div>
          </div>
        </div>
      </header>

      <Card className="flex flex-col h-auto items-start gap-6 p-5 mt-[10px] bg-background-tertiary relative self-stretch w-full rounded-2xl overflow-hidden">

          <CardContent className="p-0 w-full overflow-y-auto gap-5 h-auto">
<div className="flex justify-between items-center w-full">
   <Badge className="bg-secondary-light text-secondary-dark rounded-[20px] w-[92px] y-[24px] justify-center">
            Active
          </Badge>
 <div className=" items-center flex justify-end gap-4 relative flex-[0_0_auto] mt-5  ">
            <Button
              variant="outline"
              className="flex rounded-[20px] w-[200px] items-center h-10 justify-center px-4 py-2.5 relative bg-background-tertiary -[20px] border-2 border-solid- border-light"
            >
              <div className="flex w-[82px] items-center justify-center gap-1 relative">
                <div className="inline-flex h-5 items-center gap-2.5 px-0 py-0.5 relative flex-[0_0_auto]">
                  <div className="font-[number:var(--btn-14px-medium-font-weight)] text-on-surface-primary text-[length:var(--btn-14px-medium-font-size)] leading-[var(--btn-14px-medium-line-height)] relative w-fit font-btn-14px-medium text-center tracking-[var(--btn-14px-medium-letter-spacing)] whitespace-nowrap [font-style:var(--btn-14px-medium-font-style)]">
                   { t("  Cancel")}
                  </div>
                </div>
              </div>
            </Button>

            <Button variant="outline"  className="flex w-[200px] h-10 items-center  justify-center gap-1 pl-4 pr-3.5 py-2.5 relative bg-secondary-dark rounded-[20px] ">
              <div className="inline-flex items-center  gap-2.5 p-0.5 relative flex-[0_0_auto] ">
                <div className="mt-[-1.00px] font-[number:var(--btn-14px-medium-font-weight)] text-surface-default text-[length:var(--btn-14px-medium-font-size)] leading-[var(--btn-14px-medium-line-height)] relative w-fit font-btn-14px-medium text-center tracking-[var(--btn-14px-medium-letter-spacing)] whitespace-nowrap [font-style:var(--btn-14px-medium-font-style)]">
                   { t("  Save")}
                </div>
              </div>
            </Button>
          </div>
</div>




        
              <ReusableCollapsible
            title=  { t("   Complax Information")}
            initiallyOpen={isOpen.mapsLocation}
            onOpenChange={(open) => handleToggle("mapsLocation", open)}
            content={<div className="flex flex-row items-center justify-between">      <div className="grid gap-x-10 flex-1 gap-y-4 pr-5 pl-5 pb-5">
              <div className="flex items-center gap-2">
                <label className="w-[162px] text-text-primary font-semibold   text-[length:var(--title-16px-semibold-font-size)] tracking-[var(--title-16px-semibold-letter-spacing)] leading-[var(--title-16px-semibold-line-height)] [font-style:var(--title-16px-semibold-font-style)]">
              { t("        Complex Name")}:
                </label>
                <Input
                  defaultValue={complexInformation.name}
                  className="w-[360px] h-12 bg-background-secondary  border-border-light "
                />
              </div>

      <div className="flex items-start gap-2">
                        <div className="w-[162px] text-text-primary font-semibold ">
                         { t("             Description")}      :
                        </div>
                        <div className="relative  w-[350px]">
                          <Textarea
                            className="w-[360px]  h-12 border-light border bg-background-secondary  text-text-primary  font-sans"
                            defaultValue={complexInformation.description}
                          />
                        
                        </div>
                      </div>
           

              <div className="flex items-center gap-2">
                <label className="w-[162px]  text-text-primary font-semibold">
                    { t("              Establishment Year")}:
                </label>
               <DateInput/>
              </div>

              <div className="flex items-center gap-2">
                <label className="w-[162px]  text-text-primary font-semibold">
                   { t("             PIC")}:
                </label>
                <Input
                  defaultValue={complexInformation.pic}
                  className="w-[360px] h-12 bg-background-secondary  border-border-light "
                />
              </div>
             
            </div>

               <div className="grid gap-x-10 flex-1 gap-y-4">

   
                      <div className="text-text-accent font-semibold ">
                         <h2> Capacity </h2>
                      </div>

                  <div className="flex items-center gap-2">
                <label className="w-[162px]  text-text-primary font-semibold">
                   { t("StaffCapacity")}:
                </label>
                <Input
                  defaultValue={complexInformation.StaffCapacity}
                  className="w-[360px] h-12 bg-background-secondary  border-border-light "
                />
              </div>


                  <div className="flex items-center gap-2">
                <label className="w-[162px]  text-text-primary font-semibold">
                   { t("DoctorsCapacity")}:
                </label>
                <Input
                  defaultValue={complexInformation.DoctorsCapacity}
                  className="w-[360px] h-12 bg-background-secondary  border-border-light "
                />
              </div>



                  <div className="flex items-center gap-2">
                <label className="w-[162px]  text-text-primary font-semibold">
                   { t("PatientCapacity")}:
                </label>
                <Input
                  defaultValue={complexInformation.PatientCapacity}
                  className="w-[360px] h-12 bg-background-secondary  border-border-light "
                />
              </div>
                 

               </div>
</div>}

          />
     










     <ReusableCollapsible
            title=   { t("                Contact Information ")}
            initiallyOpen={isOpen.contactInfo}
            onOpenChange={(open) => handleToggle("contactInfo", open)}
            content={<div className="flex flex-col gap-6 p-5">    <div className="flex ">
         

        
        
  <div className="grid-flow-row  "> {/* gap 5px بين الليبل والحقل */}


<div className="flex items-center gap-[5px]">
  {/* Label */}
  <div className="flex items-center gap-[5px]" >
  <div className="flex w-[162px] items-center gap-2">
  <div className=" text-text-primary"><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="" clip-rule="evenodd" d="M5.58366 1.98914C5.55738 1.98748 5.51211 1.98881 5.44156 2.00073C4.61526 2.14038 3.86019 2.55987 3.30452 3.19114C2.85239 3.70477 2.55607 4.33157 2.44319 4.99844C2.37711 5.38883 2.38394 5.81377 2.41176 6.29064C2.57841 9.14767 3.78709 11.8542 5.8219 13.889C7.93679 16.0039 10.7773 17.2264 13.7583 17.314C14.1076 17.3242 14.4228 17.3168 14.7125 17.2677C15.3794 17.1548 16.0061 16.8585 16.5198 16.4064C17.1861 15.8199 17.6164 15.0113 17.7308 14.1312L17.7297 14.1307L17.7297 14.1306L13.4481 12.2918L13.448 12.2918L13.448 12.2918L11.1637 13.8177C11.1631 13.8181 11.1624 13.8186 11.1618 13.819C10.9515 13.9605 10.7082 14.0449 10.4555 14.0641C10.202 14.0834 9.94788 14.0363 9.71814 13.9275L9.71407 13.9256C8.00776 13.1047 6.62971 11.7302 5.80447 10.026L5.803 10.023L5.80301 10.023C5.69491 9.79709 5.64657 9.54727 5.66258 9.29739C5.6786 9.04751 5.75845 8.80591 5.8945 8.59569L5.89737 8.59125L5.89739 8.59126L7.4204 6.27483L7.41901 6.27164L7.41902 6.27163L5.58366 1.98914ZM17.7317 14.1242L17.7317 14.1245L17.7317 14.1242ZM5.19763 0.557347C5.52156 0.502601 6.06468 0.471191 6.52344 0.858159C6.69851 1.00583 6.8372 1.19359 6.92679 1.40698L8.76311 5.69173C8.76337 5.69234 8.76364 5.69296 8.7639 5.69357C8.85897 5.91328 8.89871 6.15297 8.87962 6.39163C8.86047 6.63095 8.78275 6.86189 8.65332 7.0641L8.6485 7.07163L8.64845 7.0716L7.12346 9.39105C7.80407 10.7948 8.93925 11.9272 10.3446 12.6045L10.3476 12.6025L10.3476 12.6025L12.6331 11.0758C12.8359 10.9388 13.07 10.8552 13.3137 10.8328C13.5574 10.8103 13.8029 10.8498 14.0273 10.9474C14.0282 10.9478 14.0291 10.9482 14.03 10.9486L18.3043 12.7843C18.5968 12.9072 18.8412 13.1224 19.0001 13.3971C19.1598 13.6732 19.2243 13.9942 19.1837 14.3105C19.0254 15.5463 18.4222 16.682 17.487 17.5052C16.7679 18.1382 15.8904 18.553 14.9568 18.711C14.5275 18.7837 14.1013 18.7886 13.7153 18.7772C10.3616 18.6786 7.16606 17.3034 4.7868 14.9241C2.49762 12.6349 1.13787 9.59011 0.950386 6.37588C0.921536 5.88129 0.904547 5.31724 0.999862 4.75413C1.15788 3.82057 1.57271 2.94304 2.20572 2.22392C2.98367 1.34013 4.04075 0.752863 5.19763 0.557347Z" fill="currentColor"/>
</svg></div> 

    <div className="text-text-primary font-semibold">
        { t("                  Phone Numbers ")}
    </div>
  </div>

  {/* Phone Input مع العلم */}
<div className="relative w-[350px] h-12 border border-light rounded-sm overflow-visible font-sans bg-background-secondary  border-border-light "dir="ltr" >
  <PhoneInput 
    country={"sa"}
    value={contactInfo.phoneNumbers}
    onChange={(phone) => console.log(phone)}
    containerClass="!w-full"
    inputClass="!w-full !h-12 !border-0 !outline-none !text-text-primary !bg-background-secondary !px-3"
    buttonClass="!h-12 !border-0 !bg-background-secondary !pr-2 flex items-center relative"
    dropdownClass="!absolute !top-full !left-0   !max-h-60 !overflow-y-auto !bg-background-secondary border text-text-primary z-50"
  />
  {/* الخط العمودي */}
  <div className="absolute left-[56px] top-3 max-w-px h-6 bg-light pointer-events-none"></div>
</div>
</div>
</div>
  {/* Plus Icon تحت الحقل على اليمين */}
  <div className="flex justify-end">
         <div className="flex justify-end p-2">
          <PlusIcon className="w-8 h-8 text-secondary-dark cursor-pointer " />
        </div>
  </div>
     
  </div>


              <div className="flex items-center gap-1 mb-12">
                <div className="flex items-center gap-2 w-[162px]">
                  <div className="w-6 h-6">
                    <div className="w-[21px] h-[18px] mt-[3px] ml-px bg-[url(/icon.svg)] bg-[100%_100%]" />
                  </div>
                  
                  <div  className=" text-text-primary"><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.07923 0.787497C10.0441 0.737503 11.9541 0.737499 13.9191 0.787497C17.157 0.869496 18.9413 0.915255 20.2843 2.25625C21.6291 3.61122 21.6655 5.3485 21.7325 8.50136C21.7535 9.50833 21.7535 10.4866 21.7325 11.4936C21.6656 14.6461 21.6288 16.3819 20.2872 17.7348C18.9422 19.0788 17.158 19.1244 13.92 19.2064C12.9381 19.2314 11.9691 19.2445 11.0001 19.2445C10.0312 19.2445 9.06212 19.2314 8.0802 19.2064C4.84234 19.1244 3.05795 19.0785 1.71497 17.7377C0.370009 16.3827 0.332745 14.6454 0.265749 11.4926C0.24475 10.4856 0.244751 9.50735 0.265749 8.50039C0.332749 5.34739 0.370038 3.6112 1.71204 2.2582C3.05703 0.914271 4.84128 0.869495 8.07923 0.787497ZM13.881 2.28554C11.9421 2.23555 10.0572 2.23555 8.11731 2.28554C5.07934 2.36254 3.69256 2.39684 2.77356 3.31582C1.85556 4.24182 1.82677 5.58664 1.76477 8.53164C1.74378 9.5165 1.74378 10.4745 1.76477 11.4603C1.82677 14.4053 1.85648 15.7502 2.77747 16.6771C3.69447 17.593 5.08048 17.6294 8.11829 17.7064C10.0572 17.7564 11.9421 17.7564 13.882 17.7064C16.9199 17.6294 18.3057 17.5941 19.2247 16.6752C20.1427 15.7492 20.1715 14.4053 20.2335 11.4603C20.2545 10.4755 20.2545 9.5175 20.2335 8.53164C20.1715 5.58664 20.1428 4.24086 19.2218 3.31386C18.3048 2.39817 16.9186 2.36253 13.881 2.28554ZM5.35462 6.11074C5.56562 5.75474 6.02596 5.63509 6.38196 5.84609L9.32337 7.58633C10.7954 8.45333 11.2039 8.45333 12.6779 7.58633L15.6183 5.84707C15.9753 5.63607 16.4356 5.75472 16.6456 6.11172C16.8564 6.46859 16.7387 6.92802 16.382 7.13808L13.4396 8.87832C12.4588 9.45619 11.73 9.74442 11.0001 9.74453C10.2711 9.74453 9.54165 9.45532 8.56165 8.87832L5.61829 7.13711C5.26276 6.92603 5.14393 6.46654 5.35462 6.11074Z" fill="CurrentColor"/>
</svg>

</div>

                  <span className="text-text-primary font-semibold">
                    { t("                  Email")}:
                  </span>
                  
                </div>
                <Input
                  defaultValue={contactInfo.email}
                  className="w-[350px] h-12 bg-background-secondary  border-border-light"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-start gap-2 w-[162px]">
                <div  className=" text-text-primary">                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 6.5C9.5 6.20333 9.58797 5.91332 9.7528 5.66665C9.91762 5.41997 10.1519 5.22771 10.426 5.11418C10.7001 5.00065 11.0017 4.97094 11.2926 5.02882C11.5836 5.0867 11.8509 5.22956 12.0607 5.43934C12.2704 5.64912 12.4133 5.91639 12.4712 6.20736C12.5291 6.49834 12.4994 6.79994 12.3858 7.07403C12.2723 7.34811 12.08 7.58238 11.8334 7.7472C11.5867 7.91203 11.2967 8 11 8C10.6022 8 10.2206 7.84196 9.93934 7.56066C9.65804 7.27936 9.5 6.89782 9.5 6.5ZM5 6.5C5 4.9087 5.63214 3.38258 6.75736 2.25736C7.88258 1.13214 9.4087 0.5 11 0.5C12.5913 0.5 14.1174 1.13214 15.2426 2.25736C16.3679 3.38258 17 4.9087 17 6.5C17 12.1203 11.6019 15.2694 11.375 15.4016C11.2617 15.4663 11.1334 15.5004 11.0028 15.5004C10.8723 15.5004 10.744 15.4663 10.6306 15.4016C10.3981 15.2694 5 12.125 5 6.5ZM6.5 6.5C6.5 10.4563 9.86 13.0822 11 13.8594C12.1391 13.0831 15.5 10.4563 15.5 6.5C15.5 5.30653 15.0259 4.16193 14.182 3.31802C13.3381 2.47411 12.1935 2 11 2C9.80653 2 8.66193 2.47411 7.81802 3.31802C6.97411 4.16193 6.5 5.30653 6.5 6.5ZM18.0097 12.8403C17.8251 12.7793 17.624 12.7924 17.4489 12.8768C17.2738 12.9612 17.1382 13.1102 17.0709 13.2926C17.0035 13.475 17.0096 13.6764 17.0879 13.8543C17.1661 14.0323 17.3104 14.1729 17.4903 14.2466C19.0381 14.8194 20 15.5863 20 16.25C20 17.5025 16.5763 19.25 11 19.25C5.42375 19.25 2 17.5025 2 16.25C2 15.5863 2.96187 14.8194 4.50969 14.2475C4.6896 14.1739 4.8339 14.0332 4.91215 13.8553C4.99039 13.6773 4.99648 13.4759 4.92913 13.2935C4.86178 13.1112 4.72624 12.9621 4.5511 12.8777C4.37596 12.7933 4.17491 12.7803 3.99031 12.8412C1.73937 13.6709 0.5 14.8822 0.5 16.25C0.5 19.1731 5.91031 20.75 11 20.75C16.0897 20.75 21.5 19.1731 21.5 16.25C21.5 14.8822 20.2606 13.6709 18.0097 12.8403Z" fill="CurrentColor"/>
</svg> </div>
                <span className=" text-text-primary font-semibold">
                  Physical Address:
                </span>
               
              </div>
              <div className="flex gap-4 flex-1">
                {Object.values(contactInfo.physicalAddress).map(
                  (placeholder, index) => (
                    <Input
                      key={index}
                      placeholder={placeholder}
                      className="w-[172px] h-12 bg-background-secondary  border-border-light [font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-base"
                    />
                  ),
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 w-[162px]">
                <div className="w-6 h-6    text-text-primary">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 10.2506C19.3402 10.2506 21.75 12.5936 21.75 15.4635C21.7499 16.934 21.125 18.158 20.2783 19.1461C19.4378 20.127 18.3524 20.9075 17.3545 21.5182L17.3438 21.525L17.332 21.5318C17.0781 21.6751 16.7914 21.7506 16.5 21.7506C16.2086 21.7506 15.9219 21.6751 15.668 21.5318L15.6543 21.524L15.6416 21.5162C14.649 20.9017 13.5644 20.1239 12.7236 19.1461C11.876 18.1602 11.2501 16.9387 11.25 15.4635C11.25 12.5936 13.6598 10.2506 16.5 10.2506ZM16.5 11.7506C14.4697 11.7506 12.75 13.4405 12.75 15.4635C12.7501 16.4816 13.1747 17.3689 13.8613 18.1676C14.5508 18.9694 15.4773 19.6494 16.4131 20.2301C16.4395 20.2433 16.4696 20.2506 16.5 20.2506C16.5308 20.2506 16.5612 20.2427 16.5879 20.2291C17.5226 19.6559 18.4494 18.9747 19.1387 18.1705C19.8255 17.3689 20.2499 16.4779 20.25 15.4635C20.25 13.4405 18.5303 11.7506 16.5 11.7506ZM6.98828 0.751558C7.49476 0.735089 7.95906 0.850344 8.4541 1.04257C8.92734 1.22637 9.47582 1.49992 10.1445 1.83457L13.5068 3.51816C13.7443 3.63698 13.8895 3.70636 13.9902 3.75058C13.9935 3.75054 13.9967 3.75058 14 3.75058C14.1285 3.75058 14.2478 3.78545 14.3535 3.84238C14.4629 3.84963 14.6273 3.85312 14.9209 3.85312H17.0527C17.9499 3.85309 18.7008 3.85276 19.2969 3.93515C19.9286 4.02252 20.4976 4.21564 20.9522 4.6832C21.4036 5.14772 21.5873 5.72345 21.6709 6.36289C21.7505 6.97187 21.75 7.74029 21.75 8.6666V9.50058C21.7498 9.91462 21.4141 10.2506 21 10.2506C20.5859 10.2506 20.2502 9.91462 20.25 9.50058V8.71738C20.25 7.72711 20.248 7.05747 20.1826 6.55722C20.1198 6.07661 20.0101 5.86605 19.876 5.72812C19.7447 5.59331 19.5488 5.48469 19.0918 5.42148C18.6105 5.35491 17.9646 5.35312 17 5.35312H14.8594C14.8223 5.35314 14.7858 5.35121 14.75 5.35117V8.50058C14.7498 8.91462 14.4141 9.25058 14 9.25058C13.5859 9.25058 13.2502 8.91462 13.25 8.50058V5.05918C13.1373 5.00639 13.0183 4.95079 12.8916 4.8873C12.8732 4.87808 12.8547 4.86839 12.8359 4.85898L9.50391 3.19199C8.79625 2.83786 8.31111 2.59536 7.91113 2.44003C7.85496 2.41822 7.80094 2.40003 7.75 2.38242V15.8199C8.25305 15.9102 8.71472 16.1023 9.11914 16.3014C9.34178 16.4109 9.55891 16.5281 9.75977 16.6373L9.78906 16.6539C9.98276 16.7592 10.1613 16.8556 10.3359 16.943C10.7063 17.1284 10.8562 17.5794 10.6709 17.9498C10.4855 18.3202 10.0345 18.4701 9.66406 18.2848C9.46575 18.1855 9.26674 18.0772 9.0791 17.9752L9.04297 17.9557C8.84013 17.8454 8.64784 17.7414 8.45606 17.6471C8.06955 17.4569 7.72722 17.3275 7.40235 17.2828C6.65872 17.1807 6.05177 17.5352 5.11914 18.0797L5.0625 18.1119C4.44356 18.4733 3.92893 18.7738 3.50293 18.9674C3.07219 19.1631 2.60392 19.313 2.10938 19.2242C1.57481 19.1282 1.09595 18.839 0.756837 18.4156C0.446329 18.0279 0.342688 17.5482 0.2959 17.0699C0.249543 16.5959 0.249986 15.9896 0.250001 15.2555V6.96445C0.249985 6.40957 0.249692 5.94068 0.287111 5.55234C0.32684 5.14027 0.413207 4.75989 0.619142 4.39609C0.825692 4.03132 1.10707 3.7646 1.43945 3.52304C1.75106 3.29661 2.14922 3.06381 2.61719 2.79062C2.62723 2.78476 2.63735 2.77894 2.64746 2.77304L3.90527 2.03867C4.55205 1.66105 5.08217 1.35153 5.54297 1.1373C6.02501 0.913242 6.48175 0.768094 6.98828 0.751558ZM6.17578 2.49765C5.78602 2.67883 5.3162 2.95162 4.63184 3.35117L3.40332 4.06796C2.89687 4.36364 2.56483 4.559 2.32129 4.73593C2.09187 4.90266 1.98989 5.02043 1.92481 5.13535C1.8591 5.25142 1.80846 5.40366 1.78027 5.69589C1.75059 6.00379 1.75 6.40011 1.75 6.99863V15.2164C1.75 15.9999 1.75071 16.5323 1.78906 16.9244C1.82785 17.3205 1.89603 17.4385 1.92774 17.4781C2.0441 17.6234 2.20391 17.7169 2.375 17.7477C2.41122 17.754 2.53316 17.761 2.88281 17.6021C3.23043 17.4442 3.67832 17.1838 4.3418 16.7965C4.39461 16.7656 4.44886 16.7332 4.50391 16.7008C4.99631 16.4105 5.57792 16.0673 6.25 15.8883V2.46543C6.22602 2.4761 6.20084 2.486 6.17578 2.49765ZM16.5088 14.5006C17.0611 14.5006 17.5088 14.9483 17.5088 15.5006C17.5086 16.0527 17.0609 16.5006 16.5088 16.5006H16.5C15.9478 16.5006 15.5002 16.0527 15.5 15.5006C15.5 14.9483 15.9477 14.5006 16.5 14.5006H16.5088Z" fill="CurrentColor"/>
</svg>

                </div>
                <span className=" text-text-primary font-semibold">
                  { t("                     Maps Location ")}:
                </span>
              </div>
              <Input
                defaultValue={contactInfo.mapsLocation}
                className="w-[350px] h-12 bg-background-secondary  border-border-light"
              />
            </div></div>}

          />











         <ReusableCollapsible
            title=  { t("  Linked Clinics ")}
            initiallyOpen={isOpen.mapsLocation}
            onOpenChange={(open) => handleToggle("mapsLocation", open)}
            content={<div className="p-0">      <Table>
              <TableHeader className="">
                <TableRow>
                  <TableHead className="w-[58px] text-text-primary text-center font-semibold">
              { t("                   NO ")}
                  </TableHead>
                  <TableHead className="text-center  text-text-primary font-semiboldI">
                       { t("                   Name ")}
                  </TableHead>
                  <TableHead className="text-center  text-text-praimary  font-semibold">
                     { t("                   PIC ")}
                  </TableHead>
                  <TableHead className="w-[225px] text-center  text-text-praimary  font-semibold">
                    { t("                    Scheduled Appointments Count ")}
                  </TableHead>
                  <TableHead className="text-center  text-text-praimary  font-semibold">
                     { t("                   Doctors ")}
                  </TableHead>
                  <TableHead className="text-center  text-text-praimary  font-semibold">
                       { t("                   Status ")}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {linkedClinics.map((clinic) => (
                  <TableRow
                    key={clinic.number}
                    className="border-b border-[#e4e2dd]"
                  >
                    <TableCell className="text-center text-text-primary font-title-14px-semibold ">
                      {clinic.number}
                    </TableCell>
                    <TableCell className="text-center text-text-primary font-title-14px-semibold">
                      {clinic.name}
                    </TableCell>
                    <TableCell className="text-center text-text-primary font-title-14px-semibold">
                      {clinic.pic}
                    </TableCell>
                    <TableCell className="text-center text-text-primary font-title-14px-semibold">
                      {clinic.appointmentsCount}
                    </TableCell>
                    <TableCell className="text-center text-text-primary font-title-14px-semibold">
                      {clinic.doctors}
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-2">

  
           <Badge className="bg-secondary-light text-secondary-dark rounded-[20px] w-[92px] y-[24px] justify-center">
                          Active
                        </Badge>
   

                      </div>
                    </TableCell>
                  </TableRow>
                )
                
                
                
                )}
              </TableBody>
            </Table>

          <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-2.5"> 
                <span className="font-title-11px-regular font-[number:var(--title-11px-regular-font-weight)] text-on-surface-secondary text-[length:var(--title-11px-regular-font-size)] tracking-[var(--title-11px-regular-letter-spacing)] leading-[var(--title-11px-regular-line-height)] [font-style:var(--title-11px-regular-font-style)]">
                    { t("                   Showing ")}
                </span>
                <Select defaultValue="1">
                  <SelectTrigger className="w-auto bg-secondary-light rounded-[20px] border-0 px-2 py-1.5">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                  </SelectContent>
                </Select>
                <span className="font-title-11px-regular w-96 font-[number:var(--title-11px-regular-font-weight)] text-on-surface-secondary text-[length:var(--title-11px-regular-font-size)] tracking-[var(--title-11px-regular-letter-spacing)] leading-[var(--title-11px-regular-line-height)] [font-style:var(--title-11px-regular-font-style)]">
                   { t("                    out of 14 ")}
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
              <div  className=" text-text-secondary">  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.726 12L12.666 11.06L9.61268 8L12.666 4.94L11.726 4L7.72602 8L11.726 12Z" fill="#333333"/>
<path d="M7.33344 12L8.27344 11.06L5.2201 8L8.27344 4.94L7.33344 4L3.33344 8L7.33344 12Z" fill="#currentColor"/>
</svg></div>
) : (
                 <div  className=" text-text-secondary">    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.27398 4L3.33398 4.94L6.38732 8L3.33398 11.06L4.27398 12L8.27398 8L4.27398 4Z" fill="black"/>
<path d="M8.66656 4L7.72656 4.94L10.7799 8L7.72656 11.06L8.66656 12L12.6666 8L8.66656 4Z" fill="CurrentColor"/>
</svg> </div>
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
                    <div  className=" text-text-secondary">         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" fill="CurrentColor"/>
</svg></div>
) : (
    <div  className=" text-text-secondary">              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="CurrentColor"/>
</svg> </div>
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
                   <div  className=" text-text-secondary">                     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="CurrentColor"/>
</svg></div>
) : (
              <div  className=" text-text-secondary">       <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" fill="CurrentColor"/>
</svg></div>
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
                             
      <div  className=" text-text-secondary">                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.27398 4L3.33398 4.94L6.38732 8L3.33398 11.06L4.27398 12L8.27398 8L4.27398 4Z" fill="CurrentColor"/>
<path d="M8.66656 4L7.72656 4.94L10.7799 8L7.72656 11.06L8.66656 12L12.6666 8L8.66656 4Z" fill="CurrentColor"/>
</svg></div>
) : (
      <div  className=" text-text-secondary">             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.726 12L12.666 11.06L9.61268 8L12.666 4.94L11.726 4L7.72602 8L11.726 12Z" fill="CurrentColor"/>
<path d="M7.33344 12L8.27344 11.06L5.2201 8L8.27344 4.94L7.33344 4L3.33344 8L7.33344 12Z" fill="CurrentColor"/>
</svg></div>
)}




                    </Button>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div></div>}

          />







          <ReusableCollapsible
            title= { t("             Department List")}
            initiallyOpen={isOpen.departments }
            onOpenChange={(open) => handleToggle("departments", open)}
            content={<div className="p-0">    <Table className="table-fixed w-full border-collapse">
          <TableHeader className="">
            <TableRow>
              <TableHead className="w-[10%]   text-text-praimary  font-semibold  text-center">
                  { t("             No")}
              </TableHead>
              <TableHead className="w-[40%] text-center    text-text-praimary  font-semiboldd">
                 { t("             Department Name")}
              </TableHead>
              <TableHead className="w-[50%] text-center    text-text-praimary  font-semibold ">
                     { t("             Description")}
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
                <TableCell className="text-center text-text-primary font-title-14px-semibold  ">
                   <div className="flex justify-center ">
                  {department.number}
                  </div>
                </TableCell>

                {/* Department Name */}
                <TableCell className=" text-text-primary font-title-14px-semibold  ">
                <div className="flex justify-center ">
                  <Input
                    defaultValue={department.name}
                    className="w-[160px] h-[32px] rounded-none text-text-primary  border-border-light"
                  />
                  </div>
                </TableCell>

                {/* Description */}
                <TableCell className="text-center font-title-14px-semibold">
                
                  <TableCell className="text-center font-title-14px-semibold">
<TableCell className="font-title-14px-semibold">
  <div className="flex justify-center">
    <div className="flex items-center gap-2">
      <Textarea
        defaultValue={department.description}
        className="w-[514px] h-[54px] text-text-primary border-[#e4e2dd] resize-none"
      />
      {index > 0 ? (
        <MinusIcon className="w-8 h-8 text-secondary-dark" />
      ) : (
        <MinusIcon className="w-8 h-8 invisible" />
      )}
    </div>
  </div>
</TableCell>
</TableCell>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Add Button */}
        <div className="flex justify-end p-2 ">
          <PlusIcon className="w-8 h-8 cursor-pointer text-secondary-dark" />
        </div></div>}

          />


























          <ReusableCollapsible
            title={<div>
              <div className="flex items-center gap-4">
                <h2 className="font-title-16px-bold   w-96 font-[number:var(--title-16px-bold-font-weight)] text-primary-dark text-[length:var(--title-16px-bold-font-size)] tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] [font-style:var(--title-16px-bold-font-style)]">
                  {t("Doctors ")}
                </h2>
                <h2 className="font-title-16px-bold   w-96 font-[number:var(--title-16px-bold-font-weight)] text-primary-dark text-[length:var(--title-16px-bold-font-size)] tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] [font-style:var(--title-16px-bold-font-style)]">
                  {t("& ")}
                </h2>
                <h2 className="font-title-16px-bold   w-96 font-[number:var(--title-16px-bold-font-weight)] text-primary-dark text-[length:var(--title-16px-bold-font-size)] tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] [font-style:var(--title-16px-bold-font-style)]">
                  {t("Staff")}
                </h2>
                <div className="flex gap-2">
                  <Badge className="bg-secondary-light text-on-surface-primary rounded-[20px] px-2.5 py-1.5">
                    {t("                     All ")}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-bg text-on-surface-primary rounded-[20px] px-2.5 py-1.5"
                  >
                    {t("                     Doctors ")}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-bg text-on-surface-primary rounded-[20px] px-2.5 py-1.5"
                  >
                    {t("                     Staff ")}
                  </Badge>
                </div>
              </div></div>}
            initiallyOpen={isOpen.doctorsStaff}
            onOpenChange={(open) => handleToggle("doctorsStaff", open)}
            content={<div> <Table>
              <TableHeader className="">
                <TableRow>
                  <TableHead className="w-[58px] text-left  text-text-praimary  font-semibold">
                    {t("                     Number ")}
                  </TableHead>
                  <TableHead className="text-center  text-text-praimary  font-semibold">
                    {t("                      User-ID ")}
                  </TableHead>
                  <TableHead className="text-center  text-text-praimary  font-semibold">
                    {t("                      Name ")}
                  </TableHead>
                  <TableHead className="w-[225px] text-center  text-text-praimary  font-semibold">
                    {t("                      Clinic ")}
                  </TableHead>
                  <TableHead className="text-center  text-text-praimary  font-semibold">
                    {t("                     User Type ")}
                  </TableHead>
                  <TableHead className="text-center  text-text-praimary  font-semibold">
                    {t("                     Status ")}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {doctorsAndStaff.map((person) => (
                  <TableRow
                    key={person.number}
                    className="border-b border-[#e4e2dd]"
                  >
                    <TableCell className="text-center  text-text-praimary  font-semibold">
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
                          Active
                        </Badge>






                      </div>
                    </TableCell>
                  </TableRow>
                )



                )}
              </TableBody>
            </Table>

              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-2.5">
                  <span className="font-title-11px-regular font-[number:var(--title-11px-regular-font-weight)] text-on-surface-secondary text-[length:var(--title-11px-regular-font-size)] tracking-[var(--title-11px-regular-letter-spacing)] leading-[var(--title-11px-regular-line-height)] [font-style:var(--title-11px-regular-font-style)]">
                    {t("                           Showing ")}
                  </span>
                  <Select defaultValue="1">
                    <SelectTrigger className="w-auto bg-secondary-light rounded-[20px] border-0 px-2 py-1.5">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                    </SelectContent>
                  </Select>
                  <span className="font-title-11px-regular w-96 font-[number:var(--title-11px-regular-font-weight)] text-on-surface-secondary text-[length:var(--title-11px-regular-font-size)] tracking-[var(--title-11px-regular-letter-spacing)] leading-[var(--title-11px-regular-line-height)] [font-style:var(--title-11px-regular-font-style)]">
                    {t("                             out of 14 ")}
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
                            <path d="M11.726 12L12.666 11.06L9.61268 8L12.666 4.94L11.726 4L7.72602 8L11.726 12Z" fill="CurrentColor" />
                            <path d="M7.33344 12L8.27344 11.06L5.2201 8L8.27344 4.94L7.33344 4L3.33344 8L7.33344 12Z" fill="CurrentColor" />
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.27398 4L3.33398 4.94L6.38732 8L3.33398 11.06L4.27398 12L8.27398 8L4.27398 4Z" fill="CurrentColor" />
                            <path d="M8.66656 4L7.72656 4.94L10.7799 8L7.72656 11.06L8.66656 12L12.6666 8L8.66656 4Z" fill="CurrentColor" />
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
                            <path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" fill="CurrentColor" />
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="CurrentColor" />
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
                              <path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="black" />
                            </svg>
                          ) : (
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" fill="CurrentColor" />
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
                            <path d="M4.27398 4L3.33398 4.94L6.38732 8L3.33398 11.06L4.27398 12L8.27398 8L4.27398 4Z" fill="CurrentColor" />
                            <path d="M8.66656 4L7.72656 4.94L10.7799 8L7.72656 11.06L8.66656 12L12.6666 8L8.66656 4Z" fill="CurrentColor" />
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.726 12L12.666 11.06L9.61268 8L12.666 4.94L11.726 4L7.72602 8L11.726 12Z" fill="CurrentColor" />
                            <path d="M7.33344 12L8.27344 11.06L5.2201 8L8.27344 4.94L7.33344 4L3.33344 8L7.33344 12Z" fill="CurrentColor" />
                          </svg>
                        )}




                      </Button>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
            }

          />








      {/* Working Days Collapsible */}
          <ReusableCollapsible
            title={t("Working Days:")}
            initiallyOpen={isOpen.workingDays}
            onOpenChange={(open) => handleToggle("workingDays", open)}
            content={<div><div className="flex flex-col gap-4 ">
              {workingDays.map((workDay, index) => (
                <div key={index} className="flex items-center gap-8 w-full">
                  <div className="flex items-center gap-5 w-[120px] ">
                    {/* Checkbox */}
                    <CustomCheckbox
                      checked={activeDays[index]}
                      onChange={() => toggleDay(index)}
                    />
                    <label
                      className={`${dark ? "text-white" : "text-[#2a2b2a]"
                        } tracking-[0.07px] leading-6 [font-family:'Lato',Helvetica] font-normal text-sm whitespace-nowrap`}
                    >
                      {t(`${workDay.day}`)}
                    </label>
                  </div>

                  <div className="flex items-center gap-4 w-[810px]">
                    {/* أوقات العمل */}
                    <div
                      className={`flex items-center w-[404px] py-[7px] pl-[13px] border rounded transition transition
                              ${activeDays[index]
                          ? " bg-background-primary border-[#e4e2dd]"
                          : "  bg-background-tertiary "
                        }`}
                    >
                      <TimeRangePicker />
                    </div>


                  </div>
                </div>

              ))}
            </div></div>}
          />

    
    


        {/* Maps Location Collapsible */}
          <ReusableCollapsible
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
     </div>
  );
};
