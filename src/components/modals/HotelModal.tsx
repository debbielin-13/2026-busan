import React, { useState } from 'react';
import { ModalWrapper } from './ModalWrapper';

interface HotelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HotelModal: React.FC<HotelModalProps> = ({ isOpen, onClose }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <ModalWrapper 
      isOpen={isOpen} 
      onClose={onClose} 
      contentClasses="bg-white w-[90%] max-w-md max-h-[85vh] p-6 border-4 border-[#fde047] overflow-y-auto"
    >
      <h2 className="text-xl font-bold text-[#b45309] mb-5 flex items-center gap-2">
        <span className="text-2xl">🏠</span> 住宿資訊
      </h2>
      
      {/* 廣安里民宿 */}
      <div className="bg-[#fefce8] rounded-2xl p-4 mb-4 border border-[#fef08a]">
        <h3 className="font-bold text-[#854d0e] text-lg mb-3">廣安里民宿</h3>
        <div className="mb-3">
            <div className="text-[0.7rem] text-gray-500 font-bold mb-1">韓文地址</div>
            <div className="flex justify-between items-center bg-white rounded-lg p-2 border border-[#fef08a]">
                <span className="text-gray-700 font-bold text-[0.8rem]">부산 수영구 민락수변로 49</span>
                <button 
                  onClick={() => copyToClipboard('부산 수영구 민락수변로 49', 'h1')} 
                  className={`text-xs px-2 py-1 rounded font-bold ${copiedId === 'h1' ? 'bg-green-100 text-green-700 border border-green-300' : 'bg-gray-100 text-gray-600'}`}
                >
                  {copiedId === 'h1' ? '已複製!' : '複製'}
                </button>
            </div>
            <div className="text-xs text-gray-400 mt-1">中文：釜山廣域市水營區民樂水邊路 49</div>
        </div>
        <div className="flex gap-3 mt-2">
            <a href="https://www.google.com/maps/search/?api=1&query=부산+수영구+민락수변로+49" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#bae6fd] hover:bg-[#7dd3fc] transition-colors rounded-xl py-2.5 text-center text-[#0369a1] font-bold shadow-sm tracking-wide">G-Map 導航</a>
            <a href="https://naver.me/GFCv4i55" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#bbf7d0] hover:bg-[#86efac] transition-colors rounded-xl py-2.5 text-center text-[#166534] font-bold shadow-sm tracking-wide">N-Map 導航</a>
        </div>
      </div>

      {/* 西面民宿 */}
      <div className="bg-[#fefce8] rounded-2xl p-4 border border-[#fef08a]">
        <h3 className="font-bold text-[#854d0e] text-lg mb-3">西面民宿</h3>
        <div className="mb-3">
            <div className="text-[0.7rem] text-gray-500 font-bold mb-1">韓文地址</div>
            <div className="flex justify-between items-center bg-white rounded-lg p-2 border border-[#fef08a]">
                <span className="text-gray-700 font-bold text-[0.8rem]">부산 부산진구 서전로58번길 23 3층</span>
                <button 
                  onClick={() => copyToClipboard('부산 부산진구 서전로58번길 23 3층', 'h2')} 
                  className={`text-xs px-2 py-1 rounded font-bold ${copiedId === 'h2' ? 'bg-green-100 text-green-700 border border-green-300' : 'bg-gray-100 text-gray-600'}`}
                >
                  {copiedId === 'h2' ? '已複製!' : '複製'}
                </button>
            </div>
            <div className="text-xs text-gray-400 mt-1">中文：釜山釜山鎮區西田路58號街 23 (3樓)</div>
        </div>
        <div className="flex gap-3 mt-2">
            <a href="https://www.google.com/maps/search/?api=1&query=부산+부산진구+서전로58번길+23+3층" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#bae6fd] hover:bg-[#7dd3fc] transition-colors rounded-xl py-2.5 text-center text-[#0369a1] font-bold shadow-sm tracking-wide">G-Map 導航</a>
            <a href="https://naver.me/FmGp9KPg" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#bbf7d0] hover:bg-[#86efac] transition-colors rounded-xl py-2.5 text-center text-[#166534] font-bold shadow-sm tracking-wide">N-Map 導航</a>
        </div>
      </div>
    </ModalWrapper>
  );
};
