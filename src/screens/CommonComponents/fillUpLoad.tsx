import React, { useCallback, useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { useDropzone, FileRejection } from "react-dropzone";

interface FileUploadProps {
  amount: string;
  size?: number; // اختياري وما عاد نستخدمه
  width?: string; // Tailwind class
  label?: React.ReactNode;
}

export default function FileUpload({
  amount,
  size, // ما عاد نستخدمها
  width = "w-[min(100%,360px)]", // القيمة الابتدائية
  label = (
    <Trans i18nKey="uploadFile.dragLabel">
      <span className="text-text-accent" />
      <span className="text-text-primary" />
    </Trans>
  ),
}: FileUploadProps) {
  const { t } = useTranslation();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const onDrop = useCallback(
    async (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      if (fileRejections.length > 0) {
        alert(t("File not accepted. Only PDF allowed."));
        return;
      }

      const file = acceptedFiles[0];
      setUploadedFile(file);

      try {
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch("http://localhost:5000/upload", {
          method: "POST",
          body: formData,
        });

        if (!res.ok) throw new Error("Upload failed");

        const data = await res.json();
        console.log("✅ تم رفع الملف بنجاح:", data);
        alert("تم رفع الملف بنجاح ✔️");
      } catch (err) {
        console.error("❌ خطأ أثناء الرفع:", err);
        alert("فشل رفع الملف");
      }
    },
    [t]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: { "application/pdf": [".pdf"] },
  });

  return (
    <div className={width}>
      {uploadedFile ? (
        <div className={`flex items-center gap-3 p-2 bg-background-secondary rounded-[16px] ${width}`}>
          <img
            src="./pdfIcon.svg"
            alt="PDF"
            className="w-8 h-8 p-2 rounded-[10px] bg-primary-default object-contain"
          />
          <div className="flex flex-col">
            <span className="text-[12px] text-text-primary font-semibold">
              {uploadedFile.name}
            </span>
            <span className="text-[11px] text-text-secondary font-bold flex items-center gap-1">
              {new Date().toLocaleDateString()}
              <h1 className="text-border-light">• </h1>
              <span className="font-normal">{(uploadedFile.size / 1024 / 1024).toFixed(1)} MB</span>
            </span>
          </div>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={`${width} text-[clamp(14px,1.1vw,16px)] bg-background-secondary border border-border-light rounded-md text-center items-center justify-center cursor-pointer transition ${isDragActive ? "shadow-md" : "hover:shadow-md"}`}
        >
          <input {...getInputProps()} />
          <div className="flex items-center justify-start  h-10 sm:h-10 md:h-12 gap-2  mt-[2px]">
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
