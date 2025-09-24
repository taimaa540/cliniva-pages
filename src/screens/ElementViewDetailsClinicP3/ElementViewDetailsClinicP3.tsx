
import { ContentViewDetailsClinicP3 } from "./ContentViewDetailsClinicP3/ContentViewDetailsClinicP3";

  
import { useTranslation } from "react-i18next";
import { useState } from "react";
export const ElementViewDetailsClinicP3 = (): JSX.Element => {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

    <div className="flex w-full min-h-screen items-start bg-surface-default   "        
     >
        
    
      <ContentViewDetailsClinicP3      handleLanguageClick={handleLanguageClick}
        local={local}
        dark={darkMode}
        handelDarkClick={toggleDarkMode}
        // ← يفتح السايد بار
      />
    </div>
  );
};
