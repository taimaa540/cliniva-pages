import { BellIcon, PlusIcon, SearchIcon, Trash2Icon } from "lucide-react";
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
  PaginationNext,
  PaginationPrevious,
} from "../../../components/ui/pagination";
import { SideBar } from "../../CommonComponents/SideBarPlan2";
import { ThemeToggle } from "../../../components/theme/ThemeSwitcher";
import { useState } from "react";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import SwitchWithLabel from "../../CommonComponents/SwitchLabel";
import { Badge } from "../../../components/ui/badge";
const userData = [
  {
    id: "001",
    userid: "St-002",
    StaffName: "Dr. Ahmed Hassan",
    Jop: "Surgeon",
    AssignedComplex: "Nova Complex",
    status: "Active",
  },
  {
    id: "001",
    userid: "St-002",
    StaffName: "Dr. Ahmed Hassan",
    Jop: "Surgeon",
    AssignedComplex: "Nova Complex",
    status: "Active",
  },
  {
    id: "001",
    userid: "St-002",
    StaffName: "Dr. Ahmed Hassan",
    Jop: "Surgeon",
    AssignedComplex: "Nova Complex",
    status: "Active",
  },
  {
    id: "001",
    userid: "St-002",
    StaffName: "Dr. Ahmed Hassan",
    Jop: "Surgeon",
    AssignedComplex: "Nova Complex",
    status: "Active",
  },
  {
    id: "001",
    userid: "St-002",
    StaffName: "Dr. Ahmed Hassan",
    Jop: "Surgeon",
    AssignedComplex: "Nova Complex",
    status: "Active",
  },
  {
    id: "001",
    userid: "St-002",
    StaffName: "Dr. Ahmed Hassan",
    Jop: "Surgeon",
    AssignedComplex: "Nova Complex",
    status: "Active",
  },
  {
    id: "001",
    userid: "St-002",
    StaffName: "Dr. Ahmed Hassan",
    Jop: "Surgeon",
    AssignedComplex: "Nova Complex",
    status: "Active",
  },

  {
    id: "001",
    userid: "St-002",
    StaffName: "Dr. Ahmed Hassan",
    Jop: "Surgeon",
    AssignedComplex: "Nova Complex",
    status: "Active",
  },
  {
    id: "001",
    userid: "St-002",
    StaffName: "Dr. Ahmed Hassan",
    Jop: "Surgeon",
    AssignedComplex: "Nova Complex",
    status: "Active",
  },
  {
    id: "001",
    userid: "St-002",
    StaffName: "Dr. Ahmed Hassan",
    Jop: "Surgeon",
    AssignedComplex: "Nova Complex",
    status: "Active",
  },
  {
    id: "001",
    userid: "St-002",
    StaffName: "Dr. Ahmed Hassan",
    Jop: "Surgeon",
    AssignedComplex: "Nova Complex",
    status: "Active",
  },
  {
    id: "001",
    userid: "St-002",
    StaffName: "Dr. Ahmed Hassan",
    Jop: "Surgeon",
    AssignedComplex: "Nova Complex",
    status: "Active",
  },
  {
    id: "001",
    userid: "St-002",
    StaffName: "Dr. Ahmed Hassan",
    Jop: "Surgeon",
    AssignedComplex: "Nova Complex",
    status: "Active",
  },
  {
    id: "001",
    userid: "St-002",
    StaffName: "Dr. Ahmed Hassan",
    Jop: "Surgeon",
    AssignedComplex: "Nova Complex",
    status: "Active",
  },
  {
    id: "001",
    userid: "St-002",
    StaffName: "Dr. Ahmed Hassan",
    Jop: "Surgeon",
    AssignedComplex: "Nova Complex",
    status: "Active",
  },
  {
    id: "001",
    userid: "St-002",
    StaffName: "Dr. Ahmed Hassan",
    Jop: "Surgeon",
    AssignedComplex: "Nova Complex",
    status: "Active",
  },
  {
    id: "001",
    userid: "St-002",
    StaffName: "Dr. Ahmed Hassan",
    Jop: "Surgeon",
    AssignedComplex: "Nova Complex",
    status: "Active",
  },
  {
    id: "001",
    userid: "St-002",
    StaffName: "Dr. Ahmed Hassan",
    Jop: "Surgeon",
    AssignedComplex: "Nova Complex",
    status: "Active",
  }

];


export const ViewStaffMembersList = (): JSX.Element => {
  const { local, handleLanguageClick } = useLanguage();
  const [Show, setShow] = useState("show");
  const [status, setStatus] = useState("status");
  const [num, setNum] = useState("10");
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);
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
                  {t("Staff")}
                </h1>
                <p className="text-xs text-on-surface-primary">
                  {t("View Staff Members List")}
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
                  {t("Staff")}
                </h1>
                <p className="text-sm md:text-base text-on-surface-primary">
                  {t("View Staff Members List")}
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
                  <div className="text-sm text-on-surface-tertiary">
                    {t("Admin")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>



        <Card className="flex flex-col h-full items-start gap-5 p-[20px] pr-0 relative w-full rounded-2xl overflow-hidden bg-background-secondary">
          <CardContent className="w-full h-full flex flex-col">
            <div
              className={`w-full h-screen ${local === "ar" ? "pl-[20px]" : "pr-[20px]"
                } `}
            >

              <div
                className="flex justify-between w-full h-[40px] items-center"
                dir={local === "ar" ? "rtl" : "ltr"}
              >
                <div className="inline-flex items-center gap-2.5">
                  <form className="relative flex items-center">
                    <SearchIcon className=" w-[min(100%,16px)] h-[min(100%,16px)]  absolute top-[13px] left-[8px]" />
                    <input
                      type="search"
                      placeholder={t("Search for a user id , staff name ..")}
                      className="placeholder:text-[clamp(12px,2vw,12px)] text-[11px] bg-background-primary pl-[30px] py-[8px] rounded-[16px]  w-[160px] h-[32px]     /* موبايل */
  sm:w-[170px] sm:h-[34px]  /* شاشات ≥ 640px */
    md:w-[200px] md:h-[38px]  /* شاشات ≥ 768px */
    lg:w-[224px] lg:h-[40px]  border-0 px-4   outline-none"
                    />
                  </form>

                  <Select
                    dir={local === "ar" ? "rtl" : "ltr"}
                    value={status}
                    onValueChange={(value) => setStatus(value)}
                  >
                    <SelectTrigger className="inline-flex items-center gap-0.5 px-2.5 py-1.5 bg-secondary-light rounded-[20px] h-auto w-fit">
                      <SelectValue>
                        <span className="font-lato font-medium  text-[clamp(9px,2vw,14px)] text-text-primary">
                          {t(`status.${status}`)}
                        </span>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="status" disabled>
                        {t("status.status")}
                      </SelectItem>
                      <SelectItem value="active">{t("status.active")}</SelectItem>
                      <SelectItem value="inactive">
                        {t("status.inactive")}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>




              <div
                className="flex flex-col flex-grow rounded-lg items-start gap-5 pt-4 pr-[10px] relative w-full overflow-hidden"
                dir={local === "ar" ? "rtl" : "ltr"}
              >
                {/* حاوية سكرول أفقي */}
                <div className="w-full overflow-x-auto">
                  {/* حاوية سكرول رأسي */}
                  <div
                    className="overflow-y-auto rounded-lg"
                    style={{ height: "calc(100vh - 78px - 200px)" }}
                  >
                    <table className="table-auto w-full min-w-[700px] text-center border-collapse">
                      <thead className="sticky top-0 z-10 bg-background-primary border-b border-border-light">
                        <tr className="h-[56px]">
                          <td className="font-lato font-semibold text-[clamp(12px,2vw,12px)]  text-text-primary">
                            {t("No.")}
                          </td>
                          <td className="font-lato font-semibold text-[clamp(12px,2vw,12px)]  text-text-primary">
                            {t("User ID")}
                          </td>
                          <td className="font-lato font-semibold text-[clamp(12px,2vw,12px)]  text-text-primary">
                            {t("Staff Member’s Name")}
                          </td>
                          <td className="font-lato font-semibold text-[clamp(12px,2vw,12px)]  text-text-primary">
                            {t("Job title")}
                          </td>
                          <td className="font-lato font-semibold text-[clamp(12px,2vw,12px)]  text-text-primary">
                            {t("Assigned Complex")}
                          </td>
                          <td className="font-lato w-[80px] font-semibold text-[clamp(12px,2vw,12px)]  text-text-primary">
                            {t("Status")}
                          </td>
                          <td className="font-lato font-semibold text-[clamp(14px,2vw,16px)]  text-text-primary">
                            {t("Actions")}
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        {userData.map((user, index) => (
                          <tr
                            key={index}
                            className="h-[78px] bg-background-primary hover:bg-secondary-light border-b border-border-light whitespace-nowrap cursor-pointer"
                            onClick={() =>
                              (window.location.href = `/ViewStaffList/View Staff Details?id=${user.id}`)
                            } // 👈 كل السطر قابل للضغط
                          >
                            <td className="font-lato font-normal text-[clamp(12px,2vw,12px)]">
                              {user.id}
                            </td>
                            <td className="font-lato text-[clamp(12px,2vw,12px)]">{user.userid}</td>
                            <td className="font-lato font-normal text-[clamp(12px,2vw,12px)]">
                              {user.StaffName}
                            </td>
                            <td className="font-lato font-normal  text-[clamp(12px,2vw,12px)]">
                              {user.Jop}
                            </td>
                            <td className="font-lato font-normal  text-[clamp(12px,2vw,12px)]">
                              {user.AssignedComplex}
                            </td>
                            <td className="w-[160px]">
                              <Badge className="bg-secondary-light text-secondary-dark rounded-[20px] w-[92px] justify-center">
                                {t("Active")}
                              </Badge>
                            </td>
                            <td>
                              <Link to="/ViewStaffList/View Staff Details/EditStaffDetails">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="p-2.5 rounded-lg"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <img src="./edit-01.svg" alt="edit" className="w-[15px] h-[15px]" />
                                </Button>
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
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


            </div>
          </CardContent>
        </Card>
      </div></div>

  );
};
