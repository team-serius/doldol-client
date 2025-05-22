import { ReactNode } from 'react';

export type DefaultTextFieldProps = {
  label?: string;
  helperMessage?: string;
  errorMessage?: string;
  labelComponent?: ReactNode; // field의 label을 표시하는 컴포넌트 (필드 좌측 상단에 표시)
  classes?: {
    root?: string;
    input?: string;
    message?: string;
  };
};
