import React from 'react';
import { ButtonProps } from '../../types';
import { StyledButton } from './Button.styles';

export const Button: React.FC<ButtonProps> = ({ children, variant = 'secondary', ...props }) => (
  <StyledButton variant={variant} {...props}>
    {children}
  </StyledButton>
);
