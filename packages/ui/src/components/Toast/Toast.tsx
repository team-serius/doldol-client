import React, { ReactNode } from 'react';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Toast = () => {
  return (
    <ToastContainer
      position="top-center" //상단 중앙 위치
      autoClose={3000} //3초 후 자동으로 닫힘
      hideProgressBar //프로그래스바 가리기
      closeOnClick //클릭시 닫기
      pauseOnHover //마우스 호버시 멈춤
      limit={3} //최대 3개까지
      closeButton={false} //닫기 버튼 숨김
      transition={Slide} //슬라이드 애니메이션
      icon={false} //아이콘 숨김
    />
  );
};

export const Notify = {
  success: (message: ReactNode | string) => {
    toast.success(message);
  },
  error: (message: ReactNode | string) => {
    toast.error(message);
  },
};
