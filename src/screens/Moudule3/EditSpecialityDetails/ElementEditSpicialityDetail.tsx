import React from "react";
import { ContantEditSpaicialityDetails } from "./Section/contantEditSpecialityDetalis/ContentEditSpicialityDetails";
import { SidebarEditSpecialityDetails } from "./Section/SidebarEditSpecialityDetalis/SidebarEditSpaicialityDetails";
import { useTranslation } from "react-i18next";
import { useState } from "react"



export const ElementEditSpicialityDetails = (): JSX.Element => {

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
    <div 



      className={`flex w-full` }>
    <SidebarEditSpecialityDetails/>

   
      <ContantEditSpaicialityDetails 
      
              handleLanguageClick={handleLanguageClick}
              local={local}
              dark={darkMode}
              handelDarkClick={toggleDarkMode}
            />
    </div>
  );
};
