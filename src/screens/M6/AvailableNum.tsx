import { Card, CardContent } from "../../components/ui/card";
import { useLanguage } from "../../lib/LanguageContext";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
export const AvailableNum = (): JSX.Element => {
  const { local } = useLanguage();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);
  return (
    <Card className="w-full h-[100px] bg-secondary-light rounded-[14px]">
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
              d="M12 9.5C10.8954 9.5 10 10.3954 10 11.5C10 12.6046 10.8954 13.5 12 13.5C13.1046 13.5 14 12.6046 14 11.5C14 10.3954 13.1046 9.5 12 9.5ZM9 11.5C9 9.84315 10.3431 8.5 12 8.5C13.6569 8.5 15 9.84315 15 11.5C15 13.1569 13.6569 14.5 12 14.5C10.3431 14.5 9 13.1569 9 11.5Z"
              fill="#00C8B3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 14.5C11.2613 14.5 10.5371 14.7042 9.90753 15.0906C9.27798 15.477 8.76773 16.0302 8.43334 16.6888C8.30833 16.9351 8.00738 17.0333 7.76116 16.9083C7.51493 16.7833 7.41666 16.4824 7.54167 16.2362C7.95966 15.4128 8.59748 14.7213 9.38441 14.2383C10.1713 13.7553 11.0767 13.5 12 13.5C12.9234 13.5 13.8287 13.7553 14.6156 14.2383C15.4025 14.7213 16.0403 15.4128 16.4583 16.2362C16.5833 16.4824 16.4851 16.7833 16.2388 16.9083C15.9926 17.0333 15.6917 16.9351 15.5667 16.6888C15.2323 16.0302 14.722 15.477 14.0925 15.0906C13.4629 14.7042 12.7387 14.5 12 14.5Z"
              fill="#00C8B3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.5 7.5C14.5 7.22386 14.7239 7 15 7H18C18.2761 7 18.5 7.22386 18.5 7.5C18.5 7.77614 18.2761 8 18 8H15C14.7239 8 14.5 7.77614 14.5 7.5Z"
              fill="#00C8B3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.5 5.5C16.7761 5.5 17 5.72386 17 6V9C17 9.27614 16.7761 9.5 16.5 9.5C16.2239 9.5 16 9.27614 16 9V6C16 5.72386 16.2239 5.5 16.5 5.5Z"
              fill="#00C8B3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 6.5C10.9122 6.5 9.84884 6.82257 8.94437 7.42692C8.0399 8.03127 7.33495 8.89025 6.91867 9.89524C6.50238 10.9002 6.39347 12.0061 6.60568 13.073C6.8179 14.1399 7.34173 15.1199 8.11092 15.8891C8.8801 16.6583 9.86011 17.1821 10.927 17.3943C11.9939 17.6065 13.0998 17.4976 14.1048 17.0813C15.1098 16.6651 15.9687 15.9601 16.5731 15.0556C17.1774 14.1512 17.5 13.0878 17.5 12V11.5C17.5 11.2239 17.7239 11 18 11C18.2761 11 18.5 11.2239 18.5 11.5V12C18.5 13.2856 18.1188 14.5423 17.4046 15.6112C16.6903 16.6801 15.6752 17.5132 14.4874 18.0052C13.2997 18.4972 11.9928 18.6259 10.7319 18.3751C9.47104 18.1243 8.31285 17.5052 7.40381 16.5962C6.49477 15.6872 5.8757 14.529 5.6249 13.2681C5.37409 12.0072 5.50282 10.7003 5.99479 9.51256C6.48676 8.32484 7.31988 7.30968 8.3888 6.59545C9.45772 5.88122 10.7144 5.5 12 5.5L12.5 5.50001C12.7761 5.50001 13 5.72387 13 6.00001C13 6.27615 12.7761 6.50001 12.5 6.50001L12 6.5Z"
              fill="#00C8B3"
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
              fill="#00C8B3"
            />
            <path
              opacity="0.3"
              d="M25.8571 13H13V25.8571H14.8276C15.591 20.1276 20.1276 15.591 25.8571 14.8276V13Z"
              fill="#00C8B3"
            />
          </svg>
        </div>
        <div className="flex flex-col items-start gap-[4px]">
          <div className="font-lato font-regular text-xs leading-[130%] tracking-[0] text-[#00C8B3]">
            {t("Available Appointments")}
          </div>
          <div className="font-lato font-bold text-sm leading-[125%] tracking-[0] text-[#00C8B3]">
            45
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
