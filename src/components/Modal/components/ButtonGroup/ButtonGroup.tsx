import React from 'react';
import { ButtonGroupProps } from '../../types';
import { StyledButtonGroup } from './ButtonGroup.styles';

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, align = 'right' }) => (
  <StyledButtonGroup align={align}>{children}</StyledButtonGroup>
);
