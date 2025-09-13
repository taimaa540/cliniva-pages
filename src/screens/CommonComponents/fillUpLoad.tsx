import React, { useCallback } from "react";
import { useTranslation, Trans } from "react-i18next";
import { useDropzone, FileRejection } from "react-dropzone";

interface fileuploadProps {
  amount: string;
  size: number;
  width?: string;  // العرض اختياري
  label?: React.ReactNode; // صار يقبل JSX كمان
}

export default function FileUpload({
  amount,
  size,
  width = "360px", // قيمة افتراضية للعرض
  label = (
    <Trans i18nKey="uploadFile.dragLabel">
      <span className="text-text-accent" />
      <span className="text-text-primary" />
    </Trans>
  ), // قيمة افتراضية للـ label
}: fileuploadProps) {
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
      className={`h-[48px] bg-background-secondary border border-border-light rounded-md text-center items-center justify-center cursor-pointer transition ${
        isDragActive ? "shadow-md" : "hover:shadow-md"
      }`}
      style={{ width }}
    >
      <input {...getInputProps()} />
      <div className="flex items-center justify-center gap-2 h-full mt-[2px]">
        <img
          alt={t("pdf photo")}
          src="./pdfIcon.svg"
          className="w-5 h-5 self-center"
          style={{ marginTop: "2px" }}
        />
        <p className="text-[12px] flex items-center gap-1 m-0 p-0">
          {label}
        </p>
      </div>
    </div>
  );
}
