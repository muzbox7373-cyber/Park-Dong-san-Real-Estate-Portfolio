import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import { BUILDING_IMG, HANDSHAKE_IMG, OFFICE_BG } from '../images/assets';

interface Case {
  id: number;
  title: string;
  category: string;
  summary: string;
  detail: string;
  result: string;
  image: string;
}

const cases: Case[] = [
  {
    id: 1,
    title: "꼬마빌딩 리모델링 매각",
    category: "Commercial",
    summary: "공실률 40% 건물을 리모델링 제안 후 만실 매각 성공",
    detail: "노후화된 외관과 비효율적인 동선으로 인해 공실이 해소되지 않던 4층 상가주택. 1층 필로티 주차장 확보 및 외관 파사드 교체를 제안하고, 우량 임차인(프랜차이즈 카페) 입점을 선유치함.",
    result: "수익률 150% 상승, 매매가 25억 → 42억 거래 성사",
    image: BUILDING_IMG
  },
  {
    id: 2,
    title: "복잡한 상속 토지 중재",
    category: "Land & Legacy",
    summary: "복잡한 지분 관계가 얽힌 토지, 전원 합의 매도 완료",
    detail: "형제 간 상속 지분 다툼으로 5년간 방치된 토지. 각 소유자의 니즈를 개별 면담으로 파악하고, 법무사와 협력하여 지분 정리 및 세금 절세 방안을 동시에 제시함.",
    result: "3개월간의 중재 끝에 매도 합의, 시세 대비 95% 가격 방어",
    image: HANDSHAKE_IMG
  },
  {
    id: 3,
    title: "강남권 기업 사옥 이전",
    category: "Office",
    summary: "프라임 오피스 히든 매물 발굴 계약",
    detail: "IT 기업의 사옥 확장을 위해 보안과 교통이 핵심인 매물을 물색. 시장에 공개되지 않은 잠재 매물을 건물주와의 오랜 네트워크를 통해 발굴함.",
    result: "시세 대비 10% 저렴하게 계약 체결, 렌트프리 3개월 추가 확보",
    image: OFFICE_BG
  }
];

const CasesPage: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-16 px-8 md:px-16"
    >
      <SectionTitle title="Success Stories" subtitle="Professional Portfolio" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cases.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -5 }}
            className="group cursor-pointer bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            onClick={() => setSelectedCase(item)}
          >
            <div className="h-48 overflow-hidden relative">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute top-0 right-0 bg-primary text-white text-xs px-3 py-1 font-bold uppercase">
                {item.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-lg font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-3 mb-4">{item.summary}</p>
              <button className="text-secondary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Read More <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for details */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white max-w-2xl w-full p-0 shadow-2xl overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
              >
                <X size={20} />
              </button>
              
              <div className="h-64 w-full">
                <img src={selectedCase.image} alt={selectedCase.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="p-8">
                <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-2">{selectedCase.category}</span>
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">{selectedCase.title}</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Challenge & Solution</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">{selectedCase.detail}</p>
                  </div>
                  <div className="bg-bgPaper p-4 border-l-4 border-secondary">
                    <h4 className="font-bold text-primary mb-1 text-sm">Result</h4>
                    <p className="text-gray-800 font-medium text-sm">{selectedCase.result}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CasesPage;