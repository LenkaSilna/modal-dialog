import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

export const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.md};
  border-top: 1px solid ${theme.colors.border};
`;

export const Description = styled.p`
  margin: 0;
  color: ${theme.colors.textSecondary};
  font-size: ${theme.typography.fontSize.sm};
`;
