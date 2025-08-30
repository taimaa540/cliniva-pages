import React from "react";
import { Card, CardContent } from '../../../../components/ui/card';
import { Button } from '../../../../components/ui/button';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../../../../components/ui/collapsible';
import { ChevronDownIcon, Edit2Icon, BellIcon, PhoneIcon, MailIcon, MapPinIcon, GlobeIcon, LinkedinIcon, FacebookIcon, TwitterIcon, InstagramIcon } from 'lucide-react';
  import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
  import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
   import XIcon from '@mui/icons-material/X';
   import DarkModeToggle from "../../../ElementUsersNoDataTo/DarkMode";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const companyInfo = {
  logo: "/vector.svg",
  tradeName: "MedCare Group",
  legalName: "MedCare Healthcare Services Inc.",
  yearEstablished: "2010",
  overview: "MedCare Group is a leading healthcare provider offering integrated medical services across multiple regions. Our mission is to deliver high-quality, patient-centered care.",
  goals: "Expand to 50+ clinics by 2027 Implement fully digital patient records",
  vision: "To be the most trusted healthcare network in the region by 2030.",
  ceoName: "Dr. Sara Al-Harbi"
};

const contactInfo = {
  phoneNumbers: "+966 55 123 4567, +966 11 987 6543",
  email: "info@medcaregroup.com",
  physicalAddress: "245, King Fahd Road, Al Olaya, Saudi Arabia, KSA",
  website: "www.medcaregroup.com",
  mapsLocation: "www.medcaregroup.com"
};

const socialMedia = {
  linkedin: "https://www.linkedin.com/company/medcare-group",
  facebook: "https://facebook.com/medcaregroup",
  twitter: "https://twitter.com/medcaregroup",
  instagram: "https://instagram.com/medcaregroup"
};

const legalDetails = {
  vat: "31045678900123",
  cr: "1010456789"
};

const termsConditions = [
  {
    title: "Privacy & Data Protection Policy",
    description: "We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our system."
  },
  {
    title: "Terms and Conditions of Use",
    description: "MedCare is committed to protecting your privacy. We collect and use personal data solely to improve patient care. Data is stored securely and never shared without consent."
  }
];

const privacyPolicy = [
  {
    title: "Privacy & Data Protection Policy",
    description: "We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our system."
  },
  {
    title: "Terms and Conditions of Use",
    description: "MedCare is committed to protecting your privacy. We collect and use personal data solely to improve patient care. Data is stored securely and never shared without consent."
  }
];
interface NoDataSectionProps {
  local: string;
  dark: boolean;
  handelDarkClick: () => void;
  handleLanguageClick: () => void;
}

export const LegalDocumentsSection = ({handleLanguageClick,
  local,
  dark,
  handelDarkClick,}: NoDataSectionProps): JSX.Element => {
    const { t, i18n } = useTranslation();
      useEffect(() => {
        i18n.changeLanguage(local);
      }, []);
  return (
    
    <div className="flex flex-col items-start gap-4 p-4 w-full">
<header className="flex h-[50px] justify-between pl-1 pr-0 py-0 self-stretch w-full items-center">
        <div className="flex flex-col w-[340px] items-start gap-1.5 px-0 py-0.5">
          <h1
            className={`self-stretch mt-[-1.00px] font-h5-22px-bold font-[number:var(--h5-22px-bold-font-weight)] ${
              dark ? "text-white" : "text-[#2a2b2a]"
            } text-on-surface-primary text-[length:var(--h5-22px-bold-font-size)] tracking-[var(--h5-22px-bold-letter-spacing)] leading-[var(--h5-22px-bold-line-height)] [font-style:var(--h5-22px-bold-font-style)]`}
          >
            {t("Users")}
          </h1>
        </div>

        <div className="inline-flex gap-3 flex-[0_0_auto] rounded-[28px] items-center">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="p-2.5 bg-secondary-light rounded-[20px] h-auto"
            >
              <BellIcon className="text-secondary w-5 h-5" />
            </Button>
            <div className="absolute top-1 left-4 w-2 h-2 bg-[#fa812d] rounded-full" />
          </div>

          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className={`p-2.5 ${
                local === "ar" ? "bg-[green]" : "bg-secondary-light"
              } rounded-[20px] h-auto transition-all duration-[1000ms]`}
              onClick={handleLanguageClick}
            >
              <TranslateIcon className="text-secondary w-5 h-5" />
            </Button>
          </div>

          <div className="w-10 h-[17.5px] relative">
            <DarkModeToggle dark={dark} handelDarkClick={handelDarkClick} />
          </div>

          <div className="items-center gap-3 inline-flex flex-[0_0_auto]">
            <div className="inline-flex items-center w-[40px] h-[40px] gap-2.5 flex-[0_0_auto] bg-app-primary rounded-3xl" />
            <div className="flex-col items-start gap-1 inline-flex flex-[0_0_auto]">
              <div
                className={`w-fit mt-[-1.00px] ${
                  dark ? "text-white" : "text-[#2a2b2a]"
                } font-title-16px-bold font-[number:var(--title-16px-bold-font-weight)] text-on-surface-primary text-[length:var(--title-16px-bold-font-size)] tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] whitespace-nowrap [font-style:var(--title-16px-bold-font-style)]`}
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


<div className="flex flex-col w-full gap-5 p-5 bg-bg rounded-2xl">
<Button className="w-[200px] h-10 bg-secondary-dark rounded-[20px] text-surface-default font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-[length:var(--btn-14px-medium-font-size)] leading-[var(--btn-14px-medium-line-height)] tracking-[var(--btn-14px-medium-letter-spacing)] [font-style:var(--btn-14px-medium-font-style)] h-auto self-end">
<Edit2Icon className="text-secondary w-4 h-4 mr-1" />
Edit
        </Button>



        
<div className="flex flex-col gap-4 w-full">
  <Collapsible defaultOpen>
    <Card className="bg-surface-default rounded-2xl">
      <CollapsibleTrigger className="w-full">
        <CardContent className="p-4">
          <div className="flex items-center justify-between w-full">
            <div
              style={{
              
                fontWeight: 600,
                fontStyle: "SemiBold",
                fontSize: "16px",
                lineHeight: "124%",
                letterSpacing: "0%",
              }}
              className="tx-text-accent"
            >
              Company information
            </div>
            <ChevronDownIcon className="text-secondary w-8 h-8" />
          </div>
        </CardContent>
      </CollapsibleTrigger>

      <CollapsibleContent>
        <CardContent className="px-4 pb-4">
          {/* نستخدم flex أفقياً لتقسيم الأعمدة مع مسافات متساوية */}
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
                  Logo:
                </div>
                <img className="w-12 h-12" alt="Vector" src={companyInfo.logo} />
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
                  Trade Name:
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
                  Year of Establishment:
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
                  Overview:
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
                  Goals:
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
                  Legal Name:
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
                  Vision:
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
                  CEO Name:
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
          </div>
        </CardContent>
      </CollapsibleContent>
    </Card>
  </Collapsible>
</div>





<Collapsible defaultOpen>
  <Card className="bg-surface-default rounded-2xl">
    <CollapsibleTrigger className="w-full">
      <CardContent className="p-4 flex items-center justify-between">
        <div
          style={{
            fontFamily: "Lato",
            fontWeight: 600,
            fontStyle: "SemiBold",
            fontSize: "16px",
            lineHeight: "124%",
            letterSpacing: "0%",
          }}
          className="text-primary-dark"
        >
          Company Contact Information
        </div>
        <ChevronDownIcon className="text-secondary w-8 h-8" />
      </CardContent>
    </CollapsibleTrigger>

    <CollapsibleContent>
      <CardContent className="px-4 pb-4">
        <div className="grid grid-cols-2 gap-6">
          {/* العمود الأول */}
          <div className="flex flex-col gap-8"> {/* تم زيادة المسافة بين الصفوف */}
            <div className="grid grid-cols-[auto_150px_1fr] items-center gap-3">
              <PhoneIcon className="text-secondary w-6 h-6" />
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
                Phone Numbers:
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
              <MapPinIcon className="text-secondary w-6 h-6" />
              <div
                style={{
                  fontFamily: "Lato",
                  fontWeight: 600,
                  fontStyle: "SemiBold",
                  fontSize: "16px",
                  lineHeight: "124%",
                  letterSpacing: "0%",
                }}
                className="text-primary"
              >
                Physical Address:
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
                className="text-primary"
              >
                {contactInfo.physicalAddress}
              </div>
            </div>

            <div className="grid grid-cols-[auto_150px_1fr] items-center gap-3">
              <MapOutlinedIcon className="text-secondary w-6 h-6" />
              <div
                style={{
                  fontFamily: "Lato",
                  fontWeight: 600,
                  fontStyle: "SemiBold",
                  fontSize: "16px",
                  lineHeight: "124%",
                  letterSpacing: "0%",
                }}
                className="text-primary"
              >
                Maps Location:
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
                className="text-primary"
              >
                {contactInfo.mapsLocation}
              </a>
            </div>
          </div>

          {/* العمود الثاني */}
          <div className="flex flex-col gap-8"> {/* تم زيادة المسافة بين الصفوف */}
            <div className="grid grid-cols-[auto_150px_1fr] items-center gap-3">
              <LocalPostOfficeOutlinedIcon className="text-secondary w-6 h-6" />
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
                Email:
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
              <GlobeIcon className="text-secondary w-6 h-6" />
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
                Company Website:
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
        </div>
      </CardContent>
    </CollapsibleContent>
  </Card>
</Collapsible>









<Collapsible defaultOpen>
  <Card className="bg-surface-default rounded-2xl">
    <CollapsibleTrigger className="w-full">
      <CardContent className="p-4 flex items-center justify-between">
        <div
          style={{
            fontFamily: "Lato",
            fontWeight: 600,
            fontStyle: "SemiBold",
            fontSize: "16px",
            lineHeight: "124%",
            letterSpacing: "0%",
          }}
          className="text-primary-dark"
        >
          Social Media Accounts
        </div>
        <ChevronDownIcon className="text-secondary w-8 h-8" />
      </CardContent>
    </CollapsibleTrigger>

    <CollapsibleContent>
      <CardContent className="px-4 pb-4">
        <div className="grid grid-cols-2 gap-6">
          
          {/* العمود الأول */}
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-[auto_150px_1fr] items-center gap-3">
              <LinkedinIcon className="text-secondary w-6 h-6" />
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
                LinkedIn:
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
              <FacebookIcon className="text-secondary w-6 h-6" />
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
                Facebook:
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
          <div className="flex flex-col gap-8">
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
                <XIcon className="text-secondary w-4 h-4" />
                Twitter:
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

            <div className="grid grid-cols-[auto_150px_1fr] items-center gap-3">
              <InstagramIcon className="text-secondary w-6 h-6" />
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
                Instagram:
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

        </div>
      </CardContent>
    </CollapsibleContent>
  </Card>
</Collapsible>





<Card className="bg-surface-default rounded-2xl p-4 flex flex-col gap-8">
  {/* Legal Details */}
  <div className="flex flex-col gap-4">
    <div className="font-title-16px-bold text-primary-dark">
      Legal Details
    </div>

    {/* جدولة VAT و CR */}
    <div className="grid grid-cols-4 gap-x-4">
  <div className="font-lato font-semibold text-[16px] leading-[124%] tx-text-primary">
    VAT:
  </div>
  <div className="font-lato font-normal text-[14px] leading-[125%] text-primary">
    {legalDetails.vat}
  </div>
  <div className="font-lato font-semibold text-[16px] leading-[124%] tx-text-primary">
    CR:
  </div>
  <div className="font-lato font-normal text-[14px] leading-[125%] text-primary">
    {legalDetails.cr}
  </div>
</div>

  </div>

  {/* Divider */}
  <div className="border-t border-gray-200" />
{/* Terms & Conditions */}
<div className="flex flex-col gap-4">
  <div className="font-lato font-semibold text-[16px] leading-[124%] text-secondary-dark">
    Terms & Conditions
  </div>

  <div className="grid grid-cols-[200px,1fr] gap-x-16 gap-y-8">
    {termsConditions.map((term, index) => (
      <React.Fragment key={index}>
        <div className="font-lato font-semibold text-[16px] leading-[124%] tx-secondary">
          {term.title}
        </div>
        <div className="font-lato font-normal text-[14px] leading-[125%] align-middle tx-secondary break-words">
          {term.description}
        </div>
      </React.Fragment>
    ))}
  </div>
</div>
  {/* Divider */}
  <div className="border-t border-gray-200" />

  
    

   {/* Privacy Policy */}
<div className="flex flex-col gap-4">
  <div className="font-lato font-semibold text-[16px] leading-[124%] text-secondary-dark">
    Privacy Policy
  </div>

  <div className="grid grid-cols-[200px,1fr] gap-x-16 gap-y-8">
    {privacyPolicy.map((policy, index) => (
      <React.Fragment key={index}>
        <div className="font-lato font-semibold text-[16px] leading-[124%] text-primary">
          {policy.title}
        </div>
        <div className="font-lato font-normal text-[14px] leading-[125%] align-middle text-primary break-words">
          {policy.description}
        </div>
      </React.Fragment>
    ))}
  </div>
</div>
  
</Card>



<Card className="bg-surface-default rounded-2xl p-4 flex flex-col gap-8">
<h2> Map Location</h2>
</Card>

</div>

</div>

  )
}