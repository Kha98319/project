
import React, { useEffect, useState } from 'react';
import './ScrollToTop.css'; // Tạo file CSS để tùy chỉnh giao diện
// chức năng lên đầu trang
// tạo component ScrollToTop
const ScrollToTop = () => {
  // tạo một state isVisible có giá trị là false
  const [isVisible, setIsVisible] = useState(false);
  // tạo useEffect để mỗi khi scroll thì gọi tới
  // use efec thực hiện trước khi render
  useEffect(() => {
    // gọi hành động scroll khi scroll thì gọi hàm xử lý handleScroll
    window.addEventListener('scroll', handleScroll);
    // xóa lắng nghe sự kiện scroll
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
// tạo hàm handleScroll
  const handleScroll = () => {
    // nếu trượt xuông hơn 200px thì hiện
    if (window.scrollY > 200) {
      setIsVisible(true);
    } 
    // không thì ngược lại
    
    else {
      setIsVisible(false);
    }
  };
// tạo hàm scrollToTop
  const scrollToTop = () => {
    // gọi đến hàm scrollTo đến vị trí top 0
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      ▲
    </div>
  );
};

export default ScrollToTop;
