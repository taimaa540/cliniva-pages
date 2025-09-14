import React from "react";
import { Card, CardContent } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { Label } from "../../../components/ui/label";
import { Badge } from "lucide-react";
import Avatar from '@mui/material/Avatar';
import { Trans } from 'react-i18next';
import ReusableCollapsible from "../../../components/ui/Collapsibles";
import { ArrowLeftIcon, BellIcon, ChevronDownIcon, PlusIcon, MinusIcon, CalendarIcon, UploadIcon } from "lucide-react";
import CardValidator from "../../../components/ui/CardValidatorProps ";
import { useState, useEffect } from "react";
import en from "react-phone-number-input/locale/en.json";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../../lib/LanguageContext";
import PhoneInput from "react-phone-number-input";
import ImageUploader from "../../CommonComponents/ImageUpload";
import FileUpload from "../../CommonComponents/fillUpLoad";
import DatePicker from "react-datepicker";
import { t } from "i18next";
import PhoneInputCustom from "../../../components/ui/PhoneInput";
import { add } from "date-fns";
const headerData = {
    title: "Patients Management",
    breadcrumb: "Add New Patient",
    user: {
        name: "Anahera Jones",
        role: "Admin"
    }
};

const patientBasicInfoData = {
    patientId: "PAT-df4c3",
    age: "25",
    profilePicture: "/component-7.svg"
};

const formFields = (t: (key: string) => string) => ({
    patientName: { label: t("Patient Name*"), placeholder: t("Enter Full Name") },
    cardNumber: { label: t("Card Number*"), placeholder: t("Enter Card Number") },
    nationality: { label: t("Nationality"), placeholder: t("Select Nationality") },
    religion: { label: t("Religion"), placeholder: t("Enter Religion") },
    preferredLanguage: { label: t("Preferred Language"), placeholder: t("Select Language") },
    dateOfBirth: { label: t("Date of Birth"), placeholder: t("Select Date") },
    maritalStatus: { label: t("Marital Status"), placeholder: t("Select Marital Status") },
    email: { label: t("Email"), placeholder: t("Enter Email") },
    phone: { label: t("Phone Numbers *"), placeholder: t("Enter Number") },
    address: { label: t("Address"), placeholder: t("Enter Address") },
    emergencyContact: { label: t("Emergency Contact"), placeholder: t("Enter emergency contact name") },
    relationship: { label: t("Relationship"), placeholder: t("Enter Relationship") },
    emergencyNumber: { label: t("Emergency Contact Number"), placeholder: t("Enter Number") },
    date: { label: t("Date"), placeholder: t("Select Date") },
});
{/* هدول منشان احسن اغير قيمة كل حقل*/ }





const contactInfoFields = (t: (key: string) => string) => ({
    phoneNumber: { label: t("Phone Numbers *"), placeholder: t("Enter Number") },
    email: { label: t("Email"), placeholder: t("Enter Email") }
});

const getAddressFields = (t: (key: string) => string) => [
    { label: t("Building Number"), placeholder: t("Building Number") },
    { label: t("Street Name"), placeholder: t("Street Name") },
    { label: t("Region"), placeholder: t("Region") },
    { label: t("Country"), placeholder: t("Country") },
    { label: t("Nation"), placeholder: t("Nation") },
];

const getEmergencyContactFields = (t: (key: string) => string) => ({
    fullName: { label: t("Full Name"), placeholder: t("Enter Full Name") },
    relationship: { label: t("Relationship"), placeholder: t("Enter Relationship") },
    phoneNumber: { label: t("Phone Number"), placeholder: t("Enter Number") }
});

const personalDocumentFields = (t: (key: string) => string) => ({
    title: { label: t("Title"), placeholder: t("Enter Full Name") },
    uploadFile: { label: t("Upload File"), placeholder: t(" file to this area to upload") },
    date: { label: t("Date"), placeholder: t("Select Date") }
});




export const AddNewPatient = (): JSX.Element => {
    const [value, setValue] = useState<string | undefined>("");
    const shortLabels: Record<string, string> = {};
    Object.keys(en).forEach((key) => {
        shortLabels[key] = key; // يظهر SY, US, EG بدل اسم الدولة
    });

    const [country, setCountry] = useState("");
    const [isOpen, setIsOpen] = useState({
        Patient: true,
        contactInfo: true,
        Personal: true,
        doctorsStaff: true,
        mapsLocation: true,
        policy: true,
        term: true,
    });
    const handleToggle = (key: keyof typeof isOpen, open: boolean) => {
        setIsOpen(prev => ({
            ...prev,
            [key]: open
        }))
    };
    const { local, handleLanguageClick } = useLanguage();
    const { t, i18n } = useTranslation();
    useEffect(() => {
        i18n.changeLanguage(local);
    }, []);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    {/* هدول قيم ابدائيو زوالدالة منشان احسن اغير هل القيم */ }
    const [showDefaultValues, setShowDefaultValues] = useState(false);
    const defaultFormValues = {
        patientName: " Ammar Mohammed  Al Sawwa",
        nationality: "Syrian" ,
        preferredLanguage: "English",
        dateOfBirth: "Nov 20, 1994",
        maritalStatus: "Single",
        Patientid: "PAT-df4c3",
        profilePicture: "/userLogo.png",
        religion: "Muslim",
        age: "30",
        gender: "564",
        phoneNumber: "+966 50 000-0000",
        email: "ammarsvu91@gmail.com",
        address: ["Mohammed Zaki", " Abdulaziz Street", "Al Olaya District", "Riyadh", "Saudi Arabia"],
        emergencyContact: " Mohammed Zaki",
        cardNumber: "1234 5678 9012 3456",
        emergencyRelationship: "Father",
        relationship: "Father",
        emergencyNumber: "+966 50 000-0000 ",
        documentTitle: " Previous Medical Records ",

        date: "May 01, 2026 "
    };

    // دالة لتحديث قيمة أي حقل
    const [formValues, setFormValues] = useState({
        patientName: "",
        nationality: "",
        preferredLanguage: "",
        dateOfBirth: "",
        maritalStatus: "",
        Patientid: "PAT-df4c3",
        profilePicture: "",
        religion: "",
        age: "",
        phoneNumber: "",
        email: "",
        address: ["", "", "", "", ""],
        emergencyContact: "",
        cardNumber: "",
        emergencyRelationship: "",
        relationship: "",
        emergencyNumber: "",
        documentTitle: "",
        date: "",
        gender: "male"
    });
    const handleInputChangeV = (field: string, value: any) => {
        setFormValues(prev => ({
            ...prev,
            [field]: value
        }));
    };
    // دالة لتحديث عنوان address (مصفوفة)
    const handleAddressChange = (index: number, value: string) => {
        setFormValues(prev => ({
            ...prev,
            address: prev.address.map((item, i) => i === index ? value : item)
        }));
    };
    // دالة لجلب البيانات الابتدائية وتحديث كل الحقول
    const handleGetData = () => {
        setFormValues({ ...defaultFormValues });
        setShowDefaultValues(true);
    };
    {/*لتخزين حالة الكارد*/ }
    const [isCardValid, setIsCardValid] = useState(true);
    const [checkCardValidation, setCheckCardValidation] = useState(false); // للتحقق بعد الضغط

    return (
        <div className="flex flex-col w-full overflow-hidden min-h-screen items-start gap-4 py-4 pl-0 pr-5">
            <header className="flex h-[50px] justify-between pl-1 pr-0 py-0 w-full items-center">
                <div className="flex flex-col w-[340px] items-start gap-1.5 px-0 py-0.5">
                    <h1 className="self-stretch text-[22px] mt-[-1.00px] font-lato font-semibold text-text-primary leading-[116%] tracking-[0]">
                        {t("Add New Patient")}
                    </h1>
                    <div className="flex items-center gap-2.5 text-[14px]">
                        <div className=" text-text-primary">
                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 8C18 8.41421 17.6642 8.75 17.25 8.75L0.75 8.75C0.335786 8.75 -3.45941e-07 8.41421 -3.27835e-07 8C-3.0973e-07 7.58579 0.335787 7.25 0.75 7.25L17.25 7.25C17.6642 7.25 18 7.58579 18 8Z" fill="CurrentColor" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.03033 0.719669C8.32322 1.01256 8.32322 1.48744 8.03033 1.78033L1.81066 8L8.03033 14.2197C8.32322 14.5126 8.32322 14.9874 8.03033 15.2803C7.73744 15.5732 7.26256 15.5732 6.96967 15.2803L0.219669 8.53033C-0.0732254 8.23744 -0.0732253 7.76256 0.219669 7.46967L6.96967 0.719669C7.26256 0.426776 7.73744 0.426776 8.03033 0.719669Z" fill="CurrentColor" />
                            </svg>

                        </div>
                        <p className="font-lato font-semibold text-sm text-text-primary leading-[125%] tracking-[0]">
                            {t("Add New Patient")}
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





            <Card className="flex flex-col h-auto items-start gap-6 p-5 mt-[10px] bg-background-tertiary relative self-stretch w-full rounded-2xl overflow-hidden">
                <CardContent className="p-0 w-full overflow-y-auto gap-5 h-auto">











                    <ReusableCollapsible
                        title={t("Patient Basic Info")}
                        initiallyOpen={isOpen.Patient}
                        onOpenChange={(open) => handleToggle("Patient", open)}
                        dir={local === 'ar' ? 'rtl' : 'ltr'}
                        content={
                            <div className="relative w-full h-[496px] bg-surface-default rounded-2x" dir={local === 'ar' ? 'rtl' : 'ltr'}>
                                <div className="grid grid-cols-2 gap-8  ">
                                    {/* القسم الأول */}
                                    <div className="flex flex-col items-start gap-6">
                                        {/* صورة البروفايل */}
                                        <div className="inline-flex items-center gap-8 relative flex-[0_0_auto]">
                                            <div className="relative w-40 text-text-primary font-semibold text-[16px]">
                                                {t("Profile Picture")}
                                            </div>
                                            <ImageUploader initialImage={formValues.profilePicture} />
                                        </div>

                                        {/* اسم المريض */}
                                        <div className="flex self-stretch w-full items-center gap-8 relative">
                                            <Label className="w-[155px] text-text-primary font-semibold text-[16px]">
                                                {formFields(t).patientName.label}
                                            </Label>
                                            <Input
                                                className="w-[360px] h-12 bg-background-secondary placeholder:text-text-secondary  border border-border-light  shadow-shadow-xs"
                                                value={formValues.patientName}
                                                placeholder={formFields(t).patientName.placeholder}
                                                onChange={e => handleInputChangeV('patientName', e.target.value)}
                                            />
                                        </div>

                                        {/* الجنسية */}
                                        <div className="flex self-stretch w-full items-center gap-8 relative">
                                            <Label className="w-[155px] text-text-primary font-semibold text-[16px]">
                                                {formFields(t).nationality.label}
                                            </Label>





                                            <Select
                                                value={formValues.nationality}
                                                onValueChange={val => handleInputChangeV('nationality', val)}
                                            >

                                                <SelectTrigger className="w-[360px] h-12 bg-background-secondary border border-border-light  shadow-shadow-xs" dir={local === 'ar' ? 'rtl' : 'ltr'}>
                                                    <SelectValue placeholder={formFields(t).nationality.placeholder}>
                                                        {formValues.nationality ? t(formValues.nationality) : null}
                                                    </SelectValue>
                                                </SelectTrigger>
                                                <SelectContent dir={local === 'ar' ? 'rtl' : 'ltr'}>
                                                    <SelectItem value="nationality1">{t("Nationality 1")}</SelectItem>
                                                    <SelectItem value="nationality2">{t("Nationality 2")}</SelectItem>
                                                </SelectContent>
                                            </Select>

                                        </div>

                                        {/* اللغة المفضلة */}
                                        <div className="flex self-stretch w-full items-center gap-8 relative">
                                            <Label className="w-[155px] text-text-primary  font-semibold text-[16px]">
                                                {formFields(t).preferredLanguage.label}
                                            </Label>


                                            <Select
                                                value={formValues.preferredLanguage}
                                                onValueChange={val => handleInputChangeV('preferredLanguage', val)}
                                            >

                                                <SelectTrigger className="w-[360px] h-12 bg-background-secondary border border-border-light  shadow-shadow-xs" dir={local === 'ar' ? 'rtl' : 'ltr'}>
                                                    <SelectValue placeholder={formFields(t).preferredLanguage.placeholder}>
                                                        {formValues.preferredLanguage ? t(formValues.preferredLanguage) : null}
                                                    </SelectValue>
                                                </SelectTrigger>
                                                <SelectContent dir={local === 'ar' ? 'rtl' : 'ltr'}>
                                                    <SelectItem value="language1">{t("Language 1")}</SelectItem>
                                                    <SelectItem value="language2">{t("Language 2")}</SelectItem>
                                                </SelectContent>
                                            </Select>


                                        </div>

                                        {/* تاريخ الميلاد */}
                                        <div className="flex items-start gap-8 w-full">
                                            <Label className="w-[155px] text-text-primary font-semibold text-[16px]">
                                                {formFields(t).dateOfBirth.label}
                                            </Label>

                                            {/* Date Input Style Box */}
                                            <div className="flex w-[360px] h-12 items-center justify-between bg-background-secondary rounded border border border-border-light  shadow-shadow-xs px-4">
                                                <input
                                                    type="text"
                                                    value={formValues.dateOfBirth}
                                                    placeholder={formFields(t).dateOfBirth.placeholder}
                                                    onChange={(e) => handleInputChangeV("dateOfBirth", e.target.value)}
                                                    className="w-full bg-background-secondary placeholder:text-text-secondary  placeholder:bg-background-secondary text-sm outline-none"
                                                />
                                                <CalendarIcon className="w-4 h-4 ml-2 shrink-0 bg-background-secondary" />
                                            </div>
                                        </div>

                                        {/* الحالة الاجتماعية */}

                                        <div className="flex self-stretch w-full items-center gap-8 relative">
                                            <Label className="w-[155px] text-text-primary font-semibold text-[16px]" dir={local === 'ar' ? 'rtl' : 'ltr'}>
                                                {formFields(t).maritalStatus.label}
                                            </Label>
                                            <Select
                                                value={formValues.maritalStatus}
                                                onValueChange={val => handleInputChangeV('maritalStatus', val)}
                                            >
                                                <SelectTrigger className="w-[360px] h-12 bg-background-secondary border border-border-light  shadow-shadow-xs" dir={local === 'ar' ? 'rtl' : 'ltr'}>
                                                    <SelectValue placeholder={formFields(t).maritalStatus.placeholder}>
                                                        {formValues.maritalStatus ? t(formValues.maritalStatus) : null}
                                                    </SelectValue>
                                                </SelectTrigger>
                                                <SelectContent dir={local === 'ar' ? 'rtl' : 'ltr'}>
                                                    <SelectItem value="single">{t("Single")}</SelectItem>
                                                    <SelectItem value="married">{t("Married")}</SelectItem>
                                                    <SelectItem value="divorced">{t("Divorced")}</SelectItem>
                                                </SelectContent>
                                            </Select>


                                        </div>
                                    </div>

                                    {/* القسم الثاني */}
                                    <div className="flex flex-col items-start gap-6">
                                        {/* رقم المريض */}
                                        <div className="inline-flex items-center gap-8 relative">
                                            <Label className="w-[155px] text-text-primary font-semibold text-[16px]">
                                                {t("Patient ID")}
                                            </Label>

                                            <div className="w-40 text-text-primary font-semibold text-[16px]">
                                                {patientBasicInfoData.patientId}
                                            </div>
                                        </div>






                                        <div className="flex items-center gap-8 w-full">
                                            <Label
                                                className={`w-[155px] font-semibold text-[16px] ${isCardValid ? 'text-text-primary' : 'text-red-500' 
                                                    }`}
                                            >
                                                {formFields(t).cardNumber.label}
                                            </Label>

                                            <div className="flex flex-col gap-1">
                                                <Input
                                                    className={`w-[360px] h-12 bg-background-secondary placeholder:text-text-secondary  border shadow-shadow-xs ${isCardValid ? 'border border-border-light ': 'border-red-500' 
                                                        }`}
                                                    value={formValues.cardNumber}
                                                    placeholder={formFields(t).cardNumber.placeholder}
                                                    onChange={(e) => handleInputChangeV('cardNumber', e.target.value)}
                                                />

                                                {/* ✅ مكون التحقق */}
                                                <CardValidator
                                                    cardNumber={formValues.cardNumber}
                                                    onValidationChange={setIsCardValid}
                                                />

                                                {/* رسالة خطأ صغيرة تحت الحقل 
                                                {!isCardValid && formValues.cardNumber.length > 0 && (
                                                    <span className="text-sm text-red-500">Invalid card number</span>
                                                )}*/}
                                            </div>
                                        </div>









                                        {/* الديانة */}
                                        <div className="flex self-stretch w-full items-center placeholder:text-text-secondary  gap-8 relative">
                                            <Label className="w-[155px] text-text-primary font-semibold text-[16px]">
                                                {formFields(t).religion.label}
                                            </Label>
                                            <Input
                                                className="w-[360px] h-12 bg-background-secondary placeholder:text-text-secondary  border border-border-light   shadow-shadow-xs"
                                                placeholder={formFields(t).religion.placeholder}
                                                value={formValues.religion}
                                                onChange={e => handleInputChangeV('religion', e.target.value)}
                                            />
                                        </div>

                                        {/* العمر */}
                                        <div className="flex w-[343.23px] items-center gap-8 relative">
                                            <Label className="w-[155px] text-text-primary font-semibold text-[16px]">
                                                {t("Age")}
                                            </Label>
                                            <div className="w-40 text-text-primary font-semibold text-[16px]">
                                                {patientBasicInfoData.age}
                                            </div>
                                        </div>

                                        {/* الجنس */}
                                        <div className="flex items-center gap-[32px]">
                                            <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                                                {t("Gender")}
                                            </Label>

                                            <div className="flex items-center gap-2">

                                                <input
                                                    className="w-5 h-5 accent-text-primary "
                                                    type="radio"
                                                    name="Gender"
                                                    value="male"
                                                    id="gender-male"
                                                    checked={formValues.gender === "male"}
                                                    onChange={() => handleInputChangeV('gender', 'male')}
                                                />
                                                <label
                                                    htmlFor="gender-male"
                                                    className="font-lato font-regular text-sm leading-[154%] tracking-[0] text-text-primary"
                                                >
                                                    {t("Male")}
                                                </label>
                                            </div>

                                            <div className="flex items-center gap-2">

                                                <input
                                                    className="w-5 h-5 accent-text-primary"
                                                    type="radio"
                                                    name="Gender"
                                                    value="female"
                                                    id="gender-female"
                                                    checked={formValues.gender === "female"}
                                                    onChange={() => handleInputChangeV('gender', 'female')}
                                                />
                                                <label
                                                    htmlFor="gender-female"
                                                    className="font-lato font-regular text-sm leading-[154%] tracking-[0] text-text-primary"
                                                >
                                                    {t("Female")}
                                                </label>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        }
                    />










                    {!showDefaultValues && (
                        <Card className="self-stretch w-full h-[72px] mt-5 items-center justify-center bg-surface-default rounded-2xl" dir={local === 'ar' ? 'rtl' : 'ltr'}>
                            <CardContent className="p-0 items-center text-center justify-center">
                                <div className="flex items-center  justify-between h-full px-4">
                                    <div className="inline-flex flex-col h-[18px] items-start justify-center gap-1">
                                        <div className="w-fit font-lato font-semibold text-[16px] text-text-accent leading-[125%] tracking-[0]">
                                            {t("Insurance Info")}
                                        </div>
                                    </div>



                                   <div className="inline-flex items-center justify-center mt-4">
                                        <div><svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 6.00001C14.0523 6.00001 14.5 6.44772 14.5 7.00001V14C14.5 14.5523 14.0523 15 13.5 15C12.9477 15 12.5 14.5523 12.5 14V7.00001C12.5 6.44772 12.9477 6.00001 13.5 6.00001Z" fill="#D92D20" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.061 6.07754e-06C18.3217 -0.000638487 18.5799 0.0499933 18.8211 0.149023C19.0628 0.248312 19.2826 0.394305 19.4679 0.578651L19.4696 0.580397L25.9214 7.03215C26.1057 7.21741 26.2517 7.4372 26.351 7.67895C26.45 7.92012 26.5007 8.17842 26.5 8.43912L26.5 8.44101L26.5 8.43751V8.43912V17.5269C26.5 18.0574 26.2893 18.5661 25.9142 18.9411L19.4411 25.4142C19.0661 25.7893 18.5574 26 18.0269 26H8.91421C8.38378 26 7.87507 25.7893 7.5 25.4142L1.08579 19C0.710714 18.6249 0.5 18.1162 0.5 17.5858V8.36829C0.5 7.83418 0.713633 7.32227 1.0933 6.9466L7.52941 0.578321C7.90386 0.207822 8.40935 6.07754e-06 8.93611 6.07754e-06H18.061ZM18.0608 2.00001L24.5 8.43922V17.5269L18.0269 24H8.91421L2.5 17.5858V8.36829L8.93611 2.00001H18.0608Z" fill="#D92D20" />
                                            <path d="M13.5 20C14.3284 20 15 19.3284 15 18.5C15 17.6716 14.3284 17 13.5 17C12.6716 17 12 17.6716 12 18.5C12 19.3284 12.6716 20 13.5 20Z" fill="#D92D20" />
                                        </svg>
                                        </div>

                                        <h1 className=" text-[16px] font-semibold text-center justify-center" style={{ color: "rgba(217, 45, 32, 1)" }}> {t("Card Number is incorrect or not registered with insurance")}.</h1>
                                    </div>




                                    <Button className="flex w-[122px] h-[42px] items-center justify-center gap-1 mt-4 rounded-[20px] border border-solid border-[#00b48d] bg-transparent hover:bg-transparent h-auto">
                                        <div className="relative w-5 h-5">
                                            <div ><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.4014 15.2168C17.6711 15.1732 17.9383 15.3093 18.0605 15.5537L18.8936 17.2207C19.0477 17.5293 18.9226 17.9041 18.6143 18.0586C18.3055 18.213 17.9298 18.088 17.7754 17.7793L17.5674 17.3623C16.9239 18.3258 15.8175 18.958 14.584 18.958C13.1704 18.9578 11.9515 18.1295 11.3838 16.9346C11.2359 16.6228 11.369 16.2506 11.6807 16.1025C11.9924 15.9546 12.3646 16.0868 12.5127 16.3984C12.8811 17.174 13.6709 17.7078 14.584 17.708C15.7457 17.708 16.725 16.8473 16.8828 15.7451C16.9215 15.4745 17.1315 15.2606 17.4014 15.2168ZM15.001 1.04199C16.7269 1.04199 18.126 2.4411 18.126 4.16699V10.417C18.1258 10.762 17.846 11.042 17.501 11.042C17.1559 11.042 16.8762 10.762 16.876 10.417V10.208H2.29297V15C2.29297 16.0355 3.13243 16.875 4.16797 16.875H8.75098C9.09615 16.875 9.37598 17.1548 9.37598 17.5C9.37598 17.8452 9.09615 18.125 8.75098 18.125H4.16797C2.44208 18.125 1.04297 16.7259 1.04297 15V4.16699C1.04297 2.4411 2.44208 1.04199 4.16797 1.04199H15.001ZM14.584 11.875C15.9977 11.875 17.2174 12.7033 17.7852 13.8984C17.9332 14.2102 17.8001 14.5833 17.4883 14.7314C17.1766 14.8793 16.8043 14.7462 16.6562 14.4346C16.2877 13.6589 15.4972 13.125 14.584 13.125C13.4224 13.1252 12.4438 13.9868 12.2861 15.0889C12.2473 15.3593 12.0373 15.5734 11.7676 15.6172C11.4978 15.6608 11.2306 15.5237 11.1084 15.2793L10.2754 13.6133C10.1211 13.3046 10.2461 12.9289 10.5547 12.7744C10.8634 12.6201 11.2392 12.745 11.3936 13.0537L11.6016 13.4707C12.2449 12.5073 13.3507 11.8752 14.584 11.875ZM6.45898 11.875C7.37946 11.875 8.12598 12.6215 8.12598 13.542C8.1258 14.4623 7.37935 15.208 6.45898 15.208C5.53877 15.2078 4.79314 14.4622 4.79297 13.542C4.79297 12.6216 5.53866 11.8752 6.45898 11.875ZM6.45898 13.125C6.22902 13.1252 6.04297 13.312 6.04297 13.542C6.04314 13.7719 6.22912 13.9578 6.45898 13.958C6.68899 13.958 6.8758 13.772 6.87598 13.542C6.87598 13.3119 6.6891 13.125 6.45898 13.125ZM4.16797 2.29199C3.13243 2.29199 2.29297 3.13146 2.29297 4.16699V8.95801H16.876V4.16699C16.876 3.13146 16.0365 2.29199 15.001 2.29199H4.16797ZM6.45898 3.95801C7.37946 3.95801 8.12598 4.70453 8.12598 5.625C8.12598 6.54547 7.37946 7.29199 6.45898 7.29199C5.53866 7.29182 4.79297 6.54537 4.79297 5.625C4.79297 4.70463 5.53866 3.95818 6.45898 3.95801ZM6.45898 5.20801C6.22902 5.20818 6.04297 5.39499 6.04297 5.625C6.04297 5.85501 6.22902 6.04182 6.45898 6.04199C6.6891 6.04199 6.87598 5.85512 6.87598 5.625C6.87598 5.39488 6.6891 5.20801 6.45898 5.20801ZM13.751 4.79199C14.0962 4.79199 14.376 5.07181 14.376 5.41699C14.3758 5.76202 14.096 6.04199 13.751 6.04199H10.418C10.0729 6.04199 9.79315 5.76202 9.79297 5.41699C9.79297 5.07181 10.0728 4.79199 10.418 4.79199H13.751Z" fill="CorrentColor" />
                                            </svg>
                                            </div>
                                        </div>
                                        <div className="inline-flex items-center gap-2.5 p-0.5 relative flex-[0_0_auto]">
                                            <div className="mt-[-1.00px] font-normal text-secondary-dark text-center justify-center text-sm leading-[14px] relative w-fit [font-family:'Lato',Helvetica] items-center tracking-[0] whitespace-nowrap">
                                                <span style={{ cursor: "pointer", textAlign:"center" }} onClick={handleGetData}>
                                                    {t("Get Data")}
                                                </span>
                                            </div>
                                        </div>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    )}




                    {showDefaultValues && (
                        <ReusableCollapsible
                            title={t("Insurance Info")}
                            initiallyOpen={isOpen.Personal}
                            dir={local === 'ar' ? 'rtl' : 'ltr'}
                            onOpenChange={(open) => handleToggle("Personal", open)}
                            content={
                                <div className="flex flex-col-2 w-full bg-surface-default rounded-2xl  gap-[126px] h-[374px] " dir={local === 'ar' ? 'rtl' : 'ltr'}>

                                    <div className="grid  gap-y-[30px] ">
                                        <div className="flex gap-[32px] w-[500px]">
                                            <h1 className="w-[155px] text-text-primary font-semibold text-[16px]"> {t("Member Number")}:
                                            </h1>
                                            <h1 className=" text-text-primary font-normal text-[14px]">36884674</h1>
                                        </div>
                                        <div className="flex gap-[32px] w-[500px] items-center">
                                            <h1 className=" w-[190px] text-text-primary font-semibold text-[16px]"> {t("Insurance Company")} :</h1>
                                            <h1 className=" text-text-primary font-normal text-[14px] text-start items-start">BUPA Arabia for Cooperative Insurance شركة بوبا العربية للتأمين</h1>
                                        </div>
                                        < div className="flex gap-[32px] w-[500px]">
                                            <h1 className="w-[155px] text-text-primary font-semibold text-[16px]">{t("Group Number")} :</h1>
                                            <h1 className=" text-text-primary font-normal text-[14px]">12345678</h1>
                                        </div>
                                        <div className="flex gap-[32px] w-[500px]">
                                            <h1 className="w-[155px] text-text-primary font-semibold text-[16px]"> {t("Policy ID")} :</h1>
                                            <h1 className=" text-text-primary font-normal text-[14px]">513029001</h1>
                                        </div>
                                        <div className="flex gap-[32px] w-[500px]">
                                            <h1 className="w-[155px] text-text-primary font-semibold text-[16px]">  {t("Co-payment")} :</h1>
                                            <h1 className=" text-text-primary font-normal text-[14px]">% 20.00</h1>
                                        </div>
                                        <div className="flex gap-[32px] w-[500px]">
                                            <h1 className="w-[155px] text-text-primary font-semibold text-[16px]">{t("Coverage Start Date")}:</h1>
                                            <h1 className=" text-text-primary font-normal text-[14px]">Nov 20,2026</h1>
                                        </div>
                                        <div className="flex gap-[32px] w-[500px]">
                                            <h1 className="w-[155px] text-text-primary font-semibold text-[16px]"> {t("Insurance Status")}  :</h1>
                                            <h1 className=" text-text-primary font-normal text-[14px]">Active</h1>
                                        </div>
                                    </div>


                                    <div className="flex flex-col gap-8 px-4">
                                        <div className="flex gap-[32px] h-[20px] w-[500px]">
                                            <h1 className="w-[155px] text-text-primary font-semibold text-[16px]"> {t("Member Type")} :</h1>
                                            <h1 className="text-text-primary font-normal text-[14px]">Main</h1>
                                        </div>

                                        <div className="flex gap-[32px] h-[20px] w-[500px]">
                                            <h1 className="w-[155px] text-text-primary font-semibold text-[16px]"> {t("Provider Network")}:</h1>
                                            <h1 className="text-text-primary font-normal text-[14px]">300186</h1>
                                        </div>

                                        <div className="flex gap-x-[32px] h-[20px] w-[500px]">
                                            <h1 className="w-[155px] text-text-primary font-semibold text-[16px]"> {t("Class")}:</h1>
                                            <h1 className="text-text-primary font-normal text-[14px]">essential 1.0</h1>
                                        </div>

                                        <div className="flex gap-x-[32px] h-[20px] w-[500px]">
                                            <h1 className="w-[155px] text-text-primary font-semibold text-[16px]"> {t("Coverage Limit")}:</h1>
                                            <h1 className="text-text-primary font-normal text-[14px]">75.00</h1>
                                        </div>

                                        <div className="flex gap-x-[32px] h-[20px] w-[500px]">
                                            <h1 className="w-[155px] text-text-primary font-semibold text-[16px]"> {t("Coverage End Date")}:</h1>
                                            <h1 className="text-text-primary font-normal text-[14px]">Nov 20,2026</h1>
                                        </div>
                                    </div>





                                </div>

                            }
                        />

                    )}







                    <ReusableCollapsible dir={local === 'ar' ? 'rtl' : 'ltr'}
                        title={t('Contact Info')}
                        initiallyOpen={isOpen.contactInfo}
                        onOpenChange={(open) => handleToggle("contactInfo", open)}

                        content={
                            <div className="relative w-full h-[496px]  rounded-2x">
                                <div className="flex flex-col  gap-[16px]">
                                    <div className="grid grid-cols-2 gap-[22px]">
                                        {/* Phone Number Field */}
                                        <div className="grid w-[360px]">
                            <div className="flex items-center gap-[32px] rounded-2xl">
                                        <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                                                {t("Phone Numbers")}
                                        </Label>
                                        <div className="w-[360px] !bg-background-secondary placeholder:text-text-secondary  !rounded-[4px] overflow-hidden">
                                            <PhoneInputCustom  value={formValues.emergencyNumber}
                                                onChange={(val) =>
                                                        setFormValues((prev) => ({ ...prev, phoneNumber: val }))}
                                                    placeholder={formFields(t).emergencyNumber.placeholder}
                                            />
                                        </div>
                                    </div>

                                            <div className="flex justify-end p-2 text-secondary-dark">
                                                <PlusIcon className="w-8 h-8 cursor-pointer" />
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="flex items-start mt-3 ">
                                            <div className="flex w-[100px] items-center gap-1 mb-12">
                                                <div className="text-text-primary font-semibold">
                                                    {t("Email")}:
                                                </div>
                                            </div>
                                            <div className="flex text-text-primary font-sans">
                                                <input
                                                    type="email"
                                                    placeholder={formFields(t).email.placeholder}
                                                    value={formValues.email}
                                                    onChange={(e) => handleInputChangeV("email", e.target.value)}
                                                    className="w-[360px] h-12 bg-background-secondary placeholder:text-text-secondary items-start  border border-border-light  shadow-shadow-xs px-3"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="flex items-center gap-8">
                                        <Label className="w-[150px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                                            {t("Address")}
                                        </Label>
                                        {formValues.address.map((val, index) => (
                                            <Input 
                                                key={index}
                                                value={val}
                                                placeholder={getAddressFields(t)[index]?.placeholder}
                                                onChange={(e) => {
                                                    const updatedAddress = [...formValues.address];
                                                    updatedAddress[index] = e.target.value;
                                                    handleInputChangeV("address", updatedAddress);
                                                }}
                                                className="w-[165px]  h-12 bg-background-secondary placeholder:text-text-secondary  border border-border-light  shadow-shadow-xs px-3"
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Emergency Section */}
                                <h3 className="font-lato font-semibold mt-6 mb-6 text-sm leading-[125%] tracking-[0] text-secondary-dark">
                                    {t('Emergency Contact Info')}
                                </h3>
                                <div className="flex flex-col gap-[16px]">
                                    <div className="grid grid-cols-2 gap-[22px]">
                                        {/* Emergency Contact */}
                                        <div className="flex items-center gap-[32px]">
                                            <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                                                {t("Emergency Contact")}
                                            </Label>
                                            <Input
                                                value={formValues.emergencyContact}
                                                onChange={(e) => handleInputChangeV("emergencyContact", e.target.value)}
                                                placeholder={formFields(t).emergencyContact.placeholder}
                                                className="w-[360px] h-12 bg-background-secondary placeholder:text-text-secondary  border border-border-light  shadow-shadow-xs px-3"
                                            />
                                        </div>

                                        {/* Relationship */}
                                        <div className="flex items-center gap-[32px]">
                                            <Label className="w-[160px] font-lato font-semibold   text-base leading-[124%] tracking-[0] text-text-primary">
                                                {t("Relationship")}
                                            </Label>
                                            <Input
                                                value={formValues.relationship}
                                                onChange={(e) => handleInputChangeV("relationship", e.target.value)}
                                                placeholder={formFields(t).relationship.placeholder}
                                                className="h-[48px] w-[360px] bg-background-secondary placeholder:text-text-secondary  border border-border-light rounded-[4px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary"
                                            />
                                        </div>
                                    </div>

                                    {/* Emergency Number */}
                                    <div className="flex items-center gap-[32px] rounded-2xl">
                                        <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                                            {t("Emergency Number")}
                                        </Label>
                                        <div className="w-[360px] !bg-background-secondary !rounded-[4px] overflow-hidden">
                                            <PhoneInputCustom value={formValues.emergencyNumber}
                                                onChange={(val) =>
                                                    setFormValues((prev) => ({ ...prev, emergencyNumber: val }))}
                                                placeholder={formFields(t).emergencyNumber.placeholder}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    />






                    <ReusableCollapsible
                        title={t('Personal Documents')}
                        initiallyOpen={isOpen.Personal}
                        dir={local === 'ar' ? 'rtl' : 'ltr'}
                        onOpenChange={(open) => handleToggle("Personal", open)}
                        content={
                            <div className="flex flex-col w-full bg-surface-default rounded-2xl p-4 gap-4 " dir={local === 'ar' ? 'rtl' : 'ltr'}>


                                <div className="flex items-center  justify-between ">
                                    <div className="inline-flex items-center gap-7">
                                        <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
                                            <Label className="relative items-center w-[82px] text-text-primary font-semibold text-[16px]">
                                                {personalDocumentFields(t).title.label}
                                            </Label>
                                            <Input
                                                className="w-[280px] h-12 bg-background-secondary placeholder:text-text-secondary   border border-border-light shadow-shadow-xs"
                                                placeholder={showDefaultValues ? undefined : personalDocumentFields(t).title.placeholder}
                                                value={showDefaultValues ? defaultFormValues.documentTitle : undefined}
                                            />
                                        </div>


                                        <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
                                            <Label className="relative items-center w-[82px] text-text-primary font-semibold text-[16px]">
                                                {personalDocumentFields(t).uploadFile.label}
                                            </Label>
                                            <FileUpload
                                                amount="Max 2MB"
                                                size={2 * 1024 * 1024}
                                                width="280px"
                                                label={
                                                    <>
       <Trans i18nKey="uploadFile.dragLabel">
        <span className="text-text-accent" />
        <span className="text-text-primary" />
      </Trans>
                                                  
                                                    </>
                                                }
                                            />
                                        </div>







                                        <div className="flex items-center gap-4 relative">
                                            <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
                                                <Label className="relative items-center w-[82px] text-text-primary font-semibold text-[16px]">
                                                    {personalDocumentFields(t).date.label}
                                                </Label>
                                                <div className="flex flex-col w-[280px] h-12 items-center justify-center bg-background-secondary  gap-2 px-3.5 py-2.5 relative bg-base-white rounded overflow-hidden border border-solid border border-border-light  shadow-shadow-xs">
                                                    <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                                                        <div className="flex items-center relative flex-1 grow bg-background-secondary ">
                                                            <div className="relative w-fit mt-[-1.00px] font-title-14px-regular font-[number:var(--title-14px-regular-font-weight)] text-on-surface-secondary text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] whitespace-nowrap [font-style:var(--title-14px-regular-font-style)]">
                                                                <input className=" placeholder:bg-background-secondary placeholder:text-text-secondary  bg-background-secondary  " 
                                                                    type="text"
                                                                    value={showDefaultValues ? defaultFormValues.date : undefined}
                                                                    placeholder={showDefaultValues ? undefined : formFields(t).date.placeholder}
                                                                />
                                                            </div>
                                                        </div>
                                                        <CalendarIcon className="w-4 h-4" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <MinusIcon className="w-8 h-8 text-secondary-dark" />

                                    </div>


                                </div>
                                <div className=" flex justify-end  mt-4 text-secondary-dark">
                                    <PlusIcon className="w-8 h-8" />
                                </div>

                            </div>
                        }
                    />







                    <div className="flex items-end justify-end mt-4 w-full " dir={local === 'ar' ? 'rtl' : 'ltr'}>
                        <div className="flex items-end justify-end gap-4">
                            <Button
                                variant="outline"
                                className="w-[200px] h-10 bg-background-primary rounded-[20px] border-2 border-border-light px-4 py-2.5"
                            >
                                {t("Cancel")}
                            </Button>
                            <Button className="w-[200px] h-10 bg-secondary-dark text-white rounded-[20px] px-4 py-2.5">
                                {t("Save")}
                            </Button>
                        </div>
                    </div>
                </CardContent>

            </Card>
        </div>

    );
}