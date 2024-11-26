import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  padding: ${theme.spacing.md};
  border-bottom: 1px solid ${theme.colors.border};
  gap: ${theme.spacing.md};
`;

export const IconWrapper = styled.div`
  margin: 0;
`;

export const Title = styled.h2`
  margin: 0;
  flex: 1;
  color: ${theme.colors.text};
  font-size: ${theme.typography.fontSize.lg};
`;
