import { BellIcon, PlusIcon, SearchIcon, Trash2Icon } from "lucide-react";
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
import { SideBar } from "../../CommonComponents/SideBarPlan2";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../components/ui/pagination";
import Toggle from "../../../components/ui/SwitchToggel";
import { useState } from "react";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import SwitchWithLabel from "../../CommonComponents/SwitchLabel";

import { Badge } from "../../../components/ui/badge";
import AddNewSpecialities from "../../CommonComponents/AddNewSpecialities";
interface Speciality {
  id: string;
  Spid: string;
  SpecialitiesName: string;
  NumberofAssignedDoctors: string;
  Lastupdate: string;
  status: string;
}

const userData = (t: (key: string) => string): Speciality[] => [
  {
    id: "001",
    Spid: "SP-001",
    SpecialitiesName: "Surgeon",
    NumberofAssignedDoctors: "5",
    Lastupdate: "May 22, 2025       23:49",
    status: t("Active"),
  },
  {
    id: "001",
    Spid: "SP-001",
    SpecialitiesName: "Surgeon",
    NumberofAssignedDoctors: "5",
    Lastupdate: "May 22, 2025       23:49",
    status: t("Active"),
  },
  {
    id: "001",
    Spid: "SP-001",
    SpecialitiesName: "Surgeon",
    NumberofAssignedDoctors: "5",
    Lastupdate: "May 22, 2025       23:49",
    status: t("Active"),
  },
  {
    id: "001",
    Spid: "SP-001",
    SpecialitiesName: "Surgeon",
    NumberofAssignedDoctors: "5",
    Lastupdate: "May 22, 2025       23:49",
    status: t("Active"),
  },
  {
    id: "001",
    Spid: "SP-001",
    SpecialitiesName: "Surgeon",
    NumberofAssignedDoctors: "5",
    Lastupdate: "May 22, 2025       23:49",
    status: t("Active"),
  },
  {
    id: "001",
    Spid: "SP-001",
    SpecialitiesName: "Surgeon",
    NumberofAssignedDoctors: "5",
    Lastupdate: "May 22, 2025       23:49",
    status: t("Active"),
  },
  {
    id: "001",
    Spid: "SP-001",
    SpecialitiesName: "Surgeon",
    NumberofAssignedDoctors: "5",
    Lastupdate: "May 22, 2025       23:49",
    status: t("Active"),
  },
  {
    id: "001",
    Spid: "SP-001",
    SpecialitiesName: "Surgeon",
    NumberofAssignedDoctors: "5",
    Lastupdate: "May 22, 2025       23:49",
    status: t("Active"),
  },
  {
    id: "001",
    Spid: "SP-001",
    SpecialitiesName: "Surgeon",
    NumberofAssignedDoctors: "5",
    Lastupdate: "May 22, 2025       23:49",
    status: t("Active"),
  },
  {
    id: "001",
    Spid: "SP-001",
    SpecialitiesName: "Surgeon",
    NumberofAssignedDoctors: "5",
    Lastupdate: "May 22, 2025       23:49",
    status: t("Active"),
  },
  {
    id: "001",
    Spid: "SP-001",
    SpecialitiesName: "Surgeon",
    NumberofAssignedDoctors: "5",
    Lastupdate: "May 22, 2025       23:49",
    status: t("Active"),
  },

  {
    id: "001",
    Spid: "SP-001",
    SpecialitiesName: "Surgeon",
    NumberofAssignedDoctors: "5",
    Lastupdate: "May 22, 2025       23:49",
    status: t("Active"),
  },
  {
    id: "001",
    Spid: "SP-001",
    SpecialitiesName: "Surgeon",
    NumberofAssignedDoctors: "5",
    Lastupdate: "May 22, 2025       23:49",
    status: t("Active"),
  },
  {
    id: "0001",
    Spid: "SP-001",
    SpecialitiesName: "Surgeon",
    NumberofAssignedDoctors: "5",
    Lastupdate: "May 22, 2025       23:49",
    status: t("Active"),
  },
];
import { Deactivate } from "../../CommonComponents/Deactivate";
import { useNavigate } from "react-router-dom";
import { Activate } from "../../CommonComponents/Activate";
import { Header } from "../../CommonComponents/Header";
import { ThemeToggle } from "../../../components/theme/ThemeSwitcher";
export const ViewListOfSpicialities = (): JSX.Element => {
  const { local, handleLanguageClick } = useLanguage();
  const [Show, setShow] = useState("show");
  const [status, setStatus] = useState("status");
  const [showModal, setShowModal] = useState(false);
  const [num, setNum] = useState("10");
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);
const [checked, setChecked] = useState<boolean>(true); // الحالة الحالية
const [showDialog, setShowDialog] = useState<boolean>(false);
const [pendingNext, setPendingNext] = useState<boolean | null>(null);
const [actionType, setActionType] = useState<"activate" | "deactivate" | null>(null);
const navigate=useNavigate();

  // عندما يضغط المستخدم على الـ Toggle
function handleToggle(next: boolean) {
  // إذا كان من Active -> Inactive
  if (checked && !next) {
    setPendingNext(next);
    setActionType("deactivate");
    setShowDialog(true);
    return;
  }

  // إذا كان من Inactive -> Active
  if (!checked && next) {
    setPendingNext(next);
    setActionType("activate");
    setShowDialog(true);
    return;
  }

  // غير هيك غيّر مباشرة
  setChecked(next);
}

function confirmDeactivate() {
  setChecked(pendingNext ?? false);
  setPendingNext(null);
  setActionType(null);
  setShowDialog(false);
}

function cancelDeactivate() {
  setPendingNext(null);
  setActionType(null);
  setShowDialog(false);
}



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

      <div className="flex flex-col w-full overflow-hidden h-full items-start gap-4  pb-4 pl-0 pr-5">

                           <Header MainTitle="Specialties" SubTitle="View list of Specialties" onOpenSidebar={onOpenSidebar}  />

 


        <Card className="flex flex-col h-screen items-start   pr-0 relative w-full rounded-2xl overflow-hidden bg-background-secondary">
          <CardContent className="w-full h-full flex flex-col  ">
            <div
              className={`w-full  ${local === "ar" ? "pl-[20px]" : "pr-[20px]"
                } `}
            >
              <div
                className="flex flex-row flex-wrap justify-between w-full mt-4 items-start sm:items-center gap-2.5"
                dir={local === 'ar' ? 'rtl' : 'ltr'}
              >
                <div className="inline-flex items-center gap-2.5 w-full sm:w-auto">
                  <form className="relative flex items-center">
                    <SearchIcon className="w-[min(100%,16px)] h-[min(100%,16px)] absolute top-[10px] left-[8px]" />
                    <input
                      type="search"
                      placeholder={t("Search for a user id, doctor name ..")}
                      className="placeholder:text-[11px] text-[11px] bg-background-primary pl-[30px] py-[8px] rounded-[16px] w-full sm:w-[150px] md:w-[200px] lg:w-[224px] border-0 outline-none"
                    />
                  </form>

                  <Select
                    dir={local === 'ar' ? 'rtl' : 'ltr'}
                    value={status}
                    onValueChange={(value) => setStatus(value)}

                  >
                    <SelectTrigger className="inline-flex items-center gap-0.5 pl-2.5 pr-2 py-1.5 bg-secondary-light rounded-[20px] border-0 h-auto w-auto">
                      <SelectValue>
                        <span className="font-lato font-lato text-[clamp(12px,2vw,14px)] text-text-primary font-lato">
                          {t(`status.${status}`)}
                        </span>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="status" disabled>
                        {t("status.status")}
                      </SelectItem>
                      <SelectItem value="active">{t("status.active")}</SelectItem>
                      <SelectItem value="inactive">{t("status.inactive")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="inline-flex items-center gap-2.5 mt-2 sm:mt-0">
                  <Button
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-secondary-dark rounded-[20px]"
                    onClick={() => setShowModal(true)}
                    dir={local === 'ar' ? 'rtl' : 'ltr'}
                  >
                    <PlusIcon className="w-[16px] h-[16px] text-background-primary" />
                    <span className="font-lato text-[clamp(11px,2vw,11px)] text-background-primary">
                      {t("Add New Specialtiy")}
                    </span>
                  </Button>

                  {showModal && <AddNewSpecialities onClose={() => setShowModal(false)} />}
                </div>
              </div>


              <div
                className="flex flex-col flex-grow rounded-lg items-start gap-2 pt-4 pr-[10px] relative w-full overflow-hidden"
                dir={local === "ar" ? "rtl" : "ltr"}
              >
                {/* حاوية سكرول أفقي */}
                <div className="w-full overflow-x-auto">
                  {/* حاوية سكرول رأسي */}
                  <div
                    className="overflow-y-auto rounded-lg"
                    style={{ height: "calc(100vh - 78px - 200px)" }}
                  >
                <table className="table-fixed w-full min-w-[700px] text-center border-collapse">
  <thead className="sticky top-0 z-10 bg-background-primary border-b border-border-light">
    <tr className="h-[56px] bg-background-primary border-b border-border-light sticky top-0 z-10">
      <th className="w-[5%] px-2 font-lato font-semibold text-[clamp(12px,2vw,12px)] leading-[130%] text-text-primary whitespace-nowrap">
        {t("No.")}
      </th>
      <th className="w-[25%] px-2 font-lato font-semibold text-[clamp(12px,2vw,12px)] leading-[130%] text-text-primary whitespace-nowrap">
        {t("Specialities Name")}
      </th>
      <th className="w-[20%] px-2 font-lato font-semibold text-[clamp(12px,2vw,12px)] leading-[130%] text-text-primary whitespace-nowrap">
        {t("Number of Assigned Doctors")}
      </th>
      <th className="w-[25%] px-2 font-lato font-semibold text-[clamp(12px,2vw,12px)] leading-[130%] text-text-primary whitespace-nowrap">
        {t("Last update (Date & Time)")}
      </th>
      <th className="w-[12.5%] px-2 font-lato font-semibold text-[clamp(12px,2vw,12px)] leading-[130%] text-text-primary whitespace-nowrap">
        {t("Status")}
      </th>
      <th className="w-[12.5%] px-2 font-lato font-semibold text-[clamp(12px,2vw,12px)] leading-[130%] text-text-primary whitespace-nowrap">
        {t("Actions")}
      </th>
    </tr>
  </thead>

  <tbody>
    {userData(t).map((user) => (
      <tr
        key={user.id}
        className="h-[78px] bg-background-primary hover:bg-secondary-light border-b border-border-light whitespace-nowrap"
        onClick={
         
              (e)=>{
                      navigate(`/ViewSpecialtiesDetails?id=${user.id}`,{state:{from:'/ViewSpecialtiesList'}})
                    }                  }
        
      >
        <td className="px-2 font-lato text-[clamp(12px,2vw,12px)]">{user.id}</td>
        <td className="px-2 font-lato text-[clamp(12px,2vw,12px)]">
          {user.SpecialitiesName}
        </td>
        <td className="px-2 font-lato text-[clamp(12px,2vw,12px)]">
          {user.NumberofAssignedDoctors}
        </td>
        <td className="px-2 font-lato text-[clamp(12px,2vw,12px)]">
          {user.Lastupdate}
        </td>
        <td className="px-2">
  <div onClick={(e) => e.stopPropagation()}>
  <Toggle checked={checked} onChange={handleToggle} />

  {showDialog && actionType === "deactivate" && (
    <Deactivate
      open={showDialog}
      onConfirm={confirmDeactivate}
      onCancel={cancelDeactivate}
    >
      <p>Inactive doctors will no longer appear in selection menus or be assignable to patients.</p>
    </Deactivate>
  )}

{showDialog && actionType === "activate" && (
  <Activate
    open={showDialog}
    onConfirm={confirmDeactivate}
    onCancel={cancelDeactivate}
  >
    <p>Active specialty will be visible in selection menus or be assignable to doctors .</p>
  </Activate>
)}
</div>

        </td>
        <td className="px-2">
          <div className="inline-flex items-center gap-1">
     
              <Button    onClick={
         
              (e)=>{ e.stopPropagation(),
                      navigate(`/ViewSpecialtiesList/EditSpecialtiesDetails`,{state:{from:"/ViewSpecialtiesList"}})
                    }                  }
                variant="ghost"
                size="sm"
                className="inline-flex items-center justify-center gap-2 p-2.5 rounded-lg"
              >
                <img
                  className="w-[15px] h-[15px] text-on-surface-primary"
                  alt="edit"
                  src="./edit-01.svg"
                />
              </Button>
       
          </div>
        </td>
      </tr>
    ))}
  </tbody>
</table>

                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4" dir={local === "ar" ? "rtl" : "ltr"}>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="text-[clamp(10px,2vw,12px)] text-on-surface-secondary">
                    {t("Showing")}
                  </span>

                  <Select defaultValue="1">
                    <SelectTrigger className="w-auto bg-secondary-light rounded-[20px] border-0 px-2 py-1.5 text-[clamp(10px,2vw,12px)]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                    </SelectContent>
                  </Select>

                  <span className="text-[clamp(10px,2vw,12px)] text-on-surface-secondary">
                    {t("out of 14")}
                  </span>
                </div>

                {/* الحاوية الجديدة مع overflow-x-auto */}
                <div className="max-w-full overflow-x-auto">

                  {/* نسخة الموبايل (تظهر فقط تحت sm) */}
                  <Pagination className="flex sm:hidden justify-center">
                    <PaginationContent className="flex-nowrap gap-2">

                      {/* previous */}
                      <PaginationItem>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-7 h-7 sm:w-8 sm:h-8 p-1 rounded-full border-[#f1f1f1]"
                        >
                          {local === "en" ? (
                            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                              <path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" fill="#333" />
                            </svg>
                          ) : (
                            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                              <path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="#333" />
                            </svg>
                          )}
                        </Button>
                      </PaginationItem>

                      {/* current page */}
                      <PaginationItem>
                        <PaginationLink
                          isActive
                          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-secondary-dark text-white rounded-full font-semibold text-[clamp(10px,2vw,13px)]"
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>

                      {/* next */}
                      <PaginationItem>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-7 h-7 sm:w-8 sm:h-8 p-1 rounded-full border-[#f1f1f1]"
                        >
                          {local === "en" ? (
                            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                              <path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="#333" />
                            </svg>
                          ) : (
                            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                              <path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" fill="#333" />
                            </svg>
                          )}
                        </Button>
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>

                  {/* نسخة الديسكتوب (الكاملة) */}
                  <Pagination className="hidden sm:flex justify-end">
                    <PaginationContent className="flex-nowrap gap-0.5 sm:gap-1 md:gap-2">

                      <PaginationItem className="shrink-0">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-7 h-7 sm:w-8 sm:h-8 p-1 rounded-full border-[#f1f1f1]"
                        >
                          {local === "en" ? (
                            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                              <path d="M11.726 12L12.666 11.06L9.61268 8L12.666 4.94L11.726 4L7.72602 8L11.726 12Z" fill="#333" />
                              <path d="M7.33344 12L8.27344 11.06L5.2201 8L8.27344 4.94L7.33344 4L3.33344 8L7.33344 12Z" fill="#333" />
                            </svg>
                          ) : (
                            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                              <path d="M4.27398 4L3.33398 4.94L6.38732 8L3.33398 11.06L4.27398 12L8.27398 8L4.27398 4Z" fill="#333" />
                              <path d="M8.66656 4L7.72656 4.94L10.7799 8L7.72656 11.06L8.66656 12L12.6666 8L8.66656 4Z" fill="#333" />
                            </svg>
                          )}
                        </Button>
                      </PaginationItem>

                      <PaginationItem className="shrink-0">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-7 h-7 sm:w-8 sm:h-8 p-1 rounded-full border-[#f1f1f1]"
                        >
                          {local === "en" ? (
                            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                              <path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" fill="#333" />
                            </svg>
                          ) : (
                            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                              <path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="#333" />
                            </svg>
                          )}
                        </Button>
                      </PaginationItem>

                      <PaginationItem className="shrink-0">
                        <PaginationLink
                          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-secondary-dark text-white rounded-full font-semibold text-[clamp(10px,2vw,13px)]"
                          isActive
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>

                      <PaginationItem className="shrink-0">
                        <PaginationLink className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-white text-[#333] rounded-full border font-semibold text-[clamp(10px,2vw,13px)]">
                          2
                        </PaginationLink>
                      </PaginationItem>

                      <PaginationItem className="shrink-0">
                        <PaginationLink className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-white text-[#333] rounded-full border font-semibold text-[clamp(10px,2vw,13px)]">
                          3
                        </PaginationLink>
                      </PaginationItem>

                      <PaginationItem className="shrink-0">
                        <span className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-white text-[#333] rounded-lg font-semibold text-[clamp(10px,2vw,13px)]">
                          ...
                        </span>
                      </PaginationItem>

                      <PaginationItem className="shrink-0">
                        <PaginationLink className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-white text-[#333] rounded-full border font-semibold text-[clamp(10px,2vw,13px)]">
                          10
                        </PaginationLink>
                      </PaginationItem>

                      <PaginationItem className="shrink-0">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-7 h-7 sm:w-8 sm:h-8 p-1 rounded-full border-[#f1f1f1]"
                        >
                          {local === "en" ? (
                            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                              <path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="#333" />
                            </svg>
                          ) : (
                            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                              <path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" fill="#333" />
                            </svg>
                          )}
                        </Button>
                      </PaginationItem>

                      <PaginationItem className="shrink-0">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-7 h-7 sm:w-8 sm:h-8 p-1 rounded-full border-[#f1f1f1]"
                        >
                          {local === "en" ? (
                            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                              <path d="M4.27398 4L3.33398 4.94L6.38732 8L3.33398 11.06L4.27398 12L8.27398 8L4.27398 4Z" fill="#333" />
                              <path d="M8.66656 4L7.72656 4.94L10.7799 8L7.72656 11.06L8.66656 12L12.6666 8L8.66656 4Z" fill="#333" />
                            </svg>
                          ) : (
                            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                              <path d="M11.726 12L12.666 11.06L9.61268 8L12.666 4.94L11.726 4L7.72602 8L11.726 12Z" fill="#333" />
                              <path d="M7.33344 12L8.27344 11.06L5.2201 8L8.27344 4.94L7.33344 4L3.33344 8L7.33344 12Z" fill="#333" />
                            </svg>
                          )}
                        </Button>
                      </PaginationItem>

                    </PaginationContent>
                  </Pagination>
                </div>

              </div>

            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
