import { BellIcon, PlusIcon, SearchIcon, Trash2Icon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import Pagination from "@mui/material/Pagination";
import { useLanguage } from "../../lib/LanguageContext";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { ThemeToggle } from "../../components/theme/ThemeSwitcher";
import { SideBar } from "../CommonComponents/SideBarPlan2";
import { useState } from "react";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import SwitchWithLabel from "../CommonComponents/SwitchLabel";
import { Header } from "../CommonComponents/Header";
import { Deactivate } from "../CommonComponents/Deactivate"; 
import { Activate } from "../CommonComponents/Activate";
import Toggle from "../../components/ui/SwitchToggel";
import { Delete } from "../CommonComponents/Delete";
import { useNavigate } from "react-router-dom";

const serviceData = [
  {
    id: "1",
    serviceId: "SER-Gsl7m",
    serviceName: "Initial Consultation",
    serviceCategory: "Consultation",
    sessionsNumber: "3",
    assignedClinics: "Aleppo Complex",
    clinicslocation: "Al-Sabil, Forkan",
  },
  {
    id: "2",
    serviceId: "SER-Gsl7m",
    serviceName: "Initial Consultation",
    serviceCategory: "Consultation",
    sessionsNumber: "3",
    assignedClinics: "Aleppo Complex",
    clinicslocation: "Al-Sabil, Forkan",
  },
  {
    id: "3",
    serviceId: "SER-Gsl7m",
    serviceName: "Initial Consultation",
    serviceCategory: "Consultation",
    sessionsNumber: "3",
    assignedClinics: "Aleppo Complex",
    clinicslocation: "Al-Sabil, Forkan",
  },
  {
    id: "4",
    serviceId: "SER-Gsl7m",
    serviceName: "Initial Consultation",
    serviceCategory: "Consultation",
    sessionsNumber: "3",
    assignedClinics: "Aleppo Complex",
    clinicslocation: "Al-Sabil, Forkan",
  },
  {
    id: "5",
    serviceId: "SER-Gsl7m",
    serviceName: "Initial Consultation",
    serviceCategory: "Consultation",
    sessionsNumber: "3",
    assignedClinics: "Aleppo Complex",
    clinicslocation: "Al-Sabil, Forkan",
  },
  {
    id: "6",
    serviceId: "SER-Gsl7m",
    serviceName: "Initial Consultation",
    serviceCategory: "Consultation",
    sessionsNumber: "3",
    assignedClinics: "Aleppo Complex",
    clinicslocation: "Al-Sabil, Forkan",
  },
  {
    id: "7",
    serviceId: "SER-Gsl7m",
    serviceName: "Initial Consultation",
    serviceCategory: "Consultation",
    sessionsNumber: "3",
    assignedClinics: "Aleppo Complex",
    clinicslocation: "Al-Sabil, Forkan",
  },
  {
    id: "8",
    serviceId: "SER-Gsl7m",
    serviceName: "Initial Consultation",
    serviceCategory: "Consultation",
    sessionsNumber: "3",
    assignedClinics: "Aleppo Complex",
    clinicslocation: "Al-Sabil, Forkan",
  },
];

export const ServicesList = (): JSX.Element => {
  const { local, handleLanguageClick } = useLanguage();
  const [status, setStatus] = useState("status");
  const [num, setNum] = useState("10");
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);
  const navigate = useNavigate();
const [checked, setChecked] = useState<boolean>(true); // الحالة الحالية
const [showDialog, setShowDialog] = useState<boolean>(false);
const [pendingNext, setPendingNext] = useState<boolean | null>(null);
const [actionType, setActionType] = useState<"activate" | "deactivate" | null>(null);


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

{/*DeletDialog*/ }
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  function handleDelete() {
    // تنفيذ الحذف هنا
    console.log("Deleted!");
    setShowDeleteDialog(false);
  }

  function cancelDelete() {
    setShowDeleteDialog(false);
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
      <>
        <div className="flex flex-col w-full overflow-hidden h-full items-start gap-4 py-4 pl-0 pr-5">
                <Header MainTitle="Services Management" SubTitle="View Services List" onOpenSidebar={onOpenSidebar}  />

   


        <Card className="flex flex-col h-full items-start gap-5 p-[20px] pr-0 relative w-full rounded-2xl overflow-hidden bg-background-secondary">
          <CardContent className="w-full overflow-y-auto scroll-x-hidden h-full ">
            <div
              className={`w-full h-[866px] ${
                local === "ar" ? "pl-[20px]" : "pr-[20px]"
              } `}
            >
              <div className="flex justify-between w-full items-center mb-[20px]">
                <div className="inline-flex items-center gap-2.5 ">
                  <form className="relative">
                    <SearchIcon className="w-3.5 h-3.5 absolute top-[9px] left-[8px]" />
                    <input
                      type="search"
                      placeholder={t(
                        "Search for a service id , service name .."
                      )}
                      className="placeholder:text-[11px] max-[767px]:placeholder:text-[10px] text-[11px] max-[767px]:text-[10px] bg-background-primary pl-[30px] py-[8px] rounded-[16px] w-[224px] max-[767px]:w-[142px] h-[40px] border-0 px-4 py-2 rounded outline-none focus:border-0"
                    />
                  </form>
                  <div className="max-[767px]:hidden">
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
                </div>

                <div className="inline-flex items-center gap-2.5 ">
                  <Link to="/AddNewService">
                    <Button className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-secondary-dark rounded-[20px] h-[40px] w-[146px] max-[767px]:w-[111px]">
                      <PlusIcon className="w-3.5 h-3.5 text-background-primary" />
                      <span className="font-lato font-medium text-sm max-[767px]:text-xs text-background-primary leading-[100%] tracking-[0] ">
                        {t("Add New Service")}
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="min-w-[900px] overflow-x-auto">
                <table className="w-full text-center">
                  <thead>
                    <tr className="h-[56px] bg-background-primary border-b border-border-light w-full">
                      <td className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                        {t("No.")}
                      </td>
                      <td className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                        {t("Service ID")}
                      </td>
                      <td className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                        {t("Services Name")}
                      </td>
                      <td className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                        {t("Service Category")}
                      </td>
                      <td className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                        {t("Sessions Number")}
                      </td>
                      <td className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                        {t("Assigned Clinics")}
                      </td>
                      <td className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                        {t("Clinics Location")}
                      </td>
                      <td className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                        {t("Status")}
                      </td>
                      <td className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                        {t("Actions")}
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {serviceData.map((service) => (
                      <tr
                        key={service.id}
                        className="h-[78px] bg-background-primary hover:bg-gray-100 border-b border-border-light w-full"
                      >
                        <td className="align-middle font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                          {service.id}
                        </td>
                        <td className="align-middle font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-primary">
                          {service.serviceId}
                        </td>
                        <td className="align-middle font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                          {service.serviceName}
                        </td>
                        <td className="align-middle font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                          {service.serviceCategory}
                        </td>
                        <td className="align-middle font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                          {service.sessionsNumber}
                        </td>
                        <td className="align-middle font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                          {service.assignedClinics}
                        </td>
                        <td className="align-middle font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                          {service.clinicslocation}
                        </td>
                        <td className="align-middle w-[160px]">
                          <SwitchWithLabel />
                        </td>
                        <td className="align-middle">
                          <div className="inline-flex flex-col justify-center gap-1 flex-[0_0_auto] items-start">
                            <div className="inline-flex items-center justify-center gap-1 flex-[0_0_auto]">
                              <Button
                              onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    navigate("/EditServiceDetails");
                  }}
                                variant="ghost"
                                size="sm"
                                className="inline-flex items-center justify-center gap-2 p-2.5 flex-[0_0_auto] rounded-lg overflow-hidden h-auto"
                              >
                                <img
                                  className={`w-[15px] h-[15px]text-on-surface-primary`}
                                  alt="edit"
                                  src="./edit-01.svg"
                                />
                              </Button>

                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowDeleteDialog(true);
                  }}
                  variant="ghost"
                  size="sm"
                  className="inline-flex items-center justify-center gap-2 p-2.5 rounded-lg h-auto"
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



           
 {showDeleteDialog  && ( <Delete
                                  open={showDeleteDialog}
                                  title="SRV-00345"
                                  onDelete={handleDelete}
                                  onCancel={cancelDelete}
                                >
                                  <p>Are you sure you want to delete this User? This action cannot be undone.</p>
                                </Delete>)}
                <footer
                  dir="ltr"
                  className="flex items-center justify-between self-stretch w-full flex-[0_0_auto] bg-transparent mt-[10px]"
                >
                  <div
                    dir={`${local === "ar" ? "rtl" : "ltr"}`}
                    className="inline-flex gap-2.5 flex-[0_0_auto] items-center"
                  >
                    <span className="w-fit font-title-11px-regular font-[number:var(--title-11px-regular-font-weight)] text-on-surface-secondary text-[length:var(--title-11px-regular-font-size)] tracking-[var(--title-11px-regular-letter-spacing)] leading-[var(--title-11px-regular-line-height)] whitespace-nowrap [font-style:var(--title-11px-regular-font-style)]">
                      {t("Showing")}
                    </span>

                  <Select value={num} onValueChange={(value) => setNum(value)}>
                    <SelectTrigger className="inline-flex items-center gap-1 pl-2 pr-1.5 py-1.5 flex-[0_0_auto] bg-secondary-light rounded-[20px] border-0 h-auto">
                      <SelectValue>
                        <span className="w-fit font-[number:var(--btn-11px-medium-font-weight)] text-on-surface-primary text-[length:var(--btn-11px-medium-font-size)] text-center leading-[var(--btn-11px-medium-line-height)] whitespace-nowrap mt-[-1.00px] font-btn-11px-medium tracking-[var(--btn-11px-medium-letter-spacing)] [font-style:var(--btn-11px-medium-font-style)]">
                          {num}
                        </span>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="25">25</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                    </SelectContent>
                  </Select>

                    <span className="w-fit font-title-11px-regular font-[number:var(--title-11px-regular-font-weight)] text-on-surface-secondary text-[length:var(--title-11px-regular-font-size)] tracking-[var(--title-11px-regular-letter-spacing)] leading-[var(--title-11px-regular-line-height)] whitespace-nowrap [font-style:var(--title-11px-regular-font-style)]">
                      {t("out of")} 512
                    </span>
                  </div>

                <Pagination
                  count={6}
                  variant="outlined"
                  siblingCount={0}
                  boundaryCount={1}
                  sx={{
                    "& .MuiPaginationItem-root": {
                      backgroundColor: "#E2F6EC",
                      borderColor: "#E2F6EC",
                      color: "#333",
                      "&:hover": {
                        backgroundColor: "#cceede",
                      },
                    },
                    "& .Mui-selected": {
                      backgroundColor: "#00B48D !important",
                      borderColor: "#00B48D",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#00A57F",
                      },
                    },
                  }}
                />
              </footer>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
