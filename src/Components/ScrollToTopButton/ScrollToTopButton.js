import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // تابع لمعرفة ما إذا كان المستخدم قد مرّ لأسفل الصفحة
  const checkScrollPosition = () => {
    if (window.scrollY > 100) {
      setShowButton(true);  // يظهر الزر إذا تم التمرير لأسفل 100px
    } else {
      setShowButton(false);  // يخفي الزر إذا كنت في أعلى الصفحة
    }
  };

  // إضافة حدث التمرير عند تحميل المكون
  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);

    return () => {
      window.removeEventListener('scroll', checkScrollPosition);  // تنظيف الحدث عند إلغاء تحميل المكون
    };
  }, []);

  // تمرير الصفحة إلى الأعلى بسلاسة عند النقر
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',  // التمرير بسلاسة
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top ${showButton ? 'show' : ''}`}
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;






