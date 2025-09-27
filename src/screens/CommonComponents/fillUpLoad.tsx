import React, { useCallback, useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { useDropzone, FileRejection } from "react-dropzone";

interface FileUploadProps {
  amount: string;

  width?: string; // Tailwind class
  label?: React.ReactNode;
}

export default function FileUpload({

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
            <span className="text-[clamp(10px,2vw,12px)] text-text-primary font-semibold">
              {uploadedFile.name}
            </span>
            <span className="text-[clamp(10px,2vw,12px)] text-text-secondary font-bold flex items-center gap-1">
              {new Date().toLocaleDateString()}
              <h1 className="text-border-light">• </h1>
              <span className="font-normal">{(uploadedFile.size / 1024 / 1024).toFixed(1)} MB</span>
            </span>
          </div>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={`${width} text-[clamp(10px,1.1vw,12px)]  bg-background-secondary border border-border-light rounded-md text-center items-center justify-center cursor-pointer transition ${isDragActive ? "shadow-md" : "hover:shadow-md"}`}
        >
          <input {...getInputProps()} />
          <div className="flex items-center justify-start ps-3 h-10 sm:h-10 md:h-12 gap-2  mt-[2px]">
    <svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.585787 0.874361C0.960859 0.499289 1.46957 0.288574 2 0.288574H14C14.2652 0.288574 14.5196 0.393931 14.7071 0.581467L21.7071 7.58147C21.8946 7.769 22 8.02336 22 8.28857V13.2886C22 13.8409 21.5523 14.2886 21 14.2886C20.4477 14.2886 20 13.8409 20 13.2886V8.70279L13.5858 2.28857L2 2.28857L2 13.2886C2 13.8409 1.55228 14.2886 1 14.2886C0.447715 14.2886 0 13.8409 0 13.2886V2.28857C0 1.75814 0.210714 1.24943 0.585787 0.874361Z" fill="#414651"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 0.288574C14.5523 0.288574 15 0.736289 15 1.28857V7.28857H21C21.5523 7.28857 22 7.73629 22 8.28857C22 8.84086 21.5523 9.28857 21 9.28857H14C13.4477 9.28857 13 8.84086 13 8.28857V1.28857C13 0.736289 13.4477 0.288574 14 0.288574Z" fill="#414651"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 18.2886C0 17.7363 0.447715 17.2886 1 17.2886H3C3.79565 17.2886 4.55871 17.6046 5.12132 18.1673C5.68393 18.7299 6 19.4929 6 20.2886C6 21.0842 5.68393 21.8473 5.12132 22.4099C4.55871 22.9725 3.79565 23.2886 3 23.2886H2V24.2886C2 24.8409 1.55228 25.2886 1 25.2886C0.447715 25.2886 0 24.8409 0 24.2886V18.2886ZM2 21.2886H3C3.26522 21.2886 3.51957 21.1832 3.70711 20.9957C3.89464 20.8081 4 20.5538 4 20.2886C4 20.0234 3.89464 19.769 3.70711 19.5815C3.51957 19.3939 3.26522 19.2886 3 19.2886H2V21.2886Z" fill="#414651"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 18.2886C17.5 17.7363 17.9477 17.2886 18.5 17.2886H22C22.5523 17.2886 23 17.7363 23 18.2886C23 18.8409 22.5523 19.2886 22 19.2886H19.5V24.2886C19.5 24.8409 19.0523 25.2886 18.5 25.2886C17.9477 25.2886 17.5 24.8409 17.5 24.2886V18.2886Z" fill="#414651"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 21.7886C17.5 21.2363 17.9477 20.7886 18.5 20.7886H21.5C22.0523 20.7886 22.5 21.2363 22.5 21.7886C22.5 22.3409 22.0523 22.7886 21.5 22.7886H18.5C17.9477 22.7886 17.5 22.3409 17.5 21.7886Z" fill="#414651"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 18.2886C8.25 17.7363 8.69771 17.2886 9.25 17.2886H11C12.0609 17.2886 13.0783 17.71 13.8284 18.4601C14.5786 19.2103 15 20.2277 15 21.2886C15 22.3494 14.5786 23.3669 13.8284 24.117C13.0783 24.8671 12.0609 25.2886 11 25.2886H9.25C8.69771 25.2886 8.25 24.8409 8.25 24.2886V18.2886ZM10.25 19.2886V23.2886H11C11.5304 23.2886 12.0391 23.0779 12.4142 22.7028C12.7893 22.3277 13 21.819 13 21.2886C13 20.7581 12.7893 20.2494 12.4142 19.8744C12.0391 19.4993 11.5304 19.2886 11 19.2886H10.25Z" fill="#414651"/>
</svg>

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
