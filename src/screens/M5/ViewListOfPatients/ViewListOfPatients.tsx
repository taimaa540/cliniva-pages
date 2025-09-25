import { useState } from "react";
import { BellIcon, SearchIcon, Trash2Icon } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { useLanguage } from "../../../lib/LanguageContext";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "../../../components/ui/pagination";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";
import { ThemeToggle } from "../../../components/theme/ThemeSwitcher";
import { useEffect } from "react";
import Toggle from "../../../components/ui/SwitchToggel";
import { SideBar } from "../../CommonComponents/SideBarPlan2";
const userData = [
  {
    id: "001",
    PatientID: "US-001",
    PatientName: "Dr. Ahmed Hassan",
    Age: "45",
    LastVisitDate: "2023-01-01",
    Gender: "Male",
    InsuranceCompany: "Al hasan company",
    InsuranceStatus: "Expired",
    status: "Active",
  },
  {
    id: "001",
    PatientID: "US-001",
    PatientName: "Dr. Ahmed Hassan",
    Age: "45",
    LastVisitDate: "2023-01-01",
    Gender: "Male",
    InsuranceCompany: "Al hasan company",
    InsuranceStatus: "Expired",
    status: "Active",
  },
  {
    id: "001",
    PatientID: "US-001",
    PatientName: "Dr. Ahmed Hassan",
    Age: "45",
    LastVisitDate: "2023-01-01",
    Gender: "Male",
    InsuranceCompany: "Al hasan company",
    InsuranceStatus: "Expired",
    status: "Active",
  },
  {
    id: "001",
    PatientID: "US-001",
    PatientName: "Dr. Ahmed Hassan",
    Age: "45",
    LastVisitDate: "2023-01-01",
    Gender: "Male",
    InsuranceCompany: "Al hasan company",
    InsuranceStatus: "Expired",
    status: "Active",
  },
  {
    id: "001",
    PatientID: "US-001",
    PatientName: "Dr. Ahmed Hassan",
    Age: "45",
    LastVisitDate: "2023-01-01",
    Gender: "Male",
    InsuranceCompany: "Al hasan company",
    InsuranceStatus: "Expired",
    status: "Active",
  },
  {
    id: "001",
    PatientID: "US-001",
    PatientName: "Dr. Ahmed Hassan",
    Age: "45",
    LastVisitDate: "2023-01-01",
    Gender: "Male",
    InsuranceCompany: "Al hasan company",
    InsuranceStatus: "Expired",
    status: "Active",
  }, {
    id: "001",
    PatientID: "US-001",
    PatientName: "Dr. Ahmed Hassan",
    Age: "45",
    LastVisitDate: "2023-01-01",
    Gender: "Male",
    InsuranceCompany: "Al hasan company",
    InsuranceStatus: "Expired",
    status: "Active",
  },
  {
    id: "001",
    PatientID: "US-001",
    PatientName: "Dr. Ahmed Hassan",
    Age: "45",
    LastVisitDate: "2023-01-01",
    Gender: "Male",
    InsuranceCompany: "Al hasan company",
    InsuranceStatus: "Expired",
    status: "Active",
  },
  {
    id: "001",
    PatientID: "US-001",
    PatientName: "Dr. Ahmed Hassan",
    Age: "45",
    LastVisitDate: "2023-01-01",
    Gender: "Male",
    InsuranceCompany: "Al hasan company",
    InsuranceStatus: "Expired",
    status: "Active",
  },
  {
    id: "001",
    PatientID: "US-001",
    PatientName: "Dr. Ahmed Hassan",
    Age: "45",
    LastVisitDate: "2023-01-01",
    Gender: "Male",
    InsuranceCompany: "Al hasan company",
    InsuranceStatus: "Expired",
    status: "Active",
  },
  {
    id: "001",
    PatientID: "US-001",
    PatientName: "Dr. Ahmed Hassan",
    Age: "45",
    LastVisitDate: "2023-01-01",
    Gender: "Male",
    InsuranceCompany: "Al hasan company",
    InsuranceStatus: "Expired",
    status: "Active",
  },
  {
    id: "001",
    PatientID: "US-001",
    PatientName: "Dr. Ahmed Hassan",
    Age: "45",
    LastVisitDate: "2023-01-01",
    Gender: "Male",
    InsuranceCompany: "Al hasan company",
    InsuranceStatus: "Expired",
    status: "Active",
  },
  {
    id: "001",
    PatientID: "US-001",
    PatientName: "Dr. Ahmed Hassan",
    Age: "45",
    LastVisitDate: "2023-01-01",
    Gender: "Male",
    InsuranceCompany: "Al hasan company",
    InsuranceStatus: "Expired",
    status: "Active",
  },
  {
    id: "001",
    PatientID: "US-001",
    PatientName: "Dr. Ahmed Hassan",
    Age: "45",
    LastVisitDate: "2023-01-01",
    Gender: "Male",
    InsuranceCompany: "Al hasan company",
    InsuranceStatus: "Expired",
    status: "Active",
  },

];

export const ViewListOfPatients = (): JSX.Element => {
  const { local, handleLanguageClick } = useLanguage();
  const [status, setStatus] = useState("status");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(local);
  }, [local, i18n]);

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
      <div className="flex flex-col w-full overflow-hidden h-full items-start gap-4 py-4 pl-0 pr-5">
        {/* الهيدر الرئيسي */}


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
                <h1 className="font-semibold text-sm text-on-surface-primary">
                  {t("Patients Management")}
                </h1>
                <p className="text-xs text-on-surface-primary">
                  {t("Patients List")}
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
                <h1 className="font-semibold text-base md:text-lg lg:text-xl text-on-surface-primary">
                  {t("Patients Management")}
                </h1>
                <p className="text-sm md:text-base text-on-surface-primary">
                  {t("Patients List")}
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
                  <div className="text-base font-semibold text-on-surface-primary">
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


        {/* البطاقة الرئيسية */}
        <Card className="flex flex-col h-full items-start gap-5 p-[20px] pr-0 relative w-full rounded-2xl overflow-hidden bg-background-secondary">
          <CardContent className="w-full h-full flex flex-col">
            {/* شريط البحث والتصفية - مثبت في الأعلى */}



            <div className="flex flex-row flex-wrap justify-between w-full items-center gap-2.5" dir={local === 'ar' ? 'rtl' : 'ltr'}>

              {/* Left group: Search + Select */}
              <div className="flex  sm:flex-row items-start sm:items-center gap-2.5 w-full sm:w-auto">
                <form className="relative flex items-center"> <SearchIcon className="w-[min(100%,16px)] h-[min(100%,16px)] absolute top-[10px] left-[8px]" /> <input type="search" placeholder={t("Search for a specialities")} className="placeholder:text-[11px] text-[11px] bg-background-primary pl-[30px] py-[8px] rounded-[16px] w-full sm:w-[150px] md:w-[200px] lg:w-[224px] border-0 outline-none" /> </form>

                <Select
                  dir={local === 'ar' ? 'rtl' : 'ltr'}
                  value={status}
                  onValueChange={(value) => setStatus(value)}
                >
                  <SelectTrigger className="inline-flex items-center gap-0.5 pl-2.5 pr-2 py-1.5 bg-secondary-light rounded-[20px] border-0 h-auto w-auto">
                    <SelectValue>
                      <span className="font-lato font-medium text-[clamp(12px,2vw,14px)] text-text-primary">
                        {t(`status.${status}`)}
                      </span>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="status" disabled>{t("status.status")}</SelectItem>
                    <SelectItem value="active">{t("status.active")}</SelectItem>
                    <SelectItem value="inactive">{t("status.inactive")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Right group: Add button */}
              <div className="w-full sm:w-auto flex justify-start sm:justify-end mt-2 sm:mt-0">
                <Link to="/AddNewPatient">
                  <Button className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-secondary-dark rounded-[20px] h-[min(100%,40px)] w-[min(100%,146px)]">
                    <div className="flex items-center justify-center">
                      <div className="text-text-inverse">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M0.625 5C0.625 4.75838 0.78823 4.5625 0.989583 4.5625H9.01042C9.21177 4.5625 9.375 4.75838 9.375 5C9.375 5.24162 9.21177 5.4375 9.01042 5.4375H0.989583C0.78823 5.4375 0.625 5.24162 0.625 5Z" fill="CurrentColor" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M5 0.625C5.24162 0.625 5.4375 0.373096 5.4375 0.833333V9.01042C5.4375 9.21177 5.24162 9.375 5 9.375C4.75838 9.375 4.5625 9.21177 4.5625 9.01042V0.833333C4.5625 0.78823 4.75838 0.625 5 0.625Z" fill="CurrentColor" />
                        </svg>
                      </div>
                      <h1 className="text-[11px] font-semibold text-text-inverse">{t("Add New Patient")}</h1>
                    </div>
                  </Button>
                </Link>
              </div>
            </div>

            {/* الجدول مع التمرير فقط */}
            <div
              className="flex flex-col flex-grow rounded-lg items-start gap-5 pt-4 pr-[10px] relative w-full overflow-hidden"
              dir={local === "ar" ? "rtl" : "ltr"}
            >
              {/* حاوية سكرول أفقي */}
              <div className="w-full overflow-x-auto">
                {/* حاوية سكرول رأسي */}
                <div
                  className=" rounded-lg"
                  style={{ height: "calc(100vh - 78px - 200px)" }}
                >
                  <table className="table-auto w-full min-w-[800px] text-center border-collapse">
                    <thead className="sticky top-0 z-10 bg-background-primary border-b border-border-light">
                      <tr className="h-[56px] bg-background-primary border-b border-border-light sticky top-0">
                        <td className="min-w-[50px] font-lato font-semibold text-[clamp(12px,1.5vw,12px)] text-text-primary">{t("No.")}</td>
                        <td className="min-w-[100px] font-lato font-semibold text-[clamp(12px,1.5vw,12px)] text-text-primary">{t("Patient ID")}</td>
                        <td className="min-w-[150px] font-lato font-semibold text-[clamp(12px,1.5vw,12px)] text-text-primary">{t("Patient Name")}</td>
                        <td className="min-w-[80px] font-lato font-semibold text-[clamp(12px,1.5vw,12px)] text-text-primary">{t("Age")}</td>
                        <td className="min-w-[150px] font-lato font-semibold text-[clamp(12px,1.5vw,12px)] text-text-primary">{t("Last Visit Date")}</td>
                        <td className="min-w-[100px] font-lato font-semibold text-[clamp(12px,1.5vw,12px)] text-text-primary">{t("Gender")}</td>
                        <td className="min-w-[150px] font-lato font-semibold text-[clamp(12px,1.5vw,12px)] text-text-primary">{t("Insurance Company")}</td>
                        <td className="min-w-[150px] font-lato font-semibold text-[clamp(12px,1.5vw,12px)] text-text-primary">{t("Insurance Status")}</td>
                        <td className="min-w-[100px] font-lato font-semibold text-[clamp(12px,1.5vw,12px)] text-text-primary">{t("Status")}</td>
                        <td className="min-w-[120px] font-lato font-semibold text-[clamp(12px,1.5vw,12px)] text-text-primary">{t("Actions")}</td>
                      </tr>
                    </thead>
                    <tbody>
                      {userData.map((user, index) => (
                        <tr key={index} className="h-[78px] bg-background-primary hover:bg-secondary-light border-b border-border-light"
                          onClick={() => window.location.href = `/ViewPatientDetail?id=${user.id}`}>
                          <td className="w-[10%] align-middle font-lato text-[clamp(12px,1.5vw,12px)] text-text-primary">{user.id}</td>
                          <td className="w-[10%] align-middle font-lato text-[clamp(12px,1.5vw,12px)] text-text-primary">{user.PatientID}</td>
                          <td className="w-[15%] align-middle font-lato text-[clamp(12px,1.5vw,12px)] text-text-primary">
                            {user.PatientName}
                          </td>
                          <td className="w-[10%] align-middle font-lato text-[clamp(12px,1.5vw,12px)] text-text-primary">{user.Age}</td>
                          <td className="w-[15%] align-middle font-lato text-[clamp(12px,1.5vw,12px)] text-text-primary">{user.LastVisitDate}</td>
                          <td className="w-[15%] align-middle font-lato text-[clamp(12px,1.5vw,12px)] text-text-primary">{user.Gender}</td>
                          <td className="w-[15%] align-middle font-lato text-[clamp(12px,1.5vw,12px)] text-text-primary">{user.InsuranceCompany}</td>
                          <td className="w-[15%]  align-middle font-lato text-[clamp(12px,1.5vw,12px)] text-text-primary">{user.InsuranceStatus}</td>
                          <td className="w-[15%] align-middle font-lato text-[clamp(12px,1.5vw,12px)] text-text-primary">
                            <Toggle />
                          </td>
                          <td className="w-[15%] align-middle">
                            <div className="inline-flex flex-col justify-center gap-1 items-start">
                              <div className="inline-flex items-center justify-center gap-1">
                                <Link to="/EditPatientDetails">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="inline-flex items-center justify-center gap-2 p-2.5 rounded-lg overflow-hidden h-auto" onClick={(e) => e.stopPropagation()}
                                  >
                                    <img
                                      className="w-[15px] h-[15px] text-on-surface-primary"
                                      alt="edit"
                                      src="./edit-01.svg"
                                    />
                                  </Button>
                                </Link>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="inline-flex items-center justify-center gap-2 p-2.5 rounded-lg overflow-hidden h-auto"
                                >
                                  <Trash2Icon className="w-[20px] h-[20px] text-on-surface-primary" />
                                </Button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* التذييل (أرقام الصفحات) - مثبت في الأسفل */}


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
      </div></div>
  );
};