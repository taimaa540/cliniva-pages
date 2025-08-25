import {
  ArrowLeftIcon,
  BellIcon,
  FileTextIcon,
  SearchIcon,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Separator } from "../../../components/ui/separator";
import DarkModeToggle from "../../ElementUsersNoDataTo/DarkMode";
import TranslateIcon from "@mui/icons-material/Translate";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import SwitchWithLabel from "../../SwitchLabel";
const personalInfoData = [
  { label: "Card ID", value: "02200075921" },
  { label: "Gender", value: "Male" },
  { label: "Date of Birth", value: "Nov 20, 1994" },
  { label: "Nationality", value: "Sy" },
  { label: "Marital Status", value: "Married" },
  { label: "Number of children", value: "1" },
];

const contactInfoData = [
  {
    icon: "/icon-envelopeopen.svg",
    content: "ammarsvu91@gmail.com",
    hasEdit: true,
  },
  {
    icon: "/icon-phone.svg",
    content: "+966 50 123 4567\n+961 70 483 245",
    hasEdit: false,
  },
  {
    icon: "/phone-call.svg",
    content: "Mohammed Zaki, Father\n+963933348151",
    hasEdit: false,
  },
  {
    icon: "/home.svg",
    content: "2154 Abdulaziz Street, Al Olaya District, Riyadh, Saudi Arabia",
    hasEdit: false,
  },
];

const accountInfoData = [
  { label: "User ID", value: "US-001" },
  { label: "Full Name", value: "Ammar Mohammed  Al Sawwa" },
  { label: "User Name", value: "Ammar Al Sawwa" },
  { label: "Role", value: "Admin" },
  { label: "User Type", value: "Staff" },
  { label: "Workplace", value: "TCT Complex - X-Ray Clinic" },
];

const accountStatusData = [
  { label: "Account Status", value: "Active", isBadge: true },
  { label: "Account Creation Date", value: "April 28, 2025" },
  { label: "Last Modified Date", value: "April 28, 2025" },
  { label: "Last Login Date & Time", value: "May 22, 2025-Time : 23:49" },
];

const workingDaysData = [
  {
    day: "Sunday",
    shift1: "9:00 AM - 17:00 PM",
    shift2: "19:00 PM - 21:00 PM",
  },
  {
    day: "Monday",
    shift1: "9:00 AM - 17:00 PM",
    shift2: "19:00 PM - 21:00 PM",
  },
  {
    day: "Tuesday",
    shift1: "9:00 AM - 17:00 PM",
    shift2: "19:00 PM - 21:00 PM",
  },
  {
    day: "Wednesday",
    shift1: "9:00 AM - 17:00 PM",
    shift2: "19:00 PM - 21:00 PM",
  },
  {
    day: "Thursday",
    shift1: "9:00 AM - 17:00 PM",
    shift2: "19:00 PM - 21:00 PM",
  },
  { day: "Friday", shift1: "OFF", shift2: "OFF" },
  { day: "Saturday", shift1: "OFF", shift2: "OFF" },
];

const documentsData = [
  { title: "Contract", date: "E May 01, 2026 ", size: "0.5 MB" },
  { title: "CV / Resume*", date: "E May 30, 2028", size: "1.0 MB" },
  { title: "Work Permit", date: "E Mar 01, 2027", size: "0.7 MB" },
  { title: "Certifications", date: "E Mar 01, 2028", size: "0.4 MB" },
];

interface NoDataSectionProps {
  local: string;
  dark: boolean;
  handelDarkClick: () => void;
  handleLanguageClick: () => void;
}
export const AccountInformationSection = ({
  handleLanguageClick,
  local,
  dark,
  handelDarkClick,
}: NoDataSectionProps): JSX.Element => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);
  return (
    <div
      className={`flex flex-col w-[1217px] items-start gap-4 py-4 relative ${
        local === "ar" ? "right-[240px] pr-0 pl-5" : "left-[240px] pl-0 pr-5"
      } ${dark ? "bg-[#030711]" : ""}`}
    >
      <header className="flex h-[50px] justify-between pl-1 pr-0 py-0 max-w-[1197px] w-full items-center relative mx-auto">
        <div className="flex flex-col w-[340px] items-start gap-1.5 px-0 py-0.5 relative mt-[-1.00px] mb-[-1.00px]">
          <Button
            variant="ghost"
            className="inline-flex items-center gap-1.5 relative flex-[0_0_auto] h-auto p-0"
          >
            <ArrowLeftIcon
              className={`relative w-4 h-4 ${
                dark ? "text-[white]" : "text-[black]"
              } `}
            />
            <span
              className={`relative w-fit mt-[-1.00px] font-title-12px-regular font-[number:var(--title-12px-regular-font-weight)] ${
                dark ? "text-white" : "text-[#2a2b2a]"
              } text-[length:var(--title-12px-regular-font-size)] tracking-[var(--title-12px-regular-letter-spacing)] leading-[var(--title-12px-regular-line-height)] whitespace-nowrap [font-style:var(--title-12px-regular-font-style)]`}
            >
              {t("Back to Users List")}
            </span>
          </Button>

          <h1
            className={`relative self-stretch font-h5-22px-bold font-[number:var(--h5-22px-bold-font-weight)] ${
              dark ? "text-white" : "text-[#2a2b2a]"
            } text-[length:var(--h5-22px-bold-font-size)] tracking-[var(--h5-22px-bold-letter-spacing)] leading-[var(--h5-22px-bold-line-height)] [font-style:var(--h5-22px-bold-font-style)]`}
          >
            {t("User Details")}
          </h1>
        </div>

        <nav className="inline-flex gap-3 flex-[0_0_auto] rounded-[28px] items-center relative">
          <Button
            variant="ghost"
            size="icon"
            className="inline-flex items-start gap-2 p-2.5 relative flex-[0_0_auto] bg-secondary-light rounded-[20px] h-auto"
          >
            <SearchIcon className="relative w-5 h-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="inline-flex items-start gap-2 p-2.5 relative flex-[0_0_auto] bg-secondary-light rounded-[20px] h-auto"
          >
            <BellIcon className="relative w-5 h-5" />
            <div className="flex flex-col w-5 h-5 items-center justify-center gap-2.5 p-1 absolute top-1 left-4">
              <div className="relative w-2 h-2 bg-[#fa812d] rounded-[14px]" />
            </div>
          </Button>

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
        </nav>
      </header>

      <main
        dir="ltr"
        className={`flex w-[1197px] h-[903px] items-start gap-5 p-[20px] relative ${
          dark ? "bg-[#272932] border-[white]" : "bg-bg"
        } rounded-2xl `}
      >
        <aside className="relative w-[277px] h-[863px] bg-[#FFFDFC] rounded-xl [box-shadow:0px_4px_4px_0px_#00000040]">
          <Card>
            <section className="flex flex-col w-[245px] items-center gap-6 pt-10 pb-2 px-0 absolute top-4 left-4">
              <div className="relative w-24 h-24 bg-app-primary rounded-[100px]" />
              <div className="flex flex-col items-center gap-1.5 self-stretch w-full relative flex-[0_0_auto]">
                <h2 className="self-stretch mt-[-1.00px] font-[number:var(--title-18px-bold-font-weight)] text-on-surface-primary text-[length:var(--title-18px-bold-font-size)] text-center leading-[var(--title-18px-bold-line-height)] relative font-title-18px-bold tracking-[var(--title-18px-bold-letter-spacing)] [font-style:var(--title-18px-bold-font-style)]">
                  Ammar Al Sawwa
                </h2>
                <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] [font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-xs text-center tracking-[0] leading-[15.6px] whitespace-nowrap">
                    US-001
                  </span>
                  <div className="relative w-1 h-1 bg-border-default rounded-sm" />
                  <span className="relative w-fit mt-[-1.00px] [font-family:'Lato',Helvetica] font-normal text-on-surface-primary text-xs text-center tracking-[0] leading-[15.6px] whitespace-nowrap">
                    Staff
                  </span>
                </div>
              </div>
            </section>

            <Separator className="absolute w-[246px] h-px top-[258px] left-4" />

            <section className="flex flex-col w-[245px] items-start absolute top-72 left-4">
              <div className="flex flex-col w-[245px] items-start gap-4 relative">
                <h3 className="relative w-fit mt-[-1.00px] font-title-14px-bold font-[number:var(--title-14px-bold-font-weight)] text-on-surface-primary text-[length:var(--title-14px-bold-font-size)] tracking-[var(--title-14px-bold-letter-spacing)] leading-[var(--title-14px-bold-line-height)] whitespace-nowrap [font-style:var(--title-14px-bold-font-style)]">
                  {t("Personal Info")}
                </h3>

                <div className="inline-flex flex-col items-start gap-4 px-4 py-0 relative flex-[0_0_auto]">
                  {personalInfoData.map((item, index) => (
                    <div
                      key={index}
                      className="inline-flex items-start gap-4 relative flex-[0_0_auto]"
                    >
                      <div className="flex w-[110px] items-center justify-center gap-2.5 px-0 py-0.5 relative">
                        <span className=" text-sm relative w-[108px] mt-[-1.00px] font-title-14px-semibold font-[number:var(--title-14px-semibold-font-weight)] text-on-surface-secondary text-[length:var(--title-14px-semibold-font-size)] tracking-[var(--title-14px-semibold-letter-spacing)] leading-[var(--title-14px-semibold-line-height)] [font-style:var(--title-14px-semibold-font-style)]">
                          {t(`${item.label}`)}
                        </span>
                      </div>
                      <span className=" text-sm relative w-fit mt-[-1.00px] font-p-14px-bold font-[number:var(--p-14px-bold-font-weight)] text-on-surface-primary text-[length:var(--p-14px-bold-font-size)] tracking-[var(--p-14px-bold-letter-spacing)] leading-[var(--p-14px-bold-line-height)] whitespace-nowrap [font-style:var(--p-14px-bold-font-style)]">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <Separator className="absolute w-[246px] h-px top-[595px] left-4" />

            <section className="flex flex-col h-[226px] w-[245px] items-start  absolute top-[612px] left-4">
              <h3 className="relative w-fit mt-[-1.00px] font-title-14px-bold font-[number:var(--title-14px-bold-font-weight)] text-on-surface-primary text-[length:var(--title-14px-bold-font-size)] tracking-[var(--title-14px-bold-letter-spacing)] leading-[var(--title-14px-bold-line-height)] whitespace-nowrap [font-style:var(--title-14px-bold-font-style)]">
                {t("Contact Info")}
              </h3>

              <div className="inline-flex items-center relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                  {contactInfoData.map((item, index) => (
                    <div
                      key={index}
                      className="inline-flex w-[261px] items-center gap-3  py-0 relative flex-[0_0_auto]"
                    >
                      <div className="inline-flex items-start gap-2 p-[9px] relative flex-[0_0_auto] bg-primary-light rounded-[20px]">
                        <img
                          className="relative w-[36px] h-[36px]"
                          alt={`Contact ${index}`}
                          src={item.icon}
                        />
                      </div>
                      <div className="font-[number:var(--title-12px-bold-font-weight)] text-on-surface-primary text-[length:var(--title-12px-bold-font-size)] leading-[var(--title-12px-bold-line-height)] relative font-title-12px-bold tracking-[var(--title-12px-bold-letter-spacing)] [font-style:var(--title-12px-bold-font-style)]">
                        {item.content.split("\n").map((line, lineIndex) => (
                          <div key={lineIndex}>{line}</div>
                        ))}
                      </div>
                      {item.hasEdit && (
                        <button>
                          <img
                            className="absolute w-[24px] h-[25px] top-[14px] left-[211px]"
                            alt="send email"
                            src="/email2.svg"
                          />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Card>
        </aside>

        <section className="flex flex-col w-[865px] items-start relative">
          <div className="relative self-stretch w-full">
            <Card className="absolute w-[865px] h-[342px] top-10 -left-1 shadow-[0px_20px_24px_-4px_#0A0D121A] bg-[#FFFDFC] rounded-[16px]">
              <CardContent className="flex flex-col  items-start justify-center gap-6 p-[24px]">
                <h2 className="relative text-[14px] font-bold w-fit mt-[-1.00px] font-title-14px-bold font-[number:var(--title-14px-bold-font-weight)] text-on-surface-primary text-[length:var(--title-14px-bold-font-size)] tracking-[var(--title-14px-bold-letter-spacing)] leading-[var(--title-14px-bold-line-height)] whitespace-nowrap [font-style:var(--title-14px-bold-font-style)]">
                  {t("Account Information")}
                </h2>

                <div className="flex items-center relative self-stretch w-full">
                  <div className="relative w-[398px]">
                    <div className="w-[541px] flex items-start gap-6 px-4 py-0 relative">
                      <div className="inline-flex flex-col items-start justify-center gap-6 relative flex-[0_0_auto]">
                        {accountInfoData.map((item, index) => (
                          <div
                            key={index}
                            className="inline-flex items-center justify-center gap-4 relative flex-[0_0_auto]"
                          >
                            <span className="w-[108px] text-[14px] font-semibold mt-[-1.00px] font-[number:var(--title-14px-semibold-font-weight)] text-[black] text-[length:var(--title-14px-semibold-font-size)] leading-[var(--title-14px-semibold-line-height)] relative font-title-14px-semibold tracking-[var(--title-14px-semibold-letter-spacing)] [font-style:var(--title-14px-semibold-font-style)]">
                              {t(`${item.label}`)}
                            </span>
                            <span className="w-fit text-[14px] font-regular mt-[-1.00px] font-[number:var(--title-14px-bold-font-weight)] text-on-surface-primary text-[length:var(--title-14px-bold-font-size)] leading-[var(--title-14px-bold-line-height)] whitespace-nowrap relative font-title-14px-bold tracking-[var(--title-14px-bold-letter-spacing)] [font-style:var(--title-14px-bold-font-style)]">
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="absolute w-[398px] top-[3px] left-[397px]">
                    <div className="w-[398px] flex items-start gap-6 px-4 py-0 relative">
                      <div className="inline-flex flex-col items-start justify-center gap-6 relative flex-[0_0_auto]">
                        {accountStatusData.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-center gap-4 relative flex-[0_0_auto]"
                          >
                            <span className="w-[108px] text-[14px] font-semibold font-[number:var(--title-14px-semibold-font-weight)] text-[black] text-[length:var(--title-14px-semibold-font-size)] leading-[var(--title-14px-semibold-line-height)] relative font-title-14px-semibold tracking-[var(--title-14px-semibold-letter-spacing)] [font-style:var(--title-14px-semibold-font-style)]">
                              {t(`${item.label}`)}
                            </span>
                            {item.isBadge ? (
                              <SwitchWithLabel />
                            ) : (
                              <span className="w-fit text-[14px] font-regular font-[number:var(--p-14px-bold-font-weight)] text-on-surface-primary text-[length:var(--p-14px-bold-font-size)] leading-[var(--p-14px-bold-line-height)] whitespace-nowrap relative font-p-14px-bold tracking-[var(--p-14px-bold-letter-spacing)] [font-style:var(--p-14px-bold-font-style)]">
                                {item.value}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="absolute w-[865px] h-[474px] top-[390px] left-0 shadow-[0px_20px_24px_-4px_#0A0D121A] bg-[#FFFDFC] rounded-[16px]">
              <CardContent className="flex flex-col w-[795px] items-start justify-center gap-6 relative p-[24px]">
                <div className="relative w-[787px] bg-white">
                  <h2 className="absolute text-[14px] font-bold -top-px left-0 font-text-text-bold-text-sm-bold font-[number:var(--text-text-bold-text-sm-bold-font-weight)] text-on-surface-primary text-[length:var(--text-text-bold-text-sm-bold-font-size)] tracking-[var(--text-text-bold-text-sm-bold-letter-spacing)] leading-[var(--text-text-bold-text-sm-bold-line-height)] whitespace-nowrap [font-style:var(--text-text-bold-text-sm-bold-font-style)]">
                    {t("Employment information")}
                  </h2>

                  <div className="inline-flex items-center justify-center gap-4 absolute top-[50px] left-0">
                    <span className="w-[150px] text-[14px] font-semibold mt-[-1.00px] font-[number:var(--title-14px-semibold-font-weight)] text-[black] text-[length:var(--title-14px-semibold-font-size)] leading-[var(--title-14px-semibold-line-height)] relative font-title-14px-semibold tracking-[var(--title-14px-semibold-letter-spacing)] [font-style:var(--title-14px-semibold-font-style)]">
                      {t("Job Title")}
                    </span>
                    <span className="w-fit mt-[-1.00px] text-[14px] font-regular font-[number:var(--title-14px-bold-font-weight)] text-on-surface-primary text-[length:var(--title-14px-bold-font-size)] leading-[var(--title-14px-bold-line-height)] whitespace-nowrap relative font-title-14px-bold tracking-[var(--title-14px-bold-letter-spacing)] [font-style:var(--title-14px-bold-font-style)]">
                      Manager
                    </span>
                  </div>

                  <div className="inline-flex items-center justify-center gap-4 absolute top-[92px] left-0">
                    <span className="w-[108px] text-[14px] font-semibold font-[number:var(--title-14px-semibold-font-weight)] text-[black] text-[length:var(--title-14px-semibold-font-size)] leading-[var(--title-14px-semibold-line-height)] relative font-title-14px-semibold tracking-[var(--title-14px-semibold-letter-spacing)] [font-style:var(--title-14px-semibold-font-style)]">
                      {t("Date of Hire")}
                    </span>
                    <span className="w-fit mt-[-1.00px] text-[14px] font-regular  font-[number:var(--p-14px-bold-font-weight)] text-on-surface-primary text-[length:var(--p-14px-bold-font-size)] leading-[var(--p-14px-bold-line-height)] whitespace-nowrap relative font-p-14px-bold tracking-[var(--p-14px-bold-letter-spacing)] [font-style:var(--p-14px-bold-font-style)]">
                      April 27, 2025
                    </span>
                  </div>

                  <div className="inline-flex items-start gap-4 absolute top-[138px] left-0">
                    <span className="w-[108px] text-[14px] font-semibold mt-[-1.00px] font-[number:var(--title-14px-semibold-font-weight)] text-[black] text-[length:var(--title-14px-semibold-font-size)] leading-[var(--title-14px-semibold-line-height)] relative font-title-14px-semibold tracking-[var(--title-14px-semibold-letter-spacing)] [font-style:var(--title-14px-semibold-font-style)]">
                      {t("Working Days")}
                    </span>

                    <div className="flex flex-col w-[404px] items-start relative bg-surface-default rounded-2xl overflow-hidden">
                      <Table>
                        <TableHeader className="flex h-[17px] items-center justify-between pt-2.5 pb-2 relative self-stretch w-full bg-surface-default">
                          <TableRow className="flex w-full">
                            <TableHead className="flex w-[126px] items-center relative">
                              <span className="relative w-fit mt-[-1.00px] font-title-10px-regular font-[number:var(--title-10px-regular-font-weight)] text-on-surface-tertiary text-[length:var(--title-10px-regular-font-size)] tracking-[var(--title-10px-regular-letter-spacing)] leading-[var(--title-10px-regular-line-height)] whitespace-nowrap [font-style:var(--title-10px-regular-font-style)]">
                                Days
                              </span>
                            </TableHead>
                            <TableHead className="flex w-[152px] items-center relative">
                              <span className="relative w-fit mt-[-1.00px] font-title-10px-regular font-[number:var(--title-10px-regular-font-weight)] text-on-surface-tertiary text-[length:var(--title-10px-regular-font-size)] tracking-[var(--title-10px-regular-letter-spacing)] leading-[var(--title-10px-regular-line-height)] whitespace-nowrap [font-style:var(--title-10px-regular-font-style)]">
                                Shift 1
                              </span>
                            </TableHead>
                            <TableHead className="flex w-[126px] items-center relative">
                              <span className="relative w-fit mt-[-1.00px] font-title-10px-regular font-[number:var(--title-10px-regular-font-weight)] text-on-surface-tertiary text-[length:var(--title-10px-regular-font-size)] tracking-[var(--title-10px-regular-letter-spacing)] leading-[var(--title-10px-regular-line-height)] whitespace-nowrap [font-style:var(--title-10px-regular-font-style)]">
                                Shift 2
                              </span>
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {workingDaysData.map((day, index) => (
                            <TableRow
                              key={index}
                              className="py-[5px] flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] bg-surface-default border-b border-gray-200"
                            >
                              <TableCell className="flex-col w-16 justify-center gap-1 flex items-start relative">
                                <span className="relative w-fit mt-[-1.00px] font-title-11px-regular font-[number:var(--title-11px-regular-font-weight)] text-on-surface-primary text-[length:var(--title-11px-regular-font-size)] tracking-[var(--title-11px-regular-letter-spacing)] leading-[var(--title-11px-regular-line-height)] whitespace-nowrap [font-style:var(--title-11px-regular-font-style)]">
                                  {day.day}
                                </span>
                              </TableCell>
                              <TableCell className="flex flex-col w-[90px] items-start justify-center gap-1 relative">
                                <span className="relative w-fit mt-[-1.00px] mr-[-10.00px] font-title-11px-regular font-[number:var(--title-11px-regular-font-weight)] text-on-surface-secondary text-[length:var(--title-11px-regular-font-size)] tracking-[var(--title-11px-regular-letter-spacing)] leading-[var(--title-11px-regular-line-height)] whitespace-nowrap [font-style:var(--title-11px-regular-font-style)]">
                                  {day.shift1}
                                </span>
                              </TableCell>
                              <TableCell className="flex w-[126px] items-center gap-1 relative">
                                <span className="relative w-fit mt-[-1.00px] font-title-11px-regular font-[number:var(--title-11px-regular-font-weight)] text-on-surface-secondary text-[length:var(--title-11px-regular-font-size)] tracking-[var(--title-11px-regular-letter-spacing)] leading-[var(--title-11px-regular-line-height)] whitespace-nowrap [font-style:var(--title-11px-regular-font-style)]">
                                  {day.shift2}
                                </span>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>

                  <div className="flex flex-col w-[213px] h-[410px] items-end gap-[30px] pt-[37px] pb-[22px] px-[7px] absolute top-[50px] left-[574px]">
                    <h3 className="absolute text-[14px] font-semibold -top-px left-0 font-title-14px-semibold font-[number:var(--title-14px-semibold-font-weight)] text-on-surface-secondary text-[length:var(--title-14px-semibold-font-size)] tracking-[var(--title-14px-semibold-letter-spacing)] leading-[var(--title-14px-semibold-line-height)] whitespace-nowrap [font-style:var(--title-14px-semibold-font-style)]">
                      {t("Documents")}
                    </h3>

                    {documentsData.map((doc, index) => (
                      <Card
                        key={index}
                        className="flex h-[62px] items-center gap-3 p-3 relative self-stretch w-full bg-bg rounded-2xl"
                      >
                        <CardContent className="flex w-[38px] h-[38px] items-center justify-center gap-2.5 px-0 py-px relative bg-app-primary rounded-[10px] p-0">
                          <FileTextIcon className="relative w-5 h-5" />
                        </CardContent>

                        <div className="flex flex-col items-start gap-1.5 relative flex-1 grow">
                          <h4 className="self-stretch font-[number:var(--title-12px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-12px-semibold-font-size)] leading-[var(--title-12px-semibold-line-height)] relative mt-[-1.00px] font-title-12px-semibold tracking-[var(--title-12px-semibold-letter-spacing)] [font-style:var(--title-12px-semibold-font-style)]">
                            {doc.title}
                          </h4>

                          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                            <span className="w-fit font-[number:var(--title-11px-regular-font-weight)] text-on-surface-secondary text-[length:var(--title-11px-regular-font-size)] leading-[var(--title-11px-regular-line-height)] whitespace-nowrap relative mt-[-1.00px] font-title-11px-regular tracking-[var(--title-11px-regular-letter-spacing)] [font-style:var(--title-11px-regular-font-style)]">
                              {doc.date}
                            </span>
                            <div className="relative w-1 h-1 bg-border-default rounded-sm" />
                            <span className="relative w-fit mt-[-1.00px] font-title-11px-regular font-[number:var(--title-11px-regular-font-weight)] text-on-surface-secondary text-[length:var(--title-11px-regular-font-size)] tracking-[var(--title-11px-regular-letter-spacing)] leading-[var(--title-11px-regular-line-height)] whitespace-nowrap [font-style:var(--title-11px-regular-font-style)]">
                              {doc.size}
                            </span>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};
