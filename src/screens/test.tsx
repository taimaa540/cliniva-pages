import React, { useState } from "react";
import PhoneInput, { CountryData } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ChevronDownIcon } from "lucide-react";

const PhoneNumberInput: React.FC = () => {
  const [phone, setPhone] = useState<string>("");
  const [country, setCountry] = useState<CountryData | null>(null);

  const handleChange = (value: string, countryData: CountryData) => {
    setPhone(value);
    setCountry(countryData);
  };

  return (
    <div>
      <label>رقم الموبايل:</label>
      <PhoneInput
        country={"sa"}
        value={phone}
        onChange={handleChange}
        inputStyle={{
          width: "360px",
          height: "48px",
          borderRadius: "4px",
          border: "1px solid #E4E2DD",
          padding: "0 0 0 70px",
        }}
        buttonStyle={{
          width: "67px",
          height: "48px",
          backgroundColor: "#fff",
          border: "1px solid #E4E2DD",
        }}
      />

      <div
        style={{
          marginTop: "10px",
          position: "absolute",
          top: "30px",
          left: "250px",
          fontSize: "14px",
        }}
      >
        {country ? country.countryCode.toUpperCase() : "SA"}
        <ChevronDownIcon className="absolute top-[0] left-[15px]"/>
      </div>
    </div>
  );
};

export default PhoneNumberInput;
