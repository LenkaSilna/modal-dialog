export interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export interface ButtonGroupProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
}
