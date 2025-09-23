import { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import type { CountryCode } from "libphonenumber-js";
import "react-phone-number-input/style.css";
import { useLanguage } from "../../lib/LanguageContext";
import { useTranslation } from "react-i18next";

const countryNames: Record<string, string> = {};
interface PhoneInputCustomProps {
  value: string[]; // مصفوفة أرقام
  onChange?: (value: string[]) => void;
}
export default function PhoneInputCustom({ value, onChange }: PhoneInputCustomProps) {
  const { local } = useLanguage();
  const { t, i18n } = useTranslation();
  const [country, setCountry] = useState<string>("SA");
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const [focused, setFocused] = useState(false);
  const [placeholder, setPlaceholder] = useState("Enter Number"); // default للموبايل
  const defaultCountry: CountryCode = "SA";

  const getFirstTwo = (code: string) =>
    countryNames[code]?.slice(0, 2).toUpperCase() || code;
  const handleChange = (index: number, newValue?: string) => {
    const updated = [...value];
    updated[index] = newValue || "";
    onChange?.(updated);
  };
  useEffect(() => {
    i18n.changeLanguage(local);
  }, [local, i18n]);

  // ✅ تحديث الـ placeholder حسب حجم الشاشة
  useEffect(() => {
    const updatePlaceholder = () => {
      if (window.innerWidth < 640) {
        setPlaceholder("Enter Number"); // موبايل
      } else {
        setPlaceholder("Enter Phone Number"); // شاشات أكبر
      }
    };

    updatePlaceholder(); // تشغيل أول مرة
    window.addEventListener("resize", updatePlaceholder);
    return () => window.removeEventListener("resize", updatePlaceholder);
  }, []);

  return (
    <div dir="ltr">
      {/* أول حرفين من اسم الدولة */}
      <span className="font-semibold bg-background-secondary absolute top-[12px] left-[40px]">
        {getFirstTwo(country)}
      </span>

      {/* حقل إدخال الرقم */}
        <div className="flex flex-col gap-2">
      {value.map((phone, index) => (
        <PhoneInput
          key={index}
          defaultCountry={defaultCountry}
          value={phone}
          onChange={(val) => handleChange(index, val)}
          placeholder={t("Enter Number")}
          dir={i18n.language === "ar" ? "rtl" : "ltr"}
          className="w-full h-full placeholder:text-[clamp(9px,1.1vw,16px)] bg-background-secondary rounded-md focus:outline-none placeholder:text-text-secondary"
        />
      ))}
    </div>
    </div>
  );
}
