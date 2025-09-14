
import { CompanyDetailsSectio } from "./sections/CompanyDetailsSectio/CompanyDetailsSectio";
import { CompanyInformationSection } from "./sections/CompanyInformationSection/CompanyInformationSection";
import { useTranslation } from "react-i18next";
import { useState } from "react";

  export const ElementEditCompany = (): JSX.Element => {
    const { i18n } = useTranslation();
      const [local, setLocal] = useState('en')
      const [darkMode, setDarkMode] = useState(false);
      function handleLanguageClick () {
        if (local === 'en') {
          setLocal('ar')
          i18n.changeLanguage('ar')
        } else {
          setLocal('en')
          i18n.changeLanguage('en')
        }
        
      } 
  
       const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };
  return (
    <div className="flex w-full items-start bg-surface-default ">
         
        <CompanyInformationSection />
        <CompanyDetailsSectio local={local} dark={darkMode} handleLanguageClick={handleLanguageClick} handelDarkClick={toggleDarkMode} />
    
    </div>
  );
};
