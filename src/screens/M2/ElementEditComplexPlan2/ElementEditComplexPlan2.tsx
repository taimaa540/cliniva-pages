import React from "react";
import { SideComplex } from "./SadeparComplex/SideparComplex";
import { EditComplex } from "./EditComplex/EditComplex";
import { useTranslation } from "react-i18next";
import { useState } from "react"
export const ElementEditComplexPlan2 = (): JSX.Element => {



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
      <SideComplex />
      <EditComplex handleLanguageClick={handleLanguageClick}
        local={local}
        dark={darkMode}
        handelDarkClick={toggleDarkMode} />
    </div>
  );
};
