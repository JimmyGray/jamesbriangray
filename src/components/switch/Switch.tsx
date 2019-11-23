import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { Fade } from '../common/fade/Fade';
import { AppThemeContext } from '../provider/AppThemeProvider';
import { GiSun, GiMoon } from 'react-icons/gi';

const Container = styled.div({
  width: 20,
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  marginTop: 4
});

const DarkIcon = styled(GiMoon)(({ theme }: any) => ({
  color: theme.colors.primary.base,
  ...theme.t.t28
}));

const LightIcon = styled(GiSun)(({ theme }: any) => ({
  color: theme.colors.group8.two,
  ...theme.t.t28
}));

export const Switch = () => {
  const { dark, onChange } = useContext(AppThemeContext);
  return (
      <Container onClick={onChange}>
        <Fade in={!dark}>
          <DarkIcon/>
        </Fade>
        <Fade in={dark}>
          <LightIcon/>
        </Fade>
      </Container>
  );
};
