import React from 'react';

interface DayTabsProps {
  dates: string[];
  selectedDayIndex: number;
  onSelectDay: (index: number) => void;
  numberOfDays: number;
}

export const DayTabs: React.FC<DayTabsProps> = ({ dates, selectedDayIndex, onSelectDay, numberOfDays }) => {
  return (
    <>
      <div className="text-sm font-bold text-pink-500 mb-2 pl-1 mt-6">🗓️ 行程導覽</div>
      <div className="grid grid-cols-5 gap-2 sm:gap-3 mb-5">
        {Array.from({ length: numberOfDays }).map((_, index) => {
          const isActive = selectedDayIndex === index;
          const activeClasses = isActive 
            ? "bg-pink-100 border-pink-400 text-[#c45372] shadow-md scale-105" 
            : "bg-white border-pink-200 text-pink-400 hover:bg-pink-50";
            
          return (
            <button 
              key={index}
              onClick={() => onSelectDay(isActive ? -1 : index)}
              className={`flex flex-col items-center justify-center aspect-square rounded-xl sm:rounded-2xl border-2 transition-all duration-300 ${activeClasses}`}
            >
              <span className="font-bold text-[0.85rem] sm:text-base leading-tight">Day {index + 1}</span>
              <span className="text-[0.65rem] sm:text-xs font-medium mt-0.5">{dates[index] || ''}</span>
            </button>
          );
        })}
      </div>
    </>
  );
};
