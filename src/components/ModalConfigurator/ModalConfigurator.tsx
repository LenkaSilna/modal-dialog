import React from 'react';
import { Modal } from '../Modal/components/Modal/Modal';
import { Button } from '../Modal/components/Button/Button';
import { useModal } from '../Modal/hooks/useModal';
import { ConfigSection } from './components/ConfigSection/ConfigSection';
import { ButtonConfig } from './components/ButtonConfig/ButtonSection';
import { FooterConfig } from './components/FooterConfig/FooterConfig';
import { useModalConfig } from './hooks/useModalConfig';
import {
  Container,
  Content,
  FormGroup,
  Label,
  Input,
  CheckboxLabel,
  ButtonSection,
  Wrapper,
} from './ModalConfigurator.styles';

export const ModalConfigurator: React.FC = () => {
  const { isOpen, open, close } = useModal();
  const { config, updateConfig, addButton, removeButton, resetConfig } = useModalConfig();

  const createModalProps = () => ({
    header: {
      icon: config.showIcon ? <span>🔔</span> : undefined,
      title: config.title,
      buttons: (
        <>
          {config.headerButtons.map((button) => (
            <Button key={button.id} onClick={button.onClick}>
              {button.label}
            </Button>
          ))}
        </>
      ),
    },
    footer: config.showFooter
      ? {
          description: config.footerDescription,
          buttons: (
            <>
              {config.footerButtons.map((button) => (
                <Button
                  key={button.id}
                  onClick={() => {
                    button.onClick();
                    close();
                  }}
                  variant={button.variant}
                >
                  {button.label}
                </Button>
              ))}
            </>
          ),
        }
      : undefined,
  });

  return (
    <Wrapper>
      <Content>
      <ButtonSection>
          <Button onClick={resetConfig} variant="secondary">
            Obnovit výchozí nastavení
          </Button>
          <Button variant="primary" onClick={open}>
            Zobrazit modal
          </Button>
        </ButtonSection>
        <ConfigSection title="Nastavení hlavičky">
          <Container>
            <FormGroup>
              <CheckboxLabel>
                <input
                  type="checkbox"
                  checked={config.showIcon}
                  onChange={(e) => updateConfig({ showIcon: e.target.checked })}
                />
                <span>Zobrazit ikonu</span>
              </CheckboxLabel>
            </FormGroup>

            <FormGroup>
              <Label>
                <span>Titulek</span>
                <Input
                  type="text"
                  value={config.title}
                  onChange={(e) => updateConfig({ title: e.target.value })}
                />
              </Label>
            </FormGroup>

            <ButtonConfig
              buttons={config.headerButtons}
              onAdd={() => addButton('header')}
              onRemove={(id) => removeButton('header', id)}
              onChange={(id, value) => {
                updateConfig({
                  headerButtons: config.headerButtons.map((button) =>
                    button.id === id ? { ...button, label: value } : button,
                  ),
                });
              }}
              type="header"
            />
          </Container>
        </ConfigSection>

        <ConfigSection title="Obsah">
          <Container>
            <FormGroup>
              <Label>
                <span>Nadpis obsahu</span>
                <Input
                  type="text"
                  value={config.content.title}
                  onChange={(e) =>
                    updateConfig({
                      content: { ...config.content, title: e.target.value },
                    })
                  }
                />
              </Label>
            </FormGroup>
            <FormGroup>
              <Label>
                <span>Popis</span>
                <textarea
                  value={config.content.description}
                  onChange={(e) =>
                    updateConfig({
                      content: { ...config.content, description: e.target.value },
                    })
                  }
                />
              </Label>
            </FormGroup>
          </Container>
        </ConfigSection>

        <ConfigSection title="Nastavení patičky">
          <FooterConfig
            config={config}
            onConfigChange={updateConfig}
            onAddButton={() => addButton('footer')}
            onRemoveButton={(id) => removeButton('footer', id)}
          />
        </ConfigSection>
      </Content>

      <Modal isOpen={isOpen} onClose={close} {...createModalProps()}>
        <div>
          <h3>{config.content.title}</h3>
          <p>{config.content.description}</p>
        </div>
      </Modal>
    </Wrapper>
  );
};
