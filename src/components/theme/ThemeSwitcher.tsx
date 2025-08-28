import React from 'react';
import { useTheme } from '../../lib/theme-context';
import { Button } from '../ui/button';

// Icons for light and dark mode
const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const MoonIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

// Simple theme toggle button
export const ThemeToggle: React.FC<{
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'ghost';
}> = ({ className, size = 'md', variant = 'ghost' }) => {
  const { theme, toggleTheme, isDarkMode } = useTheme();

  return (
    <Button
      variant={variant as any}
      size={size as any}
      onClick={toggleTheme}
      className={`theme-transition ${className || ''}`}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? (
        <SunIcon className="w-4 h-4" />
      ) : (
        <MoonIcon className="w-4 h-4" />
      )}
    </Button>
  );
};

// Theme switcher with labels
export const ThemeSwitcher: React.FC<{
  className?: string;
  showLabel?: boolean;
  orientation?: 'horizontal' | 'vertical';
}> = ({ className, showLabel = true, orientation = 'horizontal' }) => {
  const { theme, setTheme, isDarkMode } = useTheme();

  const containerClass = orientation === 'horizontal' 
    ? 'flex items-center space-x-2' 
    : 'flex flex-col space-y-2';

  return (
    <div className={`${containerClass} ${className || ''}`}>
      {showLabel && (
        <span className="text-sm font-medium text-primary ">
          Theme
        </span>
      )}
      
      <div className="flex items-center space-x-1 p-1 bg-surface-secondary rounded-lg border border-light">
        <button
          onClick={() => setTheme('light')}
          className={`
            flex items-center justify-center w-8 h-8 rounded-md transition-all duration-200 
            ${!isDarkMode 
              ? 'bg-primary text-inverse shadow-sm' 
              : 'text-secondary hover:text-primary hover:bg-surface-hover'
            }
          `}
          aria-label="Light mode"
          title="Light mode"
        >
          <SunIcon className="w-4 h-4" />
        </button>
        
        <button
          onClick={() => setTheme('dark')}
          className={`
            
            flex items-center justify-center w-8 h-8 rounded-md transition-all duration-200
            ${isDarkMode 
              ? 'bg-primary text-inverse shadow-sm' 
              : 'text-secondary hover:text-primary hover:bg-surface-hover'
            }
          `}
          aria-label="Dark mode"
          title="Dark mode"
        >
          <MoonIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// Advanced theme switcher with system preference option
export const AdvancedThemeSwitcher: React.FC<{
  className?: string;
  showLabel?: boolean;
}> = ({ className, showLabel = true }) => {
  const { theme, setTheme } = useTheme();
  const [systemTheme, setSystemTheme] = React.useState<'light' | 'dark'>('light');

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setSystemTheme(mediaQuery.matches ? 'dark' : 'light');

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const options = [
    { value: 'light', label: 'Light', icon: SunIcon },
    { value: 'dark', label: 'Dark', icon: MoonIcon },
    { 
      value: 'system', 
      label: 'System', 
      icon: () => (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
  ];

  return (
    <div className={`flex flex-col space-y-3 ${className || ''}`}>
      {showLabel && (
        <label className="text-sm font-medium text-primary">
          Theme Preference
        </label>
      )}
      
      <div className="flex flex-col space-y-1">
        {options.map((option) => {
          const IconComponent = option.icon;
          const isActive = theme === option.value;
          
          return (
            <button
              key={option.value}
              onClick={() => setTheme(option.value as 'light' | 'dark')}
              className={`
                
                flex items-center space-x-3 w-full p-2 rounded-lg text-left transition-all duration-200
                ${isActive 
                  ? 'bg-primary text-inverse' 
                  : 'text-secondary hover:text-primary hover:bg-surface-hover'
                }
              `}
            >
              <IconComponent className="w-4 h-4 flex-shrink-0 "  />
              <span className="text-sm">{option.label}</span>
              {option.value === 'system' && (
                <span className="text-xs opacity-60 ml-auto ">
                  ({systemTheme})
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

// Compact theme indicator (shows current theme)
export const ThemeIndicator: React.FC<{
  className?: string;
  showText?: boolean;
}> = ({ className, showText = false }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`flex items-center space-x-2 ${className || ''}`}>
      <div className={`
        w-2 h-2 rounded-full transition-colors duration-200
        ${isDarkMode ? 'bg-primary' : 'bg-warning-500'}
      `} />
      {showText && (
        <span className="text-xs text-tertiary">
          {isDarkMode ? 'Dark' : 'Light'}
        </span>
      )}
    </div>
  );
};

// Theme picker dropdown
export const ThemeDropdown: React.FC<{
  className?: string;
  trigger?: React.ReactNode;
}> = ({ className, trigger }) => {
  const { theme, setTheme, isDarkMode } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  const defaultTrigger = (
    <Button
      variant="ghost"
      size="sm"
      className="w-9 h-9"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isDarkMode ? <MoonIcon className="w-4 h-4" /> : <SunIcon className="w-4 h-4" />}
    </Button>
  );

  return (
    <div className={`relative ${className || ''}`}>
      {trigger ? (
        <div onClick={() => setIsOpen(!isOpen)}>
          {trigger}
        </div>
      ) : (
        defaultTrigger
      )}
      
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 z-20 w-48 bg-popover border border-light rounded-lg shadow-lg py-1">
            <button
              onClick={() => {
                setTheme('light');
                setIsOpen(false);
              }}
              className={`
                flex items-center space-x-2 w-full px-3 py-2 text-sm text-left
                ${theme === 'light' ? 'bg-surface-hover text-primary' : 'text-secondary hover:bg-surface-hover hover:text-primary'}
              `}
            >
              <SunIcon className="w-4 h-4" />
              <span>Light</span>
            </button>
            
            <button
              onClick={() => {
                setTheme('dark');
                setIsOpen(false);
              }}
              className={`
                flex items-center space-x-2 w-full px-3 py-2 text-sm text-left
                ${theme === 'dark' ? 'bg-surface-hover text-primary' : 'text-secondary hover:bg-surface-hover hover:text-primary'}
              `}
            >
              <MoonIcon className="w-4 h-4" />
              <span>Dark</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}; 