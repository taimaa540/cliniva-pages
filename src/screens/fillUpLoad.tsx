// FileUpload.js
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export default function FileUpload() {
//   const onDrop = useCallback((acceptedFiles, fileRejections) => {
//     if (fileRejections.length > 0) {
//       alert('الملف غير مقبول. يُسمح فقط بـ SVG, PNG, JPG, GIF بحد أقصى 2MB.');
//       return;
//     }

//     const file = acceptedFiles[0];
//     console.log('تم رفع الملف:', file);

//     // يمكنك هنا رفع الملف إلى الخادم أو تخزينه محليًا أو معالجته
//   }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    
    multiple: false,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.svg']
    },
    maxSize: 2 * 1024 * 1024 // 2MB
  });

  return (
    <div
      {...getRootProps()}
      className="border border-gray-300 border-dashed rounded-md p-8 text-center cursor-pointer hover:shadow-md transition"
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center space-y-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v9m0-9l-3 3m3-3l3 3m0-12v3m0-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

        <p className="text-gray-700">
          <span className="text-blue-500 font-medium">Click or Drag</span>{' '}
          file to this area to upload
        </p>
        <p className="text-sm text-gray-500">
          SVG, PNG, JPG or GIF, Maximum file size 2MB.
        </p>
      </div>
    </div>
  );
}
