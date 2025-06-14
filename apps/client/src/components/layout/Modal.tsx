// components/Modal.tsx
import React from 'react';
import { Typography } from '@ui/components';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4'
      onClick={onClose}
    >
      {/* 모달 박스 */}
      <div
        className='bg-white rounded-lg p-6 mx-auto relative flex flex-col max-w-sm max-h-[75vh] overflow-y-auto'
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className='flex items-center justify-center absolute top-5 right-5 rounded-full w-8 h-8 hover:bg-gray-4 active:bg-gray-3'
          onClick={onClose}
        >
          <Typography
            variant='h32'
            className='text-gray-1 relative -top-[1.5px]'
          >
            &times;
          </Typography>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
