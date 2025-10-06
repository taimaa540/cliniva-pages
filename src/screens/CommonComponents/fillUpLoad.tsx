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
    <div>
      {!file && (
        <label
          className={`max-w-[360px] flex flex-col items-center justify-center border rounded-lg py-[7px] px-[16px] text-center cursor-pointer transition ${
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
