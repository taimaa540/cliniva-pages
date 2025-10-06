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
    <div dir="ltr" className="relative">
      {/* Placeholder وهمي */}
      {!phone && !focused && (
        <span className="absolute left-[105px] top-[10px] text-gray-400 pointer-events-none bg-[white] w-[150px] h-[35px]">
          {t("Enter Phone Number")}
        </span>
      )}
      <svg
        className="absolute top-[17px] left-[63px]"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      {/* أول حرفين من اسم الدولة */}
      <span className="font-semibold bg-background-secondary absolute top-[12px] left-[40px]">
        {getFirstTwo(country)}
      </span>

      {/* حقل إدخال الرقم */}
      <PhoneInput
        defaultCountry={defaultCountry}
        value={phone}
        onChange={setPhone}
        international
        onCountryChange={(c) => c && setCountry(c)} // تغيير الدولة
        countryCallingCodeEditable={false}
        placeholder="أدخل رقمك"
        className="w-full"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}
