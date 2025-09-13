import { BellIcon, CalendarIcon, ChevronDownIcon } from "lucide-react";
import { CountryDropdown } from "react-country-region-selector";
import PhoneInput from "react-phone-number-input";
import { Trans } from "react-i18next";
import {




  PlusIcon,
} from "lucide-react";
import DateInput from "../../CommonComponents/DateInput";
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
import PhoneInputCustom from "../../../components/ui/PhoneInput";
import WorkingDaysList from "../../CommonComponents/workDays";
import { useLanguage } from "../../../lib/LanguageContext";
import { useState } from "react";
import ImageUploader from "../../CommonComponents/ImageUpload";
import DatePicker from '../../../components/ui/DatePicker';
import { Value } from "@radix-ui/react-select";
const accountFields = [
  { label: "User Name", value: "Ammar Al Sawwa", type: "input" },
  { label: "Ghange Password", value: "ammarsvu91@gmail.com", type: "text" },
  { label: "Role", value: "Admin", type: "select" },
  { label: "User Type", value: "Staff", type: "text" },
  { label: "Medical Complex", value: "TCT Complex", type: "select" },
  { label: "Clinic", value: "X-Ray Clinic", type: "select" },

];

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



export const StaffMemberDetails = (): JSX.Element => {
  const [value, setValue] = useState<string | undefined>(""
    );
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
  return (
    <div className="flex flex-col w-full overflow-hidden min-h-screen items-start gap-4 py-4 pl-0 pr-5">
      <header className="flex h-[50px] justify-between pl-1 pr-0 py-0 w-full items-center">
        <div className="flex flex-col w-[340px] items-start gap-1.5 px-0 py-0.5">
          <h1 className="self-stretch text-[22px] mt-[-1.00px] font-lato font-semibold text-text-primary leading-[116%] tracking-[0]">
            {t("Staff")}
          </h1>
          <div className="flex items-center gap-2.5 text-[14px]">
            <div className=" text-text-primary">
              <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 8C18 8.41421 17.6642 8.75 17.25 8.75L0.75 8.75C0.335786 8.75 -3.45941e-07 8.41421 -3.27835e-07 8C-3.0973e-07 7.58579 0.335787 7.25 0.75 7.25L17.25 7.25C17.6642 7.25 18 7.58579 18 8Z" fill="CurrentColor" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.03033 0.719669C8.32322 1.01256 8.32322 1.48744 8.03033 1.78033L1.81066 8L8.03033 14.2197C8.32322 14.5126 8.32322 14.9874 8.03033 15.2803C7.73744 15.5732 7.26256 15.5732 6.96967 15.2803L0.219669 8.53033C-0.0732254 8.23744 -0.0732253 7.76256 0.219669 7.46967L6.96967 0.719669C7.26256 0.426776 7.73744 0.426776 8.03033 0.719669Z" fill="CurrentColor" />
              </svg>

            </div>
            <p className="font-lato font-semibold text-sm text-text-primary leading-[125%] tracking-[0]">
              {t("Edit Staff Member Details")}
            </p>
          </div>

        </div>

        <div className="inline-flex gap-3 flex-[0_0_auto] rounded-[28px] items-center">
          <button className="inline-flex items-start gap-2 p-2.5 flex-[0_0_auto] bg-secondary-light rounded-[20px] relative">
            <BellIcon className="w-5 h-5" />
            <div className="flex flex-col w-5 h-5 items-center justify-center gap-2.5 p-1 absolute top-1 left-4">
              <div className="w-2 h-2 bg-[#fa812d] rounded-[14px]" />
            </div>
          </button>

          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className={`p-2.5 bg-secondary-light ${local === "ar" ? "bg-[green]" : "bg-secondary-light"
                } rounded-[20px] h-auto transition-all duration-[1000ms]`}
              onClick={handleLanguageClick}
            >
              <TranslateIcon className="w-5 h-5" />
            </Button>
          </div>

          <div className="w-10 h-[17.5px] relative"></div>

          <div className="items-center gap-3 inline-flex flex-[0_0_auto]">
            <div className="inline-flex items-center w-[40px] h-[40px] gap-2.5 flex-[0_0_auto] bg-app-primary rounded-3xl" />
            <div className="flex-col items-start gap-1 inline-flex flex-[0_0_auto]">
              <div
                className={`w-fit mt-[-1.00px] 
                    "text-[#2a2b2a]"
                   font-title-16px-bold font-[number:var(--title-16px-bold-font-weight)] text-[length:var(--title-16px-bold-font-size)] tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] whitespace-nowrap [font-style:var(--title-16px-bold-font-style)]`}
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

      <main className="flex flex-col h-full items-start gap-5 p-[20px] pr-0 relative w-full rounded-2xl overflow-hidden bg-background-tertiary">
        <div className="flex flex-col gap-[20px] w-full overflow-y-auto scroll-x-hidden pr-[20px]">


          <div className="flex gap-[16px] justify-end "dir={local === "en" ? "ltr" : "rtl"}>
            <button className=" w-[200px] h-[40px] rounded-[20px] border border-border-light bg-surface-primary  font-lato font-medium text-sm leading-[100%] tracking-[0] text-text-primary">
              {t("Cancel")}
            </button>
            <button className=" w-[200px] h-[40px] rounded-[20px] bg-secondary-dark font-lato font-medium text-sm leading-[100%] tracking-[0] text-surface-primary">
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
                  <div className="flex flex-col gap-[16px]">
                    <h3 className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-secondary-dark">
                      {t('Profile & Identity Info')}
                    </h3>
                    <div className="grid grid-cols-2 gap-[22px]">
                      <div className="flex items-center gap-[32px] w-full">
                        <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Profile Picture")}
                        </Label>
                        <ImageUploader  initialImage="./userLogo.png"/>
                      </div>
                      <div className="flex items-center gap-[32px] ">
                        <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Full Name")}
                        </Label>
                        <Input
                          defaultValue="Ammar Mohammed Al Sawwa"
                          className="w-[360px] h-[48px] w-[360px] bg-background-secondary border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary"
                        />
                      </div>
                      <div className="flex items-center gap-[32px] ">
                        <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Gender")}
                        </Label>
                        <input
                          className="w-5 h-5 text-text-muted"
                          type="radio"
                          name="Gender"
                          value="Male"
                          
                          defaultChecked
                        />
                        <label className="font-lato font-regular text-sm leading-[154%] tracking-[0] text-text-primary">
                          Male
                        </label>
                        <input className="w-5 h-5" type="radio" name="Gender" />
                        <label className="font-lato font-regular text-sm leading-[154%] tracking-[0] text-text-primary">
                          Female
                        </label>
                      </div>


<div className="text-text-primary font-semibold">
                      <DatePicker
                        label={t("Birth Date")}
                        value={formDates.Barithday}
                        labelWidth="160px"
                        onDateChange={(date) => setFormDates((prev) => ({ ...prev, Barithday: date }))}
                      />
</div>









                      <div className="flex items-center gap-[32px] ">
                        <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Nationality")}
                        </Label>
                       


                           <Select defaultValue="Sy"dir={local === "en" ? "ltr" : "rtl"}>
                          <SelectTrigger className="w-[360px] h-[48px] bg-background-secondary border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Sy">Sy</SelectItem>
                            <SelectItem value="Eg">Eg</SelectItem>
                          </SelectContent>
                        </Select>


                      </div>
                      <div className="flex items-center gap-[32px] ">
                        <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Card Number")}
                        </Label>
                        <Input
                          defaultValue="02200075921"
                          className=" w-[360px] h-[48px] bg-background-secondary border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary"
                        />
                      </div>
                      <div className="flex items-center gap-[32px] w-full">
                        <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Marital Status")}
                        </Label>
                        <Select defaultValue="Married"dir={local === "en" ? "ltr" : "rtl"}>
                          <SelectTrigger className="w-[360px] h-[48px] bg-background-secondary border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Married">Married</SelectItem>
                            <SelectItem value="Single">Single</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center gap-[32px] ">
                        <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Number of children")}
                        </Label>
                        <Input
                          defaultValue="1"
                          className=" w-[360px] h-[48px] bg-background-secondary border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary"
                        />
                      </div>
                    </div>
                    <h3 className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-secondary-dark">
                      {t('Contact Info')}
                    </h3>
                    <div className="flex flex-col gap-[16px]">
                      <div className="grid grid-cols-2 gap-[22px]">
                        <div className="grid w-[360px]">
                          <div className="flex items-center gap-[32px] rounded-2xl">
                            <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                              {t("Phone Number")}
                            </Label>

                              <div className="w-[360px] !bg-background-secondary text-text-primary font-semibold !rounded-[4px] overflow-hidden">
                                                                         <PhoneInputCustom   
                                                                         value={emergencyContact.number}
                                                                             onChange={setValue}
                                                                        placeholder=     {t("Enter Number")}
                                                                         />
                                                                     </div>
                          </div>



                          <div className="flex justify-end p-2 text-secondary-dark ">
                            <PlusIcon className="w-8 h-8  cursor-pointer" />
                          </div>

                        </div>




                        <div className="flex items-start mt-3  ">
                          <div className="flex w-[100px] items-center gap-1 mb-12 ">


                            <div className="text-text-primary font-semibold">
                              {t("Email")}:
                            </div>
                          </div>

                          <div
                            className="  flex   text-text-primary  font-sans">
                            <label className="   font-sans  text-text-primary font-semibold ">ammarsvu91@gmail.com</label>
                          </div>

                        </div>
                      </div>
                      <div className="flex items-center gap-8 ">
                        <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Address")}
                        </Label>
                        {addressFields.map((field, index) => (
                          <Input
                            key={index}
                            defaultValue={field.value}
                            className={`${field.width} w-[360px] h-[48px] w-[167px] bg-background-secondary border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary`}
                          />
                        ))}
                      </div>
                    </div>
                    <h3 className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-secondary-dark">
                      {t('Emergency Contact Info')}
                    </h3>
                    <div className="flex flex-col gap-[16px]">
                      <div className="grid grid-cols-2 gap-[22px]">
                        <div className="flex items-center gap-[32px] ">
                          <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                            {t("Emergency Contact")}
                          </Label>
                          <Input
                            defaultValue={emergencyContact.name}
                            className=" w-[360px] h-[48px] bg-background-secondary border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary"
                          />
                        </div>
                        <div className="flex items-center gap-[32px] ">
                          <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                            {t("Relationship")}
                          </Label>
                          <Input
                            defaultValue={emergencyContact.relationship}
                            className=" h-[48px] w-[360px] bg-background-secondary border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary"
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-[32px] rounded-2xl">
                        <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Emergency Number")}
                        </Label>
                                  <div className="w-[360px] !bg-background-secondary !rounded-[4px] overflow-hidden  text-text-primary font-semibold">
                                                                         <PhoneInputCustom     value={emergencyContact.number}
                                                                             onChange={setValue}
                                                                        placeholder=     {t("Enter Number")}
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
                open={open.employment}
                onOpenChange={() =>
                  setOpen({ ...open, employment: !open.employment })
                }
                className="w-full"
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className="p-0 hover:bg-[none] w-full"
                  >
                    <div className="flex w-full items-center justify-between mb-4 ">
                      <h2 className="text-primary-default text-[16px] font-lato font-bold leading-[124%] tracking-[0] ">
                        {t("Employment Details")}
                      </h2>
                      <ChevronDownIcon
                        style={{ width: "24px", height: "24px" }}
                        className={`transition-transform duration-200 ${open.employment ? "rotate-180" : "rotate-0"
                          }`}
                      />
                    </div>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="flex flex-col items-start gap-4 mt-[20px] relative">
                    <div className="flex items-center gap-[21.5px] w-full">
                      <div className="flex items-center gap-[32px] ">
                        <Label className="w-[160px] font-lato font-semibold  text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Job Title")}
                        </Label>
                        <div className= "flex text-text-primary font-semibold">
                        <Input
                          defaultValue="Manager"
                          className="bg-background-secondary  text-text-primary  border-border-light w-[360px]  h-[48px] shadow-[0px_1px_2px_0px_#0A0D120D] rounder-[4px]  font-lato font-semibold text-sm leading-[125%] tracking-[0]"
                        /></div>
                      </div>
                      <div className="flex items-center gap-[32px]  text-text-primary font-semibold">

                        <DatePicker
                          label={t("Date of Hire")}
                          value={formDates.DateofHire}
                          onDateChange={(date) =>
                            setFormDates((prev) => ({ ...prev, DateofHire: date }))

                          }
                        />
                      </div>
                    </div>
                    <WorkingDaysList />
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>




          <Card className="w-full bg-background-primary rounded-[16px] p-[16px]">
            <CardContent dir={local === "en" ? "ltr" : "rtl"}>
              <Collapsible
                open={open.documents}
                onOpenChange={() =>
                  setOpen({ ...open, documents: !open.documents })
                }
                className="w-full"
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className="p-0 hover:bg-[none] w-full"
                  >
                    <div className="flex w-full items-center justify-between mb-4 ">
                      <h2 className="text-primary-default text-[16px] font-lato font-bold leading-[124%] tracking-[0] ">
                        {t("Documents")}
                      </h2>
                      <ChevronDownIcon
                        style={{ width: "24px", height: "24px" }}
                        className={`transition-transform duration-200 ${open.documents ? "rotate-180" : "rotate-0"
                          }`}
                      />
                    </div>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="flex flex-col items-start gap-4 mt-[20px] relative">
                    {documents.map((doc, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-8 w-full"
                      >
                        <Label className="w-[178px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t(`${doc.label}`)}
                        </Label>
                        <FileUpload
                            label={    <>            
       <Trans i18nKey="uploadFile.dragLabel">
        <span className="text-text-accent" />
        <span className="text-text-primary" />
      </Trans></> }
                          amount="PDF File , Maximum file size 1MB."
                          size={1 * 1024 * 1024}
                        />

                        {doc.effectiveDate}
                      </div>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};
