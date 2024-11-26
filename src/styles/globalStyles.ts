import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: ${theme.typography.fontFamily.base};
    box-sizing: border-box;
  }
`;
