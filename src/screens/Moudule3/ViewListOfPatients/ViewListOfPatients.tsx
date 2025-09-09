import { useState } from "react";
import { BellIcon, SearchIcon, Trash2Icon } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { useLanguage } from "../../../lib/LanguageContext";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "../../../components/ui/pagination";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const userData = [
  {
    id: "001",
    PatientID: "US-001",
    PatientName: "Dr. Ahmed Hassan",
    Age: "45",
    LastVisitDate: "2023-01-01",
    Gender:"Male",
    InsuranceCompany:"Al hasan company",
    InsuranceStatus:"Expired",
    status: "Active",
  },
    {
    id: "001",
    PatientID: "US-001",
    PatientName: "Dr. Ahmed Hassan",
    Age: "45",
    LastVisitDate: "2023-01-01",
    Gender:"Male",
    InsuranceCompany:"Al hasan company",
    InsuranceStatus:"Expired",
    status: "Active",
  },
    {
    id: "001",
    PatientID: "US-001",
    PatientName: "Dr. Ahmed Hassan",
    Age: "45",
    LastVisitDate: "2023-01-01",
    Gender:"Male",
    InsuranceCompany:"Al hasan company",
    InsuranceStatus:"Expired",
    status: "Active",
  },
    {
    id: "001",
    PatientID: "US-001",
    PatientName: "Dr. Ahmed Hassan",
    Age: "45",
    LastVisitDate: "2023-01-01",
    Gender:"Male",
    InsuranceCompany:"Al hasan company",
    InsuranceStatus:"Expired",
    status: "Active",
  },
    {
    id: "001",
    PatientID: "US-001",
    PatientName: "Dr. Ahmed Hassan",
    Age: "45",
    LastVisitDate: "2023-01-01",
    Gender:"Male",
    InsuranceCompany:"Al hasan company",
    InsuranceStatus:"Expired",
    status: "Active",
  },
    {
    id: "001",
    PatientID: "US-001",
    PatientName: "Dr. Ahmed Hassan",
    Age: "45",
    LastVisitDate: "2023-01-01",
    Gender:"Male",
    InsuranceCompany:"Al hasan company",
    InsuranceStatus:"Expired",
    status: "Active",
  },  {
    id: "001",
    PatientID: "US-001",
    PatientName: "Dr. Ahmed Hassan",
    Age: "45",
    LastVisitDate: "2023-01-01",
    Gender:"Male",
    InsuranceCompany:"Al hasan company",
    InsuranceStatus:"Expired",
    status: "Active",
  },
    {
    id: "001",
    PatientID: "US-001",
    PatientName: "Dr. Ahmed Hassan",
    Age: "45",
    LastVisitDate: "2023-01-01",
    Gender:"Male",
    InsuranceCompany:"Al hasan company",
    InsuranceStatus:"Expired",
    status: "Active",
  },
    {
    id: "001",
    PatientID: "US-001",
    PatientName: "Dr. Ahmed Hassan",
    Age: "45",
    LastVisitDate: "2023-01-01",
    Gender:"Male",
    InsuranceCompany:"Al hasan company",
    InsuranceStatus:"Expired",
    status: "Active",
  },
    {
    id: "001",
    PatientID: "US-001",
    PatientName: "Dr. Ahmed Hassan",
    Age: "45",
    LastVisitDate: "2023-01-01",
    Gender:"Male",
    InsuranceCompany:"Al hasan company",
    InsuranceStatus:"Expired",
    status: "Active",
  },
    {
    id: "001",
    PatientID: "US-001",
    PatientName: "Dr. Ahmed Hassan",
    Age: "45",
    LastVisitDate: "2023-01-01",
    Gender:"Male",
    InsuranceCompany:"Al hasan company",
    InsuranceStatus:"Expired",
    status: "Active",
  },
    {
    id: "001",
    PatientID: "US-001",
    PatientName: "Dr. Ahmed Hassan",
    Age: "45",
    LastVisitDate: "2023-01-01",
    Gender:"Male",
    InsuranceCompany:"Al hasan company",
    InsuranceStatus:"Expired",
    status: "Active",
  },
      {
    id: "001",
    PatientID: "US-001",
    PatientName: "Dr. Ahmed Hassan",
    Age: "45",
    LastVisitDate: "2023-01-01",
    Gender:"Male",
    InsuranceCompany:"Al hasan company",
    InsuranceStatus:"Expired",
    status: "Active",
  },
      {
    id: "001",
    PatientID: "US-001",
    PatientName: "Dr. Ahmed Hassan",
    Age: "45",
    LastVisitDate: "2023-01-01",
    Gender:"Male",
    InsuranceCompany:"Al hasan company",
    InsuranceStatus:"Expired",
    status: "Active",
  },
 
];

export const ViewListOfPatients = (): JSX.Element => {
  const { local, handleLanguageClick } = useLanguage();
  const [status, setStatus] = useState("status");
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    i18n.changeLanguage(local);
  }, [local, i18n]);

  return (
    <div className="flex flex-col w-full overflow-hidden h-full items-start gap-4 py-4 pl-0 pr-5">
      {/* الهيدر الرئيسي */}
      <header className="flex h-[66px] justify-between pl-1 pr-0 py-0 w-full items-center">
        <div className="flex flex-col w-[340px] items-start gap-1.5 px-0 py-0.5">
          <h1 className="font-lato font-semibold text-[22px] leading-[116%] tracking-[0] text-text-primary">
            {t("Patients Management")}
          </h1>
          <div className="font-semibold text-[14px]">
            <h1>{t("Patients List")}</h1>
          </div>
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
              className={`p-2.5 ${
                local === "ar" ? "bg-secondary-dark" : "bg-secondary-light"
              } rounded-[20px] h-auto`}
              onClick={handleLanguageClick}
            >
              <TranslateIcon className="w-5 h-5" />
            </Button>
          </div>

          <div className="w-10 h-[17.5px] relative"></div>

          <div className="items-center gap-3 inline-flex ">
            <div className="inline-flex items-center w-[40px] h-[40px] gap-2.5 bg-app-primary rounded-3xl" />
            <div className="flex-col items-start gap-1 inline-flex ">
              <div className="font-lato font-bold text-base leading-[124%] tracking-[0] text-text-primary">
                Anahera Jones
              </div>
              <div className="font-lato font-regular text-xs leading-[124%] tracking-[0] text-border-medium">
                Admin
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* البطاقة الرئيسية */}
      <Card className="flex flex-col h-full items-start gap-5 p-[20px] pr-0 relative w-full rounded-2xl overflow-hidden bg-background-secondary">
        <CardContent className="w-full h-full flex flex-col">
          {/* شريط البحث والتصفية - مثبت في الأعلى */}



        <div className="flex justify-between w-full h-[40px] items-center text-center ">
                
       
             

                <div className="inline-flex items-center gap-2.5 ">
                  <form className="relative flex  items-center">
                    <SearchIcon className="w-3.5 h-3.5 absolute top-[13px] left-[8px]" />
                    <input
                      type="search"
                      placeholder={t("Search for a specialities")}
                      className="placeholder:text-[11px] text-[11px] bg-background-primary pl-[30px] py-[8px] rounded-[16px] w-[224px] h-[40px] border-0 px-4 outline-none focus:border-0"
                    />
                  </form>

             

                  <Select
                    value={status}
                    onValueChange={(value) => setStatus(value)}
                  >
                    <SelectTrigger className="inline-flex items-center gap-0.5 pl-2.5 pr-2 py-1.5 bg-secondary-light rounded-[20px] border-0 h-auto w-fit">
                      <SelectValue>
                        <span className="font-lato font-medium text-sm leading-[100%] tracking-[0] text-text-primary">
                          {t(`status.${status}`)}
                        </span>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="status" disabled>
                        {t("status.status")}
                      </SelectItem>
                      <SelectItem value="active">
                        {t("status.active")}
                      </SelectItem>
                      <SelectItem value="inactive">
                        {t("status.inactive")}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
           <div className="inline-flex items-center gap-2.5 ">
                 <div className="p-6">

         <Button className ="inline-flex items-center gap-1 px-2.5 py-1.5 bg-secondary-dark rounded-[20px] h-[40px] w-[146px]">
                      <div className="flex items-center justify-center"> <div className="text-text-inverse"> <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.625 5C0.625 4.75838 0.78823 4.5625 0.989583 4.5625H9.01042C9.21177 4.5625 9.375 4.75838 9.375 5C9.375 5.24162 9.21177 5.4375 9.01042 5.4375H0.989583C0.78823 5.4375 0.625 5.24162 0.625 5Z" fill="CurrentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 0.625C5.24162 0.625 5.4375 0.78823 5.4375 0.989583V9.01042C5.4375 9.21177 5.24162 9.375 5 9.375C4.75838 9.375 4.5625 9.21177 4.5625 9.01042V0.989583C4.5625 0.78823 4.75838 0.625 5 0.625Z" fill="CurrentColor"/>
</svg></div>
<h1 className="text-[11px] font-bold text-text-inverse">{t("Add New Patient")}</h1>
</div>
                      
                    </Button>

   
    </div>
                </div>
              </div>
          {/* الجدول مع التمرير فقط */}
          <div className="flex flex-col flex-grow rounded-lg items-start gap-5 pt-4 pr-[10px] relative w-full overflow-hidden" dir={local === 'ar' ? 'rtl' : 'ltr'} >
            <div className="w-full overflow-y-auto flex-grow rounded-lg" dir={local === 'ar' ? 'rtl' : 'ltr'} >
              <table className="table-fixed w-full rounded-lg text-center border-collapse" dir={local === 'ar' ? 'rtl' : 'ltr'} >
                <thead>
                  <tr className="h-[56px] bg-background-primary border-b border-border-light sticky top-0">
                    <td className="w-[10%] font-lato font-bold text-[12px] text-text-primary">{t("No.")}</td>
                    <td className="w-[15%] font-lato font-bold text-[12px] text-text-primary">{t("Patient ID")}</td>
                    <td className="w-[15%] font-lato font-bold text-[12px] text-text-primary">{t("Patient Name")}</td>
                    <td className="w-[15%] font-lato font-bold text-[12px] text-text-primary">{t("Age")}</td>
                    <td className="w-[15%] font-lato font-bold text-[12px] text-text-primary">{t("Last Visit Date")}</td>
                    <td className="w-[15%] font-lato font-bold text-[12px] text-text-primary">{t("Gender")}</td>
                    <td className="w-[15%] font-lato font-bold text-[12px] text-text-primary">{t("Insurance Company")}</td>
                    <td className="w-[15%] font-lato font-bold text-[12px] text-text-primary">{t("Insurance Status")}</td>
                    <td className="w-[15%] font-lato font-bold text-[12px] text-text-primary">{t("Status")}</td>
                    <td className="w-[15%] font-lato font-bold text-[12px] text-text-primary">{t("Action")}</td>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((user, index) => (
                    <tr key={index} className="h-[78px] bg-background-primary hover:bg-secondary-light border-b border-border-light">
                      <td className="w-[10%] align-middle font-lato text-[12px] text-text-primary">{user.id}</td>
                      <td className="w-[15%] align-middle font-lato text-[12px] text-text-primary">{user.PatientID}</td>
                      <td className="w-[15%] align-middle font-lato text-[12px] text-text-primary">
                        {user.PatientName}
                      </td>
                      <td className="w-[15%] align-middle font-lato text-[12px] text-text-primary">{user.Age}</td>
                      <td className="w-[15%] align-middle font-lato text-[12px] text-text-primary">{user.LastVisitDate}</td>
                      <td className="w-[15%] align-middle font-lato text-[12px] text-text-primary">{user.Gender}</td>
                      <td className="w-[15%] align-middle font-lato text-[12px] text-text-primary">{user.InsuranceCompany}</td>
                      <td className="w-[15%]  align-middle font-lato text-[12px] text-text-primary">{user.InsuranceStatus}</td>
                      <td className="w-[15%] align-middle font-lato text-[12px] text-text-primary">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          user.status === "Active" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-red-100 text-red-800"
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="w-[15%] align-middle">
                        <div className="inline-flex flex-col justify-center gap-1 items-start">
                          <div className="inline-flex items-center justify-center gap-1">
                            <Link to="/EditUserDEtails">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="inline-flex items-center justify-center gap-2 p-2.5 rounded-lg overflow-hidden h-auto"
                              >
                                <img
                                  className="w-[15px] h-[15px] text-on-surface-primary"
                                  alt="edit"
                                  src="./edit-01.svg"
                                />
                              </Button>
                            </Link>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="inline-flex items-center justify-center gap-2 p-2.5 rounded-lg overflow-hidden h-auto"
                            >
                              <Trash2Icon className="w-[20px] h-[20px] text-on-surface-primary" />
                            </Button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* التذييل (أرقام الصفحات) - مثبت في الأسفل */}
          <div className="flex h-[66px] justify-between pl-1 pr-0 py-0 w-full items-center mt-4">
            <div className="flex items-center gap-2.5">
              <span className="font-title-11px-regular font-[number:var(--title-11px-regular-font-weight)] text-on-surface-secondary text-[length:var(--title-11px-regular-font-size)] tracking-[var(--title-11px-regular-letter-spacing)] leading-[var(--title-11px-regular-line-height)] [font-style:var(--title-11px-regular-font-style)]">
                {t("Showing")}
              </span>
              <Select defaultValue="10">
                <SelectTrigger className="w-[60px] h-[30px] bg-secondary-light rounded-[20px] border-0 px-2 py-1.5">
                  <SelectValue placeholder="10" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
              <span className="font-title-11px-regular font-[number:var(--title-11px-regular-font-weight)] text-on-surface-secondary text-[length:var(--title-11px-regular-font-size)] tracking-[var(--title-11px-regular-letter-spacing)] leading-[var(--title-11px-regular-line-height)] [font-style:var(--title-11px-regular-font-style)]">
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
                    {local === "en" ? (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="black" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" fill="CurrentColor" />
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
        </CardContent>
      </Card>
    </div>
  );
};