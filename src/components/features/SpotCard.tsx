import React, { useState } from 'react';
import { ItineraryItem } from '../../data/itineraryData';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface SpotCardProps {
  item: ItineraryItem;
}

export const SpotCard: React.FC<SpotCardProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [savedNote, setSavedNote] = useLocalStorage(`busan_note_${item.id}`, item.note);
  const [draftNote, setDraftNote] = useState(savedNote);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const spotIcon = item.icon || '🚩';
  const gmapUrl = item.gmapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.krAddr || item.krName)}`;
  const nmapUrl = item.nmapUrl || `https://map.naver.com/v5/search/${encodeURIComponent(item.krName)}`;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const handleSaveNote = () => {
    setSavedNote(draftNote.trim());
    setIsEditingNote(false);
  };

  return (
    <div className="card-container mb-4 relative">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center p-4 bg-white hover:bg-[#fff5f7] transition-colors text-left"
      >
          <div className="flex items-center gap-2 pr-4">
              <span className="text-lg">{spotIcon}</span>
              <h3 className="text-[1.15rem] font-bold text-[#c45372] leading-tight m-0">{item.title}</h3>
          </div>
          <svg 
            style={{ transform: `rotate(${isOpen ? 180 : 0}deg)`, transition: 'transform 0.3s' }} 
            className="w-5 h-5 text-[#f9a8d4] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
      </button>
      
      {isOpen && (
        <div className="px-4 pb-4 border-t border-[#fce7f3] pt-4">
            {/* 韓文地名與複製 */}
            <div className="bg-[#fdf2f8] rounded-xl p-3 flex justify-between items-center mb-4 border border-[#fbcfe8]">
                <div className="flex-1 pr-2">
                    <div className="text-[0.7rem] font-bold text-[#db7093] mb-1">韓文地名 (NAVER)</div>
                    <div className="text-[#c45372] font-bold text-sm leading-tight">{item.krName}</div>
                </div>
                <button 
                  onClick={() => copyToClipboard(item.krName, `name-${item.id}`)}
                  className={`shrink-0 transition-colors border rounded-lg px-3 py-1.5 text-xs font-bold shadow-sm ${copiedId === `name-${item.id}` ? 'bg-green-100 text-green-700 border-green-300' : 'bg-white hover:bg-pink-50 border-pink-200 text-pink-600'}`}
                >
                  {copiedId === `name-${item.id}` ? '已複製!' : '複製'}
                </button>
            </div>

            {/* 地址區域 */}
            <div className="mb-4">
                <div className="flex items-start gap-2 mb-2">
                    <span className="text-pink-400 mt-0.5 text-sm">📍</span>
                    <div>
                        <div className="text-[0.7rem] font-bold text-gray-400">地址</div>
                        <div className="text-gray-700 font-bold text-sm mt-0.5 leading-snug">{item.cnAddr}</div>
                    </div>
                </div>
                <div className="bg-[#fdf2f8] rounded-xl p-3 flex justify-between items-center ml-6 border border-[#fbcfe8]">
                    <div className="text-gray-600 text-[0.8rem] font-medium leading-snug pr-2">{item.krAddr}</div>
                    <button 
                      onClick={() => copyToClipboard(item.krAddr, `addr-${item.id}`)}
                      className={`shrink-0 transition-colors border rounded-lg px-3 py-1.5 text-xs font-bold shadow-sm ${copiedId === `addr-${item.id}` ? 'bg-green-100 text-green-700 border-green-300' : 'bg-white hover:bg-pink-50 border-pink-200 text-pink-600'}`}
                    >
                      {copiedId === `addr-${item.id}` ? '已複製!' : '複製'}
                    </button>
                </div>
            </div>

            {/* 筆記區 */}
            {!isEditingNote ? (
              <div className="bg-[#fffbeb] rounded-xl p-4 border border-[#fde68a] mb-5 relative group">
                  <div className="text-[#d97706] font-bold text-sm flex items-center gap-1.5 mb-2">💡 筆記</div>
                  <div className="text-gray-700 text-sm whitespace-pre-wrap">{savedNote || '點擊編輯新增筆記...'}</div>
                  <button 
                    onClick={() => { setIsEditingNote(true); setDraftNote(savedNote || ''); }} 
                    className="mt-3 text-xs text-gray-400 hover:text-gray-600 font-bold flex items-center gap-1 transition-colors"
                  >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                      編輯筆記
                  </button>
              </div>
            ) : (
              <div className="mb-5">
                  <div className="bg-[#fffbeb] rounded-xl p-4 border-2 border-dashed border-[#fcd34d] mb-3 relative">
                      <div className="text-[#d97706] font-bold text-sm flex items-center gap-1.5 mb-2">💡 編輯筆記</div>
                      <textarea 
                        value={draftNote}
                        onChange={(e) => setDraftNote(e.target.value)}
                        className="w-full bg-transparent border-none outline-none resize-none text-gray-700 text-sm min-h-[80px]" 
                        placeholder="輸入您的筆記..." 
                      />
                  </div>
                  <button 
                    onClick={handleSaveNote} 
                    className="w-full bg-[#fbbf24] hover:bg-[#f59e0b] transition-colors rounded-xl py-3 text-[#78350f] font-bold text-[0.95rem] shadow-sm flex justify-center items-center gap-2"
                  >
                      儲存更動
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </button>
              </div>
            )}

            {/* 導航按鈕 */}
            <div className="flex gap-3">
                <a href={gmapUrl} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#bae6fd] hover:bg-[#7dd3fc] transition-colors rounded-xl py-3 text-center text-[#0369a1] font-bold shadow-sm tracking-wide">G-Map</a>
                <a href={nmapUrl} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#bbf7d0] hover:bg-[#86efac] transition-colors rounded-xl py-3 text-center text-[#166534] font-bold shadow-sm tracking-wide">N-Map</a>
            </div>
        </div>
      )}
    </div>
  );
};
