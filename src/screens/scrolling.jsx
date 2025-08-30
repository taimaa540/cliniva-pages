import React, { useState, useEffect } from 'react';

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // حساب نسبة التمرير
  const calculateScrollProgress = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    setScrollProgress(scrollPercent);
    
    // إظهار زر العودة للأعلى بعد التمرير لمسافة معينة
    setShowScrollTop(scrollTop > 300);
  };

  // العودة إلى أعلى الصفحة
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // إضافة وإزالة مستمع الحدث
  useEffect(() => {
    window.addEventListener('scroll', calculateScrollProgress);
    return () => window.removeEventListener('scroll', calculateScrollProgress);
  }, []);

  return (
    <div style={{ direction: 'rtl' }}>
      {/* شريط تقدم التمرير */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '100%',
        height: '5px',
        backgroundColor: '#e0e0e0',
        zIndex: 1000
      }}>
        <div style={{
          height: '100%',
          width: `${scrollProgress}%`,
          backgroundColor: '#4CAF50',
          transition: 'width 0.2s ease-out'
        }} />
      </div>

      {/* زر العودة للأعلى */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontSize: '24px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            zIndex: 1000
          }}
        >
          ↑
        </button>
      )}

      {/* محتوى الصفحة */}
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <h1>مؤشر التمرير في React</h1>
        <p>قم بالتمرير لأسفل لرؤية مؤشر التمرير وزر العودة للأعلى</p>
        
        {Array.from({ length: 30 }).map((_, index) => (
          <div key={index} style={{ 
            padding: '20px', 
            margin: '10px 0', 
            backgroundColor: '#f5f5f5',
            borderRadius: '5px'
          }}>
            <h3>عنصر #{index + 1}</h3>
            <p>هذا محتوى تجريبي لملء الصفحة وإظهار تأثير التمرير عند التمرير لأسفل.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollIndicator;