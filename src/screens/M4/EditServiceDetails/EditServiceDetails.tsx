import {
  Building2Icon,
  CalendarIcon,
  ChevronDownIcon,
  LogOutIcon,
  SettingsIcon,
  UserCheckIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";

import { Badge } from "../../../components/ui/badge";
import { BellIcon, FileTextIcon } from "lucide-react";
import { BellDotIcon } from "lucide-react";
import CardContent from "@mui/material/CardContent";
import React from "react";
import { useLanguage } from "../../../lib/LanguageContext";
import { Button } from "../../../components/ui/button";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import TranslateIcon from "@mui/icons-material/Translate";
import { useState } from "react";
import { Card } from "../../../components/ui/card";
import ReusableCollapsible from "../../../components/ui/Collapsibles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import Checkbox from "@mui/material/Checkbox";
import Toggle from "../../../components/ui/SwitchToggel";
const navigationItems = [
  {
    icon: UsersIcon,
    label: "UsersIcon Management",
    hasDropdown: false,
    isActive: false,
  },
  {
    icon: Building2Icon,
    label: "Medical Facilities",
    hasDropdown: true,
    isActive: false,
  },
  {
    icon: UserCheckIcon,
    label: "Doctors & Staff",
    hasDropdown: true,
    isActive: false,
  },
  {
    icon: SettingsIcon,
    label: "Services Management",
    hasDropdown: false,
    isActive: true,
  },
  {
    icon: UserIcon,
    label: "Paitients Management",
    hasDropdown: false,
    isActive: false,
  },
  {
    icon: CalendarIcon,
    label: "Appointments Management",
    hasDropdown: false,
    isActive: false,
  },
];


const sessions = [
  {
    no: 1,
    name: "Session Name",
    duration: "00:50",
    nextSession: "25 Days",
    nextSessionNumber: 15,
    description: "Patient history & symptom assessment",
    activeAppt: 45,
    apptRequired: true,
  },
  {
    no: 2,
    name: "Session Name",
    duration: "00:50",
    nextSession: "25 Days",
    nextSessionNumber: 45,
    description: "Patient history & symptom assessment",
    activeAppt: 45,
    apptRequired: true,
  },
  {
    no: 3,
    name: "Session Name",
    duration: "00:50",
    nextSession: "25 Days",
    nextSessionNumber: 15,
    description: "Patient history & symptom assessment",
    activeAppt: 45,
    apptRequired: false,
  },
];


const doctorsAndStaff = [
  {
    number: 1,
    userId: "emp-t9a3e",
    doctorsList: ["Dr. Ahmed", "Dr. Sarah", "Dr. John"],
    userType: "Endocrinology",
    ActiveAppt: 56,
    status: "Active"

  },
  {
    number: 2,
    userId: "emp-t9a3e",
    doctorsList: ["Dr. Ahmed", "Dr. Sarah", "Dr. John"],
    userType: "Endocrinology",
    ActiveAppt: 56,
    status: "Active",
    avatar: null,
  },
  {
    number: 3,
    userId: "emp-t9a3e",
    doctorsList: ["Dr. Ahmed", "Dr. Sarah", "Dr. John"],
    userType: "Endocrinology",
    ActiveAppt: 56,
    status: " Active",
    avatar: null,
  },
];

type Session = {
  no: number;
  name: string;
  duration: string;
  nextSession: string;
  description: string;
  activeAppt: string;
  apptRequired: boolean;
};
interface NoDataSectionProps {
  dark: boolean;
  local: string;

  handelDarkClick: () => void;
  handleLanguageClick: () => void;
}


export const EditServiceDetails = (): JSX.Element => {
  const { local, handleLanguageClick } = useLanguage();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);




  const [isOpen, setIsOpen] = useState({
    clinicInfo: true,
    Utilization: true,
    Sessions: true,
    doctorsStaff: true

  });
  const handleToggle = (key: keyof typeof isOpen, open: boolean) => {
    setIsOpen(prev => ({
      ...prev,
      [key]: open
    }))
  };

  const [formDat, setFormDat] = useState<{
    serviceName: string;
    serviceCategory: string;
    assignComplex: string;
    assignClinics: string;
    serviceDescription: string;
    requiredEquipment: string;
    sessions: Session[];
  }>({
    serviceName: "",
    serviceCategory: "",
    assignComplex: "",
    assignClinics: "",
    serviceDescription: "",
    requiredEquipment: "",
    sessions: [
      {
        no: 1,
        name: "Session A",
        duration: "45 mins",
        nextSession: "25 Days",
        description: "Initial Consultation",
        activeAppt: "55",
        apptRequired: true,
      }, {
        no: 1,
        name: "Session A",
        duration: "45 mins",
        nextSession: "25 Days",
        description: "Initial Consultation",
        activeAppt: "5",
        apptRequired: true,
      }
    ]
  },

  );
  const handleDoctorNameChange = (index: number, newName: string) => {
    setDoctorsAndStaff((prev) => {
      const newList = [...prev];
      newList[index].name = newName;
      return newList;
    });
  };



  const handleSessionChange = <K extends keyof Session>(
    index: number,
    key: K,
    value: Session[K]
  ) => {
    const updatedSessions = [...formDat.sessions];
    updatedSessions[index] = {
      ...updatedSessions[index],
      [key]: value,
    };

    setFormDat((prev) => ({
      ...prev,
      sessions: updatedSessions,
    }));
  };

  const [formData, setFormData] = useState({
    serviceName: "Comprehensive Diabetes Checkup",
    serviceCategory: "Medical Examination",
    assignComplex: "Arab Interface tech Main Complex",
    assignClinics: "Internal Medicine, Family Medicine",
    serviceDescription: "Full diagnostic evaluation for diabetes including lab tests, physical exam, and consultation.",
    requiredEquipment: "Full diagnostic evaluation for diabetes including lab tests, physical exam, and consultation.",
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };


  return (
    <div className="flex flex-col w-full overflow-hidden min-h-screen items-start gap-4 py-4 pl-0 pr-5">
      <header className="flex h-[50px] justify-between pl-1 pr-0 py-0 w-full items-center">
        <div className="flex flex-col w-[340px] items-start gap-1.5 px-0 py-0.5">
          <h1 className="self-stretch mt-[-1.00px] font-lato font-semibold text-xl text-text-primary leading-[116%] tracking-[0]">
            {t("Services Management")}
          </h1>
          <p className="flex gap-[8px] font-lato font-semibold text-sm text-text-primary leading-[125%] tracking-[0]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21 12C21 12.4142 20.6642 12.75 20.25 12.75L3.75 12.75C3.33579 12.75 3 12.4142 3 12C3 11.5858 3.33579 11.25 3.75 11.25L20.25 11.25C20.6642 11.25 21 11.5858 21 12Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.0303 4.71967C11.3232 5.01256 11.3232 5.48744 11.0303 5.78033L4.81066 12L11.0303 18.2197C11.3232 18.5126 11.3232 18.9874 11.0303 19.2803C10.7374 19.5732 10.2626 19.5732 9.96967 19.2803L3.21967 12.5303C2.92677 12.2374 2.92677 11.7626 3.21967 11.4697L9.96967 4.71967C10.2626 4.42678 10.7374 4.42678 11.0303 4.71967Z"
                fill="currentColor"
              />
            </svg>
            {t("Edit Service details")}
          </p>
        </div>

        <div className="inline-flex gap-3 flex-[0_0_auto] rounded-[28px] items-center">
          <button className="inline-flex items-start gap-2 p-2.5 flex-[0_0_auto] bg-secondary-light rounded-[20px] relative">
            <BellIcon className="w-5 h-5" />
            <div className="flex flex-col w-5 h-5 items-center justify-center gap-2.5 p-1 absolute top-1 left-4">
              <div className="w-2 h-2 bg-[#fa812d] rounded-[14px]" />
            </div>
          </button>

          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className={`p-2.5 bg-secondary-light ${local === "ar" ? "bg-[green]" : "bg-secondary-light"
                } rounded-[20px] h-auto transition-all duration-[1000ms]`}
              onClick={handleLanguageClick}
            >
              <TranslateIcon className="w-5 h-5" />
            </Button>
          </div>

          <div className="w-10 h-[17.5px] relative">
            {/* <DarkModeToggle /> */}
          </div>

          <div className="items-center gap-3 inline-flex flex-[0_0_auto]">
            <div className="inline-flex items-center w-[40px] h-[40px] gap-2.5 flex-[0_0_auto] bg-app-primary rounded-3xl" />
            <div className="flex-col items-start gap-1 inline-flex flex-[0_0_auto]">
              <div
                className={`w-fit mt-[-1.00px] 
                    "text-[#2a2b2a]"
                   font-title-16px-bold font-[number:var(--title-16px-bold-font-weight)] text-[length:var(--title-16px-bold-font-size)] tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] whitespace-nowrap [font-style:var(--title-16px-bold-font-style)]`}
              >
                Anahera Jones
              </div>
              <div className="w-fit font-title-11px-regular font-[number:var(--title-11px-regular-font-weight)] text-on-surface-tertiary text-[length:var(--title-11px-regular-font-size)] tracking-[var(--title-11px-regular-letter-spacing)] leading-[var(--title-11px-regular-line-height)] whitespace-nowrap [font-style:var(--title-11px-regular-font-style)]">
                Admin
              </div>
            </div>
          </div>
        </div>
      </header>
      <Card className="flex flex-col h-full items-start gap-5 p-[5px] pr-0 relative w-full rounded-2xl overflow-hidden bg-background-tertiary">
        <CardContent className="w-full overflow-y-auto scroll-x-hidden pr-[20px] ">
          <div className=" items-center flex justify-end gap-4 relative flex-[0_0_auto]  " dir={local === 'ar' ? 'rtl' : 'ltr'}>
            <button className=" w-[200px] h-[40px] rounded-[20px] border border-border-light bg-surface-primary  font-lato font-medium text-sm leading-[100%] tracking-[0] text-text-primary">
              {t("Cancel")}
            </button>
            <button className=" w-[200px] h-[40px] rounded-[20px] bg-secondary-dark font-lato font-medium text-sm leading-[100%] tracking-[0] text-surface-primary">
              {t("Save")}
            </button>
          </div>





     <ReusableCollapsible
  dir={local === "ar" ? "rtl" : "ltr"}
  title={

       <div>
                <div className="flex w-[847px] items-center justify-between top-6 left-6">
                  <div className=" w-[198px] p-6 mt-[-1.00px] ">
                    {t("Identification")}
                  </div>
                  <div className=" w-36 mt-[-1.00px] ">
                      {t("Assign")}
                  </div>
                </div>
              </div>
  }
  initiallyOpen={true}
  onOpenChange={(open) => handleToggle("clinicInfo", open)}
  content={
              <div className="self-stretch w-full h-auto bg-surface-default rounded-2xl p-6">
                <div className="flex flex-col lg:flex-row gap-0 lg:gap-[113px]">
      {/* Left Column */}
      <div className="flex flex-col gap-4 w-full">
        {/* Services Name */}
        <div className="flex gap-6 items-start min-h-[54px]">
          <div className="w-[180px] text-text-primary font-semibold text-[16px]">
            {t("Services Name")}
          </div>
          <input
            type="text"
            className="w-[360px] h-[48px] border bg-background-secondary border-bg-border-light rounded-[4px] px-3 text-[14px]"
            value={formData.serviceName}
            onChange={(e) => handleChange("serviceName", e.target.value)}
          />
        </div>

        {/* Service Category */}
        <div className="flex gap-6 items-start min-h-[54px]">
          <div className="w-[180px] text-text-primary font-semibold text-[16px]">
            {t("Service Category")}
          </div>
          <select
            className="w-[360px] h-[48px] border bg-background-secondary border-bg-border-light rounded-[4px] px-3 text-[14px]"
            value={formData.serviceCategory}
            onChange={(e) => handleChange("serviceCategory", e.target.value)}
          >
            <option value="Medical Examination">Medical Examination</option>
            <option value="Consultation">Consultation</option>
            <option value="Screening">Screening</option>
          </select>
        </div>

        {/* Service Description */}
        <div className="flex gap-6 items-start">
          <div className="w-[180px] text-text-primary font-semibold text-[16px]">
            {t("Service Description")}
          </div>
          <textarea
            className="w-[360px] h-[170px] border bg-background-secondary border-bg-border-light rounded-[4px] px-3 py-2 text-[14px] resize-y"
            value={formData.serviceDescription}
            onChange={(e) => handleChange("serviceDescription", e.target.value)}
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-4 w-full">
        {/* Assign Complex */}
        <div className="flex gap-6 items-start min-h-[54px]">
          <div className="w-[180px] text-text-primary font-semibold text-[16px]">
            {t("Assign Complex")}
          </div>
          <select
            className="w-[360px] h-[48px] border bg-background-secondary border-bg-border-light rounded-[4px] px-3 text-[14px]"
            value={formData.assignComplex}
            onChange={(e) => handleChange("assignComplex", e.target.value)}
          >
            <option value="Arab Interface tech Main Complex">Arab Interface tech Main Complex</option>
            <option value="City Health Complex">City Health Complex</option>
          </select>
        </div>

        {/* Assign Clinics */}
        <div className="flex gap-6 items-start min-h-[54px]">
          <div className="w-[180px] text-text-primary font-semibold text-[16px]">
            {t("Assign Clinics")}
          </div>
          <select
            className="w-[360px] h-[48px] border bg-background-secondary border-bg-border-light rounded-[4px] px-3 text-[14px]"
            value={formData.assignClinics}
            onChange={(e) => handleChange("assignClinics", e.target.value)}
          >
            <option value="Internal Medicine, Family Medicine">Internal Medicine, Family Medicine</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Cardiology">Cardiology</option>
          </select>
        </div>

        <div className="w-[150px] text-text-accent font-semibold text-[16px]">
          {t("Resources")}
        </div>

        {/* Required Equipment */}
        <div className="flex gap-6 items-start">
          <div className="w-[180px] text-text-primary font-semibold text-[16px]">
            {t("Required Equipment")}
          </div>
          <textarea
            className="w-[360px] h-[170px] border bg-background-secondary border-bg-border-light rounded-[4px] px-3 py-2 text-[14px] resize-y"
            value={formData.requiredEquipment}
            onChange={(e) => handleChange("requiredEquipment", e.target.value)}
          />
        </div>
      </div>
      </div>
    </div>
  }
/>









          <ReusableCollapsible
            dir={local === "ar" ? "rtl" : "ltr"}
            title={
              <div>
                <div className="flex w-[780px] items-center justify-between top-6 left-6">
                  <div className=" w-[198px] p-6 mt-[-1.00px] ">
                    {t("Utilization Metrics")}
                  </div>
                  <div className=" w-36 mt-[-1.00px] ">
                    {t("Operational Details")}
                  </div>
                </div>
              </div>
            }
            initiallyOpen={isOpen.Utilization}
            onOpenChange={(open) => handleToggle("Utilization", open)}
            content={
              <div className="self-stretch w-full h-auto bg-surface-default rounded-2xl p-6">
                <div className="flex flex-col lg:flex-row gap-0 lg:gap-[113px]">
                  {/* Left Column - Utilization Metrics */}
                  <div className="flex flex-col gap-4 w-full lg:w-[500px]">
                    {/* Total Patients Served */}
                    <div className="flex gap-4 items-start">
                      <div className="w-[180px] text-text-primary font-semibold text-[16px]">{t("Total Patients Served")}</div>
                      <div className="text-text-primary font-semibold text-[14px]">327 Patients</div>
                    </div>

                    {/* Completed Sessions */}
                    <div className="flex gap-4 items-start">
                      <div className="w-[180px] text-text-primary font-semibold text-[16px]">{t("Completed Sessions")}</div>
                      <div className="text-text-primary font-semibold text-[14px]">945 Sessions</div>
                    </div>

                    {/* Average Duration */}
                    <div className="flex gap-4 items-start">
                      <div className="w-[180px] text-text-primary font-semibold text-[16px]">{t("Average Duration")}</div>
                      <div className="text-text-primary font-semibold text-[14px]">25 mins</div>
                    </div>

                    {/* No-Show Rate */}
                    <div className="flex gap-4 items-start">
                      <div className="w-[180px] text-text-primary font-semibold text-[16px]">{t("No-Show Rate (%)")}</div>
                      <div className="text-text-primary font-semibold text-[14px]">8.6%</div>
                    </div>

                    {/* Rebooking Rate */}
                    <div className="flex gap-4 items-start">
                      <div className="w-[180px] text-text-primary font-semibold text-[16px]">{t("Rebooking Rate (%)")}</div>
                      <div className="text-text-primary font-semibold text-[14px]">72.4%</div>
                    </div>
                  </div>

                  {/* Right Column - Operational Details */}
                  <div className="flex flex-col gap-4 w-full lg:w-[500px]">
                    {/* Last Performed Date */}
                    <div className="flex gap-4 items-start">
                      <div className="w-[180px] text-text-primary font-semibold text-[16px]">{t("Last Performed Date")}</div>
                      <div className="text-text-primary font-semibold text-[14px]">June 28-2025</div>
                    </div>

                    {/* Most Frequent Doctor */}
                    <div className="flex gap-4 items-start">
                      <div className="w-[180px] text-text-primary font-semibold text-[16px]">{t("Most Frequent Doctor")}</div>
                      <div className="text-text-primary font-semibold text-[14px]">Dr. Sarah Fadel</div>
                    </div>

                    {/* Most Frequent Clinic */}
                    <div className="flex gap-4 items-start">
                      <div className="w-[180px] text-text-primary font-semibold text-[16px]">{t("Most Frequent Clinic")}</div>
                      <div className="text-text-primary font-semibold text-[14px]">Internal Medicine Clinic</div>
                    </div>

                    {/* Timestamps */}
                    <div className="flex gap-4 items-start">
                      <div className="w-[180px] text-text-accent font-semibold text-[16px]">{t("Timestamps")}</div>
                    </div>

                    {/* Creation Date */}
                    <div className="flex gap-4 items-start">
                      <div className="w-[180px] text-text-primary font-semibold text-[16px]">{t("Creation Date")}</div>
                      <div className="text-text-primary font-semibold text-[14px]">June 28-2025</div>
                    </div>

                    {/* Last Update */}
                    <div className="flex gap-4 items-start">
                      <div className="w-[180px] text-text-primary font-semibold text-[16px]">{t("Last Update")}</div>
                      <div className="text-text-primary font-semibold text-[14px]">June 28-2025&nbsp;&nbsp;10:43 AM</div>
                    </div>
                  </div>
                </div>
              </div>
            }
          />





          <ReusableCollapsible 
            dir={local === "ar" ? "rtl" : "ltr"}
            title={t("Sessions")}
            initiallyOpen={isOpen.Sessions}
            onOpenChange={(open) => handleToggle("Sessions", open)}
            content={
              <div className="w-full  bg-surface-default  rounded-2xl p-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[80px] text-center font-semibold text-text-primary"> {t("No.")}</TableHead>
                      <TableHead className="text-center text-text-primary text-[16px] font-semibold">{t("Session Name")}</TableHead>
                      <TableHead className="text-center text-text-primary text-[16px] font-semibold">{t("Duration")}</TableHead>
                      <TableHead className="text-center text-text-primary text-[16px] font-semibold">{t("Next Session")}</TableHead>
                      <TableHead className="text-center text-text-primary text-[16px] font-semibold w-80">{t("Description")}</TableHead>
                      <TableHead className="text-center text-text-primary text-[16px] font-semibold">{t("Active Appt")}</TableHead>
                      <TableHead className="text-center text-text-primary text-[16px] font-semibold">{t("Appt Required?")}</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {formDat.sessions.map((session, index) => (
                      <TableRow key={session.no} className="border-b border-[#e4e2dd] h-[54px]">
                        {/* No. - لا يتغير */}
                        <TableCell className="text-center text-[14px] font-semibold">{session.no}</TableCell>

                        {/* Editable Inputs */}
                        <TableCell className="text-center text-[14px] font-semibold borerder-r border-[#e4e2dd]">
                          <input
                            type="text"
                            value={session.name}
                            onChange={(e) => handleSessionChange(index, "name", e.target.value)}
                            className="w-[259px] h-[34px]  text-center border bg-background-secondary border-bg-border-light rounded-[4px] px-3 text-[14px]"
                          />
                        </TableCell>

                        <TableCell className="text-center text-[14px] font-semibold">
                          <input
                            type="text"
                            value={session.duration}
                            onChange={(e) => handleSessionChange(index, "duration", e.target.value)}
                            className="w-[69px] h-[34px]  text-center border bg-background-secondary border-bg-border-light rounded-[4px] px-3 text-[14px]"
                          />
                        </TableCell>

                        <TableCell className="text-center text-[14px] font-semibold">
                          <input
                            type="text"
                            value={session.nextSession}
                            onChange={(e) => handleSessionChange(index, "nextSession", e.target.value)}
                            className="w-[83px] h-[34px]  text-center border bg-background-secondary border-bg-border-light rounded-[4px] px-3 text-[14px]"
                          />
                        </TableCell>

                        <TableCell className="text-center text-[14px] font-semibold w-80">
                          <input
                            type="text"
                            value={session.description}
                            onChange={(e) => handleSessionChange(index, "description", e.target.value)}
                            className="w-[402px] h-[34px]  text-center border bg-background-secondary border-bg-border-light rounded-[4px] px-3 text-[14px]"
                          />
                        </TableCell>

                        <TableCell className="text-center text-[14px] font-semibold">
                          {session.activeAppt}

                        </TableCell>

                        {/* Appt Required? - بدون تغيير */}
                        <TableCell className="text-center font-semibold">
                          <div className="flex items-center justify-center">
                            <div className="text-text-primary">
                              <Checkbox
                                checked={session.apptRequired}
                                onChange={(e) => handleSessionChange(index, "apptRequired", e.target.checked)}
                              />
                            </div>
                          </div>
                        </TableCell>

                        {/* Icon (minus button) - بدون تغيير */}
                        <TableCell className="text-center text-[14px] font-semibold">
                          <div className="text-text-inverse">
                            <svg width="18" height="2" viewBox="0 0 18 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M18 1C18 1.19891 17.921 1.38968 17.7803 1.53033C17.6397 1.67098 17.4489 1.75 17.25 1.75H0.75C0.551088 1.75 0.360322 1.67098 0.21967 1.53033C0.0790178 1.38968 0 1.19891 0 1C0 0.801088 0.0790178 0.610322 0.21967 0.46967C0.360322 0.329018 0.551088 0.25 0.75 0.25H17.25C17.4489 0.25 17.6397 0.329018 17.7803 0.46967C17.921 0.610322 18 0.801088 18 1Z"
                                fill="#00B48D"
                              />
                            </svg>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                {/* Add button */}
                <div className="text-text-inverse">
                  <div className="grid text-end items-end justify-end m-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 10C0 9.44771 0.373096 9 0.833333 9H19.1667C19.6269 9 20 9.44771 20 10C20 10.5523 19.6269 11 19.1667 11H0.833333C0.373096 11 0 10.5523 0 10Z"
                        fill="#00B48D"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 0C10.5523 0 11 0.373096 11 0.833333V19.1667C11 19.6269 10.5523 20 10 20C9.44771 20 9 19.6269 9 19.1667V0.833333C9 0.373096 9.44771 0 10 0Z"
                        fill="#00B48D"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            }
          />


























          <ReusableCollapsible
            dir={local === "ar" ? "rtl" : "ltr"}
            title={t("Assign Doctors List")}
            initiallyOpen={isOpen.doctorsStaff}
            onOpenChange={(open) => handleToggle("doctorsStaff", open)}
            content={
              <div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[98px] text-center text-text-primary text-[16px] font-semibold"> {t("No.")}</TableHead>
                      <TableHead className="w-56 text-center text-text-primary text-[16px] font-semibold">{t("User ID")}</TableHead>
                      <TableHead className="text-center text-text-primary text-[16px] font-semibold">{t("Doctor Name")}</TableHead>
                      <TableHead className="text-center text-text-primary text-[16px] font-semibold">{t("Specialties")}</TableHead>
                      <TableHead className="text-center text-text-primary text-[16px] font-semibold">{t("Active Appt")}</TableHead>
                      <TableHead className="text-center text-text-primary text-[16px] font-semibold">{t("Status")}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {doctorsAndStaff.map((person, index) => (
                      <TableRow key={person.number} className="border-b h-[54px] border-[#e4e2dd]">
                        <TableCell className="text-center text-[14px] font-semibold">{person.number}</TableCell>
                        <TableCell className="text-center text-[14px] font-semibold">{person.userId}</TableCell>
                        <TableCell className="text-center text-[14px] font-semibold">
                          <select
                            value={person.name}
                            onChange={(e) => handleDoctorNameChange(index, e.target.value)}
                            className="w-[131px] h-[34px]  text-center border bg-background-secondary border-bg-border-light rounded-[4px] px-3 text-[14px]"
                          >
                            {person.doctorsList?.map((doc) => (
                              <option key={doc} value={doc}>
                                {doc}
                              </option>
                            ))}
                          </select>
                        </TableCell>
                        <TableCell className="text-center text-[14px] font-semibold">{person.userType}</TableCell>
                        <TableCell className="text-center text-[14px] font-semibold">{person.ActiveAppt}</TableCell>
                        <TableCell className="text-center items-center">
                          <Badge className="bg-secondary-light text-secondary-dark text-end rounded-[20px] w-[92px]">
                            {person.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            }
          />











        </CardContent>
      </Card>
    </div>
  );
};


