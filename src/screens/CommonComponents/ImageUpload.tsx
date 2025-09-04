import React, { useState } from "react";
import { ImagePlus } from "lucide-react";

export default function ImageUploader() {
  const defaultImage = "/userLogo.png"; // رابط الصورة الافتراضية
  const [image, setImage] = useState<string | null>(defaultImage);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImage(null); // إزالة الصورة لإظهار أيقونة رفع
  };

  return (
    <div className="flex flex-col items-center">
      {image ? (
        <div className="relative w-16 h-16">
          <img
            src={image}
            alt="Selected"
            className="w-16 h-16 rounded-full object-cover border"
          />
          <button
            onClick={handleRemoveImage}
            className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
          >
            ✕
          </button>
        </div>
      ) : (
        <label className="w-16 h-16 border border-gray-300 rounded-full flex items-center justify-center cursor-pointer">
          <ImagePlus className="w-6 h-6 text-gray-500" />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
      )}
    </div>
  );
}
