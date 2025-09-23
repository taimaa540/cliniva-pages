
import { CapacitySection } from "./sections/CapacitySection/CapacitySection";

import { useTranslation } from "react-i18next";
import { useState } from "react"

export const EditClinicDetails = (): JSX.Element => {
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
      <div className="flex w-full bg-surface-default ">
   

      <CapacitySection  handleLanguageClick={handleLanguageClick}
        local={local}
        dark={darkMode}
        handelDarkClick={toggleDarkMode}
        onOpenSidebar={() => setIsSidebarOpen(true)}/>
    
    </div>
  );
};
