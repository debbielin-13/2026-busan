import React, { useState } from 'react';
import { ModalWrapper } from './ModalWrapper';
import { koreanPhrases } from '../../data/koreanPhrases';

interface KoreanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KoreanModal: React.FC<KoreanModalProps> = ({ isOpen, onClose }) => {
  const [translateText, setTranslateText] = useState('');

  const playKoreanAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); 
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ko-KR';
      utterance.rate = 0.85; 
      window.speechSynthesis.speak(utterance);
    } else {
      alert("抱歉，您的瀏覽器不支援語音播放功能喔！");
    }
  };

  const openGoogleTranslate = () => {
    if(!translateText) return alert("請先輸入想翻譯的中文喔！");
    const url = `https://translate.google.com/?sl=zh-CN&tl=ko&text=${encodeURIComponent(translateText)}&op=translate`;
    window.open(url, '_blank');
  };

  const openPapago = () => {
    if(!translateText) return alert("請先輸入想翻譯的中文喔！");
    const url = `https://papago.naver.com/?sk=zh-CN&tk=ko&hn=0&st=${encodeURIComponent(translateText)}`;
    window.open(url, '_blank');
  };

  return (
    <ModalWrapper 
      isOpen={isOpen} 
      onClose={onClose} 
      backdropDarker
      contentClasses="bg-[#f4f5f4] w-[95%] max-w-md h-[85vh] p-0 border-[3px] border-[#cbd5e1] font-sans"
    >
      <div className="p-4 sm:p-5 overflow-y-auto w-full h-full flex flex-col relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 bg-white hover:bg-gray-100 text-gray-400 rounded-full w-8 h-8 flex items-center justify-center font-bold z-20 shadow-sm border border-gray-200">
          ✕
        </button>

        {/* 隨身翻譯機區塊 */}
        <div className="bg-[#eff6ff] border-[3px] border-[#bfdbfe] rounded-2xl p-4 shadow-sm mb-4 mt-8 relative shrink-0">
            <h3 className="text-[#3b82f6] font-bold mb-2 flex items-center gap-1.5 text-[0.95rem] tracking-wide">
                <span className="text-lg">💬</span> 隨身翻譯機
            </h3>
            <textarea 
              rows={2} 
              value={translateText}
              onChange={(e) => setTranslateText(e.target.value)}
              className="w-full bg-[#f8fafc] focus:bg-white border border-[#93c5fd] rounded-xl p-3 text-gray-700 text-[0.9rem] outline-none resize-none placeholder-gray-400 font-bold transition-colors shadow-inner" 
              placeholder="請輸入想翻譯的中文..."
            />
            
            <div className="flex justify-end gap-2 mt-3">
                <button 
                  onClick={openGoogleTranslate} 
                  className="bg-[#f1f5f9] hover:bg-[#e2e8f0] text-gray-500 font-bold py-1.5 px-4 rounded-full text-xs shadow-sm border border-gray-200 transition-colors tracking-wide">
                  Google 翻譯
                </button>
                <button 
                  onClick={openPapago} 
                  className="bg-[#00c73c] hover:bg-[#00a832] text-white font-bold py-1.5 px-4 rounded-full text-xs shadow-sm transition-colors tracking-wider border border-[#00a832]">
                  Papago (推薦)
                </button>
            </div>
        </div>

        {/* 字卡列表 */}
        <div className="space-y-3 flex-1 overflow-y-auto px-1 pb-4">
          {koreanPhrases.map((phrase, idx) => (
            <div key={idx} className="bg-[#eff6ff] border-[3px] border-[#bfdbfe] rounded-2xl p-4 shadow-sm relative">
                <button 
                  onClick={() => playKoreanAudio(phrase.kr)} 
                  className="absolute top-1/2 -translate-y-1/2 right-4 bg-white border-2 border-gray-200 hover:bg-gray-50 text-gray-500 rounded-full w-10 h-10 flex items-center justify-center text-lg shadow-sm transition-transform hover:scale-110 active:scale-95">
                  🔊
                </button>
                <div className="text-[0.8rem] font-bold text-[#3b82f6] mb-1.5">{phrase.cn}</div>
                <div className="text-[1.1rem] font-bold text-gray-800 mb-2 mr-12 tracking-wide">{phrase.kr}</div>
                <div className="text-[0.75rem] text-gray-500 font-bold bg-white inline-block px-2.5 py-1 rounded-lg border border-[#bfdbfe]">🗣️ {phrase.pron}</div>
            </div>
          ))}
        </div>
      </div>
    </ModalWrapper>
  );
};
