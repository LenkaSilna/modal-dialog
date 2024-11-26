import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.section.gap};
`;

export const Configurator = styled.div`
  width: 300px;
  background: #f8f9fa;
  padding: 16px;
  border-radius: 8px;
  overflow-y: auto;
  max-height: calc(100vh - 40px);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 800px;
  margin: 0 auto;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.controls.gap};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Input = styled.input`
  height: ${theme.input.height};
  padding: ${theme.input.padding};
  border: 1px solid #dee2e6;
  border-radius: ${theme.input.borderRadius};
  font-size: ${theme.input.fontSize};

  &:focus {
    outline: none;
    border-color: #4dabf7;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

export const Preview = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;
