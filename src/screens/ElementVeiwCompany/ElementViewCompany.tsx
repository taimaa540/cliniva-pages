

import { LegalDocumentsSection } from "./sections/LegalDocumentaionsSection/LegalDocumentsSection ";
 import { ContactInformationSection } from "./sections/ContactInformationSection/ContactInformationSection";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export const  ElementViewCompany = (): JSX.Element => {
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
    <div className="flex w-full items-start bg-surface-default   "
    
          dir={`${local === "ar" ? "rtl" : "ltr"}`}
      >
      <ContactInformationSection />
      
      <LegalDocumentsSection handleLanguageClick={handleLanguageClick} local={local} dark={darkMode} handelDarkClick={toggleDarkMode}/>
    </div>
  );
};
