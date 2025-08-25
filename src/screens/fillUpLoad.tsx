// FileUpload.tsx
import { useCallback } from "react";
import { useDropzone, FileRejection } from "react-dropzone";
interface fileuploadProps {
  amount: string;
  size : number
}
export default function FileUpload({ amount, size }: fileuploadProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      if (fileRejections.length > 0) {
        alert("الملف غير مقبول. يُسمح فقط بـ SVG, PNG, JPG, GIF بحد أقصى 2MB.");
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
      className={`w-[360px] h-[48px] border border-gray-300 rounded-md text-center cursor-pointer transition ${
        isDragActive ? "bg-blue-50 shadow-md" : "hover:shadow-md"
      }`}
    >
      <input {...getInputProps()} />
      <div className="flex items-center justify-evenly mt-[5px] ">
        <img alt="pdf photo" src="./pdfIcon.svg" />
        <div>
          <p className="text-gray-700 text-[12px]">
            <span className="text-blue-500 text-[12px]">Click or Drag</span>{" "}
            file to this area to upload
          </p>
          <p className="text-[11px] text-gray-500">{amount}</p>
        </div>
      </div>
    </div>
  );
}
