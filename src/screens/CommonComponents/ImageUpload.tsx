import React, { useState, useEffect } from "react";
import { ImagePlus } from "lucide-react";

interface ImageUploaderProps {
  initialImage?: string; // الصورة الافتراضية كـ prop
}

export default function ImageUploader({ initialImage }: ImageUploaderProps) {
  const [image, setImage] = useState<string | null>(null);

  // استخدم الصورة الممررة في البداية فقط
  useEffect(() => {
    if (initialImage) {
      setImage(initialImage);
    }
  }, [initialImage]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImage(null); // ترجع للأيقونة
  };

  return (
    <div className="flex flex-col items-center">
      {image ? (
        <div className="relative w-10 h-10 sm:w-14 sm:h-14 md:w-14 md:h-14 lg:w-16 lg:h-16">
          <img
            src={image}
            alt="Selected"
            className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-14 lg:h-14 rounded-full object-cover border"
          />
          <button
            onClick={handleRemoveImage}
            className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 sm:w-5 sm:h-5 md:w-4 md:h-4 lg:w-4 lg:h-4 flex items-center justify-center text-xs"
          >
            ✕
          </button>
        </div>
      ) : (
        <label className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 border border-dashed border-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100">
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
