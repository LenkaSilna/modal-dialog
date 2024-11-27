import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.section.gap};
  width: -webkit-fill-available;
  margin-top: calc(${theme.spacing.xl} * 2);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.section.gap};
  width: -webkit-fill-available;
`;

export const Configurator = styled.div`
  background-color: ${theme.colors.mainHeader};
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  overflow-y: auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.controls.gap};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

export const Input = styled.input`
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

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  cursor: pointer;
  user-select: none;
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${theme.spacing.md};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${theme.spacing.sm};
    align-items: center;
  }
`;

export const Preview = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  background: ${theme.colors.mainHeader};
  padding: 20px;
  gap: ${theme.spacing.sm};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;
