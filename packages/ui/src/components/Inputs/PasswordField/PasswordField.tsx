import React, { forwardRef } from 'react';
import { TextField, TextFieldProps } from '../TextField';
import { EyeLine } from '@icons/EyeLine';
import { EyeOffLine } from '@icons/EyeOffLine';
import { Icon } from '@ui/components/Icon';

export const PasswordField = forwardRef((props: TextFieldProps, ref: any) => {
  const [show, setShow] = React.useState(false);

  const onToggle = () => {
    setShow(!show);
  };

  return (
    <TextField
      type={show ? 'text' : 'password'}
      endAdornment={<Icon icon={show ? EyeOffLine : EyeLine} onClick={onToggle} color="gray-5" />}
      ref={ref}
      {...props}
    />
  );
});
