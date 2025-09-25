import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";

const locales = ["en", "ar"];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (newLocale: string) => {
    i18n.changeLanguage(newLocale);
    setIsOpen(false);
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Main Language Button */}
      <Button
        variant="outlined"
        size="small"
        onClick={() => setIsOpen(!isOpen)}
        className="changeLanguage"
      >
        <TranslateIcon />
      </Button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            marginTop: "0.5rem",
            backgroundColor: "white",
            border: "1px solid #ddd",
            borderRadius: "6px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            zIndex: 1000,
            minWidth: "120px",
          }}
        >
          {locales.map((lang) => (
            <button
              key={lang}
              onClick={() => switchLanguage(lang)}
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                padding: "0.5rem 1rem",
                textAlign: "left",
                background:
                  i18n.language === lang ? "rgba(25,118,210,0.1)" : "white",
                color: i18n.language === lang ? "#1976d2" : "#333",
                fontWeight: i18n.language === lang ? "600" : "400",
                border: "none",
                cursor: "pointer",
              }}
            >
              <span>{lang === "ar" ? "العربية" : "English"}</span>
              {i18n.language === lang && (
                <svg
                  style={{ marginLeft: "auto" }}
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Overlay click to close */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 500,
          }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
