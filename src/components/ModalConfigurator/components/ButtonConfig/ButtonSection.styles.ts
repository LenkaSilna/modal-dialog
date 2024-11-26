import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.section.gap};
`;

export const ButtonControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: ${theme.controls.gap};
  align-items: center;
  margin: 12px 0;
`;

export const Input = styled.input`
  height: ${theme.input.height};
  padding: ${theme.input.padding};
  border: 1px solid #dee2e6;
  border-radius: ${theme.input.borderRadius};
  font-size: ${theme.input.fontSize};
  flex: 1;

  &:focus {
    outline: none;
    border-color: #4dabf7;
  }
`;

export const Select = styled.select`
  height: ${theme.input.height};
  padding: ${theme.input.padding};
  border: 1px solid #dee2e6;
  border-radius: ${theme.input.borderRadius};
  font-size: ${theme.input.fontSize};
  min-width: 120px;

  &:focus {
    outline: none;
    border-color: #4dabf7;
  }
`;
