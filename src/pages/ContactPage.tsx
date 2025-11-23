
import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('상담 예약이 접수되었습니다. 곧 연락드리겠습니다.');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-16 px-8 md:px-16"
    >
      <SectionTitle title="Contact Me" subtitle="Consultation Request" />

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Contact Info & Map */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-6">
             <div className="flex items-start gap-4">
                <div className="bg-bgPaper p-3 rounded-sm text-primary"><MapPin size={20}/></div>
                <div>
                  <h4 className="font-bold text-gray-800">Office</h4>
                  <p className="text-gray-600 text-sm">서울시 강남구 테헤란로 123, 박동산 빌딩 1층</p>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <div className="bg-bgPaper p-3 rounded-sm text-primary"><Phone size={20}/></div>
                <div>
                  <h4 className="font-bold text-gray-800">Phone</h4>
                  <p className="text-gray-600 text-sm">02-1234-5678</p>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <div className="bg-bgPaper p-3 rounded-sm text-primary"><Mail size={20}/></div>
                <div>
                  <h4 className="font-bold text-gray-800">Email</h4>
                  <p className="text-gray-600 text-sm">park@dongsan.com</p>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <div className="bg-bgPaper p-3 rounded-sm text-primary"><Clock size={20}/></div>
                <div>
                  <h4 className="font-bold text-gray-800">Notice</h4>
                  <p className="text-gray-600 text-sm">100% 예약제 운영 (방문 전 예약 필수)<br/>평일 09:00 - 18:00</p>
                </div>
             </div>
          </div>

          <div className="w-full h-96 bg-gray-100 overflow-hidden border border-gray-200 shadow-sm relative">
            {/* Google Maps Embed - Height increased to h-96 for better zooming experience */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.372439366606!2d127.0298653153099!3d37.49842597981048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca1598c366689%3A0x77c295b95427670!2sTeheran-ro%2C%20Gangnam-gu%2C%20Seoul!5e0!3m2!1sen!2skr!4v1620000000000!5m2!1sen!2skr" 
              className="w-full h-full border-0 pointer-events-auto"
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-1/2 bg-white">
          <form onSubmit={handleSubmit} className="space-y-6">
             <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">성함 / Name</label>
                <input type="text" required className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary transition-colors bg-transparent" placeholder="홍길동" />
             </div>
             
             <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">연락처 / Phone</label>
                <input type="tel" required className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary transition-colors bg-transparent" placeholder="010-0000-0000" />
             </div>

             <div className="grid grid-cols-2 gap-4">
               <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">구분 / Type</label>
                  <select className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary bg-transparent text-gray-600">
                    <option>매수 문의</option>
                    <option>매도 문의</option>
                    <option>임대/임차</option>
                    <option>기타 상담</option>
                  </select>
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">희망일시 / Date</label>
                  <input type="date" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary bg-transparent text-gray-600"/>
               </div>
             </div>

             <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">상담 내용 / Message</label>
                <textarea rows={4} className="w-full border border-gray-300 p-3 mt-2 focus:outline-none focus:border-primary transition-colors bg-gray-50 text-sm" placeholder="상담 원하시는 물건의 종류나 지역, 예산 등을 간략히 적어주세요."></textarea>
             </div>

             <button type="submit" className="w-full bg-primary text-white py-4 font-bold text-sm tracking-widest hover:bg-primary/90 transition-all uppercase">
               상담 예약 신청
             </button>
             
             <p className="text-xs text-gray-400 text-center mt-4">
               고객님의 개인정보는 상담 목적으로만 사용되며, 제3자에게 제공되지 않습니다.
             </p>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
