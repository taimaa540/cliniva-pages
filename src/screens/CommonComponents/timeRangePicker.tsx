import { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { useLanguage } from "../../lib/LanguageContext";
import { useTranslation } from "react-i18next";

export default function TimeRangePicker() {
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("00:00");
  const [showPicker, setShowPicker] = useState(false);
  const { local } = useLanguage();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(local);
  }, [local, i18n]);

  return (
    <div className="relative  w-[clamp(200px,90%,360px)]">
      {/* Display row */}
      <div className="flex items-center justify-between  w-full">
        <span className="text-gray-600 text-sm mr-2">{startTime}</span>
        <span
          className={`transition-transform ${i18n.dir() === "rtl" ? "rotate-180" : ""}`}
          style={{ display: "inline-block" }}
        >
          →
        </span>
        <span className="text-gray-600 text-sm">{endTime}</span>

        {/* زر الساعة */}
        <button
          type="button"
          onClick={() => setShowPicker(!showPicker)}
          className="text-gray-500 hover:text-blue-500"
        >
          <Clock className="w-5 h-5 text-text-primary "  />
        </button>
      </div>

      {/* Time picker يظهر عند النقر */}
      {showPicker && (
        <div className="absolute top-full mt-2 bg-white border border-gray-200 rounded shadow-lg p-3 space-y-2 z-10">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600 w-12">Start</label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="border rounded px-2 py-1 text-sm w-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600 w-12">End</label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="border rounded px-2 py-1 text-sm w-full"
            />
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => setShowPicker(false)}
              className="text-sm px-3 py-1 bg-blue-500 text-white rounded"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
