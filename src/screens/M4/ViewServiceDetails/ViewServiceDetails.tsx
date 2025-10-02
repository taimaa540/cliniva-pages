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
import { Edit2Icon } from "lucide-react";

import { ThemeToggle } from "../../../components/theme/ThemeSwitcher";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { SideBar } from "../../CommonComponents/SideBarPlan2";
import Toggle from "../../../components/ui/SwitchToggel";
import { Link, Navigate } from "react-router-dom";
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
    apptRequired: true,
  }, {
    no: 3,
    name: "Session Name",
    duration: "00:50",
    nextSession: "25 Days",
    nextSessionNumber: 15,
    description: "Patient history & symptom assessment",
    activeAppt: 45,
    apptRequired: true,
  }, {
    no: 3,
    name: "Session Name",
    duration: "00:50",
    nextSession: "25 Days",
    nextSessionNumber: 15,
    description: "Patient history & symptom assessment",
    activeAppt: 45,
    apptRequired: true,
  }, {
    no: 3,
    name: "Session Name",
    duration: "00:50",
    nextSession: "25 Days",
    nextSessionNumber: 15,
    description: "Patient history & symptom assessment",
    activeAppt: 45,
    apptRequired: true,
  },
];


const doctorsAndStaff = [
  {
    number: 1,
    userId: "emp-t9a3e",
    name: "Dr. Sarah Fadel",
    userType: "Endocrinology",
    ActiveAppt: 56,
    status: "Active"

  },
  {
    number: 2,
    userId: "emp-t9a3e",
    name: "Dr. Sarah Fadel",
    userType: "Endocrinology",
    ActiveAppt: 56,
    status: "Active",
    avatar: null,
  },
  {
    number: 3,
    userId: "emp-t9a3e",
    name: "Dr. Sarah Fadel",
    userType: "Endocrinology",
    ActiveAppt: 56,
    status: "Active",
    avatar: null,
  }, {
    number: 1,
    userId: "emp-t9a3e",
    name: "Dr. Sarah Fadel",
    userType: "Endocrinology",
    ActiveAppt: 56,
    status: "Active"

  }, {
    number: 1,
    userId: "emp-t9a3e",
    name: "Dr. Sarah Fadel",
    userType: "Endocrinology",
    ActiveAppt: 56,
    status: "Active"

  }, {
    number: 1,
    userId: "emp-t9a3e",
    name: "Dr. Sarah Fadel",
    userType: "Endocrinology",
    ActiveAppt: 56,
    status: "Active"

  },
];
import { Deactivate } from "../../CommonComponents/Deactivate";
import { Activate } from "../../CommonComponents/Activate";

import { useNavigate } from "react-router-dom";
import { Header } from "../../CommonComponents/Header";

export const ViewServiceDetails = (): JSX.Element => {
  const { local, handleLanguageClick } = useLanguage();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);

const [checked, setChecked] = useState<boolean>(true); // الحالة الحالية
const [showDialog, setShowDialog] = useState<boolean>(false);
const [pendingNext, setPendingNext] = useState<boolean | null>(null);
const [actionType, setActionType] = useState<"activate" | "deactivate" | null>(null);


  // عندما يضغط المستخدم على الـ Toggle
function handleToggles(next: boolean) {
  // إذا كان من Active -> Inactive
  if (checked && !next) {
    setPendingNext(next);
    setActionType("deactivate");
    setShowDialog(true);
    return;
  }

  // إذا كان من Inactive -> Active
  if (!checked && next) {
    setPendingNext(next);
    setActionType("activate");
    setShowDialog(true);
    return;
  }

  // غير هيك غيّر مباشرة
  setChecked(next);
}

function confirmDeactivate() {
  setChecked(pendingNext ?? false);
  setPendingNext(null);
  setActionType(null);
  setShowDialog(false);
}

function cancelDeactivate() {
  setPendingNext(null);
  setActionType(null);
  setShowDialog(false);
}


  const [isOpen, setIsOpen1] = useState({
    clinicInfo: true,
    Utilization: true,
    Sessions: true,
    doctorsStaff: true

  });
  const handleToggle = (key: keyof typeof isOpen, open: boolean) => {
    setIsOpen1(prev => ({
      ...prev,
      [key]: open
    }))
  };


const navigate=useNavigate();
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

      <div className="flex flex-col w-full overflow-hidden min-h-screen items-start gap-4 py-4 pl-0 pr-5">

<Header MainTitle="Services Management" SubTitle="View Service Details" onOpenSidebar={onOpenSidebar}  backTo="/ServicesList"/>


        <Card className="flex flex-col  h-full items-start gap-5 p-[5px] pr-0 relative w-full rounded-2xl overflow-hidden bg-background-tertiary">
          <CardContent className="w-full overflow-y-auto scroll-x-hidden pr-[20px] ">
            <div className="flex justify-end">
              <Link to="/EditServiceDetials">
                <Button onClick={()=>navigate("/EditServiceDetials",{state:{from:"/ViewServiceDetails"}} )}  className="w-[200px] h-10 bg-secondary-dark text-text-inverse rounded-[20px]   font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-[length:var(--btn-14px-medium-font-size)] leading-[var(--btn-14px-medium-line-height)] tracking-[var(--btn-14px-medium-letter-spacing)] [font-style:var(--btn-14px-medium-font-style)] h-auto self-end">
                  <Edit2Icon className={" font-lato w-4 h-4 mr-1 text-text-inverse"} />
                  <h1 className="font-lato">{t("Edit")}</h1>
                </Button></Link>
            </div>





            <ReusableCollapsible dir={local === 'ar' ? 'rtl' : 'ltr'}
              title={
                <div className="flex flex-col lg:flex-row gap-0 lg:gap-[113px] w-full">
                  {/* Left Title */}
                  <div className=" lg:w-[min(100%,500px)]  text-primary-default font-semibold  pl-6">
                    {t("Identification")}
                  </div>

                  {/* Right Title */}
                  <div className=" lg:w-[min(100%,500px)] text-start  text-primary-default  font-semibold  pl-6 hidden lg:block">
                    {t("Assign")}
                  </div>
                </div>

              }
              initiallyOpen={isOpen.clinicInfo}
              onOpenChange={(open) => handleToggle("clinicInfo", open)}
              content={
                <div className="relative w-full bg-surface-default rounded-2xl p-6 pt-0">
                  {/* Wrapper: Flex column on small screens, row on large */}
                  <div className="flex  flex-col lg:flex-row  gap-0 lg:gap-[113px]">

                    {/* Left Column */}
                    <div className="flex flex-col   gap-4 min-w-0 w-full lg:w-[500px]">
                      {/* Services Name */}
                      <div className="flex flex-col gap-1 sm:grid sm:grid-cols-[150px_1fr] sm:gap-4  gap-4 items-start">
                        <div className="text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">{t("Services Name")}</div>
                        <div className="text-text-primary font-title-14px-semibold text-[clamp(12px,2vw,14px)]  font-semibold break-words">
                          Comprehensive Diabetes Checkup
                        </div>
                      </div>

                      {/* Services ID + Status */}
                      <div className="flex flex-col sm:grid sm:grid-cols-[150px_1fr] sm:gap-4 gap-4 items-start">
                        <div className="text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">{t("Services ID")}</div>
               <div className="flex flex-wrap items-center gap-2">
  <div className="text-text-primary font-title-14px-semibold text-[clamp(12px,2vw,14px)] font-semibold">
    SRV-00345
  </div>

  <div className="flex items-center gap-2">
    <div className="text-text-primary font-semibold text-[clamp(12px,2vw,14px)]">
      {t("Status")}:
    </div>

    <div className="flex items-center justify-center bg-hitbox">
      <div onClick={(e) => e.stopPropagation()}>
        <Toggle checked={checked} onChange={handleToggles} />

        {showDialog && actionType === "deactivate" && (
          <Deactivate
            open={showDialog}
            onConfirm={confirmDeactivate}
            onCancel={cancelDeactivate}
          >
            <p>Inactive services will no longer appear in selection menus or be assignable to patients.</p>
          </Deactivate>
        )}

        {showDialog && actionType === "activate" && (
          <Activate
            open={showDialog}
            onConfirm={confirmDeactivate}
            onCancel={cancelDeactivate}
          >
            <p>Active services will be visible in selection menus and can be assigned to patients.</p>
          </Activate>
        )}
      </div>
    </div>
  </div>
</div>

    </div>
                      {/* Service Category */}
                      <div className="flex flex-col gap-1 sm:grid sm:grid-cols-[150px_1fr] sm:gap-4 gap-4 items-start">
                        <div className="text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">{t("Service Category")}</div>
                        <div className="text-text-primary font-semibold text-[clamp(12px,2vw,14px)]  ">{t("Medical Examination")}</div>
                      </div>

                      {/* Service Description */}
                   
                
                       <div className="flex flex-col gap-1 sm:grid sm:grid-cols-[150px_1fr] sm:gap-4 gap-4 items-start">
                        <div className="text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">{t("Service Description")}</div>
                        <div className="text-text-primary font-semibold text-[clamp(12px,2vw,14px)]  break-words">
                          Full diagnostic evaluation for diabetes including lab tests, physical exam, and consultation.
                        </div>
                      </div>
  </div>
                    {/* Right Column */}
                    <div className="flex flex-col gap-4 min-w-0 w-full lg:w-[500px] items-start">
                      <div className=" w-36  block lg:hidden text-primary-default mt-3 "> {t("Assign")}</div>
                      {/* Assign Complex */}
                      <div className="flex flex-col gap-1 sm:grid sm:grid-cols-[150px_1fr] sm:gap-4 gap-4 items-start">
                        <div className="text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">{t("Assign Complex")}</div>
                        <div className="text-text-primary font-title-14px-semibold text-[clamp(12px,2vw,14px)]  font-semibold break-words">
                          Arab Interface tech Main Complex
                        </div>
                      </div>

                      {/* Assign Clinics */}
                      <div className="flex flex-col gap-1 sm:grid sm:grid-cols-[150px_1fr] sm:gap-4 gap-4 items-start">
                        <div className="text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">{t("Assign Clinics")}</div>
                        <div className="text-text-primary font-title-14px-semibold text-[clamp(12px,2vw,14px)]  font-semibold break-words">
                          Internal Medicine, Family Medicine
                        </div>
                      </div>

                      {/* Resources */}
                      <div className="flex flex-col gap-1 sm:grid sm:grid-cols-[150px_1fr] sm:gap-4  font-lato gap-4 items-start">
                        <div className="text-primary-default font-semibold text-[clamp(14px,2vw,16px)] ">{t("Resources")}</div>
                        <div></div> {/* فارغ إذا ما في محتوى */}
                      </div>

                      {/* Required Equipment */}
                      <div className="flex flex-col gap-1 sm:grid sm:grid-cols-[150px_1fr] sm:gap-4 gap-4 items-start">
                        <div className="text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">{t("Required Equipment")}</div>
                        <div className="text-text-primary font-semibold text-[clamp(12px,2vw,14px)]  break-words">
                          Full diagnostic evaluation for diabetes including lab tests, physical exam, and consultation.
                        </div>
                      </div>
                    </div>
                
                </div>
                
                
                </div>

              }
            />








            <ReusableCollapsible dir={local === 'ar' ? 'rtl' : 'ltr'}
              title={
                <div className="flex flex-col lg:flex-row gap-0 lg:gap-[113px] w-full">
                  {/* Left Title */}
                  <div className=" lg:w-[min(100%,500px)]   font-semibold  pl-6">
                    {t("Utilization Metrics")}
                  </div>

                  {/* Right Title */}
                  <div className=" lg:w-[min(100%,500px)] text-start  font-semibold  pl-6 hidden lg:block">
                    {t("Operational Details")}
                  </div>
                </div>
              }
              initiallyOpen={isOpen.Utilization}
              onOpenChange={(open) => handleToggle("Utilization", open)}
              content={
                <div className="self-stretch w-full h-auto bg-surface-default rounded-2xl p-6 pt-0">
                  <div className="flex flex-col lg:flex-row gap-0 lg:gap-[113px]">

                    {/* Left Column - Utilization Metrics */}
                    <div className="flex flex-col gap-4 w-full lg:w-[500px]">
                      {/* Total Patients Served */}
                      <div className="flex flex-col sm:grid sm:grid-cols-[180px_1fr] sm:gap-4 gap-4 gap-4 items-start">
                        <div className="text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">{t("Total Patients Served")}</div>
                        <div className="text-text-primary font-semibold text-[clamp(12px,2vw,14px)]  break-words">327 Patients</div>
                      </div>

                      {/* Completed Sessions */}
                      <div className="flex flex-col sm:grid sm:grid-cols-[180px_1fr] sm:gap-4 gap-4 gap-4 items-start">
                        <div className="text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">{t("Completed Sessions")}</div>
                        <div className="text-text-primary font-semibold text-[clamp(12px,2vw,14px)]  break-words">945 Sessions</div>
                      </div>

                      {/* Average Duration */}
                      <div className="flex flex-col sm:grid sm:grid-cols-[180px_1fr] sm:gap-4 gap-4 gap-4 items-start">
                        <div className="text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">{t("Average Duration")}</div>
                        <div className="text-text-primary font-semibold text-[clamp(12px,2vw,14px)]  break-words">25 mins</div>
                      </div>

                      {/* No-Show Rate */}
                      <div className="flex flex-col sm:grid sm:grid-cols-[180px_1fr] sm:gap-4 gap-4 gap-4 items-start">
                        <div className="text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">{t("No-Show Rate (%)")}</div>
                        <div className="text-text-primary font-semibold text-[clamp(12px,2vw,14px)]  break-words">8.6%</div>
                      </div>

                      {/* Rebooking Rate */}
                      <div className="flex flex-col sm:grid sm:grid-cols-[180px_1fr] sm:gap-4 gap-4 gap-4 items-start">
                        <div className="text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">{t("Rebooking Rate (%)")}</div>
                        <div className="text-text-primary font-semibold text-[clamp(12px,2vw,14px)]  break-words">72.4%</div>
                      </div>
                    </div>

                    {/* Right Column - Operational Details */}
                    <div className="flex flex-col gap-4 w-full lg:w-[500px]">
                      <div className=" w-36  block lg:hidden text-primary-default mt-3"> {t("Operational Details")}</div>
                      {/* Last Performed Date */}
                      <div className="flex flex-col sm:grid sm:grid-cols-[180px_1fr] sm:gap-4 gap-4 gap-4 items-start">
                        <div className="text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">{t("Last Performed Date")}</div>
                        <div className="text-text-primary font-semibold text-[clamp(12px,2vw,14px)]  break-words">June 28-2025</div>
                      </div>

                      {/* Most Frequent Doctor */}
                      <div className="flex flex-col sm:grid sm:grid-cols-[180px_1fr] sm:gap-4 gap-4 gap-4 items-start">
                        <div className="text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">{t("Most Frequent Doctor")}</div>
                        <div className="text-text-primary font-semibold text-[clamp(12px,2vw,14px)]  break-words">Dr. Sarah Fadel</div>
                      </div>

                      {/* Most Frequent Clinic */}
                      <div className="flex flex-col sm:grid sm:grid-cols-[180px_1fr] sm:gap-4 gap-4 gap-4 items-start">
                        <div className="text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">{t("Most Frequent Clinic")}</div>
                        <div className="text-text-primary font-semibold text-[clamp(12px,2vw,14px)]  break-words">Internal Medicine Clinic</div>
                      </div>

                      {/* Timestamps */}
                      <div className="flex flex-col sm:grid sm:grid-cols-[180px_1fr] sm:gap-4 gap-4 gap-4 items-start">
                        <div className="text-primary-default font-semibold font-lato text-[clamp(14px,2vw,16px)] ">{t("Timestamps")}</div>
                        <div></div>
                      </div>

                      {/* Creation Date */}
                      <div className="flex flex-col sm:grid sm:grid-cols-[180px_1fr] sm:gap-4 gap-4 gap-4 items-start">
                        <div className="text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">{t("Creation Date")}</div>
                        <div className="text-text-primary font-semibold text-[clamp(12px,2vw,14px)]  break-words">June 28-2025</div>
                      </div>

                      {/* Last Update */}
                      <div className="flex flex-col sm:grid sm:grid-cols-[180px_1fr] sm:gap-4 gap-4 gap-4 items-start">
                        <div className="text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">{t("Last Update")}</div>
                        <div className="text-text-primary font-semibold text-[clamp(12px,2vw,14px)]  break-words">
                          June 28-2025&nbsp;&nbsp;10:43 AM
                        </div>
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
                <div className="w-full  bg-surface-default rounded-2xl p-4">
                  {/* سكرول أفقي + منع تكسير الأعمدة */}
                  <div className="overflow-x-auto h-[192px]">
                    <Table className="min-w-max stiky z-10 top-0 border-collapse">
                      <TableHeader>
                        <TableRow className="bg-surface-default sticky top-0 z-10">
                          <TableHead className="w-[80px] text-center text-text-primary text-[clamp(14px,2vw,16px)]  font-semibold">
                            {t("No.")}
                          </TableHead>
                          <TableHead className="text-center text-text-primary text-[clamp(14px,2vw,16px)]  font-semibold w-40">
                            {t("Session Name.")}
                          </TableHead>
                          <TableHead className="text-center text-text-primary text-[clamp(14px,2vw,16px)]  font-semibold w-40">
                            {t("Duration")}
                          </TableHead>
                          <TableHead className="text-center text-text-primary text-[clamp(14px,2vw,16px)]  font-semibold w-40">
                            {t("Next Session")}
                          </TableHead>
                          <TableHead className="text-center text-text-primary text-[clamp(14px,2vw,16px)]  font-semibold w-80">
                            {t("Description")}
                          </TableHead>
                          <TableHead className="text-center text-text-primary text-[clamp(14px,2vw,16px)]  font-semibold w-40">
                            {t("Active Appt")}
                          </TableHead>
                          <TableHead className="text-center text-text-primary text-[clamp(14px,2vw,16px)]  font-semibold w-40">
                            {t("Appt Required?")}
                          </TableHead>
                        </TableRow>
                      </TableHeader>

                      <TableBody>
                        {sessions.map((session) => (
                          <TableRow
                            key={session.no}
                            className="border-b border-[#e4e2dd] h-[54px]"
                          >
                            <TableCell className="text-center text-[clamp(12px,2vw,14px)]  font-semibold">
                              {session.no}
                            </TableCell>
                            <TableCell className="text-center text-[clamp(12px,2vw,14px)]  font-semibold">
                              {session.name}
                            </TableCell>
                            <TableCell className="text-center text-[clamp(12px,2vw,14px)]  font-semibold">
                              {session.duration}
                            </TableCell>
                            <TableCell className="text-center text-[clamp(12px,2vw,14px)]  font-semibold">
                              {session.nextSession}
                            </TableCell>
                            <TableCell className="text-center text-[clamp(12px,2vw,14px)]  font-semibold w-80">
                              {session.description}
                            </TableCell>
                            <TableCell className="text-center text-[clamp(12px,2vw,14px)]  font-semibold">
                              {session.activeAppt}
                            </TableCell>
                            <TableCell className="text-center font-semibold">
                              {session.apptRequired ? (
                                <div className="text-text-primary">
                                  <svg
                                    className="mx-auto block"
                                    width="18"
                                    height="12"
                                    viewBox="0 0 18 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M17.7803 0.21967C18.0732 0.512563 18.0732 0.987437 17.7803 1.28033L7.28033 11.7803C6.98744 12.0732 6.51256 12.0732 6.21967 11.7803L0.96967 6.53033C0.676777 6.23744 0.676777 5.76256 0.96967 5.46967C1.26256 5.17678 1.73744 5.17678 2.03033 5.46967L6.75 10.1893L16.7197 0.21967C17.0126 -0.0732233 17.4874 -0.0732233 17.7803 0.21967Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </div>
                              ) : (
                                "❌"
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
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
                <div className="w-full bg-surface-default rounded-2xl p-4">
                  {/* سكرول أفقي */}
                  <div className="overflow-x-auto">
                    {/* container فيه ارتفاع محدد + سكرول عمودي */}
                    <div className="max-h-[192px] overflow-y-auto">
                      <Table className="min-w-max border-collapse">
                        <TableHeader>
                          <TableRow className="bg-surface-default sticky top-0 z-10">
                            <TableHead className="w-[98px] text-center text-text-primary text-[clamp(14px,2vw,16px)]  font-semibold">
                              {t("No.")}
                            </TableHead>
                            <TableHead className="w-56 text-center text-text-primary text-[clamp(14px,2vw,16px)]  font-semibold">
                              {t("User ID")}
                            </TableHead>
                            <TableHead className="w-60 text-center text-text-primary text-[clamp(14px,2vw,16px)]  font-semibold">
                              {t("Doctor Name")}
                            </TableHead>
                            <TableHead className="w-60 text-center text-text-primary text-[clamp(14px,2vw,16px)]  font-semibold">
                              {t("Specialties")}
                            </TableHead>
                            <TableHead className="w-40 text-center text-text-primary text-[clamp(14px,2vw,16px)]  font-semibold">
                              {t("Active Appt")}
                            </TableHead>
                            <TableHead className="w-40 text-center text-text-primary text-[clamp(14px,2vw,16px)]  font-semibold">
                              {t("Status")}
                            </TableHead>
                          </TableRow>
                        </TableHeader>

                        <TableBody>
                          {doctorsAndStaff.map((person) => (
                            <TableRow
                              key={person.number}
                              className="border-b h-[54px] border-[#e4e2dd]"
                            >
                              <TableCell className="text-center text-[clamp(12px,2vw,14px)]  font-semibold">
                                {person.number}
                              </TableCell>
                              <TableCell className="text-center text-[clamp(12px,2vw,14px)]  font-semibold">
                                {person.userId}
                              </TableCell>
                              <TableCell className="text-center text-[clamp(12px,2vw,14px)]  font-semibold">
                                <div className="flex items-center gap-2 justify-center">
                                  <span>{person.name}</span>
                                </div>
                              </TableCell>
                              <TableCell className="text-center text-[clamp(12px,2vw,14px)]  font-semibold">
                                {person.userType}
                              </TableCell>
                              <TableCell className="text-center text-[clamp(12px,2vw,14px)]  font-semibold">
                                {person.ActiveAppt}
                              </TableCell>
                              <TableCell className="text-center">
                                <Badge className="bg-secondary-light text-secondary-dark text-end rounded-[20px] w-[92px]">
                                  {t(person.status)}
                                </Badge>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </div>

              }
            />











          </CardContent>
        </Card>
      </div></div>
  );
};


