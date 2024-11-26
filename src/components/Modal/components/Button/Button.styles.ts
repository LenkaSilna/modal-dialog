import styled, { css } from 'styled-components';
import { theme } from '../../../../styles/theme';
import { ButtonProps } from '../../types';

export const StyledButton = styled.button<Pick<ButtonProps, 'variant'>>`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.typography.fontSize.sm};
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;

  ${(props) =>
    props.variant === 'primary' &&
    css`
      background-color: ${theme.colors.primary};
      color: white;

      &:hover {
        background-color: ${theme.colors.primary}dd;
      }
    `}

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background-color: white;
      border-color: ${theme.colors.border};
      color: ${theme.colors.text};

      &:hover {
        background-color: ${theme.colors.border};
      }
    `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
