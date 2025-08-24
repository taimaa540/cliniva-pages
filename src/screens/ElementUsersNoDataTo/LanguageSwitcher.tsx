'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { locales } from '../../config';
import TranslateIcon from '@mui/icons-material/Translate';

export default function LanguageSwitcher() {
  // const t = useTranslations('common');
  const locale = useLocale();
  // const router = useRouter();
  // const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // const switchLanguage = (newLocale: string) => {
  //   // Remove current locale from pathname if it exists
  //   const pathWithoutLocale = pathname.replace(/^\/(en|ar)/, '') || '/';
    
  //   // Always add locale prefix for both languages in the new structure
  //   const newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
    
  //   router.push(newPath);
  //   setIsOpen(false);
  // };

  // const getCurrentLanguageSymbol = () => {
  //   switch (locale) {
  //     case 'ar':
  //       return 'Arabic';
  //     case 'en':
  //     default:
  //       return 'English';
  //   }
  // };

  return (
    <div className="relative">
      {/* Main Language Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="changeLanguage"
      >
        <TranslateIcon/>
      </Button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-background border border-border rounded-md shadow-lg z-50 min-w-[120px]">
          <div className="py-1">
            {locales.map((lang) => (
              <button
                // key={lang}
                // onClick={() => switchLanguage(lang)}
                // className={`w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors flex items-center space-x-2 ${
                //   locale === lang 
                //     ? 'bg-primary/10 text-primary font-medium' 
                //     : 'text-foreground'
                // }`}
              >
                <span className="text-md">
                  {lang === 'ar' ? 'Arabic' : 'English'}
                </span>
                {locale === lang && (
                  <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Click outside to close */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

// export function FloatingLanguageSwitcher() {
//   const locale = useLocale();
//   const router = useRouter();
//   const pathname = usePathname();

//   const switchToOppositeLanguage = () => {
//     const newLocale = locale === 'ar' ? 'en' : 'ar';
//     const pathWithoutLocale = pathname.replace(/^\/(en|ar)/, '') || '/';
    
//     // Always add locale prefix for both languages
//     const newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
    
//     router.push(newPath);
//   };

//   return (
//       <Button
//         onClick={switchToOppositeLanguage}
//         className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-[#69a3e9] hover:bg-[#4a8ce0] text-white shadow-lg border-2 border-background"
//         size="sm"
//       >
//         <span className="text-lg">
//           {locale === 'ar' ? '🇺🇸' : '🇸🇦'}
//         </span>
//       </Button>
//   );
// } 