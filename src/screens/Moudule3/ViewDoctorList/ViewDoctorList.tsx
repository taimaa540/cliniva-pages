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
} from "../../../components/ui/pagination";
import { Badge } from "../../../components/ui/badge";
import { useState } from "react";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { SideBar } from "../../CommonComponents/SideBarPlan2";

const userData = [
  {
    id: "001",
    userId: "US-001",
    DoctorsName: "Dr. Ahmed Hassan",
    Specialities: "Surgeon",
    AssignedComplex: "Nova Complex",
    status: "Active",
  },
  {
    id: "001",
    userId: "US-001",
    DoctorsName: "Dr. Ahmed Hassan",
    Specialities: "Surgeon",
    AssignedComplex: "Nova Complex",
    status: "Active",
  },
  {
    id: "001",
    userId: "US-001",
    DoctorsName: "Dr. Ahmed Hassan",
    Specialities: "Surgeon",
    AssignedComplex: "Nova Complex",
    status: "Active",
  },
  {
    id: "001",
    userId: "US-001",
    DoctorsName: "Dr. Ahmed Hassan",
    Specialities: "Surgeon",
    AssignedComplex: "Nova Complex",
    status: "Active",
  },
  {
    id: "001",
    userId: "US-001",
    DoctorsName: "Dr. Ahmed Hassan",
    Specialities: "Surgeon",
    AssignedComplex: "Nova Complex",
    status: "Active",
  },
  {
    id: "001",
    userId: "US-001",
    DoctorsName: "Dr. Ahmed Hassan",
    Specialities: "Surgeon",
    AssignedComplex: "Nova Complex",
    status: "Active",
  },
  {
    id: "001",
    userId: "US-001",
    DoctorsName: "Dr. Ahmed Hassan",
    Specialities: "Surgeon",
    AssignedComplex: "Nova Complex",
    status: "Active",
  },
  {
    id: "001",
    userId: "US-001",
    DoctorsName: "Dr. Ahmed Hassan",
    Specialities: "Surgeon",
    AssignedComplex: "Nova Complex",
    status: "Active",
  },
  {
    id: "001",
    userId: "US-001",
    DoctorsName: "Dr. Ahmed Hassan",
    Specialities: "Surgeon",
    AssignedComplex: "Nova Complex",
    status: "Active",
  },
  {
    id: "0001",
    userId: "US-001",
    DoctorsName: "Dr. Ahmed Hassan",
    Specialities: "Surgeon",
    AssignedComplex: "Nova Complex",
    status: "Active",
  },
  {
    id: "0001",
    userId: "US-001",
    DoctorsName: "Dr. Ahmed Hassan",
    Specialities: "Surgeon",
    AssignedComplex: "Nova Complex",
    status: "Active",
  },
  {
    id: "0701",
    userId: "US-001",
    DoctorsName: "Dr. Ahmed Hassan",
    Specialities: "Surgeon",
    AssignedComplex: "Nova Complex",
    status: "Active",
  },
  {
    id: "0001",
    userId: "US-001",
    DoctorsName: "Dr. Ahmed Hassan",
    Specialities: "Surgeon",
    AssignedComplex: "Nova Complex",
    status: "Active",
  },
  {
    id: "0001",
    userId: "US-001",
    DoctorsName: "Dr. Ahmed Hassan",
    Specialities: "Surgeon",
    AssignedComplex: "Nova Complex",
    status: "Active",
  },
];
import { useNavigate } from "react-router-dom";
import { Header } from "../../CommonComponents/Header";

export const ViewDoctorList = (): JSX.Element => {
  const { local, handleLanguageClick } = useLanguage();

  const [status, setStatus] = useState("status");

  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);
  const navigate = useNavigate();
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
        handleDarkClick={() => {}}
        isOpen={showSidebar}
        onOpenSidebar={onOpenSidebar}
        onCloseSidebar={onCloseSidebar}
      />

      <div className="flex flex-col w-full overflow-hidden h-full items-start gap-4 py-4 pl-0 pr-5">
        <Header
          MainTitle="Doctors"
          SubTitle="View Doctors List"
          onOpenSidebar={onOpenSidebar}
        />
        <Card className="flex flex-col h-full items-start gap-5 p-[20px] pr-0 relative w-full rounded-2xl overflow-hidden bg-background-secondary">
          <CardContent className="w-full h-full flex flex-col">
            <div
              className={`w-full h-[866px] ${
                local === "ar" ? "pl-[20px]" : "pr-[20px]"
              } `}
            >
              <div
                className="flex justify-between w-full items-center mb-[20px]"
                dir={local === "ar" ? "rtl" : "ltr"}
              >
                <div className="inline-flex items-center gap-2.5 ">
                  <form className="relative flex  items-center">
                    <SearchIcon className=" w-[min(100%,16px)] h-[min(100%,16px)] absolute top-[13px] left-[8px]" />
                    <input
                      type="search"
                      placeholder={t("Search for a user id, doctor name ..")}
                      className="placeholder:text-[11px] text-[11px] bg-background-primary pl-[30px] rounded-[16px]     w-[160px] h-[32px]     /* موبايل */
  sm:w-[170px] sm:h-[34px]  /* شاشات ≥ 640px */
    md:w-[200px] md:h-[38px]  /* شاشات ≥ 768px */
    lg:w-[224px] lg:h-[40px]  border-0 px-4 py-2    outline-none focus:border-0"
                    />
                  </form>

                  <Select
                    dir={local === "ar" ? "rtl" : "ltr"}
                    value={status}
                    onValueChange={(value) => setStatus(value)}
                  >
                    <SelectTrigger className="inline-flex items-center gap-0.5 pl-2.5 pr-2 py-1.5 bg-secondary-light rounded-[20px] border-0 h-auto w-fit">
                      <SelectValue>
                        <span className="font-lato font-medium  leading-[100%] tracking-[0]  text-[clamp(9px,2vw,14px)] text-text-primary">
                          {t(`status.${status}`)}
                        </span>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="status" disabled>
                        {t("status.status")}
                      </SelectItem>
                      <SelectItem value="active">
                        {t("status.active")}
                      </SelectItem>
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
                        <tr className="h-[56px] bg-background-primary border-b border-border-light sticky top-0 z-10">
                          <th className="min-w-[60px] px-2 font-lato font-semibold text-[clamp(13px,2vw,14px)] leading-[130%] text-text-primary">
                            {t("No.")}
                          </th>
                          <th className="min-w-[100px] px-2  font-semibold text-[clamp(12px,2vw,12px)] leading-[130%] text-text-primary">
                            {t("User ID")}
                          </th>
                          <th className="min-w-[150px] px-2 font-lato font-semibold text-[clamp(12px,2vw,12px)] leading-[130%] text-text-primary">
                            {t("Doctor's Name")}
                          </th>
                          <th className="min-w-[90px] px-2 font-lato font-semibold text-[clamp(12px,2vw,12px)] leading-[130%] text-text-primary">
                            {t("Specialities")}
                          </th>
                          <th className="min-w-[150px] px-2 font-lato font-semibold text-[clamp(12px,2vw,12px)] leading-[130%] text-text-primary">
                            {t("Assigned Complex")}
                          </th>
                          <th className="min-w-[100px] px-2 font-lato font-semibold text-[clamp(12px,2vw,12px)] leading-[130%] text-text-primary">
                            {t("Status")}
                          </th>
                          <th className="min-w-[80px] px-2 font-lato font-semibold text-[clamp(12px,2vw,12px)] leading-[130%] text-text-primary">
                            {t("Actions")}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {userData.map((user, index) => (
                          <tr
                            key={index}
                            className="h-[78px] bg-background-primary hover:bg-secondary-light border-b border-border-light whitespace-nowrap"
                            onClick={(e) => {
                              navigate(
                                `/ViewDoctorList/ViewDoctorDetails?id=${user.id}`
                              );
                            }}
                          >
                            <td className="px-2 font-lato font-normal  text-[clamp(12px,2vw,12px)]">
                              {user.id}
                            </td>
                            <td className="px-2 font-lato text-[clamp(12px,2vw,12px)] ">
                              {user.userId}
                            </td>
                            <td className="px-2 font-lato font-normal text-[clamp(12px,2vw,12px)] ">
                              {user.DoctorsName}
                            </td>
                            <td className="px-2 font-lato font-normal  text-[clamp(12px,2vw,12px)] ">
                              {user.Specialities}
                            </td>
                            <td className="px-2 font-lato font-normal text-[clamp(12px,2vw,12px)]">
                              {user.AssignedComplex}
                            </td>
                            <td className="px-2 w-[160px]">
                              <Badge className="bg-secondary-light text-secondary-dark rounded-[20px] w-[92px] justify-center">
                                {t("Active")}
                              </Badge>
                            </td>
                            <td className="px-2">
                              <Link to="/ViewDoctorList/ViewDoctorDetails/EditDoctorDetials">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="p-2.5 rounded-lg"
                                  onClick={(e) => {
                                    e.stopPropagation(); // عشان ما يروح على view لما تضغط على row
                                    navigate(
                                      "/ViewDoctorList/ViewDoctorDetails/EditDoctorDetials",
                                      {
                                        state: {
                                          from: `/ViewDoctorList?=id${user.id}`,
                                        },
                                      }
                                    );
                                  }}
                                >
                                  <img
                                    src="./edit-01.svg"
                                    alt="edit"
                                    className="w-[15px] h-[15px]"
                                  />
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
              <div
                className="flex items-center justify-between p-4"
                dir={local === "ar" ? "rtl" : "ltr"}
              >
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
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z"
                                fill="#333"
                              />
                            </svg>
                          ) : (
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z"
                                fill="#333"
                              />
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
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z"
                                fill="#333"
                              />
                            </svg>
                          ) : (
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z"
                                fill="#333"
                              />
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
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M11.726 12L12.666 11.06L9.61268 8L12.666 4.94L11.726 4L7.72602 8L11.726 12Z"
                                fill="#333"
                              />
                              <path
                                d="M7.33344 12L8.27344 11.06L5.2201 8L8.27344 4.94L7.33344 4L3.33344 8L7.33344 12Z"
                                fill="#333"
                              />
                            </svg>
                          ) : (
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M4.27398 4L3.33398 4.94L6.38732 8L3.33398 11.06L4.27398 12L8.27398 8L4.27398 4Z"
                                fill="#333"
                              />
                              <path
                                d="M8.66656 4L7.72656 4.94L10.7799 8L7.72656 11.06L8.66656 12L12.6666 8L8.66656 4Z"
                                fill="#333"
                              />
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
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z"
                                fill="#333"
                              />
                            </svg>
                          ) : (
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z"
                                fill="#333"
                              />
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
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z"
                                fill="#333"
                              />
                            </svg>
                          ) : (
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z"
                                fill="#333"
                              />
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
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M4.27398 4L3.33398 4.94L6.38732 8L3.33398 11.06L4.27398 12L8.27398 8L4.27398 4Z"
                                fill="#333"
                              />
                              <path
                                d="M8.66656 4L7.72656 4.94L10.7799 8L7.72656 11.06L8.66656 12L12.6666 8L8.66656 4Z"
                                fill="#333"
                              />
                            </svg>
                          ) : (
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M11.726 12L12.666 11.06L9.61268 8L12.666 4.94L11.726 4L7.72602 8L11.726 12Z"
                                fill="#333"
                              />
                              <path
                                d="M7.33344 12L8.27344 11.06L5.2201 8L8.27344 4.94L7.33344 4L3.33344 8L7.33344 12Z"
                                fill="#333"
                              />
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
        </Card>{" "}
      </div>
    </div>
  );
};
