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
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

interface NoDataSectionProps {
  local: string;
  handelDarkClick: () => void;
  handleLanguageClick: () => void;
}
export const NoDataSection = ({
  handleLanguageClick,
  local,
}: NoDataSectionProps): JSX.Element => {
  const [role, setRole] = useState("role");
  const [status, setStatus] = useState("status");
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);

  return (
    <div
      className="flex flex-col w-full overflow-hidden h-full items-start gap-[16px] pt-[16px] pr-[16px]"
    >
      <header className="flex h-[66px] justify-between pl-1 pr-0 py-0 w-full items-center">
        <div className="flex flex-col w-[340px] items-start gap-1.5 px-0 py-0.5">
          <h1
            className="font-lato font-semibold text-xl leading-[116%] tracking-[0] text-text-primary"
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
              <div
                className="font-lato font-bold text-base leading-[124%] tracking-[0] text-text-primary"
              >
                Anahera Jones
              </div>
              <div className="font-lato font-regular text-xs leading-[124%] tracking-[0] text-border-medium">
                Admin
              </div>
            </div>
          </div>
        </div>
      </header>

      <Card className="flex flex-col h-full items-start gap-5 p-[20px] pr-0 relative w-full rounded-2xl overflow-hidden bg-background-tertiary">
        <CardContent className=" w-full overflow-y-auto scroll-x-hidden h-full ">
          <div className={`w-full h-[866px] ${local === 'ar' ? "pl-[20px]" : "pr-[20px]"} `}>
            <div className="flex justify-between w-full items-center mb-[20px]">
              <div className="inline-flex items-center gap-2.5 ">
                <form className="relative">
                  <SearchIcon className="w-3.5 h-3.5 absolute top-[9px] left-[8px]" />
                  <input
                    type="search"
                    placeholder={t("Search for users")}
                    className="placeholder:text-[11px] text-[11px] bg-background-primary pl-[30px] py-[8px] rounded-[16px] w-[224px] h-[40px] border-0 px-4 py-2 rounded outline-none focus:border-0"
                  />
                </form>

                <Select value={role} onValueChange={(value) => setRole(value)}>
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
                    <SelectItem value="admin">{t("roles.admin")}</SelectItem>
                    <SelectItem value="user">{t("roles.user")}</SelectItem>
                  </SelectContent>
                </Select>

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
                    <SelectItem value="active">{t("status.active")}</SelectItem>
                    <SelectItem value="inactive">
                      {t("status.inactive")}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="inline-flex items-center gap-2.5 ">
                <Button className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-secondary-dark rounded-[20px] h-[40px] w-[146px]">
                  <PlusIcon className="w-3.5 h-3.5 text-background-primary" />
                  <span className="font-lato font-medium text-sm text-background-primary leading-[100%] tracking-[0] ">
                    {t("Add New User")}
                  </span>
                </Button>
              </div>
            </div>

            <div className="flex flex-col h-full items-center gap-[183px] w-full">
              <table className="w-full text-center">
                  <tr className=" h-[56px] bg-surface-default border-b border-border-light w-full">
                    <td
                      className={` font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary`}
                    >
                      No.
                    </td>
                    <td
                      className={`  font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary`}
                    >
                      User ID
                    </td>
                    <td
                      className={`  font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary`}
                    >
                      User Name
                    </td>
                    <td
                      className={`  font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary`}
                    >
                      Role
                    </td>
                    <td
                      className={`  font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary`}
                    >
                      User Type
                    </td>
                    <td
                      className={` font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary`}
                    >
                      Status
                    </td>
                    <td
                      className={` font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary`}
                    >
                      Action
                    </td>
                  </tr>
                
              </table>
              <div className="flex flex-col items-center">
                <img
                  className="w-[423px] h-[282px]"
                  alt="Element"
                  src="/noData.png"
                />
                <div
                  className="font-lato font-semibold text-xl leading-[116%] tracking-[0] text-text-primary"
                >
                  {t("No data to show")}
                </div>
              </div>
            </div>

            
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
