import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { BellIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import TranslateIcon from "@mui/icons-material/Translate";
import { ThemeToggle } from "../../components/theme/ThemeSwitcher";
import { useLanguage } from "../../lib/LanguageContext";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";
interface HeaderProps {
  MainTitle: string;
  SubTitle: string;
  onOpenSidebar: () => void;
  showBackButton?: boolean; // اذا بدنا نعرض زر الرجوع
  backTo?: string; // 🔹 الوجهة المحددة للرجوع (اختيارية)
}

export const Header = ({ MainTitle, SubTitle, onOpenSidebar ,backTo,showBackButton}: HeaderProps) => {
  const { local, handleLanguageClick } = useLanguage();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(local);
  }, [local]);
 const navigate = useNavigate();
  return (
    <header className="flex h-[50px] w-full items-center bg-background-primary px-2">
      {/* نسخة الموبايل */}
      <div className="flex w-full items-center justify-between md:hidden">
        {/* Left Side */}
        <div className="flex items-center gap-2">
          <button
            className="md:hidden p-2 rounded-lg bg-secondary-light"
            onClick={onOpenSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

   {!backTo && ( 

          <div className="flex flex-col">
            <h1 className="font-bold text-sm text-on-surface-primary">
              {t(MainTitle)}
            </h1>
            <p className="text-xs text-on-surface-primary">
              {t(SubTitle)}
            </p>
          </div>)}


      {backTo && (
          <div className="flex flex-col">
   
            
                     
            <h1 className="font-bold text-sm text-on-surface-primary">
              {t(MainTitle)}
            </h1>
               <div className="flex items-center pag-1">
                     <button
              onClick={() => navigate(backTo)}
            className="relative w-4 h-4" 
            >
      
                                    <ArrowLeftIcon className="relative w-4 h-4 " />
            </button>
                   <p className="text-xs text-on-surface-primary">
              {t(SubTitle)}
            </p>
          </div>
            
            
            </div>
          )}
          
        </div>

        {/* Notification */}
        <div className="relative">
          <Button variant="ghost" size="icon" className="p-2.5 bg-secondary-light rounded-[20px] h-auto">
            <BellIcon className="w-5 h-5" />
          </Button>
          <div className="absolute top-1 left-6 w-2 h-2 bg-[#fa812d] rounded-full" />
        </div>
      </div>

      {/* نسخة الـ Desktop/Laptop */}
      <div className="hidden md:flex w-full items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          {!backTo && ( 

          <div className="flex flex-col">
     <h1 className="font-bold text-base md:text-lg lg:text-xl text-on-surface-primary">
              {t(MainTitle)}
            </h1>
                   <p className="text-sm md:text-base text-on-surface-primary">
              {t(SubTitle)}
            </p>
          </div>)}



   {backTo && (
          <div className="flex flex-col">
   
            
                     
           <h1 className="font-bold text-base md:text-lg lg:text-xl text-on-surface-primary">
              {t(MainTitle)}
            </h1>
               <div className="flex items-center pag-3">
                     <button
              onClick={() => navigate(backTo)}
            className="relative w-4 h-4  mr-2" 
            >
      
                                    <ArrowLeftIcon className="relative w-5 h-5 " />
            </button>
          <p className="text-sm md:text-base text-on-surface-primary">
              {t(SubTitle)}
            </p>
          </div>
            
            
            </div>
          )}



        </div>

        {/* Right Side */}
        <div className="inline-flex gap-3 items-center px-4">
          {/* Notification */}
          <div className="relative">
            <Button variant="ghost" size="icon" className="p-2.5 bg-secondary-light rounded-[20px] h-auto">
              <BellIcon className="w-5 h-5" />
            </Button>
            <div className="absolute top-1 left-6 w-2 h-2 bg-[#fa812d] rounded-full" />
          </div>

          {/* Language Switch */}
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className={`p-2.5 ${local === "ar" ? "bg-[green]" : "bg-secondary-light"} rounded-[20px] h-auto transition-all duration-[1000ms]`}
              onClick={handleLanguageClick}
            >
              <TranslateIcon className="w-5 h-5" />
            </Button>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* User Info */}
          <div className="items-center gap-3 inline-flex flex-[0_0_auto]">
            <div className="inline-flex items-center w-[40px] h-[40px] bg-app-primary rounded-3xl" />
            <div className="flex-col items-start gap-1 inline-flex">
              <div className="text-base font-bold text-on-surface-primary">
                Anahera Jones
              </div>
              <div className="text-sm text-on-surface-tertiary">
                {t("Admin")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
