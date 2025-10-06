import { Card, CardContent } from "../../components/ui/card";
import { useLanguage } from "../../lib/LanguageContext";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export const AddCardInAll = (): JSX.Element => {
  const { local } = useLanguage();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);
  return (
    <Card className="w-full h-[34px] max-[991px]:h-[68px] rounded-[6px] bg-[#E1EDFB] border-0 relative z-1">
      <CardContent className="p-[4px] flex items-center justify-center gap-[4px]">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.0013 5.33398V10.6673"
            stroke="#69A3E9"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.6654 7.99935H5.33203"
            stroke="#69A3E9"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 14V14C4.686 14 2 11.314 2 8V8C2 4.686 4.686 2 8 2V2C11.314 2 14 4.686 14 8V8C14 11.314 11.314 14 8 14Z"
            stroke="#69A3E9"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div className=" flex flex-col gap-[2px]">
          <div className="flex items-center gap-[4px]">
            <img alt="Place image here" src="/23.png" className="max-[767px]:hidden" />
            <div className="font-lato font-bold text-[10px] max-[767px]:text-[9px] max-[767px]:text-center leading-[135%] tracking-[0] text-primary-default">
              Dr.Leena Naser
            </div>
          </div>
          <p className="font-lato font-semibold text-[10px] max-[767px]:text-[9px] max-[767px]:text-center leading-[135%] tracking-[0] text-primary-default">
            {t('Add New Appointment')}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
