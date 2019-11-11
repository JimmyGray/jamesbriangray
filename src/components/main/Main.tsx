import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import React from 'react';
import { About } from '../about/About';
import Hero from '../hero/Hero';
import { Where } from '../where/Where';

const Container = styled.div(({ theme }: any) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.colors.group4.darker,
  paddingLeft: 150,
  paddingRight: 150,
  height: 2000
}));

const Main = () => (
    <Container>
      <Hero />
      <About />
      <Where />
    </Container>
);

export default withTheme(Main);
