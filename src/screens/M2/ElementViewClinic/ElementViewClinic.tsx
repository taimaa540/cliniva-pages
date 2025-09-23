
import { MedicalDetailsSection } from "./sections/MedicalDetailsSection/MedicalDetailsSection"; 

import { useTranslation } from "react-i18next";
import { useState } from "react";
export const ElementViewClinic = (): JSX.Element => {
  const { i18n } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

    <div className="flex w-full min-h-screen items-start bg-surface-default   "        
     >
        
  
      <MedicalDetailsSection     handleLanguageClick={handleLanguageClick}
        local={local}
        dark={darkMode}
        handelDarkClick={toggleDarkMode}
        onOpenSidebar={() => setIsSidebarOpen(true)}
      />
    </div>
  );
};
