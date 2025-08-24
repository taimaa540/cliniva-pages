import type { Config } from 'tailwindcss'
import designSystem from './src/lib/design-system'  // 👈 عدّل المسار حسب موقع الملف

const config: Config = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ...designSystem.colors, // ✅ دمج ألوان designSystem
        'app-primary': 'var(--app-primary)',
        'app-secondary': 'var(--app-secondary)',
        bg: 'var(--bg)',
        black: 'var(--black)',
        'blue-dark': 'var(--blue-dark)',
        'gray-10': 'var(--gray-10)',
        'gray-20': 'var(--gray-20)',
        'gray-30': 'var(--gray-30)',
        'gray-bg': 'var(--gray-bg)',
        'on-surface-primary': 'var(--on-surface-primary)',
        'on-surface-secondary': 'var(--on-surface-secondary)',
        'on-surface-tertiary': 'var(--on-surface-tertiary)',
        'primary-dark': 'var(--primary-dark)',
        'secondary-dark': 'var(--secondary-dark)',
        'secondary-light': 'var(--secondary-light)',
        'surface-default': 'var(--surface-default)',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
  ...Object.fromEntries(
    Object.entries(designSystem.typography.fontFamily).map(([key, value]) => [
      key,
      Array.isArray(value) ? [...value] : value,
    ])
  ),
  // ثم أضف خطوطك اليدوية
  'btn-11px-medium': 'var(--btn-11px-medium-font-family)',
  'btn-12px-medium': 'var(--btn-12px-medium-font-family)',
  'btn-14px-medium': 'var(--btn-14px-medium-font-family)',
  'h5-22px-bold': 'var(--h5-22px-bold-font-family)',
  'p-11px-regular': 'var(--p-11px-regular-font-family)',
  'p-14px-regular': 'var(--p-14px-regular-font-family)',
  'title-10px-regular': 'var(--title-10px-regular-font-family)',
  'title-11px-regular': 'var(--title-11px-regular-font-family)',
  'title-12px-bold': 'var(--title-12px-bold-font-family)',
  'title-12px-regular': 'var(--title-12px-regular-font-family)',
  'title-12px-semibold': 'var(--title-12px-semibold-font-family)',
  'title-16px-bold': 'var(--title-16px-bold-font-family)',
},

      fontSize: {
        ...designSystem.typography.fontSize, // ✅ دمج أحجام الخطوط
      },
      fontWeight: {
        ...designSystem.typography.fontWeight, // ✅ دمج أوزان الخطوط
      },
      lineHeight: {
        ...designSystem.typography.lineHeight,
      },
      letterSpacing: {
        ...designSystem.typography.letterSpacing,
      },
      spacing: {
        ...designSystem.spacing,
      },
      borderRadius: {
        ...designSystem.borderRadius,
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      borderWidth: {
        ...designSystem.borderWidth,
      },
      boxShadow: {
        ...designSystem.boxShadow,
        'switch-out-shadow': 'var(--switch-out-shadow)',
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
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      screens: {
        ...designSystem.breakpoints,
        '2xl': '1400px', // أو يمكنك الإبقاء على هذا فقط لو كنت تفضل تخصيصه
      },
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        ...designSystem.breakpoints,
        '2xl': '1400px',
      },
    },
  },
  plugins: [],
  darkMode: ['class'],
}

export default config
