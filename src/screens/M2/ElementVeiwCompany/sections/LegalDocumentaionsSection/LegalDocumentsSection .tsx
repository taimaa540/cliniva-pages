import React from "react";
import { Card, CardContent } from "../../../../../components/ui/card";
import { Button } from "../../../../../components/ui/button";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "../../../../../components/ui/collapsible";
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
import { useState } from "react";
import ReusableCollapsible from "../../../../../components/ui/Collapsibles";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import XIcon from "@mui/icons-material/X";

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
}

export const LegalDocumentsSection = ({
  handleLanguageClick,
  local,
  dark,
  handelDarkClick,
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
  return (
    <div
      className={`flex flex-col w-full overflow-hidden items-start gap-4  py-4  self-stretch relative bg-background-primary
      } `}
    >
      <header className="flex h-[50px] justify-between pl-[4px] bg-background-primary pr-0 py-0 self-stretch w-full items-center">
        <div className="flex flex-col w-[340px] items-start gap-1.5 ">
          <h1
            className={`self-stretch mt-[-1.00px] font-h5-22px-bold font-[number:var(--h5-22px-bold-font-weight)] 
              text-text-primary 
            } text-on-surface-primary text-[length:var(--h5-22px-bold-font-size)] tracking-[var(--h5-22px-bold-letter-spacing)] leading-[var(--h5-22px-bold-line-height)] [font-style:var(--h5-22px-bold-font-style)]`}
          >
            <div className="flex items-center gap-4 rounded-2xl ">
       
              <div className="flex flex-col">
                <h1 className="font-bold text-[22px] text-text-primary">
                  {t("Medical Facilities")}
                </h1>
                <p className="font-semibold text-[14px] text-text-primary ">
                  {t("Medical Company Details")}
                </p>
              </div>
            </div>
          </h1>
        </div>

        <div className="inline-flex gap-3 flex-[0_0_auto] rounded-[28px] items-center">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="p-2.5 bg-secondary-light rounded-[20px] h-auto"
            >
              <BellIcon className="w-5 h-5 text-text-primary" />
            </Button>
            <div className="absolute top-1 left-4 w-2 h-2 bg-[#fa812d] rounded-full" />
          </div>
          <div className="flex gap-3 items-center">
          <div className="relative ">
            <Button
              variant="ghost"
              size="icon"
              className={`p-4.5 bg-secondary-light ${
                local === "ar" ? "bg-[green]" : "bg-secondary-light"
              } rounded-[20px] h-auto transition-all duration-[1000ms]`}
              onClick={handleLanguageClick}
            >
              <TranslateIcon className="w-5 h-5 text-text-primary" />
            </Button>
          </div>

          <div className= " flex justify-center w-10 ml-6  h-[17.5px] relative">
          
          </div>
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
                {t("      Admin    ")}
              </div>
            </div>
          </div>
        </div>
      </header>

      <Card className="flex flex-col h-auto items-start gap-6 p-5 mt-[10px] bg-background-tertiary relative self-stretch w-full rounded-2xl overflow-hidden">
        <CardContent className="p-0 w-full overflow-y-auto gap-5 h-auto ">
          <div className="flex justify-end" dir={local === 'ar' ? 'rtl' : 'ltr'}>
          <Button className="w-[200px] h-10 bg-secondary-dark text-text-inverse rounded-[20px]   font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-[length:var(--btn-14px-medium-font-size)] leading-[var(--btn-14px-medium-line-height)] tracking-[var(--btn-14px-medium-letter-spacing)] [font-style:var(--btn-14px-medium-font-style)] h-auto self-end"  >
            <Edit2Icon className={"  w-4 h-4 mr-1 text-text-inverse"} />
            {t("Edit")}
          </Button>
</div>



      <ReusableCollapsible
            title=  {t("Company information")}
            initiallyOpen={isOpen.clinicInfo}
            onOpenChange={(open) => handleToggle("clinicInfo", open)}
               dir={local === 'ar' ? 'rtl' : 'ltr'}
            content={<div  className="px-4 pb-4" >         {/* نستخدم flex أفقياً لتقسيم الأعمدة مع مسافات متساوية */}
                  <div className="flex gap-6">
                    {/* العمود الأول */}
                    <div className="flex flex-col gap-6 w-1/2">
                      <div className="grid grid-cols-[200px_1fr] items-start gap-2">
                        <div
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 600,
                            fontStyle: "SemiBold",
                            fontSize: "16px",
                            lineHeight: "124%",
                            letterSpacing: "0%",
                          }}
                        >
                          {t("Logo:")}
                        </div>
                        <img className="w-12 h-12" src="/logo.png"></img>
                      </div>

                      <div className="grid grid-cols-[200px_1fr] items-start gap-2">
                        <div
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 600,
                            fontStyle: "SemiBold",
                            fontSize: "16px",
                            lineHeight: "124%",
                            letterSpacing: "0%",
                          }}
                        >
                          {t("Trade Name")} :
                        </div>
                        <div
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 400,
                            fontStyle: "Regular",
                            fontSize: "14px",
                            lineHeight: "125%",
                            letterSpacing: "0%",
                          }}
                        >
                          {companyInfo.tradeName}
                        </div>
                      </div>

                      <div className="grid grid-cols-[200px_1fr] items-start gap-2">
                        <div
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 600,
                            fontStyle: "SemiBold",
                            fontSize: "16px",
                            lineHeight: "124%",
                            letterSpacing: "0%",
                          }}
                        >
                          {t("Year of Establishment")}:
                        </div>
                        <div
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 400,
                            fontStyle: "Regular",
                            fontSize: "14px",
                            lineHeight: "125%",
                            letterSpacing: "0%",
                          }}
                        >
                          {companyInfo.yearEstablished}
                        </div>
                      </div>

                      <div className="grid grid-cols-[200px_1fr] items-start gap-2">
                        <div
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 600,
                            fontStyle: "SemiBold",
                            fontSize: "16px",
                            lineHeight: "124%",
                            letterSpacing: "0%",
                          }}
                        >
                          {t("Overview")}:
                        </div>
                        <div
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 400,
                            fontStyle: "Regular",
                            fontSize: "14px",
                            lineHeight: "125%",
                            letterSpacing: "0%",
                          }}
                        >
                          {companyInfo.overview}
                        </div>
                      </div>

                      <div className="grid grid-cols-[200px_1fr] items-start gap-2">
                        <div
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 600,
                            fontStyle: "SemiBold",
                            fontSize: "16px",
                            lineHeight: "124%",
                            letterSpacing: "0%",
                          }}
                        >
                          {t("Goals")}:
                        </div>
                        <div
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 400,
                            fontStyle: "Regular",
                            fontSize: "14px",
                            lineHeight: "125%",
                            letterSpacing: "0%",
                          }}
                        >
                          {companyInfo.goals}
                        </div>
                      </div>
                    </div>

                    {/* العمود الثاني (الثالث والرابع) */}
                    <div className="flex flex-col gap-6 w-1/2">
                      <div className="grid grid-cols-[200px_1fr] items-start gap-2">
                        <div
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 600,
                            fontStyle: "SemiBold",
                            fontSize: "16px",
                            lineHeight: "124%",
                            letterSpacing: "0%",
                          }}
                        >
                          {t("Legal Name")}:
                        </div>
                        <div
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 400,
                            fontStyle: "Regular",
                            fontSize: "14px",
                            lineHeight: "125%",
                            letterSpacing: "0%",
                          }}
                        >
                          {companyInfo.legalName}
                        </div>
                      </div>

                      <div className="grid grid-cols-[200px_1fr] items-start gap-2">
                        <div
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 600,
                            fontStyle: "SemiBold",
                            fontSize: "16px",
                            lineHeight: "124%",
                            letterSpacing: "0%",
                          }}
                        >
                          {t("Vision")}:
                        </div>
                        <div
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 400,
                            fontStyle: "Regular",
                            fontSize: "14px",
                            lineHeight: "125%",
                            letterSpacing: "0%",
                          }}
                        >
                          {companyInfo.vision}
                        </div>
                      </div>

                      <div className="grid grid-cols-[200px_1fr] items-start gap-2">
                        <div
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 600,
                            fontStyle: "SemiBold",
                            fontSize: "16px",
                            lineHeight: "124%",
                            letterSpacing: "0%",
                          }}
                        >
                          {t("CEO Name")}:
                        </div>
                        <div
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 400,
                            fontStyle: "Regular",
                            fontSize: "14px",
                            lineHeight: "125%",
                            letterSpacing: "0%",
                          }}
                        >
                          {companyInfo.ceoName}
                        </div>
                      </div>
                    </div>
                  </div></div>}

          />


 


               <ReusableCollapsible
            title= {t("Company Contact Information")}
            initiallyOpen={isOpen.contactInfo}
               dir={local === 'ar' ? 'rtl' : 'ltr'}
            onOpenChange={(open) => handleToggle("contactInfo", open)}
            content={<div className="px-4 pb-4">     <div className="grid grid-cols-2 gap-6">
                    {/* العمود الأول */}
                    <div className="flex flex-col gap-8">
                      {" "}
                      {/* تم زيادة المسافة بين الصفوف */}
                      <div className="grid grid-cols-[auto_150px_1fr] items-center gap-3">
                        <PhoneIcon className="text-text-primary w-6 h-6" />
                        <div
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 600,
                            fontStyle: "SemiBold",
                            fontSize: "16px",
                            lineHeight: "124%",
                            letterSpacing: "0%",
                          }}
                          className=""
                        >
                          {t("Phone Numbers")}:
                        </div>
                        <div
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 400,
                            fontStyle: "Regular",
                            fontSize: "14px",
                            lineHeight: "125%",
                            letterSpacing: "0%",
                          }}
                          className=""
                        >
                          {contactInfo.phoneNumbers}
                        </div>
                      </div>
                      <div className="grid grid-cols-[auto_150px_1fr] items-center gap-3">
                        <MapPinIcon className="text-text-primaryw-6 h-6" />
                        <div
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 600,
                            fontStyle: "SemiBold",
                            fontSize: "16px",
                            lineHeight: "124%",
                            letterSpacing: "0%",
                          }}
                          className="text-text-primary"
                        >
                          {t("Physical Address")}:
                        </div>
                        <div
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 400,
                            fontStyle: "Regular",
                            fontSize: "14px",
                            lineHeight: "125%",
                            letterSpacing: "0%",
                          }}
                          className="text-text-primary"
                        >
                          {contactInfo.physicalAddress}
                        </div>
                      </div>
                      <div className="grid grid-cols-[auto_150px_1fr] items-center gap-3">
                        <MapOutlinedIcon className="text-text-primary w-6 h-6" />
                        <div
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 600,
                            fontStyle: "SemiBold",
                            fontSize: "16px",
                            lineHeight: "124%",
                            letterSpacing: "0%",
                          }}
                          className="text-text-primary"
                        >
                          {t("Maps Location")}:
                        </div>
                        <a
                          href="https://maps.google.com/?q=24.7136,46.6753"
                          rel="noopener noreferrer"
                          target="_blank"
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 400,
                            fontStyle: "Regular",
                            fontSize: "14px",
                            lineHeight: "125%",
                            letterSpacing: "0%",
                          }}
                          className="text-text-primary"
                        >
                          {contactInfo.mapsLocation}
                        </a>
                      </div>
                    </div>

                    {/* العمود الثاني */}
                    <div className="flex flex-col gap-8">
                      {" "}
                      {/* تم زيادة المسافة بين الصفوف */}
                      <div className="grid grid-cols-[auto_150px_1fr] items-center gap-3">
                        <LocalPostOfficeOutlinedIcon className="text-text-primary w-6 h-6" />
                        <div
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 600,
                            fontStyle: "SemiBold",
                            fontSize: "16px",
                            lineHeight: "124%",
                            letterSpacing: "0%",
                          }}
                          className="text-on-surface-primary"
                        >
                          {t("Email")}:
                        </div>
                        <div
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 400,
                            fontStyle: "Regular",
                            fontSize: "14px",
                            lineHeight: "125%",
                            letterSpacing: "0%",
                          }}
                          className="text-on-surface-primary"
                        >
                          {contactInfo.email}
                        </div>
                      </div>
                      <div className="grid grid-cols-[auto_150px_1fr] items-center gap-3">
                        <GlobeIcon className="text-text-primary w-6 h-6" />
                        <div
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 600,
                            fontStyle: "SemiBold",
                            fontSize: "16px",
                            lineHeight: "124%",
                            letterSpacing: "0%",
                          }}
                          className="text-on-surface-primary"
                        >
                          {t("Company Website")} :
                        </div>
                        <div
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 400,
                            fontStyle: "Regular",
                            fontSize: "14px",
                            lineHeight: "125%",
                            letterSpacing: "0%",
                          }}
                          className="text-on-surface-primary"
                        >
                          {contactInfo.website}
                        </div>
                      </div>
                    </div>
                  </div></div>}

          />



      <ReusableCollapsible
            title= {t("Social Media Accounts")}
            initiallyOpen={isOpen.social}
               dir={local === 'ar' ? 'rtl' : 'ltr'}
            onOpenChange={(open) => handleToggle("social", open)}
            content={<div className="px-4 pb-4">        <div className="grid grid-cols-2 gap-6">
                    {/* العمود الأول */}
                    <div className="flex flex-col gap-8">
                      <div className="grid grid-cols-[auto_150px_1fr] items-center gap-3">
                        <LinkedinIcon className="text-text-primary w-6 h-6" />
                        <div
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 600,
                            fontStyle: "SemiBold",
                            fontSize: "16px",
                            lineHeight: "124%",
                            letterSpacing: "0%",
                          }}
                          className="text-on-surface-primary"
                        >
                          {t("LinkedIn")} :
                        </div>
                        <a
                          href={socialMedia.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 400,
                            fontStyle: "Regular",
                            fontSize: "14px",
                            lineHeight: "125%",
                            letterSpacing: "0%",
                          }}
                          className="text-on-surface-primary"
                        >
                          {socialMedia.linkedin}
                        </a>
                      </div>

                      <div className="grid grid-cols-[auto_150px_1fr] items-center gap-3">
                        <FacebookIcon className="text-text-primary w-6 h-6" />
                        <div
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 600,
                            fontStyle: "SemiBold",
                            fontSize: "16px",
                            lineHeight: "124%",
                            letterSpacing: "0%",
                          }}
                          className="text-on-surface-primary"
                        >
                          {t("Facebook")}:
                        </div>
                        <div
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 400,
                            fontStyle: "Regular",
                            fontSize: "14px",
                            lineHeight: "125%",
                            letterSpacing: "0%",
                          }}
                          className="text-on-surface-primary"
                        >
                          {socialMedia.facebook}
                        </div>
                      </div>
                    </div>

                    {/* العمود الثاني */}
                    <div className="flex flex-col gap-8 items-start text-center">
                      {/* Twitter فوق */}
                      <div className="grid grid-cols-[auto_150px_1fr] items-center gap-3">
                        <div className="w-6 h-6 bg-[url(/subtract.svg)] bg-contain bg-no-repeat" />
                        <div
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 600,
                            fontStyle: "SemiBold",
                            fontSize: "16px",
                            lineHeight: "124%",
                            letterSpacing: "0%",
                          }}
                          className="text-on-surface-primary flex items-center gap-1"
                        >
                          <XIcon className="text-text-primary w-4 h-4 text-center" />
                          {t("Twitter")}:
                        </div>
                        <div
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 400,
                            fontStyle: "Regular",
                            fontSize: "14px",
                            lineHeight: "125%",
                            letterSpacing: "0%",
                          }}
                          className="text-on-surface-primary"
                        >
                          {socialMedia.twitter}
                        </div>
                      </div>

                      {/* Instagram تحت */}
                      <div className="grid grid-cols-[auto_100px_1fr] items-center gap-2">
                        <InstagramIcon
                          className={`text-text-primary w-6 h-6 text-center ${
                            local === "en" ? "ml-10" : "mr-10"
                          }`}
                        />
                        <div
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 600,
                            fontStyle: "SemiBold",
                            fontSize: "16px",
                            lineHeight: "124%",
                            letterSpacing: "0%",
                          }}
                          className="text-on-surface-primary"
                        >
                          {t("Instagram")}:
                        </div>
                        <div
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 400,
                            fontStyle: "Regular",
                            fontSize: "14px",
                            lineHeight: "125%",
                            letterSpacing: "0%",
                          }}
                          className="text-on-surface-primary"
                        >
                          {socialMedia.instagram}
                        </div>
                      </div>
                    </div>
                  </div></div>}

          />


          


      <ReusableCollapsible
            title=     {t("Legal Details")}
            initiallyOpen={isOpen.policy}
               dir={local === 'ar' ? 'rtl' : 'ltr'}
            onOpenChange={(open) => handleToggle("policy", open)}
            content={<div className=" px-4 pb-4"> 
           <div className="px-4 pb-4">
  <div className="flex flex-wrap items-center gap-x-10 gap-y-2">
    {/* VAT */}
    <div className="flex items-center gap-3">
      <span className="font-lato font-semibold text-start text-[16px] w-[162px] text-text-primary">{t("VAT")}:</span>
      <span className="font-lato font-normal text-[14px] w-[393px] text-text-primary">{legalDetails.vat}</span>
    </div>

    {/* CR */}
    <div className="flex items-center gap-2">
      <span className="font-lato font-semibold text-[16px] w-[169px] text-text-primary">{t("CR")}:</span>
      <span className="font-lato font-normal text-[14px] text-text-primary">{legalDetails.cr}</span>
    </div>
  </div>
</div>
                  {/* Divider */}
                  <div className="border-t border-gray-200 mt-5" />
                  {/* Terms & Conditions */}
                  <div className="flex flex-col gap-4 ">
                    <div className="font-lato font-semibold text-[16px] leading-[124%] text-secondary-dark mt-5">
                      {t("Terms & Conditions")}
                    </div>
                    <div className="flex  gap-x-[592px]  ">
                      <div className="font-semibold">    {t("Title")} </div>
                      <div className="font-semibold">  {t("Descration")} </div>
                    </div>
                    <div className="grid grid-cols-[200px,1fr] gap-x-[425px] gap-y-8">
                      {termsConditions.map((term, index) => (
                          
                        <React.Fragment key={index}>
                        
                          <div className="font-lato font-normal text-[16px] text-start leading-[124%] secondary ">
                            {term.title}
                          </div>
                          <div className="font-lato font-normal  text-[14px] text-start leading-[125%] align-middle secondary break-words  ">
                            {term.description}
                          </div>
                        
                        </React.Fragment>
                        
                      ))}
                    </div>
                  </div>
                  {/* Divider */}

                  {/* Privacy Policy */}
                  <div className="flex flex-col gap-4">
                    <div className="font-lato font-semibold text-[16px] leading-[124%] text-secondary-dark mt-5">
                      {t("Privacy Policy")}
                    </div>
                    <div className="flex gap-x-[592px]  ">
                      <div className="font-semibold">  {t("Title")} </div>
                      <div className="font-semibold">   {t("Descration")} </div>
                    </div>
                    <div className="grid grid-cols-[200px,1fr] w-full gap-x-[425px] gap-y-8 ">
                      {privacyPolicy.map((policy, index) => (
                        <React.Fragment key={index}>
                          <div className="font-lato  font-normal   text-[16px] leading-[124%] text-start text-text-primary">
                            {policy.title}
                          </div>
                          <div className="font-lato items-center  font-normal text-[14px] leading-[125%] align-middle text-start text-text-primary break-words    ">
                            {policy.description}
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div></div>}

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
    </div>
  );
};
