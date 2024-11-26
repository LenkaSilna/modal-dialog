import React from 'react';
import { FooterProps } from '../../types';
import { StyledFooter, Description } from './Footer.styles';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';

export const Footer: React.FC<FooterProps> = ({ description, buttons }) => (
  <StyledFooter>
    {description && <Description>{description}</Description>}
    {buttons && <ButtonGroup>{buttons}</ButtonGroup>}
  </StyledFooter>
);
