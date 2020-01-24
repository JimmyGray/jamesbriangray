import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import React from 'react';
import { mq } from '../../../theme/template/theme';
import Footer from '../footer/Footer';
import Hero from '../hero/Hero';
import Nav from '../nav/Nav';

export interface MainProps {}

const Container = styled.div(({ theme }: any) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.colors.background,
  height: '100vh'
}));

const Main = ({}: MainProps) => {
  return (
      <Container>
        <Nav />
        <Hero/>
        <Footer />
      </Container>
  );
};

export default withTheme(Main);
