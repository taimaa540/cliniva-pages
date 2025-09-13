import {
  BellIcon,
  ChevronDownIcon,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { useLanguage } from "../../lib/LanguageContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../components/ui/collapsible";
import { Textarea } from "../../components/ui/textarea";
import { useState } from "react";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";


export const AddNewService = (): JSX.Element => {
  const { local, handleLanguageClick } = useLanguage();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);
  const [open, setOpen] = useState({
    identification: true,
    sessions: true,
  });

  return (
    <>
      <div className="flex flex-col w-full overflow-hidden h-full items-start gap-4 py-4 pl-0 pr-5">
        <header className="flex h-[66px] justify-between pl-1 pr-0 py-0 w-full items-center">
          <div className="flex flex-col w-[340px] items-start gap-1.5 px-0 py-0.5">
            <h1 className="font-lato font-semibold text-xl leading-[116%] tracking-[0] text-text-primary">
              {t("Services Management")}
            </h1>
            <div className="flex gap-[8px] items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21 12C21 12.4142 20.6642 12.75 20.25 12.75L3.75 12.75C3.33579 12.75 3 12.4142 3 12C3 11.5858 3.33579 11.25 3.75 11.25L20.25 11.25C20.6642 11.25 21 11.5858 21 12Z"
                  fill="#414651"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.0303 4.71967C11.3232 5.01256 11.3232 5.48744 11.0303 5.78033L4.81066 12L11.0303 18.2197C11.3232 18.5126 11.3232 18.9874 11.0303 19.2803C10.7374 19.5732 10.2626 19.5732 9.96967 19.2803L3.21967 12.5303C2.92677 12.2374 2.92677 11.7626 3.21967 11.4697L9.96967 4.71967C10.2626 4.42678 10.7374 4.42678 11.0303 4.71967Z"
                  fill="#414651"
                />
              </svg>
              <p className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                {t("Add New Service")}
              </p>
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
                  {t("Admin")}
                </div>
              </div>
            </div>
          </div>
        </header>

        <Card className=" h-full items-start gap-5 p-[20px] pr-0 relative w-full rounded-2xl overflow-hidden bg-background-secondary">
          <CardContent className="w-full overflow-y-auto scroll-x-hidden h-full ">
            <div
              className={`w-full h-[866px] flex flex-col items-end gap-[16px] ${
                local === "ar" ? "pl-[20px]" : "pr-[20px]"
              } `}
            >
              <Card className="w-full bg-background-primary rounded-[16px] p-[16px]">
                <CardContent dir={local === "en" ? "ltr" : "rtl"}>
                  <Collapsible
                    open={open.identification}
                    onOpenChange={() =>
                      setOpen({ ...open, identification: !open.identification })
                    }
                    className="w-full"
                  >
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className="p-0 hover:bg-[none] w-full"
                      >
                        <div className="flex w-full items-center justify-between mb-[12px] ">
                          <h2 className="text-primary-default text-base font-lato font-bold leading-[124%] tracking-[0] ">
                            {t("Service info")}
                          </h2>
                          <ChevronDownIcon
                            style={{ width: "24px", height: "24px" }}
                            className={`transition-transform duration-200 ${
                              open.identification ? "rotate-180" : "rotate-0"
                            }`}
                          />
                        </div>
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="w-full">
                      <div className="flex flex-col gap-[16px]">
                        <div className="grid grid-cols-2 gap-[22px]">
                          <h3 className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-secondary-dark">
                            {t("Identification")}
                          </h3>
                          <h3 className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-secondary-dark">
                            {t("Assign")}
                          </h3>
                          <div className="flex items-center gap-[32px] w-full">
                            <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                              {t("Services Name")}
                            </Label>
                            <Input
                              placeholder={`${t("Enter")} ${t("Full Name")}`}
                              className="h-[48px] flex-1 px-4 py-2 rounded bg-surface-default border border-solid border-border-light font-lato font-regular text-base leading-[150%] tracking-[0] placeholder:font-lato placeholder:font-regular placeholder:text-base placeholder:leading-[150%] placeholder:tracking-[0] placeholder:text-text-secondary"
                            />
                          </div>
                          <div className="flex items-center gap-[32px] w-full">
                            <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                              {t("Assign")} {t("Complex")}
                            </Label>
                            <Select>
                              <SelectTrigger className="flex-1 h-[48px] px-4 py-2 rounded bg-surface-default border border-solid border-border-light font-lato font-regular text-base leading-[150%] tracking-[0] placeholder:font-lato placeholder:font-regular placeholder:text-base placeholder:leading-[150%] placeholder:tracking-[0] placeholder:text-text-secondary">
                                <SelectValue
                                  placeholder={t("Select Category")}
                                />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="option 1">
                                  {t("option")} 1
                                </SelectItem>
                                <SelectItem value="option 2">
                                  {t("option")} 2
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="flex items-center gap-[32px] w-full">
                            <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                              {t("Service Category")}
                            </Label>
                            <Select>
                              <SelectTrigger className="flex-1 h-[48px] px-4 py-2 rounded bg-surface-default border border-solid border-border-light font-lato font-regular text-base leading-[150%] tracking-[0] placeholder:font-lato placeholder:font-regular placeholder:text-base placeholder:leading-[150%] placeholder:tracking-[0] placeholder:text-text-secondary">
                                <SelectValue
                                  placeholder={t("Select Category")}
                                />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="option 1">
                                  {t("option")} 1
                                </SelectItem>
                                <SelectItem value="option 2">
                                  {t("option")} 2
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="flex items-center gap-[32px] w-full">
                            <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                              {t("Assign")} {t("Clinics")}
                            </Label>
                            <Select>
                              <SelectTrigger className="flex-1 h-[48px] px-4 py-2 rounded bg-surface-default border border-solid border-border-light font-lato font-regular text-base leading-[150%] tracking-[0] placeholder:font-lato placeholder:font-regular placeholder:text-base placeholder:leading-[150%] placeholder:tracking-[0] placeholder:text-text-secondary">
                                <SelectValue
                                  placeholder={t("Select Category")}
                                />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="option 1">
                                  {t("option")} 1
                                </SelectItem>
                                <SelectItem value="option 2">
                                  {t("option")} 2
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="flex items-start gap-[32px] w-full">
                            <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                              {t("Service Description")}
                            </Label>
                            <Textarea
                              placeholder={`${t("Enter")} ${t("Description")}`}
                              className="w-full flex-1 h-[170px] px-4 py-2 rounded bg-surface-default border border-solid border-border-light [font-lato font-regular text-base leading-[150%] tracking-[0] placeholder:font-lato placeholder:font-regular placeholder:text-base placeholder:leading-[150%] placeholder:tracking-[0] placeholder:text-text-secondary"
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-[32px] w-full">
                              <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                                {t("Assign")} {t("Doctors")}
                              </Label>
                              <Select>
                                <SelectTrigger className="flex-1 h-[48px] px-4 py-2 rounded bg-surface-default border border-solid border-border-light font-lato font-regular text-base leading-[150%] tracking-[0] placeholder:font-lato placeholder:font-regular placeholder:text-base placeholder:leading-[150%] placeholder:tracking-[0] placeholder:text-text-secondary">
                                  <SelectValue
                                    placeholder={t("Select Category")}
                                  />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="option 1">
                                    {t("option")} 1
                                  </SelectItem>
                                  <SelectItem value="option 2">
                                    {t("option")} 2
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="flex flex-col">
                              <h3 className="my-[16px] font-lato font-semibold text-sm leading-[125%] tracking-[0] text-secondary-dark">
                                {t("Resources")}
                              </h3>
                              <div className="flex items-start gap-[32px] w-full">
                                <Label className="w-[160px] font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                                  {t("Required Equipment")}
                                </Label>
                                <Textarea
                                  placeholder={`${t("Enter")} ${t(
                                    "Required Equipment"
                                  )}`}
                                  className="w-full flex-1 h-[170px] px-4 py-2 rounded bg-surface-default border border-solid border-border-light [font-lato font-regular text-base leading-[150%] tracking-[0] placeholder:font-lato placeholder:font-regular placeholder:text-base placeholder:leading-[150%] placeholder:tracking-[0] placeholder:text-text-secondary"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>

              <Card className="w-full bg-background-primary rounded-[16px] p-[16px]">
                <CardContent dir={local === "en" ? "ltr" : "rtl"}>
                  <Collapsible
                    open={open.sessions}
                    onOpenChange={() =>
                      setOpen({ ...open, sessions: !open.sessions })
                    }
                    className="w-full"
                  >
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className="p-0 hover:bg-[none] w-full"
                      >
                        <div className="flex w-full items-center justify-between mb-[12px] ">
                          <h2 className="text-primary-default text-base font-lato font-bold leading-[124%] tracking-[0] ">
                            {t("Sessions")}
                          </h2>
                          <ChevronDownIcon
                            style={{ width: "24px", height: "24px" }}
                            className={`transition-transform duration-200 ${
                              open.sessions ? "rotate-180" : "rotate-0"
                            }`}
                          />
                        </div>
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="w-full">
                      <div className="flex flex-col h-full items-end gap-[16px] w-full">
                        <table className="w-full text-center">
                          <thead>
                            <tr className="h-[56px] bg-background-primary border-b border-border-light w-full">
                              <td className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                                {t("No.")}
                              </td>
                              <td className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                                {t("Session Name")}
                              </td>
                              <td className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                                {t("Duration")}
                              </td>
                              <td className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                                {t("Description")}
                              </td>
                              <td className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                                {t("Appointment Required ?")}
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="h-[54px] bg-background-primary border-b border-border-light w-full">
                              <td className="align-middle font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                                1
                              </td>
                              <td className="align-middle font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-primary">
                                <p className="border border-border-light w-fit px-[16px] py-[8px] rounded-[4px] mx-auto">
                                  Session Name
                                </p>
                              </td>
                              <td className="align-middle  font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                                <p className="border border-border-light w-fit px-[16px] py-[8px] rounded-[4px] mx-auto">
                                  00:50
                                </p>
                              </td>
                              <td className="align-middle  font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                                <p className="border border-border-light w-fit px-[16px] py-[8px] rounded-[4px] mx-auto">
                                  Patient history & symptom assessment
                                </p>
                              </td>
                              <td className="align-middle font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                                <input type="checkbox" checked />
                              </td>
                              <td className="align-middle">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z"
                                    fill="#00B48D"
                                  />
                                </svg>
                              </td>
                            </tr>
                            <tr className="h-[54px] bg-background-primary border-b border-border-light w-full">
                              <td className="align-middle font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                                2
                              </td>
                              <td className="align-middle font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-primary">
                                <p className="border border-border-light w-fit px-[16px] py-[8px] rounded-[4px] mx-auto">
                                  Session Name
                                </p>
                              </td>
                              <td className="align-middle  font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                                <p className="border border-border-light w-fit px-[16px] py-[8px] rounded-[4px] mx-auto">
                                  00:50
                                </p>
                              </td>
                              <td className="align-middle  font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                                <p className="border border-border-light w-fit px-[16px] py-[8px] rounded-[4px] mx-auto">
                                  Patient history & symptom assessment
                                </p>
                              </td>
                              <td className="align-middle font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                                <input type="checkbox" checked />
                              </td>
                              <td>
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z"
                                    fill="#00B48D"
                                  />
                                </svg>
                              </td>
                            </tr>
                            <tr className="h-[54px] bg-background-primary border-b border-border-light w-full">
                              <td className="align-middle font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                                3
                              </td>
                              <td className="align-middle font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-primary">
                                <p className="border border-border-light w-fit px-[16px] py-[8px] rounded-[4px] mx-auto">
                                  Session Name
                                </p>
                              </td>
                              <td className="align-middle  font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                                <p className="border border-border-light w-fit px-[16px] py-[8px] rounded-[4px] mx-auto">
                                  00:50
                                </p>
                              </td>
                              <td className="align-middle  font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                                <p className="border border-border-light w-fit px-[16px] py-[8px] rounded-[4px] mx-auto">
                                  Patient history & symptom assessment
                                </p>
                              </td>
                              <td className="align-middle font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">
                                <input type="checkbox" checked />
                              </td>
                              <td>
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z"
                                    fill="#00B48D"
                                  />
                                </svg>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <svg
                        className={` ${local === 'ar' ? "ml-[30px]" : "mr-[20px]"}`}
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6 16C6 15.4477 6.3731 15 6.83333 15H25.1667C25.6269 15 26 15.4477 26 16C26 16.5523 25.6269 17 25.1667 17H6.83333C6.3731 17 6 16.5523 6 16Z"
                            fill="#00B48D"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16 6C16.5523 6 17 6.3731 17 6.83333V25.1667C17 25.6269 16.5523 26 16 26C15.4477 26 15 25.6269 15 25.1667V6.83333C15 6.3731 15.4477 6 16 6Z"
                            fill="#00B48D"
                          />
                        </svg>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>

              <div className="flex gap-[16px] mt-auto">
                <button className=" w-[200px] h-[40px] rounded-[20px] border border-border-light bg-surface-primary  font-lato font-medium text-sm leading-[100%] tracking-[0] text-text-primary">
                  {t("Cancel")}
                </button>
                <button className=" w-[200px] h-[40px] rounded-[20px] bg-secondary-dark font-lato font-medium text-sm leading-[100%] tracking-[0] text-surface-primary">
                  {t("Save")}
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
