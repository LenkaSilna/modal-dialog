import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.section.gap};
`;

export const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.controls.gap};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

export const DescriptionInput = styled.input`
  height: ${theme.input.height};
  padding: ${theme.input.padding};
  border: 1px solid #dee2e6;
  border-radius: ${theme.input.borderRadius};
  font-size: ${theme.input.fontSize};

  &:focus {
    outline: none;
    border-color: ${theme.colors.inputFocus};
  }
`;
