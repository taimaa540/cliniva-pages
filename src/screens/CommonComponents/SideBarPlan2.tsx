import { ChevronDownIcon, LogOutIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../components/ui/collapsible";
import TranslateIcon from "@mui/icons-material/Translate";
import { useAppContext } from "../../Context/ContextchooseSidbar";
import { ThemeToggle } from "../../components/theme/ThemeSwitcher";
import { Link } from "react-router-dom";

interface SideBarProps {
  local: string;
  handleDarkClick: () => void;
  handleLanguageClick: () => void;
  isOpen: boolean;
  onOpenSidebar: () => void;
  onCloseSidebar: () => void;
  isOpenAppointment: boolean;
  setIsOpen: (value: boolean) => void;
}

export const SideBar = ({
  isOpenAppointment,
  setIsOpen,
  local,
  handleLanguageClick,
  isOpen,
  onCloseSidebar,
}: SideBarProps) => {
  const { t, i18n } = useTranslation();
  const { selectedPlan } = useAppContext();
  // تغيير اللغة عند تحميل المكون
  useEffect(() => {
    i18n.changeLanguage(local);
  }, [local, i18n]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1060);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // الحالات الأساسية للسايد بار
  const [activeSection, setActiveSection] = useState<
    | "Users Management"
    | "Medical Facilities"
    | "Doctors & Staff"
    | "Services Management"
    | "Paitients Management"
    | "Appointments Management"
  >("Users Management");

  const [dropDown1IsActive, setDropDown1IsActive] = useState<
    "Complex Details" | "Clinics List"
  >("Complex Details");

  const [dropDown2IsActive, setDropDown2IsActive] = useState<
    "Staff List" | "Doctors List" | "Specialties List"
  >("Staff List");

  return (
    <>
      {!isOpenAppointment && (
        <nav
          className={`h-screen bg-background-primary flex flex-col fixed md:relative top-0   z-50  w-[230px] transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
          dir="ltr"
        >
          {/* زر اغلاق على الموبايل */}
          <div className="p-1  md:hidden flex justify-end">
            <button
              onClick={onCloseSidebar}
              className=" rounded-[16px] w-8 h-8 bg-secondary-light"
            >
              ✖
            </button>
          </div>

          {/* Header */}
          <header className="hidden md:flex  flex-col items-start gap-2.5 px-2 py-[9px] mt-4 ml-5 w-full">
            <div className="flex items-center gap-[7px] md:flex">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 13V15H15V0H13V1C13 7.62742 7.62742 13 1 13H0Z"
                  fill="#A5C8F2"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30 15H15V30H17.1322C18.0228 23.3156 23.3156 18.0228 30 17.1322V15Z"
                  fill="#83DFDF"
                />
              </svg>
              <h1 className="font-lato font-regular text-xl leading-[110%] text-text-primary tracking-[0]">
                Cliniva SYS
              </h1>
            </div>
          </header>

          {/* User Info + Theme + Language */}
          <header className="flex flex-row items-start gap-2.5 px-4 mt-3 w-full md:hidden">
            <div className="items-center gap-3 grid">
              <div className="inline-flex items-center w-[40px] h-[40px] bg-app-primary rounded-3xl" />
              <div className="flex-col items-start gap-1 inline-flex">
                <div className="text-[13px] w-24 font-bold text-on-surface-primary">
                  Anahera Jones
                </div>
                <div className="text-[11px] text-on-surface-tertiary">
                  {t("Admin")}
                </div>
              </div>
            </div>
            <div className="inline-flex gap-3 items-center px-4 pt-1">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                className={`p-2.5 ${
                  local === "ar" ? "bg-[green]" : "bg-secondary-light"
                } rounded-[20px] h-auto transition-all duration-[500ms] w-auto`}
                onClick={handleLanguageClick}
              >
                <TranslateIcon className="w-3 h-3" />
              </Button>
            </div>
          </header>

          {/* Main Navigation */}
          <main className="flex flex-col flex-1 items-center mt-5 p-[9px]">
            <section className="w-full space-y-2">
              {/* Users Management button - active state */}
              <Link to="/UserDesktop">
                <button
                  className={`flex items-center w-full h-[40px] gap-2 py-[10px] pl-[4px] ${
                    activeSection === "Users Management"
                      ? "text-background-primary bg-secondary-default"
                      : ""
                  } rounded justify-start`}
                  onClick={() => setActiveSection("Users Management")}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.16074 12.3374C9.9984 11.7798 10.6344 10.9674 10.9746 10.0203C11.3148 9.07325 11.3412 8.04185 11.0499 7.07862C10.7586 6.1154 10.165 5.27149 9.35702 4.67169C8.54899 4.07189 7.5694 3.74805 6.56309 3.74805C5.55678 3.74805 4.57718 4.07189 3.76916 4.67169C2.96114 5.27149 2.36759 6.1154 2.07628 7.07862C1.78498 8.04185 1.81139 9.07325 2.1516 10.0203C2.49182 10.9674 3.12777 11.7798 3.96543 12.3374C2.45019 12.8959 1.15614 13.9293 0.276369 15.2835C0.230132 15.3523 0.198015 15.4295 0.181886 15.5107C0.165757 15.592 0.165938 15.6756 0.182417 15.7568C0.198897 15.838 0.231347 15.915 0.277881 15.9836C0.324415 16.0521 0.384105 16.1107 0.453481 16.1559C0.522857 16.2012 0.600535 16.2322 0.682001 16.2472C0.763466 16.2621 0.847094 16.2607 0.928023 16.2431C1.00895 16.2255 1.08557 16.1919 1.15341 16.1444C1.22126 16.0969 1.27899 16.0364 1.32324 15.9664C1.89074 15.0935 2.66727 14.3763 3.58234 13.8798C4.4974 13.3833 5.522 13.1232 6.56309 13.1232C7.60418 13.1232 8.62878 13.3833 9.54384 13.8798C10.4589 14.3763 11.2354 15.0935 11.8029 15.9664C11.8946 16.1026 12.0362 16.1973 12.1971 16.23C12.3581 16.2626 12.5254 16.2307 12.6629 16.1409C12.8005 16.0512 12.8972 15.911 12.9321 15.7506C12.9671 15.5901 12.9375 15.4224 12.8498 15.2835C11.97 13.9293 10.676 12.8959 9.16074 12.3374ZM3.12559 8.43745C3.12559 7.75758 3.32719 7.09297 3.70491 6.52768C4.08263 5.96238 4.61949 5.52179 5.24761 5.26161C5.87573 5.00144 6.5669 4.93336 7.23371 5.066C7.90052 5.19864 8.51303 5.52603 8.99377 6.00677C9.47451 6.48751 9.8019 7.10002 9.93454 7.76683C10.0672 8.43363 9.9991 9.1248 9.73892 9.75292C9.47875 10.381 9.03815 10.9179 8.47286 11.2956C7.90757 11.6733 7.24296 11.8749 6.56309 11.8749C5.65172 11.8739 4.77798 11.5114 4.13355 10.867C3.48912 10.2226 3.12662 9.34881 3.12559 8.43745ZM19.5428 16.1484C19.4039 16.2389 19.2348 16.2706 19.0727 16.2365C18.9105 16.2023 18.7685 16.1052 18.6779 15.9664C18.1111 15.093 17.3347 14.3755 16.4194 13.8791C15.5042 13.3828 14.4792 13.1236 13.4381 13.1249C13.2723 13.1249 13.1134 13.0591 12.9961 12.9419C12.8789 12.8247 12.8131 12.6657 12.8131 12.4999C12.8131 12.3342 12.8789 12.1752 12.9961 12.058C13.1134 11.9408 13.2723 11.8749 13.4381 11.8749C13.9443 11.8745 14.4442 11.7622 14.902 11.5461C15.3598 11.3301 15.7642 11.0156 16.0864 10.6251C16.4086 10.2346 16.6405 9.77779 16.7656 9.28727C16.8908 8.79676 16.9061 8.28466 16.8104 7.78756C16.7146 7.29047 16.5103 6.82064 16.212 6.41166C15.9137 6.00268 15.5287 5.66464 15.0846 5.42169C14.6405 5.17874 14.1482 5.03688 13.6429 5.00625C13.1376 4.97562 12.6317 5.05696 12.1615 5.24448C12.0849 5.27762 12.0023 5.29506 11.9188 5.29577C11.8353 5.29647 11.7525 5.28043 11.6753 5.24859C11.598 5.21675 11.528 5.16975 11.4692 5.11038C11.4105 5.05101 11.3642 4.98046 11.3332 4.90291C11.3022 4.82536 11.287 4.74238 11.2886 4.65887C11.2902 4.57536 11.3085 4.49302 11.3425 4.41671C11.3765 4.3404 11.4254 4.27167 11.4863 4.21458C11.5473 4.15749 11.6191 4.1132 11.6975 4.08432C12.7736 3.65514 13.9706 3.6397 15.0574 4.04097C16.1443 4.44224 17.044 5.23179 17.5831 6.2573C18.1222 7.28282 18.2623 8.47164 17.9766 9.59442C17.6909 10.7172 16.9995 11.6944 16.0357 12.3374C17.551 12.8959 18.845 13.9293 19.7248 15.2835C19.8153 15.4224 19.847 15.5915 19.8129 15.7537C19.7787 15.9158 19.6816 16.0578 19.5428 16.1484Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span
                    className={`font-lato font-semibold text-xs leading-[130%] tracking-[0] ${
                      activeSection === "Users Management"
                        ? "text-background-primary font-bold"
                        : "text-text-secondary"
                    } `}
                  >
                    {t("Users Management")}
                  </span>
                </button>
              </Link>

              <Collapsible open={activeSection === "Medical Facilities"}>
                <CollapsibleTrigger className="w-full">
                  <button
                    onClick={() => setActiveSection("Medical Facilities")}
                    className={`flex items-center justify-between w-full h-[40px] ${
                      activeSection === "Medical Facilities"
                        ? "text-background-primary bg-secondary-default"
                        : ""
                    } py-[10px] pl-[4px] rounded justify-start`}
                  >
                    <div className="flex items-center gap-[8px]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.24805 8H6.49805V9.3125H8.24805V8ZM6.49805 10.1875H8.24805V11.5H6.49805V10.1875ZM8.24805 12.375H6.49805V13.6875H8.24805V12.375ZM9.12305 8H10.873V9.3125H9.12305V8ZM10.873 10.1875H9.12305V11.5H10.873V10.1875ZM9.12305 12.375H10.873V13.6875H9.12305V12.375ZM13.498 8H11.748V9.3125H13.498V8ZM11.748 10.1875H13.498V11.5H11.748V10.1875ZM13.498 12.375H11.748V13.6875H13.498V12.375Z"
                          fill="currentColor"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.9375 1.875C6.9375 1.64294 7.02969 1.42038 7.19378 1.25628C7.35788 1.09219 7.58044 1 7.8125 1H12.1875C12.4196 1 12.6421 1.09219 12.8062 1.25628C12.9703 1.42038 13.0625 1.64294 13.0625 1.875H16.5625V2.75H15.6875V17.625H16.5625C16.6785 17.625 16.7898 17.6711 16.8719 17.7531C16.9539 17.8352 17 17.9465 17 18.0625C17 18.1785 16.9539 18.2898 16.8719 18.3719C16.7898 18.4539 16.6785 18.5 16.5625 18.5H3.4375C3.32147 18.5 3.21019 18.4539 3.12814 18.3719C3.04609 18.2898 3 18.1785 3 18.0625C3 17.9465 3.04609 17.8352 3.12814 17.7531C3.21019 17.6711 3.32147 17.625 3.4375 17.625H4.3125V2.75H3.875V1.875H6.9375ZM6.9375 4.0625H5.1875V17.625H6.9375V15.875H6.5V15H13.5V15.875H13.0625V17.625H14.8125V4.0625H13.0625V6.25C13.0625 6.48206 12.9703 6.70462 12.8062 6.86872C12.6421 7.03281 12.4196 7.125 12.1875 7.125H7.8125C7.58044 7.125 7.35788 7.03281 7.19378 6.86872C7.02969 6.70462 6.9375 6.48206 6.9375 6.25V4.0625ZM6.9375 3.1875H5.1875V2.75H6.9375V3.1875ZM7.8125 1.875H12.1875V6.25H7.8125V1.875ZM9.5625 17.625H7.8125V15.875H9.5625V17.625ZM12.1875 17.625V15.875H10.4375V17.625H12.1875ZM14.8125 3.1875V2.75H13.0625V3.1875H14.8125Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span
                        className={`font-lato font-semibold text-xs leading-[130%] tracking-[0] ${
                          activeSection === "Medical Facilities"
                            ? "text-background-primary font-bold"
                            : "text-text-secondary"
                        }`}
                      >
                        {t("Medical Facilities")}
                      </span>
                    </div>
                    <ChevronDownIcon
                      style={{ width: "14px", height: "14px" }}
                      className={`transition-transform duration-200 ${
                        activeSection === "Medical Facilities"
                          ? "rotate-180"
                          : "rotate-0"
                      }`}
                    />
                  </button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  {selectedPlan === "Company" && (
                    <div className="w-[205px] h-fit rounded-b-[4px] rounded-l-[4px] bg-background-secondary">
                      <Link to="/ElementViewCompany">
                        <button
                          onClick={() => setDropDown1IsActive("Clinics List")}
                          className={`font-lato font-regular text-xs ${
                            dropDown1IsActive === "Clinics List"
                              ? "text-secondary-default"
                              : "text-text-secondary"
                          } leading-[130%] tracking-[0] px-[28px] py-[12px] h-[40px]`}
                        >
                          Company Details
                        </button>
                      </Link>
                      <Link to="/ViewListOfComplex">
                        <button
                          onClick={() =>
                            setDropDown1IsActive("Complex Details")
                          }
                          className={`font-lato font-regular text-xs ${
                            dropDown1IsActive === "Complex Details"
                              ? "text-secondary-default"
                              : "text-text-secondary"
                          } leading-[130%] tracking-[0] px-[28px] py-[12px] h-[40px]`}
                        >
                          Complex List
                        </button>
                      </Link>
                      <Link to="/ViewListOfClinics">
                        <button
                          onClick={() => setDropDown1IsActive("Clinics List")}
                          className={`font-lato font-regular text-xs ${
                            dropDown1IsActive === "Clinics List"
                              ? "text-secondary-default"
                              : "text-text-secondary"
                          } leading-[130%] tracking-[0] px-[28px] py-[12px] h-[40px]`}
                        >
                          Clinics List
                        </button>
                      </Link>
                    </div>
                  )}
                  {selectedPlan === "Complex" && (
                    <div className="w-[205px] h-fit rounded-b-[4px] rounded-l-[4px] bg-background-secondary">
                      <Link to="/ViewListOfComplex">
                        <button
                          onClick={() =>
                            setDropDown1IsActive("Complex Details")
                          }
                          className={`font-lato font-regular text-xs ${
                            dropDown1IsActive === "Complex Details"
                              ? "text-secondary-default"
                              : "text-text-secondary"
                          } leading-[130%] tracking-[0] px-[28px] py-[12px] h-[40px]`}
                        >
                          Complex List
                        </button>
                      </Link>
                      <Link to="/ViewListOfClinics">
                        <button
                          onClick={() => setDropDown1IsActive("Clinics List")}
                          className={`font-lato font-regular text-xs ${
                            dropDown1IsActive === "Clinics List"
                              ? "text-secondary-default"
                              : "text-text-secondary"
                          } leading-[130%] tracking-[0] px-[28px] py-[12px] h-[40px]`}
                        >
                          Clinics List
                        </button>
                      </Link>
                    </div>
                  )}
                  {selectedPlan === "Clinic" && (
                    <div className="w-[205px] h-fit rounded-b-[4px] rounded-l-[4px] bg-background-secondary">
                      <Link to="/ViewListOfClinics">
                        <button
                          onClick={() => setDropDown1IsActive("Clinics List")}
                          className={`font-lato font-regular text-xs ${
                            dropDown1IsActive === "Clinics List"
                              ? "text-secondary-default"
                              : "text-text-secondary"
                          } leading-[130%] tracking-[0] px-[28px] py-[12px] h-[40px]`}
                        >
                          Clinics List
                        </button>
                      </Link>
                    </div>
                  )}
                </CollapsibleContent>
              </Collapsible>

              <Collapsible open={activeSection === "Doctors & Staff"}>
                <CollapsibleTrigger className="w-full">
                  <button
                    onClick={() => setActiveSection("Doctors & Staff")}
                    className={`flex items-center w-full h-[40px] ${
                      activeSection === "Doctors & Staff"
                        ? "text-background-primary bg-secondary-default"
                        : ""
                    } py-[10px] pl-[4px] rounded justify-between`}
                  >
                    <div className="flex items-center gap-[8px]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.00075 15V13.5C9.00075 12.086 9.00075 11.3785 8.56121 10.9395C8.12217 10.5 7.4146 10.5 6.00047 10.5L5.00038 11.5L4.00028 10.5C2.58615 10.5 1.87858 10.5 1.43954 10.9395C1 11.3785 1 12.086 1 13.5V15M7.00056 10.5V13.25"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.25009 10.5V12.5M3.25009 12.5C3.51534 12.5 3.76971 12.6054 3.95727 12.7929C4.14482 12.9804 4.25019 13.2348 4.25019 13.5V14M3.25009 12.5C2.98485 12.5 2.73047 12.6054 2.54292 12.7929C2.35537 12.9804 2.25 13.2348 2.25 13.5V14M6.75042 7.25V6.75C6.75042 6.52019 6.70515 6.29262 6.6172 6.0803C6.52925 5.86798 6.40033 5.67507 6.23781 5.51256C6.07529 5.35006 5.88236 5.22116 5.67002 5.13321C5.45768 5.04527 5.23009 5 5.00026 5C4.77042 5 4.54284 5.04527 4.3305 5.13321C4.11816 5.22116 3.92522 5.35006 3.76271 5.51256C3.60019 5.67507 3.47127 5.86798 3.38332 6.0803C3.29536 6.29262 3.25009 6.52019 3.25009 6.75V7.25C3.25009 7.47981 3.29536 7.70738 3.38332 7.9197C3.47127 8.13202 3.60019 8.32493 3.76271 8.48744C3.92522 8.64994 4.11816 8.77884 4.3305 8.86679C4.54284 8.95474 4.77042 9 5.00026 9C5.23009 9 5.45768 8.95474 5.67002 8.86679C5.88236 8.77884 6.07529 8.64994 6.23781 8.48744C6.40033 8.32493 6.52925 8.13202 6.6172 7.9197C6.70515 7.70738 6.75042 7.47981 6.75042 7.25ZM7.37548 13.625C7.37548 13.7245 7.33597 13.8198 7.26564 13.8902C7.1953 13.9605 7.09991 14 7.00045 14C6.90098 14 6.80559 13.9605 6.73526 13.8902C6.66492 13.8198 6.62541 13.7245 6.62541 13.625C6.62541 13.5255 6.66492 13.4302 6.73526 13.3598C6.80559 13.2895 6.90098 13.25 7.00045 13.25C7.09991 13.25 7.1953 13.2895 7.26564 13.3598C7.33597 13.4302 7.37548 13.5255 7.37548 13.625Z"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11 15V14.5C11 13.565 11 13.098 11.201 12.75C11.3327 12.522 11.522 12.3326 11.7501 12.201C12.0981 12 12.5651 12 13.5002 12L15.0004 14L16.5005 12C17.4356 12 17.9026 12 18.2507 12.201C18.4787 12.3326 18.6681 12.522 18.7997 12.75C19.0008 13.098 19.0008 13.565 19.0008 14.5V15M16.9691 8L17.4781 5.932C17.5946 5.4585 17.2421 5 16.762 5H13.2387C12.7587 5 12.4061 5.4585 12.5226 5.932L13.0317 8M16.9691 8V9C16.9691 10.1045 16.088 11 15.0004 11C13.9128 11 13.0317 10.1045 13.0317 9V8M16.9691 8H13.0317"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span
                        className={`font-lato font-semibold text-xs leading-[130%] tracking-[0] ${
                          activeSection === "Doctors & Staff"
                            ? "text-background-primary font-bold"
                            : "text-text-secondary"
                        }`}
                      >
                        {t("Doctors & Staff")}
                      </span>
                    </div>
                    <ChevronDownIcon
                      style={{ width: "14px", height: "14px" }}
                      className={`transition-transform duration-200 ${
                        activeSection === "Doctors & Staff"
                          ? "rotate-180"
                          : "rotate-0"
                      }`}
                    />
                  </button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="w-[205px] h-[124px] bg-background-secondary">
                    <Link to="/ViewStaffList">
                      <button
                        onClick={() => setDropDown2IsActive("Staff List")}
                        className={`font-lato font-regular text-xs ${
                          dropDown2IsActive === "Staff List"
                            ? "text-secondary-default"
                            : "text-text-secondary"
                        }  leading-[130%] tracking-[0] px-[28px] py-[12px] h-[40px]`}
                      >
                        Staff List
                      </button>{" "}
                    </Link>{" "}
                    <Link to="/ViewDoctorList">
                      <button
                        onClick={() => setDropDown2IsActive("Doctors List")}
                        className={`font-lato font-regular text-xs ${
                          dropDown2IsActive === "Doctors List"
                            ? "text-secondary-default"
                            : "text-text-secondary"
                        } leading-[130%] tracking-[0] px-[28px] py-[12px] h-[40px]`}
                      >
                        Doctors List
                      </button>
                    </Link>
                    <Link to="/ViewSpecialtiesList">
                      <button
                        onClick={() => setDropDown2IsActive("Specialties List")}
                        className={`font-lato font-regular text-xs ${
                          dropDown2IsActive === "Specialties List"
                            ? "text-secondary-default"
                            : "text-text-secondary"
                        } leading-[130%] tracking-[0] px-[28px] py-[12px] h-[40px]`}
                      >
                        Specialties List
                      </button>
                    </Link>
                  </div>
                </CollapsibleContent>
              </Collapsible>
              <Link to="/ServicesList">
                <button
                  onClick={() => setActiveSection("Services Management")}
                  className={`flex items-center w-full h-[40px] gap-2 py-[10px] pl-[4px] ${
                    activeSection === "Services Management"
                      ? "text-background-primary bg-secondary-default"
                      : ""
                  } rounded justify-start`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.1802 13.0943C19.4727 8.9193 18.5835 4.7793 16.2185 3.32847C13.9835 1.95763 12.0327 2.51013 10.861 3.39013L9.99933 4.03513M16.1802 13.0943C15.3902 14.0968 14.3593 15.1001 13.0493 16.0693C11.7618 17.0235 11.1177 17.5001 9.99933 17.5001C8.881 17.5001 8.23767 17.0235 6.94933 16.0693C0.184333 11.0626 0.847667 5.12763 3.78017 3.32847C6.01517 1.95763 7.966 2.51013 9.13767 3.39013L9.99933 4.03513M16.1802 13.0943L11.576 7.87097C11.4846 7.76762 11.3595 7.70002 11.2229 7.68018C11.0864 7.66035 10.9472 7.68956 10.8302 7.76263L9.0085 8.90097C8.65126 9.12697 8.22046 9.20606 7.80624 9.1217C7.39202 9.03734 7.02647 8.79605 6.78608 8.44833C6.5457 8.10061 6.44909 7.6734 6.51648 7.25608C6.58388 6.83876 6.81004 6.46368 7.14767 6.2093L9.99933 4.03513"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span
                    className={`font-lato font-semibold text-xs leading-[130%] tracking-[0] ${
                      activeSection === "Services Management"
                        ? "text-background-primary font-bold"
                        : "text-text-secondary"
                    }`}
                  >
                    {t("Services Management")}
                  </span>
                </button>
              </Link>
              <Link to="/ViewLastOfPatient">
                <button
                  onClick={() => setActiveSection("Paitients Management")}
                  className={`flex items-center w-full h-[40px] gap-2 py-[10px] pl-[4px] ${
                    activeSection === "Paitients Management"
                      ? "text-background-primary bg-secondary-default"
                      : ""
                  } rounded justify-start`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.25 2.5H3.75C3.41848 2.5 3.10054 2.6317 2.86612 2.86612C2.6317 3.10054 2.5 3.41848 2.5 3.75V16.25C2.5 16.5815 2.6317 16.8995 2.86612 17.1339C3.10054 17.3683 3.41848 17.5 3.75 17.5H16.25C16.5815 17.5 16.8995 17.3683 17.1339 17.1339C17.3683 16.8995 17.5 16.5815 17.5 16.25V3.75C17.5 3.41848 17.3683 3.10054 17.1339 2.86612C16.8995 2.6317 16.5815 2.5 16.25 2.5ZM7.5 9.375C7.5 8.88055 7.64662 8.3972 7.92133 7.98607C8.19603 7.57495 8.58648 7.25452 9.04329 7.0653C9.50011 6.87608 10.0028 6.82657 10.4877 6.92304C10.9727 7.0195 11.4181 7.2576 11.7678 7.60723C12.1174 7.95686 12.3555 8.40232 12.452 8.88727C12.5484 9.37223 12.4989 9.87489 12.3097 10.3317C12.1205 10.7885 11.8 11.179 11.3889 11.4537C10.9778 11.7284 10.4945 11.875 10 11.875C9.33696 11.875 8.70107 11.6116 8.23223 11.1428C7.76339 10.6739 7.5 10.038 7.5 9.375ZM5.36484 16.25C5.68467 15.4626 6.19886 14.7691 6.85938 14.2344C7.74868 13.5165 8.85709 13.1249 10 13.1249C11.1429 13.1249 12.2513 13.5165 13.1406 14.2344C13.8011 14.7691 14.3153 15.4626 14.6352 16.25H5.36484ZM16.25 16.25H15.9633C15.6854 15.3654 15.2139 14.5538 14.5831 13.8741C13.9522 13.1945 13.1779 12.664 12.3164 12.3211C12.9297 11.8393 13.3776 11.1783 13.5976 10.4301C13.8177 9.68189 13.799 8.88367 13.5441 8.14658C13.2892 7.40949 12.8109 6.7702 12.1757 6.31772C11.5404 5.86523 10.7799 5.62207 10 5.62207C9.22009 5.62207 8.45958 5.86523 7.82435 6.31772C7.18912 6.7702 6.71077 7.40949 6.4559 8.14658C6.20102 8.88367 6.18231 9.68189 6.40236 10.4301C6.6224 11.1783 7.07027 11.8393 7.68359 12.3211C6.82207 12.664 6.04776 13.1945 5.41693 13.8741C4.78611 14.5538 4.31462 15.3654 4.03672 16.25H3.75V3.75H16.25V16.25Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span
                    className={`font-lato font-semibold text-xs leading-[130%] tracking-[0] ${
                      activeSection === "Paitients Management"
                        ? "text-background-primary font-bold "
                        : "text-text-secondary"
                    }`}
                  >
                    {t("Paitients Management")}
                  </span>
                </button>
              </Link>
              <Link to="/Appointments">
                <button
                  onClick={() => setActiveSection("Appointments Management")}
                  className={`flex font-lato font-semibold   w-full h-[40px]  py-[10px] pl-[4px] items-center gap-2 text-xs leading-[130%] tracking-[0] ${
                    activeSection === "Appointments Management"
                      ? "text-background-primary font-bold"
                      : "text-text-secondary"
                  }`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.25 2.5H14.375V1.875C14.375 1.70924 14.3092 1.55027 14.1919 1.43306C14.0747 1.31585 13.9158 1.25 13.75 1.25C13.5842 1.25 13.4253 1.31585 13.3081 1.43306C13.1908 1.55027 13.125 1.70924 13.125 1.875V2.5H6.875V1.875C6.875 1.70924 6.80915 1.55027 6.69194 1.43306C6.57473 1.31585 6.41576 1.25 6.25 1.25C6.08424 1.25 5.92527 1.31585 5.80806 1.43306C5.69085 1.55027 5.625 1.70924 5.625 1.875V2.5H3.75C3.41848 2.5 3.10054 2.6317 2.86612 2.86612C2.6317 3.10054 2.5 3.41848 2.5 3.75V16.25C2.5 16.5815 2.6317 16.8995 2.86612 17.1339C3.10054 17.3683 3.41848 17.5 3.75 17.5H16.25C16.5815 17.5 16.8995 17.3683 17.1339 17.1339C17.3683 16.8995 17.5 16.5815 17.5 16.25V3.75C17.5 3.41848 17.3683 3.10054 17.1339 2.86612C16.8995 2.6317 16.5815 2.5 16.25 2.5ZM5.625 3.75V4.375C5.625 4.54076 5.69085 4.69973 5.80806 4.81694C5.92527 4.93415 6.08424 5 6.25 5C6.41576 5 6.57473 4.93415 6.69194 4.81694C6.80915 4.69973 6.875 4.54076 6.875 4.375V3.75H13.125V4.375C13.125 4.54076 13.1908 4.69973 13.3081 4.81694C13.4253 4.93415 13.5842 5 13.75 5C13.9158 5 14.0747 4.93415 14.1919 4.81694C14.3092 4.69973 14.375 4.54076 14.375 4.375V3.75H16.25V6.25H3.75V3.75H5.625ZM16.25 16.25H3.75V7.5H16.25V16.25ZM10.9375 10.3125C10.9375 10.4979 10.8825 10.6792 10.7795 10.8333C10.6765 10.9875 10.5301 11.1077 10.3588 11.1786C10.1875 11.2496 9.99896 11.2682 9.8171 11.232C9.63525 11.1958 9.4682 11.1065 9.33709 10.9754C9.20598 10.8443 9.11669 10.6773 9.08051 10.4954C9.04434 10.3135 9.06291 10.125 9.13386 9.95373C9.20482 9.78243 9.32498 9.63601 9.47915 9.533C9.63332 9.42998 9.81458 9.375 10 9.375C10.2486 9.375 10.4871 9.47377 10.6629 9.64959C10.8387 9.8254 10.9375 10.0639 10.9375 10.3125ZM14.375 10.3125C14.375 10.4979 14.32 10.6792 14.217 10.8333C14.114 10.9875 13.9676 11.1077 13.7963 11.1786C13.625 11.2496 13.4365 11.2682 13.2546 11.232C13.0727 11.1958 12.9057 11.1065 12.7746 10.9754C12.6435 10.8443 12.5542 10.6773 12.518 10.4954C12.4818 10.3135 12.5004 10.125 12.5714 9.95373C12.6423 9.78243 12.7625 9.63601 12.9167 9.533C13.0708 9.42998 13.2521 9.375 13.4375 9.375C13.6861 9.375 13.9246 9.47377 14.1004 9.64959C14.2762 9.8254 14.375 10.0639 14.375 10.3125ZM7.5 13.4375C7.5 13.6229 7.44502 13.8042 7.342 13.9583C7.23899 14.1125 7.09257 14.2327 6.92127 14.3036C6.74996 14.3746 6.56146 14.3932 6.3796 14.357C6.19775 14.3208 6.0307 14.2315 5.89959 14.1004C5.76848 13.9693 5.67919 13.8023 5.64301 13.6204C5.60684 13.4385 5.62541 13.25 5.69636 13.0787C5.76732 12.9074 5.88748 12.761 6.04165 12.658C6.19582 12.555 6.37708 12.5 6.5625 12.5C6.81114 12.5 7.0496 12.5988 7.22541 12.7746C7.40123 12.9504 7.5 13.1889 7.5 13.4375ZM10.9375 13.4375C10.9375 13.6229 10.8825 13.8042 10.7795 13.9583C10.6765 14.1125 10.5301 14.2327 10.3588 14.3036C10.1875 14.3746 9.99896 14.3932 9.8171 14.357C9.63525 14.3208 9.4682 14.2315 9.33709 14.1004C9.20598 13.9693 9.11669 13.8023 9.08051 13.6204C9.04434 13.4385 9.06291 13.25 9.13386 13.0787C9.20482 12.9074 9.32498 12.761 9.47915 12.658C9.63332 12.555 9.81458 12.5 10 12.5C10.2486 12.5 10.4871 12.5988 10.6629 12.7746C10.8387 12.9504 10.9375 13.1889 10.9375 13.4375ZM14.375 13.4375C14.375 13.6229 14.32 13.8042 14.217 13.9583C14.114 14.1125 13.9676 14.2327 13.7963 14.3036C13.625 14.3746 13.4365 14.3932 13.2546 14.357C13.0727 14.3208 12.9057 14.2315 12.7746 14.1004C12.6435 13.9693 12.5542 13.8023 12.518 13.6204C12.4818 13.4385 12.5004 13.25 12.5714 13.0787C12.6423 12.9074 12.7625 12.761 12.9167 12.658C13.0708 12.555 13.2521 12.5 13.4375 12.5C13.6861 12.5 13.9246 12.5988 14.1004 12.7746C14.2762 12.9504 14.375 13.1889 14.375 13.4375Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span
                    className={`font-lato font-semibold items-start text-xs leading-[130%] tracking-[0] ${
                      activeSection === "Appointments Management"
                        ? "text-background-primary font-bold"
                        : "text-text-secondary"
                    }`}
                  >
                    {t("Appointments Management")}
                  </span>
                </button>
              </Link>
            </section>

            {/* Logout Button */}
            <Button
              variant="ghost"
              className="mt-auto mb-4 w-[183px] h-11 gap-3 pl-4 pr-2 py-3 bg-bg rounded-[14px] justify-start"
            >
              <LogOutIcon className="w-5 h-5" />
              <span className="font-btn-14px-medium text-on-surface-secondary">
                {t("Logout")}
              </span>
              <ChevronDownIcon className="w-3.5 h-3.5 ml-[30px]" />
            </Button>
          </main>
        </nav>
      )}

      {isOpenAppointment && (
        <nav
          className={`h-screen bg-background-primary flex flex-col fixed md:relative top-0   z-50  w-[90px] transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
          dir="ltr"
        >
          {/* زر اغلاق على الموبايل */}

          {/* Header */}
          <header className="hidden md:flex  flex-col items-start gap-2.5 px-2 py-[9px] mt-4 ml-5 w-full">
            <div className="flex items-center  gap-[7px] md:flex">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 13V15H15V0H13V1C13 7.62742 7.62742 13 1 13H0Z"
                  fill="#A5C8F2"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30 15H15V30H17.1322C18.0228 23.3156 23.3156 18.0228 30 17.1322V15Z"
                  fill="#83DFDF"
                />
              </svg>
            </div>
          </header>

          {/* Main Navigation */}
          <main className="flex flex-col flex-1 items-center mt-5 p-[9px]">
            <section className="w-full space-y-2">
              {/* Users Management button - active state */}

              <div
                onClick={() => setIsOpen(!isOpenAppointment)}
                className={`flex items-center text-center w-full h-[40px] gap-2 py-[10px] pl-[4px]
              text-text-primary
              rounded justify-center`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.16074 12.3374C9.9984 11.7798 10.6344 10.9674 10.9746 10.0203C11.3148 9.07325 11.3412 8.04185 11.0499 7.07862C10.7586 6.1154 10.165 5.27149 9.35702 4.67169C8.54899 4.07189 7.5694 3.74805 6.56309 3.74805C5.55678 3.74805 4.57718 4.07189 3.76916 4.67169C2.96114 5.27149 2.36759 6.1154 2.07628 7.07862C1.78498 8.04185 1.81139 9.07325 2.1516 10.0203C2.49182 10.9674 3.12777 11.7798 3.96543 12.3374C2.45019 12.8959 1.15614 13.9293 0.276369 15.2835C0.230132 15.3523 0.198015 15.4295 0.181886 15.5107C0.165757 15.592 0.165938 15.6756 0.182417 15.7568C0.198897 15.838 0.231347 15.915 0.277881 15.9836C0.324415 16.0521 0.384105 16.1107 0.453481 16.1559C0.522857 16.2012 0.600535 16.2322 0.682001 16.2472C0.763466 16.2621 0.847094 16.2607 0.928023 16.2431C1.00895 16.2255 1.08557 16.1919 1.15341 16.1444C1.22126 16.0969 1.27899 16.0364 1.32324 15.9664C1.89074 15.0935 2.66727 14.3763 3.58234 13.8798C4.4974 13.3833 5.522 13.1232 6.56309 13.1232C7.60418 13.1232 8.62878 13.3833 9.54384 13.8798C10.4589 14.3763 11.2354 15.0935 11.8029 15.9664C11.8946 16.1026 12.0362 16.1973 12.1971 16.23C12.3581 16.2626 12.5254 16.2307 12.6629 16.1409C12.8005 16.0512 12.8972 15.911 12.9321 15.7506C12.9671 15.5901 12.9375 15.4224 12.8498 15.2835C11.97 13.9293 10.676 12.8959 9.16074 12.3374ZM3.12559 8.43745C3.12559 7.75758 3.32719 7.09297 3.70491 6.52768C4.08263 5.96238 4.61949 5.52179 5.24761 5.26161C5.87573 5.00144 6.5669 4.93336 7.23371 5.066C7.90052 5.19864 8.51303 5.52603 8.99377 6.00677C9.47451 6.48751 9.8019 7.10002 9.93454 7.76683C10.0672 8.43363 9.9991 9.1248 9.73892 9.75292C9.47875 10.381 9.03815 10.9179 8.47286 11.2956C7.90757 11.6733 7.24296 11.8749 6.56309 11.8749C5.65172 11.8739 4.77798 11.5114 4.13355 10.867C3.48912 10.2226 3.12662 9.34881 3.12559 8.43745ZM19.5428 16.1484C19.4039 16.2389 19.2348 16.2706 19.0727 16.2365C18.9105 16.2023 18.7685 16.1052 18.6779 15.9664C18.1111 15.093 17.3347 14.3755 16.4194 13.8791C15.5042 13.3828 14.4792 13.1236 13.4381 13.1249C13.2723 13.1249 13.1134 13.0591 12.9961 12.9419C12.8789 12.8247 12.8131 12.6657 12.8131 12.4999C12.8131 12.3342 12.8789 12.1752 12.9961 12.058C13.1134 11.9408 13.2723 11.8749 13.4381 11.8749C13.9443 11.8745 14.4442 11.7622 14.902 11.5461C15.3598 11.3301 15.7642 11.0156 16.0864 10.6251C16.4086 10.2346 16.6405 9.77779 16.7656 9.28727C16.8908 8.79676 16.9061 8.28466 16.8104 7.78756C16.7146 7.29047 16.5103 6.82064 16.212 6.41166C15.9137 6.00268 15.5287 5.66464 15.0846 5.42169C14.6405 5.17874 14.1482 5.03688 13.6429 5.00625C13.1376 4.97562 12.6317 5.05696 12.1615 5.24448C12.0849 5.27762 12.0023 5.29506 11.9188 5.29577C11.8353 5.29647 11.7525 5.28043 11.6753 5.24859C11.598 5.21675 11.528 5.16975 11.4692 5.11038C11.4105 5.05101 11.3642 4.98046 11.3332 4.90291C11.3022 4.82536 11.287 4.74238 11.2886 4.65887C11.2902 4.57536 11.3085 4.49302 11.3425 4.41671C11.3765 4.3404 11.4254 4.27167 11.4863 4.21458C11.5473 4.15749 11.6191 4.1132 11.6975 4.08432C12.7736 3.65514 13.9706 3.6397 15.0574 4.04097C16.1443 4.44224 17.044 5.23179 17.5831 6.2573C18.1222 7.28282 18.2623 8.47164 17.9766 9.59442C17.6909 10.7172 16.9995 11.6944 16.0357 12.3374C17.551 12.8959 18.845 13.9293 19.7248 15.2835C19.8153 15.4224 19.847 15.5915 19.8129 15.7537C19.7787 15.9158 19.6816 16.0578 19.5428 16.1484Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <div
                onClick={() => setIsOpen(!isOpenAppointment)}
                className={`flex items-center  w-full h-[40px] py-[10px] pl-[4px] rounded justify-center`}
              >
                <div className="flex text-text-primary items-center gap-[8px]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.24805 8H6.49805V9.3125H8.24805V8ZM6.49805 10.1875H8.24805V11.5H6.49805V10.1875ZM8.24805 12.375H6.49805V13.6875H8.24805V12.375ZM9.12305 8H10.873V9.3125H9.12305V8ZM10.873 10.1875H9.12305V11.5H10.873V10.1875ZM9.12305 12.375H10.873V13.6875H9.12305V12.375ZM13.498 8H11.748V9.3125H13.498V8ZM11.748 10.1875H13.498V11.5H11.748V10.1875ZM13.498 12.375H11.748V13.6875H13.498V12.375Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.9375 1.875C6.9375 1.64294 7.02969 1.42038 7.19378 1.25628C7.35788 1.09219 7.58044 1 7.8125 1H12.1875C12.4196 1 12.6421 1.09219 12.8062 1.25628C12.9703 1.42038 13.0625 1.64294 13.0625 1.875H16.5625V2.75H15.6875V17.625H16.5625C16.6785 17.625 16.7898 17.6711 16.8719 17.7531C16.9539 17.8352 17 17.9465 17 18.0625C17 18.1785 16.9539 18.2898 16.8719 18.3719C16.7898 18.4539 16.6785 18.5 16.5625 18.5H3.4375C3.32147 18.5 3.21019 18.4539 3.12814 18.3719C3.04609 18.2898 3 18.1785 3 18.0625C3 17.9465 3.04609 17.8352 3.12814 17.7531C3.21019 17.6711 3.32147 17.625 3.4375 17.625H4.3125V2.75H3.875V1.875H6.9375ZM6.9375 4.0625H5.1875V17.625H6.9375V15.875H6.5V15H13.5V15.875H13.0625V17.625H14.8125V4.0625H13.0625V6.25C13.0625 6.48206 12.9703 6.70462 12.8062 6.86872C12.6421 7.03281 12.4196 7.125 12.1875 7.125H7.8125C7.58044 7.125 7.35788 7.03281 7.19378 6.86872C7.02969 6.70462 6.9375 6.48206 6.9375 6.25V4.0625ZM6.9375 3.1875H5.1875V2.75H6.9375V3.1875ZM7.8125 1.875H12.1875V6.25H7.8125V1.875ZM9.5625 17.625H7.8125V15.875H9.5625V17.625ZM12.1875 17.625V15.875H10.4375V17.625H12.1875ZM14.8125 3.1875V2.75H13.0625V3.1875H14.8125Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>

              <div
                onClick={() => setIsOpen(!isOpenAppointment)}
                className={`flex items-center w-full h-[40px]   py-[10px] pl-[4px] rounded justify-center`}
              >
                <div className="flex text-text-primary items-center gap-[8px]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.00075 15V13.5C9.00075 12.086 9.00075 11.3785 8.56121 10.9395C8.12217 10.5 7.4146 10.5 6.00047 10.5L5.00038 11.5L4.00028 10.5C2.58615 10.5 1.87858 10.5 1.43954 10.9395C1 11.3785 1 12.086 1 13.5V15M7.00056 10.5V13.25"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.25009 10.5V12.5M3.25009 12.5C3.51534 12.5 3.76971 12.6054 3.95727 12.7929C4.14482 12.9804 4.25019 13.2348 4.25019 13.5V14M3.25009 12.5C2.98485 12.5 2.73047 12.6054 2.54292 12.7929C2.35537 12.9804 2.25 13.2348 2.25 13.5V14M6.75042 7.25V6.75C6.75042 6.52019 6.70515 6.29262 6.6172 6.0803C6.52925 5.86798 6.40033 5.67507 6.23781 5.51256C6.07529 5.35006 5.88236 5.22116 5.67002 5.13321C5.45768 5.04527 5.23009 5 5.00026 5C4.77042 5 4.54284 5.04527 4.3305 5.13321C4.11816 5.22116 3.92522 5.35006 3.76271 5.51256C3.60019 5.67507 3.47127 5.86798 3.38332 6.0803C3.29536 6.29262 3.25009 6.52019 3.25009 6.75V7.25C3.25009 7.47981 3.29536 7.70738 3.38332 7.9197C3.47127 8.13202 3.60019 8.32493 3.76271 8.48744C3.92522 8.64994 4.11816 8.77884 4.3305 8.86679C4.54284 8.95474 4.77042 9 5.00026 9C5.23009 9 5.45768 8.95474 5.67002 8.86679C5.88236 8.77884 6.07529 8.64994 6.23781 8.48744C6.40033 8.32493 6.52925 8.13202 6.6172 7.9197C6.70515 7.70738 6.75042 7.47981 6.75042 7.25ZM7.37548 13.625C7.37548 13.7245 7.33597 13.8198 7.26564 13.8902C7.1953 13.9605 7.09991 14 7.00045 14C6.90098 14 6.80559 13.9605 6.73526 13.8902C6.66492 13.8198 6.62541 13.7245 6.62541 13.625C6.62541 13.5255 6.66492 13.4302 6.73526 13.3598C6.80559 13.2895 6.90098 13.25 7.00045 13.25C7.09991 13.25 7.1953 13.2895 7.26564 13.3598C7.33597 13.4302 7.37548 13.5255 7.37548 13.625Z"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11 15V14.5C11 13.565 11 13.098 11.201 12.75C11.3327 12.522 11.522 12.3326 11.7501 12.201C12.0981 12 12.5651 12 13.5002 12L15.0004 14L16.5005 12C17.4356 12 17.9026 12 18.2507 12.201C18.4787 12.3326 18.6681 12.522 18.7997 12.75C19.0008 13.098 19.0008 13.565 19.0008 14.5V15M16.9691 8L17.4781 5.932C17.5946 5.4585 17.2421 5 16.762 5H13.2387C12.7587 5 12.4061 5.4585 12.5226 5.932L13.0317 8M16.9691 8V9C16.9691 10.1045 16.088 11 15.0004 11C13.9128 11 13.0317 10.1045 13.0317 9V8M16.9691 8H13.0317"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div
                onClick={() => setIsOpen(!isOpenAppointment)}
                className={`flex items-center w-full h-[40px] gap-2 py-[10px] pl-[4px] rounded justify-center`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.1802 13.0943C19.4727 8.9193 18.5835 4.7793 16.2185 3.32847C13.9835 1.95763 12.0327 2.51013 10.861 3.39013L9.99933 4.03513M16.1802 13.0943C15.3902 14.0968 14.3593 15.1001 13.0493 16.0693C11.7618 17.0235 11.1177 17.5001 9.99933 17.5001C8.881 17.5001 8.23767 17.0235 6.94933 16.0693C0.184333 11.0626 0.847667 5.12763 3.78017 3.32847C6.01517 1.95763 7.966 2.51013 9.13767 3.39013L9.99933 4.03513M16.1802 13.0943L11.576 7.87097C11.4846 7.76762 11.3595 7.70002 11.2229 7.68018C11.0864 7.66035 10.9472 7.68956 10.8302 7.76263L9.0085 8.90097C8.65126 9.12697 8.22046 9.20606 7.80624 9.1217C7.39202 9.03734 7.02647 8.79605 6.78608 8.44833C6.5457 8.10061 6.44909 7.6734 6.51648 7.25608C6.58388 6.83876 6.81004 6.46368 7.14767 6.2093L9.99933 4.03513"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <div
                onClick={() => setIsOpen(!isOpenAppointment)}
                className={`flex items-center w-full h-[40px] gap-2 py-[10px] pl-[4px]  rounded justify-center`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.25 2.5H3.75C3.41848 2.5 3.10054 2.6317 2.86612 2.86612C2.6317 3.10054 2.5 3.41848 2.5 3.75V16.25C2.5 16.5815 2.6317 16.8995 2.86612 17.1339C3.10054 17.3683 3.41848 17.5 3.75 17.5H16.25C16.5815 17.5 16.8995 17.3683 17.1339 17.1339C17.3683 16.8995 17.5 16.5815 17.5 16.25V3.75C17.5 3.41848 17.3683 3.10054 17.1339 2.86612C16.8995 2.6317 16.5815 2.5 16.25 2.5ZM7.5 9.375C7.5 8.88055 7.64662 8.3972 7.92133 7.98607C8.19603 7.57495 8.58648 7.25452 9.04329 7.0653C9.50011 6.87608 10.0028 6.82657 10.4877 6.92304C10.9727 7.0195 11.4181 7.2576 11.7678 7.60723C12.1174 7.95686 12.3555 8.40232 12.452 8.88727C12.5484 9.37223 12.4989 9.87489 12.3097 10.3317C12.1205 10.7885 11.8 11.179 11.3889 11.4537C10.9778 11.7284 10.4945 11.875 10 11.875C9.33696 11.875 8.70107 11.6116 8.23223 11.1428C7.76339 10.6739 7.5 10.038 7.5 9.375ZM5.36484 16.25C5.68467 15.4626 6.19886 14.7691 6.85938 14.2344C7.74868 13.5165 8.85709 13.1249 10 13.1249C11.1429 13.1249 12.2513 13.5165 13.1406 14.2344C13.8011 14.7691 14.3153 15.4626 14.6352 16.25H5.36484ZM16.25 16.25H15.9633C15.6854 15.3654 15.2139 14.5538 14.5831 13.8741C13.9522 13.1945 13.1779 12.664 12.3164 12.3211C12.9297 11.8393 13.3776 11.1783 13.5976 10.4301C13.8177 9.68189 13.799 8.88367 13.5441 8.14658C13.2892 7.40949 12.8109 6.7702 12.1757 6.31772C11.5404 5.86523 10.7799 5.62207 10 5.62207C9.22009 5.62207 8.45958 5.86523 7.82435 6.31772C7.18912 6.7702 6.71077 7.40949 6.4559 8.14658C6.20102 8.88367 6.18231 9.68189 6.40236 10.4301C6.6224 11.1783 7.07027 11.8393 7.68359 12.3211C6.82207 12.664 6.04776 13.1945 5.41693 13.8741C4.78611 14.5538 4.31462 15.3654 4.03672 16.25H3.75V3.75H16.25V16.25Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <div
                onClick={() => setIsOpen(!isOpenAppointment)}
                className={`flex font-lato font-semibold  rounded-[4px]  w-full h-[40px] bg-secondary-default  py-[10px] pl-[4px] items-center justify-center gap-2 text-xs leading-[130%] tracking-[0] 
              `}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.25 2.5H14.375V1.875C14.375 1.70924 14.3092 1.55027 14.1919 1.43306C14.0747 1.31585 13.9158 1.25 13.75 1.25C13.5842 1.25 13.4253 1.31585 13.3081 1.43306C13.1908 1.55027 13.125 1.70924 13.125 1.875V2.5H6.875V1.875C6.875 1.70924 6.80915 1.55027 6.69194 1.43306C6.57473 1.31585 6.41576 1.25 6.25 1.25C6.08424 1.25 5.92527 1.31585 5.80806 1.43306C5.69085 1.55027 5.625 1.70924 5.625 1.875V2.5H3.75C3.41848 2.5 3.10054 2.6317 2.86612 2.86612C2.6317 3.10054 2.5 3.41848 2.5 3.75V16.25C2.5 16.5815 2.6317 16.8995 2.86612 17.1339C3.10054 17.3683 3.41848 17.5 3.75 17.5H16.25C16.5815 17.5 16.8995 17.3683 17.1339 17.1339C17.3683 16.8995 17.5 16.5815 17.5 16.25V3.75C17.5 3.41848 17.3683 3.10054 17.1339 2.86612C16.8995 2.6317 16.5815 2.5 16.25 2.5ZM5.625 3.75V4.375C5.625 4.54076 5.69085 4.69973 5.80806 4.81694C5.92527 4.93415 6.08424 5 6.25 5C6.41576 5 6.57473 4.93415 6.69194 4.81694C6.80915 4.69973 6.875 4.54076 6.875 4.375V3.75H13.125V4.375C13.125 4.54076 13.1908 4.69973 13.3081 4.81694C13.4253 4.93415 13.5842 5 13.75 5C13.9158 5 14.0747 4.93415 14.1919 4.81694C14.3092 4.69973 14.375 4.54076 14.375 4.375V3.75H16.25V6.25H3.75V3.75H5.625ZM16.25 16.25H3.75V7.5H16.25V16.25ZM10.9375 10.3125C10.9375 10.4979 10.8825 10.6792 10.7795 10.8333C10.6765 10.9875 10.5301 11.1077 10.3588 11.1786C10.1875 11.2496 9.99896 11.2682 9.8171 11.232C9.63525 11.1958 9.4682 11.1065 9.33709 10.9754C9.20598 10.8443 9.11669 10.6773 9.08051 10.4954C9.04434 10.3135 9.06291 10.125 9.13386 9.95373C9.20482 9.78243 9.32498 9.63601 9.47915 9.533C9.63332 9.42998 9.81458 9.375 10 9.375C10.2486 9.375 10.4871 9.47377 10.6629 9.64959C10.8387 9.8254 10.9375 10.0639 10.9375 10.3125ZM14.375 10.3125C14.375 10.4979 14.32 10.6792 14.217 10.8333C14.114 10.9875 13.9676 11.1077 13.7963 11.1786C13.625 11.2496 13.4365 11.2682 13.2546 11.232C13.0727 11.1958 12.9057 11.1065 12.7746 10.9754C12.6435 10.8443 12.5542 10.6773 12.518 10.4954C12.4818 10.3135 12.5004 10.125 12.5714 9.95373C12.6423 9.78243 12.7625 9.63601 12.9167 9.533C13.0708 9.42998 13.2521 9.375 13.4375 9.375C13.6861 9.375 13.9246 9.47377 14.1004 9.64959C14.2762 9.8254 14.375 10.0639 14.375 10.3125ZM7.5 13.4375C7.5 13.6229 7.44502 13.8042 7.342 13.9583C7.23899 14.1125 7.09257 14.2327 6.92127 14.3036C6.74996 14.3746 6.56146 14.3932 6.3796 14.357C6.19775 14.3208 6.0307 14.2315 5.89959 14.1004C5.76848 13.9693 5.67919 13.8023 5.64301 13.6204C5.60684 13.4385 5.62541 13.25 5.69636 13.0787C5.76732 12.9074 5.88748 12.761 6.04165 12.658C6.19582 12.555 6.37708 12.5 6.5625 12.5C6.81114 12.5 7.0496 12.5988 7.22541 12.7746C7.40123 12.9504 7.5 13.1889 7.5 13.4375ZM10.9375 13.4375C10.9375 13.6229 10.8825 13.8042 10.7795 13.9583C10.6765 14.1125 10.5301 14.2327 10.3588 14.3036C10.1875 14.3746 9.99896 14.3932 9.8171 14.357C9.63525 14.3208 9.4682 14.2315 9.33709 14.1004C9.20598 13.9693 9.11669 13.8023 9.08051 13.6204C9.04434 13.4385 9.06291 13.25 9.13386 13.0787C9.20482 12.9074 9.32498 12.761 9.47915 12.658C9.63332 12.555 9.81458 12.5 10 12.5C10.2486 12.5 10.4871 12.5988 10.6629 12.7746C10.8387 12.9504 10.9375 13.1889 10.9375 13.4375ZM14.375 13.4375C14.375 13.6229 14.32 13.8042 14.217 13.9583C14.114 14.1125 13.9676 14.2327 13.7963 14.3036C13.625 14.3746 13.4365 14.3932 13.2546 14.357C13.0727 14.3208 12.9057 14.2315 12.7746 14.1004C12.6435 13.9693 12.5542 13.8023 12.518 13.6204C12.4818 13.4385 12.5004 13.25 12.5714 13.0787C12.6423 12.9074 12.7625 12.761 12.9167 12.658C13.0708 12.555 13.2521 12.5 13.4375 12.5C13.6861 12.5 13.9246 12.5988 14.1004 12.7746C14.2762 12.9504 14.375 13.1889 14.375 13.4375Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </section>

            {/* Logout Button */}
            <Button
              variant="ghost"
              className="mt-auto mb-4  h-11 rounded-[14px] justify-center items-center"
            >
              <LogOutIcon className="w-5 h-5" />
            </Button>
          </main>
        </nav>
      )}
    </>
  );
};
