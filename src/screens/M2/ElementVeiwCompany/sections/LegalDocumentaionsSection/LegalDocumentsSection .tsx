import React from "react";
import { Card, CardContent } from "../../../../../components/ui/card";
import { Button } from "../../../../../components/ui/button";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "../../../../../components/ui/collapsible";
import { ThemeToggle } from "../../../../../components/theme/ThemeSwitcher";
import {
  ChevronDownIcon,
  Edit2Icon,
  BellIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  GlobeIcon,
  LinkedinIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
} from "lucide-react";
import { SideBar } from "../../../../CommonComponents/SideBarPlan2";
import { useState } from "react";
import ReusableCollapsible from "../../../../../components/ui/Collapsibles";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import XIcon from "@mui/icons-material/X";
import { Link } from "react-router-dom";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const companyInfo = {
  logo: "/vector.svg",
  tradeName: "MedCare Group",
  legalName: "MedCare Healthcare Services Inc.",
  yearEstablished: "2010",
  overview:
    "MedCare Group is a leading healthcare provider offering integrated medical services across multiple regions. Our mission is to deliver high-quality, patient-centered care.",
  goals:
    "Expand to 50+ clinics by 2027 Implement fully digital patient records",
  vision: "To be the most trusted healthcare network in the region by 2030.",
  ceoName: "Dr. Sara Al-Harbi",
};

const contactInfo = {
  phoneNumbers: "+966 55 123 4567, +966 11 987 6543",
  email: "info@medcaregroup.com",
  physicalAddress: "245, King Fahd Road, Al Olaya, Saudi Arabia, KSA",
  website: "www.medcaregroup.com",
  mapsLocation: "www.medcaregroup.com",
};

const socialMedia = {
  linkedin: "https://www.linkedin.com/company/medcare-group",
  facebook: "https://facebook.com/medcaregroup",
  twitter: "https://twitter.com/medcaregroup",
  instagram: "https://instagram.com/medcaregroup",
};

const legalDetails = {
  vat: "31045678900123",
  cr: "1010456789",
};

const termsConditions = [
  {
    title: "Privacy & Data Protection Policy",
    description:
      "We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our system.",
  },
  {
    title: "Terms and Conditions of Use",
    description:
      "MedCare is committed to protecting your privacy. We collect and use personal data solely to improve patient care. Data is stored securely and never shared without consent.",
  },
];

const privacyPolicy = [
  {
    title: "Privacy & Data Protection Policy",
    description:
      "We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our system.",
  },
  {
    title: "Terms and Conditions of Use",
    description:
      "MedCare is committed to protecting your privacy. We collect and use personal data solely to improve patient care. Data is stored securely and never shared without consent.",
  },
];
interface NoDataSectionProps {
  local: string;
  dark: boolean;
  handelDarkClick: () => void;
  handleLanguageClick: () => void;
  // ⬅️ البروبس الجديد
}


export const LegalDocumentsSection = ({
  handleLanguageClick,
  local,


}: NoDataSectionProps): JSX.Element => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);

  const [isOpen, setIsOpen1] = useState({
    clinicInfo: true,
    contactInfo: true,
    social: true,
    workingDays: true,
    doctorsStaff: true,
    mapsLocation: true,
    policy: true,
    term: true,
  });
  const handleToggle = (key: keyof typeof isOpen, open: boolean) => {
    setIsOpen1(prev => ({
      ...prev,
      [key]: open
    }))
  };
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
        className={`flex flex-col w-full overflow-hidden items-start gap-4  py-4  self-stretch relative bg-background-primary
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
                <h1 className="font-bold text-sm text-on-surface-primary">
                  {t("Medical Facilities")}
                </h1>
                <p className="text-xs text-on-surface-primary">
                  {t("View Company Details")}
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
                <h1 className="font-bold text-base md:text-lg lg:text-xl text-on-surface-primary">
                  {t("Medical Facilities")}
                </h1>
                <p className="text-sm md:text-base text-on-surface-primary">
                  {t("View Company Details")}
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




        <Card className="flex flex-col h-auto items-start gap-6 p-5 mt-[10px] bg-background-tertiary relative self-stretch w-full rounded-2xl overflow-hidden">
          <CardContent className="p-0 w-full overflow-y-auto gap-5 h-auto ">
            <div className="flex justify-end" dir={local === 'ar' ? 'rtl' : 'ltr'}>
              <Link to="/ElementViewCompany/EditCompanyDetials">
                <Button
                  className="
    flex items-center justify-center gap-2
    w-[140px] sm:w-[150px] md:w-[180px] lg:w-[200px]
    h-9 sm:h-10 md:h-11 lg:h-10
    bg-secondary-dark text-text-inverse rounded-[20px]
    font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)]
    text-[clamp(12px,1.1vw,16px)] lg:text-base
    leading-[var(--btn-14px-medium-line-height)]
    tracking-[var(--btn-14px-medium-letter-spacing)]
    [font-style:var(--btn-14px-medium-font-style)]
    self-end
  "
                >
                  <Edit2Icon
                    className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 text-text-inverse"
                  />
                  {t("Edit")}
                </Button>
              </Link>
            </div>


            <ReusableCollapsible
              title={t("Company information")}
              initiallyOpen={isOpen.clinicInfo}
              onOpenChange={(open) => handleToggle("clinicInfo", open)}
              dir={local === "ar" ? "rtl" : "ltr"}
              content={
                <div className="px-4 pb-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* العمود الأول */}
                    <div className="flex flex-col gap-6">
                      {/* Logo */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <div className="font-semibold min-w-[180px] text-[clamp(14px,1.1vw,16px)]">
                          {t("Logo:")}
                        </div>
                        <img className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" src="/logo.png" />
                      </div>

                      {/* Trade Name */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <div className="font-semibold min-w-[180px] text-[clamp(14px,1.1vw,16px)]">
                          {t("Trade Name")}:
                        </div>
                        <div className="text-[clamp(12px,1.1vw,16px)]">{companyInfo.tradeName}</div>
                      </div>

                      {/* Year of Establishment */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <div className="font-semibold   min-w-[180px] text-[clamp(14px,1.1vw,16px)] lg:text-lg">
                          {t("Year of Establishment")}:
                        </div>
                        <div className="text-[clamp(12px,1.1vw,16px)]">{companyInfo.yearEstablished}</div>
                      </div>

                      {/* Overview */}
                      <div className="flex flex-col sm:flex-row sm:items-start  gap-6 sm:gap-4">
                        <div className="font-semibold  min-w-[180px] text-[clamp(14px,1.1vw,16px)] lg:text-lg">
                          {t("Overview")}:
                        </div>
                        <div className="text-[clamp(12px,1.1vw,16px)]">{companyInfo.overview}</div>
                      </div>

                      {/* Goals */}
                      <div className="flex flex-col sm:flex-row sm:items-center  sm:gap-4  gap-6">
                        <div className="font-semibold   min-w-[180px] text-[clamp(14px,1.1vw,16px)] lg:text-lg">
                          {t("Goals")}:
                        </div>
                        <div className="text-[clamp(12px,1.1vw,16px)]">{companyInfo.goals}</div>
                      </div>
                    </div>

                    {/* العمود الثاني */}
                    <div className="flex flex-col gap-6">
                      {/* Legal Name */}
                      <div className="flex flex-col sm:flex-row sm:items-center   gap-4">
                        <div className="font-semibold  min-w-[180px] text-[clamp(14px,1.1vw,16px)]">
                          {t("Legal Name")}:
                        </div>
                        <div className="text-[clamp(14px,1.1vw,16px)]">{companyInfo.legalName}</div>
                      </div>

                      {/* Vision */}
                      <div className="flex flex-col sm:flex-row sm:items-center   gap-4">
                        <div className="font-semibold  min-w-[180px] text-[clamp(14px,1.1vw,16px)]">
                          {t("Vision")}:
                        </div>
                        <div className="  text-[clamp(12px,1.1vw,16px] min-w-[180px] ">{companyInfo.vision}</div>
                      </div>

                      {/* CEO Name */}
                      <div className="flex flex-col sm:flex-row sm:items-center  gap-4 ">
                        <div className="font-semibold  min-w-[180px] text-[clamp(14px,1.1vw,16px)] ">
                          {t("CEO Name")}:
                        </div>
                        <div className="text-[clamp(12px,1.1vw,16px)]">{companyInfo.ceoName}</div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            />






            <ReusableCollapsible
              title={t("Company Contact Information")}
              initiallyOpen={isOpen.contactInfo}
              dir={local === "ar" ? "rtl" : "ltr"}
              onOpenChange={(open) => handleToggle("contactInfo", open)}
              content={
                <div className="px-4 pb-4">
                  {/* عمود واحد بالموبايل، عمودين من md وفوق */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* العمود الأول */}
                    <div className="flex flex-col gap-8">
                      {/* Phone Numbers */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        {/* Icon + Label */}
                        <div className="flex items-center gap-2 sm:gap-3">
                          <PhoneIcon className="text-text-primary w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                          <div className="font-semibold text-[clamp(14px,1.1vw,16px)]">
                            {t("Phone Numbers")}:
                          </div>
                        </div>
                        {/* Content */}
                        <div className="text-[clamp(12px,1.1vw,16px)] break-words">
                          {contactInfo.phoneNumbers}
                        </div>
                      </div>

                      {/* Physical Address */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="text-text-primary">
                            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.5 6.5C9.5 6.20333 9.58797 5.91332 9.7528 5.66665C9.91762 5.41997 10.1519 5.22771 10.426 5.11418C10.7001 5.00065 11.0017 4.97094 11.2926 5.02882C11.5836 5.0867 11.8509 5.22956 12.0607 5.43934C12.2704 5.64912 12.4133 5.91639 12.4712 6.20736C12.5291 6.49834 12.4994 6.79994 12.3858 7.07403C12.2723 7.34811 12.08 7.58238 11.8334 7.7472C11.5867 7.91203 11.2967 8 11 8C10.6022 8 10.2206 7.84196 9.93934 7.56066C9.65804 7.27936 9.5 6.89782 9.5 6.5ZM5 6.5C5 4.9087 5.63214 3.38258 6.75736 2.25736C7.88258 1.13214 9.4087 0.5 11 0.5C12.5913 0.5 14.1174 1.13214 15.2426 2.25736C16.3679 3.38258 17 4.9087 17 6.5C17 12.1203 11.6019 15.2694 11.375 15.4016C11.2617 15.4663 11.1334 15.5004 11.0028 15.5004C10.8723 15.5004 10.744 15.4663 10.6306 15.4016C10.3981 15.2694 5 12.125 5 6.5ZM6.5 6.5C6.5 10.4563 9.86 13.0822 11 13.8594C12.1391 13.0831 15.5 10.4563 15.5 6.5C15.5 5.30653 15.0259 4.16193 14.182 3.31802C13.3381 2.47411 12.1935 2 11 2C9.80653 2 8.66193 2.47411 7.81802 3.31802C6.97411 4.16193 6.5 5.30653 6.5 6.5ZM18.0097 12.8403C17.8251 12.7793 17.624 12.7924 17.4489 12.8768C17.2738 12.9612 17.1382 13.1102 17.0709 13.2926C17.0035 13.475 17.0096 13.6764 17.0879 13.8543C17.1661 14.0323 17.3104 14.1729 17.4903 14.2466C19.0381 14.8194 20 15.5863 20 16.25C20 17.5025 16.5763 19.25 11 19.25C5.42375 19.25 2 17.5025 2 16.25C2 15.5863 2.96187 14.8194 4.50969 14.2475C4.6896 14.1739 4.8339 14.0332 4.91215 13.8553C4.99039 13.6773 4.99648 13.4759 4.92913 13.2935C4.86178 13.1112 4.72624 12.9621 4.5511 12.8777C4.37596 12.7933 4.17491 12.7803 3.99031 12.8412C1.73937 13.6709 0.5 14.8822 0.5 16.25C0.5 19.1731 5.91031 20.75 11 20.75C16.0897 20.75 21.5 19.1731 21.5 16.25C21.5 14.8822 20.2606 13.6709 18.0097 12.8403Z" fill="CurrentColor" />
                            </svg></div>
                          <div className="font-semibold text-[clamp(14px,1.1vw,16px)]">
                            {t("Physical Address")}:
                          </div>
                        </div>
                        <div className="text-[clamp(12px,1.1vw,16px)] break-words">
                          {contactInfo.physicalAddress}
                        </div>
                      </div>

                      {/* Maps Location */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="text-text-primary"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5 10.2506C19.3402 10.2506 21.75 12.5936 21.75 15.4635C21.7499 16.934 21.125 18.158 20.2783 19.1461C19.4378 20.127 18.3524 20.9075 17.3545 21.5182L17.3438 21.525L17.332 21.5318C17.0781 21.6751 16.7914 21.7506 16.5 21.7506C16.2086 21.7506 15.9219 21.6751 15.668 21.5318L15.6543 21.524L15.6416 21.5162C14.649 20.9017 13.5644 20.1239 12.7236 19.1461C11.876 18.1602 11.2501 16.9387 11.25 15.4635C11.25 12.5936 13.6598 10.2506 16.5 10.2506ZM16.5 11.7506C14.4697 11.7506 12.75 13.4405 12.75 15.4635C12.7501 16.4816 13.1747 17.3689 13.8613 18.1676C14.5508 18.9694 15.4773 19.6494 16.4131 20.2301C16.4395 20.2433 16.4696 20.2506 16.5 20.2506C16.5308 20.2506 16.5612 20.2427 16.5879 20.2291C17.5226 19.6559 18.4494 18.9747 19.1387 18.1705C19.8255 17.3689 20.2499 16.4779 20.25 15.4635C20.25 13.4405 18.5303 11.7506 16.5 11.7506ZM6.98828 0.751558C7.49476 0.735089 7.95906 0.850344 8.4541 1.04257C8.92734 1.22637 9.47582 1.49992 10.1445 1.83457L13.5068 3.51816C13.7443 3.63698 13.8895 3.70636 13.9902 3.75058C13.9935 3.75054 13.9967 3.75058 14 3.75058C14.1285 3.75058 14.2478 3.78545 14.3535 3.84238C14.4629 3.84963 14.6273 3.85312 14.9209 3.85312H17.0527C17.9499 3.85309 18.7008 3.85276 19.2969 3.93515C19.9286 4.02252 20.4976 4.21564 20.9522 4.6832C21.4036 5.14772 21.5873 5.72345 21.6709 6.36289C21.7505 6.97187 21.75 7.74029 21.75 8.6666V9.50058C21.7498 9.91462 21.4141 10.2506 21 10.2506C20.5859 10.2506 20.2502 9.91462 20.25 9.50058V8.71738C20.25 7.72711 20.248 7.05747 20.1826 6.55722C20.1198 6.07661 20.0101 5.86605 19.876 5.72812C19.7447 5.59331 19.5488 5.48469 19.0918 5.42148C18.6105 5.35491 17.9646 5.35312 17 5.35312H14.8594C14.8223 5.35314 14.7858 5.35121 14.75 5.35117V8.50058C14.7498 8.91462 14.4141 9.25058 14 9.25058C13.5859 9.25058 13.2502 8.91462 13.25 8.50058V5.05918C13.1373 5.00639 13.0183 4.95079 12.8916 4.8873C12.8732 4.87808 12.8547 4.86839 12.8359 4.85898L9.50391 3.19199C8.79625 2.83786 8.31111 2.59536 7.91113 2.44003C7.85496 2.41822 7.80094 2.40003 7.75 2.38242V15.8199C8.25305 15.9102 8.71472 16.1023 9.11914 16.3014C9.34178 16.4109 9.55891 16.5281 9.75977 16.6373L9.78906 16.6539C9.98276 16.7592 10.1613 16.8556 10.3359 16.943C10.7063 17.1284 10.8562 17.5794 10.6709 17.9498C10.4855 18.3202 10.0345 18.4701 9.66406 18.2848C9.46575 18.1855 9.26674 18.0772 9.0791 17.9752L9.04297 17.9557C8.84013 17.8454 8.64784 17.7414 8.45606 17.6471C8.06955 17.4569 7.72722 17.3275 7.40235 17.2828C6.65872 17.1807 6.05177 17.5352 5.11914 18.0797L5.0625 18.1119C4.44356 18.4733 3.92893 18.7738 3.50293 18.9674C3.07219 19.1631 2.60392 19.313 2.10938 19.2242C1.57481 19.1282 1.09595 18.839 0.756837 18.4156C0.446329 18.0279 0.342688 17.5482 0.2959 17.0699C0.249543 16.5959 0.249986 15.9896 0.250001 15.2555V6.96445C0.249985 6.40957 0.249692 5.94068 0.287111 5.55234C0.32684 5.14027 0.413207 4.75989 0.619142 4.39609C0.825692 4.03132 1.10707 3.7646 1.43945 3.52304C1.75106 3.29661 2.14922 3.06381 2.61719 2.79062C2.62723 2.78476 2.63735 2.77894 2.64746 2.77304L3.90527 2.03867C4.55205 1.66105 5.08217 1.35153 5.54297 1.1373C6.02501 0.913242 6.48175 0.768094 6.98828 0.751558ZM6.17578 2.49765C5.78602 2.67883 5.3162 2.95162 4.63184 3.35117L3.40332 4.06796C2.89687 4.36364 2.56483 4.559 2.32129 4.73593C2.09187 4.90266 1.98989 5.02043 1.92481 5.13535C1.8591 5.25142 1.80846 5.40366 1.78027 5.69589C1.75059 6.00379 1.75 6.40011 1.75 6.99863V15.2164C1.75 15.9999 1.75071 16.5323 1.78906 16.9244C1.82785 17.3205 1.89603 17.4385 1.92774 17.4781C2.0441 17.6234 2.20391 17.7169 2.375 17.7477C2.41122 17.754 2.53316 17.761 2.88281 17.6021C3.23043 17.4442 3.67832 17.1838 4.3418 16.7965C4.39461 16.7656 4.44886 16.7332 4.50391 16.7008C4.99631 16.4105 5.57792 16.0673 6.25 15.8883V2.46543C6.22602 2.4761 6.20084 2.486 6.17578 2.49765ZM16.5088 14.5006C17.0611 14.5006 17.5088 14.9483 17.5088 15.5006C17.5086 16.0527 17.0609 16.5006 16.5088 16.5006H16.5C15.9478 16.5006 15.5002 16.0527 15.5 15.5006C15.5 14.9483 15.9477 14.5006 16.5 14.5006H16.5088Z" fill="CurrentColor" />
                          </svg>
                          </div>
                          <div className="font-semibold text-[clamp(14px,1.1vw,16px)]">
                            {t("Maps Location")}:
                          </div>
                        </div>
                        <a
                          href="https://maps.google.com/?q=24.7136,46.6753"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[clamp(12px,1.1vw,16px)] text-blue-600 break-all"
                        >
                          {contactInfo.mapsLocation}
                        </a>
                      </div>
                    </div>

                    {/* العمود الثاني */}
                    <div className="flex flex-col gap-8">
                      {/* Email */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="text-text-primary">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.07923 2.7875C11.0441 2.7375 12.9541 2.7375 14.9191 2.7875C18.157 2.8695 19.9413 2.91525 21.2843 4.25625C22.6291 5.61122 22.6655 7.3485 22.7325 10.5014C22.7535 11.5083 22.7535 12.4866 22.7325 13.4936C22.6656 16.6461 22.6288 18.3819 21.2872 19.7348C19.9422 21.0788 18.158 21.1244 14.92 21.2064C13.9381 21.2314 12.9691 21.2445 12.0001 21.2445C11.0312 21.2445 10.0621 21.2314 9.0802 21.2064C5.84234 21.1244 4.05795 21.0785 2.71497 19.7377C1.37001 18.3827 1.33274 16.6454 1.26575 13.4926C1.24475 12.4856 1.24475 11.5073 1.26575 10.5004C1.33275 7.34739 1.37004 5.6112 2.71204 4.2582C4.05703 2.91427 5.84128 2.8695 9.07923 2.7875ZM14.881 4.28554C12.9421 4.23555 11.0572 4.23555 9.11731 4.28554C6.07934 4.36254 4.69256 4.39684 3.77356 5.31582C2.85556 6.24182 2.82677 7.58664 2.76477 10.5316C2.74378 11.5165 2.74378 12.4745 2.76477 13.4603C2.82677 16.4053 2.85648 17.7502 3.77747 18.6771C4.69447 19.593 6.08048 19.6294 9.11829 19.7064C11.0572 19.7564 12.9421 19.7564 14.882 19.7064C17.9199 19.6294 19.3057 19.5941 20.2247 18.6752C21.1427 17.7492 21.1715 16.4053 21.2335 13.4603C21.2545 12.4755 21.2545 11.5175 21.2335 10.5316C21.1715 7.58664 21.1428 6.24086 20.2218 5.31386C19.3048 4.39817 17.9186 4.36253 14.881 4.28554ZM6.35462 8.11074C6.56562 7.75474 7.02596 7.63509 7.38196 7.84609L10.3234 9.58633C11.7954 10.4533 12.2039 10.4533 13.6779 9.58633L16.6183 7.84707C16.9753 7.63607 17.4356 7.75472 17.6456 8.11172C17.8564 8.46859 17.7387 8.92802 17.382 9.13808L14.4396 10.8783C13.4588 11.4562 12.73 11.7444 12.0001 11.7445C11.2711 11.7445 10.5416 11.4553 9.56165 10.8783L6.61829 9.13711C6.26276 8.92603 6.14393 8.46654 6.35462 8.11074Z" fill="#161616" />
                            </svg>
                          </div>
                          <div className="font-semibold text-[clamp(14px,1.1vw,16px)]">
                            {t("Email")}:
                          </div>
                        </div>
                        <div className="text-[clamp(12px,1.1vw,16px)] break-words">
                          {contactInfo.email}
                        </div>
                      </div>

                      {/* Website */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <GlobeIcon className="text-text-primary w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                          <div className="font-semibold text-[clamp(14px,1.1vw,16px)]">
                            {t("Company Website")}:
                          </div>
                        </div>
                        <div className="text-[clamp(12px,1.1vw,16px)] break-all">
                          {contactInfo.website}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            />





            <ReusableCollapsible
              title={t("Social Media Accounts")}
              initiallyOpen={isOpen.social}
              dir={local === "ar" ? "rtl" : "ltr"}
              onOpenChange={(open) => handleToggle("social", open)}
              content={
                <div className="px-4 pb-4">
                  {/* grid: عمود واحد بالموبايل، عمودين من md وفوق */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* العمود الأول */}
                    <div className="flex flex-col gap-6">
                      {/* LinkedIn */}
                      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-start gap-y-2 md:gap-y-0 md:gap-x-4 lg:gap-x-6">
                        {/* أيقونة + لايبل (دايمًا جنب بعض) */}
                        <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
                          <LinkedinIcon className="text-text-primary sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                          <span className="font-semibold text-[clamp(14px,1.1vw,16px)]">
                            {t("LinkedIn")}:
                          </span>
                        </div>

                        {/* المحتوى (يبقى في نفس الـ grid عشان يرجع جانبياً على md+) */}
                        <a
                          href={socialMedia.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[clamp(12px,1.1vw,16px)] text-on-surface-primary break-all"
                        >
                          {socialMedia.linkedin}
                        </a>
                      </div>

                      {/* Facebook */}
                      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-start gap-y-2 md:gap-y-0 md:gap-x-4 lg:gap-x-6">
                        <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
                          <FacebookIcon className="text-text-primary  sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                          <span className="font-semibold text-[clamp(14px,1.1vw,16px)]">
                            {t("Facebook")}:
                          </span>
                        </div>
                        <div className="text-[clamp(12px,1.1vw,16px)] text-on-surface-primary break-words">
                          {socialMedia.facebook}
                        </div>
                      </div>
                    </div>

                    {/* العمود الثاني */}
                    <div className="flex flex-col gap-6">
                      {/* Twitter */}
                      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-start gap-y-2 md:gap-y-0 md:gap-x-4 lg:gap-x-6">
                        <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
                          <XIcon className="text-text-primary w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                          <span className="font-semibold text-[clamp(14px,1.1vw,16px)]">
                            {t("Twitter")}:
                          </span>
                        </div>
                        <div className="text-[clamp(12px,1.1vw,16px)] text-on-surface-primary break-words">
                          {socialMedia.twitter}
                        </div>
                      </div>

                      {/* Instagram */}
                      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-start gap-y-2 md:gap-y-0 md:gap-x-4 lg:gap-x-6">
                        <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
                          <InstagramIcon className="text-text-primary  sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                          <span className="font-semibold text-[clamp(14px,1.1vw,16px)]">
                            {t("Instagram")}:
                          </span>
                        </div>
                        <div className="text-[clamp(12px,1.1vw,16px)] text-on-surface-primary break-words">
                          {socialMedia.instagram}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            />






            <ReusableCollapsible
              title={t("Legal Details")}
              initiallyOpen={isOpen.policy}
              dir={local === "ar" ? "rtl" : "ltr"}
              onOpenChange={(open) => handleToggle("policy", open)}
              content={
                <div className="px-4 pb-4">

                  {/* VAT + CR */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* VAT */}
                    <div className="flex items-center gap-3">
                      <span className="font-lato font-semibold text-[clamp(14px,1.1vw,16px)] w-[162px] text-text-primary">
                        {t("VAT")}:
                      </span>
                      <span className="font-lato font-normal text-[clamp(12px,1.1vw,16px)] w-full text-text-primary break-words">
                        {legalDetails.vat}
                      </span>
                    </div>

                    {/* CR */}
                    <div className="flex items-center gap-3">
                      <span className="font-lato font-semibold text-[clamp(14px,1.1vw,16px)] w-[169px] text-text-primary">
                        {t("CR")}:
                      </span>
                      <span className="font-lato font-normal text-[clamp(12px,1.1vw,16px)] w-full text-text-primary break-words">
                        {legalDetails.cr}
                      </span>
                    </div>
                  </div>
                  {/* Terms & Conditions */}
                  <div className="flex flex-col gap-4">
                    <div className="font-lato font-semibold mt-4 text-[clamp(14px,1.1vw,16px)] text-secondary-dark">
                      {t("Terms & Conditions")}
                    </div>

                    <div className="flex flex-col gap-6">
                      {termsConditions.map((term, index) => (
                        <div
                          key={index}
                          className="flex flex-col gap-2 border rounded-lg p-4 shadow-sm"
                        >
                          <div className="font-lato font-semibold text-[clamp(14px,1.1vw,16px)] text-text-primary">
                            {term.title}
                          </div>
                          <div className="font-lato font-normal text-[clamp(12px,1.1vw,16px)] e text-text-primary break-words">
                            {term.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200 my-6" />

                  {/* Privacy Policy */}
                  <div className="flex flex-col gap-4">
                    <div className="font-lato font-semibold text-[clamp(14px,1.1vw,16px)] text-secondary-dark">
                      {t("Privacy Policy")}
                    </div>

                    <div className="flex flex-col gap-6">
                      {privacyPolicy.map((policy, index) => (
                        <div
                          key={index}
                          className="flex flex-col gap-2 border rounded-lg p-4 shadow-sm"
                        >
                          <div className="font-lato font-semibold text-[clamp(14px,1.1vw,16px)] text-text-primary">
                            {policy.title}
                          </div>
                          <div className="font-lato font-normal  text-[clamp(12px,1.1vw,16px)] text-text-primary break-words">
                            {policy.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              }
            />






            <ReusableCollapsible
              title={t("Maps Location")}
              initiallyOpen={isOpen.mapsLocation}
              dir={local === 'ar' ? 'rtl' : 'ltr'}
              onOpenChange={(open) => handleToggle("mapsLocation", open)}
              content={<div>      <div className="w-full h-[332px] bg-[url(/background.png)] bg-cover bg-center rounded" />
                <p className="font-title-14px-regular font-[number:var(--title-14px-regular-font-weight)] text-on-surface-primary text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] [font-style:var(--title-14px-regular-font-style)]">
                  {t("245, King Fahd Road, Al Olaya, Saudi Arabia, KSA")}
                </p></div>}

            />
          </CardContent>
        </Card>
      </div></div>
  );
};
