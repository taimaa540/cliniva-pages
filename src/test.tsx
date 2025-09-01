import { useState } from "react";
import { motion } from "framer-motion";

export default function MiniDayNightSwitch() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      onClick={() => setIsDark(!isDark)}
      className={`relative w-32 h-16 rounded-full cursor-pointer overflow-hidden flex items-center p-2 transition-colors duration-700 shadow-lg ${
        isDark ? "bg-gradient-to-b from-gray-900 to-black" : "bg-sky-400"
      }`}
    >
      {/* ☁️ غيوم في النهار */}
      {!isDark && (
        <>
          <motion.div
            animate={{ x: ["-50%", "120%"] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="absolute top-3 left-0 text-white/80 text-lg"
          >
            ☁️
          </motion.div>
          <motion.div
            animate={{ x: ["100%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            className="absolute bottom-2 right-0 text-white/70 text-xl"
          >
            ☁️
          </motion.div>
        </>
      )}

      {/* ✨ نجوم في الليل */}
      {isDark &&
        [...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 60}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: Math.random() * 2 + 1.5,
              repeat: Infinity,
            }}
          />
        ))}

      {/* الزر (شمس/قمر) */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md relative z-10"
      >
        {isDark ? (
          <span className="text-indigo-800 text-2xl">🌙</span>
        ) : (
          <span className="text-yellow-500 text-2xl">🌞</span>
        )}
      </motion.div>
    </div>
  );
}
