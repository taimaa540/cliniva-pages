import { useState } from "react";
import { useAuth } from "../../Hook/useAuth";
import { Mail, Lock } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useLanguage } from "../../lib/LanguageContext";
import { ThemeToggle } from "../../components/theme/ThemeSwitcher";
import { useTranslation } from "react-i18next";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import TranslateIcon from "@mui/icons-material/Translate";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Alert, AlertDescription } from '../../components/ui/alert';

export default function LoginPage() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);

  const { login } = useAuth();
  const { local, handleLanguageClick } = useLanguage();
  // states
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // password handlers
  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  // submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const result = await login(email, password);
      if (result?.ok) {
        window.location.href = "/dashboard";
      } else {
        setError(t("invalidCredentials"));
      }
    } catch (err: any) {
      setError(err.message || t("networkError"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen flex transition-all duration-300 ${
        darkMode ? "bg-[#0f172a]" : "bg-[white]"
      }`}
    >
      {/* Theme Switcher + Language Switcher */}
      <div
        dir="ltr"
        className="absolute z-10 flex gap-2 items-center top-4 right-4"
      >
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className={`p-2.5 ${
              local === "ar" ? "bg-[green]" : "bg-secondary-light"
            } rounded-[20px] h-auto transition-all duration-[1000ms]`}
            onClick={handleLanguageClick}
          >
            <TranslateIcon className="w-5 h-5" />
          </Button>
        </div>
        <ThemeToggle />
      </div>

      {/* Left Side */}
      <div className="hidden md:flex w-1/2 bg-[#69a3e9] relative flex items-center justify-center rounded-r-[48px]">
        {/* Decorative Icons */}
        <div className="absolute top-0 right-0 p-6">
          <svg
            width="96"
            height="96"
            viewBox="0 0 105 128"
            className="opacity-25"
          >
            <path
              d="M26.8922 0.000382133L41.1584 3.82302C35.1335 50.1443 61.0576 95.0463 104.186 112.989L100.363 127.255L0 100.363L26.8922 0.000382133Z"
              fill="#FAF6F5"
              fillOpacity="0.25"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 p-6">
          <svg
            width="96"
            height="96"
            viewBox="0 0 146 146"
            className="opacity-25"
          >
            <path
              d="M73.0001 -3.19093e-06L83.3771 -3.64452e-06C87.7114 32.5309 113.469 58.2887 146 62.623L146 73L73.0001 73L73.0001 -3.19093e-06ZM0.000118879 73L73.0001 73L73.0001 146L63.2667 146L63.2667 141.134C63.2667 108.88 37.1198 82.7334 4.86633 82.7334L0.000119305 82.7334L0.000118879 73Z"
              fill="#FAF6F5"
              fillOpacity="0.25"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 p-6">
          <svg
            width="96"
            height="96"
            viewBox="0 0 181 274"
            className="opacity-25"
          >
            <path
              d="M-72.7725 64.5586L-62.3863 46.5691C-1.6499 71.6163 68.7887 52.7422 108.864 0.682616L126.854 11.0688L53.7856 137.627L-72.7725 64.5586ZM-19.2819 264.186L53.7864 137.627L180.345 210.696L170.602 227.57L162.165 222.699C106.248 190.415 34.7468 209.574 2.46313 265.491L-2.40796 273.928L-19.2819 264.186Z"
              fill="#FAF6F5"
              fillOpacity="0.25"
            />
          </svg>
        </div>

        {/* Brand Content */}
        <div className="flex flex-col items-center gap-16 w-[398px] z-10">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mx-auto mb-8">
              <svg
                width="96"
                height="96"
                viewBox="0 0 96 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M96 48V54.8232C74.6098 57.6732 57.6732 74.6098 54.8232 96H48V48H96ZM48 0V48H0V41.5996H3.2002C24.4078 41.5995 41.5995 24.4078 41.5996 3.2002V0H48Z"
                  fill="#FAF6F5"
                />
              </svg>
            </div>
            <h1 className="text-[#faf6f5] text-[48px] font-semibold leading-none tracking-tight">
              Cliniva SYS
            </h1>
            <p className="text-[#faf6f5] text-xl font-medium mt-4 opacity-90">
              {t("Welcome to Cliniva System The future of medical center management starts here..")}
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 md:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h2
              style={{ fontSize: local === "ar" ? "34px" : "36px" }}
              className={`${
                darkMode ? "text-[white]" : "text-[#69a3e9]"
              } font-semibold text-center mb-2`}
            >
              {t("loginTitle")}
            </h2>
          </div>

          {/* Login Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className={`${
                  darkMode ? "text-[white]" : "text-[#69A3E9]"
                } block text-sm font-medium ${local === 'ar' ? "text-right" : "text-left"}`}
              >
                {t("userName")}
              </label>
              <div className="relative">
                <Mail
                  style={{ color: "#69A3E9" }}
                  className={`absolute ${
                    local === "ar" ? "right-3" : "left-3"
                  } top-1/2 h-4 w-4 -translate-y-1/2`}
                />
                <OutlinedInput
                dir={`${local === 'ar' ? "rtl" : "ltr"}`}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={`w-full border border-gray-200 ${
                    local === "ar" ? "pr-9" : "pl-9"
                  } h-11 focus-visible:ring-[#69a3e9] focus-visible:border-[#69a3e9]`}
                  placeholder={t("enterUser")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    "& input": {
                      color: darkMode ? "white" : "black",
                      caretColor: darkMode ? "white" : "black",
                    },
                    "& input::placeholder": {
                      color: "#69A3E9",
                      opacity: 1,
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className={`${
                  darkMode ? "text-[white]" : "text-[#69A3E9]"
                } block text-sm font-medium ${local === 'ar' ? "text-right" : "text-left"}`}
              >
                {t("password")}
              </label>
              <div className="relative">
                <Lock
                  style={{ color: "#69A3E9" }}
                  className={`absolute ${
                    local === "ar" ? "right-3" : "left-3"
                  } top-1/2 h-4 w-4 -translate-y-1/2`}
                />
                <OutlinedInput
                dir={`${local === 'ar' ? "rtl" : "ltr"}`}
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  placeholder={t("enterPassword")}
                  className={`w-full border border-gray-200 ${
                    local === "ar" ? "pr-9" : "pl-9"
                  } h-11 focus-visible:ring-[#69a3e9] focus-visible:border-[#69a3e9]`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{
                    "& input": {
                      color: darkMode ? "white" : "black",
                      caretColor: darkMode ? "white" : "black",
                    },
                    "& input::placeholder": {
                      color: "#69A3E9",
                      opacity: 1,
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                />
                <IconButton
                  style={{
                    color: darkMode ? "white" : "gray",
                    position: "absolute",
                    right: local === "ar" ? "unset" : "10px",
                    left: local === "ar" ? "10px" : "unset",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox
                  style={{ color: "#00800080" }}
                  id="rememberMe"
                  name="rememberMe"
                  color="success"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label
                  htmlFor="rememberMe"
                  className={`ml-2 mr-2 block text-sm ${
                    darkMode ? "text-[white]" : "text-[#69A3E9]"
                  }`}
                >
                  {t("rememberMe")}
                </label>
              </div>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Submit */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-11 bg-[#00B48D] hover:bg-[#4a8ce0] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
              size="lg"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin -ml-1 mr-3 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                  {t("loading")}
                </>
              ) : (
                t("signIn")
              )}
            </Button>
          </form>

          {/* Onboarding Link */}
          <div className="mt-5">
            <Link to="/chooseplan">
              <button className="block mx-auto rounded-[14px] p-[10px] hover:bg-[#8db8ec40] transition-all duration-400">
                <div className="flex items-center text-[26px] text-[#69A3E9]">
                  <svg
                    className={`${local === "ar" ? "ml-[20px]" : "mr-[20px]"}`}
                    width="40"
                    height="40"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M60 30V34.2646C46.6311 36.0459 36.0459 46.6311 34.2646 60H30V30H60ZM30 0V30H0V26H2C15.2548 26 26 15.2548 26 2V0H30Z"
                      fill="#69A3E9"
                    />
                  </svg>
                  {t("startOrganization")}
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
