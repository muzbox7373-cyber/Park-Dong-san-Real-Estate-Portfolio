import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';
import { MEETING_IMG } from '../images/assets';

const PhilosophyPage: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-16 px-8 md:px-16"
    >
      <SectionTitle title="My Philosophy" subtitle="Core Values" />

      <div className="space-y-16">
        {/* Top Image Section */}
        <div className="relative h-64 md:h-80 w-full overflow-hidden mb-12 border-b-4 border-secondary">
           <img src={MEETING_IMG} alt="Meeting" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
           <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
        </div>

        {/* Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-4">
             <div className="text-5xl font-serif text-secondary/30 font-bold absolute -mt-8 ml-0 md:-ml-4 z-0">01</div>
             <h3 className="relative z-10 text-xl font-bold text-primary">안전 제일<br/><span className="text-sm font-normal text-gray-500">Safety First</span></h3>
             <p className="text-gray-600 text-sm leading-7">
               "돌다리도 두드려보고 건너지 않습니다."<br/>
               1%의 리스크라도 있다면 계약하지 않습니다. 고객의 자산을 지키는 것이 수익을 내는 것보다 우선입니다.
             </p>
          </div>

          <div className="space-y-4">
             <div className="text-5xl font-serif text-secondary/30 font-bold absolute -mt-8 ml-0 md:-ml-4 z-0">02</div>
             <h3 className="relative z-10 text-xl font-bold text-primary">데이터 기반<br/><span className="text-sm font-normal text-gray-500">Data Driven</span></h3>
             <p className="text-gray-600 text-sm leading-7">
               감이 아닌, 정확한 데이터로 말합니다.<br/>
               국토부 실거래가, 등기부등본, 도시계획 조례 분석을 통해 누구도 부인할 수 없는 객관적 가치를 산정합니다.
             </p>
          </div>

          <div className="space-y-4">
             <div className="text-5xl font-serif text-secondary/30 font-bold absolute -mt-8 ml-0 md:-ml-4 z-0">03</div>
             <h3 className="relative z-10 text-xl font-bold text-primary">평생 파트너<br/><span className="text-sm font-normal text-gray-500">Life Partner</span></h3>
             <p className="text-gray-600 text-sm leading-7">
               "계약은 끝이 아니라 시작입니다."<br/>
               단발성 거래에 그치지 않고, 고객님의 생애 주기에 맞춘 장기적인 자산 관리 플랜을 함께 고민합니다.
             </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 p-8 bg-bgPaper text-center border border-secondary/20">
          <h4 className="font-serif text-2xl text-primary font-bold mb-4">저와 함께하시겠습니까?</h4>
          <p className="text-gray-600 mb-6 text-sm">귀하의 소중한 자산, 믿을 수 있는 전문가에게 맡기세요.</p>
          <NavLink 
            to="/contact"
            className="inline-block px-8 py-3 bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
          >
            상담 문의하기
          </NavLink>
        </div>
      </div>
    </motion.div>
  );
};

export default PhilosophyPage;