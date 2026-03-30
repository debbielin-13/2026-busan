import React from 'react';

interface UtilityBoxProps {
  onOpenModal: (modalId: 'hotel' | 'flight' | 'intro' | 'exchange' | 'korean') => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const UtilityBox: React.FC<UtilityBoxProps> = ({ onOpenModal, isOpen, onToggle }) => {
  return (
    <div className="mb-8">
      <button 
        onClick={onToggle} 
        className="w-full flex justify-between items-center mb-2 px-1 group cursor-pointer"
      >
          <div className="text-sm font-bold text-pink-500 group-hover:text-pink-600 transition-colors">🧰 實用百寶箱</div>
          <svg 
            style={{ transform: `rotate(${isOpen ? 180 : 0}deg)`, transition: 'transform 0.3s' }} 
            className="w-4 h-4 text-pink-400 group-hover:text-pink-500 transition-colors" 
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="grid grid-cols-4 gap-2 pt-2 pb-3">
              <button onClick={() => onOpenModal('flight')} className="bg-white border-2 border-pink-200 hover:bg-[#fffbeb] hover:border-pink-400 text-[#d87093] rounded-2xl p-2 sm:p-3 flex flex-col items-center justify-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                  <span className="text-[1.35rem] sm:text-2xl mb-1 group-hover:scale-110 transition-transform">✈️</span>
                  <span className="text-[0.65rem] sm:text-[0.8rem] font-bold whitespace-nowrap">航班</span>
              </button>

              <button onClick={() => onOpenModal('hotel')} className="bg-white border-2 border-pink-200 hover:bg-[#fffbeb] hover:border-pink-400 text-[#d87093] rounded-2xl p-2 sm:p-3 flex flex-col items-center justify-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                  <span className="text-[1.35rem] sm:text-2xl mb-1 group-hover:scale-110 transition-transform">🏠</span>
                  <span className="text-[0.65rem] sm:text-[0.8rem] font-bold whitespace-nowrap">住宿</span>
              </button>

              <button onClick={() => onOpenModal('intro')} className="bg-white border-2 border-pink-200 hover:bg-[#fffbeb] hover:border-pink-400 text-[#d87093] rounded-2xl p-2 sm:p-3 flex flex-col items-center justify-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                  <span className="text-[1.35rem] sm:text-2xl mb-1 group-hover:scale-110 transition-transform">📖</span>
                  <span className="text-[0.65rem] sm:text-[0.8rem] font-bold whitespace-nowrap">行程介紹</span>
              </button>

              <a href="https://www.notion.so/32bb36162c43812d82a4ef35f020a97b?v=32bb36162c4381c58c3a000cd385f949&source=copy_link" target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-pink-200 hover:bg-[#fffbeb] hover:border-pink-400 text-[#d87093] rounded-2xl p-2 sm:p-3 flex flex-col items-center justify-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                  <span className="text-[1.35rem] sm:text-2xl mb-1 group-hover:scale-110 transition-transform">📓</span>
                  <span className="text-[0.65rem] sm:text-[0.8rem] font-bold whitespace-nowrap">Notion</span>
              </a>

              <a href="https://www.google.com/maps/d/u/0/edit?mid=1YrhAeeDbXYXPVahG6ixbObE35WwRHcY&usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-pink-200 hover:bg-[#fffbeb] hover:border-pink-400 text-[#d87093] rounded-2xl p-2 sm:p-3 flex flex-col items-center justify-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                  <span className="text-[1.35rem] sm:text-2xl mb-1 group-hover:scale-110 transition-transform">🗺️</span>
                  <span className="text-[0.65rem] sm:text-[0.8rem] font-bold whitespace-nowrap">Google 地圖</span>
              </a>

              <a href="https://www.settour.com.tw/help/docs/pkg/%E9%87%9C%E5%B1%B1%E5%9C%B0%E9%90%B5%E5%9C%96.pdf" target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-pink-200 hover:bg-[#fffbeb] hover:border-pink-400 text-[#d87093] rounded-2xl p-2 sm:p-3 flex flex-col items-center justify-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                  <span className="text-[1.35rem] sm:text-2xl mb-1 group-hover:scale-110 transition-transform">🚇</span>
                  <span className="text-[0.65rem] sm:text-[0.8rem] font-bold whitespace-nowrap">捷運</span>
              </a>

              <button onClick={() => onOpenModal('exchange')} className="bg-white border-2 border-pink-200 hover:bg-[#fffbeb] hover:border-pink-400 text-[#d87093] rounded-2xl p-2 sm:p-3 flex flex-col items-center justify-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                  <span className="text-[1.35rem] sm:text-2xl mb-1 group-hover:scale-110 transition-transform">💱</span>
                  <span className="text-[0.65rem] sm:text-[0.8rem] font-bold whitespace-nowrap">匯率換算</span>
              </button>

              <button onClick={() => onOpenModal('korean')} className="bg-white border-2 border-pink-200 hover:bg-[#fffbeb] hover:border-pink-400 text-[#d87093] rounded-2xl p-2 sm:p-3 flex flex-col items-center justify-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                  <span className="text-[1.35rem] sm:text-2xl mb-1 group-hover:scale-110 transition-transform">🗣️</span>
                  <span className="text-[0.65rem] sm:text-[0.8rem] font-bold whitespace-nowrap">韓語字卡</span>
              </button>
          </div>
      </div>
    </div>
  );
};
