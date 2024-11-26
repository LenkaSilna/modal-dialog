import React from 'react';
import { ButtonContainer, ButtonControls, Input, Select } from './ButtonSection.styles';
import { Button } from '../../../Modal/components/Button/Button';
import { HeaderButton, FooterButton } from '../../types/ConfiguratorTypes';

interface ButtonConfigProps {
  buttons: HeaderButton[] | FooterButton[];
  onAdd: () => void;
  onRemove: (id: string) => void;
  onChange: (id: string, value: string) => void;
  onVariantChange?: (id: string, variant: 'primary' | 'secondary') => void;
  type: 'header' | 'footer';
}

export const ButtonConfig: React.FC<ButtonConfigProps> = ({
  buttons,
  onAdd,
  onRemove,
  onChange,
  onVariantChange,
  type,
}) => {
  return (
    <div>
      <ButtonControls>
        <span>Tlačítka v {type === 'header' ? 'hlavičce' : 'patičce'}</span>
        <Button onClick={onAdd}>Přidat tlačítko</Button>
      </ButtonControls>
      <div>
        {buttons.map((button) => (
          <ButtonContainer key={button.id}>
            <Input
              type="text"
              value={'label' in button ? button.label : ''}
              onChange={(e) => onChange(button.id, e.target.value)}
              placeholder="Text tlačítka"
            />
            {type === 'footer' && onVariantChange && 'variant' in button && (
              <Select
                value={button.variant || 'secondary'}
                onChange={(e) =>
                  onVariantChange(button.id, e.target.value as 'primary' | 'secondary')
                }
              >
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
              </Select>
            )}
            <Button onClick={() => onRemove(button.id)}>Odstranit</Button>
          </ButtonContainer>
        ))}
      </div>
    </div>
  );
};
