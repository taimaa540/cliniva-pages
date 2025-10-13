import { PlusIcon, SearchIcon, Trash2Icon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import Pagination from "@mui/material/Pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { TableCell, TableRow } from "../../components/ui/table";
import { useNavigate } from "react-router-dom";
import { Header } from "../CommonComponents/Header";
import { SideBar } from "../CommonComponents/SideBarPlan2";
import { useAppContext } from "../../Context/ContextchooseSidbar";
import { Link } from "react-router-dom";
import { Deactivate } from "../CommonComponents/Deactivate";
import { Activate } from "../CommonComponents/Activate";
import Toggle from "../../components/ui/SwitchToggel";
import { Delete } from "../CommonComponents/Delete";
const clinic = [
  {
    id: "1",
    ClinicName: "Nova Clinic",
    ComplexName: "Nova Complex",
    PIC: "Nova Complex",
    AppointmentsCount: "4",
  },
  {
    id: "2",
    ClinicName: "Nova Clinic",
    ComplexName: "Nova Complex",
    PIC: "Nova Complex",
    AppointmentsCount: "2",
  },
  {
    id: "3",
    ClinicName: "Nova Clinic",
    ComplexName: "Nova Complex",
    PIC: "Nova Complex",
    AppointmentsCount: "1",
  },
  {
    id: "4",
    ClinicName: "Nova Clinic",
    ComplexName: "Nova Complex",
    PIC: "Nova Complex",
    AppointmentsCount: "9",
  },
  {
    id: "5",
    ClinicName: "Nova Clinic",
    ComplexName: "Nova Complex",
    PIC: "Nova Complex",
    AppointmentsCount: "8",
  },
  {
    id: "6",
    ClinicName: "Nova Clinic",
    ComplexName: "Nova Complex",
    PIC: "Nova Complex",
    AppointmentsCount: "2",
  },
  {
    id: "7",
    ClinicName: "Nova Clinic",
    ComplexName: "Nova Complex",
    PIC: "Nova Complex",
    AppointmentsCount: "4",
  },
  {
    id: "8",
    ClinicName: "Nova Clinic",
    ComplexName: "Nova Complex",
    PIC: "Nova Complex",
    AppointmentsCount: "2",
  },
];
interface clinicDate {
  id: string;

  ClinicName: string;
  AppointmentsCount: string;
  ComplexName: string;
  PIC: string;
}
export const ClinicList = (): JSX.Element => {
  const [status, setStatus] = useState("status");
  const [num, setNum] = useState("10");
  const { t, i18n } = useTranslation();
  const [local, setLocal] = useState("en");
  function handleLanguageClick() {
    if (local === "en") {
      setLocal("ar");
      i18n.changeLanguage("ar");
    } else {
      setLocal("en");
      i18n.changeLanguage("en");
    }
  }
  const [checked, setChecked] = useState<boolean>(true); // الحالة الحالية
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [pendingNext, setPendingNext] = useState<boolean | null>(null);
  const [actionType, setActionType] = useState<
    "activate" | "deactivate" | null
  >(null);
  const navigate = useNavigate();

  {
    /*DeletDialog*/
  }
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  function handleDelete() {
    if (selectedId !== null) {
      setuClinic((prev) => prev.filter((user) => user.id !== selectedId));
    }
    setShowDeleteDialog(false);
    setSelectedId(null);
  }

  function cancelDelete() {
    setShowDeleteDialog(false);
  }

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
  const [user, setuClinic] = useState<clinicDate[]>(clinic);
  const [isOpenAppointment, setIsOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const onOpenSidebar = () => setShowSidebar(true);
  const onCloseSidebar = () => setShowSidebar(false);
  const { selectedPlan } = useAppContext();
  const [page, setPage] = useState(1);
  const totalPages = 6;
  const handleChange = (_: unknown, value: number) => {
    setPage(value);
  };
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
        handleDarkClick={() => {}}
        isOpen={showSidebar}
        onOpenSidebar={onOpenSidebar}
        onCloseSidebar={onCloseSidebar}
      />
      <div
        dir={`${local === "ar" ? "rtl" : "ltr"}`}
        className="flex flex-col w-full h-full overflow-hidden items-start gap-4  py-4
           pl-0 pr-5"
      >
        <Header
          MainTitle="Medical Facilities"
          SubTitle="Medical clinic List"
          onOpenSidebar={onOpenSidebar}
        />

        <Card
          className="flex flex-col w-full h-full items-start gap-5 p-[20px] bg-background-tertiary
           rounded-2xl overflow-hidden"
        >
          <CardContent className="p-0 w-full h-full">
            <div className="flex flex-wrap justify-between self-stretch w-full flex-[0_0_auto] items-center mb-5">
              <div className="inline-flex items-center gap-2.5 self-stretch flex-[0_0_auto]">
                <form className="relative">
                  <SearchIcon className="w-3.5 h-3.5 absolute top-[13px] left-[8px]" />
                  <input
                    type="search"
                    placeholder={t("Search for a Medical Clinic")}
                    className="placeholder:text-[11px] text-[11px] pl-[30px] py-[8px] rounded-[16px] w-[224px] h-[40px] border-0 px-4 py-2 rounded outline-none focus:border-0 bg-background-primary"
                  />
                </form>
                <Select
                  value={status}
                  onValueChange={(value) => setStatus(value)}
                >
                  <SelectTrigger className="inline-flex items-center gap-0.5 pl-2.5 pr-2 py-1.5 flex-[0_0_auto] bg-secondary-light rounded-[20px] border-0 h-auto">
                    <SelectValue>
                      <span className="w-fit font-[number:var(--btn-11px-medium-font-weight)] text-on-surface-primary text-[length:var(--btn-11px-medium-font-size)] text-center leading-[var(--btn-11px-medium-line-height)] whitespace-nowrap mt-[-1.00px] font-btn-11px-medium tracking-[var(--btn-11px-medium-letter-spacing)] [font-style:var(--btn-11px-medium-font-style)]">
                        {t(`status.${status}`)}
                      </span>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="status" disabled>
                      {t("status.status")}
                    </SelectItem>
                    <SelectItem value="active">{t("status.active")}</SelectItem>
                    <SelectItem value="inactive">
                      {t("status.inactive")}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="inline-flex items-center gap-2.5 flex-[0_0_auto]">
                <Link to="/AddNewClinic">
                  <Button className="inline-flex items-center gap-1 px-2.5 py-1.5 flex-[0_0_auto] bg-secondary-dark rounded-[20px] h-auto hover:bg-secondary-dark/90">
                    <PlusIcon className="w-3.5 h-3.5 text-background-primary" />
                    <span className="font-lato font-medium text-xs text-background-primary leading-[105%] tracking-[0]">
                      {t("Add New Clinic")}
                    </span>
                  </Button>
                </Link>
              </div>
            </div>

            <div
              className="flex flex-col flex-grow rounded-lg items-start gap-5 pt-4 pr-[10px] relative w-full overflow-hidden"
              dir={local === "ar" ? "rtl" : "ltr"}
            >
              {/* حاوية سكرول أفقي */}
              <div className="w-full overflow-x-auto">
                {/* حاوية سكرول رأسي */}
                <div
                  className=" rounded-lg"
                  style={{ height: "calc(100vh - 78px - 200px)" }}
                >
                  <table className="bg-surface-default table-auto w-full min-w-[800px] text-center border-collapse">
                    <thead>
                      <tr className="h-[56px] bg-surface-default border-b border-border-light w-full ">
                        <td
                          className={`font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary`}
                        >
                          No.
                        </td>
                        <td
                          className={`font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary`}
                        >
                          {t("Clinic Name")}
                        </td>
                        <td
                          className={`font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary`}
                        >
                          {t("Complex Name")}
                        </td>
                        <td
                          className={`font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary`}
                        >
                          {t("PIC")}
                        </td>
                        <td
                          className={`font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary`}
                        >
                          {t("Scheduled Appointments Count")}
                        </td>
                        <td
                          className={`font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary`}
                        >
                          {t("Status")}
                        </td>
                        <td
                          className={`font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary`}
                        >
                          {t("Action")}
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      {clinic.map((clinic) => (
                        <TableRow
                          key={clinic.id}
                          className="h-[78px] border-b border-border-light"
                          onClick={() => {
                            if (
                              selectedPlan === "Company" ||
                              selectedPlan === "Complex"
                            ) {
                              navigate(`/ElementViewClinic?id=${clinic.id}`, {
                                state: { from: "ViewListOfClinics" },
                              });
                            } else {
                              navigate(`/ElementViewClinicP3?id=${clinic.id}`, {
                                state: { from: "ViewListOfClinics" },
                              });
                            }
                          }}
                        >
                          <TableCell className="font-lato font-regular text-xs text-text-primary leading-[130%] tracking-[0]">
                            {t(`${clinic.id}`)}
                          </TableCell>
                          <TableCell className="font-lato font-regular text-xs text-text-primary leading-[130%] tracking-[0]">
                            {t(`${clinic.ClinicName}`)}
                          </TableCell>
                          <TableCell className="font-lato font-regular text-xs text-text-primary leading-[130%] tracking-[0]">
                            {t(`${clinic.ComplexName}`)}
                          </TableCell>
                          <TableCell className="font-lato font-regular text-xs text-text-primary leading-[130%] tracking-[0]">
                            {t(`${clinic.PIC}`)}
                          </TableCell>
                          <TableCell className="font-lato font-regular text-xs text-text-primary leading-[130%] tracking-[0]">
                            {t(`${clinic.AppointmentsCount}`)}
                          </TableCell>
                          <TableCell className="w-[150px]">
                            <div onClick={(e) => e.stopPropagation()}>
                              <Toggle
                                checked={checked}
                                onChange={handleToggle}
                              />

                              {showDialog && actionType === "deactivate" && (
                                <Deactivate
                                  open={showDialog}
                                  onConfirm={confirmDeactivate}
                                  onCancel={cancelDeactivate}
                                >
                                  <p>
                                    هل أنت متأكد أنك تريد تغيير الحالة إلى
                                    Inactive؟
                                  </p>
                                </Deactivate>
                              )}

                              {showDialog && actionType === "activate" && (
                                <Activate
                                  open={showDialog}
                                  onConfirm={confirmDeactivate}
                                  onCancel={cancelDeactivate}
                                >
                                  <p>
                                    هل أنت متأكد أنك تريد تغيير الحالة إلى
                                    Active؟
                                  </p>
                                </Activate>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="inline-flex flex-col justify-center gap-1 flex-[0_0_auto] items-start">
                              <div className="inline-flex items-center justify-center gap-1 flex-[0_0_auto]">
                                <Button
                                  variant="ghost"
                                  onClick={(e) => {
                                    e.stopPropagation(); // عشان ما يروح على view لما تضغط على row
                                    if (
                                      selectedPlan === "Company" ||
                                      selectedPlan === "Complex"
                                    ) {
                                      navigate(
                                        `/ElementViewClinic/EditClinicDetails?id=${clinic.id}`,
                                        {
                                          state: { from: "/ViewListOfClinics" },
                                        }
                                      );
                                    } else {
                                      navigate(
                                        `/ElementViewClinicP3/ElementEditClincp3?id=${clinic.id}`,
                                        {
                                          state: { from: "/ViewListOfClinics" },
                                        }
                                      );
                                    }
                                  }}
                                  size="sm"
                                  className="inline-flex items-center justify-center gap-2 p-2.5 flex-[0_0_auto] rounded-lg overflow-hidden h-auto"
                                >
                                  <img
                                    className="w-[15px] h-[15px] text-on-surface-primary"
                                    alt="edit"
                                    src="./edit-01.svg"
                                  />
                                </Button>
                                <Button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setShowDeleteDialog(true);
                                    setSelectedId(clinic.id);
                                  }}
                                  variant="ghost"
                                  size="sm"
                                  className="inline-flex items-center justify-center gap-2 p-2.5 flex-[0_0_auto] rounded-lg overflow-hidden h-auto"
                                >
                                  <Trash2Icon className="w-[20px] h-[20px] text-text-secondary" />
                                </Button>
                              </div>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {showDeleteDialog && (
              <Delete
                open={showDeleteDialog}
                title="SRV-00345"
                onDelete={handleDelete}
                onCancel={cancelDelete}
              >
                <p>
                  Are you sure you want to delete this Clinic? This action
                  cannot be undone.
                </p>
              </Delete>
            )}
            <footer
              dir="ltr"
              className="flex flex-wrap items-center justify-between self-stretch w-full bg-transparent mt-[10px]"
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
                  // ✅ هنا نتحكم بالظهور حسب حجم الشاشة
                  display: {
                    xs: "none", // يخفيه على الشاشات الصغيرة
                    sm: "none", // يخفيه على الشاشات الصغيرة جدًا أيضًا
                    md: "flex", // يظهر فقط من الشاشات المتوسطة فما فوق
                  },
                  justifyContent: "center",
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

              <Pagination
                count={totalPages}
                page={page}
                onChange={handleChange}
                variant="outlined"
                siblingCount={0}
                boundaryCount={0}
                sx={{
                  // ✅ التحكم بالظهور حسب حجم الشاشة
                  display: {
                    xs: "flex", // يظهر على الشاشات الصغيرة
                    sm: "flex",
                    md: "none", // يختفي على الشاشات المتوسطة والكبيرة
                  },
                  justifyContent: "center",
                  "& .MuiPaginationItem-root": {
                    display: "none",
                    backgroundColor: "#E2F6EC",
                    borderColor: "#E2F6EC",
                    color: "#333",
                    "&:hover": {
                      backgroundColor: "#cceede",
                    },
                  },
                  "& .MuiPaginationItem-previousNext": {
                    display: "inline-flex",
                  },
                  "& .Mui-selected": {
                    display: "inline-flex",
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
