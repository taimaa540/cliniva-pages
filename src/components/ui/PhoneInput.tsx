import { useEffect, useState } from "react";
import type { CountryCode } from "libphonenumber-js";
import { getCountryCallingCode } from "libphonenumber-js";
import { useLanguage } from "../../lib/LanguageContext";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";
import "react-phone-input-2/lib/style.css";

type PhoneInputCustomProps = {
  value: React.ReactNode; // 👈 بقي React.ReactNode
  onChange?: (value: string) => void;
  placeholder?: string;
};

export default function PhoneInputCustom({
  value,
  onChange,
  placeholder,
}: PhoneInputCustomProps) {
  const { local } = useLanguage();
  const { t, i18n } = useTranslation();

  const [country, setCountry] = useState<CountryCode>("SA");
  const [countryCallingCode, setCountryCallingCode] = useState<string>("+966");

  const countries: CountryCode[] = ["SA", "EG", "US", "GB"];

  // تغيير اللغة حسب الكونتكست
  useEffect(() => {
    i18n.changeLanguage(local);
  }, [local, i18n]);

  // تحديث رمز الاتصال عند تغيير الدولة
  useEffect(() => {
    setCountryCallingCode("+" + getCountryCallingCode(country));
  }, [country]);

  // 🟢 حول value إلى string إذا كان string، غير هيك اعتبرها ""
  const valueStr = typeof value === "string" ? value : "";

  // الرقم اللي يظهر داخل الإنبت (من غير رمز الدولة)
const phoneWithoutCode = valueStr.startsWith(countryCallingCode)
  ? valueStr.slice(countryCallingCode.length)
  : valueStr;

  return (
    <div
      dir="ltr"
      className="w-[360px] h-[48px] flex items-center border border-border-light rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all"
    >
      {/* اختيار الدولة */}
      <div className="relative flex items-center gap-2 px-3 border-r h-full !bg-background-secondary">
        {/* العلم */}
        <div className="w-[18px] h-[18px] rounded-full overflow-hidden flex items-center justify-center !bg-background-secondary shadow-sm">
          <ReactCountryFlag
            countryCode={country}
            svg
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            aria-label={country}
          />
        </div>

        {/* اختصار الدولة */}
        <span className="text-sm font-medium text-gray-700 select-none">
          {country}
        </span>

        {/* select مخفي */}
        <select
          className="absolute inset-0 w-full h-full opacity-0 bg-transparent cursor-pointer"
          value={country}
          onChange={(e) => {
            const selected = e.target.value as CountryCode;
            setCountry(selected);

            if (valueStr) {
              const onlyNumber = valueStr
                .replace(/\D/g, "")
                .replace(getCountryCallingCode(country), "");
              onChange?.("+" + getCountryCallingCode(selected) + onlyNumber);
            } else {
              onChange?.("");
            }
          }}
        >
          {countries.map((c) => (
            <option key={c} value={c}>
              {c} (+{getCountryCallingCode(c)})
            </option>
          ))}
        </select>
      </div>

      {/* رمز الاتصال + إدخال الرقم */}
      <div className="flex items-center gap-2 px-3 flex-1 !bg-background-secondary">
        {valueStr && (
          <span className="text-sm text-gray-700 select-none">
            {countryCallingCode}
          </span>
        )}

        <input
          type="tel"
          value={phoneWithoutCode}
          onChange={(e) => {
            const cleanVal = e.target.value.replace(/\D/g, "");
            onChange?.(cleanVal ? countryCallingCode + cleanVal : "");
          }}
          placeholder={placeholder || t("Enter Phone Number")}
        className={`w-full h-full outline-none border-none text-sm !bg-background-secondary placeholder:text-text-secondary ${
    local?.startsWith("ar") ? "placeholder-rtl" : "placeholder-ltr"
  }`}

        />
      </div>
    </div>
  );
}
