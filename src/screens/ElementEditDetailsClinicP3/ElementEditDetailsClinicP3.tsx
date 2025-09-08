import React from "react";
import { ContentEditDetails } from "./Sections/contectEditDetails/ContentEditDetails";
import { SidebarEditDetails } from "./Sections/SidebarEditDetails/SidebarEditDetails";
import { useTranslation } from "react-i18next";
import { useState } from "react"
export const ElementEditeDetalisCinicP3 = (): JSX.Element => {



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

  return (
    <div className="flex w-full bg-surface-default " dir={`${local === "ar" ? "rtl" : "ltr"}`}>
      <SidebarEditDetails />
      <ContentEditDetails handleLanguageClick={handleLanguageClick}
        local={local}
        dark={darkMode}
        handelDarkClick={toggleDarkMode} />
    </div>
  );
};
