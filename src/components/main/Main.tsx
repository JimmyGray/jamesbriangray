import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import React from 'react';
import { mq } from '../../../theme/template/theme';
import { About } from '../about/About';
import Hero from '../hero/Hero';
import { Where } from '../where/Where';

export interface MainProps {}

const Container = styled.div(({ theme }: any) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.colors.background,
  paddingTop: '5%',
  paddingLeft: theme.spacing.xLarge,
  paddingRight: theme.spacing.xLarge,
  height: 2000,
  [mq.medium]: {
    paddingLeft: theme.spacing.xLarge * 3,
    paddingRight: theme.spacing.xLarge * 3
  }
}));

const Main = ({}: MainProps) => (
    <Container>
      <Hero/>
      <About/>
      <Where/>
    </Container>
);

export default withTheme(Main);
