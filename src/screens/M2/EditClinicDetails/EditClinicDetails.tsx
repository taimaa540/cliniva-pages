
import { CapacitySection } from "./sections/CapacitySection/CapacitySection";
import { ClinicInfoSection } from "./sections/ClinicInfoSection/ClinicInfoSection";
import { useTranslation } from "react-i18next";
import { useState } from "react"

export const EditClinicDetails = (): JSX.Element => {
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
   
      <ClinicInfoSection />
      <CapacitySection  handleLanguageClick={handleLanguageClick}
              local={local}
              dark={darkMode}
              handelDarkClick={toggleDarkMode}/>
    
    </div>
  );
};
