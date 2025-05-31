import React, { useState } from 'react';
import ModalDialog from '../portals/FxModal';
import styled from 'styled-components';

interface PluginManagerProps {
  isOpen: boolean;
  onClose: () => void;
  availablePlugins: string[]; // plugin names from directory
  activePlugins: string[];
  onAddPlugin: (plugin: string) => void;
  onRemovePlugin: (plugin: string) => void;
}

const PluginManager = ({
  isOpen,
  onClose,
  availablePlugins,
  activePlugins,
  onAddPlugin,
  onRemovePlugin,
}: PluginManagerProps) => {

  // Plugins that are not active (available to add)
  const inactivePlugins = availablePlugins.filter(p => !activePlugins.includes(p));
  
  return (
    <ModalDialog isOpen={isOpen} onClose={() => {onClose()}} title="Plugin Manager">
      <Container>
        <Section>
          <SectionTitle>Available Plugins</SectionTitle>
          {inactivePlugins.length === 0 && <p>All plugins added.</p>}
          <List>
            {inactivePlugins.map(plugin => (
              <ListItem key={plugin}>
                {plugin}
                <Button onClick={() => onAddPlugin(plugin)}>Add</Button>
              </ListItem>
            ))}
          </List>
        </Section>

        <Section>
          <SectionTitle>Active Plugins</SectionTitle>
          {activePlugins.length === 0 && <p>No plugins active.</p>}
          <List>
            {activePlugins.map(plugin => (
              <ListItem key={plugin}>
                {plugin}
                <Button danger onClick={() => onRemovePlugin(plugin)}>Remove</Button>
              </ListItem>
            ))}
          </List>
        </Section>
      </Container>
    </ModalDialog>
  );
};

export default PluginManager;

const Container = styled.div`
  display: flex;
  gap: 40px;
  justify-content: space-between;
`;

const Section = styled.div`
  flex: 1;
`;

const SectionTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 8px;
  border-bottom: 1px solid #555;
  padding-bottom: 4px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid #555;
  border-radius: 4px;
  background: #111;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 6px 10px;
  border-bottom: 1px solid #333;
  color: white;
`;

const Button = styled.button<{ danger?: boolean }>`
  background: ${({ danger }) => (danger ? '#d33' : '#4a90e2')};
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  padding: 4px 10px;
  font-weight: bold;
  &:hover {
    background: ${({ danger }) => (danger ? '#b22' : '#357ab7')};
  }
`;
