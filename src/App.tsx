import { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { UtilityBox } from './components/features/UtilityBox';
import { DayTabs } from './components/features/DayTabs';
import { SpotCard } from './components/features/SpotCard';

import { HotelModal } from './components/modals/HotelModal';
import { FlightModal } from './components/modals/FlightModal';
import { IntroModal } from './components/modals/IntroModal';
import { ExchangeModal } from './components/modals/ExchangeModal';
import { KoreanModal } from './components/modals/KoreanModal';

import { itineraryData } from './data/itineraryData';

function App() {
  const [activeModal, setActiveModal] = useState<'hotel' | 'flight' | 'intro' | 'exchange' | 'korean' | null>(null);
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(-1);
  const [isUtilityOpen, setIsUtilityOpen] = useState(true);
  const [boogiImg, setBoogiImg] = useState('');

  const dates = ['04.04', '04.05', '04.06', '04.07', '04.08'];

  useEffect(() => {
    const boogiImages = [
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGEzMmJqeHgwNjM0ZHlkM2o5Zno4ajhvM3BybTY0YzZteGhoZXR5dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/YjftQBceBGv2TBzH7f/giphy.gif",
      "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWc3ODBuMGhwMGw1MWJzYmFvcTJwMDl0Y3ljZDBxbG01cHhocWZ0YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/PshqKgiHpFgLvrbLU3/giphy.gif",
      "https://media2.giphy.com/media/hLEaR2yvzweM2aISeN/giphy.webp",
      "https://i.giphy.com/8HYnSYTM1M4zMP78jC.webp"
    ];
    setBoogiImg(boogiImages[Math.floor(Math.random() * boogiImages.length)]);
  }, []);

  const handleSelectDay = (index: number) => {
    if (index === -1) {
      setSelectedDayIndex(-1);
      setIsUtilityOpen(true);
    } else {
      setSelectedDayIndex(index);
      setIsUtilityOpen(false); // 收起百寶箱
    }
  };

  const handleToggleUtility = () => {
    setIsUtilityOpen(!isUtilityOpen);
    if (!isUtilityOpen) {
      setSelectedDayIndex(-1); // 展開百寶箱時回首頁
    }
  };

  return (
    <div className="min-h-screen py-6 px-4 sm:px-6 relative overflow-x-hidden">
      <div className="max-w-md mx-auto relative z-10">
        <Header />

        <UtilityBox 
          isOpen={isUtilityOpen} 
          onToggle={handleToggleUtility} 
          onOpenModal={(id) => setActiveModal(id)} 
        />

        <DayTabs 
          dates={dates} 
          numberOfDays={itineraryData.length} 
          selectedDayIndex={selectedDayIndex} 
          onSelectDay={handleSelectDay} 
        />

        {/* 首頁歡迎動圖 */}
        {selectedDayIndex === -1 && isUtilityOpen && (
           <div className="mt-2 mb-8 flex justify-center transition-all duration-300 transform scale-100 opacity-100">
               {boogiImg && <img src={boogiImg} alt="釜山海鷗歡迎您" className="w-full max-w-[180px]" />}
           </div>
        )}

        {/* 內容渲染區 */}
        <div className="mt-6">
          {selectedDayIndex !== -1 && (
            <div className="animate-[modalFadeIn_0.3s_ease-out_forwards]">
                <div className="text-center mb-6">
                    <span className="inline-block bg-white/70 backdrop-blur-sm border border-pink-200 text-[#c45372] font-bold px-5 py-2 rounded-full text-sm shadow-sm">
                        🌸 {itineraryData[selectedDayIndex].day} 🌸
                    </span>
                </div>
                {itineraryData[selectedDayIndex].items.map((item) => (
                  <SpotCard key={item.id} item={item} />
                ))}
            </div>
          )}
        </div>

        <Footer />
      </div>

      {/* 所有的 Modals */}
      <HotelModal isOpen={activeModal === 'hotel'} onClose={() => setActiveModal(null)} />
      <FlightModal isOpen={activeModal === 'flight'} onClose={() => setActiveModal(null)} />
      <IntroModal isOpen={activeModal === 'intro'} onClose={() => setActiveModal(null)} />
      <ExchangeModal isOpen={activeModal === 'exchange'} onClose={() => setActiveModal(null)} />
      <KoreanModal isOpen={activeModal === 'korean'} onClose={() => setActiveModal(null)} />
      
    </div>
  );
}

export default App;
