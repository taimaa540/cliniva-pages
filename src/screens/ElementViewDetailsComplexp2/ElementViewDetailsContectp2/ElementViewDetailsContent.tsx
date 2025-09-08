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
const linkedClinicsData = [
  {
    number: 1,
    name: "Internal Medicine",
    pic: "Hessa AlMutairi",
    appointments: 10,
    doctors: 5,
    status: "Active",
  },
  {
    number: 2,
    name: "Internal Medicine",
    pic: "Hessa AlMutairi",
    appointments: 10,
    doctors: 5,
    status: "Active",
  },
  {
    number: 3,
    name: "Internal Medicine",
    pic: "Hessa AlMutairi",
    appointments: 10,
    doctors: 5,
    status: "Active",
  },
  {
    number: 4,
    name: "Internal Medicine",
    pic: "Hessa AlMutairi",
    appointments: 10,
    doctors: 5,
    status: "Active",
  },
];

import XIcon from '@mui/icons-material/X';
import { Tabs, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../../components/ui/card";

import { Input } from "../../../components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
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
} from "../../../components/ui/table";
import Toggle from "../../../components/ui/SwitchToggel";
import { Textarea } from "../../../components/ui/textarea";
import Switch from '@mui/material/Switch';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../../../components/ui/collapsible'
import Checkbox from '@mui/material/Checkbox';
import Avatar from "@mui/material/Avatar";
import {

  Container,
  Edit2Icon,

  StethoscopeIcon,
  UserCheckIcon,
  UsersIcon,
} from "lucide-react";
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
};

const doctorsStaffData = [
  {
    no: 1,
    userId: "444",
    name: "Dr. Ahmed Hassan",
    clinic: "Cardiology Clinic",
    userType: "Doctor",
    status: "Active",
  },
  {
    no: 2,
    userId: "6666",
    name: "Dr. Ahmed Hassan",
    clinic: "Cardiology Clinic",
    userType: "Doctor",
    status: "Active",
  },
  {
    no: 3,
    userId: "1234",
    name: "Dr. Ahmed Hassan",
    clinic: "Cardiology Clinic",
    userType: "Doctor",
    status: "Active",
  },
  {
    no: 4,
    userId: "5667",
    name: "Dr. Ahmed Hassan",
    clinic: "Cardiology Clinic",
    userType: "Doctor",
    status: "Active",
  },
];
const socialMedia = {
  linkedin: "https://www.linkedin.com/company/medcare-group",
  facebook: "https://facebook.com/medcaregroup",
  twitter: "https://twitter.com/medcaregroup",
  instagram: "https://instagram.com/medcaregroup"
};


const workingScheduleData = [
  { day: "Sunday", startTime: "09:00", endTime: "16:00" },
  { day: "Monday", startTime: "09:00", endTime: "16:00" },
  { day: "Tuesday", startTime: "09:00", endTime: "16:00" },
  { day: "Wednesday", startTime: "09:00", endTime: "16:00" },
  { day: "Thursday", startTime: "09:00", endTime: "16:00" },
  { day: "Friday", startTime: "09:00", endTime: "16:00" },
  { day: "Saturday", startTime: "09:00", endTime: "16:00" },
];


const capacityData = [
  {
    title: "Staff Capacity",
    value: "250/300",
    icon: (
      <svg width="48" height="31" viewBox="0 0 48 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.9842 20.6097C23.9946 19.2713 25.5209 17.3215 26.3374 15.0485C27.1539 12.7756 27.2173 10.3002 26.5182 7.9885C25.8191 5.67676 24.3945 3.65138 22.4553 2.21186C20.516 0.772343 18.165 -0.00488281 15.7498 -0.00488281C13.3347 -0.00488281 10.9837 0.772343 9.04442 2.21186C7.10517 3.65138 5.68065 5.67676 4.98152 7.9885C4.28239 10.3002 4.34577 12.7756 5.16228 15.0485C5.9788 17.3215 7.50509 19.2713 9.51547 20.6097C5.8789 21.95 2.77317 24.4302 0.661724 27.6803C0.550753 27.8452 0.473673 28.0306 0.434964 28.2256C0.396254 28.4206 0.396688 28.6213 0.436239 28.8161C0.47579 29.0109 0.55367 29.1959 0.665351 29.3604C0.777033 29.5248 0.920289 29.6654 1.08679 29.774C1.25329 29.8826 1.43972 29.9571 1.63524 29.993C1.83076 30.0289 2.03146 30.0256 2.22569 29.9832C2.41992 29.9409 2.6038 29.8604 2.76663 29.7464C2.92947 29.6324 3.06802 29.4871 3.17422 29.3191C4.5362 27.2243 6.39989 25.5029 8.59604 24.3113C10.7922 23.1196 13.2512 22.4955 15.7498 22.4955C18.2485 22.4955 20.7075 23.1196 22.9037 24.3113C25.0998 25.5029 26.9635 27.2243 28.3255 29.3191C28.5455 29.646 28.8853 29.8733 29.2716 29.9517C29.6578 30.0301 30.0594 29.9534 30.3895 29.7381C30.7196 29.5228 30.9517 29.1862 31.0356 28.8011C31.1195 28.4161 31.0485 28.0135 30.838 27.6803C28.7265 24.4302 25.6208 21.95 21.9842 20.6097ZM7.49985 11.2497C7.49985 9.61799 7.9837 8.02293 8.89022 6.66623C9.79675 5.30952 11.0852 4.2521 12.5927 3.62768C14.1002 3.00325 15.759 2.83988 17.3593 3.1582C18.9597 3.47653 20.4297 4.26227 21.5835 5.41605C22.7373 6.56983 23.523 8.03984 23.8413 9.64019C24.1597 11.2405 23.9963 12.8993 23.3719 14.4068C22.7474 15.9143 21.69 17.2028 20.3333 18.1093C18.9766 19.0158 17.3815 19.4997 15.7498 19.4997C13.5626 19.4972 11.4656 18.6272 9.91896 17.0806C8.37232 15.5339 7.50233 13.437 7.49985 11.2497ZM46.9011 29.7559C46.5679 29.9732 46.1621 30.0492 45.7728 29.9673C45.3836 29.8854 45.0428 29.6522 44.8255 29.3191C43.4651 27.223 41.6017 25.5009 39.4051 24.3098C37.2085 23.1186 34.7486 22.4963 32.2499 22.4997C31.852 22.4997 31.4705 22.3416 31.1892 22.0603C30.9079 21.779 30.7499 21.3975 30.7499 20.9997C30.7499 20.6019 30.9079 20.2203 31.1892 19.939C31.4705 19.6577 31.852 19.4997 32.2499 19.4997C33.4648 19.4985 34.6645 19.2291 35.7632 18.7105C36.8619 18.192 37.8326 17.4372 38.6058 16.5C39.379 15.5629 39.9356 14.4665 40.236 13.2893C40.5363 12.112 40.573 10.883 40.3433 9.68996C40.1136 8.49693 39.6232 7.36935 38.9072 6.3878C38.1913 5.40625 37.2673 4.59495 36.2014 4.01187C35.1355 3.42879 33.954 3.08833 32.7413 3.01481C31.5286 2.94128 30.3146 3.13652 29.1861 3.58656C29.0021 3.6661 28.804 3.70795 28.6036 3.70965C28.4031 3.71134 28.2044 3.67284 28.019 3.59642C27.8337 3.52 27.6656 3.40721 27.5246 3.26471C27.3836 3.12222 27.2726 2.95291 27.1982 2.76679C27.1237 2.58067 27.0873 2.38151 27.0912 2.18109C27.095 1.98067 27.1389 1.78305 27.2204 1.5999C27.3019 1.41676 27.4193 1.25181 27.5656 1.11479C27.712 0.977776 27.8843 0.871479 28.0724 0.802182C30.6551 -0.227848 33.5278 -0.264914 36.1362 0.698132C38.7447 1.66118 40.9041 3.5561 42.1978 6.01734C43.4916 8.47858 43.8281 11.3317 43.1423 14.0264C42.4565 16.7211 40.7971 19.0663 38.4842 20.6097C42.1208 21.95 45.2265 24.4302 47.338 27.6803C47.5552 28.0135 47.6313 28.4193 47.5494 28.8086C47.4674 29.1978 47.2342 29.5386 46.9011 29.7559Z" fill="#414651" />
      </svg>


    ),
    bgColor: "bg-secondary-light",
  },
  {
    title: "Doctors Capacity",
    value: "178/200",
    icon: (
      <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33.75 24C33.75 24.445 33.618 24.88 33.3708 25.25C33.1236 25.62 32.7722 25.9084 32.361 26.0787C31.9499 26.249 31.4975 26.2936 31.061 26.2068C30.6246 26.12 30.2237 25.9057 29.909 25.591C29.5943 25.2763 29.38 24.8754 29.2932 24.439C29.2064 24.0025 29.251 23.5501 29.4213 23.139C29.5916 22.7278 29.88 22.3764 30.25 22.1292C30.62 21.882 31.055 21.75 31.5 21.75C32.0967 21.75 32.669 21.9871 33.091 22.409C33.5129 22.831 33.75 23.4033 33.75 24ZM32.8969 31.3669C32.5674 33.4909 31.4898 35.4273 29.8585 36.827C28.2272 38.2266 26.1494 38.9972 24 39H19.5C17.1138 38.9975 14.8261 38.0485 13.1388 36.3612C11.4515 34.6739 10.5025 32.3862 10.5 30V22.4044C7.60037 22.0391 4.93372 20.6281 3.0005 18.4363C1.06727 16.2445 0.000366759 13.4226 0 10.5V1.5C0 1.10218 0.158036 0.720645 0.43934 0.43934C0.720645 0.158036 1.10218 0 1.5 0H6C6.39782 0 6.77936 0.158036 7.06066 0.43934C7.34196 0.720645 7.5 1.10218 7.5 1.5C7.5 1.89782 7.34196 2.27936 7.06066 2.56066C6.77936 2.84196 6.39782 3 6 3H3V10.5C2.99989 11.6921 3.2366 12.8723 3.69638 13.9721C4.15616 15.0719 4.82984 16.0695 5.67832 16.9068C6.5268 17.7441 7.53317 18.4045 8.63899 18.8497C9.74481 19.2948 10.928 19.5159 12.12 19.5C17.0156 19.4363 21 15.3281 21 10.3444V3H18C17.6022 3 17.2206 2.84196 16.9393 2.56066C16.658 2.27936 16.5 1.89782 16.5 1.5C16.5 1.10218 16.658 0.720645 16.9393 0.43934C17.2206 0.158036 17.6022 0 18 0H22.5C22.8978 0 23.2794 0.158036 23.5607 0.43934C23.842 0.720645 24 1.10218 24 1.5V10.3444C24 16.5019 19.4006 21.6487 13.5 22.4025V30C13.5 31.5913 14.1321 33.1174 15.2574 34.2426C16.3826 35.3679 17.9087 36 19.5 36H24C25.3625 35.9977 26.6839 35.5327 27.7475 34.681C28.811 33.8293 29.5537 32.6416 29.8538 31.3125C28.0422 30.9056 26.446 29.8412 25.3739 28.3252C24.3019 26.8093 23.8303 24.9496 24.0503 23.106C24.2704 21.2624 25.1664 19.5659 26.5652 18.3449C27.9639 17.1238 29.7658 16.465 31.6222 16.4959C33.4787 16.5268 35.2577 17.2451 36.615 18.512C37.9723 19.7789 38.8115 21.5043 38.9701 23.3542C39.1287 25.2041 38.5954 27.0471 37.4736 28.5265C36.3517 30.006 34.721 31.0167 32.8969 31.3631V31.3669ZM36 24C36 23.11 35.7361 22.24 35.2416 21.4999C34.7471 20.7599 34.0443 20.1831 33.2221 19.8425C32.3998 19.5019 31.495 19.4128 30.6221 19.5865C29.7492 19.7601 28.9474 20.1887 28.318 20.818C27.6887 21.4474 27.2601 22.2492 27.0865 23.1221C26.9128 23.995 27.0019 24.8998 27.3425 25.7221C27.6831 26.5443 28.2599 27.2471 28.9999 27.7416C29.74 28.2361 30.61 28.5 31.5 28.5C32.6935 28.5 33.8381 28.0259 34.682 27.182C35.5259 26.3381 36 25.1935 36 24Z" fill="#414651" />
      </svg>



    ),
    bgColor: "bg-secondary-light",
  },
  {
    title: "Patients Capacity",
    value: "2500/3500",
    icon: (
      <svg width="48" height="35" viewBox="0 0 48 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33 13.4997C33 13.8975 32.842 14.279 32.5607 14.5603C32.2794 14.8416 31.8978 14.9997 31.5 14.9997H16.5C16.1022 14.9997 15.7206 14.8416 15.4393 14.5603C15.158 14.279 15 13.8975 15 13.4997C15 13.1018 15.158 12.7203 15.4393 12.439C15.7206 12.1577 16.1022 11.9997 16.5 11.9997H31.5C31.8978 11.9997 32.2794 12.1577 32.5607 12.439C32.842 12.7203 33 13.1018 33 13.4997ZM31.5 17.9997H16.5C16.1022 17.9997 15.7206 18.1577 15.4393 18.439C15.158 18.7203 15 19.1018 15 19.4997C15 19.8975 15.158 20.279 15.4393 20.5603C15.7206 20.8416 16.1022 20.9997 16.5 20.9997H31.5C31.8978 20.9997 32.2794 20.8416 32.5607 20.5603C32.842 20.279 33 19.8975 33 19.4997C33 19.1018 32.842 18.7203 32.5607 18.439C32.2794 18.1577 31.8978 17.9997 31.5 17.9997ZM48 13.4997V17.9997C48 19.591 47.3679 21.1171 46.2426 22.2423C45.1174 23.3675 43.5913 23.9997 42 23.9997H41.0269C39.6787 26.9622 36.9413 29.5178 32.9213 31.5297C30.1744 32.8768 27.2664 33.8667 24.2681 34.4753C24.0909 34.5078 23.9091 34.5078 23.7319 34.4753C20.7336 33.8667 17.8256 32.8768 15.0787 31.5297C11.0625 29.5178 8.32125 26.9622 6.97312 23.9997H6C4.4087 23.9997 2.88258 23.3675 1.75736 22.2423C0.632141 21.1171 0 19.591 0 17.9997V13.4997C0 11.9084 0.632141 10.3822 1.75736 9.25701C2.88258 8.1318 4.4087 7.49966 6 7.49966H6.15937C6.30117 7.07061 6.53804 6.67914 6.85232 6.35447C7.16661 6.0298 7.55017 5.78032 7.97437 5.62466L22.9744 0.17028C23.6371 -0.0697807 24.3629 -0.0697807 25.0256 0.17028L40.0256 5.62466C40.4498 5.78032 40.8334 6.0298 41.1477 6.35447C41.462 6.67914 41.6988 7.07061 41.8406 7.49966H42C43.5913 7.49966 45.1174 8.1318 46.2426 9.25701C47.3679 10.3822 48 11.9084 48 13.4997ZM6.10312 20.9997C6.03462 20.5026 6.00017 20.0014 6 19.4997V10.4997C5.20435 10.4997 4.44129 10.8157 3.87868 11.3783C3.31607 11.9409 3 12.704 3 13.4997V17.9997C3 18.7953 3.31607 19.5584 3.87868 20.121C4.44129 20.6836 5.20435 20.9997 6 20.9997H6.10312ZM39 19.4997V8.45403L24 2.99965L9 8.45403V19.4997C9 27.9372 21.9544 31.0347 24 31.4697C26.0419 31.0347 39 27.9372 39 19.4997ZM45 13.4997C45 12.704 44.6839 11.9409 44.1213 11.3783C43.5587 10.8157 42.7956 10.4997 42 10.4997V19.4997C41.9998 20.0014 41.9654 20.5026 41.8969 20.9997H42C42.7956 20.9997 43.5587 20.6836 44.1213 20.121C44.6839 19.5584 45 18.7953 45 17.9997V13.4997Z" fill="#414651" />
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

const departmentsData = [
  {
    no: 1,
    name: "Internal Medicine",
    description:
      "Handles the diagnosis and nonsurgical treatment of diseases in adults, including chronic conditions such as hypertension and diabetes.",
  },
  {
    no: 2,
    name: "Internal Medicine",
    description:
      "Handles the diagnosis and nonsurgical treatment of diseases in adults, including chronic conditions such as hypertension and diabetes.",
  },
  {
    no: 3,
    name: "Internal Medicine",
    description:
      "Handles the diagnosis and nonsurgical treatment of diseases in adults, including chronic conditions such as hypertension and diabetes.",
  },
];


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

  handelDarkClick: () => void;
  handleLanguageClick: () => void;
}

export const ElementViewComplexPlan2 = ({ local, dark, handelDarkClick, handleLanguageClick }: NoDataSectionProps): JSX.Element => {
  const { t, i18n } = useTranslation()
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);
  const [isOpen, setIsOpen] = useState(true);

  const [collapsibleStates, setCollapsibleStates] = useState({
    companyInfo: true,
    contactInfo: true,
    linked: true,
    Department: true,
    mapsLocation: true,
    Doctors: true,
    work: true

  });

  const toggleCollapsible = (key: string) => {
    setCollapsibleStates(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
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
              {t("Medical Complex Details")}
            </h1>
            <p className="font-title-14px-semibold  font-semibold font-[number:var(--title-14px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-14px-semibold-font-size)] tracking-[var(--title-14px-semibold-letter-spacing)] leading-[var(--title-14px-semibold-line-height)] [font-style:var(--title-14px-semibold-font-style)]">
              {t("View Medical Facilities")}
            </p>
          </div>
        </div>

        <div className="inline-flex gap-3 flex-[0_0_auto] rounded-[28px] items-center " style={{ borderRadius: '16px', padding: '16px' }}>
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
                {t(" Admin")}
              </div>
            </div>
          </div>
        </div>
      </header>

      <Card className="flex flex-col h-auto items-start gap-6 p-5 mt-[10px] bg-background-tertiary relative self-stretch w-full rounded-2xl overflow-hidden">

        <CardContent className="p-0 w-full overflow-y-auto gap-5 h-auto">


          <div className=" items-center flex justify-end gap-4 relative flex-[0_0_auto]  ">
            <Button className="w-[200px] rounded-[20px] font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-surface-default text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
           <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.834 2.00004C11.0091 1.82494 11.2169 1.68605 11.4457 1.59129C11.6745 1.49653 11.9197 1.44775 12.1673 1.44775C12.4149 1.44775 12.6601 1.49653 12.8889 1.59129C13.1177 1.68605 13.3256 1.82494 13.5007 2.00004C13.6757 2.17513 13.8146 2.383 13.9094 2.61178C14.0042 2.84055 14.0529 3.08575 14.0529 3.33337C14.0529 3.58099 14.0042 3.82619 13.9094 4.05497C13.8146 4.28374 13.6757 4.49161 13.5007 4.66671L4.50065 13.6667L0.833984 14.6667L1.83398 11L10.834 2.00004Z" stroke="#FFFDFC" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
   Edit
            </Button>
          </div>











  

        <Card className="bg-surface-default rounded-2xl w-full mt-5 ">
                    <div style={{
            fontFamily: "Lato",
            fontWeight: 600,
            fontStyle: "SemiBold",
            fontSize: "16px",
            lineHeight: "124%",
            letterSpacing: "0%",
          }}
          className="text-text-accent font-bold size-16 p-5 w-56 text-start" >
<h2>              Capacity:</h2></div>
 
 <div className="px-4 pb-4">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-[38px]">
       {capacityData.map((item, index) => (
         <Card 
           key={index}
           className={`flex-1 h-[100px] ${item.bgColor} rounded-[25px]  w-[350px] shadow-[0px_2px_8px_#e2f6ec]`}
         >
           <CardContent className="  flex items-center justify-center p-7 gap-24 h-full">
          
             <div className="grid">
             <div className="   top-3.5 left-10 font-semibold text-text-primary text-[22px]">
               {item.title}
             </div>
             <div className=" top-[52px] left-10 font-semibold text-text-primary text-[18px]">
               {item.value}
             </div>
             </div>
                  <div className="  w-12 h-12 top-[26px] right-[40px]">
               {item.icon}
             </div>
           </CardContent>
         </Card>
       ))}
     </div>
     </div>
        </Card>



          <Collapsible open={collapsibleStates.companyInfo}
            onOpenChange={() => toggleCollapsible('companyInfo')}>
            <Card className="bg-surface-default rounded-2xl mt-5">
              <CardContent className="p-4">
                <CollapsibleTrigger className="flex items-center justify-between w-full  space-y-6  mb-7">
                  <h3 className="font-title-16px-bold font-[number:var(--title-16px-bold-font-weight)] text-primary-dark text-[length:var(--title-16px-bold-font-size)] tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] [font-style:var(--title-16px-bold-font-style)]">
                    Complex Information
                  </h3>
                  {collapsibleStates.companyInfo ? (
                    <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.7071 9.70711C17.3166 10.0976 16.6834 10.0976 16.2929 9.70711L9 2.41421L1.70711 9.70711C1.31658 10.0976 0.683416 10.0976 0.292892 9.70711C-0.0976315 9.31658 -0.0976315 8.68342 0.292892 8.29289L8.29289 0.292893C8.68342 -0.0976315 9.31658 -0.0976315 9.70711 0.292893L17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711Z" fill="#414651" />
                    </svg>
                  ) : (
                    <ChevronDownIcon className="text-text-primary font-semiboldy w-8 h-8" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex gap-2">
                        <span className="w-[162px] font-semibold text-text-primary text-[16px] leading-[124%] tracking-[0] font-lato">
                          Complex Name
                        </span>

                        <span className="font-title-14px-regular text-text-primary font-[number:var(--title-14px-regular-font-weight)] text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] [font-style:var(--title-14px-regular-font-style)]">
                          AlTadawi Medical Complex
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="w-[162px] font-semibold text-text-primary text-[16px] leading-[124%] tracking-[0] font-lato">
                          Description
                        </span>
                        <span className="w-[330px] font-title-14px-regular font-[number:var(--title-14px-regular-font-weight)] text-text-primary  text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] [font-style:var(--title-14px-regular-font-style)]">
                          A modern multi-specialty healthcare complex offering
                          outpatient and diagnostic services in Riyadh.
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-text-primary">
                          <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4C0 2.89543 0.89543 2 2 2H22C23.1046 2 24 2.89543 24 4V24C24 25.1046 23.1046 26 22 26H2C0.89543 26 0 25.1046 0 24V4ZM22 4H2V24H22V4Z" fill="CurrentColor" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 0C18.5523 0 19 0.447715 19 1V5C19 5.55228 18.5523 6 18 6C17.4477 6 17 5.55228 17 5V1C17 0.447715 17.4477 0 18 0Z" fill="CurrentColor" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0C6.55228 0 7 0.447715 7 1V5C7 5.55228 6.55228 6 6 6C5.44772 6 5 5.55228 5 5V1C5 0.447715 5.44772 0 6 0Z" fill="CorrentColor" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 9C0 8.44771 0.447715 8 1 8H23C23.5523 8 24 8.44771 24 9C24 9.55228 23.5523 10 23 10H1C0.447715 10 0 9.55228 0 9Z" fill="CurrentColor" />
                          </svg></div>

                        <span className="font-title-14px-regular font-[number:var(--title-14px-regular-font-weight)] text-text-primary  text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] [font-style:var(--title-14px-regular-font-style)]">
                          Created on:
                        </span>
                        <span className="font-title-14px-regular font-[number:var(--title-14px-regular-font-weight)] text-text-primary  text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] [font-style:var(--title-14px-regular-font-style)]">
                          12 March 2023
                        </span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex gap-2">
                        <span className="w-[162px] font-semibold text-text-primary text-[16px] leading-[124%] tracking-[0] font-lato">
                          Year of Establishment
                        </span>

                        <span className="font-title-14px-regular font-[number:var(--title-14px-regular-font-weight)] text-text-primary  text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] [font-style:var(--title-14px-regular-font-style)]">
                          3 April 2011
                        </span>
                      </div>
                      <div className="flex gap-2">

                        <span className="w-[162px] font-semibold text-text-primary text-[16px] leading-[124%] tracking-[0] font-lato">
                          PIC
                        </span>
                        <span className="font-title-14px-regular font-[number:var(--title-14px-regular-font-weight)] text-text-primary  text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] [font-style:var(--title-14px-regular-font-style)]">
                          Hessa AlMutairi
                        </span>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </CardContent>
            </Card>
          </Collapsible>





          <Collapsible open={collapsibleStates.contactInfo}
            onOpenChange={() => toggleCollapsible('contactInfo')}>
            <Card className="bg-surface-default rounded-2xl mt-8 p-2 ">
              <CardContent className="p-4">
                <CollapsibleTrigger className="flex items-center justify-between w-full mb-8">
                  <h3 className="font-title-16px-bold font-[number:var(--title-16px-bold-font-weight)] text-primary-dark text-[length:var(--title-16px-bold-font-size)] tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] [font-style:var(--title-16px-bold-font-style)]">
                    Complex Contact Information
                  </h3>
                  {collapsibleStates.contactInfo ? (
                    <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.7071 9.70711C17.3166 10.0976 16.6834 10.0976 16.2929 9.70711L9 2.41421L1.70711 9.70711C1.31658 10.0976 0.683416 10.0976 0.292892 9.70711C-0.0976315 9.31658 -0.0976315 8.68342 0.292892 8.29289L8.29289 0.292893C8.68342 -0.0976315 9.31658 -0.0976315 9.70711 0.292893L17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711Z" fill="#414651" />
                    </svg>
                  ) : (
                    <ChevronDownIcon className="text-text-primary font-semiboldy w-8 h-8" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.77089 1.7914C4.74396 1.7897 4.69757 1.79107 4.62528 1.80329C3.77857 1.94638 3.00486 2.37623 2.43547 3.02308C1.97218 3.5494 1.66854 4.19168 1.55287 4.87501C1.48516 5.27504 1.49216 5.71047 1.52066 6.19911C1.69143 9.12669 2.92996 11.9001 5.01501 13.9851C7.18212 16.1522 10.0928 17.4049 13.1473 17.4946C13.5053 17.5052 13.8283 17.4975 14.1251 17.4472C14.8084 17.3316 15.4507 17.0279 15.977 16.5646C16.6598 15.9637 17.1008 15.1351 17.218 14.2332L17.2168 14.2327L17.2168 14.2327L12.8295 12.3484L12.8294 12.3485L12.8294 12.3485L10.4887 13.912C10.4881 13.9125 10.4874 13.9129 10.4868 13.9134C10.2713 14.0583 10.0219 14.1449 9.76298 14.1645C9.50325 14.1843 9.24287 14.136 9.00745 14.0245L9.00328 14.0226C7.25484 13.1814 5.84277 11.773 4.99715 10.0267L4.99564 10.0236L4.99565 10.0236C4.88489 9.79214 4.83535 9.53616 4.85176 9.28011C4.86817 9.02405 4.94999 8.77649 5.0894 8.56108L5.09234 8.55653L5.09236 8.55654L6.65297 6.18292L6.65155 6.17964L6.65156 6.17964L4.77089 1.7914ZM17.2189 14.2261L17.2189 14.2264L17.2189 14.2261ZM4.37532 0.324261C4.70725 0.268164 5.26379 0.235978 5.73387 0.632501C5.91326 0.783819 6.05538 0.976218 6.14718 1.19487L8.02884 5.58542C8.02911 5.58605 8.02938 5.58667 8.02965 5.5873C8.12707 5.81244 8.16779 6.05805 8.14822 6.3026C8.1286 6.54783 8.04897 6.78447 7.91634 6.99167L7.9114 6.99939L7.91135 6.99935L6.3487 9.37608C7.04612 10.8145 8.20932 11.9749 9.6494 12.6688L9.65244 12.6668L9.65244 12.6668L11.9944 11.1024C12.2022 10.9621 12.4421 10.8764 12.6918 10.8534C12.9415 10.8304 13.193 10.8708 13.423 10.9708C13.4239 10.9712 13.4249 10.9716 13.4258 10.972L17.8056 12.8531C18.1054 12.979 18.3558 13.1995 18.5186 13.4811C18.6822 13.764 18.7483 14.0929 18.7067 14.417C18.5445 15.6833 17.9264 16.8471 16.9681 17.6906C16.2313 18.3392 15.3321 18.7643 14.3755 18.9262C13.9356 19.0007 13.4989 19.0056 13.1033 18.994C9.66683 18.893 6.39236 17.4838 3.95435 15.0458C1.60865 12.7001 0.215328 9.58005 0.0232104 6.28646C-0.00635157 5.77966 -0.0237603 5.20168 0.0739086 4.62467C0.235831 3.66806 0.660897 2.76886 1.30954 2.03198C2.1067 1.12638 3.18988 0.524605 4.37532 0.324261Z" fill="CurrentColor" />
                        </svg>


                        <span className="w-[162px] font-semibold text-text-primary text-[16px] leading-[124%] tracking-[0] font-lato">
                          Phone Numbers:
                        </span>
                        <span className="font-title-14px-regular font-[number:var(--title-14px-regular-font-weight)] text-on-surface-primary text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] [font-style:var(--title-14px-regular-font-style)]">
                          +966 55 123 4567, +966 11 987 6543
                        </span>
                      </div >

                      <div className="flex items-center gap-2">
                        {/* الأيقونة */}
                        <div className="text-text-primary">
                          <svg
                            width="22"
                            height="21"
                            viewBox="0 0 22 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.49999 6.49999C9.49999 6.20332 9.58796 5.91331 9.75278 5.66664C9.91761 5.41997 10.1519 5.22771 10.426 5.11417C10.7001 5.00064 11.0017 4.97094 11.2926 5.02882C11.5836 5.08669 11.8509 5.22956 12.0606 5.43933C12.2704 5.64911 12.4133 5.91639 12.4712 6.20736C12.529 6.49833 12.4993 6.79993 12.3858 7.07402C12.2723 7.34811 12.08 7.58237 11.8333 7.7472C11.5867 7.91202 11.2967 7.99999 11 7.99999C10.6022 7.99999 10.2206 7.84196 9.93933 7.56065C9.65802 7.27935 9.49999 6.89782 9.49999 6.49999ZM4.99999 6.49999C4.99999 4.9087 5.63213 3.38257 6.75735 2.25736C7.88257 1.13214 9.40869 0.5 11 0.5C12.5913 0.5 14.1174 1.13214 15.2426 2.25736C16.3678 3.38257 17 4.9087 17 6.49999C17 12.1203 11.6019 15.2694 11.375 15.4015C11.2616 15.4663 11.1334 15.5004 11.0028 15.5004C10.8722 15.5004 10.744 15.4663 10.6306 15.4015C10.3981 15.2694 4.99999 12.125 4.99999 6.49999ZM6.49999 6.49999C6.49999 10.4562 9.85999 13.0822 11 13.8594C12.139 13.0831 15.5 10.4562 15.5 6.49999C15.5 5.30652 15.0259 4.16193 14.182 3.31802C13.3381 2.4741 12.1935 2 11 2C9.80651 2 8.66192 2.4741 7.81801 3.31802C6.9741 4.16193 6.49999 5.30652 6.49999 6.49999ZM18.0097 12.8403C17.8251 12.7793 17.624 12.7924 17.4489 12.8768C17.2737 12.9611 17.1382 13.1102 17.0709 13.2926C17.0035 13.475 17.0096 13.6764 17.0878 13.8543C17.1661 14.0323 17.3104 14.1729 17.4903 14.2465C19.0381 14.8194 20 15.5862 20 16.25C20 17.5025 16.5762 19.25 11 19.25C5.42374 19.25 2 17.5025 2 16.25C2 15.5862 2.96187 14.8194 4.50968 14.2475C4.6896 14.1738 4.83389 14.0332 4.91214 13.8553C4.99039 13.6773 4.99648 13.4759 4.92912 13.2935C4.86177 13.1112 4.72624 12.9621 4.5511 12.8777C4.37596 12.7933 4.1749 12.7803 3.99031 12.8412C1.73937 13.6709 0.5 14.8822 0.5 16.25C0.5 19.1731 5.91031 20.75 11 20.75C16.0897 20.75 21.5 19.1731 21.5 16.25C21.5 14.8822 20.2606 13.6709 18.0097 12.8403Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>

                        {/* النصوص */}
                        <div className="flex items-center gap-3">
                          <span className="w-[160px] font-semibold text-text-primary text-[16px] leading-[124%] tracking-[0] font-lato">
                            Physical Address:
                          </span>

                          <span className="font-title-14px-regular font-[number:var(--title-14px-regular-font-weight)] text-on-surface-primary text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] [font-style:var(--title-14px-regular-font-style)]">
                            245, King Fahd Road, Al Olaya, Saudi Arabia, KSA
                          </span>
                        </div>
                      </div>

                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="text-text-primary">
                          <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.07923 0.787497C10.0441 0.737503 11.9541 0.737499 13.9191 0.787497C17.157 0.869496 18.9413 0.915255 20.2843 2.25625C21.6291 3.61122 21.6655 5.3485 21.7325 8.50136C21.7535 9.50833 21.7535 10.4866 21.7325 11.4936C21.6656 14.6461 21.6288 16.3819 20.2872 17.7348C18.9422 19.0788 17.158 19.1244 13.92 19.2064C12.9381 19.2314 11.9691 19.2445 11.0001 19.2445C10.0312 19.2445 9.06212 19.2314 8.0802 19.2064C4.84234 19.1244 3.05795 19.0785 1.71497 17.7377C0.370009 16.3827 0.332745 14.6454 0.265749 11.4926C0.24475 10.4856 0.244751 9.50735 0.265749 8.50039C0.332749 5.34739 0.370038 3.6112 1.71204 2.2582C3.05703 0.914271 4.84128 0.869495 8.07923 0.787497ZM13.881 2.28554C11.9421 2.23555 10.0572 2.23555 8.11731 2.28554C5.07934 2.36254 3.69256 2.39684 2.77356 3.31582C1.85556 4.24182 1.82677 5.58664 1.76477 8.53164C1.74378 9.5165 1.74378 10.4745 1.76477 11.4603C1.82677 14.4053 1.85648 15.7502 2.77747 16.6771C3.69447 17.593 5.08048 17.6294 8.11829 17.7064C10.0572 17.7564 11.9421 17.7564 13.882 17.7064C16.9199 17.6294 18.3057 17.5941 19.2247 16.6752C20.1427 15.7492 20.1715 14.4053 20.2335 11.4603C20.2545 10.4755 20.2545 9.5175 20.2335 8.53164C20.1715 5.58664 20.1428 4.24086 19.2218 3.31386C18.3048 2.39817 16.9186 2.36253 13.881 2.28554ZM5.35462 6.11074C5.56562 5.75474 6.02596 5.63509 6.38196 5.84609L9.32337 7.58633C10.7954 8.45333 11.2039 8.45333 12.6779 7.58633L15.6183 5.84707C15.9753 5.63607 16.4356 5.75472 16.6456 6.11172C16.8564 6.46859 16.7387 6.92802 16.382 7.13808L13.4396 8.87832C12.4588 9.45619 11.73 9.74442 11.0001 9.74453C10.2711 9.74453 9.54165 9.45532 8.56165 8.87832L5.61829 7.13711C5.26276 6.92603 5.14393 6.46654 5.35462 6.11074Z" fill="CurrentColor" />
                          </svg></div>

                        <span className="w-[162px] font-semibold text-text-primary text-[16px] leading-[124%] tracking-[0] font-lato">
                          Email:
                        </span>

                        <span className="font-title-14px-regular font-[number:var(--title-14px-regular-font-weight)] text-on-surface-primary text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] [font-style:var(--title-14px-regular-font-style)]">
                          info@medcaregroup.com
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="text-text-primary">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 11.2506C20.3402 11.2506 22.75 13.5936 22.75 16.4635C22.7499 17.934 22.125 19.158 21.2783 20.1461C20.4378 21.127 19.3524 21.9075 18.3545 22.5182L18.3438 22.525L18.332 22.5318C18.0781 22.6751 17.7914 22.7506 17.5 22.7506C17.2086 22.7506 16.9219 22.6751 16.668 22.5318L16.6543 22.524L16.6416 22.5162C15.649 21.9017 14.5644 21.1239 13.7236 20.1461C12.876 19.1602 12.2501 17.9387 12.25 16.4635C12.25 13.5936 14.6598 11.2506 17.5 11.2506ZM17.5 12.7506C15.4697 12.7506 13.75 14.4405 13.75 16.4635C13.7501 17.4816 14.1747 18.3689 14.8613 19.1676C15.5508 19.9694 16.4773 20.6494 17.4131 21.2301C17.4395 21.2433 17.4696 21.2506 17.5 21.2506C17.5308 21.2506 17.5612 21.2427 17.5879 21.2291C18.5226 20.6559 19.4494 19.9747 20.1387 19.1705C20.8255 18.3689 21.2499 17.4779 21.25 16.4635C21.25 14.4405 19.5303 12.7506 17.5 12.7506ZM7.98828 1.75156C8.49476 1.73509 8.95906 1.85034 9.4541 2.04257C9.92734 2.22637 10.4758 2.49992 11.1445 2.83457L14.5068 4.51816C14.7443 4.63698 14.8895 4.70636 14.9902 4.75058C14.9935 4.75054 14.9967 4.75058 15 4.75058C15.1285 4.75058 15.2478 4.78545 15.3535 4.84238C15.4629 4.84963 15.6273 4.85312 15.9209 4.85312H18.0527C18.9499 4.85309 19.7008 4.85276 20.2969 4.93515C20.9286 5.02252 21.4976 5.21564 21.9522 5.6832C22.4036 6.14772 22.5873 6.72345 22.6709 7.36289C22.7505 7.97187 22.75 8.74029 22.75 9.6666V10.5006C22.7498 10.9146 22.4141 11.2506 22 11.2506C21.5859 11.2506 21.2502 10.9146 21.25 10.5006V9.71738C21.25 8.72711 21.248 8.05747 21.1826 7.55722C21.1198 7.07661 21.0101 6.86605 20.876 6.72812C20.7447 6.59331 20.5488 6.48469 20.0918 6.42148C19.6105 6.35491 18.9646 6.35312 18 6.35312H15.8594C15.8223 6.35314 15.7858 6.35121 15.75 6.35117V9.50058C15.7498 9.91462 15.4141 10.2506 15 10.2506C14.5859 10.2506 14.2502 9.91462 14.25 9.50058V6.05918C14.1373 6.00639 14.0183 5.95079 13.8916 5.8873C13.8732 5.87808 13.8547 5.86839 13.8359 5.85898L10.5039 4.19199C9.79625 3.83786 9.31111 3.59536 8.91113 3.44003C8.85496 3.41822 8.80094 3.40003 8.75 3.38242V16.8199C9.25305 16.9102 9.71472 17.1023 10.1191 17.3014C10.3418 17.4109 10.5589 17.5281 10.7598 17.6373L10.7891 17.6539C10.9828 17.7592 11.1613 17.8556 11.3359 17.943C11.7063 18.1284 11.8562 18.5794 11.6709 18.9498C11.4855 19.3202 11.0345 19.4701 10.6641 19.2848C10.4657 19.1855 10.2667 19.0772 10.0791 18.9752L10.043 18.9557C9.84013 18.8454 9.64784 18.7414 9.45606 18.6471C9.06955 18.4569 8.72722 18.3275 8.40235 18.2828C7.65872 18.1807 7.05177 18.5352 6.11914 19.0797L6.0625 19.1119C5.44356 19.4733 4.92893 19.7738 4.50293 19.9674C4.07219 20.1631 3.60392 20.313 3.10938 20.2242C2.57481 20.1282 2.09595 19.839 1.75684 19.4156C1.44633 19.0279 1.34269 18.5482 1.2959 18.0699C1.24954 17.5959 1.24999 16.9896 1.25 16.2555V7.96445C1.24999 7.40957 1.24969 6.94068 1.28711 6.55234C1.32684 6.14027 1.41321 5.75989 1.61914 5.39609C1.82569 5.03132 2.10707 4.7646 2.43945 4.52304C2.75106 4.29661 3.14922 4.06381 3.61719 3.79062C3.62723 3.78476 3.63735 3.77894 3.64746 3.77304L4.90527 3.03867C5.55205 2.66105 6.08217 2.35153 6.54297 2.1373C7.02501 1.91324 7.48175 1.76809 7.98828 1.75156ZM7.17578 3.49765C6.78602 3.67883 6.3162 3.95162 5.63184 4.35117L4.40332 5.06796C3.89687 5.36364 3.56483 5.559 3.32129 5.73593C3.09187 5.90266 2.98989 6.02043 2.92481 6.13535C2.8591 6.25142 2.80846 6.40366 2.78027 6.69589C2.75059 7.00379 2.75 7.40011 2.75 7.99863V16.2164C2.75 16.9999 2.75071 17.5323 2.78906 17.9244C2.82785 18.3205 2.89603 18.4385 2.92774 18.4781C3.0441 18.6234 3.20391 18.7169 3.375 18.7477C3.41122 18.754 3.53316 18.761 3.88281 18.6021C4.23043 18.4442 4.67832 18.1838 5.3418 17.7965C5.39461 17.7656 5.44886 17.7332 5.50391 17.7008C5.99631 17.4105 6.57792 17.0673 7.25 16.8883V3.46543C7.22602 3.4761 7.20084 3.486 7.17578 3.49765ZM17.5088 15.5006C18.0611 15.5006 18.5088 15.9483 18.5088 16.5006C18.5086 17.0527 18.0609 17.5006 17.5088 17.5006H17.5C16.9478 17.5006 16.5002 17.0527 16.5 16.5006C16.5 15.9483 16.9477 15.5006 17.5 15.5006H17.5088Z" fill="CurrentColor" />
                          </svg></div>


                        <span className="w-[162px] font-semibold text-text-primary text-[16px] leading-[124%] tracking-[0] font-lato">
                          Maps Location:
                        </span>
                        <a
                          href="https://maps.google.com/?q=24.7136,46.6753"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="font-title-14px-regular font-[number:var(--title-14px-regular-font-weight)] text-on-surface-primary text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] [font-style:var(--title-14px-regular-font-style)] underline"
                        >
                          www.medcaregroup.com
                        </a>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </CardContent>
            </Card>
          </Collapsible>

















          <Collapsible open={collapsibleStates.Department}
            onOpenChange={() => toggleCollapsible('Department')}
            className="w-full mt-5">
            <Card className="bg-surface-default rounded-2xl">
              <CollapsibleTrigger className="w-full">
                <CardContent className="p-4  flex items-center justify-between">
                  <div style={{
                    fontFamily: "Lato",
                    fontWeight: 600,
                    fontStyle: "SemiBold",
                    fontSize: "16px",
                    lineHeight: "124%",
                    letterSpacing: "0%",
                  }}
                    className="text-text-accent font-bold size-16  w-56 text-start">
                    <h2>          Department List:</h2></div>
                  {collapsibleStates.Department ? (
                    <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.7071 9.70711C17.3166 10.0976 16.6834 10.0976 16.2929 9.70711L9 2.41421L1.70711 9.70711C1.31658 10.0976 0.683416 10.0976 0.292892 9.70711C-0.0976315 9.31658 -0.0976315 8.68342 0.292892 8.29289L8.29289 0.292893C8.68342 -0.0976315 9.31658 -0.0976315 9.70711 0.292893L17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711Z" fill="#414651" />
                    </svg>
                  ) : (
                    <ChevronDownIcon className="text-text-primary font-semiboldy w-8 h-8" />
                  )}
                </CardContent>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <CardContent className="px-4 pb-4">
                  <div className="bg-surface-default rounded-2xl overflow-hidden p-[24px]">
                    <Table >
                      <TableHeader className="">
                        <TableRow>
                          <TableHead className="w-[10%] p-2  text-text-praimary  font-semibold  text-center">
                            No
                          </TableHead>
                          <TableHead className="w-[50%]  p-2 text-text-praimary  font-semibold  text-center">
                            Department Name
                          </TableHead>
                          <TableHead className="w-[40%] p-2  text-text-praimary  font-semibold  text-center">
                            Description
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {departmentsData.map((dept, index) => (
                          <TableRow key={index} className="border-b h-[70px] border-[#e4e2dd] justify-between">
                            <TableCell className="text-center p-2 text-text-primary font-title-14px-semibold  ">
                              {dept.no}
                            </TableCell>
                            <TableCell className="text-center p-2 font-title-14px-semibold">
                              {dept.name}
                            </TableCell>
                            <TableCell className="w-[200px] p-2 text-text-primary font-regular text-[14px] leading-[1.25] tracking-[0] font-[Lato]">
                              {dept.description}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>


                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>





          <Collapsible open={collapsibleStates.linked}
            onOpenChange={() => toggleCollapsible('linked')}
            className="w-full mt-5">
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
                    className="text-text-accent font-bold size-16 w-56 text-start">
                    <h2>          linked Clinics:</h2></div>
                  {collapsibleStates.linked ? (
                    <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.7071 9.70711C17.3166 10.0976 16.6834 10.0976 16.2929 9.70711L9 2.41421L1.70711 9.70711C1.31658 10.0976 0.683416 10.0976 0.292892 9.70711C-0.0976315 9.31658 -0.0976315 8.68342 0.292892 8.29289L8.29289 0.292893C8.68342 -0.0976315 9.31658 -0.0976315 9.70711 0.292893L17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711Z" fill="#414651" />
                    </svg>
                  ) : (
                    <ChevronDownIcon className="text-text-primary font-semiboldy w-8 h-8" />
                  )}
                </CardContent>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <CardContent className=" pb-4">
                  <div className="bg-surface-default rounded-2xl overflow-hidden">
                    <Table>
                      <TableHeader className="">
                        <TableRow>
                          <TableHead className=" text-text-primary pl-3 text-center  font-semibold">
                            NO
                          </TableHead>
                          <TableHead className="text-center  text-text-primary font-semiboldI">
                            Name
                          </TableHead>
                          <TableHead className="text-center  text-text-praimary  font-semibold">
                            Pic
                          </TableHead>
                          <TableHead className="text-center  text-text-praimary  font-semibold">
                            appointments
                          </TableHead>
                          <TableHead className="text-center  text-text-praimary  font-semibold">
                            doctors
                          </TableHead>
                          <TableHead className="text-center  text-text-praimary  font-semibold">
                            status
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {linkedClinicsData.map((dept, index) => (
                          <TableRow key={index} className="border-b border-[#e4e2dd]">
                            <TableCell className="text-center text-text-primary  font-title-14px-semibold ">
                              {dept.number}
                            </TableCell>
                            <TableCell className="text-center text-text-primary font-title-14px-semibold">
                              {dept.name}
                            </TableCell>
                            <TableCell className="text-center text-text-primary font-title-14px-semibold">
                              {dept.pic}
                            </TableCell>
                            <TableCell className="text-center text-text-primary font-title-14px-semibold">
                              {dept.appointments}
                            </TableCell>
                            <TableCell className="text-center text-text-primary font-title-14px-semibold">
                              {dept.doctors}
                            </TableCell>

                            <TableCell className="text-center text-text-primary font-title-14px-semibold">
                              <Badge className="bg-secondary-light text-secondary-dark rounded-[20px] w-[92px] y-[24px]  items-start">
                                Active
                              </Badge>            </TableCell>


                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                </CardContent>
              </CollapsibleContent>
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
                    {t(" out of 14 ")}
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


            </Card>
          </Collapsible>







          <Collapsible open={collapsibleStates.Doctors}
            onOpenChange={() => toggleCollapsible('Doctors')}
            className="w-full mt-5">
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
                    className="text-text-accent font-bold size-16 w-56 text-start">
                    <h2>        Doctors & Staff:</h2></div>
                  {collapsibleStates.Doctors ? (
                    <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.7071 9.70711C17.3166 10.0976 16.6834 10.0976 16.2929 9.70711L9 2.41421L1.70711 9.70711C1.31658 10.0976 0.683416 10.0976 0.292892 9.70711C-0.0976315 9.31658 -0.0976315 8.68342 0.292892 8.29289L8.29289 0.292893C8.68342 -0.0976315 9.31658 -0.0976315 9.70711 0.292893L17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711Z" fill="#414651" />
                    </svg>
                  ) : (
                    <ChevronDownIcon className="text-text-primary font-semiboldy w-8 h-8" />
                  )}
                </CardContent>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <CardContent className="px-4 pb-4">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">

                      <Tabs defaultValue="all" >
                        <TabsList className="bg-transparent p-0 h-auto gap-1">
                          <TabsTrigger
                            value="all"
                            className="bg-secondary-light rounded-[20px] px-2.5 py-1.5 data-[state=active]:bg-secondary-light font-title-14px-semibold font-[number:var(--title-14px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-14px-semibold-font-size)] tracking-[var(--title-14px-semibold-letter-spacing)] leading-[var(--title-14px-semibold-line-height)] [font-style:var(--title-14px-semibold-font-style)]"
                          >
                            All
                          </TabsTrigger>
                          <TabsTrigger
                            value="doctors"
                            className="bg-bg rounded-[20px] px-2.5 py-1.5 data-[state=active]:bg-secondary-light font-title-14px-semibold font-[number:var(--title-14px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-14px-semibold-font-size)] tracking-[var(--title-14px-semibold-letter-spacing)] leading-[var(--title-14px-semibold-line-height)] [font-style:var(--title-14px-semibold-font-style)]"
                          >
                            Doctors
                          </TabsTrigger>
                          <TabsTrigger
                            value="staff"
                            className="bg-bg rounded-[20px] px-2.5 py-1.5 data-[state=active]:bg-secondary-light font-title-14px-semibold font-[number:var(--title-14px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-14px-semibold-font-size)] tracking-[var(--title-14px-semibold-letter-spacing)] leading-[var(--title-14px-semibold-line-height)] [font-style:var(--title-14px-semibold-font-style)]"
                          >
                            Staff
                          </TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>

                  </div>

                  <div className="bg-surface-default rounded-2xl overflow-hidden">
                    <Table>
                      <TableHeader className="  ">
                        <TableRow>
                          <TableHead className="w-[58px] text-center  text-text-praimary  font-semibold">
                            No
                          </TableHead>
                          <TableHead className="text-center  text-text-praimary  font-semibold">
                            UserID
                          </TableHead>
                          <TableHead className="text-center  text-text-praimary  font-semibold">
                            Name
                          </TableHead>
                          <TableHead className="text-center  text-text-praimary  font-semibold">
                            Clinic
                          </TableHead>
                          <TableHead className="text-center  text-text-praimary  font-semibold">
                            User Type
                          </TableHead>
                          <TableHead className="text-center  text-text-praimary  font-semibold">
                            Status
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {doctorsStaffData.map((person, index) => (
                          <TableRow key={index} className="border-b border-[#e4e2dd]">
                            <TableCell className="text-center  text-text-praimary  font-semibold">
                              {person.no}
                            </TableCell>
                            <TableCell className="text-center  text-text-praimary  font-semibold">
                              {person.userId}
                            </TableCell>
                            <TableCell className="text-center  text-text-praimary  font-semibold">
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
                            <TableCell className="text-center  text-text-praimary  font-semibold">
                              {person.clinic}
                            </TableCell>
                            <TableCell className="text-center  text-text-praimary  font-semibold">

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
                        ))}
                      </TableBody>
                    </Table>

                  </div>
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
                        {t("  out of 14 ")}
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

                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>




          <Collapsible open={collapsibleStates.work}
            onOpenChange={() => toggleCollapsible('work')}
            className="w-full mt-5">
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
                    className="text-text-accent font-bold size-16 w-56 text-start">
                    <h2>        Working Schedule:</h2></div>
                  {collapsibleStates.work ? (
                    <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.7071 9.70711C17.3166 10.0976 16.6834 10.0976 16.2929 9.70711L9 2.41421L1.70711 9.70711C1.31658 10.0976 0.683416 10.0976 0.292892 9.70711C-0.0976315 9.31658 -0.0976315 8.68342 0.292892 8.29289L8.29289 0.292893C8.68342 -0.0976315 9.31658 -0.0976315 9.70711 0.292893L17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711Z" fill="#414651" />
                    </svg>
                  ) : (
                    <ChevronDownIcon className="text-text-primary font-semiboldy w-8 h-8" />
                  )}
                </CardContent>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <CardContent className="px-4 pb-4">
                  <div className="bg-surface-default rounded-2xl overflow-hidden">
                    <Table>
                      <TableHeader className="">
                        <TableRow>
                          <TableHead className="items-start font-semibold   text-text-primary">
                            Working Days
                          </TableHead>
                          <TableHead className="text-center font-title-16px-semibold font-semibold text-on-surface-primary text-[length:var(--title-16px-semibold-font-size)] tracking-[var(--title-16px-semibold-letter-spacing)] leading-[var(--title-16px-semibold-line-height)] [font-style:var(--title-16px-semibold-font-style)]">
                            Start Time
                          </TableHead>
                          <TableHead className=" text-end font-semibold text-text-primary ">
                            End Time
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {workingScheduleData.map((schedule, index) => (
                          <TableRow key={index} className="border-b border-[#e4e2dd]">
                            <TableCell className="items-start pl-8 pr-8">
                              {schedule.day}
                            </TableCell>
                            <TableCell className=" text-center w-[80%]">
                              {schedule.startTime}
                            </TableCell>
                            <TableCell className="text-end pl-5 pr-5 w-[10%]">
                              {schedule.endTime}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>



          <Collapsible
            open={collapsibleStates.mapsLocation}
            onOpenChange={() => toggleCollapsible('mapsLocation')}
            className="w-full bg-background-primary mt-5 rounded-2xl"
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
                    className="text-text-accent font-bold size-16 w-56 text-start"
                  >
                    <h2 className="mt-6">{t("Maps Location")}:</h2>
                  </div>

                  {collapsibleStates.mapsLocation ? (
                    <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.7071 9.70711C17.3166 10.0976 16.6834 10.0976 16.2929 9.70711L9 2.41421L1.70711 9.70711C1.31658 10.0976 0.683416 10.0976 0.292892 9.70711C-0.0976315 9.31658 -0.0976315 8.68342 0.292892 8.29289L8.29289 0.292893C8.68342 -0.0976315 9.31658 -0.0976315 9.70711 0.292893L17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711Z" fill="#414651" />
                    </svg>
                  ) : (
                    <ChevronDownIcon className="text-text-primary font-semiboldy w-8 h-8" />
                  )}
                </CardContent>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <CardContent className="flex flex-col gap-4 p-4">
                  <div className="w-full h-[332px] bg-[url(/background.png)] bg-cover bg-center rounded" />
                  <p className="font-title-14px-regular font-[number:var(--title-14px-regular-font-weight)] text-on-surface-primary text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] [font-style:var(--title-14px-regular-font-style)]">
                    {t("245, King Fahd Road, Al Olaya, Saudi Arabia, KSA")}
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
