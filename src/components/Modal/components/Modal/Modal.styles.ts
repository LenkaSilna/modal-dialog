import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

export const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${theme.colors.overlay};
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalWrapper = styled.div<{ width?: string }>`
  background: ${theme.colors.background};
  border-radius: ${theme.borderRadius.md};
  box-shadow: ${theme.shadow.modal};
  min-width: 400px;
  max-width: ${(props) => props.width || '800px'};
  max-height: 90vh;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  padding: ${theme.spacing.md};
  overflow-y: auto;
  flex: 1;
`;
