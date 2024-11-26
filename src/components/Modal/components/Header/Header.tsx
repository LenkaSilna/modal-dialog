import React from 'react';
import { HeaderProps } from '../../types';
import { StyledHeader, IconWrapper, Title } from './Header.styles';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';

export const Header: React.FC<HeaderProps> = ({ icon, title, buttons }) => (
  <StyledHeader>
    {icon && <IconWrapper>{icon}</IconWrapper>}
    <Title>{title}</Title>
    {buttons && <ButtonGroup>{buttons}</ButtonGroup>}
  </StyledHeader>
);
