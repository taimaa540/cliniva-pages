"use client";
import { BellIcon, PlusIcon, SearchIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import DarkModeToggle from "../../DarkMode";
import TranslateIcon from "@mui/icons-material/Translate";
import Pagination from "@mui/material/Pagination";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

interface NoDataSectionProps {
  local: string;
  dark: boolean;
  handelDarkClick: () => void;
  handleLanguageClick: () => void;
}
export const NoDataSection = ({
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
      className={`flex flex-col w-[1217px] h-[1000px] items-start gap-4  py-4  self-stretch relative ${
        local === "ar" ? "right-[240px] pr-0 pl-5" : "left-[240px] pl-0 pr-5"
      } ${dark ? "bg-[#030711]" : ""}`}
    >
      <header className="flex h-[50px] justify-between pl-1 pr-0 py-0 self-stretch w-full items-center">
        <div className="flex flex-col w-[340px] items-start gap-1.5 px-0 py-0.5">
          <h1
            className={`self-stretch mt-[-1.00px] font-h5-22px-bold font-[number:var(--h5-22px-bold-font-weight)] ${
              dark ? "text-white" : "text-[#2a2b2a]"
            } text-on-surface-primary text-[length:var(--h5-22px-bold-font-size)] tracking-[var(--h5-22px-bold-letter-spacing)] leading-[var(--h5-22px-bold-line-height)] [font-style:var(--h5-22px-bold-font-style)]`}
          >
            {t("Users")}
          </h1>
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
                } font-title-16px-bold font-[number:var(--title-16px-bold-font-weight)] text-on-surface-primary text-[length:var(--title-16px-bold-font-size)] tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] whitespace-nowrap [font-style:var(--title-16px-bold-font-style)]`}
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
        className={`flex flex-col min-h-[866px] items-start gap-5 p-5 mt-[10px] self-stretch w-full flex-[0_0_auto] ${
          dark ? "bg-[#272932] border-[white]" : "bg-bg"
        }  rounded-2xl overflow-hidden`}
      >
        <CardContent className="p-0 w-full">
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

          <div className="flex flex-col h-[718px] items-center justify-center gap-2.5 p-2.5 self-stretch w-full">
            <img
              className="w-[423px] h-[282px]"
              alt="Element"
              src="/noData.png"
            />
            <div
              className={`w-[340px] text-center ${
                dark ? "text-white" : "text-[#2a2b2a]"
              } font-h5-22px-bold font-[number:var(--h5-22px-bold-font-weight)] text-on-surface-primary text-[length:var(--h5-22px-bold-font-size)] tracking-[var(--h5-22px-bold-letter-spacing)] leading-[var(--h5-22px-bold-line-height)] [font-style:var(--h5-22px-bold-font-style)]`}
            >
              {t("No data to show")}
            </div>
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
