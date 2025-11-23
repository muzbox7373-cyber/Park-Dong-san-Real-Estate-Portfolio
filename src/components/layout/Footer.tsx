import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-12 print:hidden mt-auto">
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-serif text-lg font-bold mb-4 text-secondary">박동산 공인중개사사무소</h3>
          <p className="text-gray-300 text-sm leading-relaxed font-sans">
            서울시 강남구 테헤란로 123, 박동산 빌딩 1층<br />
            대표 공인중개사: 박동산<br />
            사업자등록번호: 123-45-67890
          </p>
        </div>
        <div className="md:text-right">
          <p className="text-gray-300 text-sm mb-2">T. 02-1234-5678</p>
          <p className="text-gray-300 text-sm mb-4">E. park@dongsan.com</p>
          <p className="text-gray-500 text-xs">© 2024 Park Dong-san. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;