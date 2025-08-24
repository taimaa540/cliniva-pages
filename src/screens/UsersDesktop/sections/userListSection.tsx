import {
  BellIcon,
  EditIcon,
  PlusIcon,
  SearchIcon,
  Trash2Icon,
} from "lucide-react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import Pagination from "@mui/material/Pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { useState } from "react";
import DarkModeToggle from "../../ElementUsersNoDataTo/DarkMode";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
const userData = [
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
];

interface NoDataSectionProps {
  local: string;
  dark: boolean;
  handelDarkClick: () => void;
  handleLanguageClick: () => void;
}
export const UserListSection = ({
  handleLanguageClick,
  local,
  dark,
  handelDarkClick,
}: NoDataSectionProps): JSX.Element => {
  const [role, setRole] = useState("role");
  const [status, setStatus] = useState("status");
  const [num, setNum] = useState("10");
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);

  return (
    <div
      className={`flex flex-col w-[1217px] h-[1150px] items-start gap-4  py-4  self-stretch relative ${
        local === "ar" ? "right-[240px] pr-0 pl-5" : "left-[240px] pl-0 pr-5"
      } ${dark ? "bg-[#030711]" : ""}`}
    >
      <header className="flex h-[50px] justify-between pl-1 pr-0 py-0 self-stretch w-full items-center">
        <div className="flex flex-col w-[340px] items-start gap-1.5 px-0 py-0.5">
          <h1
            className={`self-stretch mt-[-1.00px] font-h5-22px-bold font-[number:var(--h5-22px-bold-font-weight)] ${
              dark ? "text-white" : "text-[#2a2b2a]"
            } text-[length:var(--h5-22px-bold-font-size)] tracking-[var(--h5-22px-bold-letter-spacing)] leading-[var(--h5-22px-bold-line-height)] [font-style:var(--h5-22px-bold-font-style)]`}
          >
            {t("Users")}
          </h1>
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
              className={`p-2.5 bg-secondary-light ${
                local === "ar" ? "bg-[green]" : "bg-secondary-light"
              } rounded-[20px] h-auto transition-all duration-[1000ms]`}
              onClick={handleLanguageClick}
            >
              <TranslateIcon className="w-5 h-5" />
            </Button>
          </div>

          <div className="w-10 h-[17.5px] relative">
            <DarkModeToggle dark={dark} handelDarkClick={handelDarkClick} />
          </div>

          <div className="items-center gap-3 inline-flex flex-[0_0_auto]">
            <div className="inline-flex items-center w-[40px] h-[40px] gap-2.5 flex-[0_0_auto] bg-app-primary rounded-3xl" />
            <div className="flex-col items-start gap-1 inline-flex flex-[0_0_auto]">
              <div
                className={`w-fit mt-[-1.00px] ${
                  dark ? "text-white" : "text-[#2a2b2a]"
                } font-title-16px-bold font-[number:var(--title-16px-bold-font-weight)] text-[length:var(--title-16px-bold-font-size)] tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] whitespace-nowrap [font-style:var(--title-16px-bold-font-style)]`}
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

      <Card
        className={`flex flex-col w-full h-[1036px] items-start gap-5 p-5 flex-1 grow ${
          dark ? "bg-[#272932] border-[white]" : "bg-bg"
        } rounded-2xl overflow-hidden`}
      >
        <CardContent className="p-0 w-full h-[2000px] ">
          <div className="flex justify-between self-stretch w-full flex-[0_0_auto] items-center mb-5">
            <div className="inline-flex items-center gap-2.5 self-stretch flex-[0_0_auto]">
              <form className="relative">
                <SearchIcon className="w-3.5 h-3.5 absolute top-[9px] left-[8px]" />
                <input
                  type="search"
                  placeholder={t("Search for users")}
                  className="placeholder:text-[11px] text-[11px] pl-[30px] py-[8px] rounded-[16px] w-[224px] h-[30px] border-0 px-4 py-2 rounded outline-none focus:border-0"
                />
              </form>

              <Select value={role} onValueChange={(value) => setRole(value)}>
                <SelectTrigger className="inline-flex items-center gap-0.5 pl-2.5 pr-2 py-1.5 flex-[0_0_auto] bg-secondary-light rounded-[20px] border-0 h-auto">
                  <SelectValue>
                    <span className="w-fit font-[number:var(--btn-11px-medium-font-weight)] text-on-surface-primary text-[length:var(--btn-11px-medium-font-size)] text-center leading-[var(--btn-11px-medium-line-height)] whitespace-nowrap mt-[-1.00px] font-btn-11px-medium tracking-[var(--btn-11px-medium-letter-spacing)] [font-style:var(--btn-11px-medium-font-style)]">
                      {t(`roles.${role}`)}
                    </span>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="role" disabled>
                    {t("roles.role")}
                  </SelectItem>
                  <SelectItem value="admin">{t("roles.admin")}</SelectItem>
                  <SelectItem value="user">{t("roles.user")}</SelectItem>
                </SelectContent>
              </Select>

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
              <Button className="inline-flex items-center gap-1 px-2.5 py-1.5 flex-[0_0_auto] bg-secondary-dark rounded-[20px] h-auto hover:bg-secondary-dark/90">
                <PlusIcon className="w-3.5 h-3.5" />
                <span className="w-fit font-[number:var(--btn-11px-medium-font-weight)] text-surface-default text-[length:var(--btn-11px-medium-font-size)] text-center leading-[var(--btn-11px-medium-line-height)] whitespace-nowrap mt-[-1.00px] font-btn-11px-medium tracking-[var(--btn-11px-medium-letter-spacing)] [font-style:var(--btn-11px-medium-font-style)]">
                  {t("Add New User")}
                </span>
              </Button>
            </div>
          </div>

          <div dir="ltr" className="w-full rounded-2xl h-[899px] ">
            <Table>
              <TableHeader>
                <TableRow className="h-14 bg-surface-default border-b border-[#e4e2dd]">
                  <TableHead className="w-[106px] font-title-12px-semibold font-[number:var(--title-12px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-12px-semibold-font-size)] tracking-[var(--title-12px-semibold-letter-spacing)] leading-[var(--title-12px-semibold-line-height)] [font-style:var(--title-12px-semibold-font-style)]">
                    No.
                  </TableHead>
                  <TableHead className="w-[109px] font-title-12px-semibold font-[number:var(--title-12px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-12px-semibold-font-size)] tracking-[var(--title-12px-semibold-letter-spacing)] leading-[var(--title-12px-semibold-line-height)] [font-style:var(--title-12px-semibold-font-style)]">
                    User ID
                  </TableHead>
                  <TableHead className="w-[177px] font-title-12px-semibold font-[number:var(--title-12px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-12px-semibold-font-size)] tracking-[var(--title-12px-semibold-letter-spacing)] leading-[var(--title-12px-semibold-line-height)] [font-style:var(--title-12px-semibold-font-style)]">
                    <div className="flex items-center gap-1">
                      User Name
                      <img
                        className="w-3.5 h-3.5"
                        alt="Icon sort"
                        src="/icon-sort.svg"
                      />
                    </div>
                  </TableHead>
                  <TableHead className="w-[178px] font-title-12px-semibold font-[number:var(--title-12px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-12px-semibold-font-size)] tracking-[var(--title-12px-semibold-letter-spacing)] leading-[var(--title-12px-semibold-line-height)] [font-style:var(--title-12px-semibold-font-style)]">
                    <div className="flex items-center gap-1">
                      Role
                      <img
                        className="w-3.5 h-3.5"
                        alt="Icon sort"
                        src="/icon-sort.svg"
                      />
                    </div>
                  </TableHead>
                  <TableHead className="w-[173px] font-title-12px-semibold font-[number:var(--title-12px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-12px-semibold-font-size)] tracking-[var(--title-12px-semibold-letter-spacing)] leading-[var(--title-12px-semibold-line-height)] [font-style:var(--title-12px-semibold-font-style)]">
                    <div className="flex items-center gap-1">
                      User Type
                      <img
                        className="w-3.5 h-3.5"
                        alt="Icon sort"
                        src="/icon-sort.svg"
                      />
                    </div>
                  </TableHead>
                  <TableHead className="w-[93px] font-title-12px-semibold font-[number:var(--title-12px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-12px-semibold-font-size)] tracking-[var(--title-12px-semibold-letter-spacing)] leading-[var(--title-12px-semibold-line-height)] [font-style:var(--title-12px-semibold-font-style)]">
                    <div className="flex items-center gap-1">
                      Status
                      <img
                        className="w-3.5 h-3.5"
                        alt="Icon sort"
                        src="/icon-sort.svg"
                      />
                    </div>
                  </TableHead>
                  <TableHead className="w-[106px] font-title-12px-semibold font-[number:var(--title-12px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-12px-semibold-font-size)] tracking-[var(--title-12px-semibold-letter-spacing)] leading-[var(--title-12px-semibold-line-height)] [font-style:var(--title-12px-semibold-font-style)]">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {userData.map((user) => (
                  <TableRow
                    key={user.id}
                    className="h-[78px] bg-bg-subtle border-b border-[#e4e2dd]"
                  >
                    <TableCell className={`font-title-12px-semibold font-[number:var(--title-12px-semibold-font-weight)] ${dark ? 'text-white' : 'text-on-surface-primary'} text-[length:var(--title-12px-semibold-font-size)] tracking-[var(--title-12px-semibold-letter-spacing)] leading-[var(--title-12px-semibold-line-height)] [font-style:var(--title-12px-semibold-font-style)]`}>
                      {user.id}
                    </TableCell>
                    <TableCell className={`font-title-12px-regular font-[number:var(--title-12px-regular-font-weight)] ${dark ? 'text-white' : 'text-on-surface-primary'} text-[length:var(--title-12px-regular-font-size)] tracking-[var(--title-12px-regular-letter-spacing)] leading-[var(--title-12px-regular-line-height)] [font-style:var(--title-12px-regular-font-style)]`}>
                      {user.userId}
                    </TableCell>
                    <TableCell className={`font-title-12px-semibold font-[number:var(--title-12px-semibold-font-weight)] ${dark ? 'text-white' : 'text-on-surface-primary'} text-[length:var(--title-12px-semibold-font-size)] tracking-[var(--title-12px-semibold-letter-spacing)] leading-[var(--title-12px-semibold-line-height)] [font-style:var(--title-12px-semibold-font-style)]`}>
                      {user.userName}
                    </TableCell>
                    <TableCell className={`font-title-12px-semibold font-[number:var(--title-12px-semibold-font-weight)] ${dark ? 'text-white' : 'text-on-surface-primary'} text-[length:var(--title-12px-semibold-font-size)] tracking-[var(--title-12px-semibold-letter-spacing)] leading-[var(--title-12px-semibold-line-height)] [font-style:var(--title-12px-semibold-font-style)]`}>
                      {user.role}
                    </TableCell>
                    <TableCell className={`font-title-12px-semibold font-[number:var(--title-12px-semibold-font-weight)] ${dark ? 'text-white' : 'text-on-surface-primary'} text-[length:var(--title-12px-semibold-font-size)] tracking-[var(--title-12px-semibold-letter-spacing)] leading-[var(--title-12px-semibold-line-height)] [font-style:var(--title-12px-semibold-font-style)]`}>
                      {user.userType}
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={`flex w-[58px] h-6 items-center justify-center gap-[5px] px-2.5 py-1 rounded-[14px] font-title-11px-regular font-[number:var(--title-11px-regular-font-weight)] text-[length:var(--title-11px-regular-font-size)] tracking-[var(--title-11px-regular-letter-spacing)] leading-[var(--title-11px-regular-line-height)] [font-style:var(--title-11px-regular-font-style)] ${
                          user.status === "Active"
                            ? "bg-app-primary text-on-surface-primary"
                            : "bg-[#fcb98a] text-on-surface-primary"
                        }`}
                      >
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="inline-flex flex-col justify-center gap-1 flex-[0_0_auto] items-start">
                        <div className="inline-flex items-center justify-center gap-1 flex-[0_0_auto]">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="inline-flex items-center justify-center gap-2 p-2.5 flex-[0_0_auto] rounded-lg overflow-hidden h-auto"
                          >
                            <EditIcon className={`w-5 h-5 ${dark ? 'text-white' : 'text-on-surface-primary'}`} />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="inline-flex items-center justify-center gap-2 p-2.5 flex-[0_0_auto] rounded-lg overflow-hidden h-auto"
                          >
                            <Trash2Icon className={`w-5 h-5 ${dark ? 'text-white' : 'text-on-surface-primary'}`} />
                          </Button>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <footer
            dir="ltr"
            className="flex items-center justify-between self-stretch w-full flex-[0_0_auto] bg-transparent"
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
              count={16}
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
        </CardContent>
      </Card>
    </div>
  );
};
