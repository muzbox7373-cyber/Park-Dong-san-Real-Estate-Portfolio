import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';

const historyData = [
  { year: '2024', title: '자산관리 컨설팅 서비스 런칭', desc: '단순 중개를 넘어선 종합 자산 관리 솔루션 제공 시작' },
  { year: '2020', title: '상업용 빌딩 매매 전담 팀 신설', desc: '연간 거래액 500억 달성, 법인 고객 전담 서비스 강화' },
  { year: '2015', title: 'XX구 모범 중개업소 표창 수상', desc: '투명하고 안전한 거래 문화 정착에 기여한 공로 인정' },
  { year: '2011', title: '"박동산 공인중개사사무소" 개업', desc: '독립 사무소 오픈, 지역 내 신뢰받는 브랜드로 성장' },
  { year: '2005', title: 'XX부동산 소속 실장 근무', desc: '아파트 단지 500세대 입주장 총괄 경험' },
  { year: '2004', title: '제15회 공인중개사 자격 취득', desc: '부동산 전문 지식 습득 및 자격 인증' },
];

const HistoryPage: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="py-16 px-8 md:px-16"
    >
      <SectionTitle title="20 Years Timeline" subtitle="History & Achievements" />

      <div className="relative border-l-2 border-secondary/30 ml-4 md:ml-1/2 space-y-12">
        {historyData.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 md:pl-0"
          >
             {/* Desktop Layout: Alternating sides or Just standard timeline? 
                 Let's keep it document style: Year on left (relative to line), Content on right
             */}
             <div className="md:flex items-center justify-between w-full">
                {/* Dot */}
                <div className="absolute left-[-9px] md:left-1/2 md:-ml-[9px] w-4 h-4 rounded-full bg-secondary border-4 border-white shadow-sm z-10"></div>
                
                {/* Year display for desktop - Right aligned to the line */}
                <div className="hidden md:block md:w-1/2 md:pr-12 md:text-right">
                  <span className="text-4xl font-serif font-bold text-gray-200">{item.year}</span>
                </div>
                
                {/* Content */}
                <div className="md:w-1/2 md:pl-12">
                   <span className="md:hidden text-2xl font-serif font-bold text-primary mb-2 block">{item.year}</span>
                   <h3 className="text-lg font-bold text-gray-800 mb-1">{item.title}</h3>
                   <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
             </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HistoryPage;