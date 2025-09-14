import { Card, CardContent } from "../../components/ui/card";
import { useLanguage } from "../../lib/LanguageContext";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

interface AddProps {
  addPatient: boolean;
  handelAddClick: () => void;
}
export const AddCard = ({
  handelAddClick,
  addPatient,
}: AddProps): JSX.Element => {
  const { local } = useLanguage();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);
  return (
    <Card
      className={`w-full h-[80px] bg-secondary-light ${
        addPatient ? "border-solid" : "border-dashed"
      } border border-[#00C8B3] rounded-[14px] cursor-pointer mb-[16px] relative z-1`}
    >
      <CardContent className="flex flex-col items-center justify-center gap-2 h-full">
        <div
          hidden={addPatient}
          className="w-[80px] text-center font-lato font-regular text-[10px] leading-[135%] tracking-[0] text-[#00C8B3]"
        >
          {t("Click To Add New Appointment")}
        </div>
        <div hidden={addPatient}>
          <svg
            onClick={handelAddClick}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 8V16"
              stroke="#00C8B3"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 12H8"
              stroke="#00C8B3"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 21V21C7.029 21 3 16.971 3 12V12C3 7.029 7.029 3 12 3V3C16.971 3 21 7.029 21 12V12C21 16.971 16.971 21 12 21Z"
              stroke="#00C8B3"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </CardContent>
    </Card>
  );
};
