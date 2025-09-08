import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDropzone, FileRejection } from "react-dropzone";
interface fileuploadProps {
  amount: string;
  size: number;
  width?: string;  // العرض اختياري
  label?: string; // عبارة مخصصة للرفع
}

export default function FileUpload({ amount, size, width = "360px", label }: fileuploadProps) {
  const { t } = useTranslation();
  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      if (fileRejections.length > 0) {
        alert(t("File not accepted. Only SVG, PNG, JPG, GIF up to 2MB allowed."));
        return;
      }

      const file = acceptedFiles[0];
      console.log("تم رفع الملف:", file);
    },
    []
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "file/*": [".pdf"],
    },
    maxSize: size,
  });

  return (
    <div
      {...getRootProps()}
      className={`h-[48px] border border-gray-300 rounded-md text-center items-center justify-center cursor-pointer transition ${
        isDragActive ? "bg-blue-50 shadow-md" : "hover:shadow-md"
      }`}
      style={{ width }}  // هنا يستخدم العرض الافتراضي أو الممر ر
    >
      <input {...getInputProps()} />
      <div className="flex items-center justify-center gap-2 h-full mt-[2px]">
        <img alt={t("pdf photo")} src="./pdfIcon.svg" className="w-5 h-5 self-center" style={{ marginTop: '2px' }} />
        <p className="text-[12px] flex items-center gap-1 m-0 p-0">
          {label ? (
            label
          ) : (
            <>
              <span className="text-primary-default">{t("Click or Drag")}</span>{" "}
              <span className="text-text-primary">{t("file to this area to upload")}</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
