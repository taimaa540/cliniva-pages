import type { Config } from 'tailwindcss'
import { designSystem, tailwindConfig as themeConfig } from './src/lib/design-system'

const config: Config = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    './index.html',
  ],
  // Enable class-based dark mode
  darkMode: 'class',
  theme: {
    extend: {
      // Use colors from the theme-aware design system
      colors: {
        // Static colors that don't change with theme
        ...designSystem.colors,
        
        // Theme-aware colors using CSS variables
        background: {
          primary: 'var(--theme-background-primary)',
          secondary: 'var(--theme-background-secondary)',
          tertiary: 'var(--theme-background-tertiary)',
          inverse: 'var(--theme-background-inverse)',
          overlay: 'var(--theme-background-overlay)',
          card: 'var(--theme-background-card)',
          modal: 'var(--theme-background-modal)',
          popover: 'var(--theme-background-popover)',
          // Keep backward compatibility
          DEFAULT: 'var(--theme-background-primary)',
        },
        text: {
          primary: 'var(--theme-text-primary)',
          secondary: 'var(--theme-text-secondary)',
          tertiary: 'var(--theme-text-tertiary)',
          inverse: 'var(--theme-text-inverse)',
          muted: 'var(--theme-text-muted)',
          accent: 'var(--theme-text-accent)',
          // Keep backward compatibility
          DEFAULT: 'var(--theme-text-primary)',
        },
        border: {
          light: 'var(--theme-border-light)',
          medium: 'var(--theme-border-medium)',
          dark: 'var(--theme-border-dark)',
          focus: 'var(--theme-border-focus)',
          // Keep backward compatibility
          DEFAULT: 'var(--theme-border-light)',
        },
        surface: {
          primary: 'var(--theme-surface-primary)',
          secondary: 'var(--theme-surface-secondary)',
          tertiary: 'var(--theme-surface-tertiary)',
          hover: 'var(--theme-surface-hover)',
          active: 'var(--theme-surface-active)',
        },
        
        // Legacy color variables for backward compatibility
        'app-primary': 'var(--theme-primary-default)',
        'app-secondary': 'var(--theme-secondary-default)',
        bg: 'var(--theme-background-primary)',
        black: '#000000',
        'blue-dark': 'var(--theme-primary-dark)',
        'gray-10': 'var(--theme-text-tertiary)',
        'gray-20': 'var(--theme-text-secondary)',
        'gray-30': 'var(--theme-text-primary)',
        'gray-bg': 'var(--theme-background-secondary)',
        'on-surface-primary': 'var(--theme-text-primary)',
        'on-surface-secondary': 'var(--theme-text-secondary)',
        'on-surface-tertiary': 'var(--theme-text-tertiary)',
        'primary-dark': 'var(--theme-primary-dark)',
        'secondary-dark': 'var(--theme-secondary-dark)',
        'secondary-light': 'var(--theme-secondary-light)',
        'surface-default': 'var(--theme-surface-primary)',
        
        // ShadCN UI compatible colors
        ring: 'var(--theme-border-focus)',
        foreground: 'var(--theme-text-primary)',
        primary: {
          DEFAULT: 'var(--theme-primary-default)',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: 'var(--theme-secondary-default)',
          foreground: 'var(--theme-text-primary)',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: 'var(--theme-surface-secondary)',
          foreground: 'var(--theme-text-muted)',
        },
        accent: {
          DEFAULT: 'var(--theme-surface-hover)',
          foreground: 'var(--theme-text-accent)',
        },
        popover: {
          DEFAULT: 'var(--theme-background-popover)',
          foreground: 'var(--theme-text-primary)',
        },
        card: {
          DEFAULT: 'var(--theme-background-card)',
          foreground: 'var(--theme-text-primary)',
        },
        input: 'var(--theme-surface-primary)',
      },
             fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
        mono: ['Fira Code', 'Consolas', 'monospace'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      spacing: {
        px: '1px',
        0: '0',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
      },
      screens: {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        arrowMove: {
          '0%, 100%': { transform: 'translateX(0)' }, // البداية والنهاية
          '50%': { transform: 'translateX(5px)' },   // منتصف الحركة
        },
        arrowMoveToLeft: {
          '0%, 100%': { transform: 'translateX(0)' }, // البداية والنهاية
          '50%': { transform: 'translateX(-5px)' },   // منتصف الحركة
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'arrow-bounce': 'arrowMove 0.5s ease-in-out infinite',
        'arrow-bounce-to-left': 'arrowMoveToLeft 0.5s ease-in-out infinite',
      },
    },
  },
  container: {
    center: true,
    padding: '2rem',
    screens: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1400px',
    },
  },
  plugins: [],
}

export default config
