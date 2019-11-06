import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import React from 'react';
import { About } from '../about/About';
import VerticalNav, { OffsetType } from '../common/vertical-nav/VerticalNav';
import Hero from '../hero/Hero';
import { Where } from '../where/Where';

const Container = styled.div(({ theme }: any) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.colors.black,
  paddingLeft: 150,
  paddingRight: 150,
  height: 2000
}));

const Main = () => (
    <Container>
      <VerticalNav offset={50} offsetType={OffsetType.LEFT} children={<div>Social Network</div>}/>
      <VerticalNav offset={50} offsetType={OffsetType.RIGHT} children={<div>E-Mail</div>}/>
      <Hero />
      <About />
      <Where />
    </Container>
);

export default withTheme(Main);
