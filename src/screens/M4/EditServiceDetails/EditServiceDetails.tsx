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
import { SideBar } from "../../CommonComponents/SideBarPlan2";
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

import { ThemeToggle } from "../../../components/theme/ThemeSwitcher";
import { Link } from "react-router-dom";


type Session = {
  no: number;
  name: string;
  duration: string;
  nextSession: string;
  description: string;
  activeAppt: string;
  apptRequired: boolean;
};
interface FormData {
  serviceName: string;
  serviceCategory: string;
  assignComplex: string;
  assignClinics: string;
  serviceDescription: string;
  requiredEquipment: string;
}import { useLocation } from "react-router-dom";
import { Activate } from "../../CommonComponents/Activate";
import { Deactivate } from "../../CommonComponents/Deactivate";
import { ArrowLeftIcon } from "lucide-react";
import { Header } from "../../CommonComponents/Header";
export const EditServiceDetails = (): JSX.Element => {
  const { local, handleLanguageClick } = useLanguage();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);



  const [doctorsAndStaff, setDoctorsAndStaff] = useState([
    {
      number: 1,
      userId: "emp-t9a3e",
      doctorsList: ["Dr. Ahmed", "Dr. Sarah", "Dr. John"],
      userType: "Endocrinology",
      ActiveAppt: 56,
      status: "Active",
      selectedDoctor: "Dr. Ahmed", // نضيف خصائص لتخزين الدكتور المحدد
    },
    {
      number: 2,
      userId: "emp-t9a3e",
      doctorsList: ["Dr. Ahmed", "Dr. Sarah", "Dr. John"],
      userType: "Endocrinology",
      ActiveAppt: 56,
      status: "Active",
      avatar: null,
      selectedDoctor: "Dr. Ahmed",
    },
    {
      number: 3,
      userId: "emp-t9a3e",
      doctorsList: ["Dr. Ahmed", "Dr. Sarah", "Dr. John"],
      userType: "Endocrinology",
      ActiveAppt: 56,
      status: "Active",
      avatar: null,
      selectedDoctor: "Dr. Ahmed",
    },
  ]);

      const location = useLocation();
        const backTo = location.state?.from || "/ServicesList";

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
      newList[index].selectedDoctor = newName;
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

  const [formData, setFormData] = useState<FormData>({
    serviceName: "Comprehensive Diabetes Checkup",
    serviceCategory: "Medical Examination",
    assignComplex: "Arab Interface tech Main Complex",
    assignClinics: "Internal Medicine, Family Medicine",
    serviceDescription: "Full diagnostic evaluation for diabetes including lab tests, physical exam, and consultation.",
    requiredEquipment: "Full diagnostic evaluation for diabetes including lab tests, physical exam, and consultation.",
  });

  const handleChange = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
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
<Header MainTitle="Services Management" SubTitle="Edit Service details" onOpenSidebar={onOpenSidebar}  backTo={backTo}/>


        <Card className="flex flex-col h-full items-start gap-5 p-[5px] pr-0 relative w-full rounded-2xl overflow-hidden bg-background-tertiary">
          <CardContent className="w-full overflow-y-auto scroll-x-hidden pr-[20px] ">
            <div className="flex gap-[14px]  justify-end p-3 items-end text-end pb-2 sm:pb-3 md:pb-3 lg:pb-4 " dir={local === 'ar' ? 'rtl' : 'ltr'}
            ><Link to={backTo}>
                <button className="     w-[100px] h-[40px]       /* الموبايل الافتراضي */
  
    md:w-[180px] md:h-[38px]
    lg:w-[200px] lg:h-[40px] 
 
      rounded-[20px] border border-border-light bg-surface-primary  font-lato font-medium text-sm leading-[100%] tracking-[0] text-text-primary">
                  {t("Cancel")}
                </button></Link>
              <button className="  w-[100px] h-[40px]       /* الموبايل الافتراضي */

    md:w-[160px] md:h-[36px]
    lg:w-[200px] lg:h-[40px]  rounded-[20px] bg-secondary-dark font-lato font-medium text-sm leading-[100%] tracking-[0] text-surface-primary">
                {t("Save")}
              </button>

            </div>





            <ReusableCollapsible
              dir={local === "ar" ? "rtl" : "ltr"}
              title={
    <div className="flex flex-col lg:flex-row gap-0 lg:gap-[123px] w-full">
                  {/* Left Title */}
                  <div className=" lg:w-[min(100%,500px)]   font-semibold  pl-6">
                    {t("Identification")}
                  </div>

                  {/* Right Title */}
                  <div className=" lg:w-[min(100%,500px)] text-start  font-semibold  pl-6 hidden lg:block">
                   {t("Assign")}
                  </div>
                </div>



              }
              initiallyOpen={true}
              onOpenChange={(open) => handleToggle("clinicInfo", open)}
              content={
                <div className="self-stretch w-full h-auto bg-surface-default rounded-2xl p-6">
                  <div className="flex flex-col lg:flex-row gap-0 lg:gap-[113px]">
                    {/* Left Column */}
                     <div className="flex flex-col gap-4 w-full lg:w-[500px]">
                      {/* Services Name */}
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-start min-h-[54px]">
                        <div className="w-[180px] text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">
                          {t("Services Name")}
                        </div>
                        <input
                          type="text"
                          className="w-[min(100%,360px)]  h-10 sm:h-10 md:h-12 border bg-background-secondary border-bg-border-light rounded-[4px] px-3 text-[clamp(12px,2vw,14px)] "
                          value={formData.serviceName}
                          onChange={(e) => handleChange("serviceName", e.target.value)}
                        />
                      </div>
                   <div className="flex flex-col sm:grid sm:grid-cols-[150px_1fr] sm:gap-4 gap-4 gap-x-40 items-start
                   ">
                        <div className="text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] w-[180px] gap-2 sm:gap-6">{t("Services ID")}</div>
               <div className="flex flex-wrap items-center gap-4">
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
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-start min-h-[54px]">
                        <div className="w-[180px] text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">
                          {t("Service Category")}
                        </div>
                        <select
                          className="w-[min(100%,360px)]  h-10 sm:h-10 md:h-12 border bg-background-secondary border-bg-border-light rounded-[4px] px-3 text-[clamp(12px,2vw,14px)] "
                          value={formData.serviceCategory}
                          onChange={(e) => handleChange("serviceCategory", e.target.value)}
                        >
                          <option value="Medical Examination">Medical Examination</option>
                          <option value="Consultation">Consultation</option>
                          <option value="Screening">Screening</option>
                        </select>
                      </div>

                      {/* Service Description */}
                      <div className="flex flex-col sm:flex-row gap-6 items-start">
                        <div className="w-[180px] text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">
                          {t("Service Description")}
                        </div>
                        <textarea
                          className="w-[min(100%,360px)]  h-[60px] sm:h-[72px] md:h-[82px] lg:h-[96px]  border bg-background-secondary border-bg-border-light rounded-[4px] px-3 py-2 text-[clamp(12px,2vw,14px)]  resize-y"
                          value={formData.serviceDescription}
                          onChange={(e) => handleChange("serviceDescription", e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Right Column */}
                 <div className="flex flex-col gap-4 w-full lg:w-[500px]">
                      <div className=" w-36  block lg:hidden text-primary-default mt-3 "> {t("Assign")}</div>
                      {/* Assign Complex */}
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-start min-h-[54px]">
                        <div className="w-[180px] text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">
                          {t("Assign Complex")}
                        </div>
                        <select
                          className="w-[min(100%,360px)]  h-10 sm:h-10 md:h-12 border bg-background-secondary border-bg-border-light rounded-[4px] px-3 text-[clamp(12px,2vw,14px)] "
                          value={formData.assignComplex}
                          onChange={(e) => handleChange("assignComplex", e.target.value)}
                        >
                          <option value="Arab Interface tech Main Complex">Arab Interface tech Main Complex</option>
                          <option value="City Health Complex">City Health Complex</option>
                        </select>
                      </div>

                      {/* Assign Clinics */}
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-start min-h-[54px]">
                        <div className="w-[180px] text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">
                          {t("Assign Clinics")}
                        </div>
                        <select
                          className="w-[min(100%,360px)]  h-10 sm:h-10 md:h-12 border bg-background-secondary border-bg-border-light rounded-[4px] px-3 text-[clamp(12px,2vw,14px)] "
                          value={formData.assignClinics}
                          onChange={(e) => handleChange("assignClinics", e.target.value)}
                        >
                          <option value="Internal Medicine, Family Medicine">Internal Medicine, Family Medicine</option>
                          <option value="Pediatrics">Pediatrics</option>
                          <option value="Cardiology">Cardiology</option>
                        </select>
                      </div>

                      <div className="w-[150px] font-lato text-primary-default font-semibold text-[clamp(14px,2vw,16px)] ">
                        {t("Resources")}
                      </div>

                      {/* Required Equipment */}
                      <div className="flex flex-col sm:flex-row gap-6 items-start">
                        <div className="w-[180px] text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">
                          {t("Required Equipment")}
                        </div>
                        <textarea
                          className="w-[min(100%,360px)]  h-[60px] sm:h-[72px] md:h-[82px] lg:h-[96px]  border bg-background-secondary border-bg-border-light rounded-[4px] px-3 py-2 text-[clamp(12px,2vw,14px)]  resize-y"
                          value={formData.requiredEquipment}
                          onChange={(e) => handleChange("requiredEquipment", e.target.value)}
                        />
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
                      <div className="grid grid-cols-[180px_1fr] gap-4 items-start">
                        <div className="text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">{t("Total Patients Served")}</div>
                        <div className="text-text-primary font-semibold text-[clamp(12px,2vw,14px)]  break-words">327 Patients</div>
                      </div>

                      {/* Completed Sessions */}
                      <div className="grid grid-cols-[180px_1fr] gap-4 items-start">
                        <div className="text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">{t("Completed Sessions")}</div>
                        <div className="text-text-primary font-semibold text-[clamp(12px,2vw,14px)]  break-words">945 Sessions</div>
                      </div>

                      {/* Average Duration */}
                      <div className="grid grid-cols-[180px_1fr] gap-4 items-start">
                        <div className="text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">{t("Average Duration")}</div>
                        <div className="text-text-primary font-semibold text-[clamp(12px,2vw,14px)]  break-words">25 mins</div>
                      </div>

                      {/* No-Show Rate */}
                      <div className="grid grid-cols-[180px_1fr] gap-4 items-start">
                        <div className="text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">{t("No-Show Rate (%)")}</div>
                        <div className="text-text-primary font-semibold text-[clamp(12px,2vw,14px)]  break-words">8.6%</div>
                      </div>

                      {/* Rebooking Rate */}
                      <div className="grid grid-cols-[180px_1fr] gap-4 items-start">
                        <div className="text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">{t("Rebooking Rate (%)")}</div>
                        <div className="text-text-primary font-semibold text-[clamp(12px,2vw,14px)]  break-words">72.4%</div>
                      </div>
                    </div>

                    {/* Right Column - Operational Details */}
                    <div className="flex flex-col gap-4 w-full lg:w-[500px]">
                      <div className=" w-36  block lg:hidden  font-lato text-primary-default mt-3"> {t("Operational Details")}</div>
                      {/* Last Performed Date */}
                      <div className="grid grid-cols-[180px_1fr] gap-4 items-start">
                        <div className="text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">{t("Last Performed Date")}</div>
                        <div className="text-text-primary font-semibold text-[clamp(12px,2vw,14px)]  break-words">June 28-2025</div>
                      </div>

                      {/* Most Frequent Doctor */}
                      <div className="grid grid-cols-[180px_1fr] gap-4 items-start">
                        <div className="text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">{t("Most Frequent Doctor")}</div>
                        <div className="text-text-primary font-semibold text-[clamp(12px,2vw,14px)]  break-words">Dr. Sarah Fadel</div>
                      </div>

                      {/* Most Frequent Clinic */}
                      <div className="grid grid-cols-[180px_1fr] gap-4 items-start">
                        <div className="text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">{t("Most Frequent Clinic")}</div>
                        <div className="text-text-primary font-semibold text-[clamp(12px,2vw,14px)]  break-words">Internal Medicine Clinic</div>
                      </div>

                      {/* Timestamps */}
                      <div className="grid grid-cols-[180px_1fr] gap-4 items-start">
                        <div className="text-primary-default  font-lato font-semibold text-[clamp(14px,2vw,16px)] ">{t("Timestamps")}</div>
                        <div></div>
                      </div>

                      {/* Creation Date */}
                      <div className="grid grid-cols-[180px_1fr] gap-4 items-start">
                        <div className="text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">{t("Creation Date")}</div>
                        <div className="text-text-primary font-semibold text-[clamp(12px,2vw,14px)]  break-words">June 28-2025</div>
                      </div>

                      {/* Last Update */}
                      <div className="grid grid-cols-[180px_1fr] gap-4 items-start">
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
                <div className="w-full bg-surface-default rounded-2xl p-4">
                  {/* سكرول أفقي + عمودي */}
                  <div className="overflow-x-auto">
                    <div className="max-h-[400px] overflow-y-auto">
                      <Table className="min-w-max border-collapse">
                        <TableHeader className="sticky top-0 z-20 bg-surface-default">
                          <TableRow>
                            <TableHead className="w-[80px] font-lato text-center font-semibold text-text-primary">
                              {t("No.")}
                            </TableHead>
                            <TableHead className="text-center font-lato text-text-primary text-[clamp(14px,2vw,16px)]  font-semibold">
                              {t("Session Name")}
                            </TableHead>
                            <TableHead className="text-center font-lato text-text-primary text-[clamp(14px,2vw,16px)]  font-semibold">
                              {t("Duration")}
                            </TableHead>
                            <TableHead className="text-center font-lato text-text-primary text-[clamp(14px,2vw,16px)]  font-semibold">
                              {t("Next Session")}
                            </TableHead>
                            <TableHead className="text-center font-lato text-text-primary text-[clamp(14px,2vw,16px)]  font-semibold w-80">
                              {t("Description")}
                            </TableHead>
                            <TableHead className="text-center  font-lato text-text-primary text-[clamp(14px,2vw,16px)]  font-semibold">
                              {t("Active Appt")}
                            </TableHead>
                            <TableHead className="text-center font-lato text-text-primary text-[clamp(14px,2vw,16px)]  font-semibold">
                              {t("Appt Required?")}
                            </TableHead>
                            <TableHead></TableHead>
                          </TableRow>
                        </TableHeader>

                        <TableBody>
                          {formDat.sessions.map((session, index) => (
                            <TableRow
                              key={session.no}
                              className="border-b border-[#e4e2dd] h-[54px]"
                            >
                              {/* No. */}
                              <TableCell className="text-center text-[clamp(12px,2vw,14px)]  font-semibold">
                                {session.no}
                              </TableCell>

                              {/* Editable Inputs */}
                              <TableCell className="text-center text-[clamp(12px,2vw,14px)]  font-semibold border-r border-[#e4e2dd]">
                                <input
                                  type="text"
                                  value={session.name}
                                  onChange={(e) =>
                                    handleSessionChange(index, "name", e.target.value)
                                  }
                                  className="w-[259px] h-[34px] text-center border bg-background-secondary border-bg-border-light rounded-[4px] px-3 text-[clamp(12px,2vw,14px)] "
                                />
                              </TableCell>

                              <TableCell className="text-center text-[clamp(12px,2vw,14px)]  font-semibold">
                                <input
                                  type="text"
                                  value={session.duration}
                                  onChange={(e) =>
                                    handleSessionChange(index, "duration", e.target.value)
                                  }
                                  className="w-[69px] h-[34px] text-center border bg-background-secondary border-bg-border-light rounded-[4px] px-3 text-[clamp(12px,2vw,14px)] "
                                />
                              </TableCell>

                              <TableCell className="text-center text-[clamp(12px,2vw,14px)]  font-semibold">
                                <input
                                  type="text"
                                  value={session.nextSession}
                                  onChange={(e) =>
                                    handleSessionChange(index, "nextSession", e.target.value)
                                  }
                                  className="w-[83px] h-[34px] text-center border bg-background-secondary border-bg-border-light rounded-[4px] px-3 text-[clamp(12px,2vw,14px)] "
                                />
                              </TableCell>

                              <TableCell className="text-center text-[clamp(12px,2vw,14px)]  font-semibold w-80">
                                <input
                                  type="text"
                                  value={session.description}
                                  onChange={(e) =>
                                    handleSessionChange(index, "description", e.target.value)
                                  }
                                  className="w-[402px] h-[34px] text-center border bg-background-secondary border-bg-border-light rounded-[4px] px-3 text-[clamp(12px,2vw,14px)] "
                                />
                              </TableCell>

                              <TableCell className="text-center text-[clamp(12px,2vw,14px)]  font-semibold">
                                {session.activeAppt}
                              </TableCell>

                              {/* Appt Required? */}
                              <TableCell className="text-center font-semibold">
                                <div className="flex items-center justify-center">
                                  <div className="text-text-primary">
                                    <Checkbox
                                      checked={session.apptRequired}
                                      onChange={(e) =>
                                        handleSessionChange(
                                          index,
                                          "apptRequired",
                                          e.target.checked
                                        )
                                      }
                                    />
                                  </div>
                                </div>
                              </TableCell>

                              {/* Icon (minus button) */}
                              <TableCell className="text-center text-[clamp(12px,2vw,14px)]  font-semibold">
                                <div className="text-text-inverse">
                                  <svg
                                    width="18"
                                    height="2"
                                    viewBox="0 0 18 2"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
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
                    </div>
                  </div>

                  {/* Add button */}
                  <div className="text-text-inverse">
                    <div className="grid text-end items-end justify-end m-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
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
                <div className="w-full bg-surface-default rounded-2xl p-4">
                  {/* Scroll أفقي */}
                  <div className="overflow-x-auto">
                    {/* Scroll عمودي */}
                    <div className="max-h-[400px] overflow-y-auto">
                      <Table className="min-w-max border-collapse">
                        {/* الهيدر ثابت */}
                        <TableHeader className="sticky top-0 z-20 bg-surface-default">
                          <TableRow>
                            <TableHead className="w-[98px] text-center font-lato text-text-primary text-[clamp(14px,2vw,16px)]  font-semibold">
                              {t("No.")}
                            </TableHead>
                            <TableHead className="w-56 text-center font-lato text-text-primary text-[clamp(14px,2vw,16px)]  font-semibold">
                              {t("User ID")}
                            </TableHead>
                            <TableHead className="text-center font-lato text-text-primary text-[clamp(14px,2vw,16px)]  font-semibold">
                              {t("Doctor Name")}
                            </TableHead>
                            <TableHead className="text-center font-lato text-text-primary text-[clamp(14px,2vw,16px)]  font-semibold">
                              {t("Specialties")}
                            </TableHead>
                            <TableHead className="text-center font-lato text-text-primary text-[clamp(14px,2vw,16px)]  font-semibold">
                              {t("Active Appt")}
                            </TableHead>
                            <TableHead className="text-center font-lato text-text-primary text-[clamp(14px,2vw,16px)]  font-semibold">
                              {t("Status")}
                            </TableHead>
                          </TableRow>
                        </TableHeader>

                        <TableBody>
                          {doctorsAndStaff.map((person, index) => (
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
                                <select
                                  value={person.selectedDoctor}
                                  onChange={(e) =>
                                    handleDoctorNameChange(index, e.target.value)
                                  }
                                  className="w-[131px] h-[34px] text-center border bg-background-secondary border-bg-border-light rounded-[4px] px-3 text-[clamp(12px,2vw,14px)] "
                                >
                                  {person.doctorsList?.map((doc) => (
                                    <option key={doc} value={doc}>
                                      {doc}
                                    </option>
                                  ))}
                                </select>
                              </TableCell>
                              <TableCell className="text-center text-[clamp(12px,2vw,14px)]  font-semibold">
                                {person.userType}
                              </TableCell>
                              <TableCell className="text-center text-[clamp(12px,2vw,14px)]  font-semibold">
                                {person.ActiveAppt}
                              </TableCell>
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
                  </div>
                </div>
              }
            />













          </CardContent>
        </Card>
      </div></div>
  );
};


