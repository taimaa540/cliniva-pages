import {  PlusIcon, SearchIcon, Trash2Icon } from "lucide-react";
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
import { SideBar } from "../CommonComponents/SideBarPlan2";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Delete } from "../CommonComponents/Delete";
interface user {
  id: string;
  userId: string;
  userName: string;
  role: string;
  userType: string;
  status: string;
}
import { useNavigate } from "react-router-dom";
import { Deactivate } from "../CommonComponents/Deactivate";
import { Activate } from "../CommonComponents/Activate";
import Toggle from "../../components/ui/SwitchToggel";
import { Header } from "../CommonComponents/Header";
export const UserListSection = (): JSX.Element => {
  const { local, handleLanguageClick } = useLanguage();
  const [role, setRole] = useState("role");
  const [status, setStatus] = useState("status");
  const [num, setNum] = useState("10");
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);
  const [checked, setChecked] = useState<boolean>(true); // الحالة الحالية
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [pendingNext, setPendingNext] = useState<boolean | null>(null);
  const [actionType, setActionType] = useState<
    "activate" | "deactivate" | null
  >(null);

  const [user, setuser] = useState<user[]>([
    {
      id: "001",
      userId: "US-001",
      userName: "Ammar Al Sawwa",
      role: "Admin",
      userType: "Staff",
      status: "Active",
    },
    {
      id: "002",
      userId: "US-002",
      userName: "Ahmed Afuni",
      role: "Admin",
      userType: "Staff",
      status: "Active",
    },
    {
      id: "003",
      userId: "US-003",
      userName: "Muaz Tair",
      role: "Doctor",
      userType: "Doctor",
      status: "Inactive",
    },
    {
      id: "004",
      userId: "US-004",
      userName: "Mohamed Tobal",
      role: "Receptionist",
      userType: "Staff",
      status: "Active",
    },
    {
      id: "005",
      userId: "US-005",
      userName: "Mohammed Gareeb",
      role: "Receptionist",
      userType: "Staff",
      status: "Active",
    },
    {
      id: "006",
      userId: "US-006",
      userName: "Fatemah Jamal",
      role: "Doctor",
      userType: "Doctor",
      status: "Inactive",
    },
    {
      id: "007",
      userId: "US-007",
      userName: "Rola Ahmed",
      role: "Doctor",
      userType: "Doctor",
      status: "Inactive",
    },
    {
      id: "008",
      userId: "US-008",
      userName: "Fateh Ahmed",
      role: "Doctor",
      userType: "Doctor",
      status: "Inactive",
    },
    {
      id: "009",
      userId: "US-009",
      userName: "Jamal Said",
      role: "Doctor",
      userType: "Doctor",
      status: "Inactive",
    },
    {
      id: "010",
      userId: "US-010",
      userName: "Nour Sarah",
      role: "Doctor",
      userType: "Doctor",
      status: "Inactive",
    },
  ]);

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

  {
    /*DeletDialog*/
  }
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  function handleDelete() {
    if (selectedId !== null) {
      setuser((prev) => prev.filter((user) => user.id !== selectedId));
    }
    setShowDeleteDialog(false);
    setSelectedId(null);
  }

  function cancelDelete() {
    setShowDeleteDialog(false);
  }
  {
    /*</delete>*/
  }
  const navigate = useNavigate();
  const [isOpenAppointment, setIsOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const onOpenSidebar = () => setShowSidebar(true);
  const onCloseSidebar = () => setShowSidebar(false);
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

      <div className="flex flex-col w-full overflow-hidden h-full items-start gap-4 py-4 pl-0 pr-5">
        <Header
          MainTitle="Users Management"
          SubTitle=""
          onOpenSidebar={onOpenSidebar}
        />

        <Card className="flex flex-col h-full items-start gap-5 p-[20px] pr-0 relative w-full rounded-2xl overflow-hidden bg-background-secondary">
          <CardContent className="w-full overflow-y-auto scroll-x-hidden h-full ">
            <div className="w-full h-[866px] pr-[20px]">
              <div className="flex justify-between w-full items-center mb-[20px]">
                <div className="inline-flex items-center gap-2.5 ">
                  <form className="relative">
                    <SearchIcon className="w-3.5 h-3.5 absolute top-[9px] left-[8px]" />
                    <input
                      type="search"
                      placeholder={t("Search for users")}
                      className="placeholder:text-[11px] max-[767px]:placeholder:text-[10px] text-[11px] max-[767px]:text-[10px] bg-background-primary pl-[30px] py-[8px] rounded-[16px] w-[224px] max-[767px]:w-[130px] h-[40px] border-0 px-4 py-2 rounded outline-none focus:border-0"
                    />
                  </form>
                  <div className="max-[767px]:hidden">
                    <Select
                      value={role}
                      onValueChange={(value) => setRole(value)}
                    >
                      <SelectTrigger className="inline-flex items-center gap-0.5 pl-2.5 pr-2 py-1.5 bg-secondary-light rounded-[20px] border-0 h-auto w-fit">
                        <SelectValue>
                          <span className="font-lato font-medium text-sm leading-[100%] tracking-[0] text-text-primary">
                            {t(`roles.${role}`)}
                          </span>
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="role" disabled>
                          {t("roles.role")}
                        </SelectItem>
                        <SelectItem value="admin">
                          {t("roles.admin")}
                        </SelectItem>
                        <SelectItem value="user">{t("roles.user")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
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
                  <Link to="/AddNewUser">
                    <Button className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-secondary-dark rounded-[20px] h-[40px] w-[146px] max-[767px]:w-[105px]">
                      <PlusIcon className="w-3.5 h-3.5 text-background-primary" />
                      <span className="font-lato font-medium text-sm max-[767px]:text-xs text-background-primary leading-[100%] tracking-[0] ">
                        {t("Add New User")}
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="min-w-[600px] overflow-x-auto">
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
                      <table className="w-full text-center">
                        <thead>
                          <tr className="h-[56px] bg-background-primary border-b border-border-light w-full">
                            <td className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                              {t("No.")}
                            </td>
                            <td className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                              {t("User ID")}
                            </td>
                            <td className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                              {t("User Name")}
                            </td>
                            <td className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                              {t("Role")}
                            </td>
                            <td className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                              {t("User Type")}
                            </td>
                            <td className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                              {t("Status")}
                            </td>
                            <td className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                              {t("Action")}
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          {user.length === 0 ? (
                            <tr>
                              <td colSpan={7} className="py-20 text-center">
                                <div className="flex flex-col items-center justify-center">
                                  <img
                                    className="w-[423px] h-[282px]"
                                    alt="No data"
                                    src="/noData.png"
                                  />
                                  <div className="font-lato font-semibold text-xl leading-[116%] tracking-[0] text-text-primary mt-4">
                                    {t("No data to show")}
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ) : (
                            user.map((user) => (
                              <tr
                                key={user.id}
                                onClick={() =>
                                  navigate(`/ViewUserDetails?=id${user.id}`)
                                }
                                className="h-[78px] bg-background-primary hover:bg-secondary-light border-b border-border-light whitespace-nowrap"
                              >
                                <td className="align-middle font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                                  {user.id}
                                </td>
                                <td className="align-middle font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-primary">
                                  {user.userId}
                                </td>
                                <td className="align-middle font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                                  {user.userName}
                                </td>
                                <td className="align-middle font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                                  {user.role}
                                </td>
                                <td className="align-middle font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                                  {user.userType}
                                </td>
                                <td className="align-middle w-[160px]">
                                  <div onClick={(e) => e.stopPropagation()}>
                                    <Toggle
                                      checked={checked}
                                      onChange={handleToggle}
                                    />

                                    {showDialog &&
                                      actionType === "deactivate" && (
                                        <Deactivate
                                          open={showDialog}
                                          onConfirm={confirmDeactivate}
                                          onCancel={cancelDeactivate}
                                        >
                                          <p>
                                            Are you sure you want to change this
                                            user’s status from Active to
                                            Inactive?
                                          </p>
                                          <p>
                                            Inactive users will no longer be
                                            able to access the system until
                                            reactivated.
                                          </p>
                                        </Deactivate>
                                      )}

                                    {showDialog &&
                                      actionType === "activate" && (
                                        <Activate
                                          open={showDialog}
                                          onConfirm={confirmDeactivate}
                                          onCancel={cancelDeactivate}
                                        >
                                          <p>
                                            Activate the patient will be able to
                                            book appointments, receive
                                            notifications, and access system
                                            services.
                                          </p>
                                        </Activate>
                                      )}
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <div className="inline-flex flex-col justify-center gap-1 flex-[0_0_auto] items-start">
                                    <div className="inline-flex items-center justify-center gap-1 flex-[0_0_auto]">
                                      <Button
                                        variant="ghost"
                                        onClick={(e) => {
                                          e.stopPropagation(); // عشان ما يروح على view لما تضغط على row
                                          navigate("/EditUserDetails", {
                                            state: {
                                              from: `/UserDesktop?=id${user.id}`,
                                            },
                                          });
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

                                      <div>
                                        <Button
                                          onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setShowDeleteDialog(true);
                                            setSelectedId(user.id);
                                          }}
                                          variant="ghost"
                                          size="sm"
                                          className="inline-flex items-center justify-center gap-2 p-2.5 flex-[0_0_auto] rounded-lg overflow-hidden h-auto"
                                        >
                                          <Trash2Icon className="w-[20px] h-[20px] text-on-surface-primary" />
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))
                          )}
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
                      Are you sure you want to delete this User? This action
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

                    <Select
                      value={num}
                      onValueChange={(value) => setNum(value)}
                    >
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
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
