import {
  ArrowLeftIcon,
  BellIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  Edit2Icon,
} from "lucide-react";
import Toggle from "../../../../../components/ui/SwitchToggel";
import React from "react";
import { Button } from "../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "../../../../../components/ui/pagination";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import TranslateIcon from "@mui/icons-material/Translate";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../components/ui/select";
import { Textarea } from "../../../../../components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../../components/ui/table";
import { Input } from "../../../../../components/ui/input";
interface Doctor {
  no: number;
  userId: number;
  name: string;
  assignedClinic: string;
  appointmentDate: string;
  status: string;
}
const doctorsData = [

  {
    no: 2,
    userId: 6666,
    name: "Dr. Ahmed Hassan",
    assignedClinic: "Cardiology Clinic",
    appointmentDate: "June 15, 2025",
    status: "Active",
    avatar: null,
  },
  {
    no: 2,
    userId: 6666,
    name: "Dr. Ahmed Hassan",
    assignedClinic: "Cardiology Clinic",
    appointmentDate: "June 15, 2025",
    status: "Active",
    avatar: null,
  },
  {
    no: 2,
    userId: 6666,
    name: "Dr. Ahmed Hassan",
    assignedClinic: "Cardiology Clinic",
    appointmentDate: "June 15, 2025",
    status: "Active",
    avatar: null,
  },
  {
    no: 2,
    userId: 6666,
    name: "Dr. Ahmed Hassan",
    assignedClinic: "Cardiology Clinic",
    appointmentDate: "June 15, 2025",
    status: "Active",
    avatar: null,
  },
];
import Avatar from "@mui/material/Avatar";
import { ThemeToggle } from "../../../../../components/theme/ThemeSwitcher";
import { useState } from "react";
import { SideBar } from "../../../../CommonComponents/SideBarPlan2";
import {

  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../../../components/ui/pagination";
import { Link } from "react-router-dom";

interface SpecialtyDetail {
  SpecialtyName: string;
  Description: string;
}
const SpecialtyDetails = (t: (key: string) => string): SpecialtyDetail[] => [
  {
    SpecialtyName: t("Enter Speciality Name"),
    Description: t("Enter Description"),
  },
];


const addressFields = [
  { label: "Building Number", value: "Building Number" },
  { label: "Street Name", value: "Street Name" },
  { label: "Region", value: "Region" },
  { label: "Country", value: "Country" },
  { label: "Nation", value: "Nation" },
];

interface NoDataSectionProps {
  dark: boolean;
  local: string;
  handelDarkClick: () => void;
  handleLanguageClick: () => void;
}

export const ContantEditSpaicialityDetails = ({ local, dark, handelDarkClick, handleLanguageClick }: NoDataSectionProps): JSX.Element => {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);
  const details = SpecialtyDetails(t);

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

        className={`flex flex-col w-full overflow-hidden items-start gap-4  py-4  self-stretch relative 
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
                <h1 className="font-bold text-[14px] text-on-surface-primary">
                  {t("Specialties")}
                </h1>
                <p className="text-[14px] text-on-surface-primary">
                  {t("Edit Specialty details")}
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
                  {t("Specialties")}
                </h1>
                <p className="text-[14px] md:text-base text-on-surface-primary">
                  {t("Edit Specialty details")}
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
                  <div className="text-[14px] text-on-surface-tertiary">
                    {t("Admin")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>




        <Card className="flex flex-col h-auto items-start gap-6 p-5 mt-[10px] bg-background-tertiary relative self-stretch w-full rounded-2xl overflow-hidden">

          <CardContent className="p-0 w-full overflow-y-auto gap-5 h-auto">

            <div className="flex gap-[14px]  justify-end p-3 items-end text-end pb-2 sm:pb-3 md:pb-3 lg:pb-4 " dir={local === 'ar' ? 'rtl' : 'ltr'} >
            <Link to="/ViewSpecialtiesDetails ">
              <button className="     w-[100px] h-[40px]       /* الموبايل الافتراضي */
   
    md:w-[180px] md:h-[38px]
    lg:w-[200px] lg:h-[40px] 
 
      rounded-[20px] border border-border-light bg-surface-primary  font-lato font-medium text-sm leading-[100%] tracking-[0] text-text-primary">
                {t("Cancel")}
              </button> </Link>
              <button className="  w-[100px] h-[40px]       /* الموبايل الافتراضي */

    md:w-[160px] md:h-[36px]
    lg:w-[200px] lg:h-[40px]  rounded-[20px] bg-secondary-dark font-lato font-medium text-sm leading-[100%] tracking-[0] text-surface-primary">
                {t("Save")}
              </button>

            </div>


            <Card className=" bg-surface-default rounded-2xl mt-5  w-1159 h-254 mb-6" dir={local === 'ar' ? 'rtl' : 'ltr'}>
              <CardContent className="p-6">
                <h2 className=" text-primary-default text-[16px] font-bold mb-6">
                  {t("Specialty Details")}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Specialty Name */}
                  <div className="flex flex-col md:flex-row gap-2 md:items-start">
                    <label className="text-text-primary font-semibold text-[16px] w-[140px] md:mb-0 mb-1">
                      {t("Specialty Name")}
                    </label>
                    <input
                      className="w-[min(100%,360px)] h-9 sm:h-10 md:h-12 text-[clamp(14px,1.1vw,16px)] border-light border p-3 bg-background-secondary text-text-primary font-sans"
                      placeholder={details[0].SpecialtyName}
                    />
                  </div>

                  {/* Description */}
                  <div className="flex flex-col md:flex-row gap-2 md:items-start">
                    <label className="text-text-primary font-semibold text-[16px] w-[140px] md:mb-0 mb-1">
                      {t("Description")}
                    </label>
                    <textarea
                      className="w-[min(100%,360px)] h-[170px] text-[clamp(14px,1.1vw,16px)] p-3 border-light border bg-background-secondary text-text-primary font-sans"
                      placeholder={details[0].Description}
                    />
                  </div>
                </div>


              </CardContent>
            </Card>

            <Card className="w-full bg-surface-default rounded-2xl mb-6" dir={local === 'ar' ? 'rtl' : 'ltr'}>
              <CardContent className="p-4">
                <div className="mb-6">
                  <h3 className=" text-primary-default text-[16px] font-bold">
                    {t("Assigned Doctors List")}
                  </h3>
                </div>
<div className="w-full overflow-x-auto">
  {/* سكرول أفقي لو الجدول كبير */}
  <div
    className="overflow-y-auto rounded-lg"
    style={{ height: "calc(60vh - 78px-300px)" }} // هنا تحدد أقصر طول يبدأ منه السكرول العمودي
  >
    <table className="table-auto w-full min-w-[800px] border-collapse">
      <thead className="sticky top-0 z-10 bg-background-primary border-b border-border-light">
        <tr>
          <th className="text-center text-text-primary text-[16px] font-semibold w-[5%] min-w-[50px]">No</th>
          <th className="text-center text-text-primary text-[16px] font-semibold w-[16%] min-w-[150px]">User-ID</th>
          <th className="text-center text-text-primary text-[16px] font-semibold w-[16%] min-w-[150px]">Name</th>
          <th className="text-center text-text-primary text-[16px] font-semibold w-[16%] min-w-[150px]">Assigned Clinics</th>
          <th className="text-center text-text-primary text-[16px] font-semibold min-w-[200px]">
            Clinic Scheduled Appointments Count
          </th>
          <th className="text-center text-text-primary text-[16px] font-semibold w-[16%] min-w-[120px]">Status</th>
        </tr>
      </thead>
      <tbody>
        {doctorsData.map((doctor, index) => (
          <tr key={index} className="bg-surface-default border-b h-[54px]">
            <td className="text-center text-text-primary text-[14px] font-semibold">{doctor.no}</td>
            <td className="text-center text-text-primary text-[14px] font-semibold">{doctor.userId}</td>
            <td className="text-center text-text-primary text-[14px] font-semibold">
              <div className="flex items-center gap-2 justify-center text-text-primary text-[14px] font-semibold">
                <Avatar
                  src={doctor.avatar ?? undefined}
                  alt={doctor.name}
                  sx={{
                    width: 30,
                    height: 30,
                    bgcolor: !doctor.avatar ? "var(--theme-text-accent)" : "transparent",
                  }}
                />
                <span className="min-w-[150px]">{doctor.name}</span>
              </div>
            </td>
            <td className="text-center text-text-primary text-[14px] font-semibold">{doctor.assignedClinic}</td>
            <td className="text-center text-text-primary text-[14px] font-semibold">{doctor.appointmentDate}</td>
            <td className="text-center text-text-primary text-[14px] font-semibold">
              <div className="flex items-center justify-center gap-2">
                <Toggle />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>








                <div className="flex items-center justify-between p-4" dir={local === "ar" ? "rtl" : "ltr"}>
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
              </CardContent>
            </Card>


          </CardContent>
        </Card>
      </div></div>
  );
};
