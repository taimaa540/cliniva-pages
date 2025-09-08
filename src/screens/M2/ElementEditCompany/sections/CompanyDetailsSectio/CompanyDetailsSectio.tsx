import {
  BellIcon,

  PlusIcon,

} from "lucide-react";

import ReusableCollapsible from "../../../../../components/ui/Collapsibles";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Button } from "../../../../../components/ui/button";
import { useState } from "react";
import { Card, CardContent } from "../../../../../components/ui/card";

import DateInput from "../../../../CommonComponents/DateInput";

import { Input } from "../../../../../components/ui/input";
import { Textarea } from "../../../../../components/ui/textarea";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


const companyData = {
  tradeName: "MedCare Group",
  legalName: "MedCare Healthcare Services Inc.",
  yearOfEstablishment: "April 28, 2025",
  overview:
    "MedCare Group is a leading healthcare provider offering integrated medical services across multiple regions. Our mission is to deliver high-quality, patient-centered care.",
  vision: "To be the most trusted healthcare network in the region by 2030.",
  goals:
    "Expand to 50+ clinics by 2027\nImplement fully digital patient records",
  ceoName: "Dr. Sara",
};

const contactData = {
  phoneNumber: "+966 50 000-0000",
  email: "info@medcaregroup.com",
  website: "www.medcaregroup.com",
  mapsLocation: "www.medcaregroup.com",
  physicalAddress: {
    buildingNumber: "Building Number",
    streetName: "Street Name",
    region: "Region",
    country: "Country",
    nation: "Nation",
  },
};

const socialMediaData = [
  {
    platform: "LinkedIn",
    url: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 9H2V21H6V9Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


  },
  {
    platform: "Twitter",
    url: <svg width="24" height="24" viewBox="0 0 24 24" fill="text-text-secondary" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="text-text-secondary" clip-rule="evenodd" d="M0.0174851 24H2.04576L9.98402 14.6892L16.2962 24H23.2727L13.8657 10.1925L22.5034 0H20.4401L12.939 8.81705L6.92412 0H0L9.09228 13.3666L0.0174851 24ZM2.79762 1.56943H5.92746L20.4576 22.5187H17.2928L2.79762 1.56943Z" fill="currentColor"/>
</svg>,


  },
  {
    platform: "Facebook",
    url: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 11.0004C21 5.47754 16.5229 1.00039 11 1.00039C5.47715 1.00039 1 5.47754 1 11.0004C1 15.9917 4.65686 20.1287 9.4375 20.8789V13.891H6.89844V11.0004H9.4375V8.79726C9.4375 6.29101 10.9304 4.90664 13.2146 4.90664C14.3087 4.90664 15.4531 5.10195 15.4531 5.10195V7.56289H14.1921C12.9499 7.56289 12.5625 8.33373 12.5625 9.12455V11.0004H15.3359L14.8926 13.891H12.5625V20.8789C17.3431 20.1287 21 15.9917 21 11.0004Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
</svg>
,

  },
  {
    platform: "Instagram",
    url: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="text-text-secondary" clip-rule="evenodd" d="M7.05273 0.072C8.33236 0.0130909 8.74036 0 12 0C15.2596 0 15.6676 0.0141818 16.9462 0.072C18.2247 0.129818 19.0975 0.333818 19.8611 0.629454C20.6607 0.931636 21.3862 1.404 21.9862 2.01491C22.5971 2.61382 23.0684 3.33818 23.3695 4.13891C23.6662 4.90255 23.8691 5.77527 23.928 7.05164C23.9869 8.33345 24 8.74145 24 12C24 15.2596 23.9858 15.6676 23.928 16.9473C23.8702 18.2236 23.6662 19.0964 23.3695 19.86C23.0684 20.6608 22.5963 21.3864 21.9862 21.9862C21.3862 22.5971 20.6607 23.0684 19.8611 23.3695C19.0975 23.6662 18.2247 23.8691 16.9484 23.928C15.6676 23.9869 15.2596 24 12 24C8.74036 24 8.33236 23.9858 7.05273 23.928C5.77636 23.8702 4.90364 23.6662 4.14 23.3695C3.33919 23.0683 2.61362 22.5963 2.01382 21.9862C1.40332 21.3869 0.930889 20.6617 0.629454 19.8611C0.333818 19.0975 0.130909 18.2247 0.072 16.9484C0.0130909 15.6665 0 15.2585 0 12C0 8.74036 0.0141818 8.33236 0.072 7.05382C0.129818 5.77527 0.333818 4.90255 0.629454 4.13891C0.931334 3.33827 1.40413 2.61307 2.01491 2.01382C2.61386 1.40346 3.3387 0.931029 4.13891 0.629454C4.90255 0.333818 5.77527 0.130909 7.05164 0.072H7.05273ZM16.8491 2.232C15.5836 2.17418 15.204 2.16218 12 2.16218C8.796 2.16218 8.41636 2.17418 7.15091 2.232C5.98036 2.28545 5.34545 2.48073 4.92218 2.64545C4.36255 2.86364 3.96218 3.12218 3.54218 3.54218C3.14405 3.92951 2.83765 4.40103 2.64545 4.92218C2.48073 5.34545 2.28545 5.98036 2.232 7.15091C2.17418 8.41636 2.16218 8.796 2.16218 12C2.16218 15.204 2.17418 15.5836 2.232 16.8491C2.28545 18.0196 2.48073 18.6545 2.64545 19.0778C2.83745 19.5982 3.144 20.0705 3.54218 20.4578C3.92945 20.856 4.40182 21.1625 4.92218 21.3545C5.34545 21.5193 5.98036 21.7145 7.15091 21.768C8.41636 21.8258 8.79491 21.8378 12 21.8378C15.2051 21.8378 15.5836 21.8258 16.8491 21.768C18.0196 21.7145 18.6545 21.5193 19.0778 21.3545C19.6375 21.1364 20.0378 20.8778 20.4578 20.4578C20.856 20.0705 21.1625 19.5982 21.3545 19.0778C21.5193 18.6545 21.7145 18.0196 21.768 16.8491C21.8258 15.5836 21.8378 15.204 21.8378 12C21.8378 8.796 21.8258 8.41636 21.768 7.15091C21.7145 5.98036 21.5193 5.34545 21.3545 4.92218C21.1364 4.36255 20.8778 3.96218 20.4578 3.54218C20.0705 3.14408 19.5989 2.83768 19.0778 2.64545C18.6545 2.48073 18.0196 2.28545 16.8491 2.232ZM10.4673 15.6993C11.3233 16.0556 12.2764 16.1037 13.1639 15.8353C14.0514 15.567 14.8182 14.9988 15.3334 14.2279C15.8485 13.457 16.0801 12.5311 15.9884 11.6085C15.8968 10.6858 15.4876 9.82361 14.8309 9.16909C14.4123 8.7507 13.906 8.43034 13.3487 8.23107C12.7914 8.0318 12.1968 7.95857 11.6078 8.01667C11.0188 8.07477 10.45 8.26274 9.94233 8.56705C9.43468 8.87136 9.00081 9.28445 8.67197 9.77656C8.34312 10.2687 8.12748 10.8276 8.04056 11.413C7.95365 11.9985 7.99762 12.596 8.16932 13.1624C8.34101 13.7288 8.63616 14.2501 9.03351 14.6888C9.43087 15.1275 9.92054 15.4726 10.4673 15.6993ZM7.63854 7.63854C8.2113 7.06579 8.89126 6.61146 9.6396 6.30148C10.3879 5.99151 11.19 5.83197 12 5.83197C12.81 5.83197 13.6121 5.99151 14.3604 6.30148C15.1087 6.61146 15.7887 7.06579 16.3615 7.63854C16.9342 8.2113 17.3885 8.89126 17.6985 9.6396C18.0085 10.3879 18.168 11.19 18.168 12C18.168 12.81 18.0085 13.6121 17.6985 14.3604C17.3885 15.1087 16.9342 15.7887 16.3615 16.3615C15.2047 17.5182 13.6359 18.168 12 18.168C10.3641 18.168 8.79527 17.5182 7.63854 16.3615C6.48181 15.2047 5.83197 13.6359 5.83197 12C5.83197 10.3641 6.48181 8.79527 7.63854 7.63854ZM19.536 6.75055C19.6779 6.61666 19.7916 6.45565 19.8701 6.27706C19.9487 6.09847 19.9907 5.90593 19.9935 5.71083C19.9964 5.51574 19.9601 5.32205 19.8867 5.14125C19.8134 4.96044 19.7045 4.79619 19.5665 4.65822C19.4285 4.52026 19.2643 4.41137 19.0835 4.33802C18.9027 4.26467 18.709 4.22834 18.5139 4.23118C18.3188 4.23403 18.1263 4.27599 17.9477 4.35458C17.7691 4.43317 17.6081 4.54679 17.4742 4.68873C17.2138 4.96476 17.0712 5.3314 17.0768 5.71083C17.0823 6.09026 17.2355 6.45259 17.5038 6.72092C17.7721 6.98924 18.1345 7.14243 18.5139 7.14796C18.8933 7.15349 19.26 7.01093 19.536 6.75055Z" fill="currentColor"/>
</svg>


  },
];

const legalData = {
  vat: "31045678900123",
  cr: "1010456789",
  termsConditions: [
    {
      title: "Terms and Conditions of Use",
      description:
        "MedCare is committed to protecting your privacy. We collect and use personal",
    },
 
  ],
  privacyPolicy: [
    {
      title: "Terms and Conditions of Use",
      description:
        "MedCare is committed to protecting your privacy. We collect and use personal",
    },
        {
      title: "Terms and Conditions of Use",
      description:
        "MedCare is committed to protecting your privacy. We collect and use personal",
    },
  ],
};

const addressFields = [
  { label: "Building Number", value: "Building Number" },
  { label: "Street Name", value: "Street Name" },
  { label: "Region", value: "Region" },
  { label: "Country", value: "Country" },
  { label: "Nation", value: "Nation" },
];

interface NoDataSectionProps {
  local: string;
  dark: boolean;
  handelDarkClick: () => void;
  handleLanguageClick: () => void;
}
export const CompanyDetailsSectio = ({handleLanguageClick,
  local,
  dark,
  handelDarkClick,}: NoDataSectionProps): JSX.Element => {
    const { t, i18n } = useTranslation();
      useEffect(() => {
        i18n.changeLanguage(local);
      }, []);
  const [isOpen, setIsOpen] = useState({
    clinicInfo: true,
    contactInfo: true,
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
            <div className="flex flex-col w-full overflow-hidden h-full items-end gap-4 pb-28 py-4 bg-background-primary self-stretch relative ">

    
      <header className="flex h-[50px] justify-between pl-[4px] pr-0 py-0 self-stretch w-full items-center bg-background-primary ">
        <div className="flex flex-col w-[340px] items-start gap-1.5 ">
          <h1
            className={`self-stretch mt-[-1.00px] font-h5-22px-bold font-[number:var(--h5-22px-bold-font-weight)] 
              text-text-primary 
            } text-on-surface-primary text-[length:var(--h5-22px-bold-font-size)] tracking-[var(--h5-22px-bold-letter-spacing)] leading-[var(--h5-22px-bold-line-height)] [font-style:var(--h5-22px-bold-font-style)]`}
          >
           <div className="flex items-center gap-4 rounded-2xl ">
               
               
    
                  <div className="flex flex-col">
                    <h1 className="font-h5-22px-bold font-[number:var(--h5-22px-bold-font-weight)] text-on-surface-primary text-[length:var(--h5-22px-bold-font-size)] tracking-[var(--h5-22px-bold-letter-spacing)] leading-[var(--h5-22px-bold-line-height)] [font-style:var(--h5-22px-bold-font-style)]">
                  { t("        Medical Facilities    ")}
                    </h1>
                    <p className="font-title-14px-semibold font-[number:var(--title-14px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-14px-semibold-font-size)] tracking-[var(--title-14px-semibold-letter-spacing)] leading-[var(--title-14px-semibold-line-height)] [font-style:var(--title-14px-semibold-font-style)]">
                       { t("        Medical Company Details  ")}
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
              <BellIcon className="w-5 h-5" />
            </Button>
            <div className="absolute top-1 left-4 w-2 h-2 bg-[#fa812d] rounded-full" />
          </div>

          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className={`p-2.5 bg-secondary-light ${
                local === "ar"
                  ? "bg-[green]"
                  : "bg-secondary-light"
              } rounded-[20px] h-auto transition-all duration-[1000ms]`}
              onClick={handleLanguageClick}
            >
              <TranslateIcon className="w-5 h-5" />
            </Button>
          </div>

          <div className="w-10 h-[17.5px] relative">
           
          </div>

          <div className="items-center gap-3 inline-flex flex-[0_0_auto]">
            <div className="inline-flex items-center w-[40px] h-[40px] gap-2.5 flex-[0_0_auto] bg-app-primary rounded-3xl" />
            <div className="flex-col items-start gap-1 inline-flex flex-[0_0_auto]">
              <div
                className={`w-fit mt-[-1.00px] 
                 text-text-primary 
                } font-title-16px-bold font-[number:var(--title-16px-bold-font-weight)] text-on-surface-primary text-[length:var(--title-16px-bold-font-size)] tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] whitespace-nowrap [font-style:var(--title-16px-bold-font-style)]`}
              >
                Anahera Jones
              </div>
              <div className="w-fit font-title-11px-regular font-[number:var(--title-11px-regular-font-weight)] text-on-surface-tertiary text-[length:var(--title-11px-regular-font-size)] tracking-[var(--title-11px-regular-letter-spacing)] leading-[var(--title-11px-regular-line-height)] whitespace-nowrap [font-style:var(--title-11px-regular-font-style)] border-medium ">
             { t("             Admin  ")}
              </div>
            </div>
          </div>
        </div>
      </header>

   <Card
        className={`flex flex-col h-full justify-end  gap-6 p-5 mt-[10px] bg-background-tertiary items-start relative self-stretch w-full flex-[0_0_auto] 
        } rounded-2xl overflow-hidden`}
      >
<div className="w-full flex justify-end gap-4 mt-2">
  <Button
    variant="outline"
    className="flex rounded-[20px] w-[200px] h-10 items-center justify-center px-4 py-2.5 border-2 border-light"
  >
    {t("Cancel")}
  </Button>

  <Button
    variant="outline"
    className="flex w-[200px] h-10 items-center justify-center gap-1 px-4 py-2.5 bg-secondary-dark rounded-[20px]"
  >
    {t("Save")}
  </Button>
</div>

<CardContent className="p-0 w-full overflow-y-auto scroll-x-hidden pb-9 gap-5 h-full">
        

      <ReusableCollapsible
            title={  t("        Company information    ")}
            initiallyOpen={isOpen.mapsLocation}
            onOpenChange={(open) => handleToggle("mapsLocation", open)}
            content={<div className="px-4 pb-4">      <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-[162px]  text-text-primary font-semibold">
                      { t("    Logo  ")}
                    </div>
                    <div className="relative w-16 h-16 bg-[url(/user-image-12.svg)] bg-[100%_100%]">
                   <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6065_82284)">
<path d="M56.856 32.8697C56.3037 31.075 54.9838 29.6034 53.4707 28.3157C52.1485 27.2449 50.6994 26.3408 49.1561 25.6238C45.2636 23.708 40.5404 22.5819 36.4278 20.5898C35.0997 19.9977 33.8496 19.2443 32.7059 18.3465C31.8978 17.6735 31.4622 17.0005 31.5745 16.3096C30.2524 14.754 28.624 13.4871 26.7907 12.5878C24.9573 11.6884 22.9584 11.1758 20.9182 11.082C18.8781 10.9881 16.8404 11.315 14.9322 12.0422C13.0239 12.7694 11.2859 13.8815 9.8264 15.3091C9.10651 16.0204 8.45421 16.7969 7.87788 17.6287C5.30003 21.4522 4.12611 26.0495 4.55551 30.6398C4.7401 32.9161 5.3492 35.1378 6.35138 37.1903C7.50972 39.5053 9.27867 41.3673 11.1509 43.126C13.4271 45.2617 15.7618 47.339 18.1099 49.4073C21.6657 52.521 25.2575 55.5854 28.8852 58.6004C29.7831 59.3421 30.6721 60.0809 31.552 60.8167C43.4497 50.9462 49.4076 45.5623 52.1642 42.9152C54.1038 41.0622 55.7829 39.1493 56.9278 36.7984C57.3436 35.5323 57.3183 34.1195 56.856 32.8697Z" fill="url(#paint0_linear_6065_82284)"/>
<path d="M34.5826 17.862C36.2662 18.4542 38.0352 18.9387 39.7817 19.3829C43.3959 20.2802 47.0954 21.1192 50.5255 22.7838C53.8569 24.4124 57.2107 26.9787 58.607 30.5097C58.7117 29.2461 58.6997 27.9755 58.571 26.714C58.1221 22.4877 56.398 18.2927 53.3316 15.2911C51.8659 13.8729 50.1272 12.767 48.2209 12.0405C46.3146 11.3139 44.2805 10.982 42.242 11.0647C41.7231 11.0877 41.206 11.1401 40.6931 11.2218C40.1785 11.2986 39.6688 11.4049 39.1666 11.5403C38.1594 11.8054 37.1827 12.1753 36.2528 12.644C35.7897 12.876 35.3401 13.1336 34.9058 13.4157C34.4669 13.6923 34.0427 13.9919 33.6353 14.313C33.4691 14.4476 33.303 14.5822 33.1414 14.7213L32.9034 14.9322C32.5884 15.2053 32.3867 15.5861 32.3377 16C32.331 16.1544 32.3575 16.3084 32.4156 16.4517C32.4738 16.5949 32.562 16.7239 32.6745 16.83C32.9591 17.1014 33.2908 17.3188 33.6532 17.4716C33.9563 17.6171 34.2665 17.7473 34.5826 17.862Z" fill="url(#paint1_linear_6065_82284)"/>
<path d="M22.0159 2.05563L22.3302 1.95245L22.6175 1.86271C23.0665 1.72811 23.4885 1.60249 23.933 1.48583C29.7159 -0.0367116 35.8126 0.112896 41.5138 1.91724C47.2149 3.72159 52.2862 7.1065 56.1377 11.6782C59.9892 16.2499 62.4626 21.8205 63.2701 27.7419C64.0776 33.6634 63.186 39.6922 60.6991 45.1271C60.6758 45.182 60.6744 45.2438 60.6953 45.2997C60.7162 45.3556 60.7577 45.4014 60.8114 45.4277C60.8656 45.452 60.9272 45.4538 60.9827 45.4328C61.0383 45.4117 61.0832 45.3696 61.1077 45.3155C63.6253 39.8028 64.5259 33.6894 63.7049 27.6856C62.884 21.6817 60.3751 16.0339 56.4697 11.3983C52.5644 6.76271 47.423 3.32963 41.6429 1.49794C35.8627 -0.333755 29.6811 -0.488861 23.8163 1.05063C23.3673 1.17177 22.9183 1.29739 22.4694 1.43647L22.1775 1.52621L21.8588 1.63389C21.8278 1.64048 21.7985 1.65357 21.7729 1.67229C21.7473 1.69102 21.7259 1.71496 21.7103 1.74252C21.6946 1.77008 21.685 1.80064 21.682 1.8322C21.679 1.86376 21.6827 1.8956 21.693 1.92561C21.7032 1.95562 21.7197 1.98313 21.7413 2.00631C21.7629 2.02949 21.7892 2.04783 21.8185 2.06012C21.8477 2.07241 21.8792 2.07835 21.9109 2.07758C21.9427 2.07681 21.9738 2.06932 22.0024 2.05563H22.0159Z" fill="url(#paint2_linear_6065_82284)"/>
<path d="M50.0406 57.8735C43.8139 62.1926 36.2399 64.1286 28.7027 63.3277C21.1655 62.5268 14.1683 59.0425 8.9897 53.5114C3.81113 47.9804 0.796987 40.772 0.498051 33.2033C0.199114 25.6347 2.63534 18.2113 7.36156 12.2896C7.71625 11.8409 8.0889 11.3923 8.47052 10.9795C8.51041 10.9349 8.53093 10.8763 8.52756 10.8165C8.52419 10.7568 8.49721 10.7008 8.45256 10.6609C8.4079 10.6211 8.34924 10.6006 8.28946 10.6039C8.22967 10.6073 8.17368 10.6343 8.13379 10.6789C7.74768 11.1276 7.37503 11.5762 7.01137 12.0249C2.20537 18.0309 -0.275054 25.5659 0.0242403 33.2503C0.323535 40.9346 3.38252 48.2541 8.64113 53.8687C13.8997 59.4833 21.0061 63.0173 28.6591 63.8236C36.3122 64.6299 43.9998 62.6546 50.3145 58.2594C50.3386 58.2428 50.3592 58.2216 50.375 58.1969C50.3908 58.1723 50.4015 58.1447 50.4065 58.1159C50.4116 58.0871 50.4108 58.0575 50.4042 58.029C50.3977 58.0005 50.3855 57.9736 50.3684 57.9498C50.3532 57.9218 50.3324 57.8974 50.3071 57.878C50.2818 57.8587 50.2527 57.845 50.2217 57.8378C50.1907 57.8306 50.1585 57.8301 50.1273 57.8362C50.0961 57.8424 50.0665 57.8551 50.0406 57.8735Z" fill="url(#paint3_linear_6065_82284)"/>
<path d="M34.5646 37.4998C33.6038 35.279 31.3321 34.3951 29.5362 32.919C28.6554 32.2443 27.9933 31.3251 27.6325 30.2764H20.8306C20.6758 30.2764 20.5274 30.3378 20.4179 30.4472C20.3085 30.5566 20.247 30.705 20.247 30.8597V34.8707C20.247 35.5846 20.5308 36.2694 21.036 36.7742C21.5412 37.279 22.2264 37.5627 22.9408 37.5627H27.9603C27.9817 37.5627 28.0023 37.5712 28.0174 37.5863C28.0326 37.6014 28.0411 37.622 28.0411 37.6434V41.798C28.0423 42.7373 28.4165 43.6377 29.0815 44.3014C29.7466 44.9651 30.648 45.3379 31.588 45.3379H34.7083C34.8702 45.3379 35.0255 45.2737 35.1401 45.1592C35.2546 45.0448 35.3189 44.8896 35.3189 44.7278V40.5462C35.321 40.2562 35.2985 39.9665 35.2515 39.6803C35.1279 38.9245 34.8966 38.1902 34.5646 37.4998Z" fill="white"/>
<path d="M40.4057 30.2764H35.3817C35.3603 30.2764 35.3398 30.2679 35.3246 30.2527C35.3094 30.2376 35.3009 30.2171 35.3009 30.1956V25.1796C35.3009 24.4657 35.0171 23.7809 34.5119 23.2761C34.0067 22.7713 33.3216 22.4876 32.6071 22.4876H28.7909C28.6871 22.4882 28.5846 22.5094 28.4891 22.55C28.3937 22.5907 28.3072 22.6499 28.2349 22.7242C28.1626 22.7985 28.1059 22.8865 28.068 22.983C28.0301 23.0795 28.0118 23.1826 28.0142 23.2863V28.0555C28.0047 28.6586 28.1435 29.2548 28.4182 29.7918C29.9941 32.744 34.0214 33.0895 35.4132 37.1678C35.4581 37.2979 35.4895 37.4281 35.5209 37.5582H42.7044C42.7981 37.557 42.8877 37.5193 42.954 37.4531C43.0202 37.3868 43.058 37.2974 43.0591 37.2037V32.9639C43.058 32.2576 42.7792 31.5801 42.2829 31.0774C41.7865 30.5747 41.1124 30.287 40.4057 30.2764Z" fill="white"/>
<path d="M14.4777 7.22869C15.4373 7.22869 16.2152 6.45131 16.2152 5.49237C16.2152 4.53343 15.4373 3.75606 14.4777 3.75606C13.5181 3.75606 12.7402 4.53343 12.7402 5.49237C12.7402 6.45131 13.5181 7.22869 14.4777 7.22869Z" fill="url(#paint4_linear_6065_82284)"/>
<path d="M19.7711 3.82336C20.4059 3.82336 20.9204 3.30912 20.9204 2.67478C20.9204 2.04044 20.4059 1.52621 19.7711 1.52621C19.1363 1.52621 18.6217 2.04044 18.6217 2.67478C18.6217 3.30912 19.1363 3.82336 19.7711 3.82336Z" fill="url(#paint5_linear_6065_82284)"/>
<path d="M9.86232 10.3289C10.4971 10.3289 11.0117 9.8147 11.0117 9.18037C11.0117 8.54603 10.4971 8.03179 9.86232 8.03179C9.22755 8.03179 8.71296 8.54603 8.71296 9.18037C8.71296 9.8147 9.22755 10.3289 9.86232 10.3289Z" fill="url(#paint6_linear_6065_82284)"/>
<path d="M58.0951 51.8391C57.9886 51.4789 57.7684 51.1629 57.4674 50.9381C57.1664 50.7133 56.8007 50.5918 56.4249 50.5918C56.261 50.592 56.0979 50.6146 55.9401 50.6591C55.5369 50.7746 55.1892 51.032 54.961 51.3837C54.7329 51.7354 54.6398 52.1577 54.6989 52.5727C54.758 52.9876 54.9653 53.3672 55.2825 53.6414C55.5998 53.9156 56.0055 54.0658 56.4249 54.0644C56.5907 54.0644 56.7556 54.0402 56.9143 53.9926C57.1337 53.9292 57.3384 53.8231 57.5166 53.6804C57.6948 53.5377 57.843 53.3613 57.9527 53.1611C58.0624 52.961 58.1315 52.7412 58.1559 52.5143C58.1804 52.2874 58.1597 52.0579 58.0951 51.8391Z" fill="url(#paint7_linear_6065_82284)"/>
<path d="M53.2418 56.1911C53.1779 55.9742 53.0513 55.7812 52.8777 55.6362C52.7042 55.4913 52.4916 55.4009 52.2668 55.3766C52.0419 55.3522 51.8149 55.395 51.6143 55.4994C51.4138 55.6039 51.2486 55.7654 51.1398 55.9635C51.031 56.1616 50.9833 56.3875 51.0028 56.6127C51.0223 56.8378 51.1082 57.0522 51.2494 57.2287C51.3907 57.4052 51.5812 57.5359 51.7967 57.6043C52.0122 57.6728 52.2432 57.6759 52.4606 57.6133C52.6055 57.5716 52.7408 57.5016 52.8586 57.4074C52.9764 57.3132 53.0745 57.1967 53.1471 57.0645C53.2197 56.9323 53.2654 56.7871 53.2817 56.6372C53.2979 56.4873 53.2843 56.3357 53.2418 56.1911Z" fill="url(#paint8_linear_6065_82284)"/>
<path d="M60.9281 47.1685C60.8658 46.9473 60.7389 46.7496 60.5638 46.6007C60.3886 46.4518 60.1731 46.3583 59.9446 46.3322C59.7161 46.3061 59.485 46.3486 59.2808 46.4542C59.0765 46.5599 58.9084 46.7238 58.7977 46.9253C58.6871 47.1268 58.6389 47.3566 58.6594 47.5855C58.6799 47.8144 58.7681 48.032 58.9128 48.2106C59.0575 48.3893 59.2522 48.5208 59.4719 48.5885C59.6917 48.6562 59.9267 48.657 60.1469 48.5907C60.2919 48.549 60.4272 48.479 60.545 48.3848C60.6628 48.2906 60.7608 48.1741 60.8334 48.0419C60.906 47.9097 60.9518 47.7645 60.968 47.6146C60.9843 47.4648 60.9707 47.3131 60.9281 47.1685Z" fill="url(#paint9_linear_6065_82284)"/>
</g>
<rect x="48" width="16" height="16" rx="8" fill="#D92D20"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M60.8536 3.14645C61.0488 3.34171 61.0488 3.65829 60.8536 3.85355L51.8536 12.8536C51.6583 13.0488 51.3417 13.0488 51.1464 12.8536C50.9512 12.6583 50.9512 12.3417 51.1464 12.1464L60.1464 3.14645C60.3417 2.95118 60.6583 2.95118 60.8536 3.14645Z" fill="#FFFDFC"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M51.1464 3.14645C51.3417 2.95118 51.6583 2.95118 51.8536 3.14645L60.8536 12.1464C61.0488 12.3417 61.0488 12.6583 60.8536 12.8536C60.6583 13.0488 60.3417 13.0488 60.1464 12.8536L51.1464 3.85355C50.9512 3.65829 50.9512 3.34171 51.1464 3.14645Z" fill="#FFFDFC"/>
<defs>
<linearGradient id="paint0_linear_6065_82284" x1="32" y1="0" x2="32" y2="64" gradientUnits="userSpaceOnUse">
<stop stop-color="#33E4DB"/>
<stop offset="1" stop-color="#00BBD3"/>
</linearGradient>
<linearGradient id="paint1_linear_6065_82284" x1="32" y1="0" x2="32" y2="64" gradientUnits="userSpaceOnUse">
<stop stop-color="#33E4DB"/>
<stop offset="1" stop-color="#00BBD3"/>
</linearGradient>
<linearGradient id="paint2_linear_6065_82284" x1="32" y1="0" x2="32" y2="64" gradientUnits="userSpaceOnUse">
<stop stop-color="#33E4DB"/>
<stop offset="1" stop-color="#00BBD3"/>
</linearGradient>
<linearGradient id="paint3_linear_6065_82284" x1="32" y1="0" x2="32" y2="64" gradientUnits="userSpaceOnUse">
<stop stop-color="#33E4DB"/>
<stop offset="1" stop-color="#00BBD3"/>
</linearGradient>
<linearGradient id="paint4_linear_6065_82284" x1="32" y1="0" x2="32" y2="64" gradientUnits="userSpaceOnUse">
<stop stop-color="#33E4DB"/>
<stop offset="1" stop-color="#00BBD3"/>
</linearGradient>
<linearGradient id="paint5_linear_6065_82284" x1="32" y1="0" x2="32" y2="64" gradientUnits="userSpaceOnUse">
<stop stop-color="#33E4DB"/>
<stop offset="1" stop-color="#00BBD3"/>
</linearGradient>
<linearGradient id="paint6_linear_6065_82284" x1="32" y1="0" x2="32" y2="64" gradientUnits="userSpaceOnUse">
<stop stop-color="#33E4DB"/>
<stop offset="1" stop-color="#00BBD3"/>
</linearGradient>
<linearGradient id="paint7_linear_6065_82284" x1="32" y1="0" x2="32" y2="64" gradientUnits="userSpaceOnUse">
<stop stop-color="#33E4DB"/>
<stop offset="1" stop-color="#00BBD3"/>
</linearGradient>
<linearGradient id="paint8_linear_6065_82284" x1="32" y1="0" x2="32" y2="64" gradientUnits="userSpaceOnUse">
<stop stop-color="#33E4DB"/>
<stop offset="1" stop-color="#00BBD3"/>
</linearGradient>
<linearGradient id="paint9_linear_6065_82284" x1="32" y1="0" x2="32" y2="64" gradientUnits="userSpaceOnUse">
<stop stop-color="#33E4DB"/>
<stop offset="1" stop-color="#00BBD3"/>
</linearGradient>
<clipPath id="clip0_6065_82284">
<rect width="64" height="64" rx="32" fill="white"/>
</clipPath>
</defs>
</svg>

                    </div>
                  </div>
              
                  <div className="flex items-center gap-2">
                    <div className="   text-text-primary font-semibold w-[162px] ">
                     { t("     Trade Name   ")}
                    </div>
                    <Input
                      className="w-[360px]  h-12 border-light border bg-background-secondary  text-text-primary  font-sans"
                      defaultValue={companyData.tradeName}
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-[162px] text-text-primary font-semibold">
                      { t("     Legal Name     ")}
                    </div>
                    <Input
                      className="w-[360px] h-12 border-light border bg-background-secondary  text-text-primary  font-sans"
                      defaultValue={companyData.legalName}
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="text-text-primary font-semibold">
                       { t("     Year of Establishment     ")}: 
                    </div>
                      <DateInput/>
                  </div>
                

                  <div className="flex items-start gap-2">
                    <div className="w-[162px] text-text-primary font-semibold">
                   { t("         Overview     ")}:
                    </div>
                    <div className="relative">
                      <Textarea
                        className="w-[360px]  h-12 border-light border bg-background-secondary  text-text-primary  font-sans"
                        defaultValue={companyData.overview}
                      />
                    
                    </div>
                  </div>


                  <div className="flex items-start gap-2">
                    <div className="w-[162px] text-text-primary font-semibold">
               { t("                Vision      ")}:
                    </div>
                    <div className="relative">
                      <Textarea
                        className="w-[360px]  h-12 border-light border bg-background-secondary  text-text-primary  font-sanss"
                        defaultValue={companyData.vision}
                      />
                    
                    </div>
                  </div>


                  <div className="flex items-start gap-2">
                    <div className="w-[162px] text-text-primary font-semibold">
                    { t("                 Goals       ")}:
                    </div>
                    <div className="relative">
                      <Textarea
                        className="w-[360px] h-12 border-light border bg-background-secondary  text-text-primary  font-sans"
                        defaultValue={companyData.goals}
                      />
                    
                    </div>
                  </div>


                 

                  <div className="flex items-center gap-2">
                    <div className="w-[162px] text-text-primary font-semibold">
                    { t("                   CEO Name       ")}:
                    </div>
                    <Input
                      className="w-[360px]  h-12 border-light border bg-background-secondary  text-text-primary  font-sans"
                      defaultValue={companyData.ceoName}
                    />
                  </div>
                </div></div>}

          />









    <ReusableCollapsible
            title=  { t("                 Company Contact Information      ")}
            initiallyOpen={isOpen.clinicInfo}
            onOpenChange={(open) => handleToggle("clinicInfo", open)}
            content={<div className="px-4 pb-4">      <div className="space-y-7 justi">
  
    


<div className=" flex gap-x-[121px] gap-y-5 flex-wrap " >
     

  <div className="flex items-center gap-[5px]"> {/* gap 5px بين الليبل والحقل */}


<div className="grid  items-center gap-[5px]">
  {/* Label */}
  <div className="flex">
  <div className="flex w-[162px] items-center gap-2">
  
  <div className=" text-text-primary"><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="" clip-rule="evenodd" d="M5.58366 1.98914C5.55738 1.98748 5.51211 1.98881 5.44156 2.00073C4.61526 2.14038 3.86019 2.55987 3.30452 3.19114C2.85239 3.70477 2.55607 4.33157 2.44319 4.99844C2.37711 5.38883 2.38394 5.81377 2.41176 6.29064C2.57841 9.14767 3.78709 11.8542 5.8219 13.889C7.93679 16.0039 10.7773 17.2264 13.7583 17.314C14.1076 17.3242 14.4228 17.3168 14.7125 17.2677C15.3794 17.1548 16.0061 16.8585 16.5198 16.4064C17.1861 15.8199 17.6164 15.0113 17.7308 14.1312L17.7297 14.1307L17.7297 14.1306L13.4481 12.2918L13.448 12.2918L13.448 12.2918L11.1637 13.8177C11.1631 13.8181 11.1624 13.8186 11.1618 13.819C10.9515 13.9605 10.7082 14.0449 10.4555 14.0641C10.202 14.0834 9.94788 14.0363 9.71814 13.9275L9.71407 13.9256C8.00776 13.1047 6.62971 11.7302 5.80447 10.026L5.803 10.023L5.80301 10.023C5.69491 9.79709 5.64657 9.54727 5.66258 9.29739C5.6786 9.04751 5.75845 8.80591 5.8945 8.59569L5.89737 8.59125L5.89739 8.59126L7.4204 6.27483L7.41901 6.27164L7.41902 6.27163L5.58366 1.98914ZM17.7317 14.1242L17.7317 14.1245L17.7317 14.1242ZM5.19763 0.557347C5.52156 0.502601 6.06468 0.471191 6.52344 0.858159C6.69851 1.00583 6.8372 1.19359 6.92679 1.40698L8.76311 5.69173C8.76337 5.69234 8.76364 5.69296 8.7639 5.69357C8.85897 5.91328 8.89871 6.15297 8.87962 6.39163C8.86047 6.63095 8.78275 6.86189 8.65332 7.0641L8.6485 7.07163L8.64845 7.0716L7.12346 9.39105C7.80407 10.7948 8.93925 11.9272 10.3446 12.6045L10.3476 12.6025L10.3476 12.6025L12.6331 11.0758C12.8359 10.9388 13.07 10.8552 13.3137 10.8328C13.5574 10.8103 13.8029 10.8498 14.0273 10.9474C14.0282 10.9478 14.0291 10.9482 14.03 10.9486L18.3043 12.7843C18.5968 12.9072 18.8412 13.1224 19.0001 13.3971C19.1598 13.6732 19.2243 13.9942 19.1837 14.3105C19.0254 15.5463 18.4222 16.682 17.487 17.5052C16.7679 18.1382 15.8904 18.553 14.9568 18.711C14.5275 18.7837 14.1013 18.7886 13.7153 18.7772C10.3616 18.6786 7.16606 17.3034 4.7868 14.9241C2.49762 12.6349 1.13787 9.59011 0.950386 6.37588C0.921536 5.88129 0.904547 5.31724 0.999862 4.75413C1.15788 3.82057 1.57271 2.94304 2.20572 2.22392C2.98367 1.34013 4.04075 0.752863 5.19763 0.557347Z" fill="currentColor"/>
</svg></div> 

    <div className="text-text-primary font-semibold">
   { t("           Phone Number     ")}
    </div>
  </div>

  {/* Phone Input مع العلم */}
  
<div className="relative w-[350px] h-12 border border-light rounded-sm overflow-visible font-sans">
  <PhoneInput
    country={"sa"}
    value={contactData.phoneNumber}
    onChange={(phone) => console.log(phone)}
    containerClass="!w-full"
    inputClass="!w-full !h-12 !border-0 !outline-none !text-text-primary !bg-background-secondary !px-3"
    buttonClass="!h-12 !border-0 !bg-background-secondary !pr-2 flex items-center relative"
    dropdownClass="!absolute !top-full !left-0   !max-h-60 !overflow-y-auto !bg-background-secondary border text-text-primary z-50"
  />
  {/* الخط العمودي */}
  <div className="absolute left-[56px] top-3 w-px h-6 bg-light pointer-events-none"></div>
</div>
</div>

           <div className="flex text-secondary-dark justify-end p-2">
          <PlusIcon className="w-8 h-8 cursor-pointer" />
        </div>
       
</div>

      
       
    
  </div>
 
  {/* Email */}

    <div className="flex gap-[70px] ">
                    <div className="flex w-[100px] items-center justify-center mb-16 gap-1">
              <div className="  text-text-primary  ">         <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.07923 0.787497C10.0441 0.737503 11.9541 0.737499 13.9191 0.787497C17.157 0.869496 18.9413 0.915255 20.2843 2.25625C21.6291 3.61122 21.6655 5.3485 21.7325 8.50136C21.7535 9.50833 21.7535 10.4866 21.7325 11.4936C21.6656 14.6461 21.6288 16.3819 20.2872 17.7348C18.9422 19.0788 17.158 19.1244 13.92 19.2064C12.9381 19.2314 11.9691 19.2445 11.0001 19.2445C10.0312 19.2445 9.06212 19.2314 8.0802 19.2064C4.84234 19.1244 3.05795 19.0785 1.71497 17.7377C0.370009 16.3827 0.332745 14.6454 0.265749 11.4926C0.24475 10.4856 0.244751 9.50735 0.265749 8.50039C0.332749 5.34739 0.370038 3.6112 1.71204 2.2582C3.05703 0.914271 4.84128 0.869495 8.07923 0.787497ZM13.881 2.28554C11.9421 2.23555 10.0572 2.23555 8.11731 2.28554C5.07934 2.36254 3.69256 2.39684 2.77356 3.31582C1.85556 4.24182 1.82677 5.58664 1.76477 8.53164C1.74378 9.5165 1.74378 10.4745 1.76477 11.4603C1.82677 14.4053 1.85648 15.7502 2.77747 16.6771C3.69447 17.593 5.08048 17.6294 8.11829 17.7064C10.0572 17.7564 11.9421 17.7564 13.882 17.7064C16.9199 17.6294 18.3057 17.5941 19.2247 16.6752C20.1427 15.7492 20.1715 14.4053 20.2335 11.4603C20.2545 10.4755 20.2545 9.5175 20.2335 8.53164C20.1715 5.58664 20.1428 4.24086 19.2218 3.31386C18.3048 2.39817 16.9186 2.36253 13.881 2.28554ZM5.35462 6.11074C5.56562 5.75474 6.02596 5.63509 6.38196 5.84609L9.32337 7.58633C10.7954 8.45333 11.2039 8.45333 12.6779 7.58633L15.6183 5.84707C15.9753 5.63607 16.4356 5.75472 16.6456 6.11172C16.8564 6.46859 16.7387 6.92802 16.382 7.13808L13.4396 8.87832C12.4588 9.45619 11.73 9.74442 11.0001 9.74453C10.2711 9.74453 9.54165 9.45532 8.56165 8.87832L5.61829 7.13711C5.26276 6.92603 5.14393 6.46654 5.35462 6.11074Z" fill="currentColor"/>
</svg></div>

                      <div className="text-text-primary justify-center font-semibold">
                  { t("            Email     ")}:
                      </div>
                    </div>
                    <Input
                      className="w-[350px] flex items-start h-12 border-light border bg-background-secondary  text-text-primary  font-sans"
                      defaultValue={contactData.email}
                    />
                  </div>
      
      </div>

    
                  <div className="flex items-center gap-22">
                    <div className="flex w-[186px] items-center gap-4">
              <div className="  text-text-primary ">     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 7.5C10.5 7.20333 10.588 6.91332 10.7528 6.66665C10.9176 6.41997 11.1519 6.22771 11.426 6.11418C11.7001 6.00065 12.0017 5.97094 12.2926 6.02882C12.5836 6.0867 12.8509 6.22956 13.0607 6.43934C13.2704 6.64912 13.4133 6.91639 13.4712 7.20736C13.5291 7.49834 13.4994 7.79994 13.3858 8.07403C13.2723 8.34811 13.08 8.58238 12.8334 8.7472C12.5867 8.91203 12.2967 9 12 9C11.6022 9 11.2206 8.84196 10.9393 8.56066C10.658 8.27936 10.5 7.89782 10.5 7.5ZM6 7.5C6 5.9087 6.63214 4.38258 7.75736 3.25736C8.88258 2.13214 10.4087 1.5 12 1.5C13.5913 1.5 15.1174 2.13214 16.2426 3.25736C17.3679 4.38258 18 5.9087 18 7.5C18 13.1203 12.6019 16.2694 12.375 16.4016C12.2617 16.4663 12.1334 16.5004 12.0028 16.5004C11.8723 16.5004 11.744 16.4663 11.6306 16.4016C11.3981 16.2694 6 13.125 6 7.5ZM7.5 7.5C7.5 11.4563 10.86 14.0822 12 14.8594C13.1391 14.0831 16.5 11.4563 16.5 7.5C16.5 6.30653 16.0259 5.16193 15.182 4.31802C14.3381 3.47411 13.1935 3 12 3C10.8065 3 9.66193 3.47411 8.81802 4.31802C7.97411 5.16193 7.5 6.30653 7.5 7.5ZM19.0097 13.8403C18.8251 13.7793 18.624 13.7924 18.4489 13.8768C18.2738 13.9612 18.1382 14.1102 18.0709 14.2926C18.0035 14.475 18.0096 14.6764 18.0879 14.8543C18.1661 15.0323 18.3104 15.1729 18.4903 15.2466C20.0381 15.8194 21 16.5863 21 17.25C21 18.5025 17.5763 20.25 12 20.25C6.42375 20.25 3 18.5025 3 17.25C3 16.5863 3.96187 15.8194 5.50969 15.2475C5.6896 15.1739 5.8339 15.0332 5.91215 14.8553C5.99039 14.6773 5.99648 14.4759 5.92913 14.2935C5.86178 14.1112 5.72624 13.9621 5.5511 13.8777C5.37596 13.7933 5.17491 13.7803 4.99031 13.8412C2.73937 14.6709 1.5 15.8822 1.5 17.25C1.5 20.1731 6.91031 21.75 12 21.75C17.0897 21.75 22.5 20.1731 22.5 17.25C22.5 15.8822 21.2606 14.6709 19.0097 13.8403Z" fill="currentColor"/>
</svg>
</div> 

                      <div className=" text-text-primary font-semibold">
                      { t("               Physical Address      ")}:
                      </div >
                    </div>
                    <div className="flex gap-8 flex-wrap  ">
                      {addressFields.map((field, index) => (
                        <Input
                          key={index}
                          className="w-[172px]  h-12 border-light border bg-background-secondary  text-text-primary  font-sans"
                          placeholder={field.label}
                        />
                      ))}
                    </div>
                  </div>
                    <div className="flex-wrap flex gap-x-[170px] gap-y-5">
                  <div className="flex items-center gap-1">
                    <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                      <div className="relative w-6 h-6">
                       <div className="   text-text-primary ">   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.747 9.41505 20.7188 6.93683 18.891 5.109C17.0632 3.28116 14.585 2.25298 12 2.25ZM20.25 12C20.2507 12.7608 20.1456 13.5181 19.9378 14.25H16.3275C16.5575 12.7588 16.5575 11.2412 16.3275 9.75H19.9378C20.1456 10.4819 20.2507 11.2392 20.25 12ZM9.5625 15.75H14.4375C13.9572 17.3237 13.1235 18.7667 12 19.9688C10.877 18.7664 10.0433 17.3235 9.5625 15.75ZM9.19688 14.25C8.93939 12.7611 8.93939 11.2389 9.19688 9.75H14.8106C15.0681 11.2389 15.0681 12.7611 14.8106 14.25H9.19688ZM3.75 12C3.74935 11.2392 3.85442 10.4819 4.06219 9.75H7.6725C7.4425 11.2412 7.4425 12.7588 7.6725 14.25H4.06219C3.85442 13.5181 3.74935 12.7608 3.75 12ZM14.4375 8.25H9.5625C10.0428 6.67632 10.8765 5.2333 12 4.03125C13.1231 5.23361 13.9567 6.67653 14.4375 8.25ZM19.3434 8.25H16.0041C15.5832 6.70585 14.8738 5.25532 13.9134 3.975C15.0738 4.25375 16.1602 4.7801 17.098 5.51799C18.0359 6.25588 18.8032 7.18784 19.3472 8.25H19.3434ZM10.0866 3.975C9.12619 5.25532 8.41683 6.70585 7.99594 8.25H4.65282C5.19682 7.18784 5.96407 6.25588 6.90196 5.51799C7.83985 4.7801 8.92621 4.25375 10.0866 3.975ZM4.65282 15.75H7.99594C8.41683 17.2941 9.12619 18.7447 10.0866 20.025C8.92621 19.7463 7.83985 19.2199 6.90196 18.482C5.96407 17.7441 5.19682 16.8122 4.65282 15.75ZM13.9134 20.025C14.8738 18.7447 15.5832 17.2941 16.0041 15.75H19.3472C18.8032 16.8122 18.0359 17.7441 17.098 18.482C16.1602 19.2199 15.0738 19.7463 13.9134 20.025Z" fill="currentColor"/>
</svg>
</div>

                      </div>
                      <div className="text-text-primary font-semibold">
                       { t("             Company Website      ")}:
                      </div>
                    </div>
                    <Input
                      className="w-[350px] h-12 border-light border bg-background-secondary  text-text-primary  font-sans"
                      defaultValue={contactData.website}
                    />
                  </div>
          
  
                
              
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                      <div className="relative w-6 h-6 ">
                      <div className="   text-text-primary "> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 11.2506C20.3402 11.2506 22.75 13.5936 22.75 16.4635C22.7499 17.934 22.125 19.158 21.2783 20.1461C20.4378 21.127 19.3524 21.9075 18.3545 22.5182L18.3438 22.525L18.332 22.5318C18.0781 22.6751 17.7914 22.7506 17.5 22.7506C17.2086 22.7506 16.9219 22.6751 16.668 22.5318L16.6543 22.524L16.6416 22.5162C15.649 21.9017 14.5644 21.1239 13.7236 20.1461C12.876 19.1602 12.2501 17.9387 12.25 16.4635C12.25 13.5936 14.6598 11.2506 17.5 11.2506ZM17.5 12.7506C15.4697 12.7506 13.75 14.4405 13.75 16.4635C13.7501 17.4816 14.1747 18.3689 14.8613 19.1676C15.5508 19.9694 16.4773 20.6494 17.4131 21.2301C17.4395 21.2433 17.4696 21.2506 17.5 21.2506C17.5308 21.2506 17.5612 21.2427 17.5879 21.2291C18.5226 20.6559 19.4494 19.9747 20.1387 19.1705C20.8255 18.3689 21.2499 17.4779 21.25 16.4635C21.25 14.4405 19.5303 12.7506 17.5 12.7506ZM7.98828 1.75156C8.49476 1.73509 8.95906 1.85034 9.4541 2.04257C9.92734 2.22637 10.4758 2.49992 11.1445 2.83457L14.5068 4.51816C14.7443 4.63698 14.8895 4.70636 14.9902 4.75058C14.9935 4.75054 14.9967 4.75058 15 4.75058C15.1285 4.75058 15.2478 4.78545 15.3535 4.84238C15.4629 4.84963 15.6273 4.85312 15.9209 4.85312H18.0527C18.9499 4.85309 19.7008 4.85276 20.2969 4.93515C20.9286 5.02252 21.4976 5.21564 21.9522 5.6832C22.4036 6.14772 22.5873 6.72345 22.6709 7.36289C22.7505 7.97187 22.75 8.74029 22.75 9.6666V10.5006C22.7498 10.9146 22.4141 11.2506 22 11.2506C21.5859 11.2506 21.2502 10.9146 21.25 10.5006V9.71738C21.25 8.72711 21.248 8.05747 21.1826 7.55722C21.1198 7.07661 21.0101 6.86605 20.876 6.72812C20.7447 6.59331 20.5488 6.48469 20.0918 6.42148C19.6105 6.35491 18.9646 6.35312 18 6.35312H15.8594C15.8223 6.35314 15.7858 6.35121 15.75 6.35117V9.50058C15.7498 9.91462 15.4141 10.2506 15 10.2506C14.5859 10.2506 14.2502 9.91462 14.25 9.50058V6.05918C14.1373 6.00639 14.0183 5.95079 13.8916 5.8873C13.8732 5.87808 13.8547 5.86839 13.8359 5.85898L10.5039 4.19199C9.79625 3.83786 9.31111 3.59536 8.91113 3.44003C8.85496 3.41822 8.80094 3.40003 8.75 3.38242V16.8199C9.25305 16.9102 9.71472 17.1023 10.1191 17.3014C10.3418 17.4109 10.5589 17.5281 10.7598 17.6373L10.7891 17.6539C10.9828 17.7592 11.1613 17.8556 11.3359 17.943C11.7063 18.1284 11.8562 18.5794 11.6709 18.9498C11.4855 19.3202 11.0345 19.4701 10.6641 19.2848C10.4657 19.1855 10.2667 19.0772 10.0791 18.9752L10.043 18.9557C9.84013 18.8454 9.64784 18.7414 9.45606 18.6471C9.06955 18.4569 8.72722 18.3275 8.40235 18.2828C7.65872 18.1807 7.05177 18.5352 6.11914 19.0797L6.0625 19.1119C5.44356 19.4733 4.92893 19.7738 4.50293 19.9674C4.07219 20.1631 3.60392 20.313 3.10938 20.2242C2.57481 20.1282 2.09595 19.839 1.75684 19.4156C1.44633 19.0279 1.34269 18.5482 1.2959 18.0699C1.24954 17.5959 1.24999 16.9896 1.25 16.2555V7.96445C1.24999 7.40957 1.24969 6.94068 1.28711 6.55234C1.32684 6.14027 1.41321 5.75989 1.61914 5.39609C1.82569 5.03132 2.10707 4.7646 2.43945 4.52304C2.75106 4.29661 3.14922 4.06381 3.61719 3.79062C3.62723 3.78476 3.63735 3.77894 3.64746 3.77304L4.90527 3.03867C5.55205 2.66105 6.08217 2.35153 6.54297 2.1373C7.02501 1.91324 7.48175 1.76809 7.98828 1.75156ZM7.17578 3.49765C6.78602 3.67883 6.3162 3.95162 5.63184 4.35117L4.40332 5.06796C3.89687 5.36364 3.56483 5.559 3.32129 5.73593C3.09187 5.90266 2.98989 6.02043 2.92481 6.13535C2.8591 6.25142 2.80846 6.40366 2.78027 6.69589C2.75059 7.00379 2.75 7.40011 2.75 7.99863V16.2164C2.75 16.9999 2.75071 17.5323 2.78906 17.9244C2.82785 18.3205 2.89603 18.4385 2.92774 18.4781C3.0441 18.6234 3.20391 18.7169 3.375 18.7477C3.41122 18.754 3.53316 18.761 3.88281 18.6021C4.23043 18.4442 4.67832 18.1838 5.3418 17.7965C5.39461 17.7656 5.44886 17.7332 5.50391 17.7008C5.99631 17.4105 6.57792 17.0673 7.25 16.8883V3.46543C7.22602 3.4761 7.20084 3.486 7.17578 3.49765ZM17.5088 15.5006C18.0611 15.5006 18.5088 15.9483 18.5088 16.5006C18.5086 17.0527 18.0609 17.5006 17.5088 17.5006H17.5C16.9478 17.5006 16.5002 17.0527 16.5 16.5006C16.5 15.9483 16.9477 15.5006 17.5 15.5006H17.5088Z" fill="currentColor"/>
</svg></div> 

                      </div>
                      <div className="text-text-primary font-semibold">
                         { t("             Maps Location     ")}:
                      </div>
                    </div>
                    <Input
                      className="w-[350px]  h-12 border-light border bg-background-secondary  text-text-primary  font-sans"
                      defaultValue={contactData.mapsLocation}
                    />
                  </div>
                 </div>

                   
                </div></div>}

          />











    <ReusableCollapsible
            title=  { t("              Social media Accounts    ")}
            initiallyOpen={isOpen.contactInfo}
            onOpenChange={(open) => handleToggle("contactInfo", open)}
            content={<div className="px-4 pb-4">       <div className="grid grid-cols-2 gap-6">
                  {socialMediaData.map((social, index) => (
                    <div key={index} className="flex items-center gap-2   text-text-primary ">
                     
                      {social.url}
                      <div className="w-[134px] text-text-primary font-semibold">
                        {social.platform}:
                      </div>
                      <Input
                        className="w-[350px] h-12 border-light border bg-background-secondary  text-text-primary  font-sans"
                        defaultValue={social.url}
                      />
                    </div>
                  ))}
                </div></div>}

          />








      <ReusableCollapsible
            title=  {  t("           Legal Details    ")}
            initiallyOpen={isOpen.workingDays}
            onOpenChange={(open) => handleToggle("workingDays", open)}
            content={<div className="px-4 pb-4">       <div className="space-y-6">

               



                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center gap-[170px]">
                      <div className="text-text-primary font-semibold">
                         {  t("            VAT    ")}:
                      </div>
                      <Input
                        className="w-[350px]  h-12 border-light border bg-background-secondary  text-text-primary  font-sans"
                        defaultValue={legalData.vat}
                      />
                    </div>

                    <div className="flex items-center gap-[170px]">
                      <div className="text-text-primary font-semibold">
                      {  t("               CR     ")} :
                      </div>
                      <Input
                        className="w-[350px]  h-12 border-light border bg-background-secondary  text-text-primary  font-sans"
                        defaultValue={legalData.cr}
                      />
                    </div>
                  </div>


<ReusableCollapsible
  title={t("Terms & Conditions")}
  initiallyOpen={isOpen.term}
  onOpenChange={(open) => handleToggle("term", open)}
  content={
    <div className="px-4 pb-4 space-y-4">

      {/* العناوين */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-sm font-semibold text-text-primary">
          {t("Title")}
        </div>
        <div className="text-sm font-semibold text-text-primary">
          {t("Description")}
        </div>
      </div>

      {/* الحقول */}
      {legalData.termsConditions.map((term, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-surface-default p-2 rounded-md"
        >
          <Input
            className="w-[350px] h-12 border border-light bg-background-secondary text-text-primary font-sans"
            defaultValue={term.title}
          />
          <Input
            className="w-[600px] h-12 border border-light bg-background-secondary text-text-primary font-sans"
            defaultValue={term.description}
          />
        </div>
      ))}

      {/* زر الإضافة */}
      <div className="flex justify-end text-secondary-dark p-2">
        <PlusIcon className="w-8 h-8 cursor-pointer" />
      </div>
    </div>
  }
/>





    <ReusableCollapsible
  title={t("Privacy Policy")}
  initiallyOpen={isOpen.policy}
  onOpenChange={(open) => handleToggle("policy", open)}
  content={
    <div className="px-4 pb-4 space-y-4">

      {/* العناوين */}
      <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
        <div className="text-sm font-semibold text-text-primary">
          {t("Title")}
        </div>
        <div className="text-sm font-semibold text-text-primary">
          {t("Description")}
        </div>
      </div>

      {/* الحقول */}
      {legalData.privacyPolicy.map((policy, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-surface-default p-2 rounded-md"
        >
          {/* حقل العنوان */}
          <Input
            className="w-[350px] h-12 border border-light bg-background-secondary text-text-primary font-sans"
            defaultValue={policy.title}
          />

          {/* حقل الوصف + زر الحذف */}
          <div className="flex items-center gap-2">
            <Input
              className="w-[600px] h-12 border border-light bg-background-secondary text-text-primary font-sans"
              defaultValue={policy.description}
            />

            {/* زر الحذف */}
            <div className="cursor-pointer">
              <svg width="24" height="2" viewBox="0 0 24 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 1C24 1.26522 23.8946 1.51957 23.7071 1.70711C23.5196 1.89464 23.2652 2 23 2H1C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H23C23.2652 0 23.5196 0.105357 23.7071 0.292893C23.8946 0.48043 24 0.734784 24 1Z" fill="#00B48D"/>
              </svg>
            </div>
          </div>
        </div>
      ))}

      {/* زر الإضافة */}
      <div className="flex justify-end p-2">
        <PlusIcon className="w-8 h-8 text-secondary-dark cursor-pointer" />
      </div>

    </div>
  }
/>









                  
                </div></div>}

          />










      <ReusableCollapsible
            title={  t("      Maps Location    ")}
            initiallyOpen={isOpen.mapsLocation}
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
