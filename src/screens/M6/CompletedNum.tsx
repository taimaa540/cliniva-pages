import { Card, CardContent } from "../../components/ui/card";
import { useLanguage } from "../../lib/LanguageContext";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
export const CompletedNum = (): JSX.Element => {
  const { local } = useLanguage();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);
  return (
    <Card className="w-full h-[100px] bg-secondary-dark rounded-[14px]">
      <CardContent className="w-full h-full p-[8px]">
        <div className="flex justify-between mb-[9px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="12" fill="#FFFDFC" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 18V18C8.686 18 6 15.314 6 12V12C6 8.686 8.686 6 12 6V6C15.314 6 18 8.686 18 12V12C18 15.314 15.314 18 12 18Z"
              stroke="#00B48D"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.6654 10.666L11.332 13.9993L9.33203 11.9993"
              stroke="#00B48D"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.2"
              d="M0.144531 11.2854V12.9997H13.0017V0.142578H11.2874V0.999721C11.2874 6.68036 6.68232 11.2854 1.00167 11.2854H0.144531Z"
              fill="#FFFDFC"
            />
            <path
              opacity="0.3"
              d="M25.8571 13H13V25.8571H14.8276C15.591 20.1276 20.1276 15.591 25.8571 14.8276V13Z"
              fill="#FFFDFC"
            />
          </svg>
        </div>
        <div className="flex flex-col items-start gap-[4px]">
          <div className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-[#FCFCFC]">
            {t("Completed Appointments")}
          </div>
          <div className="font-lato font-bold text-sm leading-[125%] tracking-[0] text-[#FCFCFC]">
            75
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
