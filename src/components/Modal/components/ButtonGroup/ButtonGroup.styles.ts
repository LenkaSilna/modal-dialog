import styled from 'styled-components';
import { ButtonGroupProps } from '../../types';
import { theme } from '../../../../styles/theme';

export const StyledButtonGroup = styled.div<Pick<ButtonGroupProps, 'align'>>`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  justify-content: ${(props) => {
    switch (props.align) {
      case 'left':
        return 'flex-start';
      case 'center':
        return 'center';
      case 'right':
        return 'flex-end';
      default:
        return 'flex-end';
    }
  }};
`;
