import React from "react";
import { SidebarviewDetailsContentp2 } from "./SidebarViewDetailsContentp2/SidebarViewDetailsContantp2";
import { ElementViewComplexPlan2 } from "./ElementViewDetailsContectp2/ElementViewDetailsContent";
import { useTranslation } from "react-i18next";
import { useState } from "react"
export const ElementViewDetalisComplexp2 = (): JSX.Element => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
    <div className="flex w-full bg-surface-default " >
      <SidebarviewDetailsContentp2 isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        local={local} />
      <ElementViewComplexPlan2          handleLanguageClick={handleLanguageClick}
        local={local}
        dark={darkMode}
        handelDarkClick={toggleDarkMode}
        onOpenSidebar={() => setIsSidebarOpen(true)}/> 
    </div>
  );
};
