import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import React from 'react';

const Container = styled.section({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'left'
});

const Introduction = styled.h1(({ theme }: any) => ({
  color: theme.colors.white,
  margin: 0,
  ...theme.t.t28,
  fontFamily: theme.t.fontFamily.sfMono
}));

const Name = styled.h2(({ theme }: any) => ({
  color: theme.colors.white,
  margin: 0,
    ...theme.t.t40
}));

const Role = styled.h3(({ theme }: any) => ({
  color: theme.colors.white,
  margin: 0,
  ...theme.t.t28
}));

const Bio = styled.p(({ theme }: any) => ({
  color: theme.colors.white,
  margin: 0,
  ...theme.t.t28
}));

const Hero = () => (
    <Container>
      <Introduction>Hi, My name is</Introduction>
      <Name> James Brian Gray</Name>
      <Role>Software Engineer</Role>
      <Bio>I'm a software engineer based in Boston, MA specializing in building (and occasionally designing) exceptional, high-quality websites and applications.</Bio>
    </Container>
);

export default withTheme(Hero);
