// components/Modal.tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4'
      onClick={onClose}
    >
      {/* 모달 콘텐츠 박스 */}
      <div
        className='bg-white rounded-lg  p-6
                   
                    mx-auto relative flex flex-col
                   max-w-sm
                   max-h-[75vh] overflow-y-auto'
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className='absolute top-3 right-3 text-gray-1 hover:text-gray-2 text-3xl font-semibold z-10'
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
