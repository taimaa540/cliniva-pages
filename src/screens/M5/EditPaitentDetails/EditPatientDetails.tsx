import { BellIcon, CalendarIcon, ChevronDownIcon } from "lucide-react";
import { CountryDropdown } from "react-country-region-selector";
import PhoneInput from "react-phone-number-input";
import { Trans } from "react-i18next";
import {




  PlusIcon,
} from "lucide-react";
import { MinusIcon } from "lucide-react";
import PhoneInputCustom from "../../../components/ui/PhoneInput";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../components/ui/collapsible";
import en from "react-phone-number-input/locale/en.json";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import FileUpload from "../../CommonComponents/fillUpLoad";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { ThemeToggle } from "../../../components/theme/ThemeSwitcher";
import { SideBar } from "../../CommonComponents/SideBarPlan2";
import { useLanguage } from "../../../lib/LanguageContext";
import { useState } from "react";
import ImageUploader from "../../CommonComponents/ImageUpload";
import DatePicker from '../../../components/ui/DatePicker';
import { Link } from "react-router-dom";


const addressFields = [
  { value: "2154", width: "w-[136px]" },
  { value: "Abdulaziz Street", width: "w-[165px]" },
  { value: "Al Olaya District", width: "w-[165px]" },
  { value: "Riyadh", width: "w-[165px]" },
  { value: "Saudi Arabia", width: "w-[165px]" },
];

const emergencyContact = {
  name: "Mohammed Zaki",
  relationship: "Father",
  countryCode: "+963",
  number: "93 348 151",
};
const personalDocumentFields = (t: (key: string) => string) => ({
  title: { label: t("Title"), placeholder: t("Enter Full Name") },
  uploadFile: { label: t("Upload File"), placeholder: t(" file to this area to upload") },
  date: { label: t("Date"), placeholder: t("Select Date") }
});


export const EditPatientDetails = (): JSX.Element => {
  const [value, setValue] = useState<string | undefined>("");
  const shortLabels: Record<string, string> = {};
  Object.keys(en).forEach((key) => {
    shortLabels[key] = key; // يظهر SY, US, EG بدل اسم الدولة
  });
  const [country, setCountry] = useState("");
  const [open, setOpen] = useState({
    personal: true,
    account: true,
    employment: true,
    documents: true,
  });
  const { local, handleLanguageClick } = useLanguage();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);


  const [formDates, setFormDates] = useState<{
    Barithday: Date | null;
    DateofHire: Date | null;
    ContactDate: Date | null;
    CertificationsDate: Date | null;
    WorkPermit: Date | null;
    Resume: Date | null;
  }>({
    Barithday: new Date('1994-01-20'),
    DateofHire: new Date('1994-01-20'),
    ContactDate: new Date('2005-04-27'),
    CertificationsDate: new Date('2005-04-27'),
    WorkPermit: new Date('2005-04-27'),
    Resume: new Date('2005-04-27')
  });

  const documents = [
    {
      label: "Employment Contract",
      effectiveDate: (
        <DatePicker
          label={t("Effective Date")}
          value={formDates.ContactDate}
          onDateChange={(date) =>
            setFormDates((prev) => ({ ...prev, ContactDate: date }))
          }
        />
      )
    },
    {
      label: "Certifications",
      effectiveDate: (
        <DatePicker
          label={t("Effective Date")}
          value={formDates.CertificationsDate}
          onDateChange={(date) =>
            setFormDates((prev) => ({ ...prev, CertificationsDate: date }))
          }
        />
      )
    },
    {
      label: "Work Permit",
      effectiveDate: (
        <DatePicker
          label={t("Effective Date")}
          value={formDates.WorkPermit}
          onDateChange={(date) =>
            setFormDates((prev) => ({ ...prev, WorkPermit: date }))
          }
        />
      )
    },
    {
      label: "CV / Resume",
      effectiveDate: (
        <DatePicker
          label={t("Effective Date")}
          value={formDates.Resume}
          onDateChange={(date) =>
            setFormDates((prev) => ({ ...prev, Resume: date }))
          }
        />
      )
    }
  ];
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
      <div className="flex flex-col w-full overflow-hidden min-h-screen items-start gap-4 py-4 pl-0 pr-5">

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
                <h1 className="font-bold text-[clamp(12px,2vw,14px)] text-on-surface-primary">
                  {t("Patients Management")}
                </h1>
                <p className="text-xs text-on-surface-primary">
                  {t("Edit Patient Personal Details")}
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
                  {t("Patients Management")}
                </h1>
                <p className="text-[clamp(12px,2vw,14px)] md:text-base text-on-surface-primary">
                  {t("Edit Patient Personal Details")}
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
                  <div className="text-[clamp(12px,2vw,14px)] text-on-surface-tertiary">
                    {t("Admin")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>


        <main className="flex flex-col h-full items-start gap-5 p-[20px] pr-0 relative w-full rounded-2xl overflow-hidden bg-background-tertiary">
          <div className="flex flex-col gap-[20px] w-full overflow-y-auto scroll-x-hidden pr-[20px]">


            <div className="flex gap-[14px]  justify-end p-3 items-end text-end pb-2 sm:pb-3 md:pb-3 lg:pb-4 " dir={local === 'ar' ? 'rtl' : 'ltr'}
            >
              <Link to="/ViewPatientDetail"> 
              <button className="     w-[80px] h-[30px]       /* الموبايل الافتراضي */
    sm:w-[100px] sm:h-[26px] 
    md:w-[180px] md:h-[38px]
    lg:w-[200px] lg:h-[40px] 
 
      rounded-[20px] border border-border-light bg-surface-primary  font-lato font-medium text-[clamp(12px,2vw,14px)] leading-[100%] tracking-[0] text-text-primary">
                {t("Cancel")}
              </button></Link>
              <button className="  w-[80px] h-[30px]       /* الموبايل الافتراضي */
    sm:w-[100px] sm:h-[24px] 
    md:w-[160px] md:h-[36px]
    lg:w-[200px] lg:h-[40px]  rounded-[20px] bg-secondary-dark font-lato font-medium text-[clamp(12px,2vw,14px)] leading-[100%] tracking-[0] text-surface-primary">
                {t("Save")}
              </button>

            </div>

            <Card className="w-full bg-background-primary rounded-[16px] p-[16px]">
              <CardContent dir={local === "en" ? "ltr" : "rtl"}>
                <Collapsible
                  open={open.personal}
                  onOpenChange={() =>
                    setOpen({ ...open, personal: !open.personal })
                  }
                  className="w-full"
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="p-0 hover:bg-[none] w-full"
                    >
                      <div className="flex w-full items-center justify-between mb-[12px] ">
                        <h2 className="text-primary-default text-[16px] font-lato font-bold leading-[124%] tracking-[0] ">
                          {t("Personal Information")}
                        </h2>
                        <ChevronDownIcon
                          style={{ width: "24px", height: "24px" }}
                          className={`transition-transform duration-200 ${open.personal ? "rotate-180" : "rotate-0"
                            }`}
                        />
                      </div>
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="w-full">
                    <div className="flex flex-col   gap-[16px]">
                      <h3 className="font-lato font-semibold text-[clamp(12px,2vw,14px)] leading-[125%] tracking-[0] text-secondary-dark">
                        {t('Profile & Identity Info')}
                      </h3>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[22px]">
                        <div className="flex flex-col sm:flex-row items-start w-full">
                          <Label className="min-w-[162px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                            {t("Profile Picture")}
                          </Label>
                          <ImageUploader initialImage="./userLogo.png" />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center   gap-y-2 ">
                          <Label className="min-w-[162px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                            {t("Full Name")}
                          </Label>
                          <Input
                            defaultValue="Ammar Mohammed Al Sawwa"
                            className="w-[min(100%,360px)] h-10 sm:h-10 md:h-12   bg-background-secondary border border-border-light rounded-[4px] font-lato font-semibold text-[clamp(12px,2vw,14px)] leading-[125%] tracking-[0] text-text-primary"
                          />
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center   gap-y-2 ">
                          <Label className="min-w-[162px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                            {t("Nationality")}
                          </Label>



                          <Select defaultValue="Sy" dir={local === "en" ? "ltr" : "rtl"}>
                            <SelectTrigger className="w-[min(100%,360px)] h-10 sm:h-10 md:h-12  bg-background-secondary border border-border-light rounded-[4px] font-lato font-semibold text-[clamp(12px,2vw,14px)] leading-[125%] tracking-[0] text-text-primary">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Sy">Sy</SelectItem>
                              <SelectItem value="Eg">Eg</SelectItem>
                            </SelectContent>
                          </Select>


                        </div>



                        <div className="flex flex-col sm:flex-row sm:items-center    gap-y-2 ">
                          <Label className="min-w-[162px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                            {t("Card Number")}
                          </Label>
                          <label className="text-text-primary text-[clamp(12px,2vw,14px)]  ps-2 font-semibold"> 4455566688 </label>
                        </div>










                        <div className="flex flex-col sm:flex-row sm:items-center   gap-y-2 ">
                          <Label className="min-w-[162px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                            {t("Preferred Language")}
                          </Label>
                          <input
                            defaultValue="Arabic"
                            className=" w-[min(100%,360px)] h-10 sm:h-10 md:h-12  ps-2 bg-background-secondary border border-border-light rounded-[4px] font-lato font-semibold text-[clamp(12px,2vw,14px)] leading-[125%] tracking-[0] text-text-primary"
                          />



                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center   gap-y-2 ">
                          <Label className="min-w-[162px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                            {t("Religion")}
                          </Label>
                          <Input
                            defaultValue="Muslim"
                            className=" w-[min(100%,360px)] h-10 sm:h-10 md:h-12  bg-background-secondary border border-border-light rounded-[4px] font-lato font-semibold text-[clamp(12px,2vw,14px)] leading-[125%] tracking-[0] text-text-primary"
                          />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-y-2 ">

                          <DatePicker label="Birth Day" />
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center    gap-y-2 ">
                          <Label className="min-w-[162px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                            {t("Age")}
                          </Label>
                          <label className="text-text-primary text-[clamp(12px,2vw,14px)]  ps-2 font-semibold"> 25</label>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center   gap-y-2 ">
                          <Label className="min-w-[162px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                            {t("Marital Status")}
                          </Label>
                          <Select defaultValue="Married" dir={local === "en" ? "ltr" : "rtl"}>
                            <SelectTrigger className="w-[min(100%,360px)] h-10 sm:h-10 md:h-12  bg-background-secondary border border-border-light rounded-[4px] font-lato font-semibold text-[clamp(12px,2vw,14px)] leading-[125%] tracking-[0] text-text-primary">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Married">Married</SelectItem>
                              <SelectItem value="Single">Single</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="flex items-center md:items-start  ">
                          <Label className="sm:w-[clamp(70px,10vw,162px)] text-[clamp(14px,2vw,16px)] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                            {t("Gender")}
                          </Label>
                          <div className="flex md:flex-col  lg:flex-row gap-4">
                            <div className="flex items-center gap-3">  <input
                              className="w-5 h-5 text-text-muted"
                              type="radio"
                              name="Gender"
                              value="Male"

                              defaultChecked
                            />

                              <label className="font-lato font-regular text-[clamp(12px,2vw,14px)] leading-[154%] tracking-[0] text-text-primary">
                                Male
                              </label></div>
                            <div className="flex items-center gap-3"><input className="w-5 h-5" type="radio" name="Gender" />
                              <label className="font-lato font-regular text-[clamp(12px,2vw,14px)] leading-[154%] tracking-[0] text-text-primary">
                                Female
                              </label></div>
                          </div>
                        </div>
                      </div>
                      <h3 className="font-lato font-semibold text-[clamp(14px,2vw,16px)] leading-[125%] tracking-[0] text-secondary-dark">
                        {t('Contact Info')}
                      </h3>
                      <div className="flex flex-col ">
                        <div className=" flex gap-x-[53px]  flex-wrap  " >


                          <div className=" w-full   sm:w-[560px] gap-y-2 rounded-md py-1">
                            {/* Label + Input */} <div className="flex  items-start  flex-col  sm:flex-row  "> {/* Label + Icon */} <div className="flex items-center text-center mt-3  pb-9 gap-x-2">
                              <div className="text-text-primary"> <svg className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.77089 1.79165C4.74396 1.78995 4.69757 1.79131 4.62528 1.80353C3.77857 1.94663 3.00486 2.37648 2.43547 3.02333C1.97218 3.54965 1.66854 4.19192 1.55287 4.87525C1.48516 5.27528 1.49216 5.71071 1.52066 6.19936C1.69143 9.12694 2.92996 11.9003 5.01501 13.9853C7.18212 16.1525 10.0928 17.4051 13.1473 17.4949C13.5053 17.5054 13.8283 17.4977 14.1251 17.4475C14.8084 17.3318 15.4507 17.0282 15.977 16.5649C16.6598 15.9639 17.1008 15.1353 17.218 14.2335L17.2168 14.233L17.2168 14.2329L12.8295 12.3487L12.8294 12.3487L12.8294 12.3487L10.4887 13.9123C10.4881 13.9127 10.4874 13.9132 10.4868 13.9136C10.2713 14.0586 10.0219 14.1451 9.76298 14.1648C9.50325 14.1845 9.24287 14.1363 9.00745 14.0248L9.00328 14.0228C7.25484 13.1817 5.84277 11.7732 4.99715 10.0269L4.99564 10.0238L4.99565 10.0238C4.88489 9.79239 4.83535 9.5364 4.85176 9.28035C4.86817 9.0243 4.94999 8.77673 5.0894 8.56133L5.09234 8.55678L5.09236 8.55679L6.65297 6.18316L6.65155 6.17989L6.65156 6.17988L4.77089 1.79165ZM17.2189 14.2264L17.2189 14.2266L17.2189 14.2264ZM4.37532 0.324505C4.70725 0.268408 5.26379 0.236222 5.73387 0.632745C5.91326 0.784063 6.05538 0.976462 6.14718 1.19512L8.02884 5.58566C8.02911 5.58629 8.02938 5.58692 8.02965 5.58755C8.12707 5.81269 8.16779 6.05829 8.14822 6.30284C8.1286 6.54807 8.04897 6.78472 7.91634 6.99191L7.9114 6.99963L7.91135 6.9996L6.3487 9.37632C7.04612 10.8147 8.20932 11.9751 9.6494 12.6691L9.65244 12.667L9.65244 12.667L11.9944 11.1026C12.2022 10.9623 12.4421 10.8767 12.6918 10.8537C12.9415 10.8307 13.193 10.871 13.423 10.9711C13.4239 10.9715 13.4249 10.9719 13.4258 10.9723L17.8056 12.8533C18.1054 12.9793 18.3558 13.1998 18.5186 13.4813C18.6822 13.7643 18.7483 14.0931 18.7067 14.4173C18.5445 15.6835 17.9264 16.8473 16.9681 17.6908C16.2313 18.3395 15.3321 18.7645 14.3755 18.9264C13.9356 19.0009 13.4989 19.0059 13.1033 18.9942C9.66683 18.8932 6.39236 17.484 3.95435 15.046C1.60865 12.7003 0.215328 9.58029 0.0232104 6.28671C-0.00635157 5.77991 -0.0237603 5.20192 0.0739086 4.62491C0.235831 3.6683 0.660897 2.76911 1.30954 2.03223C2.1067 1.12662 3.18988 0.524849 4.37532 0.324505Z" fill="CurrentColor" />
                              </svg>
                              </div>
                              <div className="text-text-primary text-start font-semibold sm:w-[clamp(120px,10vw,160px)] text-[clamp(14px,2vw,16px)]">
                                {t("Phone Number")}: </div>
                            </div> {/* Phone Input */}
                              <div className="relative w-full ">




                                <PhoneInputCustom value={emergencyContact.number}
                                  onChange={setValue}
                                  placeholder={t("Enter Number")}
                                />    <div className="flex text-secondary-dark justify-end p-2 max-w-[360px]">
                                  <PlusIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 cursor-pointer" /> </div> </div> </div>
                            {/* Plus Icon */}


                          </div>














                          <div className="flex flex-col sm:flex-row items-start sm:items-start   h-12 gap-y-2 ">
                            {/* Label + Icon */}
                            <div className="flex items-start gap-2 sm:w-[166px] h-6 flex-shrink-0">
                              <div className="   text-text-primary ">        <svg
                                className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6"
                                viewBox="0 0 22 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.07923 0.787497C10.0441 0.737503 11.9541 0.737499 13.9191 0.787497C17.157 0.869496 18.9413 0.915255 20.2843 2.25625C21.6291 3.61122 21.6655 5.3485 21.7325 8.50136C21.7535 9.50833 21.7535 10.4866 21.7325 11.4936C21.6656 14.6461 21.6288 16.3819 20.2872 17.7348C18.9422 19.0788 17.158 19.1244 13.92 19.2064C12.9381 19.2314 11.9691 19.2445 11.0001 19.2445C10.0312 19.2445 9.06212 19.2314 8.0802 19.2064C4.84234 19.1244 3.05795 19.0785 1.71497 17.7377C0.370009 16.3827 0.332745 14.6454 0.265749 11.4926C0.24475 10.4856 0.244751 9.50735 0.265749 8.50039C0.332749 5.34739 0.370038 3.6112 1.71204 2.2582C3.05703 0.914271 4.84128 0.869495 8.07923 0.787497ZM13.881 2.28554C11.9421 2.23555 10.0572 2.23555 8.11731 2.28554C5.07934 2.36254 3.69256 2.39684 2.77356 3.31582C1.85556 4.24182 1.82677 5.58664 1.76477 8.53164C1.74378 9.5165 1.74378 10.4745 1.76477 11.4603C1.82677 14.4053 1.85648 15.7502 2.77747 16.6771C3.69447 17.593 5.08048 17.6294 8.11829 17.7064C10.0572 17.7564 11.9421 17.7564 13.882 17.7064C16.9199 17.6294 18.3057 17.5941 19.2247 16.6752C20.1427 15.7492 20.1715 14.4053 20.2335 11.4603C20.2545 10.4755 20.2545 9.5175 20.2335 8.53164C20.1715 5.58664 20.1428 4.24086 19.2218 3.31386C18.3048 2.39817 16.9186 2.36253 13.881 2.28554ZM5.35462 6.11074C5.56562 5.75474 6.02596 5.63509 6.38196 5.84609L9.32337 7.58633C10.7954 8.45333 11.2039 8.45333 12.6779 7.58633L15.6183 5.84707C15.9753 5.63607 16.4356 5.75472 16.6456 6.11172C16.8564 6.46859 16.7387 6.92802 16.382 7.13808L13.4396 8.87832C12.4588 9.45619 11.73 9.74442 11.0001 9.74453C10.2711 9.74453 9.54165 9.45532 8.56165 8.87832L5.61829 7.13711C5.26276 6.92603 5.14393 6.46654 5.35462 6.11074Z"
                                  fill="currentColor"
                                />
                              </svg></div>
                              <span className="min-min-w-[162px] text-text-primary font-semibold text-[clamp(14px,2vw,16px)] leading-6">
                                {t("Email")}:
                              </span>
                            </div>

                            {/* Input */}
                            <div
                              className="  flex   text-text-primary  font-sans">
                              <label className="   font-sans  text-text-primary font-semibold w-[min(100%,360px)] h-10 sm:h-10 md:h-12 ">ammarsvu91@gmail.com</label>
                            </div>
                          </div>






                        </div>


                        <div className="flex flex-col md:flex-row md:items-start lg:items-start   gap-3">
                          <div className="flex w-[186px] items-center gap-4 mt-2">
                            <div className="  text-text-primary ">     <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.5 7.5C10.5 7.20333 10.588 6.91332 10.7528 6.66665C10.9176 6.41997 11.1519 6.22771 11.426 6.11418C11.7001 6.00065 12.0017 5.97094 12.2926 6.02882C12.5836 6.0867 12.8509 6.22956 13.0607 6.43934C13.2704 6.64912 13.4133 6.91639 13.4712 7.20736C13.5291 7.49834 13.4994 7.79994 13.3858 8.07403C13.2723 8.34811 13.08 8.58238 12.8334 8.7472C12.5867 8.91203 12.2967 9 12 9C11.6022 9 11.2206 8.84196 10.9393 8.56066C10.658 8.27936 10.5 7.89782 10.5 7.5ZM6 7.5C6 5.9087 6.63214 4.38258 7.75736 3.25736C8.88258 2.13214 10.4087 1.5 12 1.5C13.5913 1.5 15.1174 2.13214 16.2426 3.25736C17.3679 4.38258 18 5.9087 18 7.5C18 13.1203 12.6019 16.2694 12.375 16.4016C12.2617 16.4663 12.1334 16.5004 12.0028 16.5004C11.8723 16.5004 11.744 16.4663 11.6306 16.4016C11.3981 16.2694 6 13.125 6 7.5ZM7.5 7.5C7.5 11.4563 10.86 14.0822 12 14.8594C13.1391 14.0831 16.5 11.4563 16.5 7.5C16.5 6.30653 16.0259 5.16193 15.182 4.31802C14.3381 3.47411 13.1935 3 12 3C10.8065 3 9.66193 3.47411 8.81802 4.31802C7.97411 5.16193 7.5 6.30653 7.5 7.5ZM19.0097 13.8403C18.8251 13.7793 18.624 13.7924 18.4489 13.8768C18.2738 13.9612 18.1382 14.1102 18.0709 14.2926C18.0035 14.475 18.0096 14.6764 18.0879 14.8543C18.1661 15.0323 18.3104 15.1729 18.4903 15.2466C20.0381 15.8194 21 16.5863 21 17.25C21 18.5025 17.5763 20.25 12 20.25C6.42375 20.25 3 18.5025 3 17.25C3 16.5863 3.96187 15.8194 5.50969 15.2475C5.6896 15.1739 5.8339 15.0332 5.91215 14.8553C5.99039 14.6773 5.99648 14.4759 5.92913 14.2935C5.86178 14.1112 5.72624 13.9621 5.5511 13.8777C5.37596 13.7933 5.17491 13.7803 4.99031 13.8412C2.73937 14.6709 1.5 15.8822 1.5 17.25C1.5 20.1731 6.91031 21.75 12 21.75C17.0897 21.75 22.5 20.1731 22.5 17.25C22.5 15.8822 21.2606 14.6709 19.0097 13.8403Z" fill="currentColor" />
                            </svg>
                            </div>

                            <div className="min-min-w-[162px] text-text-primary font-semibold text-[clamp(14px,2vw,16px)]">
                              {t("Physical Address")}:
                            </div >
                          </div>
                          <div className="grid gap-4 w-full grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
                            {addressFields.map((field, index) => (
                              <Input
                                key={index}
                                className={`${field.width} w-[min(100%,172px)] h-10 sm:h-10 md:h-12  text-[clamp(14px,1.1vw,16px)] placeholder:text-[clamp(14px,1.1vw,16px)]  bg-background-secondary border border-border-light rounded-[4px] font-lato font-semibold  leading-[125%] tracking-[0] text-text-primary`}
                                defaultValue={field.value}
                              />
                            ))}
                          </div>
                        </div>



                      </div>







                      <h3 className="font-lato font-semibold text-[clamp(12px,2vw,14px)] leading-[125%] tracking-[0] text-secondary-dark">
                        {t('Emergency Contact Info')}
                      </h3>
                      <div className="flex flex-col gap-[16px]">
                        <div className="grid grid-cols-1  lg:grid-cols-2  gap-[22px]">
                          <div className="flex flex-col sm:flex-row sm:items-center    gap-y-2 gap-x-8">
                            <Label className="min-w-[162px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                              {t("Emergency Contact")}
                            </Label>
                            <Input
                              defaultValue={emergencyContact.name}
                              className="w-[min(100%,360px)] h-10 sm:h-10 md:h-12  text-[clamp(14px,1.1vw,16px)] placeholder:text-[clamp(14px,1.1vw,16px)]  bg-background-secondary border border-border-light rounded-[4px] font-lato font-semibold  leading-[125%] tracking-[0] text-text-primary"
                            />
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center    gap-y-2 gap-x-8">
                            <Label className="min-w-[162px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                              {t("Relationship")}
                            </Label>
                            <Input
                              defaultValue={emergencyContact.relationship}
                              className=" w-[min(100%,360px)] h-10 sm:h-10 md:h-12 text-[clamp(14px,1.1vw,16px)] placeholder:text-[clamp(14px,1.1vw,16px)] bg-background-secondary border border-border-light rounded-[4px] font-lato font-semibold leading-[125%] tracking-[0] text-text-primary"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center   gap-y-2 gap-x-8">
                          <Label className="min-w-[162px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                            {t("Emergency Number")}
                          </Label>
                          <div className="w-[min(100%,360px)] h-10 sm:h-10 md:h-12  text-[clamp(14px,1.1vw,16px)] placeholder:text-[clamp(14px,1.1vw,16px)] !bg-background-secondary !rounded-[4px] overflow-hidden  text-text-primary font-semibold">
                            <PhoneInputCustom value={emergencyContact.number}
                              onChange={setValue}
                              placeholder={t("Enter Number")}
                            />
                          </div>


                        </div>
                      </div>

                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>







            <Card className="w-full bg-background-primary rounded-[16px] p-[16px]">
              <CardContent dir={local === "en" ? "ltr" : "rtl"}>
                <Collapsible
                  open={open.personal}
                  onOpenChange={() =>
                    setOpen({ ...open, personal: !open.personal })
                  }
                  className="w-full"
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="p-0 hover:bg-[none] w-full"
                    >
                      <div className="flex w-full items-center justify-between mb-[12px] ">
                        <h2 className="text-primary-default text-[16px] font-lato font-bold leading-[124%] tracking-[0] ">
                          {t("Insurance Info")}
                        </h2>
                        <ChevronDownIcon
                          style={{ width: "24px", height: "24px" }}
                          className={`transition-transform duration-200 ${open.personal ? "rotate-180" : "rotate-0"
                            }`}
                        />
                      </div>
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="w-full">
                    <div
                      className="
    flex flex-col md:flex-row w-full rounded-2xl 
    gap-x-4 sm:gap-x-8 md:gap-x-16 lg:gap-x-[126px] 
    h-full pb-4
  "
                      dir={local === 'ar' ? 'rtl' : 'ltr'}
                    >
                      {/* العمود الأول */}
                      <div className="grid gap-y-[30px] w-full max-w-full">
                        <div className="flex flex-col sm:flex-row gap-x-[32px] w-full max-w-[500px]">
                          <h1 className="w-[155px] shrink-0 text-text-primary font-semibold text-[16px]">
                            {t("Member Number")}:
                          </h1>
                          <p className="flex-1 text-text-primary font-normal text-[14px] break-words whitespace-normal">
                            36884674
                          </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-x-[32px] w-full max-w-[500px]">
                          <h1 className="w-[155px] shrink-0 text-text-primary font-semibold text-[16px]">
                            {t("Insurance Company")}:
                          </h1>
                          <p className="flex-1 text-text-primary font-normal text-[14px] break-words whitespace-normal">
                            BUPA Arabia for Cooperative Insurance شركة بوبا العربية للتأمين
                          </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-x-[32px] w-full max-w-[500px]">
                          <h1 className="w-[155px] shrink-0 text-text-primary font-semibold text-[16px]">
                            {t("Group Number")}:
                          </h1>
                          <p className="flex-1 text-text-primary font-normal text-[14px] break-words whitespace-normal">
                            12345678
                          </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-x-[32px] w-full max-w-[500px]">
                          <h1 className="w-[155px] shrink-0 text-text-primary font-semibold text-[16px]">
                            {t("Policy ID")}:
                          </h1>
                          <p className="flex-1 text-text-primary font-normal text-[14px] break-words whitespace-normal">
                            513029001
                          </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-x-[32px] w-full max-w-[500px]">
                          <h1 className="w-[155px] shrink-0 text-text-primary font-semibold text-[16px]">
                            {t("Co-payment")}:
                          </h1>
                          <p className="flex-1 text-text-primary font-normal text-[14px] break-words whitespace-normal">
                            % 20.00
                          </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-x-[32px] w-full max-w-[500px]">
                          <h1 className="w-[155px] shrink-0 text-text-primary font-semibold text-[16px]">
                            {t("Coverage Start Date")}:
                          </h1>
                          <p className="flex-1 text-text-primary font-normal text-[14px] break-words whitespace-normal">
                            Nov 20, 2026
                          </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-x-[32px] w-full max-w-[500px]">
                          <h1 className="w-[155px] shrink-0 text-text-primary font-semibold text-[16px]">
                            {t("Insurance Status")}:
                          </h1>
                          <p className="flex-1 text-text-primary font-normal text-[14px] break-words whitespace-normal">
                            Active
                          </p>
                        </div>
                      </div>

                      {/* العمود الثاني */}
                      <div className="flex flex-col gap-8 mt-5 w-full max-w-full">
                        <div className="flex flex-col sm:flex-row gap-x-[32px] w-full max-w-[500px]">
                          <h1 className="w-[155px] shrink-0 text-text-primary font-semibold text-[16px]">
                            {t("Member Type")}:
                          </h1>
                          <p className="flex-1 text-text-primary font-normal text-[14px] break-words whitespace-normal">
                            Main
                          </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-x-[32px] w-full max-w-[500px]">
                          <h1 className="w-[155px] shrink-0 text-text-primary font-semibold text-[16px]">
                            {t("Provider Network")}:
                          </h1>
                          <p className="flex-1 text-text-primary font-normal text-[14px] break-words whitespace-normal">
                            300186
                          </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-x-[32px] w-full max-w-[500px]">
                          <h1 className="w-[155px] shrink-0 text-text-primary font-semibold text-[16px]">
                            {t("Class")}:
                          </h1>
                          <p className="flex-1 text-text-primary font-normal text-[14px] break-words whitespace-normal">
                            essential 1.0
                          </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-x-[32px] w-full max-w-[500px]">
                          <h1 className="w-[155px] shrink-0 text-text-primary font-semibold text-[16px]">
                            {t("Coverage Limit")}:
                          </h1>
                          <p className="flex-1 text-text-primary font-normal text-[14px] break-words whitespace-normal">
                            75.00
                          </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-x-[32px] w-full max-w-[500px]">
                          <h1 className="w-[155px] shrink-0 text-text-primary font-semibold text-[16px]">
                            {t("Coverage End Date")}:
                          </h1>
                          <p className="flex-1 text-text-primary font-normal text-[14px] break-words whitespace-normal">
                            Nov 20, 2026
                          </p>
                        </div>
                      </div>
                    </div>


                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>






            <Card className="w-full bg-background-primary rounded-[16px] p-[16px]">
              <CardContent dir={local === "en" ? "ltr" : "rtl"}>
                <Collapsible
                  open={open.personal}
                  onOpenChange={() => setOpen({ ...open, personal: !open.personal })}
                  className="w-full"
                >
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="p-0 hover:bg-[none] w-full">
                      <div className="flex w-full items-center justify-between mb-[12px] ">
                        <h2 className="text-primary-default text-[16px] font-lato font-bold leading-[124%] tracking-[0] ">
                          {t("Personal Documents")}
                        </h2>
                        <ChevronDownIcon
                          style={{ width: "24px", height: "24px" }}
                          className={`transition-transform duration-200 ${open.personal ? "rotate-180" : "rotate-0"
                            }`}
                        />
                      </div>
                    </Button>
                  </CollapsibleTrigger>

                  <CollapsibleContent className="w-full">
                    <div className="w-full" dir={local === "ar" ? "rtl" : "ltr"}>
                      {/* ---------- DESKTOP: keep original layout exactly as before (visible on lg+) ---------- */}
                      <div className="hidden lg:flex">
                        <div className="grid justify-end">
                          {/* --- هذه هي نسخة اللابتوب كما في كودك الأصلي --- */}
                          <div className="flex items-center w-full justify-between gap-6">
                            {/* Title Field */}
                            <div className="flex-none flex-shrink min-w-0 w-[min(100%,378px)]">
                              <div className="flex items-center gap-x-4">
                                <Label className="min-w-[162px] font-lato font-semibold text-base leading-[124%] text-text-primary">
                                  {personalDocumentFields(t).title.label}
                                </Label>
                                <Input
                                  defaultValue="Previous Medical Records"
                                  className="w-[min(100%,280px)] h-10 sm:h-10 md:h-12 bg-background-secondary border border-border-light rounded-[4px] font-lato font-semibold text-[clamp(12px,2vw,14px)] leading-[125%] text-text-primary"
                                />
                              </div>
                            </div>

                            {/* Upload Field */}
                            <div className="flex-none flex-shrink min-w-0 w-[min(100%,378px)]">
                              <div className="flex items-center">
                                <Label className="min-w-[162px] text-text-primary font-semibold text-base">
                                  {personalDocumentFields(t).uploadFile.label}
                                </Label>
                                <FileUpload
                                  amount="Max 2MB"
                                  size={2 * 1024 * 1024}
                                  width="w-[min(100%,280px)]"
                                  label={
                                    <Trans i18nKey="uploadFile.dragLabel">
                                      <span className="text-text-accent" />
                                      <span className="text-text-primary" />
                                    </Trans>
                                  }
                                />
                              </div>
                            </div>

                            {/* Date Picker */}
                            <div className="flex-none flex-shrink min-w-0 w-[min(100%,378px)]">
                              <DatePicker label="Date" width="w-[min(100%,280px)]" />
                            </div>

                            {/* Minus Icon */}
                            <MinusIcon className="w-8 h-8 text-secondary-dark flex-none" />
                          </div>

                          <div className="flex w-full justify-end text-secondary-dark">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 10C0 9.44771 0.373096 9 0.833333 9H19.1667C19.6269 9 20 9.44771 20 10C20 10.5523 19.6269 11 19.1667 11H0.833333C0.373096 11 0 10.5523 0 10Z"
                                fill="currentColor"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10 0C10.5523 0 11 0.373096 11 0.833333V19.1667C11 19.6269 10.5523 20 10 20C9.44771 20 9 19.6269 9 19.1667V0.833333C9 0.373096 9.44771 0 10 0Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>






                      {/* ---------- MOBILE: stacked card layout (visible below md) ---------- */}
                      <div className="flex flex-col lg:hidden w-full gap-4">
                        {/* Card for one document */}
                        <div className="w-full bg-background-tertiary border border-border-light rounded-2xl p-4">
                          <div className="flex flex-col gap-3">

                            {/* Title */}
                            <div className="flex flex-col md:flex-row md:items-center md:gap-x-14 gap-x-6">
                              <Label className="mb-2 md:mb-0 font-lato font-semibold text-base leading-[124%] text-text-primary">
                                {personalDocumentFields(t).title.label}
                              </Label>
                              <Input
                                defaultValue="Previous Medical Records"
                                className="w-[min(100%,360px)] h-10 bg-background-secondary border border-border-light rounded-[6px] font-lato font-semibold text-[clamp(12px,2vw,14px)] leading-[125%] text-text-primary"
                              />
                            </div>


                            {/* Upload File */}
                            <div className="flex flex-col md:flex-row gap-x-2 items-center ">
                              <Label className="flex flex-col md:flex-row  font-lato font-semibold text-[16px] text-text-primary">
                                {personalDocumentFields(t).uploadFile.label}
                              </Label>
                              <FileUpload
                                amount="Max 2MB"
                                size={2 * 1024 * 1024}

                                label={
                                  <Trans i18nKey="uploadFile.dragLabel">
                                    <span className="text-text-accent" />
                                    <span className="text-text-primary" />
                                  </Trans>
                                }
                              />
                            </div>

                            {/* Date */}
                            <div className="items-start justify-start">

                              <DatePicker label={t("Date")} width="w-full" labelWidth="w-[90px]" />
                            </div>

                            {/* Minus button (belongs to the whole card) */}
                            <div className="flex justify-center mt-2">
                              <button
                                type="button"

                                aria-label={t("remove_document")}
                                className="flex items-center justify-center w-10 h-10 rounded-full border border-border-light bg-background-primary hover:bg-background-hover"
                                onClick={() => {
                                  // استبدل هذا بالمنطق لحذف البلوك كامل من ال-state لو بتستخدم array
                                }}
                              >
                                <MinusIcon className="w-5 h-5 text-secondary-dark" />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Plus button (global) تحت كل الكاردات */}
                        <div className="flex justify-center mt-1">
                          <button
                            type="button"
                            aria-label={t("add_document")}
                            onClick={() => {
                              // استبدل هذا بالمنطق لإضافة بلوك جديد (push to array state)
                            }}
                            className="w-full max-w-lg px-6 py-3 rounded-[8px] border border-border-light bg-background-tertiary hover:bg-background-hover text-text-primary font-semibold flex items-center justify-center gap-3"
                          >
                            <PlusIcon className="w-6 h-6 text-secondary-dark" />
                            <span>{t("Add")}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>

                </Collapsible>
              </CardContent>
            </Card>






          </div>
        </main>
      </div></div>
  )
}