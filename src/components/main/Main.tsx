import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import React from 'react';
import { mq } from '../../../theme/theme';
import { About } from '../about/About';
import Hero from '../hero/Hero';
import { Where } from '../where/Where';

const Container = styled.div(({ theme }: any) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.colors.group4.darker,
  paddingTop: '5%',
  paddingLeft: theme.spacing.xLarge,
  paddingRight: theme.spacing.xLarge,
  height: 2000,
  [mq.medium]: {
    paddingLeft: theme.spacing.xLarge * 3,
    paddingRight: theme.spacing.xLarge * 3
  }
}));

const Main = () => (
    <Container>
      <Hero />
      <About />
      <Where />
    </Container>
);

export default withTheme(Main);
