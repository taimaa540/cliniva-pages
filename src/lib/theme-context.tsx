import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Theme, designSystem, generateThemeCSS } from './design-system';

// Theme Colors type that can handle both light and dark themes
type ThemeColors = typeof designSystem.themes.light | typeof designSystem.themes.dark;

// Theme Context Type
export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  colors: ThemeColors;
  isDarkMode: boolean;
}

// Create Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme Provider Props
interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

// Theme Provider Component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'light',
  storageKey = 'cliniva-theme',
}) => {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem(storageKey) as Theme;
      if (storedTheme && (storedTheme === 'light' || storedTheme === 'dark')) {
        setThemeState(storedTheme);
      } else {
        // Check system preference
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setThemeState(systemPrefersDark ? 'dark' : 'light');
      }
    } catch (error) {
      console.warn('Failed to read theme from localStorage:', error);
      setThemeState(defaultTheme);
    }
  }, [defaultTheme, storageKey]);

  // Apply theme to DOM and save to localStorage
  useEffect(() => {
    try {
      // Save to localStorage
      localStorage.setItem(storageKey, theme);
      
      // Apply theme class to document
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
      
      // Set data-theme attribute
      document.documentElement.setAttribute('data-theme', theme);
      
      // Generate and inject CSS variables
      const cssVars = generateThemeCSS(theme);
      let styleElement = document.getElementById('theme-variables');
      
      if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'theme-variables';
        document.head.appendChild(styleElement);
      }
      
      styleElement.textContent = cssVars;
      
    } catch (error) {
      console.warn('Failed to apply theme:', error);
    }
  }, [theme, storageKey]);

  const toggleTheme = () => {
    setThemeState(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const contextValue: ThemeContextType = {
    theme,
    toggleTheme,
    setTheme,
    colors: designSystem.themes[theme],
    isDarkMode: theme === 'dark',
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Higher-order component for theme-aware components
export const withTheme = <P extends object>(
  Component: React.ComponentType<P & { theme: ThemeContextType }>
) => {
  const WrappedComponent = (props: P) => {
    const theme = useTheme();
    return <Component {...props} theme={theme} />;
  };
  
  WrappedComponent.displayName = `withTheme(${Component.displayName || Component.name})`;
  return WrappedComponent;
};

export default ThemeContext; 