import React from 'react';
import Switch from 'react-switch';
import { useTheme } from 'styled-components';
import { shade } from 'polished';
import { useSwitchTheme } from 'src/hooks';
import { Container } from './SwitcherTheme.style';

const SwitcherTheme: React.FC = () => {
  const { theme, toggleTheme } = useSwitchTheme();
  const { colors } = useTheme();

  return (
    <Container>
      <Switch
        onChange={toggleTheme}
        checked={theme?.title === 'light'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.2, colors.main)}
        onColor={colors.main}
      />
    </Container>
  );
};

export default SwitcherTheme;
