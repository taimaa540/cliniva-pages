import React, { useState } from "react";
import PhoneInput, { getCountryCallingCode } from "react-phone-number-input";
import "react-phone-number-input/style.css";

// خريطة بين رموز الدول وأسمائها
const countryNames: Record<string, string> = {
  SY: "Syria",
  US: "United States",
  GB: "United Kingdom",
  FR: "France",
  DE: "Germany",
  EG: "Egypt",
  SA: "Saudi Arabia",
  AE: "United Arab Emirates",
  // أضف باقي الدول إذا احتجت
};

export default function PhoneInputCustom() {
  const [country, setCountry] = useState<string>("SY"); // الدولة الافتراضية
  const [phone, setPhone] = useState<string>();

  const getFirstTwo = (code: string) =>
    countryNames[code]?.slice(0, 2).toUpperCase() || code;

  return (
    <div className="p-4 w-96">
      <label className="block mb-2 font-bold">رقم الهاتف</label>
      <div className="flex items-center border rounded-lg p-2 gap-2">
        {/* العلم */}
        <img
          src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`}
          alt={country}
          className="w-6 h-6 rounded-full border"
        />

        {/* أول حرفين من اسم الدولة */}
        <span className="font-semibold">{getFirstTwo(country)}</span>

        {/* كود الدولة الدولي */}
        <span className="text-gray-600">+{getCountryCallingCode(country)}</span>

        {/* حقل إدخال الرقم */}
           <PhoneInput
         
             value={phone}
             onChange={setPhone}
             onCountryChange={(c) => c && setCountry(c)} // تغيير الدولة
             international
             countryCallingCodeEditable={false}
             placeholder="أدخل رقمك"
             className="flex-1 outline-none bg-background-secondary"
             style={{ direction: i18n.language === 'ar' ? 'rtl' : 'ltr', background: 'var(--background-secondary, #f5f6fa)' }}
           />
      </div>
      <p className="mt-2">الرقم الكامل: {phone}</p>
    </div>
  );
}
