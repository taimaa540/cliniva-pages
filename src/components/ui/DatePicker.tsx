import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface DatePickerProps {
  value?: Date | null;
  onDateChange?: (date: Date) => void;
  label?: string;
  defaultValue?: string;
  direction?: 'ltr' | 'rtl';
    width?: string;
     labelWidth?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ value, defaultValue, onDateChange, label = "Establishment Year", direction, width ,labelWidth}) => {
  const { t, i18n } = useTranslation();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  // استخدم اتجاه الصفحة تلقائياً إذا لم يُمرر direction
  const resolvedDirection = direction || i18n.dir(i18n.language) || document.documentElement.dir || 'ltr';

  // مزامنة الـ state الداخلي مع الـ props الخارجية
  useEffect(() => {
    if (value !== undefined) {
      setSelectedDate(value);
    } else if (defaultValue) {
      const date = new Date(defaultValue);
      if (!isNaN(date.getTime())) {
        setSelectedDate(date);
      }
    }
  }, [value, defaultValue]);

  // إغلاق منتقي التاريخ عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setIsPickerOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setIsPickerOpen(false);
    if (onDateChange) {
      onDateChange(date);
    }
  };

  const formatDate = (date: Date | null): string => {
    if (!date) return '';
    
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    
    return `${day} ${month} ${year}`;
  };

  // إنشاء قائمة السنوات (من 1900 إلى السنة الحالية)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1899 }, (_, i) => currentYear - i);

  // إنشاء قائمة الأشهر
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // إنشاء قائمة الأيام بناءً على الشهر والسنة المحددين
  const getDaysInMonth = (month: number, year: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const days = Array.from(
    { length: getDaysInMonth(selectedMonth, selectedYear) }, 
    (_, i) => i + 1
  );

  return (
    <div className="flex items-center gap-8" dir={resolvedDirection} >
     <label
  className={`
    text-text-primary 
    text-[16px] 
    font-semibold 
    ${resolvedDirection === 'rtl' ? 'text-right' : ''}
  `}
  style={{ width: labelWidth || 'auto' }} // 👈 استخدام القيمة الممررة
>
  {label ? t(label) : t('establishmentYear')}:
</label>
      <div 
  className="relative"
  style={{ width: width || '360px' }}
>
        {/* حقل الإدخال */}
        <input
          type="text"
          readOnly
          value={selectedDate ? formatDate(selectedDate) : ''}
          className={`h-12 pr-12 bg-background-secondary border-border-light border rounded-md w-full px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-blue-500 ${resolvedDirection === 'rtl' ? 'text-right' : ''}`}
          placeholder={t('selectDate')}
          onClick={() => setIsPickerOpen(!isPickerOpen)}
        />

        {/* الأيقونة حسب اتجاه الصفحة */}
        <div 
          className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 text-text-primary cursor-pointer ${resolvedDirection === 'rtl' ? 'left-3' : 'right-3'}`}
          onClick={() => setIsPickerOpen(!isPickerOpen)}
        >
          <svg 
            width="14" 
            height="14" 
            viewBox="0 0 14 14" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_7681_102479)">
              <rect width="14" height="14" fill="white" fillOpacity="0.01" />
              <g clipPath="url(#clip1_7681_102479)">
                <path 
                  d="M10.9375 -0.000976562C11.0535 -0.000976562 11.165 0.0449061 11.2471 0.126953C11.3291 0.209 11.375 0.320491 11.375 0.436523V0.874023H12.25C12.7141 0.874023 13.1591 1.05853 13.4873 1.38672C13.8155 1.71491 14 2.15989 14 2.62402V12.249C14 12.7132 13.8155 13.1581 13.4873 13.4863C13.1591 13.8145 12.7141 13.999 12.25 13.999H1.75C1.28587 13.999 0.840884 13.8145 0.512695 13.4863C0.184507 13.1581 0 12.7132 0 12.249V2.62402C0 2.15989 0.184507 1.71491 0.512695 1.38672C0.840884 1.05853 1.28587 0.874023 1.75 0.874023H2.625V0.436523C2.625 0.320491 2.67088 0.209 2.75293 0.126953C2.83498 0.044906 2.94647 -0.000976562 3.0625 -0.000976562C3.17853 -0.000976562 3.29002 0.044906 3.37207 0.126953C3.45412 0.209 3.5 0.320491 3.5 0.436523V0.874023H10.5V0.436523C10.5 0.320491 10.5459 0.209 10.6279 0.126953C10.71 0.0449061 10.8215 -0.000976562 10.9375 -0.000976562ZM0.875 12.249C0.875 12.4811 0.966765 12.7041 1.13086 12.8682C1.29495 13.0323 1.51794 13.124 1.75 13.124H12.25C12.4821 13.124 12.705 13.0323 12.8691 12.8682C13.0332 12.7041 13.125 12.4811 13.125 12.249V3.49902H0.875V12.249ZM9.1875 6.12305C9.24505 6.12305 9.30232 6.13419 9.35547 6.15625C9.40858 6.1783 9.45646 6.21124 9.49707 6.25195C9.53779 6.29257 9.57072 6.34044 9.59277 6.39355C9.61483 6.44671 9.62598 6.50398 9.62598 6.56152C9.62598 6.61907 9.61483 6.67634 9.59277 6.72949C9.57072 6.7826 9.53779 6.83048 9.49707 6.87109L6.87207 9.49609C6.83146 9.53681 6.78358 9.56974 6.73047 9.5918C6.67732 9.61385 6.62005 9.625 6.5625 9.625C6.50495 9.625 6.44768 9.61385 6.39453 9.5918C6.34142 9.56974 6.29354 9.53681 6.25293 9.49609L4.94043 8.18359C4.89986 8.14303 4.86771 8.09497 4.8457 8.04199C4.82369 7.98884 4.81152 7.93155 4.81152 7.87402C4.81152 7.8165 4.82369 7.7592 4.8457 7.70605C4.86771 7.65308 4.89986 7.60502 4.94043 7.56445C5.02258 7.4823 5.13382 7.43555 5.25 7.43555C5.30753 7.43555 5.36482 7.44771 5.41797 7.46973C5.47095 7.49174 5.519 7.52389 5.55957 7.56445L6.5625 8.56836L8.87793 6.25195C8.91854 6.21124 8.96642 6.1783 9.01953 6.15625C9.07268 6.13419 9.12995 6.12305 9.1875 6.12305Z" 
                  fill="#717680" 
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_7681_102479">
                <rect width="14" height="14" fill="white" />
              </clipPath>
              <clipPath id="clip1_7681_102479">
                <rect width="14" height="14" fill="CurrentColor" />
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* كارد اختيار التاريخ */}
        {isPickerOpen && (
          <div 
            ref={pickerRef}
            className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 w-64 p-4"
          >
            <div className="flex justify-between items-center mb-4">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
                className="px-2 py-1 border rounded-md text-sm"
              >
                {months.map((month, index) => (
                  <option key={index} value={index}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                className="px-2 py-1 border rounded-md text-sm"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-500 mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day}>{day}</div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: new Date(selectedYear, selectedMonth, 1).getDay() }, (_, i) => (
                <div key={`empty-${i}`} className="h-8"></div>
              ))}
              
              {days.map(day => {
                const date = new Date(selectedYear, selectedMonth, day);
                const isSelected = selectedDate && 
                  selectedDate.getDate() === day && 
                  selectedDate.getMonth() === selectedMonth && 
                  selectedDate.getFullYear() === selectedYear;
                
                return (
                  <div
                    key={day}
                    className={`h-8 flex items-center justify-center rounded-full cursor-pointer text-sm
                      ${isSelected ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
                    onClick={() => handleDateSelect(date)}
                  >
                    {day}
                  </div>
                );
              })}
            </div>
            
            <div className="flex justify-end mt-4">
              <button
                className="px-3 py-1 bg-gray-100 rounded-md text-sm hover:bg-gray-200 mr-2"
                onClick={() => setIsPickerOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600"
                onClick={() => {
                  if (!selectedDate) {
                    handleDateSelect(new Date(selectedYear, selectedMonth, 1));
                  }
                  setIsPickerOpen(false);
                }}
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DatePicker;