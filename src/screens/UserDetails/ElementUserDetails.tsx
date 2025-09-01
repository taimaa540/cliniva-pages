import { Edit2Icon, Trash2Icon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { AccountInformationSection } from "./sections/AccountInformationSection";
import { UserManagementSection } from "../ElementUsersNoDataTo/sections/UserManagementSection/UserManagementSection";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export const ElementUserDetails = (): JSX.Element => {
  const { i18n } = useTranslation();
  const [local, setLocal] = useState("en");
  const [darkMode, setDarkMode] = useState(false);
  function handleLanguageClick() {
    if (local === "en") {
      setLocal("ar");
      i18n.changeLanguage("ar");
    } else {
      setLocal("en");
      i18n.changeLanguage("en");
    }
  }
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const actionButtons = [
    {
      icon: Edit2Icon,
      label: "Edit",
      variant: "outline" as const,
      className:
        "border-[#00b48d] text-secondary-dark hover:bg-secondary-light",
    },
    {
      icon: Trash2Icon,
      label: "Delete",
      variant: "outline" as const,
      className: "border-[#d92c20] text-[#d92c20] hover:bg-red-50",
    },
  ];

  return (
    <div className="flex w-full bg-surface-default " dir={`${local === "ar" ? "rtl" : "ltr"}`}>
      <UserManagementSection local={local} dark={darkMode} />
      <AccountInformationSection
        handleLanguageClick={handleLanguageClick}
        local={local}
        dark={darkMode}
        handelDarkClick={toggleDarkMode}
      />

      <div className={`absolute top-[104px] ${local === 'ar' ? 'right-[300px]' : 'right-[100px]'} flex gap-2`}>
        {actionButtons.map((button) => (
          <Button
            key={button.label}
            variant={button.variant}
            size="sm"
            className={`h-6 px-4 py-2.5 rounded-[20px] gap-1 ${button.className}`}
          >
            <button.icon className="w-4 h-4" />
            <span className="[font-family:'Lato',Helvetica] font-medium text-xs leading-3">
              {button.label}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
};
