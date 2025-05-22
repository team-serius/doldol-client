import { Icon } from '@ui/components/Icon';
import React from 'react';

type Props = {
  icon: React.FC<any>;
};

export const IconInputAdornment = ({ icon }: Props) => {
  return <Icon icon={icon} size={24} color="gray-3" />;
};
