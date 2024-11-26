export interface HeaderButton {
  id: string;
  label: string;
  onClick: () => void;
}

export interface ModalContent {
  title: string;
  description: string;
}

export interface FooterButton {
  id: string;
  label: string;
  variant?: 'primary' | 'secondary';
  onClick: () => void;
}

export interface ButtonConfigProps {
  buttons: HeaderButton[] | FooterButton[];
  onAdd: () => void;
  onRemove: (id: string) => void;
  onChange: (id: string, value: string) => void;
  onVariantChange?: (id: string, variant: 'primary' | 'secondary') => void;
  type: 'header' | 'footer';
}

export interface ModalConfig {
  showIcon: boolean;
  title: string;
  headerButtons: HeaderButton[];
  showFooter: boolean;
  footerDescription: string;
  footerButtons: FooterButton[];
  content: ModalContent;
}

export interface ConfigSectionProps {
  title: string;
  children: React.ReactNode;
}
