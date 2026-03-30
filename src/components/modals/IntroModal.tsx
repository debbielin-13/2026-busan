import React, { useState, useEffect } from 'react';
import { ModalWrapper } from './ModalWrapper';
import { introData } from '../../data/introData';

interface IntroModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IntroModal: React.FC<IntroModalProps> = ({ isOpen, onClose }) => {
  const [selectedDayIndex, setSelectedDayIndex] = useState<number | null>(null);

  // Reset to menu when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setSelectedDayIndex(null);
    }
  }, [isOpen]);

  const handleClose = () => {
    onClose();
  };

  return (
    <ModalWrapper 
      isOpen={isOpen} 
      onClose={handleClose} 
      backdropDarker
      contentClasses="bg-white w-[95%] max-w-md h-[85vh] p-0 border-4 border-[#f9a8d4]"
    >
      {selectedDayIndex === null ? (
        // 選單視圖
        <div className="flex-1 overflow-y-auto p-6 bg-white w-full">
            <h2 className="text-xl font-bold text-[#d87093] mb-2 flex items-center gap-2 mt-2">
                <span className="text-2xl">🌸</span> 釜山櫻花季特輯
            </h2>
            <p className="text-sm text-gray-500 mb-6 font-bold">請選擇您想預覽的行程天數：</p>
            <div className="space-y-3">
              {introData.map((data, index) => (
                <button 
                  key={index} 
                  onClick={() => setSelectedDayIndex(index)} 
                  className="w-full flex justify-between items-center p-4 bg-pink-50 hover:bg-pink-100 transition-colors rounded-2xl border border-pink-100 shadow-sm text-left"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white text-pink-500 font-bold flex items-center justify-center shadow-sm">{data.day}</div>
                        <div className="font-bold text-[#c45372] text-[1.05rem]">{data.title}</div>
                    </div>
                    <svg className="w-5 h-5 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
              ))}
            </div>
        </div>
      ) : (
        // 單日詳細視圖
        <div className="flex flex-col h-full w-full bg-white relative">
            {/* 頂部導覽列 */}
            <div className="px-5 py-4 border-b border-pink-100 flex items-center bg-white flex-none z-10 sticky top-0 shadow-sm">
                <button 
                  onClick={() => setSelectedDayIndex(null)} 
                  className="text-pink-500 font-bold flex items-center gap-1 hover:bg-pink-50 transition-colors px-3 py-1.5 rounded-lg"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    返回列表
                </button>
            </div>
            
            {/* 內容滾動區 */}
            <div className="flex-1 overflow-y-auto p-5 bg-[#fdf2f8]">
                <div className="mb-5">
                    <span className="bg-pink-100 text-pink-600 font-bold px-3 py-1.5 rounded-full text-sm inline-block mb-3 border border-pink-200">
                        {introData[selectedDayIndex].day} 精彩預覽
                    </span>
                    <h3 className="text-[1.35rem] font-bold text-[#c45372] mb-1 leading-tight">{introData[selectedDayIndex].title}</h3>
                </div>
                
                <div className="space-y-6 pb-4">
                  {introData[selectedDayIndex].locations.map((loc, idx) => (
                    <div key={idx} className="bg-white rounded-2xl shadow-sm border border-pink-200 overflow-hidden">
                        <div className="p-4 border-b border-pink-50">
                            <h4 className="font-bold text-[#c45372] text-[1.05rem] flex items-center gap-1.5">
                                <span className="text-pink-400">📍</span>{loc.name}
                            </h4>
                            <p className="text-gray-600 text-[0.9rem] leading-relaxed mt-2.5 font-medium">{loc.desc}</p>
                        </div>
                        <div className="h-44 w-full relative bg-pink-50 flex items-center justify-center">
                            <img src={loc.img} alt={loc.alt} loading="lazy" className="w-full h-full object-cover absolute inset-0 z-10" />
                            <span className="text-pink-300 text-xs font-bold z-0 relative">載入美景中...</span>
                        </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center mt-2 mb-6">
                    {selectedDayIndex > 0 ? (
                      <button 
                        onClick={() => setSelectedDayIndex(selectedDayIndex - 1)} 
                        className="text-pink-500 font-bold bg-white border border-pink-200 px-5 py-2.5 rounded-xl shadow-sm hover:bg-pink-50 transition-colors"
                      >
                        ⬅️ 上一天
                      </button>
                    ) : <div></div>}
                    
                    {selectedDayIndex < introData.length - 1 ? (
                      <button 
                        onClick={() => setSelectedDayIndex(selectedDayIndex + 1)} 
                        className="text-white font-bold bg-pink-400 px-5 py-2.5 rounded-xl shadow-sm hover:bg-pink-500 transition-colors"
                      >
                        下一天 ➡️
                      </button>
                    ) : (
                      <button 
                        onClick={() => setSelectedDayIndex(null)} 
                        className="text-white font-bold bg-pink-400 px-5 py-2.5 rounded-xl shadow-sm hover:bg-pink-500 transition-colors"
                      >
                        回目錄 📖
                      </button>
                    )}
                </div>
            </div>
        </div>
      )}
    </ModalWrapper>
  );
};
