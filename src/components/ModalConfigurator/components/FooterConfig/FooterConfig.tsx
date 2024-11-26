import React from 'react';
import { FooterContainer, CheckboxGroup, DescriptionInput, Label } from './FooterConfig.styles';
import { ButtonConfig } from '../ButtonConfig/ButtonSection';
import { CheckboxLabel } from '../../ModalConfigurator.styles';
import { ModalConfig } from '../../types/ConfiguratorTypes';

interface FooterConfigProps {
  config: ModalConfig;
  onConfigChange: (updates: Partial<ModalConfig>) => void;
  onAddButton: () => void;
  onRemoveButton: (id: string) => void;
}

export const FooterConfig: React.FC<FooterConfigProps> = ({
  config,
  onConfigChange,
  onAddButton,
  onRemoveButton,
}) => {
  return (
    <FooterContainer>
      <CheckboxGroup>
        <CheckboxLabel>
          <input
            type="checkbox"
            checked={config.showFooter}
            onChange={(e) => onConfigChange({ showFooter: e.target.checked })}
          />
          <span>Zobrazit patičku</span>
        </CheckboxLabel>
      </CheckboxGroup>

      {config.showFooter && (
        <>
          <Label>
            <span>Popis v patičce</span>
            <DescriptionInput
              type="text"
              value={config.footerDescription}
              onChange={(e) => onConfigChange({ footerDescription: e.target.value })}
            />
          </Label>

          <ButtonConfig
            buttons={config.footerButtons}
            onAdd={onAddButton}
            onRemove={onRemoveButton}
            onChange={(id, value) => {
              onConfigChange({
                footerButtons: config.footerButtons.map((button) =>
                  button.id === id ? { ...button, label: value } : button,
                ),
              });
            }}
            onVariantChange={(id, variant) => {
              onConfigChange({
                footerButtons: config.footerButtons.map((button) =>
                  button.id === id ? { ...button, variant } : button,
                ),
              });
            }}
            type="footer"
          />
        </>
      )}
    </FooterContainer>
  );
};
