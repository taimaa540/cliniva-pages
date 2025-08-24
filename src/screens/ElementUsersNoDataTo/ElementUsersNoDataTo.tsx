import { NoDataSection } from "./sections/NoDataSection/NoDataSection";
import { UserManagementSection } from "./sections/UserManagementSection/UserManagementSection";
import { useTranslation } from "react-i18next";
import { useState } from "react";


export const ElementUsersNoDataTo = (): JSX.Element => {
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
    <div dir={`${local === 'ar' ? 'rtl' : 'ltr'}`} className={`flex ${darkMode ? 'bg-[#030711]' : 'bg-[white]'}`}>
      <UserManagementSection local={local}  dark={darkMode} />
      <NoDataSection handleLanguageClick={handleLanguageClick} local={local} dark={darkMode} handelDarkClick={toggleDarkMode} />
    </div>
  );
};
