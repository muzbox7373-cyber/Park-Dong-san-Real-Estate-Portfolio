import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PROFILE_IMG, SIGNATURE_IMG, OFFICE_BG } from '../images/assets';

const Home: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative h-full flex flex-col"
    >
      {/* Top Banner Section */}
      <div className="relative h-96 w-full overflow-hidden">
         <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 grayscale" 
          style={{ backgroundImage: `url(${OFFICE_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface" />
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 pt-12">
           <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-5xl font-serif font-bold text-primary leading-tight mb-4"
           >
             "부동산은 예측하는 것이 아니라,<br /> 대응하는 것입니다."
           </motion.h1>
           <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 text-lg md:text-xl font-light"
           >
             20년 무사고, 누적 거래 1,000건 이상.<br className="md:hidden"/> 당신의 자산을 지키는 공인중개사 박동산입니다.
           </motion.p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-8 md:px-16 pb-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Profile Image */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="w-full md:w-1/2"
          >
            <div className="relative p-2 border border-gray-200 shadow-sm bg-white rotate-1">
              <img src={PROFILE_IMG} alt="박동산 공인중개사" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </motion.div>

          {/* Intro Text */}
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <h3 className="text-secondary font-serif font-bold text-xl mb-2">Introduction</h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                부동산 거래는 한 사람의 인생에서 가장 큰 금융 결정 중 하나입니다. 
                단순한 중개를 넘어, 고객님의 소중한 자산이 안전하게 보호받고 증식될 수 있도록 
                전문적인 식견과 정직함으로 동행하겠습니다.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-gray-100">
              <div>
                <span className="block text-3xl font-serif font-bold text-primary">20+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Years Exp</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-primary">500억</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Annual Deal</span>
              </div>
            </div>

            {/* Signature */}
            <div className="pt-2">
              <img src={SIGNATURE_IMG} alt="Signature" className="h-16 opacity-70 mb-4" />
              <div className="flex gap-4">
                <NavLink 
                  to="/contact" 
                  className="inline-flex items-center px-6 py-3 bg-primary text-white text-sm font-medium hover:bg-opacity-90 transition-colors"
                >
                  무료 상담 예약하기
                </NavLink>
                <NavLink 
                  to="/cases" 
                  className="inline-flex items-center px-6 py-3 border border-primary text-primary text-sm font-medium hover:bg-gray-50 transition-colors"
                >
                  성공 사례 보기 <ArrowRight size={16} className="ml-2"/>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;