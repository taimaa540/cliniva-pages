import { useState } from "react";
import { Clock } from "lucide-react";

export default function TimeRangePicker() {
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("00:00");
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div className="relative w-[360px] max-w-md">
      {/* Display row */}
      <div className="flex items-center gap-[80px] w-[360px] ">
        <span className="text-gray-600 text-sm mr-[10px]">{startTime}</span>
        <span className="px-3 text-gray-500 ">→</span>
        <span className="text-gray-600 text-sm ">{endTime}</span>

        {/* ساعة واحدة للتحكم */}
        <button
          type="button"
          onClick={() => setShowPicker(!showPicker)}
          className="text-gray-500 hover:text-blue-500"
        >
          <Clock className="w-5 h-5" />
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
              className="border rounded px-2 py-1 text-sm"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600 w-12">End</label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="border rounded px-2 py-1 text-sm"
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
