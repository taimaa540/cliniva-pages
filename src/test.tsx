import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export default function App() {
  const [phone, setPhone] = useState("");

  return (
    <PhoneInput
      defaultCountry="sa"
      value={phone}
      onChange={setPhone}
      className="custom-phone-input"
    />
  );
}
