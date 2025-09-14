import React, { useState } from "react";

type FileUploadProps = {
  accept?: string; // نوع الملفات المسموح بها
  maxSizeMB?: number; // الحجم الأقصى بالميجا
};

type UploadedFile = {
  name: string;
  size: number;
  type: string;
  date: Date;
};

export default function FileUpload({
  accept = ".pdf",
  maxSizeMB = 1,
}: FileUploadProps) {
  const [file, setFile] = useState<UploadedFile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);

  // ✅ دالة للتحقق وإضافة الملف
  const handleFile = (selectedFile: File) => {
    if (selectedFile.size > maxSizeMB * 1024 * 1024) {
      setError(`⚠️ حجم الملف يجب أن لا يتجاوز ${maxSizeMB}MB`);
      setFile(null);
      return;
    }
    setError(null);
    setFile({
      name: selectedFile.name,
      size: selectedFile.size,
      type: selectedFile.type,
      date: new Date(),
    });
  };

  // ✅ عند اختيار ملف عبر الزر
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  // ✅ عند إسقاط ملف داخل البوكس
  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div>
      {!file && (
        <label
          className={`w-[360px] flex flex-col items-center justify-center border rounded-lg py-[7px] px-[16px] text-center cursor-pointer transition ${
            dragOver ? "border-blue-500 bg-blue-50" : "border-gray-300"
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
        >
          <input
            type="file"
            className="hidden"
            accept={accept}
            onChange={handleFileChange}
          />
          <div className="flex items-center justify-evenly gap-[8px] mt-[5px] ">
            <img alt="pdf photo" src="./pdfIcon.svg" />
            <div>
              <p className="text-sm text-gray-600">
                <span className="text-blue-500 font-medium">Click or Drag</span>{" "}
                file to this area to upload
              </p>
              <p className="text-xs text-gray-400">
                File type: {accept}, Max size: {maxSizeMB}MB
              </p>
            </div>
          </div>
        </label>
      )}

      {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}

      {file && (
        <div className="w-[360px] flex items-center gap-3 bg-[#FAF6F5] rounded-xl p-3">
          {/* أيقونة */}
          <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-lg">
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="38" height="38" rx="10" fill="#A5C8F2" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.4911 11.2411C12.7255 11.0067 13.0435 10.875 13.375 10.875H20.875C21.0408 10.875 21.1997 10.9408 21.3169 11.0581L25.6919 15.4331C25.8092 15.5503 25.875 15.7092 25.875 15.875V19C25.875 19.3452 25.5952 19.625 25.25 19.625C24.9048 19.625 24.625 19.3452 24.625 19V16.1339L20.6161 12.125L13.375 12.125L13.375 19C13.375 19.3452 13.0952 19.625 12.75 19.625C12.4048 19.625 12.125 19.3452 12.125 19V12.125C12.125 11.7935 12.2567 11.4755 12.4911 11.2411Z"
                fill="#414651"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.875 10.875C21.2202 10.875 21.5 11.1548 21.5 11.5V15.25H25.25C25.5952 15.25 25.875 15.5298 25.875 15.875C25.875 16.2202 25.5952 16.5 25.25 16.5H20.875C20.5298 16.5 20.25 16.2202 20.25 15.875V11.5C20.25 11.1548 20.5298 10.875 20.875 10.875Z"
                fill="#414651"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.125 22.125C12.125 21.7798 12.4048 21.5 12.75 21.5H14C14.4973 21.5 14.9742 21.6975 15.3258 22.0492C15.6775 22.4008 15.875 22.8777 15.875 23.375C15.875 23.8723 15.6775 24.3492 15.3258 24.7008C14.9742 25.0525 14.4973 25.25 14 25.25H13.375V25.875C13.375 26.2202 13.0952 26.5 12.75 26.5C12.4048 26.5 12.125 26.2202 12.125 25.875V22.125ZM13.375 24H14C14.1658 24 14.3247 23.9342 14.4419 23.8169C14.5592 23.6997 14.625 23.5408 14.625 23.375C14.625 23.2092 14.5592 23.0503 14.4419 22.9331C14.3247 22.8158 14.1658 22.75 14 22.75H13.375V24Z"
                fill="#414651"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.0625 22.125C23.0625 21.7798 23.3423 21.5 23.6875 21.5H25.875C26.2202 21.5 26.5 21.7798 26.5 22.125C26.5 22.4702 26.2202 22.75 25.875 22.75H24.3125V25.875C24.3125 26.2202 24.0327 26.5 23.6875 26.5C23.3423 26.5 23.0625 26.2202 23.0625 25.875V22.125Z"
                fill="#414651"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.0625 24.3125C23.0625 23.9673 23.3423 23.6875 23.6875 23.6875H25.5625C25.9077 23.6875 26.1875 23.9673 26.1875 24.3125C26.1875 24.6577 25.9077 24.9375 25.5625 24.9375H23.6875C23.3423 24.9375 23.0625 24.6577 23.0625 24.3125Z"
                fill="#414651"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.2812 22.125C17.2812 21.7798 17.5611 21.5 17.9062 21.5H19C19.663 21.5 20.2989 21.7634 20.7678 22.2322C21.2366 22.7011 21.5 23.337 21.5 24C21.5 24.663 21.2366 25.2989 20.7678 25.7678C20.2989 26.2366 19.663 26.5 19 26.5H17.9062C17.5611 26.5 17.2812 26.2202 17.2812 25.875V22.125ZM18.5312 22.75V25.25H19C19.3315 25.25 19.6495 25.1183 19.8839 24.8839C20.1183 24.6495 20.25 24.3315 20.25 24C20.25 23.6685 20.1183 23.3505 19.8839 23.1161C19.6495 22.8817 19.3315 22.75 19 22.75H18.5312Z"
                fill="#414651"
              />
            </svg>
          </div>

          {/* معلومات الملف */}
          <div className="flex flex-col">
            <span className="font-lato font-semibold text-xs leading-[130%] tracking-[0] text-text-primary">{file.name}</span>
            <span className="font-lato font-regular text-[11px] leading-[124%] tracking-[0] text-text-xecondary">
              {file.date.toDateString()} •{" "}
              {(file.size / (1024 * 1024)).toFixed(1)} MB
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

// // مثال 1: فقط PDF وحجمه 1MB
// <FileUpload accept=".pdf" maxSizeMB={1} />

// // مثال 2: صور JPG/PNG حتى 5MB
// <FileUpload accept=".jpg,.png" maxSizeMB={5} />

// // مثال 3: أي نوع ملف حتى 10MB
// <FileUpload accept="*/*" maxSizeMB={10} />
