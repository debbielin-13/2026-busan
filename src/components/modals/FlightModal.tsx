import React from 'react';
import { ModalWrapper } from './ModalWrapper';

interface FlightModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FlightModal: React.FC<FlightModalProps> = ({ isOpen, onClose }) => {
  return (
    <ModalWrapper 
      isOpen={isOpen} 
      onClose={onClose} 
      contentClasses="bg-white w-[90%] max-w-md max-h-[85vh] p-6 border-4 border-[#7dd3fc] overflow-y-auto"
    >
      <h2 className="text-xl font-bold text-[#0284c7] mb-5 flex items-center gap-2">
        <span className="text-2xl">✈️</span> 航班資訊
      </h2>
      
      {/* 去程 */}
      <div className="border-2 border-sky-200 rounded-2xl p-4 mb-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-sky-200 text-sky-800 text-xs font-bold px-3 py-1 rounded-bl-lg">去程</div>
          <div className="flex justify-between items-center mb-4 mt-2">
              <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">TPE</div>
                  <div className="text-xs text-gray-500 font-bold">桃園 (第二航廈)</div>
                  <div className="text-lg font-bold text-sky-600 mt-1">13:30</div>
                  <div className="text-xs text-gray-500">4/4 (六)</div>
              </div>
              <div className="flex-1 px-4 flex flex-col items-center">
                  <div className="text-xs text-sky-500 font-bold mb-1">BX794</div>
                  <div className="w-full h-[2px] bg-sky-300 relative">
                      <span className="absolute right-0 -top-2 text-sky-400">✈️</span>
                  </div>
                  <div className="text-[0.65rem] text-gray-400 mt-1">2小時35分</div>
              </div>
              <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">PUS</div>
                  <div className="text-xs text-gray-500 font-bold">釜山 (國際航廈)</div>
                  <div className="text-lg font-bold text-sky-600 mt-1">17:05</div>
                  <div className="text-xs text-gray-500">4/4 (六)</div>
              </div>
          </div>
          <div className="flex justify-between text-xs text-gray-600 bg-sky-50 p-2 rounded-lg font-medium">
              <span>經濟艙 (R)</span>
              <span>免費託運: 15公斤</span>
          </div>
      </div>

      {/* 回程 */}
      <div className="border-2 border-sky-200 rounded-2xl p-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-sky-200 text-sky-800 text-xs font-bold px-3 py-1 rounded-bl-lg">回程</div>
          <div className="flex justify-between items-center mb-4 mt-2">
              <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">PUS</div>
                  <div className="text-xs text-gray-500 font-bold">釜山 (國際航廈)</div>
                  <div className="text-lg font-bold text-sky-600 mt-1">14:15</div>
                  <div className="text-xs text-gray-500">4/9 (四)</div>
              </div>
              <div className="flex-1 px-4 flex flex-col items-center">
                  <div className="text-xs text-sky-500 font-bold mb-1">BX791</div>
                  <div className="w-full h-[2px] bg-sky-300 relative">
                      <span className="absolute right-0 -top-2 text-sky-400">✈️</span>
                  </div>
                  <div className="text-[0.65rem] text-gray-400 mt-1">2小時35分</div>
              </div>
              <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">TPE</div>
                  <div className="text-xs text-gray-500 font-bold">桃園 (第二航廈)</div>
                  <div className="text-lg font-bold text-sky-600 mt-1">15:50</div>
                  <div className="text-xs text-gray-500">4/9 (四)</div>
              </div>
          </div>
          <div className="flex justify-between text-xs text-gray-600 bg-sky-50 p-2 rounded-lg font-medium">
              <span>經濟艙 (O)</span>
              <span>免費託運: 15公斤</span>
          </div>
      </div>
    </ModalWrapper>
  );
};
