import React, { useState, useRef } from 'react';
import {


  BellIcon,

  PlusIcon,
} from "lucide-react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../../../components/ui/card";
import PhoneInputCustom from '../../../CommonComponents/PhoneInput';
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
import { Textarea } from "../../../../components/ui/textarea";
import Switch from '@mui/material/Switch';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../../../../components/ui/collapsible'
import Checkbox from '@mui/material/Checkbox';
import Avatar from "@mui/material/Avatar";
import Grid from '@mui/material/Grid';
import ArrowLeftIcon from '@mui/icons-material/ArrowForward';

import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import TimeRangePicker from '../../../CommonComponents/timeRangePicker';
import CustomCheckbox from '../../../CommonComponents/customCheckbox';
import { ThemeToggle } from '../../../../components/theme/ThemeSwitcher';
import ReusableCollapsible from "../../../../components/ui/Collapsibles";
import 'react-datepicker/dist/react-datepicker.css';
import {

  Container,
  Edit2Icon,

  StethoscopeIcon,
  UserCheckIcon,
  UsersIcon,
} from "lucide-react";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DateInput from '../../../CommonComponents/DateInput';
import DatePicker from '../../../../components/ui/DatePicker';
const complexInformation = {
  name: "AlTadawi Medical Complex",
  description:
    "A modern multi-specialty healthcare complex offering outpatient and diagnostic services in Riyadh.",
  establishmentYear: "2011",
  pic: "Hessa AlMutairi",
  staffCapacity: "2150",
  doctorsCapacity: "1780",
  patientCapacity: "250",
  StaffCapacity: "2150",
  DoctorsCapacity: "1780",
  PatientCapacity: "250",
};








const contactInfo = (t: (key: string) => string) => ({
  phoneNumbers: ["+966 50 000-0000"],
  email: "info@medcaregroup.com",
  physicalAddress: [
    { key: "buildingNumber", label: t("Building Number") },
    { key: "streetName", label: t("Street Name") },
    { key: "region", label: t("Region") },
    { key: "country", label: t("Country") },
    { key: "nation", label: t("Nation") },
  ],
  mapsLocation: "https://www.medcaregroup.com",
});






import { SideBar } from '../../../CommonComponents/SideBarPlan2';
import { Link } from 'react-router-dom';
const doctorsAndStaff = [
  {
    number: 1,
    userId: "444",
    name: "Dr. Ahmed Hassan",
    clinic: "Cardiology Clinic",
    userType: "Doctor",
    status: "Active",
    avatar: null,
  },
  {
    number: 2,
    userId: "6666",
    name: "Dr. Ahmed Hassan",
    clinic: "Cardiology Clinic",
    userType: "Doctor",
    status: "Active",
    avatar: null,
  },
  {
    number: 3,
    userId: "1234",
    name: "Dr. Ahmed Hassan",
    clinic: "Cardiology Clinic",
    userType: "Doctor",
    status: "Active",
    avatar: null,
  },
  {
    number: 4,
    userId: "5667",
    name: "Dr. Ahmed Hassan",
    clinic: "Cardiology Clinic",
    userType: "Doctor",
    status: "Active",
    avatar: null,
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

const socialMediaData = [
  {
    platform: "LinkedIn",
    url: <svg className='w-full' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M6 9H2V21H6V9Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

  , ll: "dsafsadfasd"
  },
  {
    platform: "Twitter",
    url: <svg className='w-full' viewBox="0 0 24 24" fill="text-text-secondary" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="text-text-secondary" clip-rule="evenodd" d="M0.0174851 24H2.04576L9.98402 14.6892L16.2962 24H23.2727L13.8657 10.1925L22.5034 0H20.4401L12.939 8.81705L6.92412 0H0L9.09228 13.3666L0.0174851 24ZM2.79762 1.56943H5.92746L20.4576 22.5187H17.2928L2.79762 1.56943Z" fill="currentColor" />
    </svg>

    , ll: "dsafsadfasd"
  },
  {
    platform: "Facebook",
    url: <svg className='w-full' viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 11.0004C21 5.47754 16.5229 1.00039 11 1.00039C5.47715 1.00039 1 5.47754 1 11.0004C1 15.9917 4.65686 20.1287 9.4375 20.8789V13.891H6.89844V11.0004H9.4375V8.79726C9.4375 6.29101 10.9304 4.90664 13.2146 4.90664C14.3087 4.90664 15.4531 5.10195 15.4531 5.10195V7.56289H14.1921C12.9499 7.56289 12.5625 8.33373 12.5625 9.12455V11.0004H15.3359L14.8926 13.891H12.5625V20.8789C17.3431 20.1287 21 15.9917 21 11.0004Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
    </svg>

    , ll: "dsafsadfasd"
  },
  {
    platform: "Instagram",
    url: <svg className='w-full' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="text-text-secondary" clip-rule="evenodd" d="M7.05273 0.072C8.33236 0.0130909 8.74036 0 12 0C15.2596 0 15.6676 0.0141818 16.9462 0.072C18.2247 0.129818 19.0975 0.333818 19.8611 0.629454C20.6607 0.931636 21.3862 1.404 21.9862 2.01491C22.5971 2.61382 23.0684 3.33818 23.3695 4.13891C23.6662 4.90255 23.8691 5.77527 23.928 7.05164C23.9869 8.33345 24 8.74145 24 12C24 15.2596 23.9858 15.6676 23.928 16.9473C23.8702 18.2236 23.6662 19.0964 23.3695 19.86C23.0684 20.6608 22.5963 21.3864 21.9862 21.9862C21.3862 22.5971 20.6607 23.0684 19.8611 23.3695C19.0975 23.6662 18.2247 23.8691 16.9484 23.928C15.6676 23.9869 15.2596 24 12 24C8.74036 24 8.33236 23.9858 7.05273 23.928C5.77636 23.8702 4.90364 23.6662 4.14 23.3695C3.33919 23.0683 2.61362 22.5963 2.01382 21.9862C1.40332 21.3869 0.930889 20.6617 0.629454 19.8611C0.333818 19.0975 0.130909 18.2247 0.072 16.9484C0.0130909 15.6665 0 15.2585 0 12C0 8.74036 0.0141818 8.33236 0.072 7.05382C0.129818 5.77527 0.333818 4.90255 0.629454 4.13891C0.931334 3.33827 1.40413 2.61307 2.01491 2.01382C2.61386 1.40346 3.3387 0.931029 4.13891 0.629454C4.90255 0.333818 5.77527 0.130909 7.05164 0.072H7.05273ZM16.8491 2.232C15.5836 2.17418 15.204 2.16218 12 2.16218C8.796 2.16218 8.41636 2.17418 7.15091 2.232C5.98036 2.28545 5.34545 2.48073 4.92218 2.64545C4.36255 2.86364 3.96218 3.12218 3.54218 3.54218C3.14405 3.92951 2.83765 4.40103 2.64545 4.92218C2.48073 5.34545 2.28545 5.98036 2.232 7.15091C2.17418 8.41636 2.16218 8.796 2.16218 12C2.16218 15.204 2.17418 15.5836 2.232 16.8491C2.28545 18.0196 2.48073 18.6545 2.64545 19.0778C2.83745 19.5982 3.144 20.0705 3.54218 20.4578C3.92945 20.856 4.40182 21.1625 4.92218 21.3545C5.34545 21.5193 5.98036 21.7145 7.15091 21.768C8.41636 21.8258 8.79491 21.8378 12 21.8378C15.2051 21.8378 15.5836 21.8258 16.8491 21.768C18.0196 21.7145 18.6545 21.5193 19.0778 21.3545C19.6375 21.1364 20.0378 20.8778 20.4578 20.4578C20.856 20.0705 21.1625 19.5982 21.3545 19.0778C21.5193 18.6545 21.7145 18.0196 21.768 16.8491C21.8258 15.5836 21.8378 15.204 21.8378 12C21.8378 8.796 21.8258 8.41636 21.768 7.15091C21.7145 5.98036 21.5193 5.34545 21.3545 4.92218C21.1364 4.36255 20.8778 3.96218 20.4578 3.54218C20.0705 3.14408 19.5989 2.83768 19.0778 2.64545C18.6545 2.48073 18.0196 2.28545 16.8491 2.232ZM10.4673 15.6993C11.3233 16.0556 12.2764 16.1037 13.1639 15.8353C14.0514 15.567 14.8182 14.9988 15.3334 14.2279C15.8485 13.457 16.0801 12.5311 15.9884 11.6085C15.8968 10.6858 15.4876 9.82361 14.8309 9.16909C14.4123 8.7507 13.906 8.43034 13.3487 8.23107C12.7914 8.0318 12.1968 7.95857 11.6078 8.01667C11.0188 8.07477 10.45 8.26274 9.94233 8.56705C9.43468 8.87136 9.00081 9.28445 8.67197 9.77656C8.34312 10.2687 8.12748 10.8276 8.04056 11.413C7.95365 11.9985 7.99762 12.596 8.16932 13.1624C8.34101 13.7288 8.63616 14.2501 9.03351 14.6888C9.43087 15.1275 9.92054 15.4726 10.4673 15.6993ZM7.63854 7.63854C8.2113 7.06579 8.89126 6.61146 9.6396 6.30148C10.3879 5.99151 11.19 5.83197 12 5.83197C12.81 5.83197 13.6121 5.99151 14.3604 6.30148C15.1087 6.61146 15.7887 7.06579 16.3615 7.63854C16.9342 8.2113 17.3885 8.89126 17.6985 9.6396C18.0085 10.3879 18.168 11.19 18.168 12C18.168 12.81 18.0085 13.6121 17.6985 14.3604C17.3885 15.1087 16.9342 15.7887 16.3615 16.3615C15.2047 17.5182 13.6359 18.168 12 18.168C10.3641 18.168 8.79527 17.5182 7.63854 16.3615C6.48181 15.2047 5.83197 13.6359 5.83197 12C5.83197 10.3641 6.48181 8.79527 7.63854 7.63854ZM19.536 6.75055C19.6779 6.61666 19.7916 6.45565 19.8701 6.27706C19.9487 6.09847 19.9907 5.90593 19.9935 5.71083C19.9964 5.51574 19.9601 5.32205 19.8867 5.14125C19.8134 4.96044 19.7045 4.79619 19.5665 4.65822C19.4285 4.52026 19.2643 4.41137 19.0835 4.33802C18.9027 4.26467 18.709 4.22834 18.5139 4.23118C18.3188 4.23403 18.1263 4.27599 17.9477 4.35458C17.7691 4.43317 17.6081 4.54679 17.4742 4.68873C17.2138 4.96476 17.0712 5.3314 17.0768 5.71083C17.0823 6.09026 17.2355 6.45259 17.5038 6.72092C17.7721 6.98924 18.1345 7.14243 18.5139 7.14796C18.8933 7.15349 19.26 7.01093 19.536 6.75055Z" fill="currentColor" />
    </svg>
    , ll: "dsafsadfasd"

  }
];







import { useLanguage } from '../../../../lib/LanguageContext';
export const ElementEditeDetalisCinicP3 = (): JSX.Element => {


    const { local, handleLanguageClick } = useLanguage();
    const { t, i18n } = useTranslation();
    useEffect(() => {
        i18n.changeLanguage(local);
    }, []);
  const [activeDays, setActiveDays] = useState(workingDays.map(() => false));


  const [isOpen, setIsOpen1] = useState({
    clinicInfo: true,
    contactInfo: true,
    workingDays: true,
    doctorsStaff: true,
    mapsLocation: true
  });
  const handleToggle = (key: keyof typeof isOpen, open: boolean) => {
    setIsOpen1(prev => ({
      ...prev,
      [key]: open
    }))
  };








  const toggleDay = (index: number) => {
    setActiveDays((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };



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
      <div

        className={`flex flex-col w-full overflow-hidden items-start gap-4  py-4  self-stretch relative bg-background-primary
      } `}
      >



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


        <Card className="flex flex-col h-auto items-start gap-6 p-5 mt-[10px] bg-background-tertiary relative self-stretch w-full rounded-2xl overflow-hidden">

          <CardContent className="p-0 w-full overflow-y-auto gap-5 h-auto">



            <div className="flex items-center justify-between w-full " dir={local === 'ar' ? 'rtl' : 'ltr'}>
              <div></div>

              <div className="flex gap-[14px]  justify-end p-3 items-end text-end pb-2  " dir={local === 'ar' ? 'rtl' : 'ltr'} >
                <Link to='/ElementViewClinicP3'>
                  <button className="     w-[100px] h-[40px]       /* الموبايل الافتراضي */

    md:w-[180px] md:h-[38px]
    lg:w-[200px] lg:h-[40px] 
 
      rounded-[20px] border border-border-light bg-surface-primary  font-lato font-lato text-sm leading-[100%] tracking-[0] text-text-primary">
                    {t("Cancel")}
                  </button></Link>
                <button className="  w-[100px] h-[40px]       /* الموبايل الافتراضي */
 
    md:w-[160px] md:h-[36px]
    lg:w-[200px] lg:h-[40px]  rounded-[20px] bg-secondary-dark font-lato font-lato text-sm leading-[100%] tracking-[0] text-surface-primary">
                  {t("Save")}
                </button>

              </div>
            </div>





            <ReusableCollapsible
              dir={local === 'ar' ? 'rtl' : 'ltr'}
              title={t("Clinic Information")}
              initiallyOpen={isOpen.mapsLocation}
              onOpenChange={(open) => handleToggle("mapsLocation", open)}
              content={
                <div className="grid grid-cols-1 pb-4 lg:grid-cols-2 gap-6">
                  {/* العمود الأول */}
                  <div className="flex flex-col gap-6">


                    <div className="flex flex-col sm:flex-row sm:items-center ">
                      <label className="min-w-[160px] md:w-36 lg:w-40 font-semibold font-lato text-[clamp(14px,1.1vw,16px)] text-text-primary [font-family:'Lato',Helvetica]">
                        {t("Clinic Name")}:
                      </label>
                      <Input
                        defaultValue={complexInformation.name}
                        className="w-[min(100%,360px)] h-9 sm:h-10 md:h-12
              border-light border bg-background-secondary
              text-text-primary font-lato border-border-light  border-border-light text-[clamp(12px,1.1vw,14px)]"
                      />
                    </div>




                    <div className="flex flex-col sm:flex-row sm:items-start ">
                      <label className="min-w-[160px] md:w-36 lg:w-40 font-semibold font-lato text-[clamp(14px,1.1vw,16px)] text-text-primary">
                        {t("Description")}:
                      </label>
                      <Textarea
                        className="w-[min(100%,360px)] h-20 sm:h-28
              border-light border bg-background-secondary
              text-text-primary font-lato border-border-light text-[clamp(12px,1.1vw,14px)]"
                        defaultValue={complexInformation.description}
                      />
                    </div>

                    <div className="flex items-center">
                      <DatePicker />
                    </div>


                    <div className="flex flex-col sm:flex-row sm:items-center ">
                      <label className="min-w-[160px] md:w-36 lg:w-40 font-semibold font-lato text-[clamp(14px,1.1vw,16px)] text-text-primary [font-family:'Lato',Helvetica]">
                        {t("PIC")}:
                      </label>
                      <Input
                        defaultValue={complexInformation.pic}
                        className="w-[min(100%,360px)] h-9 sm:h-10 md:h-12
              border-light border bg-background-secondary
              text-text-primary font-lato border-border-light  text-[clamp(12px,1.1vw,14px)]"
                      />
                    </div>


                  </div>

                  {/* العمود الثاني */}
                  <div className="flex flex-col gap-6">
                    <div className="text-primary-default font-semibold">
                      <h2>{t("Capacity")}</h2>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center ">
                      <label className="min-w-[160px] md:w-36 lg:w-40 font-semibold font-lato text-[clamp(14px,1.1vw,16px)] text-text-primary [font-family:'Lato',Helvetica]">
                        {t("Staff Capacity")}:
                      </label>
                      <Input
                        defaultValue={complexInformation.StaffCapacity}
                        className="w-[min(100%,360px)] h-9 sm:h-10 md:h-12
              border-light border bg-background-secondary
              text-text-primary font-lato border-border-light  text-[clamp(12px,1.1vw,14px)]"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center ">
                      <label className="min-w-[160px] md:w-36 lg:w-40 font-semibold font-lato text-[clamp(14px,1.1vw,16px)] text-text-primary [font-family:'Lato',Helvetica]">
                        {t("Doctors Capacity")}:
                      </label>
                      <Input
                        defaultValue={complexInformation.DoctorsCapacity}
                        className="w-[min(100%,360px)] h-9 sm:h-10 md:h-12
              border-light border bg-background-secondary
              text-text-primary font-lato border-border-light text-[clamp(12px,1.1vw,14px)]"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center ">
                      <label className="min-w-[160px] md:w-36 lg:w-40 font-semibold border-border-light text-[clamp(14px,1.1vw,16px)] text-text-primary [font-family:'Lato',Helvetica]">
                        {t("Patient Capacity")}:
                      </label>
                      <Input
                        defaultValue={complexInformation.PatientCapacity}
                        className="w-[min(100%,360px)] h-9 sm:h-10 md:h-12
              border-light border bg-background-secondary
              text-text-primary font-lato border-border-light text-[clamp(12px,1.1vw,14px)]"
                      />
                    </div>
                  </div>
                </div>
              }
            />












            {/* Clinic Contact Information Collapsible */}
            <ReusableCollapsible
              title={t("Clinic Contact Information")}
              initiallyOpen={isOpen.clinicInfo}
              dir={local === 'ar' ? 'rtl' : 'ltr'}
              onOpenChange={(open) => handleToggle("clinicInfo", open)}
              content={
            <div className="px-4 pb-4  ">      <div className="space-y-7 justi">
        
        
        
        
                        <div className=" flex gap-x-[50px]  flex-wrap  " >
        
        
                          <div className="  w-full sm:w-[520px] gap-y-2 rounded-md py-1">
                            {/* Label + Input */} <div className="flex  items-start  flex-col  sm:flex-row  "> {/* Label + Icon */} <div className="flex items-center text-center mt-3  pb-9 gap-x-2">
                              <div className="text-text-primary"> <svg className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.77089 1.79165C4.74396 1.78995 4.69757 1.79131 4.62528 1.80353C3.77857 1.94663 3.00486 2.37648 2.43547 3.02333C1.97218 3.54965 1.66854 4.19192 1.55287 4.87525C1.48516 5.27528 1.49216 5.71071 1.52066 6.19936C1.69143 9.12694 2.92996 11.9003 5.01501 13.9853C7.18212 16.1525 10.0928 17.4051 13.1473 17.4949C13.5053 17.5054 13.8283 17.4977 14.1251 17.4475C14.8084 17.3318 15.4507 17.0282 15.977 16.5649C16.6598 15.9639 17.1008 15.1353 17.218 14.2335L17.2168 14.233L17.2168 14.2329L12.8295 12.3487L12.8294 12.3487L12.8294 12.3487L10.4887 13.9123C10.4881 13.9127 10.4874 13.9132 10.4868 13.9136C10.2713 14.0586 10.0219 14.1451 9.76298 14.1648C9.50325 14.1845 9.24287 14.1363 9.00745 14.0248L9.00328 14.0228C7.25484 13.1817 5.84277 11.7732 4.99715 10.0269L4.99564 10.0238L4.99565 10.0238C4.88489 9.79239 4.83535 9.5364 4.85176 9.28035C4.86817 9.0243 4.94999 8.77673 5.0894 8.56133L5.09234 8.55678L5.09236 8.55679L6.65297 6.18316L6.65155 6.17989L6.65156 6.17988L4.77089 1.79165ZM17.2189 14.2264L17.2189 14.2266L17.2189 14.2264ZM4.37532 0.324505C4.70725 0.268408 5.26379 0.236222 5.73387 0.632745C5.91326 0.784063 6.05538 0.976462 6.14718 1.19512L8.02884 5.58566C8.02911 5.58629 8.02938 5.58692 8.02965 5.58755C8.12707 5.81269 8.16779 6.05829 8.14822 6.30284C8.1286 6.54807 8.04897 6.78472 7.91634 6.99191L7.9114 6.99963L7.91135 6.9996L6.3487 9.37632C7.04612 10.8147 8.20932 11.9751 9.6494 12.6691L9.65244 12.667L9.65244 12.667L11.9944 11.1026C12.2022 10.9623 12.4421 10.8767 12.6918 10.8537C12.9415 10.8307 13.193 10.871 13.423 10.9711C13.4239 10.9715 13.4249 10.9719 13.4258 10.9723L17.8056 12.8533C18.1054 12.9793 18.3558 13.1998 18.5186 13.4813C18.6822 13.7643 18.7483 14.0931 18.7067 14.4173C18.5445 15.6835 17.9264 16.8473 16.9681 17.6908C16.2313 18.3395 15.3321 18.7645 14.3755 18.9264C13.9356 19.0009 13.4989 19.0059 13.1033 18.9942C9.66683 18.8932 6.39236 17.484 3.95435 15.046C1.60865 12.7003 0.215328 9.58029 0.0232104 6.28671C-0.00635157 5.77991 -0.0237603 5.20192 0.0739086 4.62491C0.235831 3.6683 0.660897 2.76911 1.30954 2.03223C2.1067 1.12662 3.18988 0.524849 4.37532 0.324505Z" fill="CurrentColor" />
                              </svg>
                              </div>
                              <div className="text-text-primary  font-lato text-start font-semibold min-w-[160px] text-[clamp(16px,1.1vw,16px)]">
                                {t("Phone Number")}: </div>
                            </div> {/* Phone Input */}
                              <div className="relative  w-[min(100%,360px)]  ">
        
        
        
        
        
                                <PhoneInputCustom value={contactInfo(t).phoneNumbers}
                                />    <div className="flex text-secondary-dark justify-end p-2 max-w-[360px]">
                                  <PlusIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 cursor-pointer" /> </div> </div> </div>
                            {/* Plus Icon */}
        
        
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
                              <span className="text-text-primary font-lato  font-semibold text-[clamp(14px,2vw,16px)]">
                                {t("Email")}:
                              </span>
                            </div>
        
                            {/* Input */}
                            <Input
                              className="flex-1 w-[min(100%,360px)]  h-10 sm:h-10 md:h-12 
              border-light border bg-background-secondary 
              text-text-primary font-lato"
                              defaultValue={contactInfo(t).email}
                            />
                          </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                        </div>
        
        
        
        
        
        
                        <div className="flex flex-col md:flex-row md:items-start lg:items-start   gap-3">
                          <div className="flex w-[186px] items-center gap-4 mt-2">
                            <div className="  text-text-primary ">     <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.5 7.5C10.5 7.20333 10.588 6.91332 10.7528 6.66665C10.9176 6.41997 11.1519 6.22771 11.426 6.11418C11.7001 6.00065 12.0017 5.97094 12.2926 6.02882C12.5836 6.0867 12.8509 6.22956 13.0607 6.43934C13.2704 6.64912 13.4133 6.91639 13.4712 7.20736C13.5291 7.49834 13.4994 7.79994 13.3858 8.07403C13.2723 8.34811 13.08 8.58238 12.8334 8.7472C12.5867 8.91203 12.2967 9 12 9C11.6022 9 11.2206 8.84196 10.9393 8.56066C10.658 8.27936 10.5 7.89782 10.5 7.5ZM6 7.5C6 5.9087 6.63214 4.38258 7.75736 3.25736C8.88258 2.13214 10.4087 1.5 12 1.5C13.5913 1.5 15.1174 2.13214 16.2426 3.25736C17.3679 4.38258 18 5.9087 18 7.5C18 13.1203 12.6019 16.2694 12.375 16.4016C12.2617 16.4663 12.1334 16.5004 12.0028 16.5004C11.8723 16.5004 11.744 16.4663 11.6306 16.4016C11.3981 16.2694 6 13.125 6 7.5ZM7.5 7.5C7.5 11.4563 10.86 14.0822 12 14.8594C13.1391 14.0831 16.5 11.4563 16.5 7.5C16.5 6.30653 16.0259 5.16193 15.182 4.31802C14.3381 3.47411 13.1935 3 12 3C10.8065 3 9.66193 3.47411 8.81802 4.31802C7.97411 5.16193 7.5 6.30653 7.5 7.5ZM19.0097 13.8403C18.8251 13.7793 18.624 13.7924 18.4489 13.8768C18.2738 13.9612 18.1382 14.1102 18.0709 14.2926C18.0035 14.475 18.0096 14.6764 18.0879 14.8543C18.1661 15.0323 18.3104 15.1729 18.4903 15.2466C20.0381 15.8194 21 16.5863 21 17.25C21 18.5025 17.5763 20.25 12 20.25C6.42375 20.25 3 18.5025 3 17.25C3 16.5863 3.96187 15.8194 5.50969 15.2475C5.6896 15.1739 5.8339 15.0332 5.91215 14.8553C5.99039 14.6773 5.99648 14.4759 5.92913 14.2935C5.86178 14.1112 5.72624 13.9621 5.5511 13.8777C5.37596 13.7933 5.17491 13.7803 4.99031 13.8412C2.73937 14.6709 1.5 15.8822 1.5 17.25C1.5 20.1731 6.91031 21.75 12 21.75C17.0897 21.75 22.5 20.1731 22.5 17.25C22.5 15.8822 21.2606 14.6709 19.0097 13.8403Z" fill="currentColor" />
                            </svg>
                            </div>
        
                            <div className="min-w-[160px] font-lato text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)]">
                              {t("Physical Address")}:
                            </div >
                          </div>
                          <div className="grid gap-4 w-full grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
                            {contactInfo(t).physicalAddress.map((field, index) => (
                              <Input
                                key={index}
                                className=" w-[min(100%,172px)] h-10 sm:h-10 md:h-12  border-light border bg-background-secondary  text-text-primary  font-lato"
                                placeholder={field.label}
                              />
                            ))}
                          </div>
                        </div>
        
        
        
        
        
                        <div className=" flex gap-x-[50px]  gap-y-11 flex-wrap ">
        
        
        
        
        
        
                          <div className="flex flex-col sm:flex-row sm:items-center w-full sm:w-[520px]  h-12 gap-y-2 gap-x-8">
                            {/* Label + Icon */}
                            <div className="flex items-center gap-2 sm:w-[166px] h-6 flex-shrink-0">
                              <div className="   text-text-primary "> <svg className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0.25C8.07164 0.25 6.18657 0.821828 4.58319 1.89317C2.97982 2.96451 1.73013 4.48726 0.992179 6.26884C0.254225 8.05042 0.061142 10.0108 0.437348 11.9021C0.813554 13.7934 1.74215 15.5307 3.10571 16.8943C4.46928 18.2579 6.20656 19.1865 8.09787 19.5627C9.98919 19.9389 11.9496 19.7458 13.7312 19.0078C15.5127 18.2699 17.0355 17.0202 18.1068 15.4168C19.1782 13.8134 19.75 11.9284 19.75 10C19.747 7.41505 18.7188 4.93683 16.891 3.109C15.0632 1.28116 12.585 0.252977 10 0.25ZM18.25 10C18.2507 10.7608 18.1456 11.5181 17.9378 12.25H14.3275C14.5575 10.7588 14.5575 9.24118 14.3275 7.75H17.9378C18.1456 8.48192 18.2507 9.23916 18.25 10ZM7.5625 13.75H12.4375C11.9572 15.3237 11.1235 16.7667 10 17.9688C8.87695 16.7664 8.04326 15.3235 7.5625 13.75ZM7.19688 12.25C6.93939 10.7611 6.93939 9.23895 7.19688 7.75H12.8106C13.0681 9.23895 13.0681 10.7611 12.8106 12.25H7.19688ZM1.75 10C1.74935 9.23916 1.85442 8.48192 2.06219 7.75H5.6725C5.4425 9.24118 5.4425 10.7588 5.6725 12.25H2.06219C1.85442 11.5181 1.74935 10.7608 1.75 10ZM12.4375 6.25H7.5625C8.04277 4.67632 8.87652 3.2333 10 2.03125C11.1231 3.23361 11.9567 4.67653 12.4375 6.25ZM17.3434 6.25H14.0041C13.5832 4.70585 12.8738 3.25532 11.9134 1.975C13.0738 2.25375 14.1602 2.7801 15.098 3.51799C16.0359 4.25588 16.8032 5.18784 17.3472 6.25H17.3434ZM8.08657 1.975C7.12619 3.25532 6.41683 4.70585 5.99594 6.25H2.65282C3.19682 5.18784 3.96407 4.25588 4.90196 3.51799C5.83985 2.7801 6.92621 2.25375 8.08657 1.975ZM2.65282 13.75H5.99594C6.41683 15.2941 7.12619 16.7447 8.08657 18.025C6.92621 17.7463 5.83985 17.2199 4.90196 16.482C3.96407 15.7441 3.19682 14.8122 2.65282 13.75ZM11.9134 18.025C12.8738 16.7447 13.5832 15.2941 14.0041 13.75H17.3472C16.8032 14.8122 16.0359 15.7441 15.098 16.482C14.1602 17.2199 13.0738 17.7463 11.9134 18.025Z" fill="CurrentColor" />
                              </svg></div>
                              <span className="min-w-[160px] font-lato text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] leading-6">
                                {t("Company Website")}:
                              </span>
                            </div>
        
                            {/* Input */}
                            <div className="w-[min(100%,360px)]">
                              <Input
                                className="w-[min(100%,360px)] h-10 sm:h-10 md:h-12 
                         border border-light rounded-md bg-background-secondary 
                         text-text-primary font-lato"
                                defaultValue={contactInfo(t).mapsLocation}
                              />
                            </div>
                          </div>
        
        
        
        
        
        
        
        
        
                          <div className="flex flex-col sm:flex-row sm:items-center w-full sm:w-[520px] gap-y-2 gap-x-10">
                            {/* Label + Icon */}
                            <div className="flex items-center gap-2 w-full sm:w-[160px]">
                              <div className="   text-text-primary "> <svg className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5 11.2506C20.3402 11.2506 22.75 13.5936 22.75 16.4635C22.7499 17.934 22.125 19.158 21.2783 20.1461C20.4378 21.127 19.3524 21.9075 18.3545 22.5182L18.3438 22.525L18.332 22.5318C18.0781 22.6751 17.7914 22.7506 17.5 22.7506C17.2086 22.7506 16.9219 22.6751 16.668 22.5318L16.6543 22.524L16.6416 22.5162C15.649 21.9017 14.5644 21.1239 13.7236 20.1461C12.876 19.1602 12.2501 17.9387 12.25 16.4635C12.25 13.5936 14.6598 11.2506 17.5 11.2506ZM17.5 12.7506C15.4697 12.7506 13.75 14.4405 13.75 16.4635C13.7501 17.4816 14.1747 18.3689 14.8613 19.1676C15.5508 19.9694 16.4773 20.6494 17.4131 21.2301C17.4395 21.2433 17.4696 21.2506 17.5 21.2506C17.5308 21.2506 17.5612 21.2427 17.5879 21.2291C18.5226 20.6559 19.4494 19.9747 20.1387 19.1705C20.8255 18.3689 21.2499 17.4779 21.25 16.4635C21.25 14.4405 19.5303 12.7506 17.5 12.7506ZM7.98828 1.75156C8.49476 1.73509 8.95906 1.85034 9.4541 2.04257C9.92734 2.22637 10.4758 2.49992 11.1445 2.83457L14.5068 4.51816C14.7443 4.63698 14.8895 4.70636 14.9902 4.75058C14.9935 4.75054 14.9967 4.75058 15 4.75058C15.1285 4.75058 15.2478 4.78545 15.3535 4.84238C15.4629 4.84963 15.6273 4.85312 15.9209 4.85312H18.0527C18.9499 4.85309 19.7008 4.85276 20.2969 4.93515C20.9286 5.02252 21.4976 5.21564 21.9522 5.6832C22.4036 6.14772 22.5873 6.72345 22.6709 7.36289C22.7505 7.97187 22.75 8.74029 22.75 9.6666V10.5006C22.7498 10.9146 22.4141 11.2506 22 11.2506C21.5859 11.2506 21.2502 10.9146 21.25 10.5006V9.71738C21.25 8.72711 21.248 8.05747 21.1826 7.55722C21.1198 7.07661 21.0101 6.86605 20.876 6.72812C20.7447 6.59331 20.5488 6.48469 20.0918 6.42148C19.6105 6.35491 18.9646 6.35312 18 6.35312H15.8594C15.8223 6.35314 15.7858 6.35121 15.75 6.35117V9.50058C15.7498 9.91462 15.4141 10.2506 15 10.2506C14.5859 10.2506 14.2502 9.91462 14.25 9.50058V6.05918C14.1373 6.00639 14.0183 5.95079 13.8916 5.8873C13.8732 5.87808 13.8547 5.86839 13.8359 5.85898L10.5039 4.19199C9.79625 3.83786 9.31111 3.59536 8.91113 3.44003C8.85496 3.41822 8.80094 3.40003 8.75 3.38242V16.8199C9.25305 16.9102 9.71472 17.1023 10.1191 17.3014C10.3418 17.4109 10.5589 17.5281 10.7598 17.6373L10.7891 17.6539C10.9828 17.7592 11.1613 17.8556 11.3359 17.943C11.7063 18.1284 11.8562 18.5794 11.6709 18.9498C11.4855 19.3202 11.0345 19.4701 10.6641 19.2848C10.4657 19.1855 10.2667 19.0772 10.0791 18.9752L10.043 18.9557C9.84013 18.8454 9.64784 18.7414 9.45606 18.6471C9.06955 18.4569 8.72722 18.3275 8.40235 18.2828C7.65872 18.1807 7.05177 18.5352 6.11914 19.0797L6.0625 19.1119C5.44356 19.4733 4.92893 19.7738 4.50293 19.9674C4.07219 20.1631 3.60392 20.313 3.10938 20.2242C2.57481 20.1282 2.09595 19.839 1.75684 19.4156C1.44633 19.0279 1.34269 18.5482 1.2959 18.0699C1.24954 17.5959 1.24999 16.9896 1.25 16.2555V7.96445C1.24999 7.40957 1.24969 6.94068 1.28711 6.55234C1.32684 6.14027 1.41321 5.75989 1.61914 5.39609C1.82569 5.03132 2.10707 4.7646 2.43945 4.52304C2.75106 4.29661 3.14922 4.06381 3.61719 3.79062C3.62723 3.78476 3.63735 3.77894 3.64746 3.77304L4.90527 3.03867C5.55205 2.66105 6.08217 2.35153 6.54297 2.1373C7.02501 1.91324 7.48175 1.76809 7.98828 1.75156ZM7.17578 3.49765C6.78602 3.67883 6.3162 3.95162 5.63184 4.35117L4.40332 5.06796C3.89687 5.36364 3.56483 5.559 3.32129 5.73593C3.09187 5.90266 2.98989 6.02043 2.92481 6.13535C2.8591 6.25142 2.80846 6.40366 2.78027 6.69589C2.75059 7.00379 2.75 7.40011 2.75 7.99863V16.2164C2.75 16.9999 2.75071 17.5323 2.78906 17.9244C2.82785 18.3205 2.89603 18.4385 2.92774 18.4781C3.0441 18.6234 3.20391 18.7169 3.375 18.7477C3.41122 18.754 3.53316 18.761 3.88281 18.6021C4.23043 18.4442 4.67832 18.1838 5.3418 17.7965C5.39461 17.7656 5.44886 17.7332 5.50391 17.7008C5.99631 17.4105 6.57792 17.0673 7.25 16.8883V3.46543C7.22602 3.4761 7.20084 3.486 7.17578 3.49765ZM17.5088 15.5006C18.0611 15.5006 18.5088 15.9483 18.5088 16.5006C18.5086 17.0527 18.0609 17.5006 17.5088 17.5006H17.5C16.9478 17.5006 16.5002 17.0527 16.5 16.5006C16.5 15.9483 16.9477 15.5006 17.5 15.5006H17.5088Z" fill="currentColor" />
                              </svg></div>
                              <span className="text-text-primary font-lato min-w-[160px] font-semibold text-[clamp(14px,2vw,16px)]">
                                {t("Maps Location")}:
                              </span>
                            </div>
        
                            {/* Input */}
                            <Input
                              className="w-[min(100%,360px)] md:w-[360px] h-10 sm:h-10 md:h-12 
                       border border-light rounded-md bg-background-secondary 
                       text-text-primary font-lato"
                              defaultValue={contactInfo(t).mapsLocation}
                            />
                          </div>
        
        
        
        
        
        
        
                        </div>
        
        
                      </div></div>}

            />




            <ReusableCollapsible

              title={t("Social media Accounts")}

              dir={local === "ar" ? "rtl" : "ltr"}
              initiallyOpen={isOpen.contactInfo}
              onOpenChange={(open) => handleToggle("contactInfo", open)}
              content={
                <div className="px-4 pb-4 h-full">
                  <div className="grid grid-cols-1 pb-4 h-full lg:grid-cols-2 gap-6 gap-y-11">
                    {socialMediaData.map((social, index) => (
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row md:flex-row sm:items-center  w-[min(100%,520px)]  h-12 gap-y-2 lg:gap-x-8"
                      >
                        {/* Icon + Label */}
                        <div className="flex items-center gap-2   w-[min(100%,166px)] h-6">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7">
                            {social.url} {/* أيقونة بدل social.url */}
                          </div>
                          <span className="font-lato text-text-primary font-semibold font-lato text-[clamp(14px,1.1vw,16px)] leading-6">
                            {social.platform}:
                          </span>
                        </div>

                        {/* Input */}
                        <div className="w-full sm:w-[360px]">
                          <Input
                            className="w-[min(100%,360px)] md:w-[360px] h-9 sm:h-10 md:h-12 
               border border-light rounded-md bg-background-secondary text-[clamp(12px,1.1vw,14px)]
               text-text-primary font-lato"
                            defaultValue={social.ll}
                          />

                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              }
            />

























            {/* Doctors & Staff Collapsible */}

            <ReusableCollapsible
              dir={local === "ar" ? "rtl" : "ltr"}
              title={
                <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
                  <h2 className="font-title-16px-bold text-primary-default text-[clamp(10px,2vw,16px)]">
                    {t("Doctors")}
                  </h2>
                  <h2 className="font-title-16px-bold text-primary-default text-[clamp(10px,2vw,16px)]">
                    {t("&")}
                  </h2>
                  <h2 className="font-title-16px-bold text-primary-default text-[clamp(10px,2vw,16px)]">
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
                          <TableHead className="w-[58px] text-center text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">
                            {t("NO")}
                          </TableHead>
                          <TableHead className="text-center font-semibold text-text-primary  font-lato text-[clamp(14px,2vw,16px)] ">
                            {t("User-ID")}
                          </TableHead>
                          <TableHead className="text-center font-semibold text-text-primary  font-lato text-[clamp(14px,2vw,16px)] ">
                            {t("Name")}
                          </TableHead>
                          <TableHead className="w-[225px] text-center font-semibold font-lato text-text-primary  text-[clamp(14px,2vw,16px)] ">
                            {t("Clinic")}
                          </TableHead>
                          <TableHead className="text-center font-lato font-semibold text-[clamp(14px,2vw,16px)] text-text-primary  ">
                            {t("User Type")}
                          </TableHead>
                          <TableHead className="text-center font-lato font-semibold text-[clamp(14px,2vw,16px)] text-text-primary  ">
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
                            <TableCell className="text-center font-lato text-[clamp(12px,2vw,14px)] ">
                              {person.number}
                            </TableCell>
                            <TableCell className="text-center font-lato  text-[clamp(12px,2vw,14px)] ">
                              {person.userId}
                            </TableCell>
                            <TableCell className="text-center font-lato font-lato text-[clamp(12px,2vw,14px)] ">
                              <div className="flex items-center gap-2 justify-center">
                                <Avatar
                                  src={person.avatar ?? undefined}
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
                            <TableCell className="text-center font-lato text-[clamp(14px,2vw,16px)] ">
                              {person.clinic}
                            </TableCell>
                            <TableCell className="text-center font-lato text-[clamp(14px,2vw,16px)] ">
                              {person.userType}
                            </TableCell>
                            <TableCell className=" text-center">
                              <Badge className="bg-secondary-light text-secondary-dark rounded-[20px] sm:w-[92px] h-[20px] sm:h-[24px] flex justify-center items-center text-[clamp(16px,2vw,16px)] mx-auto sm:text-xs">
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






            {/* Working Days Collapsible */}
            <ReusableCollapsible
              dir={local === "ar" ? "rtl" : "ltr"}
              title={t("Working Days")}
              initiallyOpen={isOpen.workingDays}
              onOpenChange={(open) => handleToggle("workingDays", open)}
              content={
                <div>
                  <div className="flex flex-col pb-5 gap-3 sm:gap-4">
                    {workingDays.map((workDay, index) => (
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
                            className={` tracking-[0.07px] font-normal text-[clamp(14px,2vw,16px)]  leading-5 sm:leading-6 whitespace-nowrap`}
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
    ${activeDays[index]
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
            <ReusableCollapsible dir={`${local === "ar" ? "rtl" : "ltr"}`}
              title={t("Maps Location")}
              initiallyOpen={isOpen.mapsLocation}
              onOpenChange={(open) => handleToggle("mapsLocation", open)}
              content={<div>      <div className="w-full h-[332px] bg-[url(/background.png)] bg-cover font-lato bg-center rounded" />
                <p className="title-[14px] font-lato text-on-surface-primary text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] [font-style:var(--title-14px-regular-font-style)]">
                  {t("245, King Fahd Road, Al Olaya, Saudi Arabia, KSA")}
                </p></div>}

            />













          </CardContent>
        </Card>
      </div></div>
  );
}
