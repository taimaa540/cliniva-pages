import {
  ArrowRightIcon,
  BellIcon,
  CheckIcon,
  ChevronDownIcon,
  PhoneIcon,
  PlusIcon,
  TimerIcon,

} from "lucide-react";
import Avatar from "@mui/material/Avatar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Checkbox from '@mui/material/Checkbox';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowLeftIcon from '@mui/icons-material/ArrowForward';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../../../../../components/ui/collapsible'
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import TranslateIcon from "@mui/icons-material/Translate";

import DateInput from "../../../../CommonComponents/DateInput";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Badge } from "../../../../../components/ui/badge";
import { Button } from "../../../../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../../../../components/ui/card";
import { Input } from "../../../../../components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../../../components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../../components/ui/table";
import TimePicker from "../../../../../components/ui/TimePicker";
import ReusableCollapsible from "../../../../../components/ui/Collapsibles";

import { Textarea } from "../../../../../components/ui/textarea";
import TimeRangePicker from '../../../../CommonComponents/timeRangePicker';
import CustomCheckbox from '../../../../CommonComponents/customCheckbox';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import DatePicker from "../../../../../components/ui/DatePicker";
const contactInfo = {
  phoneNumbers: "026 540589898",
  email: "info@medcaregroup.com",
  physicalAddress: {
    buildingNumber: "Building Number",
    streetName: "Street Name",
    region: "Region",
    country: "Country",
    nation: "Nation",
  },
  mapsLocation: "www.medcaregroup.com",
};
const workingDays = [
  { day: "Sunday", startTime: "09:00", endTime: "18:00", isActive: true },
  { day: "Monday", startTime: "09:00", endTime: "18:00", isActive: true },
  { day: "Tuesday", startTime: "09:00", endTime: "18:00", isActive: true },
  { day: "Wednesday", startTime: "09:00", endTime: "18:00", isActive: true },
  { day: "Thursday", startTime: "09:00", endTime: "18:00", isActive: true },
  { day: "Friday", startTime: "09:00", endTime: "18:00", isActive: false },
  { day: "Saturday", startTime: "09:00", endTime: "18:00", isActive: true },
];


const complexInformation = {
  name: "AlTadawi Medical Complex",
  description:
    "Al Noor Clinic is a multi-specialty clinic offering high-quality care with modern facilities",

};


const doctorsAndStaff = [
  {
    number: 1,
    userId: "US-001",
    name: "Dr. Ahmed Hassan",
    userType: "Doctor",
  },
  {
    number: 2,
    userId: "US-001",
    name: "Dr. Ahmed Hassan",
    userType: "Doctor",
  },
  {
    number: 3,
    userId: "US-001",
    name: "Dr. Ahmed Hassan",
    userType: "Doctor",
  },
  {
    number: 4,
    userId: "US-001",
    name: "Dr. Ahmed Hassan",
    userType: "Doctor",
  },
];

const tabOptions = ["All", "Doctors", "Staff"];


interface NoDataSectionProps {
  dark: boolean;
  local: string;

  handelDarkClick: () => void;
  handleLanguageClick: () => void;
}

export const CapacitySection = ({ local, dark, handelDarkClick, handleLanguageClick }: NoDataSectionProps): JSX.Element => {
  const { t, i18n } = useTranslation('en')
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);

const [activeDays, setActiveDays] = useState(workingDays.map(() => false));

    const [isOpen, setIsOpen] = useState({
      clinicInfo: true,
      contactInfo:true,
      Capacity: true,
      departments:true,
      workingDays: true,
      doctorsStaff: true,
      mapsLocation: true
    });
    const handleToggle = (key: keyof typeof isOpen, open: boolean) => {
      setIsOpen(prev => ({
        ...prev,
        [key]: open
      }))
    };
  
    {/* working Days*/}
   const toggleDay = (index: number) => {
    setActiveDays((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };
  const handleDateChange = (date: Date) => {

    // يمكنك هنا إجراء أي عمل تريده مع التاريخ المحدد
  };

  return (
    <div className="flex flex-col w-full overflow-hidden h-full items-start gap-4  py-4  pb-8 self-stretch relative bg-background-primary">
      <header className="flex h-[50px] justify-between pl-[4px] pr-0 py-0 self-stretch w-full items-center bg-background-primary">
        <div className="flex items-center gap-4 rounded-2xl ">


       
          <div className="flex flex-col">
            <h1 className="font-h5-22px-bold font-[number:var(--h5-22px-bold-font-weight)] text-on-surface-primary text-[length:var(--h5-22px-bold-font-size)] tracking-[var(--h5-22px-bold-letter-spacing)] leading-[var(--h5-22px-bold-line-height)] [font-style:var(--h5-22px-bold-font-style)]">
              {t("Medical Facilities")}
            </h1>
            <p className="font-title-14px-semibold font-[number:var(--title-14px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-14px-semibold-font-size)] tracking-[var(--title-14px-semibold-letter-spacing)] leading-[var(--title-14px-semibold-line-height)] [font-style:var(--title-14px-semibold-font-style)]">
              {t("Edit Clinic Details")}
            </p>
          </div>
        </div>

        <div className="inline-flex gap-3 flex-[0_0_auto] rounded-[28px] items-center " style={{ borderRadius: '16px', padding: '16px' }}>
          <div className="relative  ">
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
              className={`p-2.5 bg-secondary-light ${local === "ar"
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
                 text-primary
                } font-title-16px-bold font-[number:var(--title-16px-bold-font-weight)] text-on-surface-primary text-[length:var(--title-16px-bold-font-size)] tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] whitespace-nowrap [font-style:var(--title-16px-bold-font-style)]`}
              >
                Anahera Jones
              </div>
              <div className="w-fit font-title-11px-regular font-[number:var(--title-11px-regular-font-weight)] text-on-surface-tertiary text-[length:var(--title-11px-regular-font-size)] tracking-[var(--title-11px-regular-letter-spacing)] leading-[var(--title-11px-regular-line-height)] whitespace-nowrap [font-style:var(--title-11px-regular-font-style)] border-medium ">
                {t("   Admin   ")}
              </div>
            </div>
          </div>
        </div>
      </header>

      <Card
        className={`flex flex-col h-full items-start   pb-8  gap-6 p-5 mt-[10px] bg-background-tertiary  relative self-stretch w-full flex-[0_0_auto] 
        } rounded-2xl overflow-hidden`}
      >
        <CardContent className="p-0 w-full   pb-8  overflow-y-auto scroll-x-hidden gap-5 h-full">





          <div className="flex items-start justify-between w-full mb-4"dir={local === 'ar' ? 'rtl' : 'ltr'}>
            <Badge
              variant="secondary"
              className="bg-secondary-light text-secondary-dark rounded-[20px] px-4 py-2.5"
            >
              {t("Active")}
            </Badge>

               <div className="flex gap-[16px] items-end justify-end ">
              <button className=" w-[200px] h-[40px] rounded-[20px] border border-border-light bg-surface-primary  font-lato font-medium text-sm leading-[100%] tracking-[0] text-text-primary">
                {t("Cancel")}
              </button>
              <button className=" w-[200px] h-[40px] rounded-[20px] bg-secondary-dark font-lato font-medium text-sm leading-[100%] tracking-[0] text-surface-primary">
                {t("Save")}
              </button>
        
          </div>
          </div>



        <ReusableCollapsible  dir={`${local === "ar" ? "rtl" : "ltr"}`}
            title= {t("Clinic Info")}
            initiallyOpen={isOpen.clinicInfo}
            onOpenChange={(open) => handleToggle("clinicInfo", open)}
            content={<div className="p-4 pt-0">       <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-8">
                        <label className="w-40 [font-family:'Lato',Helvetica]  text-text-primary font-semibold text-base">
                          {t("Clinic Name")}
                        </label>
                        <Input
                          defaultValue="Al Noor Clinic"
                          className="w-[360px] h-12 bg-background-secondary border-border-light"
                        />
                      </div>

                    <DatePicker/>
                    </div>


                    <div className="flex  gap-8 items-center">
                      <div className="w-40 text-text-primary font-semibold ">
                        {t("Description")}:
                      </div>
                      <div className="relative  w-[360px]">
                        <Textarea
                          className="w-[360px]  h-12 border-light border bg-background-secondary  text-text-primary  font-sans"
                          defaultValue={complexInformation.description}
                        />

                      </div>
                    </div>



                  </div>

                  <div className="grid grid-cols-2 gap-8 mt-8 items-center">
                    <div className="flex items-center gap-8">
                      <label className="w-40  h-12 [font-family:'Lato',Helvetica] text-text-primary  font-semibold text-base">
                        {t("PIC Name")}
                      </label>
<Select>
  <SelectTrigger className="w-[360px] h-12 bg-background-secondary  border-border-light">
    <SelectValue defaultValue="Dr. Layla Al Saeed" />
  </SelectTrigger>
  <SelectContent className= " !bg-background-secondary">
    <SelectItem value="dr-layla" className="bg-background-secondary border-border-light text-text-primary">
      Dr. Layla Al Saeed
    </SelectItem>
  </SelectContent>
</Select>
                    </div>

                    <div className="flex  gap-8 items-center ">
                  

              <TimePicker/>
                    </div>
                  </div>


                  <div className="flex items-center gap-8 mt-4">
                    <label className="w-40 [font-family:'Lato',Helvetica] text-text-primary font-semibold  text-base">
                      {t("Services Offered")}
                    </label>
                    <Input
                      defaultValue="General Consultation"
                      className=" w-[360px] h-12 bg-background-secondary   border-border-light text-text-primary "
                    />
                  </div></div>}

          />


    






      <ReusableCollapsible  dir={`${local === "ar" ? "rtl" : "ltr"}`}
            title=  {t("Capacity")}
            initiallyOpen={isOpen.Capacity}
            onOpenChange={(open) => handleToggle("Capacity", open)}
            content={<div className="p-4 pt-0">         <div className="grid grid-cols-3 gap-4">
                    <div className="flex items-center justify-between">
                      <label className="font-title-16px-semibold text-text-primary  font-[number:var(--title-16px-semibold-font-weight)]  text-[length:var(--title-16px-semibold-font-size)]">
                        {t("Staff Capacity")}
                      </label>
                      <Input
                        defaultValue="2150"
                        className="w-[220px] h-12 bg-background-secondary border-border-light text-text-primary"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="font-title-16px-semibold  text-text-primary font-semibold  text-[length:var(--title-16px-semibold-font-size)]">
                        {t("Doctors Capacity")}
                      </label>
                      <Input
                        defaultValue="1780"
                        className="w-[220px] h-12 bg-background-secondary border-border-light  text-text-primary"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="font-title-16px-semibold  text-text-primary font-semibold  text-[length:var(--title-16px-semibold-font-size)]">
                        {t("Patients Capacity")}
                      </label>
                      <Input
                        defaultValue="250"
                        className="w-[220px] h-12 bg-background-secondary   border-border-light text-text-primary "
                      />
                    </div>
                  </div></div>}

          />


   
   
   
  







         <ReusableCollapsible  dir={`${local === "ar" ? "rtl" : "ltr"}`}
            title=       {t("Department")}
            initiallyOpen={isOpen.departments}
            onOpenChange={(open) => handleToggle("departments", open)}
            content={<div className="p-3 pt-0">      <div className="grid grid-cols-3 gap-40 items-center">
                    <div className="grid  items-center justify-between">
                      <label className="font-title-16px-semibold text-text-primary text-start font-[number:var(--title-16px-semibold-font-weight)]  text-[length:var(--title-16px-semibold-font-size)] p-4">
                        {t('Department Name')}
                      </label>
                      <Select>
                        <SelectTrigger className="w-[360px]  !bg-background-secondary  border-border-light h-12 bg-base-white ">
                          <SelectValue defaultValue="Dr. Layla Al Saeed" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dr-layla">
                            Dr. Layla Al Saeed
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="mb-3">
                      <div className="p-3">
                            {t('Description')}
                      </div>
                      <div className="w-[656px]">
                        Al Noor Clinic is a multi-specialty clinic offering high-quality care with modern facilities
                      </div>
                    </div>


                  </div>
</div>}

          />






         <ReusableCollapsible  dir={`${local === "ar" ? "rtl" : "ltr"}`}
            title=       {t("Contact Information")}
            initiallyOpen={isOpen.contactInfo}
            onOpenChange={(open) => handleToggle("contactInfo", open)}
            content={<div className="flex flex-col gap-6">       <div className="flex  gap-10 ">




                    <div className="grid-flow-row  "> {/* gap 5px بين الليبل والحقل */}


                      <div className="flex items-center gap-[5px]">
                        {/* Label */}
                        <div className="flex items-center gap-[5px]" >
                          <div className="flex w-[162px] items-center gap-2">
                            <div className=" text-text-primary"><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="" clip-rule="evenodd" d="M5.58366 1.98914C5.55738 1.98748 5.51211 1.98881 5.44156 2.00073C4.61526 2.14038 3.86019 2.55987 3.30452 3.19114C2.85239 3.70477 2.55607 4.33157 2.44319 4.99844C2.37711 5.38883 2.38394 5.81377 2.41176 6.29064C2.57841 9.14767 3.78709 11.8542 5.8219 13.889C7.93679 16.0039 10.7773 17.2264 13.7583 17.314C14.1076 17.3242 14.4228 17.3168 14.7125 17.2677C15.3794 17.1548 16.0061 16.8585 16.5198 16.4064C17.1861 15.8199 17.6164 15.0113 17.7308 14.1312L17.7297 14.1307L17.7297 14.1306L13.4481 12.2918L13.448 12.2918L13.448 12.2918L11.1637 13.8177C11.1631 13.8181 11.1624 13.8186 11.1618 13.819C10.9515 13.9605 10.7082 14.0449 10.4555 14.0641C10.202 14.0834 9.94788 14.0363 9.71814 13.9275L9.71407 13.9256C8.00776 13.1047 6.62971 11.7302 5.80447 10.026L5.803 10.023L5.80301 10.023C5.69491 9.79709 5.64657 9.54727 5.66258 9.29739C5.6786 9.04751 5.75845 8.80591 5.8945 8.59569L5.89737 8.59125L5.89739 8.59126L7.4204 6.27483L7.41901 6.27164L7.41902 6.27163L5.58366 1.98914ZM17.7317 14.1242L17.7317 14.1245L17.7317 14.1242ZM5.19763 0.557347C5.52156 0.502601 6.06468 0.471191 6.52344 0.858159C6.69851 1.00583 6.8372 1.19359 6.92679 1.40698L8.76311 5.69173C8.76337 5.69234 8.76364 5.69296 8.7639 5.69357C8.85897 5.91328 8.89871 6.15297 8.87962 6.39163C8.86047 6.63095 8.78275 6.86189 8.65332 7.0641L8.6485 7.07163L8.64845 7.0716L7.12346 9.39105C7.80407 10.7948 8.93925 11.9272 10.3446 12.6045L10.3476 12.6025L10.3476 12.6025L12.6331 11.0758C12.8359 10.9388 13.07 10.8552 13.3137 10.8328C13.5574 10.8103 13.8029 10.8498 14.0273 10.9474C14.0282 10.9478 14.0291 10.9482 14.03 10.9486L18.3043 12.7843C18.5968 12.9072 18.8412 13.1224 19.0001 13.3971C19.1598 13.6732 19.2243 13.9942 19.1837 14.3105C19.0254 15.5463 18.4222 16.682 17.487 17.5052C16.7679 18.1382 15.8904 18.553 14.9568 18.711C14.5275 18.7837 14.1013 18.7886 13.7153 18.7772C10.3616 18.6786 7.16606 17.3034 4.7868 14.9241C2.49762 12.6349 1.13787 9.59011 0.950386 6.37588C0.921536 5.88129 0.904547 5.31724 0.999862 4.75413C1.15788 3.82057 1.57271 2.94304 2.20572 2.22392C2.98367 1.34013 4.04075 0.752863 5.19763 0.557347Z" fill="currentColor" />
                            </svg></div>

                            <div className="text-text-primary font-semibold">
                              {t("Phone Number")}
                            </div>
                          </div>

                          {/* Phone Input مع العلم */}
                          <div className="relative w-[350px] h-12 border text-text-primary border-light rounded-sm overflow-visible font-sans bg-background-secondary  border-border-light " dir="ltr" >
                            <PhoneInput
                              country={"sa"}
                              value={contactInfo.phoneNumbers}
                              onChange={(phone) => console.log(phone)}
                              inputProps={{
                                placeholder: '05XXXXXXXX'
                              }}
                              containerClass="!w-full"
                              inputClass="!w-full !h-12 !border-0 !outline-none !text-text-primary !bg-background-secondary !px-3"
                              buttonClass="!h-12 !border-0 !bg-background-secondary !pr-2 flex items-center relative"
                              dropdownClass="!absolute !top-full !left-0 !max-h-60 !overflow-y-auto !bg-background-secondary border text-text-primary z-50"
                            />
                            {/* الخط العمودي */}
                            <div className="absolute left-[56px] top-3 max-w-px h-6 bg-light pointer-events-none"></div>
                          </div>
                        </div>
                      </div>
                      {/* Plus Icon تحت الحقل على اليمين */}
                      <div className="flex justify-end">
                        <div className="flex justify-end p-2 text-secondary-dark">
                          <PlusIcon className="w-8 h-8 cursor-pointer" />
                        </div>
                      </div>

                    </div>



                    <div className="flex items-center gap-1 mb-16">
                      <div className="flex items-center gap-2 w-[162px]">
                        <div className="w-6 h-6">
                          <div className="w-[21px] h-[18px] mt-[3px] ml-px bg-[url(/icon.svg)] bg-[100%_100%]" />
                        </div>

                        <div className=" text-text-primary">
                          <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.07923 0.787497C10.0441 0.737503 11.9541 0.737499 13.9191 0.787497C17.157 0.869496 18.9413 0.915255 20.2843 2.25625C21.6291 3.61122 21.6655 5.3485 21.7325 8.50136C21.7535 9.50833 21.7535 10.4866 21.7325 11.4936C21.6656 14.6461 21.6288 16.3819 20.2872 17.7348C18.9422 19.0788 17.158 19.1244 13.92 19.2064C12.9381 19.2314 11.9691 19.2445 11.0001 19.2445C10.0312 19.2445 9.06212 19.2314 8.0802 19.2064C4.84234 19.1244 3.05795 19.0785 1.71497 17.7377C0.370009 16.3827 0.332745 14.6454 0.265749 11.4926C0.24475 10.4856 0.244751 9.50735 0.265749 8.50039C0.332749 5.34739 0.370038 3.6112 1.71204 2.2582C3.05703 0.914271 4.84128 0.869495 8.07923 0.787497ZM13.881 2.28554C11.9421 2.23555 10.0572 2.23555 8.11731 2.28554C5.07934 2.36254 3.69256 2.39684 2.77356 3.31582C1.85556 4.24182 1.82677 5.58664 1.76477 8.53164C1.74378 9.5165 1.74378 10.4745 1.76477 11.4603C1.82677 14.4053 1.85648 15.7502 2.77747 16.6771C3.69447 17.593 5.08048 17.6294 8.11829 17.7064C10.0572 17.7564 11.9421 17.7564 13.882 17.7064C16.9199 17.6294 18.3057 17.5941 19.2247 16.6752C20.1427 15.7492 20.1715 14.4053 20.2335 11.4603C20.2545 10.4755 20.2545 9.5175 20.2335 8.53164C20.1715 5.58664 20.1428 4.24086 19.2218 3.31386C18.3048 2.39817 16.9186 2.36253 13.881 2.28554ZM5.35462 6.11074C5.56562 5.75474 6.02596 5.63509 6.38196 5.84609L9.32337 7.58633C10.7954 8.45333 11.2039 8.45333 12.6779 7.58633L15.6183 5.84707C15.9753 5.63607 16.4356 5.75472 16.6456 6.11172C16.8564 6.46859 16.7387 6.92802 16.382 7.13808L13.4396 8.87832C12.4588 9.45619 11.73 9.74442 11.0001 9.74453C10.2711 9.74453 9.54165 9.45532 8.56165 8.87832L5.61829 7.13711C5.26276 6.92603 5.14393 6.46654 5.35462 6.11074Z" fill="CurrentColor" />
                          </svg>

                        </div>

                        <span className="text-text-primary font-semibold">
                          {t("Email")}:
                        </span>

                      </div>
                      <Input
                        defaultValue="Enter Email"
                        className="w-[350px] h-12 bg-background-secondary  border-border-light"
                      />
                    </div>
                  </div>
</div>}

          />







   {/* Working Days Collapsible */}
          <ReusableCollapsible  dir={`${local === "ar" ? "rtl" : "ltr"}`}
            title={t("Working Days")}
            initiallyOpen={isOpen.workingDays}
            onOpenChange={(open) => handleToggle("workingDays", open)}
            content={<div><div className="flex flex-col gap-4 ">
              {workingDays.map((workDay, index) => (
                <div key={index} className="flex items-center gap-8 w-full">
                  <div className="flex items-center gap-5 w-[120px] ">
                    {/* Checkbox */}
                    <CustomCheckbox
                      checked={activeDays[index]}
                      onChange={() => toggleDay(index)}
                    />
                    <label
                      className={`${dark ? "text-white" : "text-[#2a2b2a]"
                        } tracking-[0.07px] leading-6 [font-family:'Lato',Helvetica] font-normal text-sm whitespace-nowrap`}
                    >
                      {t(`${workDay.day}`)}
                    </label>
                  </div>

                  <div className="flex items-center gap-4 w-[810px]">
                    {/* أوقات العمل */}
                    <div
                      className={`flex items-center w-[404px] py-[7px] pl-[13px] border rounded transition
                              ${activeDays[index]
                          ? " bg-background-primary border-[#e4e2dd]"
                          : "  bg-background-tertiary "
                        }`}
                    >
                      <TimeRangePicker />
                    </div>


                  </div>
                </div>

              ))}
            </div></div>}
          />




          {/* Doctors & Staff Collapsible */}

          <ReusableCollapsible  dir={`${local === "ar" ? "rtl" : "ltr"}`}
            title={<div>
              <div className="flex items-center gap-4">
                <h2 className="font-title-16px-bold   w-96 font-[number:var(--title-16px-bold-font-weight)] text-primary-dark text-[length:var(--title-16px-bold-font-size)] tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] [font-style:var(--title-16px-bold-font-style)]">
                  {t("Doctors")}
                </h2>
                <h2 className="font-title-16px-bold   w-96 font-[number:var(--title-16px-bold-font-weight)] text-primary-dark text-[length:var(--title-16px-bold-font-size)] tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] [font-style:var(--title-16px-bold-font-style)]">
                  {t("&")}
                </h2>
                <h2 className="font-title-16px-bold   w-96 font-[number:var(--title-16px-bold-font-weight)] text-primary-dark text-[length:var(--title-16px-bold-font-size)] tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] [font-style:var(--title-16px-bold-font-style)]">
                  {t("Staff")}
                </h2>
                <div className="flex gap-2">
                  <Badge className="bg-secondary-light text-on-surface-primary rounded-[20px] px-2.5 py-1.5">
                    {t("All")}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-bg text-on-surface-primary rounded-[20px] px-2.5 py-1.5"
                  >
                    {t("Doctors")}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-bg text-on-surface-primary rounded-[20px] px-2.5 py-1.5"
                  >
                    {t("Staff")}
                  </Badge>
                </div>
              </div></div>}
            initiallyOpen={isOpen.doctorsStaff}
            onOpenChange={(open) => handleToggle("doctorsStaff", open)}
            content={<div> <Table>
              <TableHeader className="">
                <TableRow>
                  <TableHead className="w-[58px] text-center  text-text-praimary  font-semibold">
                    {t("No")}
                  </TableHead>
                  <TableHead className="text-center w-[278px] text-text-praimary  font-semibold">
                    {t("User-ID")}
                  </TableHead>
                  <TableHead className="text-center  text-text-praimary  font-semibold">
                    {t("Name")}
                  </TableHead>
                
                  <TableHead className="text-center  text-text-praimary  font-semibold">
                    {t("User Type")}
                  </TableHead>
                  <TableHead className="text-center  text-text-praimary  font-semibold">
                    {t("Status")}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {doctorsAndStaff.map((person) => (
                  <TableRow
                    key={person.number}
                    className="border-b border-[#e4e2dd]"
                  >
                    <TableCell className="text-center  text-text-praimary  font-semibold">
                      {person.number}
                    </TableCell>
                    <TableCell className="text-center text-text-primary font-title-14px-semibold">
                      {person.userId}
                    </TableCell>
                    <TableCell className="text-center text-text-primary font-title-14px-semibold">
                      <div className="flex items-center gap-2 justify-center">
                        <Avatar
                          src={person.avatar}
                          alt={person.name}
                          sx={{
                            width: 32,
                            height: 32,
                            bgcolor: !person.avatar ? "var(--theme-text-accent)" : "transparent", // لون الدائرة من متغير الثيم
                          }}
                        >
                          {/* إذا ما في صورة، تظل الدائرة ملونة بدون أي نص */}
                        </Avatar>
                        <span>{person.name}</span>
                      </div>
                    </TableCell>
                 
                    <TableCell className="text-center text-text-primary font-title-14px-semibold">
                      {person.userType}
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-2">

                        <Badge className="bg-secondary-light text-secondary-dark rounded-[20px] w-[92px] y-[24px] justify-center">
                         {t("Active")}
                        </Badge>






                      </div>
                    </TableCell>
                  </TableRow>
                )



                )}
              </TableBody>
            </Table>

              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-2.5">
                  <span className="font-title-11px-regular font-[number:var(--title-11px-regular-font-weight)] text-on-surface-secondary text-[length:var(--title-11px-regular-font-size)] tracking-[var(--title-11px-regular-letter-spacing)] leading-[var(--title-11px-regular-line-height)] [font-style:var(--title-11px-regular-font-style)]">
                    {t("Showing")}
                  </span>
                  <Select defaultValue="1">
                    <SelectTrigger className="w-auto bg-secondary-light rounded-[20px] border-0 px-2 py-1.5">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                    </SelectContent>
                  </Select>
                  <span className="font-title-11px-regular w-96 font-[number:var(--title-11px-regular-font-weight)] text-on-surface-secondary text-[length:var(--title-11px-regular-font-size)] tracking-[var(--title-11px-regular-letter-spacing)] leading-[var(--title-11px-regular-line-height)] [font-style:var(--title-11px-regular-font-style)]">
                    {t("out of 14")}
                  </span>
                </div>



                <Pagination className="justify-end">
                  <PaginationContent className="gap-[5px]">
                    <PaginationItem>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-8 h-8 p-2.5 rounded-[32px] border-[#f1f1f1]"
                      >

                        {local === "en" ? (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.726 12L12.666 11.06L9.61268 8L12.666 4.94L11.726 4L7.72602 8L11.726 12Z" fill="CurrentColor" />
                            <path d="M7.33344 12L8.27344 11.06L5.2201 8L8.27344 4.94L7.33344 4L3.33344 8L7.33344 12Z" fill="CurrentColor" />
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.27398 4L3.33398 4.94L6.38732 8L3.33398 11.06L4.27398 12L8.27398 8L4.27398 4Z" fill="CurrentColor" />
                            <path d="M8.66656 4L7.72656 4.94L10.7799 8L7.72656 11.06L8.66656 12L12.6666 8L8.66656 4Z" fill="CurrentColor" />
                          </svg>
                        )}


                      </Button>
                    </PaginationItem>
                    <PaginationItem>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-8 h-8 p-2.5 rounded-[32px] border-[#f1f1f1]"
                      >



                        {local === "en" ? (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" fill="CurrentColor" />
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="CurrentColor" />
                          </svg>
                        )}
                      </Button>


                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        className="w-8 h-8 p-2.5 bg-secondary-dark text-white rounded-[32px] [font-family:'Open_Sans',Helvetica] font-semibold text-[13px]"
                        isActive
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink className="w-8 h-8 p-2.5 bg-white text-[#333333] rounded-[32px] border border-[#f1f1f1] [font-family:'Open_Sans',Helvetica] font-semibold text-[13px]">
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink className="w-8 h-8 p-2.5 bg-white text-[#333333] rounded-[32px] border border-[#f1f1f1] [font-family:'Open_Sans',Helvetica] font-semibold text-[13px]">
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <span className="w-8 h-8 p-2.5 bg-white text-[#333333] rounded-lg flex items-center justify-center [font-family:'Open_Sans',Helvetica] font-semibold text-[13px]">
                        ...
                      </span>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink className="w-8 h-8 p-2.5 bg-white text-[#333333] rounded-[32px] border border-[#f1f1f1] [font-family:'Open_Sans',Helvetica] font-semibold text-[13px]">
                        10
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-8 h-8 p-2.5 rounded-[32px] border-[#f1f1f1]"
                      >
                        <div>




                          {local === "en" ? (
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="black" />
                            </svg>
                          ) : (
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" fill="CurrentColor" />
                            </svg>
                          )}



                        </div>
                      </Button>
                    </PaginationItem>
                    <PaginationItem>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-8 h-8 p-2.5 rounded-[32px] border-[#f1f1f1]"
                      >




                        {local === "en" ? (

                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.27398 4L3.33398 4.94L6.38732 8L3.33398 11.06L4.27398 12L8.27398 8L4.27398 4Z" fill="CurrentColor" />
                            <path d="M8.66656 4L7.72656 4.94L10.7799 8L7.72656 11.06L8.66656 12L12.6666 8L8.66656 4Z" fill="CurrentColor" />
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.726 12L12.666 11.06L9.61268 8L12.666 4.94L11.726 4L7.72602 8L11.726 12Z" fill="CurrentColor" />
                            <path d="M7.33344 12L8.27344 11.06L5.2201 8L8.27344 4.94L7.33344 4L3.33344 8L7.33344 12Z" fill="CurrentColor" />
                          </svg>
                        )}




                      </Button>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
            }

          />





       

          {/* Maps Location Collapsible */}
          <ReusableCollapsible  dir={`${local === "ar" ? "rtl" : "ltr"}`}
            title={t("Maps Location")}
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
