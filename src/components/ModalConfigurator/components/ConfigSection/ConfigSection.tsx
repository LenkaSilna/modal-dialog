import React, { useState } from 'react';
import { Section, Header, Title, Content, Icon } from './ConfigSection.styles';

interface ConfigSectionProps {
  title: string;
  children: React.ReactNode;
}

export const ConfigSection: React.FC<ConfigSectionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Section>
      <Header onClick={() => setIsOpen(!isOpen)}>
        <Title>{title}</Title>
        <Icon $isOpen={isOpen}>▼</Icon>
      </Header>
      <Content $isOpen={isOpen}>{children}</Content>
    </Section>
  );
};
