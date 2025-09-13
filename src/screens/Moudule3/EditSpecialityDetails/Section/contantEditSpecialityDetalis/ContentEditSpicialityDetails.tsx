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
    no: 1,
    userId: 444,
    name: "Dr. Ahmed Hassan",
    assignedClinic: "Cardiology Clinic",
    appointmentDate: "June 15, 2025",
    status: "Active",
  },
  {
    no: 2,
    userId: 6666,
    name: "Dr. Ahmed Hassan",
    assignedClinic: "Cardiology Clinic",
    appointmentDate: "June 15, 2025",
    status: "Active",
  },
  {
    no: 3,
    userId: 1234,
    name: "Dr. Ahmed Hassan",
    assignedClinic: "Cardiology Clinic",
    appointmentDate: "June 15, 2025",
    status: "Active",
  },
  {
    no: 4,
    userId: 5667,
    name: "Dr. Ahmed Hassan",
    assignedClinic: "Cardiology Clinic",
    appointmentDate: "June 15, 2025",
    status: "Active",
  },
];
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import {

  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../../../components/ui/pagination";

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

  return (
    <div

      className={`flex flex-col w-full overflow-hidden items-start gap-4  py-4  self-stretch relative 
      } `}
    >

      <header className="flex h-[50px] justify-between pl-[4px] pr-0 py-0 self-stretch w-full items-center">
        <div className="flex items-center gap-4 rounded-2xl ">

          {local === "ar" ? (
            <ArrowForwardIcon className="w-6 h-6" />
          ) : (
            <ArrowLeftIcon className="w-6 h-6" />
          )}
          <div className="flex flex-col">
            <h1 className="font-h5-22px-bold font-[number:var(--h5-22px-bold-font-weight)] text-on-surface-primary text-[length:var(--h5-22px-bold-font-size)] tracking-[var(--h5-22px-bold-letter-spacing)] leading-[var(--h5-22px-bold-line-height)] [font-style:var(--h5-22px-bold-font-style)]">
              {t("Specialties")}
            </h1>
            <p className="font-title-14px-semibold font-[number:var(--title-14px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-14px-semibold-font-size)] tracking-[var(--title-14px-semibold-letter-spacing)] leading-[var(--title-14px-semibold-line-height)] [font-style:var(--title-14px-semibold-font-style)]">
              {t("Edit Specialty details")}

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
                Admin
              </div>
            </div>
          </div>
        </div>
      </header>



      <Card className="flex flex-col h-auto items-start gap-6 p-5 mt-[10px] bg-background-tertiary relative self-stretch w-full rounded-2xl overflow-hidden">

        <CardContent className="p-0 w-full overflow-y-auto gap-5 h-auto">

            <div className="flex gap-[16px] justify-end " dir={local === 'ar' ? 'rtl' : 'ltr'}>
              <button className=" w-[200px] h-[40px] rounded-[20px] border border-border-light bg-surface-primary  font-lato font-medium text-sm leading-[100%] tracking-[0] text-text-primary">
                {t("Cancel")}
              </button>
              <button className=" w-[200px] h-[40px] rounded-[20px] bg-secondary-dark font-lato font-medium text-sm leading-[100%] tracking-[0] text-surface-primary">
                {t("Save")}
              </button>
        
          </div>


          <Card className=" bg-surface-default rounded-2xl mt-5  w-1159 h-254 mb-6"dir={local === 'ar' ? 'rtl' : 'ltr'}>
            <CardContent className="p-6">
              <h2 className="text-text-accent text-[16px] font-bold mb-6">
                 {t("Specialty Details")}
              </h2>

              <div className="grid grid-cols-2 gap-[32px] items-center">
                <div className="flex gap-[32px] items-center mb-[115px]">
                  <div className="text-text-primary font-semibold text-[16px] mb-1">
                       {t("Specialty Name")}
                  </div>
                  <div className="text-text-primary  font-semibold text-[14px]">

                   <input
  className="w-[360px] h-12 border-light border p-3 bg-background-secondary text-text-primary font-sans"
  placeholder={details[0].SpecialtyName}
/>
                  </div>
                </div>

                <div className="flex gap-[32px] w-[552px] h-[170px] items-center ">
                  <div className="text-text-primary w-[140px] font-semibold text-[16px] mb-40">
                        {t("Description")}
                  </div>
                  <div className="text-text-primary font-semibold text-[14px]">


                 <textarea
  className="w-[380px] h-[170px] p-3 border-light border bg-background-secondary text-text-primary font-sans"
  placeholder={details[0].Description}
/>




                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

            <Card className="w-full bg-surface-default rounded-2xl mb-6" dir={local === 'ar' ? 'rtl' : 'ltr'}>
                      <CardContent className="p-4">
                        <div className="mb-6">
                          <h3 className="text-text-accent text-[16px] font-bold">
                            {t("Assigned Doctors List")}
                          </h3>
                        </div>
          
                                 <div className="flex flex-col flex-grow rounded-lg   items-start gap-5  pr-[10px] relative w-full overflow-hidden"  >
                                          <div className="w-full overflow-y-auto flex-grow  h-[228px]   rounded-lg"  >
                                              <Table className="table-fixed w-full rounded-lg text-center border-collapse"  >
                            <TableHeader>
                              <TableRow className="sticky top-0 z-10">
                                <TableHead className="text-center w-[5%] font-semibold text-text-primary text-16px">
                                   {t("No")}
                                </TableHead>
                                <TableHead className="text-center w-[16%]  font-semibold text-text-primary text-16px">
                                  {t("User-ID")}
                                </TableHead>
                                <TableHead className="text-center w-[16%]  font-semibold text-text-primary text-16px">
                                    {t("Name")}
                                </TableHead>
                                <TableHead className="text-center w-[16%]  font-semibold text-text-primary text-16px">
                                  {t("Assigned Clinics")}
                                </TableHead>
                                <TableHead className="text-center  font-semibold text-text-primary text-16px">
                                      {t("Clinic Scheduled Appointments Count")}
                                </TableHead>
                                <TableHead className="text-center w-[16%]  font-semibold text-text-primary text-16px">
                                       {t("NaStatusme")}
                                </TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {doctorsData.map((doctor, index) => (
                                <TableRow
                                  key={`doctor-${index}`}
                                  className="bg-surface-default border-b "
                                >
                                  <TableCell className="text-center font-title-14px-semibold font-[number:var(--title-14px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-14px-semibold-font-size)] tracking-[var(--title-14px-semibold-letter-spacing)] leading-[var(--title-14px-semibold-line-height)] [font-style:var(--title-14px-semibold-font-style)]">
                                    {doctor.no}
                                  </TableCell>
                                  <TableCell className="text-center font-title-14px-semibold font-[number:var(--title-14px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-14px-semibold-font-size)] tracking-[var(--title-14px-semibold-letter-spacing)] leading-[var(--title-14px-semibold-line-height)] [font-style:var(--title-14px-semibold-font-style)]">
                                    {doctor.userId}
                                  </TableCell>
                                  <TableCell className="text-center font-title-14px-semibold font-[number:var(--title-14px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-14px-semibold-font-size)] tracking-[var(--title-14px-semibold-letter-spacing)] leading-[var(--title-14px-semibold-line-height)] [font-style:var(--title-14px-semibold-font-style)]">
                                    <div className="flex items-center gap-2 justify-center">
                                      <Avatar
                                        src={doctor.avatar}
                                        alt={doctor.name}
                                        sx={{
                                          width: 32,
                                          height: 32,
                                          bgcolor: !doctor.avatar ? "var(--theme-text-accent)" : "transparent", // لون الدائرة من متغير الثيم
                                        }}
                                      >
                                        {/* إذا ما في صورة، تظل الدائرة ملونة بدون أي نص */}
                                      </Avatar>
                                      <span>{doctor.name}</span>
                                    </div>
                                  </TableCell>
                                  <TableCell className="text-center font-title-14px-semibold font-[number:var(--title-14px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-14px-semibold-font-size)] tracking-[var(--title-14px-semibold-letter-spacing)] leading-[var(--title-14px-semibold-line-height)] [font-style:var(--title-14px-semibold-font-style)]">
                                    {doctor.assignedClinic}
                                  </TableCell>
                                  <TableCell className="text-center font-title-14px-semibold font-[number:var(--title-14px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-14px-semibold-font-size)] tracking-[var(--title-14px-semibold-letter-spacing)] leading-[var(--title-14px-semibold-line-height)] [font-style:var(--title-14px-semibold-font-style)]">
                                    {doctor.appointmentDate}
                                  </TableCell>
                                  <TableCell className="text-center">
                                    <div className="flex items-center justify-center gap-2">
          
          
                                        <Toggle>
                                          {doctor.status}
                                      </Toggle>
                                    </div>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
             </div>
                         <div className="flex h-[66px] justify-between pl-2 pr-2  pr-0 py-0 w-full items-center " dir={local === 'ar' ? 'rtl' : 'ltr'}>
                                          <div className="flex items-center gap-2.5">
                                              <span className="font-title-11px-regular font-[number:var(--title-11px-regular-font-weight)] text-on-surface-secondary text-[length:var(--title-11px-regular-font-size)] tracking-[var(--title-11px-regular-letter-spacing)] leading-[var(--title-11px-regular-line-height)] [font-style:var(--title-11px-regular-font-style)]">
                                                  {t("Showing")}
                                              </span>
                                              <Select defaultValue="10"dir={local === 'ar' ? 'rtl' : 'ltr'}>
                                                  <SelectTrigger className="w-[60px] h-[30px] bg-secondary-light rounded-[20px] border-0 px-2 py-1.5">
                                                      <SelectValue placeholder="10" />
                                                  </SelectTrigger>
                                                  <SelectContent>
                                                      <SelectItem value="10">10</SelectItem>
                                                      <SelectItem value="20">20</SelectItem>
                                                      <SelectItem value="50">50</SelectItem>
                                                  </SelectContent>
                                              </Select>
                                              <span className="font-title-11px-regular w-64 font-[number:var(--title-11px-regular-font-weight)] text-on-surface-secondary text-[length:var(--title-11px-regular-font-size)] tracking-[var(--title-11px-regular-letter-spacing)] leading-[var(--title-11px-regular-line-height)] [font-style:var(--title-11px-regular-font-style)]">
                                                  {t("out of 14")}
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
                                                          {local === "en" ? (
                                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                  <path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="black" />
                                                              </svg>
                                                          ) : (
                                                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                  <path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" fill="CurrentColor" />
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
                    </Card>


        </CardContent>
      </Card>
    </div>
  );
};
