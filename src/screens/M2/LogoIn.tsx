'use client';


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Hook/useAuth';

import { Mail, Lock } from 'lucide-react';
import { Button } from '../../components/ui/button'; 
import { useLanguage } from '../../lib/LanguageContext'; 
import { ThemeToggle } from "../../components/theme/ThemeSwitcher";
import { useTranslation } from 'react-i18next';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import TranslateIcon from "@mui/icons-material/Translate";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
// لو عامل كومبوننت لتبديل اللغة
import LanguageSwitcher from '../CommonComponents/LanguageSwitcher';

// لو عندك كومبوننت Alert (shadcn/ui)

export default function LoginPage() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language; // ✅ تعريف locale بشكل صحيح
  const navigate = useNavigate();
  const { login } = useAuth();

  // تغيير اللغة
  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const { local, handleLanguageClick } = useLanguage();
  // states
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // password handlers
  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  // submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const result = await login(email, password);
      if (result?.ok) {
        window.location.href = '/dashboard';
      } else {
        setError(t('errors.invalidCredentials'));
      }
    } catch (err: any) {
      setError(err.message || t('errors.networkError'));
    } finally {
      setIsLoading(false);
    }
  };

  // toggle dark/light
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div
      className={`min-h-screen flex transition-all duration-300 ${
        darkMode ? 'bg-[#0f172a]' : 'bg-[white]'
      }`}
    >
      {/* Theme Switcher + Language Switcher */}
      <div
        dir="ltr"
        className={`absolute z-10 flex gap-2 items-center ${
          locale === 'ar' ? 'top-4 left-4' : 'top-4 right-4'
        }`}
      >
            <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className={`p-2.5 ${local === "ar" ? "bg-[green]" : "bg-secondary-light"
                    } rounded-[20px] h-auto transition-all duration-[1000ms]`}
                  onClick={handleLanguageClick}
                >
                  <TranslateIcon className="w-5 h-5" />
                </Button>
              </div>
        <ThemeToggle />
      </div>

      {/* Left Side */}
      <div
        className={`w-[720px] transition-all duration-300 ${
          darkMode ? 'bg-[#263245]' : 'bg-[#69a3e9]'
        } relative flex justify-center overflow-hidden ${
          locale === 'ar' ? 'rounded-l-[48px]' : 'rounded-r-[48px]'
        }`}
      >
        {/* شعار وبراند */}
        <div className="mt-[150px] flex flex-col items-center gap-16 w-[524px] z-10">
          <div className="text-center">
            <h1 className="text-[#faf6f5] text-[48px] font-semibold leading-none tracking-tight">
              Cliniva SYS
            </h1>
            <p className="text-[#faf6f5] text-[20px] mt-4 opacity-90">
              {t('home.heroTitle')}
            </p>
            <p className="text-[#faf6f5] text-[20px] opacity-90">
              {t('home.heroSubtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h2
              style={{ fontSize: locale === 'ar' ? '34px' : '36px' }}
              className={`${
                darkMode ? 'text-[white]' : 'text-[#69a3e9]'
              } font-semibold text-center mb-2`}
            >
              {t('auth.loginTitle')}
            </h2>
          </div>

          {/* Login Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className={`${
                  darkMode ? 'text-[white]' : 'text-[#69A3E9]'
                } block text-sm font-medium`}
              >
                {t('auth.userName')}
              </label>
              <div className="relative">
                <Mail
                  style={{ color: '#69A3E9' }}
                  className={`absolute ${
                    locale === 'ar' ? 'right-3' : 'left-3'
                  } top-1/2 h-4 w-4 -translate-y-1/2`}
                />
                <OutlinedInput
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={`w-full border border-gray-200 ${
                    locale === 'ar' ? 'pr-9' : 'pl-9'
                  } h-11 focus-visible:ring-[#69a3e9] focus-visible:border-[#69a3e9]`}
                  placeholder={t('auth.enterUser')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    '& input': {
                      color: darkMode ? 'white' : 'black',
                      caretColor: darkMode ? 'white' : 'black',
                    },
                    '& input::placeholder': {
                      color: '#69A3E9',
                      opacity: 1,
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
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
                  darkMode ? 'text-[white]' : 'text-[#69A3E9]'
                } block text-sm font-medium`}
              >
                {t('auth.password')}
              </label>
              <div className="relative">
                <Lock
                  style={{ color: '#69A3E9' }}
                  className={`absolute ${
                    locale === 'ar' ? 'right-3' : 'left-3'
                  } top-1/2 h-4 w-4 -translate-y-1/2`}
                />
                <OutlinedInput
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  placeholder={t('auth.enterPassword')}
                  className={`w-full border border-gray-200 ${
                    locale === 'ar' ? 'pr-9' : 'pl-9'
                  } h-11 focus-visible:ring-[#69a3e9] focus-visible:border-[#69a3e9]`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{
                    '& input': {
                      color: darkMode ? 'white' : 'black',
                      caretColor: darkMode ? 'white' : 'black',
                    },
                    '& input::placeholder': {
                      color: '#69A3E9',
                      opacity: 1,
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                  }}
                />
                <IconButton
                  style={{
                    color: darkMode ? 'white' : 'gray',
                    position: 'absolute',
                    right: locale === 'ar' ? 'unset' : '10px',
                    left: locale === 'ar' ? '10px' : 'unset',
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }}
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
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
                  style={{ color: '#00800080' }}
                  id="rememberMe"
                  name="rememberMe"
                  color="success"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label
                  htmlFor="rememberMe"
                  className={`ml-2 mr-2 block text-sm ${
                    darkMode ? 'text-[white]' : 'text-[#69A3E9]'
                  }`}
                >
                  {t('auth.rememberMe')}
                </label>
              </div>
            </div>

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
                  {t('common.loading')}
                </>
              ) : (
                t('auth.signIn')
              )}
            </Button>
          </form>

          {/* Onboarding Link */}
          <div className="mt-5">
            <Link to="/chooseplan">
            <button className="block mx-auto rounded-[14px] p-[10px] hover:bg-[#8db8ec40] transition-all duration-400">

              <div
      
                className="flex items-center text-[26px] text-[#69A3E9]"
              >
                <svg
                  className={`${locale === 'ar' ? 'ml-[20px]' : 'mr-[20px]'}`}
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
                {t('home.startOrganization')}
              </div>
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
