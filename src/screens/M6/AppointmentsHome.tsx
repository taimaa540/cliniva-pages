import {
  BellIcon,
  SearchIcon,
  ChevronDownIcon,
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  StethoscopeIcon,
  XIcon,
} from "lucide-react";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { useLanguage } from "../../lib/LanguageContext";
import { Link } from "react-router-dom";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../components/ui/collapsible";
import { useState } from "react";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { CompletedCard } from "./CompletedCard";
import { ScheduledCard } from "./ScheduledCard";
import { CanceldCard } from "./CanceledCard";
import { TotalNum } from "./TotalNum";
import { ScheduledNum } from "./ScheduledNum";
import { AvailableNum } from "./AvailableNum";
import { CompletedNum } from "./CompletedNum";
import { CanceldNum } from "./CanceledNum";
import { MissedNum } from "./MissedNum";
import { AddCard } from "./AddCard";
import { MissedCard } from "./MissedCard";
import { Label } from "../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Separator } from "../../components/ui/separator";
import { Textarea } from "../../components/ui/textarea";
import { CardInAll } from "./CardInAll";
import { AddCardInAll } from "./AddCardInAll";
const appointmentsData = [
  {
    id: 1,
    patientName: "Laura Bennett",
    clinicName: "Noor Clinic",
    doctorName: "Maurice Galley",
    roomNumber: "PB-002",
    date: "24 Sep 2028",
    time: "9:00 AM",
  },
  {
    id: 2,
    patientName: "Laura Bennett",
    clinicName: "Noor Clinic",
    doctorName: "Maurice Galley",
    roomNumber: "PB-002",
    date: "24 Sep 2028",
    time: "9:00 AM",
  },
];

const appointmentDetails = [
  {
    icon: CalendarIcon,
    text: "Sep 19, 2025",
  },
  {
    icon: ClockIcon,
    text: "9:00 AM - 10:00 AM",
  },
  {
    icon: MapPinIcon,
    text: "Noor Clinic",
  },
  {
    icon: StethoscopeIcon,
    text: "Dr.Mahmoud Fadel",
  },
];

type SidebarProps = {
  showLeftSidebar: boolean;
  setShowLeftSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Appointments = ({
  showLeftSidebar,
  setShowLeftSidebar,
}: SidebarProps): JSX.Element => {
  const [showRightSidebar, setShowRightSidebar] = useState(true);
  const [selected, setSelected] = useState("All Clinics");
  const [addPatient, setAddPatient] = useState({
    addPatient1: false,
    addPatient2: false,
    addPatient3: false,
    addPatient4: false,
    addPatient5: false,
    addPatient6: false,
    addPatient7: false,
    addPatient8: false,
  });
  const shouldShow = Object.values(addPatient).some((val) => val === true);
  const [open, setOpen] = useState({
    services: true,
    onGoingAppointment: true,
    upcomingAppointments: true,
  });
  const { local, handleLanguageClick } = useLanguage();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);

  return (
    <>
      <div className="flex flex-col w-full overflow-hidden items-start gap-4 py-4 pl-0 pr-5 max-[767px]:pr-0 ">
        <header className="flex h-[66px] justify-between pl-1 pr-0 py-0 w-full items-center">
          <div className="flex flex-col w-[340px] items-start gap-1.5 px-0 py-0.5">
            <h1 className="font-lato font-semibold text-xl leading-[116%] tracking-[0] text-text-primary">
              {t("Appointments")}
            </h1>
          </div>

          <div className="inline-flex gap-3 max-[767px]:gap-2 flex-[0_0_auto] rounded-[28px] items-center">
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
              <div className="max-[767px]:hidden flex-col items-start gap-1 inline-flex ">
                <div className="font-lato font-bold text-base leading-[124%] tracking-[0] text-text-primary">
                  Anahera Jones
                </div>
                <div className="font-lato font-regular text-xs leading-[124%] tracking-[0] text-border-medium">
                  Admin
                </div>
              </div>
            </div>
          </div>
        </header>
        <div
          className={` ${
            showRightSidebar
              ? "grid grid-cols-4 gap-[8px] max-[991px]:grid-cols-3 max-[767px]:grid-cols-1 w-full h-full overflow-y-auto scroll-x-hidden"
              : "w-full h-full overflow-y-auto scroll-x-hidden"
          }`}
        >
          {showRightSidebar && (
            <Card
              dir={`${local === "ar" ? "rtl" : "ltr"}`}
              className="relative h-full rounded-2xl bg-background-tertiary col-span-3 max-[991px]:col-span-2 w-full"
            >
              <CardContent className="w-full h-full pt-[20px] pl-[6px] pr-[8px]">
                <header className="flex justify-between w-full max-[767px]:flex-col max-[991px]:gap-[5px]">
                  <div className="flex gap-[10px] max-[991px]:gap-[5px] items-center">
                    <span className="py-[9px] px-[10px] bg-secondary-light rounded-[20px] font-lato font-medium text-[11px] leading-[105%] tracking-[0] text-text-primary">
                      {t("Today")}
                    </span>
                    <select className="bg-transparent font-lato font-semibold text-base max-[767px]:text-sm max-[991px]:text-xs leading-[124%] tracking-[0] text-text-primary">
                      <option value="September 2025">
                        {t("September")} 2025
                      </option>
                      <option value="October 2025">{t("October")} 2025</option>
                      <option value="November 2025">
                        {t("November")} 2025
                      </option>
                      <option value="December 2025">
                        {t("December")} 2025
                      </option>
                      <option value="January 2026">{t("January")} 2026</option>
                      <option value="February 2026">
                        {t("February")} 2026
                      </option>
                      <option value="March 2026">{t("March")} 2026</option>
                      <option value="April 2026">{t("April")} 2026</option>
                      <option value="May 2026">{t("May")} 2026</option>
                    </select>
                    <form className="relative">
                      <SearchIcon className="w-3.5 h-3.5 absolute top-[9px] left-[8px]" />
                      <input
                        type="search"
                        placeholder={t("Search patient")}
                        className="placeholder:text-[11px] max-[991px]:placeholder:text-[9px] text-[11px] max-[991px]:text-[9px] bg-background-primary pl-[30px] py-[8px] rounded-[16px] w-[165px] max-[991px]:w-[115px] border-0 px-4 py-2 rounded outline-none focus:border-0 "
                      />
                    </form>
                  </div>
                  <div className="flex gap-[16px] max-[991px]:gap-[5px]">
                    <div className="flex gap-[8px] max-[991px]:gap-[5px]">
                      <select
                        value={selected}
                        onChange={(e) => setSelected(e.target.value)}
                        className="py-[9px] px-[12px] max-[991px]:p-0 rounded-[20px] bg-secondary-light font-lato font-medium text-[11px] max-[991px]:text-[9px] leading-[105%] tracking-[0] text-text-primary outline-none"
                      >
                        <option value="Noor Clinic">
                          {t("Clinic")} : {t("Noor Clinic")}
                        </option>
                        <option value="All Clinics">
                          {t("Clinic")} : {t("All Clinics")}
                        </option>
                      </select>
                      <select
                        defaultValue="All Doctors"
                        className="py-[9px] px-[12px] max-[991px]:p-0 rounded-[20px] bg-secondary-light font-lato font-medium text-[11px] max-[991px]:text-[9px] leading-[105%] tracking-[0] text-text-primary outline-none"
                      >
                        <option value="Doctor:All Doctors">
                          {t("Doctor")} : {t("All Doctors")}
                        </option>
                        <option value="Doctor:Mahmoud Fadel">
                          {t("Doctor")} : Mahmoud Fadel
                        </option>
                      </select>
                    </div>
                    <div
                      dir="ltr"
                      className="flex gap-[8px] max-[991px]:gap-[4px]"
                    >
                      <div className="w-[30px] max-[991px]:w-[25px] h-[30px] max-[991px]:h-[25px] rounded-[15px] bg-secondary-dark flex items-center justify-center">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9.85355 12.3536C10.0488 12.1583 10.0488 11.8417 9.85355 11.6464L6.20711 8L9.85355 4.35355C10.0488 4.15829 10.0488 3.84171 9.85355 3.64645C9.65829 3.45118 9.34171 3.45118 9.14645 3.64645L5.14645 7.64645C4.95118 7.84171 4.95118 8.15829 5.14645 8.35355L9.14645 12.3536C9.34171 12.5488 9.65829 12.5488 9.85355 12.3536Z"
                            fill="#FFFDFC"
                          />
                        </svg>
                      </div>
                      <div className="w-[30px] max-[991px]:w-[25px] h-[30px] max-[991px]:h-[25px] rounded-[15px] bg-secondary-dark flex items-center justify-center">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.14645 12.3536C5.95118 12.1583 5.95118 11.8417 6.14645 11.6464L9.79289 8L6.14645 4.35355C5.95118 4.15829 5.95118 3.84171 6.14645 3.64645C6.34171 3.45118 6.65829 3.45118 6.85355 3.64645L10.8536 7.64645C11.0488 7.84171 11.0488 8.15829 10.8536 8.35355L6.85355 12.3536C6.65829 12.5488 6.34171 12.5488 6.14645 12.3536Z"
                            fill="#FFFDFC"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </header>

                {selected === "Noor Clinic" && (
                  <div className="relative mt-[16px] grid grid-cols-[1fr_2fr_2fr_2fr_2fr_2fr] max-[991px]:grid-cols-[1fr_2fr_2fr_2fr_2fr] max-[767px]:grid-cols-[20%_25%_25%_25%] max-[767px]:gap-x-[4px] gap-y-[16px] gap-x-[8px] items-center">
                    <div className="h-[60px] bg-background-primary font-lato font-bold text-xs leading-[130%] tracking-[0] text-[#4D5260] rounded-[12px] flex items-center justify-center">
                      {t("Time/Date")}
                    </div>
                    <div className="relative h-[60px] bg-background-primary rounded-[12px] flex flex-col items-center justify-center gap-[4px]">
                      <h6 className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-primary-default">
                        {t("Sat")}
                      </h6>
                      <p className="font-lato font-semibold text-xl leading-[116%] tracking-[0] text-[white] bg-primary-default rounded-[50px] p-[4px]">
                        18
                      </p>
                      <hr className="bg-border-light h-[750px] w-[1px] absolute top-[76px] left-[50%] z-0" />
                    </div>
                    <div className="relative h-[60px] bg-background-primary rounded-[12px] flex flex-col items-center justify-center gap-[4px]">
                      <h6 className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary">
                        {t("Sun")}
                      </h6>
                      <p className="font-lato font-semibold text-xl leading-[116%] tracking-[0] text-text-primary">
                        19
                      </p>
                      <hr className="bg-border-light h-[750px] w-[1px] absolute top-[76px] left-[50%] z-0" />
                    </div>
                    <div className="relative h-[60px] bg-background-primary rounded-[12px] flex flex-col items-center justify-center gap-[4px]">
                      <h6 className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary">
                        {t("Mon")}
                      </h6>
                      <p className="font-lato font-semibold text-xl leading-[116%] tracking-[0] text-text-primary">
                        20
                      </p>
                      <hr className="bg-border-light h-[750px] w-[1px] absolute top-[76px] left-[50%] z-0" />
                    </div>
                    <div className="max-[767px]:hidden relative h-[60px] bg-background-primary rounded-[12px] flex flex-col items-center justify-center gap-[4px]">
                      <h6 className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary">
                        {t("Tue")}
                      </h6>
                      <p className="font-lato font-semibold text-xl leading-[116%] tracking-[0] text-text-primary">
                        21
                      </p>
                      <hr className="bg-border-light h-[525px] w-[1px] absolute top-[76px] left-[50%] z-0" />
                    </div>
                    <div className="max-[991px]:hidden relative h-[60px] bg-background-primary rounded-[12px] flex flex-col items-center justify-center gap-[4px]">
                      <h6 className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary">
                        {t("Wed")}
                      </h6>
                      <p className="font-lato font-semibold text-xl leading-[116%] tracking-[0] text-text-primary">
                        22
                      </p>
                      <hr className="bg-border-light h-[525px] w-[1px] absolute top-[76px] left-[50%] z-0" />
                    </div>
                    <span className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary flex items-center justify-center">
                      9:00 {t("AM")}
                    </span>
                    <CompletedCard />
                    <ScheduledCard />
                    <ScheduledCard />
                    <div className="max-[767px]:hidden">
                      <ScheduledCard />
                    </div>
                    <div className="max-[991px]:hidden">
                      <ScheduledCard />
                    </div>
                    <span className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary flex items-center justify-center">
                      10:00 {t("AM")}
                    </span>
                    <CanceldCard />
                    <AddCard
                      addPatient={addPatient.addPatient1}
                      handelAddClick={() =>
                        setAddPatient({
                          addPatient1: true,
                          addPatient2: false,
                          addPatient3: false,
                          addPatient4: false,
                          addPatient5: false,
                          addPatient6: false,
                          addPatient7: false,
                          addPatient8: false,
                        })
                      }
                    />
                    <ScheduledCard />
                    <div className="max-[767px]:hidden">
                      <ScheduledCard />
                    </div>
                    <div className="max-[991px]:hidden">
                      <ScheduledCard />
                    </div>
                    <span className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary flex items-center justify-center">
                      11:00 {t("AM")}
                    </span>
                    <MissedCard />
                    <ScheduledCard />
                    <ScheduledCard />
                    <div className="max-[767px]:hidden">
                      <ScheduledCard />
                    </div>
                    <div className="max-[991px]:hidden">
                      <ScheduledCard />
                    </div>
                    <span className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary flex items-center justify-center">
                      12:00 {t("AM")}
                    </span>
                    <ScheduledCard />
                    <AddCard
                      addPatient={addPatient.addPatient2}
                      handelAddClick={() =>
                        setAddPatient({
                          addPatient1: false,
                          addPatient2: true,
                          addPatient3: false,
                          addPatient4: false,
                          addPatient5: false,
                          addPatient6: false,
                          addPatient7: false,
                          addPatient8: false,
                        })
                      }
                    />
                    <AddCard
                      addPatient={addPatient.addPatient3}
                      handelAddClick={() =>
                        setAddPatient({
                          addPatient1: false,
                          addPatient2: false,
                          addPatient3: true,
                          addPatient4: false,
                          addPatient5: false,
                          addPatient6: false,
                          addPatient7: false,
                          addPatient8: false,
                        })
                      }
                    />
                    <div className="max-[767px]:hidden">
                      <AddCard
                        addPatient={addPatient.addPatient4}
                        handelAddClick={() =>
                          setAddPatient({
                            addPatient1: false,
                            addPatient2: false,
                            addPatient3: false,
                            addPatient4: true,
                            addPatient5: false,
                            addPatient6: false,
                            addPatient7: false,
                            addPatient8: false,
                          })
                        }
                      />
                    </div>
                    <div className="max-[991px]:hidden">
                      <AddCard
                        addPatient={addPatient.addPatient5}
                        handelAddClick={() =>
                          setAddPatient({
                            addPatient1: false,
                            addPatient2: false,
                            addPatient3: false,
                            addPatient4: false,
                            addPatient5: true,
                            addPatient6: false,
                            addPatient7: false,
                            addPatient8: false,
                          })
                        }
                      />
                    </div>
                    <span className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary flex items-center justify-center">
                      1:00 {t("PM")}
                    </span>
                    <ScheduledCard />
                    <ScheduledCard />
                    <ScheduledCard />
                    <div className="max-[767px]:hidden">
                      <ScheduledCard />
                    </div>
                    <div className="max-[991px]:hidden">
                      <ScheduledCard />
                    </div>
                    <span className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary flex items-center justify-center">
                      2:00 {t("PM")}
                    </span>
                    <AddCard
                      addPatient={addPatient.addPatient6}
                      handelAddClick={() =>
                        setAddPatient({
                          addPatient1: false,
                          addPatient2: false,
                          addPatient3: false,
                          addPatient4: false,
                          addPatient5: false,
                          addPatient6: true,
                          addPatient7: false,
                          addPatient8: false,
                        })
                      }
                    />
                    <ScheduledCard />
                    <AddCard
                      addPatient={addPatient.addPatient7}
                      handelAddClick={() =>
                        setAddPatient({
                          addPatient1: false,
                          addPatient2: false,
                          addPatient3: false,
                          addPatient4: false,
                          addPatient5: false,
                          addPatient6: false,
                          addPatient7: true,
                          addPatient8: false,
                        })
                      }
                    />
                    <div className="max-[767px]:hidden"></div>
                    <div className="max-[991px]:hidden"></div>
                    <span className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary flex items-center justify-center">
                      3:00 {t("PM")}
                    </span>
                    <AddCard
                      addPatient={addPatient.addPatient8}
                      handelAddClick={() =>
                        setAddPatient({
                          addPatient1: false,
                          addPatient2: false,
                          addPatient3: false,
                          addPatient4: false,
                          addPatient5: false,
                          addPatient6: false,
                          addPatient7: false,
                          addPatient8: true,
                        })
                      }
                    />
                    <ScheduledCard />
                    <ScheduledCard />
                    <></>
                    <></>
                  </div>
                )}
                {selected === "All Clinics" && (
                  <div className="relative mt-[16px] grid grid-cols-[1fr_2fr_2fr_2fr_2fr_2fr] max-[991px]:grid-cols-[1fr_2fr_2fr_2fr_2fr] max-[767px]:grid-cols-[20%_25%_25%_25%] max-[767px]:gap-x-[4px] gap-y-[16px] gap-x-[8px] items-center">
                    <div className="h-[60px] bg-background-primary font-lato font-bold text-xs max-[767px]:text-[10px] leading-[130%] tracking-[0] text-[#4D5260] rounded-[12px] flex items-center justify-center">
                      {t("Time/Date")}
                    </div>
                    <div className="relative h-[60px] bg-background-primary rounded-[12px] flex flex-col items-center justify-center gap-[4px]">
                      <h6 className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-primary-default">
                        {t("Sat")}
                      </h6>
                      <p className="font-lato font-semibold text-xl leading-[116%] tracking-[0] text-[white] bg-primary-default rounded-[50px] p-[4px]">
                        18
                      </p>
                      <hr className="bg-border-light h-[882px] max-[767px]:h-[1562px] max-[991px]:h-[1252px] w-[1px] absolute top-[76px] left-[50%] z-0" />
                    </div>
                    <div className="relative h-[60px] bg-background-primary rounded-[12px] flex flex-col items-center justify-center gap-[4px]">
                      <h6 className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary">
                        {t("Sun")}
                      </h6>
                      <p className="font-lato font-semibold text-xl leading-[116%] tracking-[0] text-text-primary">
                        19
                      </p>
                      <hr className="bg-border-light h-[882px] max-[767px]:h-[1562px] max-[991px]:h-[1252px] w-[1px] absolute top-[76px] left-[50%] z-0" />
                    </div>
                    <div className=" relative h-[60px] bg-background-primary rounded-[12px] flex flex-col items-center justify-center gap-[4px]">
                      <h6 className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary">
                        {t("Mon")}
                      </h6>
                      <p className="font-lato font-semibold text-xl leading-[116%] tracking-[0] text-text-primary">
                        20
                      </p>
                      <hr className="bg-border-light h-[882px] max-[767px]:h-[1562px] max-[991px]:h-[1252px] w-[1px] absolute top-[76px] left-[50%] z-0" />
                    </div>
                    <div className="max-[767px]:hidden relative h-[60px] bg-background-primary rounded-[12px] flex flex-col items-center justify-center gap-[4px]">
                      <h6 className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary">
                        {t("Tue")}
                      </h6>
                      <p className="font-lato font-semibold text-xl leading-[116%] tracking-[0] text-text-primary">
                        21
                      </p>
                      <hr className="bg-border-light h-[882px] max-[991px]:h-[1252px] w-[1px] absolute top-[76px] left-[50%] z-0" />
                    </div>
                    <div className="max-[991px]:hidden relative h-[60px] bg-background-primary rounded-[12px] flex flex-col items-center justify-center gap-[4px]">
                      <h6 className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary">
                        {t("Wed")}
                      </h6>
                      <p className="font-lato font-semibold text-xl leading-[116%] tracking-[0] text-text-primary">
                        22
                      </p>
                      <hr className="bg-border-light h-[882px] max-[991px]:h-[1252px] w-[1px] absolute top-[76px] left-[50%] z-0" />
                    </div>
                    <span className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary flex items-center justify-center">
                      9:00 {t("AM")}
                    </span>
                    <div className="p-[4px] flex flex-col gap-[6px] border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#00B48D]" />
                      <CardInAll className="bg-[#D92D20]" />
                      <CardInAll className="bg-[#00B48D]" />
                      <CardInAll className="bg-[#FF8D28]" />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                    </div>
                    <div className="max-[767px]:hidden p-[4px] flex flex-col gap-[6px] border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <div className="max-[991px]:hidden p-[4px] flex flex-col gap-[6px] border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <span className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary flex items-center justify-center">
                      10:00 {t("AM")}
                    </span>
                    <div className="p-[4px] flex flex-col gap-[6px] border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#00B48D]" />
                      <CardInAll className="bg-[#00B48D]" />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <div className="max-[767px]:hidden p-[4px] flex flex-col gap-[6px] border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                    </div>
                    <div className="max-[991px]:hidden p-[4px] flex flex-col gap-[6px] border border-border-light rounded-[8px]">
                      <AddCardInAll />
                      <AddCardInAll />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <span className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary flex items-center justify-center">
                      11:00 {t("AM")}
                    </span>
                    <div className="p-[4px] flex flex-col gap-[6px] border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <div className="max-[767px]:hidden p-[4px] flex flex-col gap-[6px] border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                    </div>
                    <div className="max-[991px]:hidden p-[4px] flex flex-col gap-[6px] border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <span className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary flex items-center justify-center">
                      12:00 {t("AM")}
                    </span>
                    <div className="p-[4px] flex flex-col gap-[6px] border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <div className="max-[767px]:hidden p-[4px] flex flex-col gap-[6px] border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                    </div>
                    <div className="max-[991px]:hidden p-[4px] flex flex-col gap-[6px] border border-border-light rounded-[8px]">
                      <AddCardInAll />
                      <AddCardInAll />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <span className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary flex items-center justify-center">
                      1:00 {t("PM")}
                    </span>
                    <div className="p-[4px] flex flex-col gap-[6px] border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <div className="max-[767px]:hidden p-[4px] flex flex-col gap-[6px] border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                    </div>
                    <div className="max-[991px]:hidden p-[4px] flex flex-col gap-[6px] border border-border-light rounded-[8px]">
                      <AddCardInAll />
                      <AddCardInAll />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                  </div>
                )}

                <div
                  onClick={() => setShowRightSidebar(!showRightSidebar)}
                  className={`max-[767px]:hidden w-[24px] h-[24px] flex items-center justify-center absolute rounded-[20px] text-[#B8B1A9] top-[500px] right-[0px] ${
                    showRightSidebar ? "" : "rotate-180"
                  }  hover:bg-[#D4D4D4] hover:text-[#141B34] transition duration-2000`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.20703 14.707C8.81651 15.0976 8.18349 15.0976 7.79297 14.707C7.40245 14.3165 7.40245 13.6835 7.79297 13.293L13.0859 8L7.79297 2.70703C7.40248 2.31651 7.40248 1.68349 7.79297 1.29297C8.18349 0.902457 8.81651 0.90247 9.20703 1.29297L15.207 7.29297C15.5975 7.68349 15.5975 8.31651 15.207 8.70703L9.20703 14.707ZM2.20703 14.707C1.81651 15.0976 1.18349 15.0976 0.792969 14.707C0.402447 14.3165 0.402446 13.6835 0.792969 13.293L6.08594 8L0.792969 2.70703C0.402475 2.31651 0.402476 1.68349 0.792969 1.29297C1.18349 0.902457 1.81651 0.90247 2.20703 1.29297L8.20703 7.29297C8.59754 7.68349 8.59753 8.31651 8.20703 8.70703L2.20703 14.707Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div
                  onClick={() => setShowLeftSidebar(!showLeftSidebar)}
                  className={`max-[991px]:hidden w-[24px] h-[24px] flex items-center justify-center absolute rounded-[20px] text-[#B8B1A9] top-[500px] left-[0px] ${
                    showLeftSidebar ? "" : "rotate-180"
                  }  hover:bg-[#D4D4D4] hover:text-[#141B34] transition duration-2000`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.79297 1.29297C7.18349 0.902447 7.81651 0.902446 8.20703 1.29297C8.59755 1.68349 8.59755 2.31651 8.20703 2.70703L2.91406 8L8.20703 13.293C8.59752 13.6835 8.59752 14.3165 8.20703 14.707C7.81651 15.0975 7.18349 15.0975 6.79297 14.707L0.792969 8.70703C0.402457 8.31651 0.40247 7.68349 0.792969 7.29297L6.79297 1.29297ZM13.793 1.29297C14.1835 0.902447 14.8165 0.902446 15.207 1.29297C15.5976 1.68349 15.5976 2.31651 15.207 2.70703L9.91406 8L15.207 13.293C15.5975 13.6835 15.5975 14.3165 15.207 14.707C14.8165 15.0975 14.1835 15.0975 13.793 14.707L7.79297 8.70703C7.40246 8.31651 7.40247 7.68349 7.79297 7.29297L13.793 1.29297Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </CardContent>
            </Card>
          )}
          {!showRightSidebar && (
            <Card
              dir={`${local === "ar" ? "rtl" : "ltr"}`}
              className="relative h-auto rounded-2xl bg-background-tertiary col-span-3"
            >
              <CardContent className="w-full  h-full pt-[20px] pl-[6px] pr-[8px]">
                <header className="flex justify-between w-full">
                  <div className="flex gap-[10px] items-center">
                    <span className="py-[9px] px-[10px] bg-secondary-light rounded-[20px] font-lato font-medium text-[11px] leading-[105%] tracking-[0] text-text-primary">
                      {t("Today")}
                    </span>
                    <select className="bg-transparent font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                      <option value="September 2025">
                        {t("September")} 2025
                      </option>
                      <option value="October 2025">{t("October")} 2025</option>
                      <option value="November 2025">
                        {t("November")} 2025
                      </option>
                      <option value="December 2025">
                        {t("December")} 2025
                      </option>
                      <option value="January 2026">{t("January")} 2026</option>
                      <option value="February 2026">
                        {t("February")} 2026
                      </option>
                      <option value="March 2026">{t("March")} 2026</option>
                      <option value="April 2026">{t("April")} 2026</option>
                      <option value="May 2026">{t("May")} 2026</option>
                    </select>
                    <form className="relative">
                      <SearchIcon className="w-3.5 h-3.5 absolute top-[9px] left-[8px]" />
                      <input
                        type="search"
                        placeholder={t("Search patient")}
                        className="placeholder:text-[11px] text-[11px] bg-background-primary pl-[30px] py-[8px] rounded-[16px] w-[165px] h-[30px] border-0 px-4 py-2 rounded outline-none focus:border-0"
                      />
                    </form>
                  </div>
                  <div className="flex gap-[16px]">
                    <div className="flex gap-[8px]">
                      <select
                        value={selected}
                        onChange={(e) => setSelected(e.target.value)}
                        className="py-[9px] px-[12px] rounded-[20px] bg-secondary-light font-lato font-medium text-[11px] leading-[105%] tracking-[0] text-text-primary outline-none"
                      >
                        <option value="Noor Clinic">
                          {t("Clinic")} : {t("Noor Clinic")}
                        </option>
                        <option value="All Clinics">
                          {t("Clinic")} : {t("All Clinics")}
                        </option>
                      </select>
                      <select
                        defaultValue="All Doctors"
                        className="py-[9px] px-[12px] rounded-[20px] bg-secondary-light font-lato font-medium text-[11px] leading-[105%] tracking-[0] text-text-primary outline-none"
                      >
                        <option value="Doctor:All Doctors">
                          {t("Doctor")} : {t("All Doctors")}
                        </option>
                        <option value="Doctor:Mahmoud Fadel">
                          {t("Doctor")} : Mahmoud Fadel
                        </option>
                      </select>
                    </div>
                    <div dir="ltr" className="flex gap-[8px]">
                      <div className="w-[30px] h-[30px] rounded-[15px] bg-secondary-dark flex items-center justify-center">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9.85355 12.3536C10.0488 12.1583 10.0488 11.8417 9.85355 11.6464L6.20711 8L9.85355 4.35355C10.0488 4.15829 10.0488 3.84171 9.85355 3.64645C9.65829 3.45118 9.34171 3.45118 9.14645 3.64645L5.14645 7.64645C4.95118 7.84171 4.95118 8.15829 5.14645 8.35355L9.14645 12.3536C9.34171 12.5488 9.65829 12.5488 9.85355 12.3536Z"
                            fill="#FFFDFC"
                          />
                        </svg>
                      </div>
                      <div className="w-[30px] h-[30px] rounded-[15px] bg-secondary-dark flex items-center justify-center">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.14645 12.3536C5.95118 12.1583 5.95118 11.8417 6.14645 11.6464L9.79289 8L6.14645 4.35355C5.95118 4.15829 5.95118 3.84171 6.14645 3.64645C6.34171 3.45118 6.65829 3.45118 6.85355 3.64645L10.8536 7.64645C11.0488 7.84171 11.0488 8.15829 10.8536 8.35355L6.85355 12.3536C6.65829 12.5488 6.34171 12.5488 6.14645 12.3536Z"
                            fill="#FFFDFC"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </header>

                {selected === "Noor Clinic" && (
                  <div className="relative mt-[16px] grid grid-cols-[1fr_2fr_2fr_2fr_2fr_2fr_2fr_2fr] gap-y-[16px] gap-x-[8px] items-center">
                    <div className="h-[60px] bg-background-primary font-lato font-bold text-xs leading-[130%] tracking-[0] text-[#4D5260] rounded-[12px] flex items-center justify-center">
                      {t("Time/Date")}
                    </div>
                    <div className="relative h-[60px] bg-background-primary rounded-[12px] flex flex-col items-center justify-center gap-[4px]">
                      <h6 className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-primary-default">
                        {t("Sat")}
                      </h6>
                      <p className="font-lato font-semibold text-xl leading-[116%] tracking-[0] text-[white] bg-primary-default rounded-[50px] p-[4px]">
                        18
                      </p>
                      <hr className="bg-border-light h-[750px] w-[1px] absolute top-[76px] left-[50%] z-0" />
                    </div>
                    <div className="relative h-[60px] bg-background-primary rounded-[12px] flex flex-col items-center justify-center gap-[4px]">
                      <h6 className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary">
                        {t("Sun")}
                      </h6>
                      <p className="font-lato font-semibold text-xl leading-[116%] tracking-[0] text-text-primary">
                        19
                      </p>
                      <hr className="bg-border-light h-[750px] w-[1px] absolute top-[76px] left-[50%] z-0" />
                    </div>
                    <div className="relative h-[60px] bg-background-primary rounded-[12px] flex flex-col items-center justify-center gap-[4px]">
                      <h6 className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary">
                        {t("Mon")}
                      </h6>
                      <p className="font-lato font-semibold text-xl leading-[116%] tracking-[0] text-text-primary">
                        20
                      </p>
                      <hr className="bg-border-light h-[750px] w-[1px] absolute top-[76px] left-[50%] z-0" />
                    </div>
                    <div className="relative h-[60px] bg-background-primary rounded-[12px] flex flex-col items-center justify-center gap-[4px]">
                      <h6 className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary">
                        {t("Tue")}
                      </h6>
                      <p className="font-lato font-semibold text-xl leading-[116%] tracking-[0] text-text-primary">
                        21
                      </p>
                      <hr className="bg-border-light h-[525px] w-[1px] absolute top-[76px] left-[50%] z-0" />
                    </div>
                    <div className="relative h-[60px] bg-background-primary rounded-[12px] flex flex-col items-center justify-center gap-[4px]">
                      <h6 className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary">
                        {t("Wed")}
                      </h6>
                      <p className="font-lato font-semibold text-xl leading-[116%] tracking-[0] text-text-primary">
                        22
                      </p>
                      <hr className="bg-border-light h-[525px] w-[1px] absolute top-[76px] left-[50%] z-0" />
                    </div>
                    <div className="relative h-[60px] bg-background-primary rounded-[12px] flex flex-col items-center justify-center gap-[4px]">
                      <h6 className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary">
                        {t("Thu")}
                      </h6>
                      <p className="font-lato font-semibold text-xl leading-[116%] tracking-[0] text-text-primary">
                        23
                      </p>
                      <hr className="bg-border-light h-[525px] w-[1px] absolute top-[76px] left-[50%] z-0" />
                    </div>
                    <div className="relative h-[60px] bg-background-primary rounded-[12px] flex flex-col items-center justify-center gap-[4px]">
                      <h6 className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary">
                        {t("Fri")}
                      </h6>
                      <p className="font-lato font-semibold text-xl leading-[116%] tracking-[0] text-text-primary">
                        24
                      </p>
                      <hr className="bg-border-light h-[750px] w-[1px] absolute top-[76px] left-[50%] z-0" />
                    </div>
                    <span className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary flex items-center justify-center">
                      9:00 {t("AM")}
                    </span>
                    <CompletedCard />
                    <ScheduledCard />
                    <ScheduledCard />
                    <ScheduledCard />
                    <ScheduledCard />
                    <ScheduledCard />
                    <ScheduledCard />
                    <span className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary flex items-center justify-center">
                      10:00 {t("AM")}
                    </span>
                    <CanceldCard />
                    <AddCard
                      addPatient={addPatient.addPatient1}
                      handelAddClick={() =>
                        setAddPatient({
                          addPatient1: true,
                          addPatient2: false,
                          addPatient3: false,
                          addPatient4: false,
                          addPatient5: false,
                          addPatient6: false,
                          addPatient7: false,
                          addPatient8: false,
                        })
                      }
                    />
                    <ScheduledCard />
                    <ScheduledCard />
                    <ScheduledCard />
                    <ScheduledCard />
                    <ScheduledCard />
                    <span className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary flex items-center justify-center">
                      11:00 {t("AM")}
                    </span>
                    <MissedCard />
                    <ScheduledCard />
                    <ScheduledCard />
                    <ScheduledCard />
                    <ScheduledCard />
                    <ScheduledCard />
                    <ScheduledCard />
                    <span className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary flex items-center justify-center">
                      12:00 {t("AM")}
                    </span>
                    <ScheduledCard />
                    <AddCard
                      addPatient={addPatient.addPatient2}
                      handelAddClick={() =>
                        setAddPatient({
                          addPatient1: false,
                          addPatient2: true,
                          addPatient3: false,
                          addPatient4: false,
                          addPatient5: false,
                          addPatient6: false,
                          addPatient7: false,
                          addPatient8: false,
                        })
                      }
                    />
                    <AddCard
                      addPatient={addPatient.addPatient3}
                      handelAddClick={() =>
                        setAddPatient({
                          addPatient1: false,
                          addPatient2: false,
                          addPatient3: true,
                          addPatient4: false,
                          addPatient5: false,
                          addPatient6: false,
                          addPatient7: false,
                          addPatient8: false,
                        })
                      }
                    />
                    <AddCard
                      addPatient={addPatient.addPatient4}
                      handelAddClick={() =>
                        setAddPatient({
                          addPatient1: false,
                          addPatient2: false,
                          addPatient3: false,
                          addPatient4: true,
                          addPatient5: false,
                          addPatient6: false,
                          addPatient7: false,
                          addPatient8: false,
                        })
                      }
                    />
                    <AddCard
                      addPatient={addPatient.addPatient5}
                      handelAddClick={() =>
                        setAddPatient({
                          addPatient1: false,
                          addPatient2: false,
                          addPatient3: false,
                          addPatient4: false,
                          addPatient5: true,
                          addPatient6: false,
                          addPatient7: false,
                          addPatient8: false,
                        })
                      }
                    />
                    <AddCard
                      addPatient={addPatient.addPatient5}
                      handelAddClick={() =>
                        setAddPatient({
                          addPatient1: false,
                          addPatient2: false,
                          addPatient3: false,
                          addPatient4: false,
                          addPatient5: true,
                          addPatient6: false,
                          addPatient7: false,
                          addPatient8: false,
                        })
                      }
                    />
                    <AddCard
                      addPatient={addPatient.addPatient5}
                      handelAddClick={() =>
                        setAddPatient({
                          addPatient1: false,
                          addPatient2: false,
                          addPatient3: false,
                          addPatient4: false,
                          addPatient5: true,
                          addPatient6: false,
                          addPatient7: false,
                          addPatient8: false,
                        })
                      }
                    />
                    <span className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary flex items-center justify-center">
                      1:00 {t("PM")}
                    </span>
                    <ScheduledCard />
                    <ScheduledCard />
                    <ScheduledCard />
                    <ScheduledCard />
                    <ScheduledCard />
                    <ScheduledCard />
                    <ScheduledCard />
                    <span className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary flex items-center justify-center">
                      2:00 {t("PM")}
                    </span>
                    <AddCard
                      addPatient={addPatient.addPatient6}
                      handelAddClick={() =>
                        setAddPatient({
                          addPatient1: false,
                          addPatient2: false,
                          addPatient3: false,
                          addPatient4: false,
                          addPatient5: false,
                          addPatient6: true,
                          addPatient7: false,
                          addPatient8: false,
                        })
                      }
                    />
                    <ScheduledCard />
                    <AddCard
                      addPatient={addPatient.addPatient7}
                      handelAddClick={() =>
                        setAddPatient({
                          addPatient1: false,
                          addPatient2: false,
                          addPatient3: false,
                          addPatient4: false,
                          addPatient5: false,
                          addPatient6: false,
                          addPatient7: true,
                          addPatient8: false,
                        })
                      }
                    />
                    <div></div>
                    <div></div>
                    <div></div>
                    <ScheduledCard />
                    <span className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary flex items-center justify-center">
                      3:00 {t("PM")}
                    </span>
                    <AddCard
                      addPatient={addPatient.addPatient8}
                      handelAddClick={() =>
                        setAddPatient({
                          addPatient1: false,
                          addPatient2: false,
                          addPatient3: false,
                          addPatient4: false,
                          addPatient5: false,
                          addPatient6: false,
                          addPatient7: false,
                          addPatient8: true,
                        })
                      }
                    />
                    <ScheduledCard />
                    <ScheduledCard />
                    <div></div>
                    <div></div>
                    <div></div>
                    <ScheduledCard />
                  </div>
                )}
                {selected === "All Clinics" && (
                  <div className="relative mt-[16px] grid grid-cols-[1fr_2fr_2fr_2fr_2fr_2fr_2fr_2fr] gap-y-[16px] gap-x-[8px] items-center">
                    <div className="h-[60px] bg-background-primary font-lato font-bold text-xs leading-[130%] tracking-[0] text-[#4D5260] rounded-[12px] flex items-center justify-center">
                      {t("Time/Date")}
                    </div>
                    <div className="relative h-[60px] bg-background-primary rounded-[12px] flex flex-col items-center justify-center gap-[4px]">
                      <h6 className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-primary-default">
                        {t("Sat")}
                      </h6>
                      <p className="font-lato font-semibold text-xl leading-[116%] tracking-[0] text-[white] bg-primary-default rounded-[50px] p-[4px]">
                        18
                      </p>
                      <hr className="bg-border-light h-[882px] max-[991px]:h-[1520px] w-[1px] absolute top-[76px] left-[50%] z-0" />
                    </div>
                    <div className="relative h-[60px] bg-background-primary rounded-[12px] flex flex-col items-center justify-center gap-[4px]">
                      <h6 className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary">
                        {t("Sun")}
                      </h6>
                      <p className="font-lato font-semibold text-xl leading-[116%] tracking-[0] text-text-primary">
                        19
                      </p>
                      <hr className="bg-border-light h-[882px] max-[991px]:h-[1520px] w-[1px] absolute top-[76px] left-[50%] z-0" />
                    </div>
                    <div className="relative h-[60px] bg-background-primary rounded-[12px] flex flex-col items-center justify-center gap-[4px]">
                      <h6 className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary">
                        {t("Mon")}
                      </h6>
                      <p className="font-lato font-semibold text-xl leading-[116%] tracking-[0] text-text-primary">
                        20
                      </p>
                      <hr className="bg-border-light h-[882px] max-[991px]:h-[1520px] w-[1px] absolute top-[76px] left-[50%] z-0" />
                    </div>
                    <div className="relative h-[60px] bg-background-primary rounded-[12px] flex flex-col items-center justify-center gap-[4px]">
                      <h6 className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary">
                        {t("Tue")}
                      </h6>
                      <p className="font-lato font-semibold text-xl leading-[116%] tracking-[0] text-text-primary">
                        21
                      </p>
                      <hr className="bg-border-light h-[882px] max-[991px]:h-[1520px] w-[1px] absolute top-[76px] left-[50%] z-0" />
                    </div>
                    <div className="relative h-[60px] bg-background-primary rounded-[12px] flex flex-col items-center justify-center gap-[4px]">
                      <h6 className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary">
                        {t("Wed")}
                      </h6>
                      <p className="font-lato font-semibold text-xl leading-[116%] tracking-[0] text-text-primary">
                        22
                      </p>
                      <hr className="bg-border-light h-[882px] max-[991px]:h-[1520px] w-[1px] absolute top-[76px] left-[50%] z-0" />
                    </div>
                    <div className="relative h-[60px] bg-background-primary rounded-[12px] flex flex-col items-center justify-center gap-[4px]">
                      <h6 className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary">
                        {t("Thu")}
                      </h6>
                      <p className="font-lato font-semibold text-xl leading-[116%] tracking-[0] text-text-primary">
                        23
                      </p>
                      <hr className="bg-border-light h-[882px] max-[991px]:h-[1520px] w-[1px] absolute top-[76px] left-[50%] z-0" />
                    </div>
                    <div className="relative h-[60px] bg-background-primary rounded-[12px] flex flex-col items-center justify-center gap-[4px]">
                      <h6 className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary">
                        {t("Fri")}
                      </h6>
                      <p className="font-lato font-semibold text-xl leading-[116%] tracking-[0] text-text-primary">
                        24
                      </p>
                      <hr className="bg-border-light h-[882px] max-[991px]:h-[1520px] w-[1px] absolute top-[76px] left-[50%] z-0" />
                    </div>
                    <span className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary flex items-center justify-center">
                      9:00 {t("AM")}
                    </span>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#00B48D]" />
                      <CardInAll className="bg-[#D92D20]" />
                      <CardInAll className="bg-[#00B48D]" />
                      <CardInAll className="bg-[#FF8D28]" />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                    </div>
                    <span className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary flex items-center justify-center">
                      10:00 {t("AM")}
                    </span>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#00B48D]" />
                      <CardInAll className="bg-[#00B48D]" />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <AddCardInAll />
                      <AddCardInAll />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <span className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary flex items-center justify-center">
                      11:00 {t("AM")}
                    </span>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <AddCardInAll />
                      <AddCardInAll />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <span className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary flex items-center justify-center">
                      12:00 {t("AM")}
                    </span>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <AddCardInAll />
                      <AddCardInAll />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <AddCardInAll />
                      <AddCardInAll />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <span className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-text-secondary flex items-center justify-center">
                      1:00 {t("PM")}
                    </span>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <AddCardInAll />
                      <AddCardInAll />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                      <AddCardInAll />
                    </div>
                    <div className="p-[4px] flex flex-col gap-[6px] justify-center items-center border border-border-light rounded-[8px]">
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <CardInAll className="bg-[#69A3E9]" />
                      <AddCardInAll />
                    </div>
                  </div>
                )}
                <div
                  onClick={() => setShowRightSidebar(!showRightSidebar)}
                  className={`w-[24px] h-[24px] flex items-center justify-center absolute rounded-[20px] text-[#B8B1A9] top-[500px] right-[0] ${
                    showRightSidebar ? "" : "rotate-180"
                  }  hover:bg-[#D4D4D4] hover:text-[#141B34] transition duration-2000`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.20703 14.707C8.81651 15.0976 8.18349 15.0976 7.79297 14.707C7.40245 14.3165 7.40245 13.6835 7.79297 13.293L13.0859 8L7.79297 2.70703C7.40248 2.31651 7.40248 1.68349 7.79297 1.29297C8.18349 0.902457 8.81651 0.90247 9.20703 1.29297L15.207 7.29297C15.5975 7.68349 15.5975 8.31651 15.207 8.70703L9.20703 14.707ZM2.20703 14.707C1.81651 15.0976 1.18349 15.0976 0.792969 14.707C0.402447 14.3165 0.402446 13.6835 0.792969 13.293L6.08594 8L0.792969 2.70703C0.402475 2.31651 0.402476 1.68349 0.792969 1.29297C1.18349 0.902457 1.81651 0.90247 2.20703 1.29297L8.20703 7.29297C8.59754 7.68349 8.59753 8.31651 8.20703 8.70703L2.20703 14.707Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div
                  onClick={() => setShowLeftSidebar(!showLeftSidebar)}
                  className={`max-[991px]:hidden w-[24px] h-[24px] flex items-center justify-center absolute rounded-[20px] text-[#B8B1A9] top-[500px] left-[0] ${
                    showLeftSidebar ? "" : "rotate-180"
                  }  hover:bg-[#D4D4D4] hover:text-[#141B34] transition duration-2000`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.79297 1.29297C7.18349 0.902447 7.81651 0.902446 8.20703 1.29297C8.59755 1.68349 8.59755 2.31651 8.20703 2.70703L2.91406 8L8.20703 13.293C8.59752 13.6835 8.59752 14.3165 8.20703 14.707C7.81651 15.0975 7.18349 15.0975 6.79297 14.707L0.792969 8.70703C0.402457 8.31651 0.40247 7.68349 0.792969 7.29297L6.79297 1.29297ZM13.793 1.29297C14.1835 0.902447 14.8165 0.902446 15.207 1.29297C15.5976 1.68349 15.5976 2.31651 15.207 2.70703L9.91406 8L15.207 13.293C15.5975 13.6835 15.5975 14.3165 15.207 14.707C14.8165 15.0975 14.1835 15.0975 13.793 14.707L7.79297 8.70703C7.40246 8.31651 7.40247 7.68349 7.79297 7.29297L13.793 1.29297Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </CardContent>
            </Card>
          )}
          <Card
            hidden={!showRightSidebar}
            dir={`${local === "ar" ? "rtl" : "ltr"}`}
            className="col-span-1 "
          >
            <CardContent className="h-full">
              <div className="grid grid-cols-3 gap-[9px]">
                <TotalNum />
                <ScheduledNum />
                <AvailableNum />
                <CompletedNum />
                <CanceldNum />
                <MissedNum />
              </div>
              <Collapsible
                hidden={shouldShow}
                open={open.services}
                onOpenChange={() =>
                  setOpen({ ...open, services: !open.services })
                }
                className="w-full max-[767px]:hidden bg-[#EEF6FF] p-[16px] rounded-[12px] mt-[16px]"
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className="p-0 hover:bg-[none] w-full"
                  >
                    <div className="flex w-full items-center justify-between mb-[12px] ">
                      <h2 className="text-text-primary text-sm font-lato font-semibold leading-[125%] tracking-[0] ">
                        {t("Services")}
                      </h2>
                      <ChevronDownIcon
                        style={{ width: "16px", height: "16px" }}
                        className={`transition-transform duration-200 ${
                          open.services ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="w-full">
                  <div className="flex gap-[16px] items-center">
                    <Checkbox
                      sx={{
                        color: "#69A3E9", // اللون الافتراضي (border/outlined)
                        "&.Mui-checked": {
                          color: "#1976d2", // اللون عند التحديد
                        },
                      }}
                    />
                    <p className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                      {t("General Consultation")}
                    </p>
                  </div>
                  <div className="flex gap-[16px] items-center">
                    <Checkbox
                      sx={{
                        color: "#69A3E9", // اللون الافتراضي (border/outlined)
                        "&.Mui-checked": {
                          color: "#1976d2", // اللون عند التحديد
                        },
                      }}
                    />
                    <p className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                      {t("Laboratory Testing")}
                    </p>
                  </div>
                  <div className="flex gap-[16px] items-center">
                    <Checkbox
                      sx={{
                        color: "#69A3E9", // اللون الافتراضي (border/outlined)
                        "&.Mui-checked": {
                          color: "#1976d2", // اللون عند التحديد
                        },
                      }}
                    />
                    <p className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                      {t("Vaccinations & Immunizations")}
                    </p>
                  </div>
                  <div className="flex gap-[16px] items-center">
                    <Checkbox
                      sx={{
                        color: "#69A3E9", // اللون الافتراضي (border/outlined)
                        "&.Mui-checked": {
                          color: "#1976d2", // اللون عند التحديد
                        },
                      }}
                    />
                    <p className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                      {t("Physical Examinations")}
                    </p>
                  </div>
                  <div className="flex gap-[16px] items-center">
                    <Checkbox
                      sx={{
                        color: "#69A3E9", // اللون الافتراضي (border/outlined)
                        "&.Mui-checked": {
                          color: "#1976d2", // اللون عند التحديد
                        },
                      }}
                    />
                    <p className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                      {t("Chronic Disease Management")}
                    </p>
                  </div>
                  <div className="flex gap-[16px] items-center">
                    <Checkbox
                      sx={{
                        color: "#69A3E9", // اللون الافتراضي (border/outlined)
                        "&.Mui-checked": {
                          color: "#1976d2", // اللون عند التحديد
                        },
                      }}
                    />
                    <p className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                      {t("Minor Surgical Procedures")}
                    </p>
                  </div>
                  <div className="flex gap-[16px] items-center">
                    <Checkbox
                      sx={{
                        color: "#69A3E9", // اللون الافتراضي (border/outlined)
                        "&.Mui-checked": {
                          color: "#1976d2", // اللون عند التحديد
                        },
                      }}
                    />
                    <p className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                      {t("Women’s Health Services")}
                    </p>
                  </div>
                  <div className="flex gap-[16px] items-center">
                    <Checkbox
                      sx={{
                        color: "#69A3E9", // اللون الافتراضي (border/outlined)
                        "&.Mui-checked": {
                          color: "#1976d2", // اللون عند التحديد
                        },
                      }}
                    />
                    <p className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                      {t("Women’s Health Services")}
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
              <Collapsible
                hidden={shouldShow}
                open={open.onGoingAppointment}
                onOpenChange={() =>
                  setOpen({
                    ...open,
                    onGoingAppointment: !open.onGoingAppointment,
                  })
                }
                className="w-full bg-[#EEF6FF] p-[16px] rounded-[12px] mt-[16px]"
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className="p-0 hover:bg-[none] w-full"
                  >
                    <div className="flex w-full items-center justify-between mb-[12px] ">
                      <h2 className="text-text-primary text-sm font-lato font-semibold leading-[125%] tracking-[0] ">
                        {t("On Going Appointment")}
                      </h2>
                      <ChevronDownIcon
                        style={{ width: "16px", height: "16px" }}
                        className={`transition-transform duration-200 ${
                          open.onGoingAppointment ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="w-full">
                  <Card dir="ltr" className="w-full bg-[white] rounded-[12px]">
                    <CardContent className="flex flex-col items-start gap-4 p-3">
                      <div className="flex flex-col items-start gap-[12px] w-full">
                        <div className="flex items-center gap-[12px]">
                          <img alt="Place image here" src="/24.png" />
                          <div className="flex flex-col items-start gap-[4px]">
                            <div className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                              Sarah Miller
                            </div>
                            <div className="font-lato font-regular text-[11px] leading-[124%] tracking-[0] text-text-secondary">
                              Noor Clinic
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-[20px] max-[991px]:gap-[10px] w-full">
                          <div className="flex items-center justify-between max-[991px]:gap-[10px] w-full">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.25 2.5H3.75C3.41848 2.5 3.10054 2.6317 2.86612 2.86612C2.6317 3.10054 2.5 3.41848 2.5 3.75V16.25C2.5 16.5815 2.6317 16.8995 2.86612 17.1339C3.10054 17.3683 3.41848 17.5 3.75 17.5H16.25C16.5815 17.5 16.8995 17.3683 17.1339 17.1339C17.3683 16.8995 17.5 16.5815 17.5 16.25V3.75C17.5 3.41848 17.3683 3.10054 17.1339 2.86612C16.8995 2.6317 16.5815 2.5 16.25 2.5ZM7.5 9.375C7.5 8.88055 7.64662 8.3972 7.92133 7.98607C8.19603 7.57495 8.58648 7.25452 9.04329 7.0653C9.50011 6.87608 10.0028 6.82657 10.4877 6.92304C10.9727 7.0195 11.4181 7.2576 11.7678 7.60723C12.1174 7.95686 12.3555 8.40232 12.452 8.88727C12.5484 9.37223 12.4989 9.87489 12.3097 10.3317C12.1205 10.7885 11.8 11.179 11.3889 11.4537C10.9778 11.7284 10.4945 11.875 10 11.875C9.33696 11.875 8.70107 11.6116 8.23223 11.1428C7.76339 10.6739 7.5 10.038 7.5 9.375ZM5.36484 16.25C5.68467 15.4626 6.19886 14.7691 6.85938 14.2344C7.74868 13.5165 8.85709 13.1249 10 13.1249C11.1429 13.1249 12.2513 13.5165 13.1406 14.2344C13.8011 14.7691 14.3153 15.4626 14.6352 16.25H5.36484ZM16.25 16.25H15.9633C15.6854 15.3654 15.2139 14.5538 14.5831 13.8741C13.9522 13.1945 13.1779 12.664 12.3164 12.3211C12.9297 11.8393 13.3776 11.1783 13.5976 10.4301C13.8177 9.68189 13.799 8.88367 13.5441 8.14658C13.2892 7.40949 12.8109 6.7702 12.1757 6.31772C11.5404 5.86523 10.7799 5.62207 10 5.62207C9.22009 5.62207 8.45958 5.86523 7.82435 6.31772C7.18912 6.7702 6.71077 7.40949 6.4559 8.14658C6.20102 8.88367 6.18231 9.68189 6.40236 10.4301C6.6224 11.1783 7.07027 11.8393 7.68359 12.3211C6.82207 12.664 6.04776 13.1945 5.41693 13.8741C4.78611 14.5538 4.31462 15.3654 4.03672 16.25H3.75V3.75H16.25V16.25Z"
                                fill="#414651"
                              />
                            </svg>
                            <div className="flex flex-col items-start gap-[4px]">
                              <div className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                                Maurice Galley
                              </div>
                              <div className="flex items-center gap-[4px]">
                                <div className=" w-1 h-1 bg-primary-dark rounded-sm" />
                                <div className="font-lato font-regular text-[11px] leading-[124%] tracking-[0] text-text-secondary">
                                  PB-002
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between w-full">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.9434 10.4754C15.5774 7.13544 14.866 3.82344 12.974 2.66277C11.186 1.56611 9.62535 2.00811 8.68802 2.71211L7.99869 3.22811M12.9434 10.4754C12.3114 11.2774 11.4867 12.0801 10.4387 12.8554C9.40869 13.6188 8.89335 14.0001 7.99869 14.0001C7.10402 14.0001 6.58935 13.6188 5.55869 12.8554C0.146685 8.85011 0.677352 4.10211 3.02335 2.66277C4.81135 1.56611 6.37202 2.00811 7.30935 2.71211L7.99869 3.22811M12.9434 10.4754L9.26002 6.29677C9.18688 6.21409 9.0868 6.16001 8.97756 6.14415C8.86832 6.12828 8.75699 6.15165 8.66335 6.21011L7.20602 7.12077C6.92023 7.30158 6.57559 7.36485 6.24421 7.29736C5.91284 7.22987 5.6204 7.03684 5.42809 6.75867C5.23578 6.48049 5.15849 6.13872 5.21241 5.80487C5.26632 5.47101 5.44725 5.17094 5.71735 4.96744L7.99869 3.22811"
                                stroke="#414651"
                                stroke-width="0.75"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <div className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                              Facial <br />
                              Rejuvenation
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center gap-2 pt-2 pb-0 px-0 w-full border-t border-[#69a3e9]">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 1.5C6.71442 1.5 5.45772 1.88122 4.3888 2.59545C3.31988 3.30968 2.48676 4.32484 1.99479 5.51256C1.50282 6.70028 1.37409 8.00721 1.6249 9.26809C1.8757 10.529 2.49477 11.6872 3.40381 12.5962C4.31285 13.5052 5.47104 14.1243 6.73192 14.3751C7.99279 14.6259 9.29973 14.4972 10.4874 14.0052C11.6752 13.5132 12.6903 12.6801 13.4046 11.6112C14.1188 10.5423 14.5 9.28558 14.5 8C14.4982 6.27665 13.8128 4.62441 12.5942 3.40582C11.3756 2.18722 9.72335 1.50182 8 1.5ZM8 13.5C6.91221 13.5 5.84884 13.1774 4.94437 12.5731C4.0399 11.9687 3.33495 11.1098 2.91867 10.1048C2.50238 9.09977 2.39347 7.9939 2.60568 6.927C2.8179 5.86011 3.34173 4.8801 4.11092 4.11091C4.8801 3.34172 5.86011 2.8179 6.92701 2.60568C7.9939 2.39346 9.09977 2.50238 10.1048 2.91866C11.1098 3.33494 11.9687 4.03989 12.5731 4.94436C13.1774 5.84883 13.5 6.9122 13.5 8C13.4983 9.45818 12.9184 10.8562 11.8873 11.8873C10.8562 12.9184 9.45819 13.4983 8 13.5ZM12 8C12 8.13261 11.9473 8.25979 11.8536 8.35355C11.7598 8.44732 11.6326 8.5 11.5 8.5H8C7.86739 8.5 7.74022 8.44732 7.64645 8.35355C7.55268 8.25979 7.5 8.13261 7.5 8V4.5C7.5 4.36739 7.55268 4.24021 7.64645 4.14645C7.74022 4.05268 7.86739 4 8 4C8.13261 4 8.25979 4.05268 8.35356 4.14645C8.44732 4.24021 8.5 4.36739 8.5 4.5V7.5H11.5C11.6326 7.5 11.7598 7.55268 11.8536 7.64645C11.9473 7.74021 12 7.86739 12 8Z"
                            fill="#69A3E9"
                          />
                        </svg>

                        <div className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-primary-default">
                          {t("Est. Time")}: 12:00 PM - 2:00 PM
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CollapsibleContent>
              </Collapsible>
              <Collapsible
                hidden={shouldShow}
                open={open.upcomingAppointments}
                onOpenChange={() =>
                  setOpen({
                    ...open,
                    upcomingAppointments: !open.upcomingAppointments,
                  })
                }
                className="w-full bg-[#EEF6FF] p-[16px] rounded-[12px] mt-[16px]"
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className="p-0 hover:bg-[none] w-full"
                  >
                    <div className="flex w-full items-center justify-between mb-[12px] ">
                      <h2 className="text-text-primary text-sm font-lato font-semibold leading-[125%] tracking-[0] ">
                        {t("Upcoming Appointments")}
                      </h2>
                      <ChevronDownIcon
                        style={{ width: "16px", height: "16px" }}
                        className={`transition-transform duration-200 ${
                          open.upcomingAppointments ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="w-full">
                  {appointmentsData.map((appointment) => (
                    <Card
                      dir="ltr"
                      key={appointment.id}
                      className="w-full bg-[white] rounded-[12px] py-[16px] px-[6.5px] mb-[8px]"
                    >
                      <CardContent className="flex items-center gap-[12px] max-[991px]:gap-[7px]">
                        <img alt="Place image here" src="/26.png" />
                        <div className="flex flex-col items-start gap-1">
                          <div className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                            {appointment.patientName}
                          </div>

                          {appointment.clinicName && (
                            <div className="font-lato font-regular text-[11px] leading-[124%] tracking-[0] text-text-secondary">
                              {appointment.clinicName}
                            </div>
                          )}

                          <div className="flex items-center gap-1.5">
                            <div className="font-lato font-regular text-[11px] leading-[124%] tracking-[0] text-text-primary">
                              {appointment.doctorName}
                            </div>

                            <div className="w-1 h-1 bg-primary-dark rounded-sm" />

                            <div className="font-lato font-regular text-[11px] leading-[124%] tracking-[0] text-text-secondary">
                              {appointment.roomNumber}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-start gap-2 ">
                          <div className="font-lato font-semibold text-[11px] leading-[124%] tracking-[0] text-primary-default">
                            {appointment.date}
                          </div>

                          <div className="font-lato font-regular text-[11px] leading-[124%] tracking-[0] text-primary-default">
                            {appointment.time}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </CollapsibleContent>
              </Collapsible>
              {shouldShow && (
                <div className="w-full flex flex-col h-[698px] bg-[white] relative mt-[16px] py-[16px] px-[12px]">
                  <div className="flex flex-col w-full items-start gap-1.5">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 8V16"
                            stroke="#414651"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16 12H8"
                            stroke="#414651"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 21V21C7.029 21 3 16.971 3 12V12C3 7.029 7.029 3 12 3V3C16.971 3 21 7.029 21 12V12C21 16.971 16.971 21 12 21Z"
                            stroke="#414651"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <div className="font-lato font-semibold text-base leading-[124%] tracking-[0] text-text-primary">
                          {t("Add New Appointment")}
                        </div>
                      </div>
                      <XIcon
                        onClick={() =>
                          setAddPatient({
                            addPatient1: false,
                            addPatient2: false,
                            addPatient3: false,
                            addPatient4: false,
                            addPatient5: false,
                            addPatient6: false,
                            addPatient7: false,
                            addPatient8: false,
                          })
                        }
                        className="relative w-6 h-6 cursor-pointer"
                      />
                    </div>
                    <Separator className="relative  w-full" />
                  </div>

                  <div className="flex flex-col w-full h-full items-start mt-[16px]">
                    <div className="flex flex-col items-start gap-[16px] w-full">
                      {appointmentDetails.map((detail, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-[8px] w-full"
                        >
                          <detail.icon className="relative w-4 h-4" />
                          <div className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-primary">
                            {t(`${detail.text}`)}
                          </div>
                        </div>
                      ))}

                      <div className="flex flex-col items-start justify-center gap-2 w-full">
                        <Label className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                          {t("Patient Name")}
                        </Label>
                        <Select dir={`${local === "ar" ? "rtl" : "ltr"}`}>
                          <SelectTrigger className="h-12 gap-2 px-3.5 py-2.5 w-full bg-[white] rounded-[4px] border border-border-light">
                            <SelectValue
                              placeholder={t(
                                "Select By Patient Name Or Patient ID"
                              )}
                              className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-secondary"
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="patient1">
                              {t("Patient")} 1
                            </SelectItem>
                            <SelectItem value="patient2">
                              {t("Patient")} 2
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex flex-col items-start justify-center gap-2 w-full">
                        <Label className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                          {t("Service")}
                        </Label>
                        <Select dir={`${local === "ar" ? "rtl" : "ltr"}`}>
                          <SelectTrigger className="h-12 gap-2 px-3.5 py-2.5 w-full bg-[white] rounded-[4px] border border-border-light">
                            <SelectValue
                              placeholder={`${t("Select")} ${t("Service")}`}
                              className="font-lato font-regular text-sm leading-[125%] tracking-[0] text-text-secondary"
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="service1">
                              {t("Service")} 1
                            </SelectItem>
                            <SelectItem value="service2">
                              {t("Service")} 2
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex flex-col items-start gap-2 w-full">
                        <Label className="font-lato font-semibold text-sm leading-[125%] tracking-[0] text-text-primary">
                          {t("Notes")}
                        </Label>
                        <Textarea
                          placeholder={`${t("Enter")} ${t("Notes")}`}
                          className="flex flex-col h-[150px] items-start px-4 py-2 relative self-stretch w-full mb-[-50.00px] bg-white rounded overflow-hidden border border-solid border-[#e4e2dd] font-title-14px-regular font-[number:var(--title-14px-regular-font-weight)] text-on-surface-secondary text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] [font-style:var(--title-14px-regular-font-style)] resize-none"
                        />
                      </div>
                    </div>

                    <div className="flex items-start gap-[8px] w-full mt-auto">
                      <Link to="/MoreDetails" className="w-full">
                        <Button className="flex items-center justify-center border border-[#D5D7DA] bg-[white] rounded-[50px] w-full shadow-sm">
                          <div className="font-lato font-semibold text-base leading-[24px] tracking-[0] text-text-primary">
                            {t("More Details")}
                          </div>
                        </Button>
                      </Link>

                      <Button className="flex items-center justify-center border border-secondary-dark bg-secondary-dark rounded-[50px] w-full shadow-sm">
                        <div className="font-lato font-semibold text-base leading-[24px] tracking-[0] text-[white]">
                          {t("Add")}
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
