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
import DatePicker from "../../../components/ui/DatePicker";
import { t } from "i18next";
import PhoneInputCustom from "../../../components/ui/PhoneInput";
import { SideBar } from "../../CommonComponents/SideBarPlan2";
import { ThemeToggle } from "../../../components/theme/ThemeSwitcher";
import { add } from "date-fns";
import { Link } from "react-router-dom";
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






const getAddressFields = (t: (key: string) => string) => [
    { label: t("Building Number"), placeholder: t("Building Number") },
    { label: t("Street Name"), placeholder: t("Street Name") },
    { label: t("Region"), placeholder: t("Region") },
    { label: t("Country"), placeholder: t("Country") },
    { label: t("Nation"), placeholder: t("Nation") },
];



const personalDocumentFields = (t: (key: string) => string) => ({
    title: { label: t("Title"), placeholder: t("Enter Full Name") },
    uploadFile: { label: t("Upload File"), placeholder: t(" file to this area to upload") },
    date: { label: t("Date"), placeholder: t("Select Date") }
});


import { Header } from "../../CommonComponents/Header";

export const AddNewPatient = (): JSX.Element => {

    const shortLabels: Record<string, string> = {};
    Object.keys(en).forEach((key) => {
        shortLabels[key] = key; // يظهر SY, US, EG بدل اسم الدولة
    });


    const [isOpen, setIsOpen1] = useState({
        Patient: true,
        contactInfo: true,
        Personal: true,
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
    const { local, handleLanguageClick } = useLanguage();
    const { t, i18n } = useTranslation();
    useEffect(() => {
        i18n.changeLanguage(local);
    }, []);


    {/* هدول قيم ابدائيو زوالدالة منشان احسن اغير هل القيم */ }
    const [showDefaultValues, setShowDefaultValues] = useState(false);
    const defaultFormValues = {
        patientName: " Ammar Mohammed  Al Sawwa",
        nationality: "Syrian",
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
                <Header MainTitle="Patients Management" SubTitle="Add New Patient" onOpenSidebar={onOpenSidebar}  backTo="/ViewPatientDetails"/>
                
        







                <Card className="flex flex-col h-auto items-start gap-6 p-5 mt-[10px] bg-background-tertiary relative self-stretch w-full rounded-2xl overflow-hidden">
                    <CardContent className="p-0 w-full overflow-y-auto gap-5 h-auto">











                        <ReusableCollapsible
                            title={t("Patient Basic Info")}
                            initiallyOpen={isOpen.Patient}
                            onOpenChange={(open) => handleToggle("Patient", open)}
                            dir={local === 'ar' ? 'rtl' : 'ltr'}
                            content={
                                <div className="relative w-full h-full pb-4 bg-surface-default rounded-2x" dir={local === 'ar' ? 'rtl' : 'ltr'}>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                        {/* القسم الأول */}
                                        <div className="flex flex-col items-start gap-6">
                                            {/* صورة البروفايل */}
                                            <div className="inline-flex items-center gap-8 relative flex-[0_0_auto]">
                                                <div className="relative w-40 text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">
                                                    {t("Profile Picture")}
                                                </div>
                                                <ImageUploader initialImage={formValues.profilePicture} />
                                            </div>

                                            {/* اسم المريض */}
                                            <div className="flex flex-col md:flex-row  self-stretch w-full items-start gap-8 relative">
                                                <Label className="w-[150px] text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">
                                                    {formFields(t).patientName.label}
                                                </Label>
                                                <Input
                                                    className="w-[min(100%,360px)] h-10 sm:h-10 md:h-12  bg-background-secondary  placeholder:text-[clamp(14px,1.1vw,16px) placeholder:font-normal placeholder:text-text-secondary  border border-border-light  shadow-shadow-xs"
                                                    value={formValues.patientName}
                                                    placeholder={formFields(t).patientName.placeholder}
                                                    onChange={e => handleInputChangeV('patientName', e.target.value)}
                                                />
                                            </div>

                                            {/* الجنسية */}
                                            <div className="flex flex-col md:flex-row md:items-center self-stretch w-full items-start gap-8 relative">
                                                <Label className="w-[150px] text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">
                                                    {formFields(t).nationality.label}
                                                </Label>





                                                <Select 
                                                    value={formValues.nationality}
                                                    onValueChange={val => handleInputChangeV('nationality', val)}
                                                >

                                                    <SelectTrigger className="w-[min(100%,360px)] h-10 sm:h-10 md:h-12  bg-background-secondary border border-border-light font-regular text-base leading-[150%] tracking-[0]  placeholder:font-regular placeholder:text-base placeholder:leading-[150%] placeholder:tracking-[0]  title-[14px] placeholder:text-text-secondar" dir={local === 'ar' ? 'rtl' : 'ltr'}>
                                                        <SelectValue placeholder={formFields(t).nationality.placeholder} className="font-regular text-base leading-[150%] tracking-[0] placeholder:font-lato placeholder:font-regular placeholder:text-base placeholder:leading-[150%] placeholder:tracking-[0] placeholder:text-text-secondar title-[14px]">
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
                                            <div className="flex flex-col md:flex-row md:items-center self-stretch w-full items-start gap-8 relative">
                                                <Label className="w-[150px] text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">
                                                    {formFields(t).preferredLanguage.label}
                                                </Label>


                                                <Select
                                                    value={formValues.preferredLanguage}
                                                    onValueChange={val => handleInputChangeV('preferredLanguage', val)}
                                                >

                                                    <SelectTrigger className="w-[min(100%,360px)] h-10 sm:h-10 md:h-12  bg-background-secondary  font-regular text-base leading-[150%] tracking-[0]  placeholder:font-regular placeholder:text-base placeholder:leading-[150%] placeholder:tracking-[0]  title-[14px] placeholder:text-text-secondar border border-border-light  shadow-shadow-xs" dir={local === 'ar' ? 'rtl' : 'ltr'}>
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
                                            <div className="flex flex-col md:flex-row md:items-center items-start gap-8 w-full">
                                                <Label className="w-[150px] text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">
                                                    {formFields(t).dateOfBirth.label}
                                                </Label>

                                                {/* Date Input Style Box */}
                                                <div className="flex w-[min(100%,360px)] h-10 sm:h-10 md:h-12  items-center justify-between bg-background-secondary rounded border border border-border-light  shadow-shadow-xs px-4">
                                                    <input
                                                        type="text"
                                                        value={formValues.dateOfBirth}
                                                        placeholder={formFields(t).dateOfBirth.placeholder}
                                                        onChange={(e) => handleInputChangeV("dateOfBirth", e.target.value)}
                                                        className="w-full bg-background-secondary  placeholder:text-[clamp(14px,1.1vw,16px) placeholder:font-normal placeholder:text-text-secondary text-sm outline-none"
                                                    />
                                                    <CalendarIcon className="w-4 h-4 ml-2 shrink-0 bg-background-secondary" />
                                                </div>
                                            </div>

                                            {/* الحالة الاجتماعية */}

                                            <div className="flex flex-col md:flex-row md:items-center self-stretch w-full items-start gap-8 relative">
                                                <Label className="w-[150px] text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] " dir={local === 'ar' ? 'rtl' : 'ltr'}>
                                                    {formFields(t).maritalStatus.label}
                                                </Label>
                                                <Select
                                                    value={formValues.maritalStatus}
                                                    onValueChange={val => handleInputChangeV('maritalStatus', val)}
                                                >
                                                    <SelectTrigger
                                                        className="w-[min(100%,360px)] h-10 sm:h-10 md:h-12
               text-[clamp(14px,1.1vw,16px)] font-normal
               bg-background-secondary border border-border-light shadow-shadow-xs font-regular text-base leading-[150%] tracking-[0]  placeholder:font-regular placeholder:text-base placeholder:leading-[150%] placeholder:tracking-[0]  title-[14px] placeholder:text-text-secondar"
                                                        dir={local === 'ar' ? 'rtl' : 'ltr'}
                                                    >
                                                        <SelectValue
                                                            placeholder={formFields(t).maritalStatus.placeholder}
                                                            className={
                                                                formValues.maritalStatus
                                                                    ? "text-text-secondary font-normal" // إذا في قيمة
                                                                    : "text-text-secondary/60 font-normal text-[clamp(12px,1.1vw,14px)]" // placeholder
                                                            }
                                                        />
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
                                            <div className="inline-flex items-start gap-8 relative">
                                                <Label className="w-[150px] text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">
                                                    {t("Patient ID")}
                                                </Label>

                                                <div className=" w-[min(100%,360px)]  text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">
                                                    {patientBasicInfoData.patientId}
                                                </div>
                                            </div>






                                            <div className="flex flex-col md:flex-row md:items-center items-start gap-8  w-[min(100%,547px)]">
                                                <Label
                                                    className={`flex-none w-[150px] font-semibold text-[clamp(14px,2vw,16px)]  ${isCardValid ? 'text-text-primary' : 'text-red-500'
                                                        }`}
                                                >
                                                    {formFields(t).cardNumber.label}
                                                </Label>

                                                <div className="flex flex-col gap-1 w-full">
                                                    <Input
                                                        className={` w-[min(100%,360px)]  h-10 sm:h-10 md:h-12  bg-background-secondary  placeholder:text-[clamp(14px,1.1vw,16px) placeholder:font-normal placeholder:text-text-secondary border shadow-shadow-xs ${isCardValid ? 'border border-border-light ' : 'border-red-500'
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


                                                </div>
                                            </div>









                                            {/* الديانة */}
                                            <div className="flex flex-col md:flex-row md:items-center self-stretch w-full items  gap-8 relative">
                                                <Label className="w-[150px] text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">
                                                    {formFields(t).religion.label}
                                                </Label>
                                                <Input
                                                    className="w-[min(100%,360px)] h-10 sm:h-10 md:h-12  bg-background-secondary  placeholder:text-[clamp(14px,1.1vw,16px) placeholder:font-normal placeholder:text-text-secondary  border border-border-light   shadow-shadow-xs"
                                                    placeholder={formFields(t).religion.placeholder}
                                                    value={formValues.religion}
                                                    onChange={e => handleInputChangeV('religion', e.target.value)}
                                                />
                                            </div>

                                            {/* العمر */}
                                            <div className="flex w-[343.23px] items-center gap-8 relative">
                                                <Label className="w-[150px] text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">
                                                    {t("Age")}
                                                </Label>
                                                <div className="w-40 text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">
                                                    {patientBasicInfoData.age}
                                                </div>
                                            </div>

                                            {/* الجنس */}
                                            <div className="flex items-center md:items-start gap-x-3 ">
                                                <Label className="sm:w-[clamp(70px,10vw,162px)]  font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                                                    {t("Gender")}
                                                </Label>
                                                <div className="flex   sm:flex-row gap-4">
                                                    <div className="flex items-center gap-3">  <input
                                                        className="w-5 h-5 text-text-muted"
                                                        type="radio"
                                                        name="Gender"
                                                        value="Male"

                                                        defaultChecked
                                                    />

                                                        <label className="font-lato font-regular text-sm leading-[154%] tracking-[0] text-text-primary">
                                                            Male
                                                        </label></div>
                                                    <div className="flex items-center gap-3"><input className="w-5 h-5" type="radio" name="Gender" />
                                                        <label className="font-lato font-regular text-sm leading-[154%] tracking-[0] text-text-primary">
                                                            Female
                                                        </label></div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            }
                        />



                        <Card className="bg-background-primary gap-4 rounded-xl mt-5 p-4">
                            <CardContent className="p-0 flex flex-col gap-4">
                                {/* الصف الأول: العنوان + التحذير + الزر */}
                                <div className="flex  sm:flex-row  justify-center sm:justify-between sm:items-center gap-4">
                                    {/* كلمة Insurance Info */}
                                    <div className="font-lato  font-semibold text-[clamp(14px,2vw,16px)]  text-text-accent">
                                        {t("Insurance Info")}
                                    </div>

                                    {/* جملة التحذير */}
                                    <div className="hidden lg:flex items-center  gap-2 text-red-700 font-semibold text-[clamp(14px,2vw,16px)] ">
                                        <svg
                                            width="27"
                                            height="26"
                                            viewBox="0 0 27 26"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M13.5 6.00001C14.0523 6.00001 14.5 6.44772 14.5 7.00001V14C14.5 14.5523 14.0523 15 13.5 15C12.9477 15 12.5 14.5523 12.5 14V7.00001C12.5 6.44772 12.9477 6.00001 13.5 6.00001Z"
                                                fill="#D92D20"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M18.061 6.07754e-06C18.3217 -0.000638487 18.5799 0.0499933 18.8211 0.149023C19.0628 0.248312 19.2826 0.394305 19.4679 0.578651L19.4696 0.580397L25.9214 7.03215C26.1057 7.21741 26.2517 7.4372 26.351 7.67895C26.45 7.92012 26.5007 8.17842 26.5 8.43912L26.5 8.44101V8.43751V8.43912V17.5269C26.5 18.0574 26.2893 18.5661 25.9142 18.9411L19.4411 25.4142C19.0661 25.7893 18.5574 26 18.0269 26H8.91421C8.38378 26 7.87507 25.7893 7.5 25.4142L1.08579 19C0.710714 18.6249 0.5 18.1162 0.5 17.5858V8.36829C0.5 7.83418 0.713633 7.32227 1.0933 6.9466L7.52941 0.578321C7.90386 0.207822 8.40935 6.07754e-06 8.93611 6.07754e-06H18.061ZM18.0608 2.00001L24.5 8.43922V17.5269L18.0269 24H8.91421L2.5 17.5858V8.36829L8.93611 2.00001H18.0608Z"
                                                fill="#D92D20"
                                            />
                                            <path
                                                d="M13.5 20C14.3284 20 15 19.3284 15 18.5C15 17.6716 14.3284 17 13.5 17C12.6716 17 12 17.6716 12 18.5C12 19.3284 12.6716 20 13.5 20Z"
                                                fill="#D92D20"
                                            />
                                        </svg>
                                        {t("Card Number is incorrect or not registered with insurance")}.
                                    </div>

                                    {/* زر الحصول على البيانات */}
                                    <div className="flex justify-end sm:justify-end w-full sm:w-auto">
                                        <Button
                                            className="flex w-[122px] h-[42px] items-center  justify-center gap-1 rounded-[20px] border border-solid border-[#00b48d] bg-transparent hover:bg-transparent"
                                            onClick={handleGetData}
                                        >
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.4004 15.2168C17.6702 15.1732 17.9374 15.3093 18.0596 15.5537L18.8926 17.2207C19.0467 17.5293 18.9216 17.9041 18.6133 18.0586C18.3045 18.213 17.9288 18.088 17.7744 17.7793L17.5664 17.3623C16.9229 18.3258 15.8165 18.958 14.583 18.958C13.1694 18.9578 11.9505 18.1295 11.3828 16.9346C11.2349 16.6228 11.368 16.2506 11.6797 16.1025C11.9914 15.9546 12.3636 16.0868 12.5117 16.3984C12.8801 17.174 13.67 17.7078 14.583 17.708C15.7447 17.708 16.7241 16.8473 16.8818 15.7451C16.9205 15.4745 17.1305 15.2606 17.4004 15.2168ZM15 1.04199C16.7259 1.04199 18.125 2.4411 18.125 4.16699V10.417C18.1248 10.762 17.8451 11.042 17.5 11.042C17.1549 11.042 16.8752 10.762 16.875 10.417V10.208H2.29199V15C2.29199 16.0355 3.13146 16.875 4.16699 16.875H8.75C9.09518 16.875 9.375 17.1548 9.375 17.5C9.375 17.8452 9.09518 18.125 8.75 18.125H4.16699C2.4411 18.125 1.04199 16.7259 1.04199 15V4.16699C1.04199 2.4411 2.4411 1.04199 4.16699 1.04199H15ZM14.583 11.875C15.9968 11.875 17.2164 12.7033 17.7842 13.8984C17.9323 14.2102 17.7991 14.5833 17.4873 14.7314C17.1756 14.8793 16.8033 14.7462 16.6553 14.4346C16.2868 13.6589 15.4962 13.125 14.583 13.125C13.4214 13.1252 12.4428 13.9868 12.2852 15.0889C12.2463 15.3593 12.0363 15.5734 11.7666 15.6172C11.4969 15.6608 11.2296 15.5237 11.1074 15.2793L10.2744 13.6133C10.1201 13.3046 10.2451 12.9289 10.5537 12.7744C10.8624 12.6201 11.2382 12.745 11.3926 13.0537L11.6006 13.4707C12.244 12.5073 13.3497 11.8752 14.583 11.875ZM6.45801 11.875C7.37848 11.875 8.125 12.6215 8.125 13.542C8.12482 14.4623 7.37837 15.208 6.45801 15.208C5.53779 15.2078 4.79217 14.4622 4.79199 13.542C4.79199 12.6216 5.53768 11.8752 6.45801 11.875ZM6.45801 13.125C6.22804 13.1252 6.04199 13.312 6.04199 13.542C6.04217 13.7719 6.22815 13.9578 6.45801 13.958C6.68802 13.958 6.87482 13.772 6.875 13.542C6.875 13.3119 6.68813 13.125 6.45801 13.125ZM4.16699 2.29199C3.13146 2.29199 2.29199 3.13146 2.29199 4.16699V8.95801H16.875V4.16699C16.875 3.13146 16.0355 2.29199 15 2.29199H4.16699ZM6.45801 3.95801C7.37848 3.95801 8.125 4.70453 8.125 5.625C8.125 6.54547 7.37848 7.29199 6.45801 7.29199C5.53768 7.29182 4.79199 6.54537 4.79199 5.625C4.79199 4.70463 5.53768 3.95818 6.45801 3.95801ZM6.45801 5.20801C6.22804 5.20818 6.04199 5.39499 6.04199 5.625C6.04199 5.85501 6.22804 6.04182 6.45801 6.04199C6.68813 6.04199 6.875 5.85512 6.875 5.625C6.875 5.39488 6.68813 5.20801 6.45801 5.20801ZM13.75 4.79199C14.0952 4.79199 14.375 5.07181 14.375 5.41699C14.3748 5.76202 14.0951 6.04199 13.75 6.04199H10.417C10.0719 6.04199 9.79217 5.76202 9.79199 5.41699C9.79199 5.07181 10.0718 4.79199 10.417 4.79199H13.75Z" fill="#00B48D" />
                                            </svg>

                                            <span className="text-sm font-normal  text-secondary-dark">
                                                {t("Get Data")}
                                            </span>
                                        </Button>
                                    </div>
                                </div>

                                {/* التحذير على الموبايل فقط */}
                                <div className="flex items-start gap-2 justify-center lg:hidden">
                                    <svg
                                        width="27"
                                        height="26"
                                        viewBox="0 0 27 26"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mx-auto sm:mx-0"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M13.5 6.00001C14.0523 6.00001 14.5 6.44772 14.5 7.00001V14C14.5 14.5523 14.0523 15 13.5 15C12.9477 15 12.5 14.5523 12.5 14V7.00001C12.5 6.44772 12.9477 6.00001 13.5 6.00001Z"
                                            fill="#D92D20"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M18.061 6.07754e-06C18.3217 -0.000638487 18.5799 0.0499933 18.8211 0.149023C19.0628 0.248312 19.2826 0.394305 19.4679 0.578651L19.4696 0.580397L25.9214 7.03215C26.1057 7.21741 26.2517 7.4372 26.351 7.67895C26.45 7.92012 26.5007 8.17842 26.5 8.43912L26.5 8.44101V8.43751V8.43912V17.5269C26.5 18.0574 26.2893 18.5661 25.9142 18.9411L19.4411 25.4142C19.0661 25.7893 18.5574 26 18.0269 26H8.91421C8.38378 26 7.87507 25.7893 7.5 25.4142L1.08579 19C0.710714 18.6249 0.5 18.1162 0.5 17.5858V8.36829C0.5 7.83418 0.713633 7.32227 1.0933 6.9466L7.52941 0.578321C7.90386 0.207822 8.40935 6.07754e-06 8.93611 6.07754e-06H18.061ZM18.0608 2.00001L24.5 8.43922V17.5269L18.0269 24H8.91421L2.5 17.5858V8.36829L8.93611 2.00001H18.0608Z"
                                            fill="#D92D20"
                                        />
                                        <path
                                            d="M13.5 20C14.3284 20 15 19.3284 15 18.5C15 17.6716 14.3284 17 13.5 17C12.6716 17 12 17.6716 12 18.5C12 19.3284 12.6716 20 13.5 20Z"
                                            fill="#D92D20"
                                        />
                                    </svg>
                                    <h1 className="text-[clamp(14px,2vw,16px)]  text-center font-semibold text-red-700 break-words">
                                        {t("Card Number is incorrect or not registered with insurance")}.
                                    </h1>
                                </div>
                            </CardContent>
                        </Card>




















                        {showDefaultValues && (
                            <ReusableCollapsible
                                title={t("Insurance Info")}
                                initiallyOpen={isOpen.Personal}
                                dir={local === 'ar' ? 'rtl' : 'ltr'}
                                onOpenChange={(open) => handleToggle("Personal", open)}
                                content={
                                    <div
                                        className="
    flex flex-col lg:flex-row w-full rounded-2xl 
    gap-x-4 sm:gap-x-8 md:gap-x-16 lg:gap-x-[126px] 
    h-full pb-4
  "
                                        dir={local === 'ar' ? 'rtl' : 'ltr'}
                                    >
                                        {/* العمود الأول */}
                                        <div className="grid gap-y-[30px] w-full max-w-full">
                                            <div className="flex flex-col sm:flex-row gap-x-[32px] w-full max-w-[500px]">
                                                <h1 className="w-[150px] shrink-0 text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">
                                                    {t("Member Number")}:
                                                </h1>
                                                <p className="flex-1 text-text-primary font-normal text-[14px] break-words whitespace-normal">
                                                    36884674
                                                </p>
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-x-[32px] w-full max-w-[500px]">
                                                <h1 className="w-[150px] shrink-0 text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">
                                                    {t("Insurance Company")}:
                                                </h1>
                                                <p className="flex-1 text-text-primary font-normal text-[14px] break-words whitespace-normal">
                                                    BUPA Arabia for Cooperative Insurance شركة بوبا العربية للتأمين
                                                </p>
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-x-[32px] w-full max-w-[500px]">
                                                <h1 className="w-[150px] shrink-0 text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">
                                                    {t("Group Number")}:
                                                </h1>
                                                <p className="flex-1 text-text-primary font-normal text-[14px] break-words whitespace-normal">
                                                    12345678
                                                </p>
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-x-[32px] w-full max-w-[500px]">
                                                <h1 className="w-[150px] shrink-0 text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">
                                                    {t("Policy ID")}:
                                                </h1>
                                                <p className="flex-1 text-text-primary font-normal text-[14px] break-words whitespace-normal">
                                                    513029001
                                                </p>
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-x-[32px] w-full max-w-[500px]">
                                                <h1 className="w-[150px] shrink-0 text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">
                                                    {t("Co-payment")}:
                                                </h1>
                                                <p className="flex-1 text-text-primary font-normal text-[14px] break-words whitespace-normal">
                                                    % 20.00
                                                </p>
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-x-[32px] w-full max-w-[500px]">
                                                <h1 className="w-[150px] shrink-0 text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">
                                                    {t("Coverage Start Date")}:
                                                </h1>
                                                <p className="flex-1 text-text-primary font-normal text-[14px] break-words whitespace-normal">
                                                    Nov 20, 2026
                                                </p>
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-x-[32px] w-full max-w-[500px]">
                                                <h1 className="w-[150px] shrink-0 text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">
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
                                                <h1 className="w-[150px] shrink-0 text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">
                                                    {t("Member Type")}:
                                                </h1>
                                                <p className="flex-1 text-text-primary font-normal text-[14px] break-words whitespace-normal">
                                                    Main
                                                </p>
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-x-[32px] w-full max-w-[500px]">
                                                <h1 className="w-[150px] shrink-0 text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">
                                                    {t("Provider Network")}:
                                                </h1>
                                                <p className="flex-1 text-text-primary font-normal text-[14px] break-words whitespace-normal">
                                                    300186
                                                </p>
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-x-[32px] w-full max-w-[500px]">
                                                <h1 className="w-[150px] shrink-0 text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">
                                                    {t("Class")}:
                                                </h1>
                                                <p className="flex-1 text-text-primary font-normal text-[14px] break-words whitespace-normal">
                                                    essential 1.0
                                                </p>
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-x-[32px] w-full max-w-[500px]">
                                                <h1 className="w-[150px] shrink-0 text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">
                                                    {t("Coverage Limit")}:
                                                </h1>
                                                <p className="flex-1 text-text-primary font-normal text-[14px] break-words whitespace-normal">
                                                    75.00
                                                </p>
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-x-[32px] w-full max-w-[500px]">
                                                <h1 className="w-[150px] shrink-0 text-text-primary font-lato font-semibold text-[clamp(14px,2vw,16px)] ">
                                                    {t("Coverage End Date")}:
                                                </h1>
                                                <p className="flex-1 text-text-primary font-normal text-[14px] break-words whitespace-normal">
                                                    Nov 20, 2026
                                                </p>
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
                                <div className="relative w-full h-full pb-4 rounded-2x">
                                    <div className="flex flex-col ">
                                        <div className=" flex gap-x-[27px]  flex-wrap  " >
                                            {/* Phone Number Field */}


                                            <div className=" w-full   sm:w-[520px] gap-y-2 rounded-md py-1">
                                                {/* Label + Input */} <div className="flex  items-start  flex-col  sm:flex-row  "> {/* Label + Icon */} <div className="flex items-center text-center mt-3  pb-9 gap-x-2">
                                                    <div className="text-text-primary"> <svg className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.77089 1.79165C4.74396 1.78995 4.69757 1.79131 4.62528 1.80353C3.77857 1.94663 3.00486 2.37648 2.43547 3.02333C1.97218 3.54965 1.66854 4.19192 1.55287 4.87525C1.48516 5.27528 1.49216 5.71071 1.52066 6.19936C1.69143 9.12694 2.92996 11.9003 5.01501 13.9853C7.18212 16.1525 10.0928 17.4051 13.1473 17.4949C13.5053 17.5054 13.8283 17.4977 14.1251 17.4475C14.8084 17.3318 15.4507 17.0282 15.977 16.5649C16.6598 15.9639 17.1008 15.1353 17.218 14.2335L17.2168 14.233L17.2168 14.2329L12.8295 12.3487L12.8294 12.3487L12.8294 12.3487L10.4887 13.9123C10.4881 13.9127 10.4874 13.9132 10.4868 13.9136C10.2713 14.0586 10.0219 14.1451 9.76298 14.1648C9.50325 14.1845 9.24287 14.1363 9.00745 14.0248L9.00328 14.0228C7.25484 13.1817 5.84277 11.7732 4.99715 10.0269L4.99564 10.0238L4.99565 10.0238C4.88489 9.79239 4.83535 9.5364 4.85176 9.28035C4.86817 9.0243 4.94999 8.77673 5.0894 8.56133L5.09234 8.55678L5.09236 8.55679L6.65297 6.18316L6.65155 6.17989L6.65156 6.17988L4.77089 1.79165ZM17.2189 14.2264L17.2189 14.2266L17.2189 14.2264ZM4.37532 0.324505C4.70725 0.268408 5.26379 0.236222 5.73387 0.632745C5.91326 0.784063 6.05538 0.976462 6.14718 1.19512L8.02884 5.58566C8.02911 5.58629 8.02938 5.58692 8.02965 5.58755C8.12707 5.81269 8.16779 6.05829 8.14822 6.30284C8.1286 6.54807 8.04897 6.78472 7.91634 6.99191L7.9114 6.99963L7.91135 6.9996L6.3487 9.37632C7.04612 10.8147 8.20932 11.9751 9.6494 12.6691L9.65244 12.667L9.65244 12.667L11.9944 11.1026C12.2022 10.9623 12.4421 10.8767 12.6918 10.8537C12.9415 10.8307 13.193 10.871 13.423 10.9711C13.4239 10.9715 13.4249 10.9719 13.4258 10.9723L17.8056 12.8533C18.1054 12.9793 18.3558 13.1998 18.5186 13.4813C18.6822 13.7643 18.7483 14.0931 18.7067 14.4173C18.5445 15.6835 17.9264 16.8473 16.9681 17.6908C16.2313 18.3395 15.3321 18.7645 14.3755 18.9264C13.9356 19.0009 13.4989 19.0059 13.1033 18.9942C9.66683 18.8932 6.39236 17.484 3.95435 15.046C1.60865 12.7003 0.215328 9.58029 0.0232104 6.28671C-0.00635157 5.77991 -0.0237603 5.20192 0.0739086 4.62491C0.235831 3.6683 0.660897 2.76911 1.30954 2.03223C2.1067 1.12662 3.18988 0.524849 4.37532 0.324505Z" fill="CurrentColor" />
                                                    </svg>
                                                    </div>
                                                    <div className="text-text-primary text-start font-semibold sm:w-[clamp(120px,10vw,160px)] text-[clamp(16px,1.1vw,16px)]">
                                                        {t("Phone Number")}: </div>
                                                </div> {/* Phone Input */}
                                                    <div className="relative w-full ">




                                                        <PhoneInputCustom value={formValues.emergencyNumber}
                                                            onChange={(val) =>
                                                                setFormValues((prev) => ({ ...prev, phoneNumber: val }))}
                                                            placeholder={formFields(t).emergencyNumber.placeholder}
                                                        />  <div className="flex text-secondary-dark justify-end p-2 max-w-[360px]">
                                                            <PlusIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 cursor-pointer" /> </div> </div> </div>
                                                {/* Plus Icon */}


                                            </div>



                                            <div className="flex flex-col sm:flex-row items-start sm:items-start w-full   sm:w-[520px]   gap-y-6">
                                                {/* Label + Icon */}
                                                <div className="flex items-center gap-2 pt-4 sm:w-[136px] h-6 flex-shrink-0">
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
                                                    <span className=" text-text-primary font-semibold text-[clamp(16px,1.1vw,16px)] leading-6">
                                                        {t("Email")}:
                                                    </span>
                                                </div>

                                                {/* Input */}
                                                <input
                                                    type="email"
                                                    placeholder={formFields(t).email.placeholder}
                                                    value={formValues.email}
                                                    onChange={(e) => handleInputChangeV("email", e.target.value)}
                                                    className=" w-[min(100%,360px)] rounded-[4px]  h-10 sm:h-10 md:h-12  bg-background-secondary placeholder:text-[clamp(14px,1.1vw,16px) placeholder:font-normal placeholder:text-text-secondary items-start  border border-border-light  shadow-shadow-xs px-3"
                                                />
                                            </div>


                                        </div>




                                        <div className="flex flex-col md:flex-row md:items-start lg:items-start mt-4  ">
                                            <div className="flex w-[186px] items-center gap-2 mt-2">
                                                <div className="  text-text-primary ">     <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.5 7.5C10.5 7.20333 10.588 6.91332 10.7528 6.66665C10.9176 6.41997 11.1519 6.22771 11.426 6.11418C11.7001 6.00065 12.0017 5.97094 12.2926 6.02882C12.5836 6.0867 12.8509 6.22956 13.0607 6.43934C13.2704 6.64912 13.4133 6.91639 13.4712 7.20736C13.5291 7.49834 13.4994 7.79994 13.3858 8.07403C13.2723 8.34811 13.08 8.58238 12.8334 8.7472C12.5867 8.91203 12.2967 9 12 9C11.6022 9 11.2206 8.84196 10.9393 8.56066C10.658 8.27936 10.5 7.89782 10.5 7.5ZM6 7.5C6 5.9087 6.63214 4.38258 7.75736 3.25736C8.88258 2.13214 10.4087 1.5 12 1.5C13.5913 1.5 15.1174 2.13214 16.2426 3.25736C17.3679 4.38258 18 5.9087 18 7.5C18 13.1203 12.6019 16.2694 12.375 16.4016C12.2617 16.4663 12.1334 16.5004 12.0028 16.5004C11.8723 16.5004 11.744 16.4663 11.6306 16.4016C11.3981 16.2694 6 13.125 6 7.5ZM7.5 7.5C7.5 11.4563 10.86 14.0822 12 14.8594C13.1391 14.0831 16.5 11.4563 16.5 7.5C16.5 6.30653 16.0259 5.16193 15.182 4.31802C14.3381 3.47411 13.1935 3 12 3C10.8065 3 9.66193 3.47411 8.81802 4.31802C7.97411 5.16193 7.5 6.30653 7.5 7.5ZM19.0097 13.8403C18.8251 13.7793 18.624 13.7924 18.4489 13.8768C18.2738 13.9612 18.1382 14.1102 18.0709 14.2926C18.0035 14.475 18.0096 14.6764 18.0879 14.8543C18.1661 15.0323 18.3104 15.1729 18.4903 15.2466C20.0381 15.8194 21 16.5863 21 17.25C21 18.5025 17.5763 20.25 12 20.25C6.42375 20.25 3 18.5025 3 17.25C3 16.5863 3.96187 15.8194 5.50969 15.2475C5.6896 15.1739 5.8339 15.0332 5.91215 14.8553C5.99039 14.6773 5.99648 14.4759 5.92913 14.2935C5.86178 14.1112 5.72624 13.9621 5.5511 13.8777C5.37596 13.7933 5.17491 13.7803 4.99031 13.8412C2.73937 14.6709 1.5 15.8822 1.5 17.25C1.5 20.1731 6.91031 21.75 12 21.75C17.0897 21.75 22.5 20.1731 22.5 17.25C22.5 15.8822 21.2606 14.6709 19.0097 13.8403Z" fill="currentColor" />
                                                </svg>
                                                </div>

                                                <div className="min-w-[140px] text-text-primary font-semibold  text-[clamp(14px,1.1vw,16px)]">
                                                    {t("Physical Address")}:
                                                </div >
                                            </div>
                                            <div className="grid gap-4 w-full grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
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
                                                        className="w-[min(100%,172px)] h-10 sm:h-10 md:h-12 bg-background-secondary placeholder:text-text-secondary placeholder:font-normal placeholder:text-[clamp(12px,1.1vw,14px)] font-lato border border-border-light  shadow-shadow-xs px-3"
                                                    />
                                                ))}
                                            </div>
                                        </div>








                                    </div>

                                    {/* Emergency Section */}
                                    <h3 className="font-lato font-semibold mt-6 mb-6 text-sm leading-[125%] tracking-[0] text-secondary-dark">
                                        {t('Emergency Contact Info')}
                                    </h3>
                                    <div className="flex flex-col gap-[16px]">
                                        <div className="grid grid-cols-1  lg:grid-cols-2  gap-[22px]">
                                            {/* Emergency Contact */}
                                            <div className="flex flex-col sm:flex-row sm:items-center    gap-y-2 gap-x-8">
                                                <Label className="sm:w-[clamp(88px,10vw,162px)] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                                                    {t("Emergency Contact")}
                                                </Label>
                                                <Input
                                                    value={formValues.emergencyContact}
                                                    onChange={(e) => handleInputChangeV("emergencyContact", e.target.value)}
                                                    placeholder={formFields(t).emergencyContact.placeholder}
                                                    className="w-[min(100%,360px)] h-10 sm:h-10 md:h-12  bg-background-secondary placeholder:text-text-secondary placeholder:font-normal placeholder:text-[clamp(12px,1.1vw,14px)] border border-border-light  shadow-shadow-xs px-3"
                                                />
                                            </div>


                                            <div className="flex flex-col sm:flex-row sm:items-center    gap-y-2 gap-x-8">
                                                <Label className="sm:w-[clamp(88px,10vw,162px)] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                                                    {t("Relationship")}
                                                </Label>
                                                <Input
                                                    value={formValues.relationship}
                                                    onChange={(e) => handleInputChangeV("relationship", e.target.value)}
                                                    placeholder={formFields(t).relationship.placeholder}
                                                    className=" w-[min(100%,360px)] h-10 sm:h-10 md:h-12 text-[clamp(14px,1.1vw,16px)] placeholder:text-text-secondary placeholder:font-normal placeholder:text-[clamp(12px,1.1vw,14px)] bg-background-secondary border border-border-light rounded-[4px] font-normal leading-[125%] tracking-[0] text-text-secondary"
                                                />
                                            </div>


                                        </div>



                                        <div className="flex flex-col sm:flex-row sm:items-center   gap-y-2 gap-x-8">
                                            <Label className="sm:w-[clamp(88px,10vw,162px)] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                                                {t("Emergency Number")}
                                            </Label>
                                            <div className="w-[min(100%,360px)] h-10 sm:h-10 md:h-12  text-[clamp(14px,1.1vw,16px)] placeholder:text-text-secondary placeholder:font-normal placeholder:text-[clamp(12px,1.1vw,14px)] !bg-background-secondary !rounded-[4px] overflow-hidden  text-text-primary ">
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
                                <div className="w-full h-full pb-4" dir={local === "ar" ? "rtl" : "ltr"}>
                                    {/* ---------- DESKTOP: keep original layout exactly as before (visible on lg+) ---------- */}
                                    <div className="hidden lg:flex w-full">
                                        <div className="flex flex-col w-full">
                                            {/* --- نسخة اللابتوب معدلة لتكون ريسبونسف مع max-w --- */}
                                            <div className="flex items-center w-full justify-between ">

                                                {/* Title Field */}
                                                <div className="w-full max-w-[358px]">
                                                    <div className="flex items-center gap-[24px]">
                                                        <Label className="font-lato font-semibold text-base leading-[124%] text-text-primary">
                                                            {personalDocumentFields(t).title.label}
                                                        </Label>
                                                        <Input
                                                            placeholder="Enter Your Title"
                                                            className=" w-full max-w-[280px] h-10 sm:h-10 md:h-12 bg-background-secondary placeholder:text-text-secondary placeholder:font-normal placeholder:text-[clamp(12px,1.1vw,14px)]  border border-border-light rounded-[4px] font-lato font-semibold text-[clamp(12px,2vw,14px)] leading-[125%] text-text-primary"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Upload Field */}
                                                <div className="w-full max-w-[367px]">
                                                    <div className="flex items-center">
                                                        <Label className="text-text-primary w-28 font-semibold text-base">
                                                            {personalDocumentFields(t).uploadFile.label}
                                                        </Label>
                                                        <FileUpload
                                                            amount="Max 2MB"
                                                            width="w-full max-w-[280px] "
                                                            label={
                                                                <Trans i18nKey="uploadFile.dragLabel">
                                                                    <span className="text-text-accent text-[clamp(10px,2vw,12px)]" />
                                                                    <span className="text-text-primary text-[clamp(10px,2vw,12px)]" />
                                                                </Trans>
                                                            }
                                                        />
                                                    </div>
                                                </div>

                                                {/* Date Picker */}
                                                <div className="flex-1 max-w-[347px]">
                                                    <div className="flex items-center gap-[24px]">
                                                        <DatePicker label="Date" width="w-full max-w-[280px]" labelWidth="w-[80px]" />
                                                    </div>
                                                </div>

                                                {/* Minus Icon */}
                                                <MinusIcon className="w-8 h-8 text-secondary-dark flex-none shrink-0" />
                                            </div>

                                            {/* Plus Icon */}
                                            <div className="flex w-full justify-end text-secondary-dark mt-2">
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
                                                        className="w-[min(100%,360px)] h-10 bg-background-secondary border border-border-light rounded-[6px]  font-normal text-sm leading-[125%] text-text-primary"
                                                    />
                                                </div>


                                                {/* Upload File */}
                                                <div className="flex flex-col md:flex-row gap-x-2 items-start ">
                                                    <Label className="flex flex-col md:flex-row  font-lato font-semibold text-[clamp(14px,2vw,16px)]  text-text-primary">
                                                        {personalDocumentFields(t).uploadFile.label}
                                                    </Label>
                                                    <FileUpload
                                                        amount="Max 2MB"


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

                                                    <DatePicker label={t("Date")} width="w-full" />
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
                            }
                        />






                        <div className="flex gap-[14px]  justify-end p-3 items-end text-end pb-2 sm:pb-3 md:pb-3 lg:pb-4 " dir={local === 'ar' ? 'rtl' : 'ltr'}
                        >
                            <button className="     w-[80px] h-[30px]       /* الموبايل الافتراضي */
    sm:w-[100px] sm:h-[26px] 
    md:w-[180px] md:h-[38px]
    lg:w-[200px] lg:h-[40px] 
 
      rounded-[20px] border border-border-light bg-surface-primary  font-lato font-medium text-sm leading-[100%] tracking-[0] text-text-primary">
                                {t("Cancel")}
                            </button>
                            <button className="  w-[80px] h-[30px]       /* الموبايل الافتراضي */
    sm:w-[100px] sm:h-[24px] 
    md:w-[160px] md:h-[36px]
    lg:w-[200px] lg:h-[40px]  rounded-[20px] bg-secondary-dark font-lato font-medium text-sm leading-[100%] tracking-[0] text-surface-primary">
                                {t("Save")}
                            </button>

                        </div>
                    </CardContent>

                </Card>
            </div></div>

    );
}