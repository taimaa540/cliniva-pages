// Cliniva SYS Design System
// نظام التصميم الشامل لنظام Cliniva SYS الطبي

export const designSystem = {
  // نظام الألوان - Color System
  colors: {
    // الألوان الأساسية - Primary Colors
    primary: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#4A90E2", // اللون الأساسي للنظام
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
    },

    // الألوان الثانوية - Secondary Colors
    secondary: {
      50: "#f0fdfa",
      100: "#ccfbf1",
      200: "#99f6e4",
      300: "#5eead4",
      400: "#2dd4bf",
      500: "#10B981", // اللون الأخضر للأزرار الأساسية
      600: "#0d9488",
      700: "#0f766e",
      800: "#115e59",
      900: "#134e4a",
    },

    // ألوان التحذير والخطر - Warning & Danger Colors
    danger: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#EF4444", // اللون الأحمر للتحذيرات والحذف
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
    },

    // ألوان التحذير - Warning Colors
    warning: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f",
    },

    // الألوان المحايدة - Neutral Colors
    neutral: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },

    // ألوان خاصة بالنظام الطبي - Medical System Colors
    medical: {
      lightBlue: "#E8F4FD", // خلفية البطاقات الطبية
      darkBlue: "#2C5282", // نصوص العناوين الطبية
      mint: "#81E6D9", // لون السعة والإحصائيات
      sage: "#68D391", // لون الحالة النشطة
    },

    // ألوان الخلفيات - Background Colors
    background: {
      primary: "#ffffff",
      secondary: "#f8fafc",
      tertiary: "#f1f5f9",
      sidebar: "#f8fafc",
      card: "#ffffff",
      hover: "#f1f5f9",
    },

    // ألوان النصوص - Text Colors
    text: {
      primary: "#1a202c",
      secondary: "#4a5568",
      tertiary: "#718096",
      muted: "#a0aec0",
      inverse: "#ffffff",
      link: "#4A90E2",
    },

    // ألوان الحدود - Border Colors
    border: {
      light: "#e2e8f0",
      medium: "#cbd5e0",
      dark: "#a0aec0",
      focus: "#4A90E2",
    },
  },

  // نظام الخطوط - Typography System
  typography: {
    // عائلات الخطوط - Font Families
    fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
      serif: ["Georgia", "serif"],
      mono: ["Menlo", "Monaco", "monospace"],
    },

    // أحجام الخطوط - Font Sizes
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
    },

    // أوزان الخطوط - Font Weights
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
    },

    // ارتفاع الأسطر - Line Heights
    lineHeight: {
      tight: "1.25",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
    },

    // تباعد الأحرف - Letter Spacing
    letterSpacing: {
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
    },
  },

  // نظام المسافات - Spacing System
  spacing: {
    px: "1px",
    0: "0",
    1: "0.25rem", // 4px
    2: "0.5rem", // 8px
    3: "0.75rem", // 12px
    4: "1rem", // 16px
    5: "1.25rem", // 20px
    6: "1.5rem", // 24px
    8: "2rem", // 32px
    10: "2.5rem", // 40px
    12: "3rem", // 48px
    16: "4rem", // 64px
    20: "5rem", // 80px
    24: "6rem", // 96px
    32: "8rem", // 128px
  },

  // نظام الحدود - Border System
  borderRadius: {
    none: "0",
    sm: "0.125rem", // 2px
    base: "0.25rem", // 4px
    md: "0.375rem", // 6px
    lg: "0.5rem", // 8px
    xl: "0.75rem", // 12px
    "2xl": "1rem", // 16px
    "3xl": "1.5rem", // 24px
    full: "9999px",
  },

  borderWidth: {
    0: "0",
    1: "1px",
    2: "2px",
    4: "4px",
    8: "8px",
  },

  // نظام الظلال - Shadow System
  boxShadow: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    card: "0 2px 8px rgba(0, 0, 0, 0.08)",
    dialog: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  },

  // أبعاد المكونات - Component Dimensions
  components: {
    // أبعاد الأزرار - Button Dimensions
    button: {
      height: {
        sm: "2rem", // 32px
        base: "2.5rem", // 40px
        lg: "3rem", // 48px
      },
      padding: {
        sm: "0.5rem 1rem",
        base: "0.75rem 1.5rem",
        lg: "1rem 2rem",
      },
    },

    // أبعاد حقول الإدخال - Input Dimensions
    input: {
      height: {
        sm: "2rem", // 32px
        base: "2.5rem", // 40px
        lg: "3rem", // 48px
      },
      padding: "0.75rem 1rem",
    },

    // أبعاد البطاقات - Card Dimensions
    card: {
      padding: "1.5rem",
      borderRadius: "0.5rem",
      minHeight: "8rem",
    },

    // أبعاد الشريط الجانبي - Sidebar Dimensions
    sidebar: {
      width: "16rem", // 256px
      collapsedWidth: "4rem", // 64px
      itemHeight: "2.5rem", // 40px
      itemPadding: "0.75rem 1rem",
    },

    // أبعاد الجداول - Table Dimensions
    table: {
      rowHeight: "3rem", // 48px
      cellPadding: "0.75rem 1rem",
      headerHeight: "3.5rem", // 56px
    },

    // أبعاد النوافذ المنبثقة - Dialog Dimensions
    dialog: {
      maxWidth: {
        sm: "24rem", // 384px
        base: "32rem", // 512px
        lg: "48rem", // 768px
        xl: "64rem", // 1024px
      },
      padding: "1.5rem",
      borderRadius: "0.75rem",
    },

    // أبعاد بطاقات السعة - Capacity Cards
    capacityCard: {
      width: "15rem", // 240px
      height: "6rem", // 96px
      padding: "1rem",
      borderRadius: "0.75rem",
      iconSize: "2rem", // 32px
    },
  },

  // نقاط التوقف المتجاوبة - Responsive Breakpoints
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  // الانتقالات والحركات - Transitions & Animations
  transitions: {
    duration: {
      fast: "150ms",
      base: "200ms",
      slow: "300ms",
    },
    timing: {
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
    },
  },

  // أنماط خاصة بالنظام الطبي - Medical System Specific Styles
  medical: {
    // ألوان حالات المرضى - Patient Status Colors
    patientStatus: {
      active: "#10B981",
      inactive: "#6B7280",
      pending: "#F59E0B",
      critical: "#EF4444",
    },

    // ألوان الأقسام الطبية - Medical Department Colors
    departments: {
      cardiology: "#EF4444",
      neurology: "#8B5CF6",
      orthopedics: "#10B981",
      pediatrics: "#F59E0B",
      general: "#6B7280",
    },

    // أيقونات السعة - Capacity Icons
    capacityIcons: {
      staff: "👥",
      doctors: "👨‍⚕️",
      patients: "🏥",
    },

    // أنماط الجداول الطبية - Medical Table Styles
    tableStyles: {
      headerBackground: "#F8FAFC",
      alternateRowBackground: "#F9FAFB",
      borderColor: "#E2E8F0",
      activeStatusColor: "#10B981",
      inactiveStatusColor: "#6B7280",
    },
  },

  // متغيرات CSS المخصصة - CSS Custom Properties
  cssVariables: {
    "--color-primary": "#4A90E2",
    "--color-secondary": "#10B981",
    "--color-danger": "#EF4444",
    "--color-warning": "#F59E0B",
    "--color-background": "#ffffff",
    "--color-text-primary": "#1a202c",
    "--color-text-secondary": "#4a5568",
    "--color-border": "#e2e8f0",
    "--sidebar-width": "16rem",
    "--header-height": "4rem",
    "--border-radius-base": "0.5rem",
    "--shadow-card": "0 2px 8px rgba(0, 0, 0, 0.08)",
    "--transition-base": "200ms ease-in-out",
  },
} as const

// أنواع TypeScript للنظام - TypeScript Types
export type ColorScale = keyof typeof designSystem.colors.primary
export type FontSize = keyof typeof designSystem.typography.fontSize
export type FontWeight = keyof typeof designSystem.typography.fontWeight
export type Spacing = keyof typeof designSystem.spacing
export type BorderRadius = keyof typeof designSystem.borderRadius
export type BoxShadow = keyof typeof designSystem.boxShadow
export type Breakpoint = keyof typeof designSystem.breakpoints

// دوال مساعدة للوصول للقيم - Helper Functions
export const getColor = (color: string, scale?: ColorScale) => {
  const colorPath = color.split(".")
  let value: any = designSystem.colors

  for (const path of colorPath) {
    value = value[path]
  }

  if (scale && typeof value === "object") {
    return value[scale]
  }

  return value
}

export const getFontSize = (size: FontSize) => designSystem.typography.fontSize[size]
export const getSpacing = (space: Spacing) => designSystem.spacing[space]
export const getBorderRadius = (radius: BorderRadius) => designSystem.borderRadius[radius]
export const getBoxShadow = (shadow: BoxShadow) => designSystem.boxShadow[shadow]

// تصدير افتراضي - Default Export
export default designSystem
