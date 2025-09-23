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
import { SideBarPlan2 } from "../../../../CommonComponents/SideBarPlan2";
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

    const [isOpen, setIsOpen] = useState({
      clinicInfo: true,
      contactInfo: true,
      social:true,
      workingDays: true,
      doctorsStaff: true,
      mapsLocation: true,
      policy:true,
      term:true,
    });
    const handleToggle = (key: keyof typeof isOpen, open: boolean) => {
      setIsOpen(prev => ({
        ...prev,
        [key]: open
      }))
    };
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
                <SideBarPlan2
        local={local}
        handleLanguageClick={handleLanguageClick}
        handleDarkClick={() => {}}
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
        {t("Edit Company Details")}
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
          {t("Edit Company Details")}
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
          className={`p-2.5 ${
            local === "ar" ? "bg-[green]" : "bg-secondary-light"
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
            <div className="font-semibold text-xs  min-w-[180px] sm:text-sm md:text-base lg:text-lg">
              {t("Year of Establishment")}:
            </div>
            <div className="text-[clamp(12px,1.1vw,16px)]">{companyInfo.yearEstablished}</div>
          </div>

          {/* Overview */}
          <div className="flex flex-col sm:flex-row sm:items-start  gap-6 sm:gap-4">
            <div className="font-semibold text-xs min-w-[180px] sm:text-sm md:text-base lg:text-lg">
              {t("Overview")}:
            </div>
            <div className="text-[clamp(12px,1.1vw,16px)]">{companyInfo.overview}</div>
          </div>

          {/* Goals */}
          <div className="flex flex-col sm:flex-row sm:items-center  sm:gap-4  gap-6">
            <div className="font-semibold text-xs  min-w-[180px] sm:text-sm md:text-base lg:text-lg">
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
            <div className="text-[clamp(12px,1.1vw,16px)]">{companyInfo.legalName}</div>
          </div>

          {/* Vision */}
          <div className="flex flex-col sm:flex-row sm:items-center   gap-4">
            <div className="font-semibold  min-w-[180px] text-[clamp(14px,1.1vw,16px)]">
              {t("Vision")}:
            </div>
            <div className="text-xs sm:text-sm   min-w-[180px] md:text-base">{companyInfo.vision}</div>
          </div>

          {/* CEO Name */}
          <div className="flex flex-col sm:flex-row sm:items-center  gap-4 ">
            <div className="font-semibold  text-x  min-w-[180px] text-[clamp(14px,1.1vw,16px)] lg:text-lg">
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
              <MapPinIcon className="text-text-primary w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
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
              <MapOutlinedIcon className="text-text-primary w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
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
              <LocalPostOfficeOutlinedIcon className="text-text-primary w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
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
              <LinkedinIcon className="text-text-primary w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"/>
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
              <FacebookIcon className="text-text-primary w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
              <span className="font-semiboldtext-[clamp(14px,1.1vw,16px)]">
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
              <span className="font-semiboldtext-[clamp(14px,1.1vw,16px)]">
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
              <InstagramIcon className="text-text-primary w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"/>
              <span className="font-semiboldtext-[clamp(14px,1.1vw,16px)]">
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
            title={  t("Maps Location")}
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
