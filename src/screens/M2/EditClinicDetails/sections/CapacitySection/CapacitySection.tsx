import {

  BellIcon,

  PlusIcon,


} from "lucide-react";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import TranslateIcon from "@mui/icons-material/Translate";
import { SideBarPlan2 } from "../../../../CommonComponents/SideBarPlan2";
import PhoneInputCustom from "../../../../CommonComponents/PhoneInput";
import { ThemeToggle } from "../../../../../components/theme/ThemeSwitcher";

import { Badge } from "../../../../../components/ui/badge";
import { Button } from "../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../components/ui/card";
import { Input } from "../../../../../components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,

} from "../../../../../components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../../components/ui/table";

import TimePicker from "../../../../../components/ui/TimePicker";
import ReusableCollapsible from "../../../../../components/ui/Collapsibles";

import { Textarea } from "../../../../../components/ui/textarea";
import TimeRangePicker from '../../../../CommonComponents/timeRangePicker';
import CustomCheckbox from '../../../../CommonComponents/customCheckbox';


import DatePicker from "../../../../../components/ui/DatePicker";
const contactInfo = {
  phoneNumbers: ["026 540589898"],
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
const workingDays = [
  { day: "Sunday", startTime: "09:00", endTime: "18:00", isActive: true },
  { day: "Monday", startTime: "09:00", endTime: "18:00", isActive: true },
  { day: "Tuesday", startTime: "09:00", endTime: "18:00", isActive: true },
  { day: "Wednesday", startTime: "09:00", endTime: "18:00", isActive: true },
  { day: "Thursday", startTime: "09:00", endTime: "18:00", isActive: true },
  { day: "Friday", startTime: "09:00", endTime: "18:00", isActive: false },
  { day: "Saturday", startTime: "09:00", endTime: "18:00", isActive: true },
];


const complexInformation = {
  name: "AlTadawi Medical Complex",
  description:
    "Al Noor Clinic is a multi-specialty clinic offering high-quality care with modern facilities",

};


const doctorsAndStaff = [
  {
    number: 1,
    userId: "US-001",
    name: "Dr. Ahmed Hassan",

    userType: "Doctor",
    avatar:null,
  },
  {
    number: 2,
    userId: "US-001",
    name: "Dr. Ahmed Hassan",
    userType: "Doctor",
      avatar:null,
  },
  {
    number: 3,
    userId: "US-001",
    name: "Dr. Ahmed Hassan",
    userType: "Doctor",
      avatar:null,
  },
  {
    number: 4,
    userId: "US-001",
    name: "Dr. Ahmed Hassan",
    userType: "Doctor",
      avatar:null,
  },
];





interface NoDataSectionProps {
  local: string;
  dark: boolean;
  handelDarkClick: () => void;
  handleLanguageClick: () => void;
// ⬅️ البروبس الجديد
}

export const CapacitySection = ({ local, dark,    handleLanguageClick }: NoDataSectionProps): JSX.Element => {
 const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);

const [activeDays, setActiveDays] = useState(workingDays.map(() => false));

    const [isOpen, setIsOpen] = useState({
      clinicInfo: true,
      contactInfo:true,
      Capacity: true,
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
  
    {/* working Days*/}
   const toggleDay = (index: number) => {
    setActiveDays((prev) => prev.map((val, i) => (i === index ? !val : val)));
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
    <div className="flex flex-col w-full overflow-hidden h-full items-start gap-4  py-4  pb-8 self-stretch relative bg-background-primary">



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
  {t("Edit clinic Details")}
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
           {t("Edit clinic Details")}
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




 

 <Card className="flex flex-col h-auto items-start gap-6 p-5 mt-[10px] bg-background-tertiary relative self-stretch w-full rounded-2xl overflow-hidden">

        <CardContent className="p-0 w-full overflow-y-auto gap-5 h-auto">





          <div className="flex items-center justify-between w-full mb-4"dir={local === 'ar' ? 'rtl' : 'ltr'}>
            <Badge
              variant="secondary"
              className="bg-secondary-light text-secondary-dark rounded-[20px] px-4 py-2.5"
            >
              {t("Active")}
            </Badge>

         <div className="flex gap-[14px]  justify-end p-3 items-end text-end pb-2 sm:pb-3 md:pb-3 lg:pb-4 "  dir={local === 'ar' ? 'rtl' : 'ltr'} >
              <button className="     w-[100px] h-[40px]       /* الموبايل الافتراضي */

    md:w-[180px] md:h-[38px]
    lg:w-[200px] lg:h-[40px] 
 
      rounded-[20px] border border-border-light bg-surface-primary  font-lato font-medium text-sm leading-[100%] tracking-[0] text-text-primary">
                {t("Cancel")}
              </button>
              <button className="  w-[100px] h-[40px]       /* الموبايل الافتراضي */
    
    md:w-[160px] md:h-[36px]
    lg:w-[200px] lg:h-[40px]  rounded-[20px] bg-secondary-dark font-lato font-medium text-sm leading-[100%] tracking-[0] text-surface-primary">
                {t("Save")}
              </button>
        
          </div>
          </div>



<ReusableCollapsible
  dir={`${local === "ar" ? "rtl" : "ltr"}`}
  title={t("Clinic Info")}
  initiallyOpen={isOpen.clinicInfo}
  onOpenChange={(open) => handleToggle("clinicInfo", open)}
  content={
    <div className="p-4 pt-0">
      {/* Grid رئيسي عمود واحد بالموبايل وعمودين من md وطالع */}
      <div className="grid grid-cols-1   lg:grid-cols-2 gap-8">
        
        {/* ----- العمود الأول ----- */}
        <div className="space-y-6">
          {/* Clinic Name */}
          <div className="flex flex-col sm:flex-row sm:items-center">
            <label className="min-w-[160px] md:w-36 lg:w-40 font-semibold text-[clamp(14px,1.1vw,16px)] text-text-primary [font-family:'Lato',Helvetica]">
              {t("Clinic Name")}
            </label>
            <Input
              defaultValue="Al Noor Clinic"
              className="w-[min(100%,360px)] h-10 sm:h-10 md:h-12
                border-light border bg-background-secondary
                text-text-primary font-sans border-border-light text-[clamp(12px,1.1vw,16px)]"
            />
          </div>

          {/* Year of Establishment */}
          <DatePicker />

          {/* PIC Name */}
          <div className="flex flex-col sm:flex-row sm:items-center">
            <label className="min-w-[160px] md:w-36 lg:w-40 font-semibold text-[clamp(14px,1.1vw,16px)] text-text-primary [font-family:'Lato',Helvetica]">
              {t("PIC Name")}
            </label>
            <Select>
              <SelectTrigger
                className="w-[min(100%,360px)] h-10 sm:h-10 md:h-12
                  border-light border bg-background-secondary
                  text-text-primary font-sans border-border-light text-[clamp(12px,1.1vw,16px)]"
              >
                <SelectValue defaultValue="Dr. Layla Al Saeed" />
              </SelectTrigger>
              <SelectContent className="!bg-background-secondary">
                <SelectItem
                  value="dr-layla"
                  className="bg-background-secondary border-border-light  text-[clamp(12px,1.1vw,16px)] text-text-primary"
                >
                  Dr. Layla Al Saeed
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Services Offered */}
          <div className="flex flex-col sm:flex-row sm:items-center">
            <label className="min-w-[160px] md:w-36 lg:w-40 font-semibold text-[clamp(14x,1.1vw,16px)] text-text-primary [font-family:'Lato',Helvetica]">
             {t("Services Offered")}
            </label>
            <Input
              defaultValue="General Consultation"
              className="w-[min(100%,360px)] h-10 sm:h-10 md:h-12
                border-light border bg-background-secondary
                text-text-primary font-sans border-border-light text-[clamp(12px,1.1vw,16px)]"
            />
          </div>
        </div>

        {/* ----- العمود الثاني ----- */}
        <div className="space-y-6">
          {/* Description */}
          <div className="flex flex-col sm:flex-row sm:items-start">
            <label className="min-w-[160px] md:w-36 lg:w-40 font-semibold text-[clamp(14px,1.1vw,16px)] text-text-primary">
              {t("Description")}
            </label>
            <Textarea
              className="w-[min(100%,360px)] h-20 sm:h-28
                border-light border bg-background-secondary
                text-text-primary font-sans border-border-light text-[clamp(12px,1.1vw,16px)]"
              defaultValue={complexInformation.description}
            />
          </div>

          {/* Session Duration / Slot */}
          <div className="flex flex-col sm:flex-row sm:items-center">
            <TimePicker />
          </div>
        </div>
      </div>
    </div>
  }
/>





    






     <ReusableCollapsible
  dir={`${local === "ar" ? "rtl" : "ltr"}`}
  title={t("Capacity")}
  initiallyOpen={isOpen.Capacity}
  onOpenChange={(open) => handleToggle("Capacity", open)}
  content={
    <div className="p-4 pt-0">
      {/* نفس grid تبع اللابتوب، بس على الموبايل بصير عمود واحد */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Staff Capacity */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <label className=" text-[clamp(14px,1.1vw,16px)] font-semibold text-text-primary sm:text-base">
              {t("Staff Capacity")}
          </label>
          <Input
            defaultValue="2150"
            className="w-[min(100%,220px)] h-10 sm:h-12 bg-background-secondary border-border-light text-text-primary  text-[clamp(12px,1.1vw,16px)] "
          />
        </div>

        {/* Doctors Capacity */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <label className=" text-[clamp(14px,1.1vw,16px)] font-semibold text-text-primary  sm:text-base">
             {t("Doctors Capacity")}
          </label>
          <Input
            defaultValue="1780"
            className="w-[min(100%,220px)]  h-10 sm:h-12 bg-background-secondary border-border-light text-text-primary  text-[clamp(12px,1.1vw,16px)] "
          />
        </div>

        {/* Patients Capacity */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <label className=" text-[clamp(14px,1.1vw,16px)] font-semibold text-text-primary  sm:text-base">
              {t("Patients Capacity")}
          </label>
          <Input
            defaultValue="250"
            className="w-[min(100%,220px)] h-10 sm:h-12 bg-background-secondary border-border-light text-text-primary  text-[clamp(12px,1.1vw,16px)] "
          />
        </div>

      </div>
    </div>
  }
/>



   
   
   
  





<ReusableCollapsible
  dir={`${local === "ar" ? "rtl" : "ltr"}`}
  title={t("Department")}
  initiallyOpen={isOpen.departments}
  onOpenChange={(open) => handleToggle("departments", open)}
  content={
    <div className="p-3 pt-0 h-auto pb-3">
      {/* Grid: عمودين */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-2 gap-y-6">
        
     {/* Department Name + Select */}
<div className="flex flex-col sm:flex-row sm:items-center gap-y-2 sm:gap-x-4 w-full sm:w-[520px]">
  {/* Label */}
  <label className="w-full sm:w-[160px] text-text-primary font-semibold text-[clamp(14px,1.1vw,16px)]">
    {t("Department Name")}:
  </label>

  {/* Select */}
  <Select>
    <SelectTrigger
      className="w-[min(100%,360px)] h-10 sm:h-10 md:h-12 
        border border-border-light bg-background-secondary 
        text-text-primary font-sans  text-[clamp(12px,1.1vw,14px)] "
    >
      <SelectValue defaultValue="razi" />
    </SelectTrigger>
    <SelectContent className="bg-background-secondary border border-border-light">
      <SelectItem value="razi">Al razi</SelectItem>
      <SelectItem value="noor">Al Noor Clinic</SelectItem>
    </SelectContent>
  </Select>
</div>


        {/* Description */}
        <div className="flex flex-col">
          <span className="text-[clamp(14px,1.1vw,16px)] text-text-primary font-semibold mb-2">
            {t("Description")}
          </span>
          <p className="whitespace-normal break-words text-text-primary font-semibold text-[clamp(12px,2vw,14px)]">
            Al Noor Clinic is a multi-specialty clinic offering high-quality care with modern facilities.
          </p>
        </div>
      </div>
    </div>
  }
/>





         




         <ReusableCollapsible  dir={`${local === "ar" ? "rtl" : "ltr"}`}
            title=       {t("Clinic Contact Information")}
            initiallyOpen={isOpen.contactInfo}
            onOpenChange={(open) => handleToggle("contactInfo", open)}
            content={<div className="h-full pb-4">
      
                  <div className=" flex gap-x-[53px]  flex-wrap  " >
                                        {/* Phone Number Field */}


                                        <div className=" w-full   sm:w-[520px] gap-y-2 rounded-md py-1">
                                            {/* Label + Input */} <div className="flex  items-start  flex-col  sm:flex-row  "> {/* Label + Icon */} <div className="flex items-center text-center mt-3  pb-9 gap-x-2">
                                                <div className="text-text-primary"> <svg className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.77089 1.79165C4.74396 1.78995 4.69757 1.79131 4.62528 1.80353C3.77857 1.94663 3.00486 2.37648 2.43547 3.02333C1.97218 3.54965 1.66854 4.19192 1.55287 4.87525C1.48516 5.27528 1.49216 5.71071 1.52066 6.19936C1.69143 9.12694 2.92996 11.9003 5.01501 13.9853C7.18212 16.1525 10.0928 17.4051 13.1473 17.4949C13.5053 17.5054 13.8283 17.4977 14.1251 17.4475C14.8084 17.3318 15.4507 17.0282 15.977 16.5649C16.6598 15.9639 17.1008 15.1353 17.218 14.2335L17.2168 14.233L17.2168 14.2329L12.8295 12.3487L12.8294 12.3487L12.8294 12.3487L10.4887 13.9123C10.4881 13.9127 10.4874 13.9132 10.4868 13.9136C10.2713 14.0586 10.0219 14.1451 9.76298 14.1648C9.50325 14.1845 9.24287 14.1363 9.00745 14.0248L9.00328 14.0228C7.25484 13.1817 5.84277 11.7732 4.99715 10.0269L4.99564 10.0238L4.99565 10.0238C4.88489 9.79239 4.83535 9.5364 4.85176 9.28035C4.86817 9.0243 4.94999 8.77673 5.0894 8.56133L5.09234 8.55678L5.09236 8.55679L6.65297 6.18316L6.65155 6.17989L6.65156 6.17988L4.77089 1.79165ZM17.2189 14.2264L17.2189 14.2266L17.2189 14.2264ZM4.37532 0.324505C4.70725 0.268408 5.26379 0.236222 5.73387 0.632745C5.91326 0.784063 6.05538 0.976462 6.14718 1.19512L8.02884 5.58566C8.02911 5.58629 8.02938 5.58692 8.02965 5.58755C8.12707 5.81269 8.16779 6.05829 8.14822 6.30284C8.1286 6.54807 8.04897 6.78472 7.91634 6.99191L7.9114 6.99963L7.91135 6.9996L6.3487 9.37632C7.04612 10.8147 8.20932 11.9751 9.6494 12.6691L9.65244 12.667L9.65244 12.667L11.9944 11.1026C12.2022 10.9623 12.4421 10.8767 12.6918 10.8537C12.9415 10.8307 13.193 10.871 13.423 10.9711C13.4239 10.9715 13.4249 10.9719 13.4258 10.9723L17.8056 12.8533C18.1054 12.9793 18.3558 13.1998 18.5186 13.4813C18.6822 13.7643 18.7483 14.0931 18.7067 14.4173C18.5445 15.6835 17.9264 16.8473 16.9681 17.6908C16.2313 18.3395 15.3321 18.7645 14.3755 18.9264C13.9356 19.0009 13.4989 19.0059 13.1033 18.9942C9.66683 18.8932 6.39236 17.484 3.95435 15.046C1.60865 12.7003 0.215328 9.58029 0.0232104 6.28671C-0.00635157 5.77991 -0.0237603 5.20192 0.0739086 4.62491C0.235831 3.6683 0.660897 2.76911 1.30954 2.03223C2.1067 1.12662 3.18988 0.524849 4.37532 0.324505Z" fill="CurrentColor" />
                                                </svg>
                                                </div>
                                                <div className="text-text-primary text-start font-semibold sm:w-[132px] text-[clamp(14px,1.1vw,16px)]">
                                                    {t("Phone Number")}: </div>
                                            </div> {/* Phone Input */}
                                                <div className="relative w-full ">




                                                    <PhoneInputCustom value={contactInfo.phoneNumbers} 
                                                    />  <div className="flex text-secondary-dark justify-end p-2 max-w-[360px]">
                                                        <PlusIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 cursor-pointer" /> </div> </div> </div>
                                            {/* Plus Icon */}


                                        </div>



                                        <div className="flex flex-col sm:flex-row items-start sm:items-start w-full   sm:w-[560px]   gap-y-2 ">
                                            {/* Label + Icon */}
                                            <div className="flex items-center gap-2 pt-4 sm:w-[166px] h-6 flex-shrink-0">
                                                <div className="   text-text-primary ">        <svg
                                                    className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6"
                                                    viewBox="0 0 22 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M8.07923 0.787497C10.0441 0.737503 11.9541 0.737499 13.9191 0.787497C17.157 0.869496 18.9413 0.915255 20.2843 2.25625C21.6291 3.61122 21.6655 5.3485 21.7325 8.50136C21.7535 9.50833 21.7535 10.4866 21.7325 11.4936C21.6656 14.6461 21.6288 16.3819 20.2872 17.7348C18.9422 19.0788 17.158 19.1244 13.92 19.2064C12.9381 19.2314 11.9691 19.2445 11.0001 19.2445C10.0312 19.2445 9.06212 19.2314 8.0802 19.2064C4.84234 19.1244 3.05795 19.0785 1.71497 17.7377C0.370009 16.3827 0.332745 14.6454 0.265749 11.4926C0.24475 10.4856 0.244751 9.50735 0.265749 8.50039C0.332749 5.34739 0.370038 3.6112 1.71204 2.2582C3.05703 0.914271 4.84128 0.869495 8.07923 0.787497ZM13.881 2.28554C11.9421 2.23555 10.0572 2.23555 8.11731 2.28554C5.07934 2.36254 3.69256 2.39684 2.77356 3.31582C1.85556 4.24182 1.82677 5.58664 1.76477 8.53164C1.74378 9.5165 1.74378 10.4745 1.76477 11.4603C1.82677 14.4053 1.85648 15.7502 2.77747 16.6771C3.69447 17.593 5.08048 17.6294 8.11829 17.7064C10.0572 17.7564 11.9421 17.7564 13.882 17.7064C16.9199 17.6294 18.3057 17.5941 19.2247 16.6752C20.1427 15.7492 20.1715 14.4053 20.2335 11.4603C20.2545 10.4755 20.2545 9.5175 20.2335 8.53164C20.1715 5.58664 20.1428 4.24086 19.2218 3.31386C18.3048 2.39817 16.9186 2.36253 13.881 2.28554ZM5.35462 6.11074C5.56562 5.75474 6.02596 5.63509 6.38196 5.84609L9.32337 7.58633C10.7954 8.45333 11.2039 8.45333 12.6779 7.58633L15.6183 5.84707C15.9753 5.63607 16.4356 5.75472 16.6456 6.11172C16.8564 6.46859 16.7387 6.92802 16.382 7.13808L13.4396 8.87832C12.4588 9.45619 11.73 9.74442 11.0001 9.74453C10.2711 9.74453 9.54165 9.45532 8.56165 8.87832L5.61829 7.13711C5.26276 6.92603 5.14393 6.46654 5.35462 6.11074Z"
                                                        fill="currentColor"
                                                    />
                                                </svg></div>
                                                <span className="min-sm:w-[clamp(88px,10vw,162px)] text-text-primary font-semibold text-[clamp(14px,1.1vw,16px)] leading-6">
                                                    {t("Email")}:
                                                </span>
                                            </div>

                                            {/* Input */}
                                            <input
                                                type="email"
                                               defaultValue={contactInfo.email}
                                                className=" w-[min(100%,360px)] rounded-[4px]  h-10 sm:h-10 md:h-12  bg-background-secondary placeholder:text-text-secondary items-start  border border-border-light  shadow-shadow-xs px-3"
                                            />
                                        </div>


                                    </div></div>
                    
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
      <div className="flex flex-col text-[clamp(14px,1.1vw,16px)] pb-5 gap-3 sm:gap-4">
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
                className={`${
                  dark ? "text-white" : "text-[#2a2b2a]"
                } tracking-[0.07px] font-normal text-text-primary text-[clamp(14px,1.1vw,16px)] leading-5 sm:leading-6 whitespace-nowrap`}
              >
                {t(`${workDay.day}`)}
              </label>
            </div>

            {/* وقت العمل */}
            <div className="flex-1 w-full text-text-primary">
<div
  className={`flex items-center text-text-primary
    w-full max-w-[calc(100%-16px)]  /* موبايل: ما يطلع برا الشاشة */
    sm:w-[360px] sm:h-[48px]        /* لابتوب: ثابت */
    py-2 px-3 border rounded transition
    ${
      activeDays[index]
        ? "bg-background-primary border-[#e4e2dd]"
        : "bg-background-tertiary text-text-primary"
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




          {/* Doctors & Staff Collapsible */}
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
      <TableHead className="w-[5%] text-center text-text-primary font-semibold text-[clamp(14px,2vw,16px)]">
        {t("NO")}
      </TableHead>
      <TableHead className="w-[15%] text-center text-text-primary font-semibold text-[clamp(14px,2vw,16px)]">
        {t("User-ID")}
      </TableHead>
      <TableHead className="w-[25%] text-center text-text-primary font-semibold text-[clamp(14px,2vw,16px)]">
        {t("Name")}
      </TableHead>
      <TableHead className="w-[15%] text-center text-text-primary font-semibold text-[clamp(14px,2vw,16px)]">
        {t("User Type")}
      </TableHead>
      <TableHead className="w-[15%] text-center text-text-primary font-semibold text-[clamp(14px,2vw,16px)]">
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
        <TableCell className="text-center w-[5%] font-medium text-[clamp(12px,2vw,14px)]">
          {person.number}
        </TableCell>
        <TableCell className="text-center w-[10%] font-medium text-[clamp(12px,2vw,14px)]">
          {person.userId}
        </TableCell>
        <TableCell className="text-center w-[25%] font-medium text-[clamp(12px,2vw,14px)]">
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
        <TableCell className="text-center w-[15%] font-medium text-[clamp(12px,2vw,14px)]">
          {person.userType}
        </TableCell>
<TableCell className="w-[15%] text-center">
  <Badge variant="destructive" className="bg-secondary-light text-secondary-dark rounded-[20px]  w-[90px] h-[20px] sm:h-[24px] flex items-center justify-center mx-auto text-[clamp(14px,2vw,16px)] sm:text-xs">
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




       

          {/* Maps Location Collapsible */}
          <ReusableCollapsible  dir={`${local === "ar" ? "rtl" : "ltr"}`}
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
      