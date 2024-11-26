import React from 'react';
import { StyleSheetManager } from 'styled-components';
import { ModalConfigurator } from './components/ModalConfigurator/ModalConfigurator';
import isPropValid from '@emotion/is-prop-valid';

const App: React.FC = () => {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ModalConfigurator />
    </StyleSheetManager>
  );
};

export default App;
