import { HeaderProps } from './HeaderTypes';
import { FooterProps } from './FooterTypes';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  header: HeaderProps;
  footer?: FooterProps;
  children: React.ReactNode;
  width?: string;
  height?: string;
  closeOnEscape?: boolean;
  closeOnOverlayClick?: boolean;
}
