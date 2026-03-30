import React, { useState, useMemo } from 'react';
import { ModalWrapper } from './ModalWrapper';

interface ExchangeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExchangeModal: React.FC<ExchangeModalProps> = ({ isOpen, onClose }) => {
  const [exchangeRate, setExchangeRate] = useState<number>(46.5);
  const [krwAmount, setKrwAmount] = useState<number | ''>('');

  const twdResult = useMemo(() => {
    if (krwAmount === '' || exchangeRate === 0) return 0;
    return Math.round(Number(krwAmount) / exchangeRate);
  }, [krwAmount, exchangeRate]);

  const quickAmounts = [5000, 10000, 30000, 50000];

  return (
    <ModalWrapper 
      isOpen={isOpen} 
      onClose={onClose} 
      backdropDarker
      contentClasses="bg-[#f4f5f4] w-[90%] max-w-sm p-6 border-[3px] border-[#cbd5e1] font-sans"
    >
      {/* 今日匯率設定區 */}
      <div className="bg-[#fefce8] border-[3px] border-[#fde047] rounded-xl px-4 py-3 flex justify-between items-center mb-5 shadow-sm mt-6">
          <span className="font-bold text-gray-700 text-sm tracking-wide">今日匯率 (1台幣=)</span>
          <div className="flex items-center gap-1.5">
              <input 
                type="number" 
                value={exchangeRate}
                onChange={(e) => setExchangeRate(Number(e.target.value))}
                className="w-16 bg-[#f3f4f6] border border-gray-300 rounded-md px-1 py-1 text-center font-bold text-gray-700 outline-none focus:border-yellow-400 focus:bg-white transition-colors"
               />
              <span className="font-bold text-gray-700">₩</span>
          </div>
      </div>

      {/* 快速換算區 */}
      <div className="bg-[#eff6ff] border-[3px] border-[#bfdbfe] rounded-2xl p-5 shadow-sm flex flex-col items-center relative mb-4">
          <div className="text-[#3b82f6] font-bold text-[0.95rem] mb-3 tracking-wide">快速換算 (韓幣轉台幣)</div>
          <input 
            type="number" 
            value={krwAmount}
            onChange={(e) => setKrwAmount(e.target.value === '' ? '' : Number(e.target.value))}
            className="w-full bg-white border border-[#93c5fd] rounded-xl px-4 py-3 text-center text-gray-600 text-lg font-bold outline-none placeholder-gray-300 shadow-inner" 
            placeholder="輸入韓幣金額"
          />
          <div className="mt-4 mb-2 flex items-center justify-center gap-2 text-[#475569]">
              <span className="text-3xl font-bold">≈</span>
              <span className="text-4xl font-bold tracking-tight">{twdResult.toLocaleString()}</span>
              <span className="text-xl font-bold mt-1">NT$</span>
          </div>
      </div>

      {/* 價格對照表 */}
      <div className="bg-[#eff6ff] border-[3px] border-[#bfdbfe] rounded-2xl px-5 py-4 shadow-sm">
          <div className="text-center font-bold text-gray-600 mb-2 text-sm tracking-widest">價格對照表</div>
          <div className="border-b-2 border-dashed border-[#93c5fd] mb-3 opacity-60"></div>
          <div className="space-y-3">
              {quickAmounts.map(amt => (
                <div key={amt} className="flex justify-between items-center px-4">
                    <span className="font-bold text-gray-700 text-[1.1rem] w-24 text-right">₩ {amt.toLocaleString()}</span>
                    <span className="font-bold text-[#3b82f6] text-[1.05rem]">NT$ {Math.round(amt / exchangeRate).toLocaleString()}</span>
                </div>
              ))}
          </div>
      </div>
    </ModalWrapper>
  );
};
