import { BellIcon, PlusIcon, SearchIcon, Trash2Icon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import Pagination from "@mui/material/Pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import TranslateIcon from "@mui/icons-material/Translate";
import SwitchWithLabel from "./SwitchLabel";

const clinicData = [
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
  return (
    <div
      dir={`${local === "ar" ? "rtl" : "ltr"}`}
      className="flex flex-col w-full h-full overflow-hidden items-start gap-4  py-4
           pl-0 pr-5"
    >
      <header className="flex h-[50px] justify-between pl-1 pr-0 py-0 self-stretch w-full items-center mt-[16px]">
        <div className="flex flex-col w-[340px] items-start gap-1.5 px-0 py-0.5">
          <h1 className="self-stretch mt-[-1.00px] font-lato font-semibold text-xl text-text-primary leading-[116%] tracking-[0]">
            {t("Medical Facilities")}
          </h1>
          <p className="font-lato font-semibold text-sm text-text-primary leading-[125%] tracking-[0]">
            {t("Medical clinic List")}
          </p>
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
            {/* <DarkModeToggle /> */}
          </div>

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

      <Card
        className="flex flex-col w-full h-full items-start gap-5 p-[20px] bg-background-tertiary
           rounded-2xl overflow-hidden"
      >
        <CardContent className="p-0 w-full h-full overflow-y-auto scroll-x-hidden ">
          <div className="flex justify-between self-stretch w-full flex-[0_0_auto] items-center mb-5">
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
              <Button className="inline-flex items-center gap-1 px-2.5 py-1.5 flex-[0_0_auto] bg-secondary-dark rounded-[20px] h-auto hover:bg-secondary-dark/90">
                <PlusIcon className="w-3.5 h-3.5 text-background-primary" />
                <span className="font-lato font-medium text-xs text-background-primary leading-[105%] tracking-[0]">
                  {t("Add New Clinic")}
                </span>
              </Button>
            </div>
          </div>

          <div className="w-full rounded-2xl h-screen  ">
            <Table className="bg-surface-default">
              <TableHeader>
                <TableRow className=" h-[56px] hover:bg-surface-default bg-surface-default  border-b border-border-light">
                  <TableHead
                    className={`w-[106px] ${
                      local === "ar" ? "text-right" : "text-left"
                    } font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary `}
                  >
                    No.
                  </TableHead>
                  <TableHead
                    className={`w-[109px] ${
                      local === "ar" ? "text-right" : "text-left"
                    } font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary`}
                  >
                    {t("Clinic Name")}
                  </TableHead>
                  <TableHead
                    className={`w-[177px] ${
                      local === "ar" ? "text-right" : "text-left"
                    } font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary`}
                  >
                    {t("Complex Name")}
                  </TableHead>
                  <TableHead
                    className={`w-[178px] ${
                      local === "ar" ? "text-right" : "text-left"
                    } font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary`}
                  >
                    {t("PIC")}
                  </TableHead>
                  <TableHead
                    className={`w-[173px] ${
                      local === "ar" ? "text-right" : "text-left"
                    } font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary`}
                  >
                    {t("Scheduled Appointments Count")}
                  </TableHead>
                  <TableHead
                    className={`w-[93px] ${
                      local === "ar" ? "text-right" : "text-left"
                    } font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary`}
                  >
                    {t("Status")}
                  </TableHead>
                  <TableHead
                    className={`w-[106px] ${
                      local === "ar" ? "text-right" : "text-left"
                    } font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary`}
                  >
                    {t("Action")}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clinicData.map((clinic) => (
                  <TableRow
                    key={clinic.id}
                    className="h-[78px]  border-b border-border-light"
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
                      <SwitchWithLabel local={local} />
                    </TableCell>
                    <TableCell>
                      <div className="inline-flex flex-col justify-center gap-1 flex-[0_0_auto] items-start">
                        <div className="inline-flex items-center justify-center gap-1 flex-[0_0_auto]">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="inline-flex items-center justify-center gap-2 p-2.5 flex-[0_0_auto] rounded-lg overflow-hidden h-auto"
                          >
                            <svg
                            className="text-text-secondary"
                              width="19"
                              height="19"
                              viewBox="0 0 19 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.89735 15.0963C1.93564 14.7517 1.95478 14.5794 2.00691 14.4184C2.05316 14.2755 2.11851 14.1396 2.20118 14.0142C2.29436 13.8729 2.41694 13.7503 2.66209 13.5052L13.6673 2.49992C14.5878 1.57945 16.0802 1.57945 17.0007 2.49993C17.9211 3.4204 17.9211 4.91279 17.0007 5.83326L5.99542 16.8385C5.75027 17.0836 5.6277 17.2062 5.48639 17.2994C5.36102 17.3821 5.22506 17.4474 5.08219 17.4937C4.92115 17.5458 4.74887 17.5649 4.40429 17.6032L1.58398 17.9166L1.89735 15.0963Z"
                                stroke="currentColor"
                                stroke-width="1.66667"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="inline-flex items-center justify-center gap-2 p-2.5 flex-[0_0_auto] rounded-lg overflow-hidden h-auto"
                          >
                            <Trash2Icon
                              className="w-[20px] h-[20px] text-text-secondary"
                            />
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
            className="flex items-center justify-between self-stretch w-full flex-[0_0_auto] bg-transparent mt-[20px]"
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
