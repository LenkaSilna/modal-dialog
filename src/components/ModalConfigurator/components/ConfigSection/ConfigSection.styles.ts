import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

export const Section = styled.section`
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.sm};
  margin-bottom: ${theme.spacing.md};
`;

export const Header = styled.div`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background-color: #f8f9fa;
  border-radius: ${theme.borderRadius.sm} ${theme.borderRadius.sm} 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: #f1f3f5;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`;

export const Content = styled.div<{ $isOpen: boolean }>`
  padding: ${(props) => (props.$isOpen ? theme.spacing.md : '0')};
  height: ${(props) => (props.$isOpen ? 'auto' : '0')};
  overflow: hidden;
`;

export const Icon = styled.span<{ $isOpen: boolean }>`
  transform: rotate(${(props) => (props.$isOpen ? '180deg' : '0deg')});
  transition: transform 0.2s ease-in-out;
`;
