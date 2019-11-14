import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import React from 'react';
import { mq } from '../../../theme/theme';
import { Button } from '../common/button/Button';

const Container = styled.section(({ theme }: any) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  alignItems: 'flex-start',
  justifyContent: 'center',
  textAlign: 'left',
  paddingTop: theme.spacing.xxLarge,
  [mq.small]: {
    justifyContent: 'flex-start'
  }
}));

const Introduction = styled.h1(({ theme }: any) => ({
  margin: 0,
  ...theme.t.t14,
  fontFamily: theme.t.fontFamily.sfMono,
  color: theme.main.primary.light,
  [mq.small]: {
    ...theme.t.t18,
  }
}));

const Name = styled.h2(({ theme }: any) => ({
  color: theme.colors.white,
  margin: 0,
  marginTop: theme.spacing.xSmall,
    ...theme.t.t56,
  fontFamily: theme.t.fontFamily.roboto,
  [mq.small]: {
    ...theme.t.t80,
  }
}));

const Role = styled.h3(({ theme }: any) => ({
  color: theme.colors.group4.light,
  margin: 0,
  ...theme.t.t56,
  fontFamily: theme.t.fontFamily.roboto,
  [mq.small]: {
    ...theme.t.t80,
  }
}));

const Bio = styled.p(({ theme }: any) => ({
  color: theme.colors.group4.light,
  margin: 0,
  ...theme.t.t14,
  marginTop: theme.spacing.small,
  fontFamily: theme.t.fontFamily.roboto,
  [mq.small]: {
    ...theme.t.t16,
  }
}));

const ContactButton = styled(Button)(({ theme }: any) => ({
  height: 80,
  width: 200,
  marginTop: theme.spacing.xLarge
}));

const Hero = () => (
    <Container>
      <Introduction>Hi, My name is</Introduction>
      <Name> James Gray</Name>
      <Role>I build things for the web.</Role>
      <Bio>I'm a software engineer based in Boston, MA specializing in building (and occasionally designing) exceptional, high-quality websites and applications.</Bio>
      <ContactButton label={'Contact Me'} />
    </Container>
);

export default withTheme(Hero);
