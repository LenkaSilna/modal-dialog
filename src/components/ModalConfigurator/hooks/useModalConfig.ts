import { useState } from 'react';
import { ModalConfig } from '../types/ConfiguratorTypes';

const DEFAULT_CONFIG: ModalConfig = {
  showIcon: true,
  title: 'Ukázkový dialog',
  headerButtons: [
    { id: '1', label: 'Akce 1', onClick: () => console.log('Akce 1') },
    { id: '2', label: 'Akce 2', onClick: () => console.log('Akce 2') },
  ],
  content: {
    title: 'Obsah dialogu',
    description: 'Zde může být libovolný obsah dialogového okna.',
  },
  showFooter: true,
  footerDescription: 'Pomocný text v patičce',
  footerButtons: [
    { id: '1', label: 'Zrušit', variant: 'secondary', onClick: () => console.log('Zavřít') },
    { id: '2', label: 'Uložit', variant: 'primary', onClick: () => console.log('Uložit') },
  ],
};

export const useModalConfig = () => {
  const [config, setConfig] = useState<ModalConfig>(DEFAULT_CONFIG);

  const resetConfig = () => {
    setConfig(DEFAULT_CONFIG);
  };

  const updateConfig = (updates: Partial<ModalConfig>) => {
    setConfig((prev) => ({ ...prev, ...updates }));
  };

  const addButton = (type: 'header' | 'footer') => {
    if (type === 'header') {
      const newButton = {
        id: Date.now().toString(),
        label: `Akce ${config.headerButtons.length + 1}`,
        onClick: () => console.log(`Akce ${config.headerButtons.length + 1}`),
      };
      updateConfig({ headerButtons: [...config.headerButtons, newButton] });
    } else {
      const newButton = {
        id: Date.now().toString(),
        label: 'Nové tlačítko',
        variant: 'secondary' as const,
        onClick: () => console.log('Zavřít'),
      };
      updateConfig({ footerButtons: [...config.footerButtons, newButton] });
    }
  };

  const removeButton = (type: 'header' | 'footer', id: string) => {
    if (type === 'header') {
      updateConfig({
        headerButtons: config.headerButtons.filter((button) => button.id !== id),
      });
    } else {
      updateConfig({
        footerButtons: config.footerButtons.filter((button) => button.id !== id),
      });
    }
  };

  return { config, updateConfig, addButton, removeButton, resetConfig };
};
