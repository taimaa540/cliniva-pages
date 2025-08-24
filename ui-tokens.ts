// 🎨 ألوان الواجهة - تم التقريب بناءً على التصميم
export const colors = {
  primary: '#00C3A5',          // زر "Add New User"
  background: '#FAF9F9',       // خلفية الصفحة
  muted: '#F2F4F7',            // خلفيات الحقول الجانبية
  text: '#1E1E1E',             // النصوص الأساسية
  textMuted: '#94A3B8',        // النصوص الثانوية
  border: '#E5E7EB',           // حدود العناصر
  success: '#22C55E',          // الحالات النشطة
  danger: '#EF4444',           // لم يظهر هنا، لكنه متوقع
  white: '#FFFFFF',

  statusBadge: '#DCFCE7',      // خلفية شارة الحالة
  statusText: '#15803D',       // نص شارة الحالة
  searchBg: '#F1F5F9',         // خلفية حقل البحث
};

// 📏 الأبعاد والتباعد
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// 📐 أبعاد عامة
export const sizes = {
  sidebarWidth: 240,
  headerHeight: 72,
  buttonHeight: 40,
  inputHeight: 36,
};

// 🖋️ الخطوط
export const typography = {
  fontFamily: "'Inter', sans-serif",
  fontSizes: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    heading: 24,
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
};

// 🧩 المكونات القابلة لإعادة الاستخدام
export const components = {
  button: {
    borderRadius: 8,
    paddingX: 16,
    paddingY: 8,
    height: 40,
    fontSize: 14,
  },
  card: {
    borderRadius: 12,
    padding: 24,
    backgroundColor: colors.white,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.04)',
  },
  input: {
    borderRadius: 8,
    paddingX: 12,
    height: sizes.inputHeight,
    backgroundColor: colors.searchBg,
    borderColor: colors.border,
  },
  badge: {
    fontSize: 12,
    borderRadius: 16,
    paddingX: 10,
    paddingY: 4,
  },
};

// 🧭 التصدير الكامل
const theme = {
  colors,
  spacing,
  sizes,
  typography,
  components,
};

export default theme;
