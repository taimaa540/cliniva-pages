import {
  ArrowRightIcon,
  BellIcon,
  CheckIcon,
  ChevronDownIcon,
  PhoneIcon,
  PlusIcon,
  TimerIcon,

} from "lucide-react";
import Avatar from "@mui/material/Avatar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Checkbox from '@mui/material/Checkbox';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowLeftIcon from '@mui/icons-material/ArrowForward';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../../../../components/ui/collapsible'
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import TranslateIcon from "@mui/icons-material/Translate";
import DarkModeToggle from "../../../ElementUsersNoDataTo/DarkMode";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { Textarea } from "../../../../components/ui/textarea";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const contactInfo = {
  phoneNumbers: "026 540589898",
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
const workingDaysData = [
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


const staffData = [
  {
    number: 1,
    userId: "US-001",
    name: "Dr. Ahmed Hassan",
    userType: "Doctor",
  },
  {
    number: 2,
    userId: "US-001",
    name: "Dr. Ahmed Hassan",
    userType: "Doctor",
  },
  {
    number: 3,
    userId: "US-001",
    name: "Dr. Ahmed Hassan",
    userType: "Doctor",
  },
  {
    number: 4,
    userId: "US-001",
    name: "Dr. Ahmed Hassan",
    userType: "Doctor",
  },
];

const tabOptions = ["All", "Doctors", "Staff"];


interface NoDataSectionProps {
  dark: boolean;
  local: string;

  handelDarkClick: () => void;
  handleLanguageClick: () => void;
}

export const CapacitySection = ({ local, dark, handelDarkClick, handleLanguageClick }: NoDataSectionProps): JSX.Element => {
  const { t, i18n } = useTranslation('en')
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);
  const [activeTab, setActiveTab] = useState("All");
  return (
    <div className="flex flex-col w-full overflow-hidden h-full items-start gap-4  py-4  pb-8 self-stretch relative bg-background-primary">
      <header className="flex h-[50px] justify-between pl-[4px] pr-0 py-0 self-stretch w-full items-center bg-background-primary">
        <div className="flex items-center gap-4 rounded-2xl ">


          {local === "ar" ? (
            <ArrowRight className="w-6 h-6" />
          ) : (
            <ArrowLeft className="w-6 h-6" />
          )}
          <div className="flex flex-col">
            <h1 className="font-h5-22px-bold font-[number:var(--h5-22px-bold-font-weight)] text-on-surface-primary text-[length:var(--h5-22px-bold-font-size)] tracking-[var(--h5-22px-bold-letter-spacing)] leading-[var(--h5-22px-bold-line-height)] [font-style:var(--h5-22px-bold-font-style)]">
              {t("        Medical Facilities    ")}
            </h1>
            <p className="font-title-14px-semibold font-[number:var(--title-14px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-14px-semibold-font-size)] tracking-[var(--title-14px-semibold-letter-spacing)] leading-[var(--title-14px-semibold-line-height)] [font-style:var(--title-14px-semibold-font-style)]">
              {t("        Edit Clinic Details   ")}
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
                {t("   Admin   ")}
              </div>
            </div>
          </div>
        </div>
      </header>

      <Card
        className={`flex flex-col h-full items-start   pb-8  gap-6 p-5 mt-[10px] bg-background-tertiary  relative self-stretch w-full flex-[0_0_auto] 
        } rounded-2xl overflow-hidden`}
      >
        <CardContent className="p-0 w-full   pb-8  overflow-y-auto scroll-x-hidden gap-5 h-full">





          <div className="flex items-start justify-between w-full mb-4">
            <Badge
              variant="secondary"
              className="bg-secondary-light text-secondary-dark rounded-[20px] px-4 py-2.5"
            >
              {t("    Active    ")}
            </Badge>

            <div className="flex items-end justify-end gap-4">
              <Button
                variant="outline"
                className="w-[200px] h-10 bg-white rounded-[20px] border-2 border-[#e4e2dd] px-4 py-2.5"
              >
                {t("    Cancel    ")}
              </Button>
              <Button className="w-[200px] h-10 bg-secondary-dark text-white rounded-[20px] px-4 py-2.5">
                {t("Save")}
              </Button>
            </div>
          </div>




          <Collapsible defaultOpen className="w-full bg-background-primary  mt-5 rounded-2xl">
            <Card className="bg-surface-default rounded-2xl">
              <CollapsibleTrigger className="w-full">
                <CardContent className="p-6 flex items-center justify-between">
                  <div style={{
                    fontFamily: "Lato",
                    fontWeight: 600,
                    fontStyle: "SemiBold",
                    fontSize: "16px",
                    lineHeight: "124%",
                    letterSpacing: "0%",
                  }}
                    className="text-text-accent font-bold size-16 w-56 text-start ">
                    <h2 >                       {t("     Clinic Info     ")}:</h2></div>
                  <ChevronDownIcon className="text-text-primary font-semiboldy w-8 h-8" />
                </CardContent>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <CardContent className="p-4 pt-0">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-8">
                        <label className="w-40 [font-family:'Lato',Helvetica]  text-text-primary font-semibold text-base">
                          {t("     Clinic Name     ")}
                        </label>
                        <Input
                          defaultValue="Al Noor Clinic"
                          className="w-[360px] h-12 bg-background-secondary border-border-light"
                        />
                      </div>

                      <div className="flex items-center gap-8">
                        <label className="w-40 [font-family:'Lato',Helvetica]  text-text-primary font-semibold text-gray-700 text-base">
                          {t("      Year of Establishment     ")}
                        </label>
                        <div className="relative w-[360px]">
                          {/* حقل الإدخال */}
                          <Input
                            defaultValue="3 April 2011"
                            className="h-12 pr-12 bg-background-secondary border-border-light  text-text-primary"
                          />

                          {/* الأيقونة على اليمين */}
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 text-text-primary" > <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_7681_102479)">
                              <rect width="14" height="14" fill="white" fill-opacity="0.01" />
                              <g clip-path="url(#clip1_7681_102479)">
                                <path d="M10.9375 -0.000976562C11.0535 -0.000976562 11.165 0.0449061 11.2471 0.126953C11.3291 0.209 11.375 0.320491 11.375 0.436523V0.874023H12.25C12.7141 0.874023 13.1591 1.05853 13.4873 1.38672C13.8155 1.71491 14 2.15989 14 2.62402V12.249C14 12.7132 13.8155 13.1581 13.4873 13.4863C13.1591 13.8145 12.7141 13.999 12.25 13.999H1.75C1.28587 13.999 0.840884 13.8145 0.512695 13.4863C0.184507 13.1581 0 12.7132 0 12.249V2.62402C0 2.15989 0.184507 1.71491 0.512695 1.38672C0.840884 1.05853 1.28587 0.874023 1.75 0.874023H2.625V0.436523C2.625 0.320491 2.67088 0.209 2.75293 0.126953C2.83498 0.044906 2.94647 -0.000976562 3.0625 -0.000976562C3.17853 -0.000976562 3.29002 0.044906 3.37207 0.126953C3.45412 0.209 3.5 0.320491 3.5 0.436523V0.874023H10.5V0.436523C10.5 0.320491 10.5459 0.209 10.6279 0.126953C10.71 0.0449061 10.8215 -0.000976562 10.9375 -0.000976562ZM0.875 12.249C0.875 12.4811 0.966765 12.7041 1.13086 12.8682C1.29495 13.0323 1.51794 13.124 1.75 13.124H12.25C12.4821 13.124 12.705 13.0323 12.8691 12.8682C13.0332 12.7041 13.125 12.4811 13.125 12.249V3.49902H0.875V12.249ZM9.1875 6.12305C9.24505 6.12305 9.30232 6.13419 9.35547 6.15625C9.40858 6.1783 9.45646 6.21124 9.49707 6.25195C9.53779 6.29257 9.57072 6.34044 9.59277 6.39355C9.61483 6.44671 9.62598 6.50398 9.62598 6.56152C9.62598 6.61907 9.61483 6.67634 9.59277 6.72949C9.57072 6.7826 9.53779 6.83048 9.49707 6.87109L6.87207 9.49609C6.83146 9.53681 6.78358 9.56974 6.73047 9.5918C6.67732 9.61385 6.62005 9.625 6.5625 9.625C6.50495 9.625 6.44768 9.61385 6.39453 9.5918C6.34142 9.56974 6.29354 9.53681 6.25293 9.49609L4.94043 8.18359C4.89986 8.14303 4.86771 8.09497 4.8457 8.04199C4.82369 7.98884 4.81152 7.93155 4.81152 7.87402C4.81152 7.8165 4.82369 7.7592 4.8457 7.70605C4.86771 7.65308 4.89986 7.60502 4.94043 7.56445C5.02258 7.4823 5.13382 7.43555 5.25 7.43555C5.30753 7.43555 5.36482 7.44771 5.41797 7.46973C5.47095 7.49174 5.519 7.52389 5.55957 7.56445L6.5625 8.56836L8.87793 6.25195C8.91854 6.21124 8.96642 6.1783 9.01953 6.15625C9.07268 6.13419 9.12995 6.12305 9.1875 6.12305Z" fill="#717680" />
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip0_7681_102479">
                                <rect width="14" height="14" fill="white" />
                              </clipPath>
                              <clipPath id="clip1_7681_102479">
                                <rect width="14" height="14" fill="CurrentColor" />
                              </clipPath>
                            </defs>
                          </svg>

                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="flex  gap-8 items-center">
                      <div className="w-40 text-text-primary font-semibold ">
                        {t("       Description        ")}:
                      </div>
                      <div className="relative  w-[360px]">
                        <Textarea
                          className="w-[360px]  h-12 border-light border bg-background-secondary  text-text-primary  font-sans"
                          defaultValue={complexInformation.description}
                        />

                      </div>
                    </div>



                  </div>

                  <div className="grid grid-cols-2 gap-8 mt-8 items-center">
                    <div className="flex items-center gap-8">
                      <label className="w-40  h-12 [font-family:'Lato',Helvetica] text-text-primary  font-semibold text-base">
                        {t("     PIC Name        ")}
                      </label>
                      <Select>
                        <SelectTrigger className="w-[360px]  !bg-background-secondary  h-12 bg-base-white ">
                          <SelectValue defaultValue="Dr. Layla Al Saeed" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dr-layla">
                            Dr. Layla Al Saeed
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex  gap-8 items-center ">
                      <label className=" w-40  [font-family:'Lato',Helvetica] text-text-primary font-semibold  text-base">
                        {t("     Session Duration /Slot      ")}
                      </label>


                      <div className="relative w-[360px]">
                        {/* حقل الإدخال */}
                        <Input
                          defaultValue="30 minutes"
                          className="h-12 pr-12 bg-background-secondary border-border-light  text-text-primary"
                        />

                        {/* الأيقونة على اليمين */}
                        <div className="absolute right-3 top-1/2 text-text-primary -translate-y-1/2 w-6 h-6 text-gray-400" > <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 3.75C7.21997 3.75 5.47991 4.27784 3.99987 5.26677C2.51983 6.25571 1.36628 7.66131 0.685088 9.30585C0.00389957 10.9504 -0.17433 12.76 0.172937 14.5058C0.520204 16.2516 1.37737 17.8553 2.63604 19.114C3.89472 20.3726 5.49836 21.2298 7.24419 21.5771C8.99002 21.9243 10.7996 21.7461 12.4442 21.0649C14.0887 20.3837 15.4943 19.2302 16.4832 17.7501C17.4722 16.2701 18 14.53 18 12.75C17.9973 10.3639 17.0482 8.07629 15.361 6.38905C13.6737 4.70182 11.3861 3.75273 9 3.75ZM9 20.25C7.51664 20.25 6.0666 19.8101 4.83323 18.986C3.59986 18.1619 2.63856 16.9906 2.07091 15.6201C1.50325 14.2497 1.35473 12.7417 1.64411 11.2868C1.9335 9.83197 2.64781 8.49559 3.6967 7.4467C4.7456 6.39781 6.08197 5.6835 7.53683 5.39411C8.99168 5.10472 10.4997 5.25325 11.8701 5.8209C13.2406 6.38856 14.4119 7.34986 15.236 8.58322C16.0601 9.81659 16.5 11.2666 16.5 12.75C16.4978 14.7384 15.7069 16.6448 14.3008 18.0508C12.8948 19.4569 10.9884 20.2478 9 20.25ZM13.2806 8.46938C13.3504 8.53903 13.4057 8.62175 13.4434 8.7128C13.4812 8.80384 13.5006 8.90144 13.5006 9C13.5006 9.09856 13.4812 9.19616 13.4434 9.28721C13.4057 9.37825 13.3504 9.46097 13.2806 9.53063L9.53063 13.2806C9.46095 13.3503 9.37822 13.4056 9.28718 13.4433C9.19613 13.481 9.09855 13.5004 9 13.5004C8.90146 13.5004 8.80388 13.481 8.71283 13.4433C8.62179 13.4056 8.53906 13.3503 8.46938 13.2806C8.3997 13.2109 8.34442 13.1282 8.30671 13.0372C8.269 12.9461 8.24959 12.8485 8.24959 12.75C8.24959 12.6515 8.269 12.5539 8.30671 12.4628C8.34442 12.3718 8.3997 12.2891 8.46938 12.2194L12.2194 8.46938C12.289 8.39964 12.3718 8.34432 12.4628 8.30658C12.5538 8.26884 12.6514 8.24941 12.75 8.24941C12.8486 8.24941 12.9462 8.26884 13.0372 8.30658C13.1283 8.34432 13.211 8.39964 13.2806 8.46938ZM6 1.5C6 1.30109 6.07902 1.11032 6.21967 0.96967C6.36033 0.829018 6.55109 0.75 6.75 0.75H11.25C11.4489 0.75 11.6397 0.829018 11.7803 0.96967C11.921 1.11032 12 1.30109 12 1.5C12 1.69891 11.921 1.88968 11.7803 2.03033C11.6397 2.17098 11.4489 2.25 11.25 2.25H6.75C6.55109 2.25 6.36033 2.17098 6.21967 2.03033C6.07902 1.88968 6 1.69891 6 1.5Z" fill="CurrentColor" />
                        </svg>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="flex items-center gap-8 mt-4">
                    <label className="w-40 [font-family:'Lato',Helvetica] text-text-primary font-semibold  text-base">
                      {t("                     Services Offered      ")}
                    </label>
                    <Input
                      defaultValue="General Consultation"
                      className=" w-[360px] h-12 bg-background-secondary   border-border-light text-text-primary"
                    />
                  </div>

                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>


          <Collapsible defaultOpen className="w-full bg-background-primary  mt-5 rounded-2xl">
            <Card className="bg-surface-default rounded-2xl">
              <CollapsibleTrigger className="w-full">
                <CardContent className="flex flex-row items-center justify-between p-4">
                  <div style={{
                    fontFamily: "Lato",
                    fontWeight: 600,
                    fontStyle: "SemiBold",
                    fontSize: "16px",
                    lineHeight: "124%",
                    letterSpacing: "0%",
                  }}
                    className="text-text-accent font-bold size-16 w-56 text-start ">
                    <h2 >                         {t("                    Capacity      ")}:</h2></div>
                  <ChevronDownIcon className="text-text-primary font-semiboldy w-8 h-8" />
                </CardContent>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <CardContent className="p-4 pt-0">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex items-center justify-between">
                      <label className="font-title-16px-semibold text-text-primary  font-[number:var(--title-16px-semibold-font-weight)]  text-[length:var(--title-16px-semibold-font-size)]">
                        {t("                      Staff Capacity      ")}
                      </label>
                      <Input
                        defaultValue="2150"
                        className="w-[220px] h-12 bg-background-secondary border-border-light text-text-primary"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="font-title-16px-semibold  text-text-primary font-semibold  text-[length:var(--title-16px-semibold-font-size)]">
                        {t("                            Doctors Capacity      ")}
                      </label>
                      <Input
                        defaultValue="1780"
                        className="w-[220px] h-12 bg-background-secondary border-border-light  text-text-primary"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="font-title-16px-semibold  text-text-primary font-semibold  text-[length:var(--title-16px-semibold-font-size)]">
                        {t("             Patients Capacity      ")}
                      </label>
                      <Input
                        defaultValue="250"
                        className="w-[220px] h-12 bg-background-secondary   border-border-light text-text-primary "
                      />
                    </div>
                  </div>

                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>

          <Collapsible defaultOpen className="w-full bg-background-primary  mt-5 rounded-2xl">
            <Card className="bg-surface-default rounded-2xl">
              <CollapsibleTrigger className="w-full">
                <CardContent className="flex flex-row items-center justify-between p-4">
                  <div style={{
                    fontFamily: "Lato",
                    fontWeight: 600,
                    fontStyle: "SemiBold",
                    fontSize: "16px",
                    lineHeight: "124%",
                    letterSpacing: "0%",
                  }}
                    className="text-text-accent font-bold size-16 w-56 text-start ">
                    <h2 >                         {t("Department")}:</h2></div>
                  <ChevronDownIcon className="text-text-primary font-semiboldy w-8 h-8" />
                </CardContent>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <CardContent className="p-3 pt-0">
                  <div className="grid grid-cols-3 gap-40 items-center">
                    <div className="grid  items-center justify-between">
                      <label className="font-title-16px-semibold text-text-primary text-start font-[number:var(--title-16px-semibold-font-weight)]  text-[length:var(--title-16px-semibold-font-size)] p-4">
                        {t('Department Name')}
                      </label>
                      <Select>
                        <SelectTrigger className="w-[360px]  !bg-background-secondary  h-12 bg-base-white ">
                          <SelectValue defaultValue="Dr. Layla Al Saeed" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dr-layla">
                            Dr. Layla Al Saeed
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="mb-3">
                      <div className="p-3">
                        Description
                      </div>
                      <div className="w-[656px]">
                        Al Noor Clinic is a multi-specialty clinic offering high-quality care with modern facilities
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
                <CardContent className="p-6 flex items-center justify-between">
                  <div style={{
                    fontFamily: "Lato",
                    fontWeight: 600,
                    fontStyle: "SemiBold",
                    fontSize: "16px",
                    lineHeight: "124%",
                    letterSpacing: "0%",
                  }}
                    className="text-text-accent font-bold size-16 w-56 text-start">
                    <h2>              {t("            Contact Information     ")}:</h2></div>
                  <ChevronDownIcon className="text-text-primary font-semibold w-8 h-8" />
                </CardContent>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <CardContent className="flex flex-col gap-6">
                  <div className="flex  gap-10 ">




                    <div className="grid-flow-row  "> {/* gap 5px بين الليبل والحقل */}


                      <div className="flex items-center gap-[5px]">
                        {/* Label */}
                        <div className="flex items-center gap-[5px]" >
                          <div className="flex w-[162px] items-center gap-2">
                            <div className=" text-text-primary"><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="" clip-rule="evenodd" d="M5.58366 1.98914C5.55738 1.98748 5.51211 1.98881 5.44156 2.00073C4.61526 2.14038 3.86019 2.55987 3.30452 3.19114C2.85239 3.70477 2.55607 4.33157 2.44319 4.99844C2.37711 5.38883 2.38394 5.81377 2.41176 6.29064C2.57841 9.14767 3.78709 11.8542 5.8219 13.889C7.93679 16.0039 10.7773 17.2264 13.7583 17.314C14.1076 17.3242 14.4228 17.3168 14.7125 17.2677C15.3794 17.1548 16.0061 16.8585 16.5198 16.4064C17.1861 15.8199 17.6164 15.0113 17.7308 14.1312L17.7297 14.1307L17.7297 14.1306L13.4481 12.2918L13.448 12.2918L13.448 12.2918L11.1637 13.8177C11.1631 13.8181 11.1624 13.8186 11.1618 13.819C10.9515 13.9605 10.7082 14.0449 10.4555 14.0641C10.202 14.0834 9.94788 14.0363 9.71814 13.9275L9.71407 13.9256C8.00776 13.1047 6.62971 11.7302 5.80447 10.026L5.803 10.023L5.80301 10.023C5.69491 9.79709 5.64657 9.54727 5.66258 9.29739C5.6786 9.04751 5.75845 8.80591 5.8945 8.59569L5.89737 8.59125L5.89739 8.59126L7.4204 6.27483L7.41901 6.27164L7.41902 6.27163L5.58366 1.98914ZM17.7317 14.1242L17.7317 14.1245L17.7317 14.1242ZM5.19763 0.557347C5.52156 0.502601 6.06468 0.471191 6.52344 0.858159C6.69851 1.00583 6.8372 1.19359 6.92679 1.40698L8.76311 5.69173C8.76337 5.69234 8.76364 5.69296 8.7639 5.69357C8.85897 5.91328 8.89871 6.15297 8.87962 6.39163C8.86047 6.63095 8.78275 6.86189 8.65332 7.0641L8.6485 7.07163L8.64845 7.0716L7.12346 9.39105C7.80407 10.7948 8.93925 11.9272 10.3446 12.6045L10.3476 12.6025L10.3476 12.6025L12.6331 11.0758C12.8359 10.9388 13.07 10.8552 13.3137 10.8328C13.5574 10.8103 13.8029 10.8498 14.0273 10.9474C14.0282 10.9478 14.0291 10.9482 14.03 10.9486L18.3043 12.7843C18.5968 12.9072 18.8412 13.1224 19.0001 13.3971C19.1598 13.6732 19.2243 13.9942 19.1837 14.3105C19.0254 15.5463 18.4222 16.682 17.487 17.5052C16.7679 18.1382 15.8904 18.553 14.9568 18.711C14.5275 18.7837 14.1013 18.7886 13.7153 18.7772C10.3616 18.6786 7.16606 17.3034 4.7868 14.9241C2.49762 12.6349 1.13787 9.59011 0.950386 6.37588C0.921536 5.88129 0.904547 5.31724 0.999862 4.75413C1.15788 3.82057 1.57271 2.94304 2.20572 2.22392C2.98367 1.34013 4.04075 0.752863 5.19763 0.557347Z" fill="currentColor" />
                            </svg></div>

                            <div className="text-text-primary font-semibold">
                              {t("            Phone Number     ")}
                            </div>
                          </div>

                          {/* Phone Input مع العلم */}
                          <div className="relative w-[350px] h-12 border text-text-primary border-light rounded-sm overflow-visible font-sans bg-background-secondary  border-border-light " dir="ltr" >
                            <PhoneInput
                              country={"sa"}
                              value={contactInfo.phoneNumbers}
                              onChange={(phone) => console.log(phone)}
                              inputProps={{
                                placeholder: '05XXXXXXXX'
                              }}
                              containerClass="!w-full"
                              inputClass="!w-full !h-12 !border-0 !outline-none !text-text-primary !bg-background-secondary !px-3"
                              buttonClass="!h-12 !border-0 !bg-background-secondary !pr-2 flex items-center relative"
                              dropdownClass="!absolute !top-full !left-0 !max-h-60 !overflow-y-auto !bg-background-secondary border text-text-primary z-50"
                            />
                            {/* الخط العمودي */}
                            <div className="absolute left-[56px] top-3 max-w-px h-6 bg-light pointer-events-none"></div>
                          </div>
                        </div>
                      </div>
                      {/* Plus Icon تحت الحقل على اليمين */}
                      <div className="flex justify-end">
                        <div className="flex justify-end p-2 text-secondary-dark">
                          <PlusIcon className="w-8 h-8 cursor-pointer" />
                        </div>
                      </div>

                    </div>



                    <div className="flex items-center gap-1 mb-16">
                      <div className="flex items-center gap-2 w-[162px]">
                        <div className="w-6 h-6">
                          <div className="w-[21px] h-[18px] mt-[3px] ml-px bg-[url(/icon.svg)] bg-[100%_100%]" />
                        </div>

                        <div className=" text-text-primary">
                          <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.07923 0.787497C10.0441 0.737503 11.9541 0.737499 13.9191 0.787497C17.157 0.869496 18.9413 0.915255 20.2843 2.25625C21.6291 3.61122 21.6655 5.3485 21.7325 8.50136C21.7535 9.50833 21.7535 10.4866 21.7325 11.4936C21.6656 14.6461 21.6288 16.3819 20.2872 17.7348C18.9422 19.0788 17.158 19.1244 13.92 19.2064C12.9381 19.2314 11.9691 19.2445 11.0001 19.2445C10.0312 19.2445 9.06212 19.2314 8.0802 19.2064C4.84234 19.1244 3.05795 19.0785 1.71497 17.7377C0.370009 16.3827 0.332745 14.6454 0.265749 11.4926C0.24475 10.4856 0.244751 9.50735 0.265749 8.50039C0.332749 5.34739 0.370038 3.6112 1.71204 2.2582C3.05703 0.914271 4.84128 0.869495 8.07923 0.787497ZM13.881 2.28554C11.9421 2.23555 10.0572 2.23555 8.11731 2.28554C5.07934 2.36254 3.69256 2.39684 2.77356 3.31582C1.85556 4.24182 1.82677 5.58664 1.76477 8.53164C1.74378 9.5165 1.74378 10.4745 1.76477 11.4603C1.82677 14.4053 1.85648 15.7502 2.77747 16.6771C3.69447 17.593 5.08048 17.6294 8.11829 17.7064C10.0572 17.7564 11.9421 17.7564 13.882 17.7064C16.9199 17.6294 18.3057 17.5941 19.2247 16.6752C20.1427 15.7492 20.1715 14.4053 20.2335 11.4603C20.2545 10.4755 20.2545 9.5175 20.2335 8.53164C20.1715 5.58664 20.1428 4.24086 19.2218 3.31386C18.3048 2.39817 16.9186 2.36253 13.881 2.28554ZM5.35462 6.11074C5.56562 5.75474 6.02596 5.63509 6.38196 5.84609L9.32337 7.58633C10.7954 8.45333 11.2039 8.45333 12.6779 7.58633L15.6183 5.84707C15.9753 5.63607 16.4356 5.75472 16.6456 6.11172C16.8564 6.46859 16.7387 6.92802 16.382 7.13808L13.4396 8.87832C12.4588 9.45619 11.73 9.74442 11.0001 9.74453C10.2711 9.74453 9.54165 9.45532 8.56165 8.87832L5.61829 7.13711C5.26276 6.92603 5.14393 6.46654 5.35462 6.11074Z" fill="CurrentColor" />
                          </svg>

                        </div>

                        <span className="text-text-primary font-semibold">
                          {t("         Email      ")}:
                        </span>

                      </div>
                      <Input
                        defaultValue="Enter Email"
                        className="w-[350px] h-12 bg-background-secondary  border-border-light"
                      />
                    </div>
                  </div>


                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>








          <Collapsible defaultOpen className="w-full bg-background-primary  mt-5 rounded-2xl">
            <Card className="bg-surface-default rounded-2xl">
              <CollapsibleTrigger className="w-full rounded-2xl">
                <CardContent className="flex flex-row items-center rounded-2xl p-6 justify-between">
                  <div style={{
                    fontFamily: "Lato",
                    fontWeight: 600,
                    fontStyle: "SemiBold",
                    fontSize: "16px",
                    lineHeight: "124%",
                    letterSpacing: "0%",
                  }}
                    className="text-text-accent font-bold size-16 w-56 text-start">
                    <h2 >                        {t("            working Days        ")}  :</h2></div>
                  <ChevronDownIcon className=" w-8 h-8 text-text-primary font-semibold" />
                </CardContent>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="flex flex-col gap-4">
                  {workingDaysData.map((day) => (
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
                        className={`flex items-center justify-between w-[360px] h-12 px-4 py-2 rounded border border-[#e4e2dd] shadow-[0px_1px_2px_#0a0d120d] ${day.isActive ? "bg-background-secondar" : "bg-background-secondary"}`}
                      >
                        <span className="[font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-sm tracking-[0] leading-[21px]">
                          {day.startTime}
                        </span>

                        <div className="flex items-center">


                          {local === "ar" ? (
                            <ArrowBackIcon className="w-6 h-6" />
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









          <Collapsible defaultOpen className="w-full bg-background-primary  mt-5 rounded-2xl">
            <Card className="bg-surface-default rounded-2xl">
              <CollapsibleTrigger className="w-full">
                <CardContent className="p-6 flex items-center justify-between">
                  <div style={{
                    fontFamily: "Lato",
                    fontWeight: 600,
                    fontStyle: "SemiBold",
                    fontSize: "16px",
                    lineHeight: "124%",
                    letterSpacing: "0%",
                  }}
                    className="text-text-accent">
                    <h2>  <div className="flex items-center gap-4  ">
                      <h2 className="font-title-16px-bold font-[number:var(--title-16px-bold-font-weight)]  text-text-accent text-[length:var(--title-16px-bold-font-size)] tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] [font-style:var(--title-16px-bold-font-style)]">
                        {t("            Doctors & Staff       ")}
                      </h2>
                      <div className="flex gap-2">
                        <Badge className="bg-secondary-light text-on-surface-primary rounded-[20px] px-2.5 py-1.5">
                          {t("          All       ")}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-bg text-on-surface-primary rounded-[20px] px-2.5 py-1.5"
                        >
                          {t("              Doctors        ")}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-bg text-on-surface-primary rounded-[20px] px-2.5 py-1.5"
                        >
                          {t("                  Staff         ")}
                        </Badge>
                      </div>
                    </div></h2></div>
                  <ChevronDownIcon className="text-text-primary font-semibold w-8 h-8" />
                </CardContent>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <CardContent className="p-0">
                  <div className="bg-surface-default rounded-2xl overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className=" border-b-0">
                          <TableHead className="font-title-16px-semibold   font-[number:var(--title-16px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-16px-semibold-font-size)]">
                            <div className="text-center items-center">

                              {t("  Number          ")}
                            </div>
                          </TableHead>
                          <TableHead className="text-center font-title-16px-semibold font-[number:var(--title-16px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-16px-semibold-font-size)]">
                            {t("  User-Id           ")}
                          </TableHead>
                          <TableHead className="text-center font-title-16px-semibold font-[number:var(--title-16px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-16px-semibold-font-size)]">
                            {t("   Name            ")}
                          </TableHead>
                          <TableHead className="text-center font-title-16px-semibold font-[number:var(--title-16px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-16px-semibold-font-size)]">
                            {t("   User Type           ")}
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {staffData.map((staff, index) => (
                          <TableRow
                            key={index}
                            className="border-b border-[#e4e2dd] bg-surface-default"
                          >
                            <TableCell className="font-title-14px-semibold text-start font-[number:var(--title-14px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-14px-semibold-font-size)]">
                              <div className="text-center items-center">
                                {staff.number}
                              </div>
                            </TableCell>
                            <TableCell
                              className="text-center font-title-14px-semibold font-[number:var(--title-14px-semibold-font-weight)] text
-on-surface-primary text-[length:var(--title-14px-semibold-font-size)]"
                            >
                              {staff.userId}
                            </TableCell>
                            <TableCell className="text-center">
                              <div className="flex items-center gap-2 justify-center">
                                
                                <span className="font-title-14px-semibold font-[number:var(--title-14px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-14px-semibold-font-size)]">
                                                  <div className="flex items-center gap-2 justify-center">
     <Avatar
  src={staff.avatar}
  alt={staff.name}
  sx={{
    width: 32,
    height: 32,
    bgcolor: !staff.avatar ? "var(--theme-text-accent)" : "transparent", // لون الدائرة من متغير الثيم
  }}
>
  {/* إذا ما في صورة، تظل الدائرة ملونة بدون أي نص */}
</Avatar>
                        <span>{staff.name}</span>
                      </div>
                                </span>
                              </div>
                            </TableCell>
                            <TableCell className="text-center font-title-14px-semibold font-[number:var(--title-14px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-14px-semibold-font-size)]">
                              {staff.userType}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-2.5">
                      <span className="font-title-11px-regular font-[number:var(--title-11px-regular-font-weight)] text-on-surface-secondary text-[length:var(--title-11px-regular-font-size)] tracking-[var(--title-11px-regular-letter-spacing)] leading-[var(--title-11px-regular-line-height)] [font-style:var(--title-11px-regular-font-style)]">
                        {t("   Showing            ")}
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
                        {t("   out of 14           ")}
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
                              <div className=" text-text-secondary">  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.726 12L12.666 11.06L9.61268 8L12.666 4.94L11.726 4L7.72602 8L11.726 12Z" fill="#333333" />
                                <path d="M7.33344 12L8.27344 11.06L5.2201 8L8.27344 4.94L7.33344 4L3.33344 8L7.33344 12Z" fill="#currentColor" />
                              </svg></div>
                            ) : (
                              <div className=" text-text-secondary">    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.27398 4L3.33398 4.94L6.38732 8L3.33398 11.06L4.27398 12L8.27398 8L4.27398 4Z" fill="black" />
                                <path d="M8.66656 4L7.72656 4.94L10.7799 8L7.72656 11.06L8.66656 12L12.6666 8L8.66656 4Z" fill="CurrentColor" />
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
                              <div className=" text-text-secondary">         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" fill="CurrentColor" />
                              </svg></div>
                            ) : (
                              <div className=" text-text-secondary">              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="CurrentColor" />
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
                                <div className=" text-text-secondary">                     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="CurrentColor" />
                                </svg></div>
                              ) : (
                                <div className=" text-text-secondary">       <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" fill="CurrentColor" />
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

                              <div className=" text-text-secondary">                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.27398 4L3.33398 4.94L6.38732 8L3.33398 11.06L4.27398 12L8.27398 8L4.27398 4Z" fill="CurrentColor" />
                                <path d="M8.66656 4L7.72656 4.94L10.7799 8L7.72656 11.06L8.66656 12L12.6666 8L8.66656 4Z" fill="CurrentColor" />
                              </svg></div>
                            ) : (
                              <div className=" text-text-secondary">             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.726 12L12.666 11.06L9.61268 8L12.666 4.94L11.726 4L7.72602 8L11.726 12Z" fill="CurrentColor" />
                                <path d="M7.33344 12L8.27344 11.06L5.2201 8L8.27344 4.94L7.33344 4L3.33344 8L7.33344 12Z" fill="CurrentColor" />
                              </svg></div>
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
                    <h2 className="mt-3">                      {t("  Maps Location           ")}:</h2></div>
                  <ChevronDownIcon className="text-text-primary font-semiboldy w-8 h-8" />
                </CardContent>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <CardContent className="flex flex-col gap-4">
                  <div className="w-full h-[332px] bg-[url(/background.png)] bg-cover bg-center rounded" />
                  <p className="font-title-14px-regular font-[number:var(--title-14px-regular-font-weight)] text-on-surface-primary text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] [font-style:var(--title-14px-regular-font-style)]">
                    {t("  245, King Fahd Road, Al Olaya, Saudi Arabia, KSA            ")}
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
