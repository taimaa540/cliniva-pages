import React from "react";
import { Card, CardContent } from '../../../../components/ui/card';
import { Button } from '../../../../components/ui/button';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../../../../components/ui/collapsible';
import { ChevronDownIcon, Edit2Icon, BellIcon, PhoneIcon, MailIcon, MapPinIcon, GlobeIcon, LinkedinIcon, FacebookIcon, TwitterIcon, InstagramIcon } from 'lucide-react';
  import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
  import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
   import XIcon from '@mui/icons-material/X';
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

export const LegalDocumentsSection = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start gap-4 p-4 w-full">
<div className="flex w-full items-center justify-between">
<div className="flex items-center gap-2">
<div className="font-h5-22px-bold font-[number:var(--h5-22px-bold-font-weight)] text-on-surface-primary text-[length:var(--h5-22px-bold-font-size)] tracking-[var(--h5-22px-bold-letter-spacing)] leading-[var(--h5-22px-bold-line-height)] [font-style:var(--h5-22px-bold-font-style)]">
Medical Facilities
          </div>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2.5 p-2.5 bg-secondary-light rounded-[20px] relative">
<BellIcon className="w-5 h-5" />
<div className="absolute top-1 left-4 w-2 h-2 bg-[#fa812d] rounded-full" />
</div>
<div className="w-10 h-10 bg-secondary-light rounded-[20px] flex items-center justify-center">
<img className="w-5 h-[19px]" alt="Union" src="/union-2.svg" />
</div>
<div className="w-10 h-[17.5px] relative">
<div className="w-10 h-[18px] rounded-[50px] shadow-[inset_0px_6px_8px_3px_#00000040] bg-[linear-gradient(180deg,rgba(102,255,237,1)_0%,rgba(255,238,178,1)_100%)]">
<img className="absolute w-[7px] h-1 top-1 left-[5px]" alt="Union" src="/union.svg" />
<img className="absolute w-1 h-0.5 top-0.5 left-[17px]" alt="Union" src="/union-3.svg" />
<img className="absolute w-1.5 h-[3px] top-1.5 left-[15px]" alt="Union" src="/union-1.svg" />
</div>
<div className="absolute w-3.5 h-3.5 top-0.5 left-[23px] rounded-[7px/6.81px] shadow-switch-out-shadow bg-[linear-gradient(180deg,rgba(255,193,35,1)_0%,rgba(248,131,46,1)_100%)]">
<div className="w-3 h-[11px] absolute top-px left-px rounded-[5.8px/5.64px] bg-[linear-gradient(180deg,rgba(255,191,36,1)_0%,rgba(244,146,75,1)_100%)]" />
<div className="absolute w-3.5 h-3.5 top-0 left-0 bg-[#ff9255] rounded-[7px/6.81px]" />
<div className="absolute w-3 h-[11px] top-px left-px rounded-[5.8px/5.64px] bg-[linear-gradient(180deg,rgba(255,191,36,1)_0%,rgba(244,146,75,1)_100%)]" />
<img className="absolute w-3.5 h-3.5 top-0 left-0" alt="Mask group" src="/mask-group.png" />
</div>
</div>
<div className="flex items-center gap-3">
<div className="bg-app-primary rounded-3xl" />
<div className="flex flex-col gap-1">
<div className="font-title-16px-bold font-[number:var(--title-16px-bold-font-weight)] text-on-surface-primary text-[length:var(--title-16px-bold-font-size)] tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] [font-style:var(--title-16px-bold-font-style)]">
Anahera Jones
              </div>
<div className="font-title-11px-regular font-[number:var(--title-11px-regular-font-weight)] text-on-surface-tertiary text-[length:var(--title-11px-regular-font-size)] tracking-[var(--title-11px-regular-letter-spacing)] leading-[var(--title-11px-regular-line-height)] [font-style:var(--title-11px-regular-font-style)]">
Admin
              </div>
</div>
</div>
</div>
</div>
<div className="font-title-14px-semibold font-[number:var(--title-14px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-14px-semibold-font-size)] tracking-[var(--title-14px-semibold-letter-spacing)] leading-[var(--title-14px-semibold-line-height)] [font-style:var(--title-14px-semibold-font-style)]">
Medical Company Details
      </div>
<div className="flex flex-col w-full gap-5 p-5 bg-bg rounded-2xl">
<Button className="w-[200px] h-10 bg-secondary-dark rounded-[20px] text-surface-default font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-[length:var(--btn-14px-medium-font-size)] leading-[var(--btn-14px-medium-line-height)] tracking-[var(--btn-14px-medium-letter-spacing)] [font-style:var(--btn-14px-medium-font-style)] h-auto self-end">
<Edit2Icon className="w-4 h-4 mr-1" />
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
                fontFamily: "Lato",
                fontWeight: 600,
                fontStyle: "SemiBold",
                fontSize: "16px",
                lineHeight: "124%",
                letterSpacing: "0%",
              }}
              className="text-primary-dark"
            >
              Company information
            </div>
            <ChevronDownIcon className="w-8 h-8" />
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
        <ChevronDownIcon className="w-8 h-8" />
      </CardContent>
    </CollapsibleTrigger>

    <CollapsibleContent>
      <CardContent className="px-4 pb-4">
        <div className="grid grid-cols-2 gap-6">
          {/* العمود الأول */}
          <div className="flex flex-col gap-8"> {/* تم زيادة المسافة بين الصفوف */}
            <div className="grid grid-cols-[auto_150px_1fr] items-center gap-3">
              <PhoneIcon className="w-6 h-6" />
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
                className="text-on-surface-primary"
              >
                {contactInfo.phoneNumbers}
              </div>
            </div>

            <div className="grid grid-cols-[auto_150px_1fr] items-center gap-3">
              <MapPinIcon className="w-6 h-6" />
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
                className="text-on-surface-primary"
              >
                {contactInfo.physicalAddress}
              </div>
            </div>

            <div className="grid grid-cols-[auto_150px_1fr] items-center gap-3">
              <MapOutlinedIcon className="w-6 h-6" />
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
                className="text-on-surface-primary underline"
              >
                {contactInfo.mapsLocation}
              </a>
            </div>
          </div>

          {/* العمود الثاني */}
          <div className="flex flex-col gap-8"> {/* تم زيادة المسافة بين الصفوف */}
            <div className="grid grid-cols-[auto_150px_1fr] items-center gap-3">
              <LocalPostOfficeOutlinedIcon className="w-6 h-6" />
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
              <GlobeIcon className="w-6 h-6" />
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
        <ChevronDownIcon className="w-8 h-8" />
      </CardContent>
    </CollapsibleTrigger>

    <CollapsibleContent>
      <CardContent className="px-4 pb-4">
        <div className="grid grid-cols-2 gap-6">
          
          {/* العمود الأول */}
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-[auto_150px_1fr] items-center gap-3">
              <LinkedinIcon className="w-6 h-6" />
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
              <FacebookIcon className="w-6 h-6" />
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
                <XIcon className="w-4 h-4" />
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
              <InstagramIcon className="w-6 h-6" />
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
    <div className="grid grid-cols-4 gap-x-4 text-on-surface-primary">
      <div className="font-title-16px-semibold">VAT:</div>
      <div className="font-title-14px-regular">{legalDetails.vat}</div>
      <div className="font-title-16px-semibold">CR:</div>
      <div className="font-title-14px-regular">{legalDetails.cr}</div>
    </div>
  </div>

  {/* Divider */}
  <div className="border-t border-gray-200" />

  {/* Terms & Conditions */}
  <div className="flex flex-col gap-4">
    <div className="font-title-16px-bold text-primary-dark">
      Terms & Conditions
    </div>

    <div className="grid grid-cols-[200px,1fr] gap-x-4 gap-y-2">
      {termsConditions.map((term, index) => (
        <React.Fragment key={index}>
          <div className="font-title-16px-semibold text-on-surface-primary">
            {term.title}
          </div>
          <div className="font-title-14px-regular text-on-surface-primary break-words">
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
    <div className="font-title-16px-bold text-primary-dark">
      Privacy Policy
    </div>

    <div className="grid grid-cols-[200px,1fr] gap-x-4 gap-y-2">
      {privacyPolicy.map((policy, index) => (
        <React.Fragment key={index}>
          <div className="font-title-16px-semibold text-on-surface-primary">
            {policy.title}
          </div>
          <div className="font-title-14px-regular text-on-surface-primary break-words">
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