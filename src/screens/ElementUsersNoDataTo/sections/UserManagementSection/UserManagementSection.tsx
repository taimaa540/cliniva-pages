import {
  Building2Icon,
  CalendarIcon,
  ChevronDownIcon,
  LogOutIcon,
  SettingsIcon,
  UserCheckIcon,
  UserSquareIcon,
  UsersIcon,
} from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const navigationItems = [
  {
    icon: Building2Icon,
    label: "Medical Facilities",
    hasDropdown: true,
  },
  {
    icon: UserCheckIcon,
    label: "Doctors & Staff",
    hasDropdown: true,
  },
  {
    icon: SettingsIcon,
    label: "Services Management",
    hasDropdown: false,
  },
  {
    icon: UserSquareIcon,
    label: "Paitients Management",
    hasDropdown: false,
  },
  {
    icon: CalendarIcon,
    label: "Appointments Management",
    hasDropdown: false,
  },
];

interface UserManagementSectionProps {
  local: string;
  dark: boolean;
}

export const UserManagementSection = ({
  local,
  dark,
}: UserManagementSectionProps): JSX.Element => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(local);
  }, [local, i18n]);

  return (
    <nav
     className={`h-screen w-[223px] flex flex-col ${
        local === "ar" ? "right-[10px]" : "left-0"
      } ${dark ? "bg-[#030711]" : "bg-surface-default"}`}
    >
      {/* Header */}
      <header className="flex flex-col items-start gap-2.5 px-2 py-[9px] mt-4 ml-5 w-full">
        <div className="flex items-center gap-[7px]">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 13V15H15V0H13V1C13 7.62742 7.62742 13 1 13H0Z"
              fill="#A5C8F2"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M30 15H15V30H17.1322C18.0228 23.3156 23.3156 18.0228 30 17.1322V15Z"
              fill="#83DFDF"
            />
          </svg>
          <h1
            className={`text-xl leading-[22px] tracking-[0] whitespace-nowrap ${
              dark ? "text-white" : "text-black"
            } font-normal`}
          >
            Cliniva SYS
          </h1>
        </div>
      </header>

      {/* Main Navigation */}
      <main className="flex flex-col flex-1 items-center mt-5 px-2">
        <section className="w-full space-y-2">
          {/* Users Management button - active state */}
          <button className="flex items-center w-full h-10 gap-2 px-2 py-2 bg-app-secondary rounded justify-start">
            <UsersIcon className="w-5 h-5 text-white" />
            <span className="font-btn-14px-medium text-surface-default">
              {t("Users Management")}
            </span>
          </button>

          {/* Dynamic menu items */}
          <div className="space-y-2">
            {navigationItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="flex items-center justify-between w-full h-10 px-2 py-2 rounded-[14px]"
              >
                <div className="flex items-center gap-2">
                  <item.icon
                    className={`w-5 h-5 ${dark ? "text-white" : "text-black"}`}
                  />
                  <span className="font-title-12px-semibold text-on-surface-secondary">
                    {t(item.label)}
                  </span>
                </div>
                {item.hasDropdown && (
                  <ChevronDownIcon className="w-3.5 h-3.5 text-on-surface-secondary" />
                )}
              </Button>
            ))}
          </div>
        </section>

        {/* Logout Button */}
        <Button
          variant="ghost"
          className="mt-auto mb-4 w-[183px] h-11 gap-3 pl-4 pr-2 py-3 bg-bg rounded-[14px] justify-start"
        >
          <LogOutIcon className="w-5 h-5" />
          <span className="font-btn-14px-medium text-on-surface-secondary">
            {t("Logout")}
          </span>
          <ChevronDownIcon className="w-3.5 h-3.5" />
        </Button>
      </main>
    </nav>
  );
};

