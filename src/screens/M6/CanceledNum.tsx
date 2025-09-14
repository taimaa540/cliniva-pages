import { Card, CardContent } from "../../components/ui/card";
import { useLanguage } from "../../lib/LanguageContext";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
export const CanceldNum = (): JSX.Element => {
  const { local } = useLanguage();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);
  return (
    <Card className="w-full h-[100px] bg-[#FF8D28] rounded-[14px]">
      <CardContent className="w-full h-full p-[8px]">
        <div className="flex justify-between mb-[9px]">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" width="24" height="24" rx="12" fill="#FFFDFC" />
            <path
              d="M15.9414 6.16797C16.0742 6.1679 16.2021 6.22057 16.2959 6.31445L18.1875 8.20801C18.3825 8.40308 18.3832 8.71876 18.1885 8.91406L15.1074 12.0039L18.1768 15.0869C18.3712 15.2823 18.3706 15.598 18.1758 15.793L16.2832 17.6865C16.1894 17.7803 16.0623 17.8331 15.9297 17.833C15.7969 17.8329 15.6689 17.7797 15.5752 17.6855L12.5078 14.6045L9.42773 17.6875C9.33397 17.7814 9.20689 17.834 9.07422 17.834C8.94157 17.834 8.81448 17.7813 8.7207 17.6875L6.82813 15.7939C6.63333 15.5988 6.63329 15.2831 6.82813 15.0879L9.90918 12.0039L6.81445 8.92285C6.72039 8.82916 6.66812 8.70112 6.66797 8.56836C6.6679 8.43571 6.72068 8.30867 6.81445 8.21484L8.70605 6.32129C8.90103 6.12622 9.21768 6.12568 9.41309 6.32031L12.5078 9.40332L15.5879 6.31445C15.6816 6.22055 15.8088 6.16811 15.9414 6.16797ZM12.8633 10.4629C12.6684 10.6583 12.3518 10.6586 12.1562 10.4639L9.06055 7.38086L7.875 8.56738L10.9697 11.6484C11.0638 11.7421 11.116 11.8702 11.1162 12.0029C11.1163 12.1355 11.0635 12.2626 10.9697 12.3564L7.88867 15.4404L9.07422 16.627L12.1553 13.543C12.249 13.4492 12.3762 13.3965 12.5088 13.3965C12.6416 13.3966 12.7696 13.4498 12.8633 13.5439L15.9307 16.625L17.1162 15.4395L14.0469 12.3555C13.8529 12.1603 13.8527 11.8454 14.0469 11.6504L17.1279 8.56152L15.9424 7.375L12.8633 10.4629Z"
              fill="#FF8D28"
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
            {t("Canceled Appointments")}
          </div>
          <div className="font-lato font-bold text-sm leading-[125%] tracking-[0] text-[#FCFCFC]">
            5
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
