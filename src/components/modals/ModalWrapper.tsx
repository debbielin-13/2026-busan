import React, { ReactNode, useEffect } from 'react';

interface ModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  contentClasses?: string;
  backdropDarker?: boolean;
}

export const ModalWrapper: React.FC<ModalWrapperProps> = ({ 
  isOpen, 
  onClose, 
  children, 
  contentClasses = 'w-[90%] max-w-md max-h-[85vh] p-6',
  backdropDarker = false
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className={`absolute inset-0 ${backdropDarker ? 'bg-black/60' : 'bg-black/40'} backdrop-blur-sm`} 
        onClick={onClose}
      ></div>
      <div className={`rounded-3xl relative shadow-2xl modal-enter overflow-hidden flex flex-col ${contentClasses}`}>
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full w-8 h-8 flex items-center justify-center font-bold z-20 shadow-sm border border-gray-200">
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};
