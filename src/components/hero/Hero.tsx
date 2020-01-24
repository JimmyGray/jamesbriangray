import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import React from 'react';
import { mq } from '../../../theme/template/theme';

const Container = styled.section(({ theme }: any) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '80vh',
  alignItems: 'flex-start',
  justifyContent: 'center',
  textAlign: 'left',
  paddingLeft: theme.spacing.xLarge,
  paddingRight: theme.spacing.xLarge,
  [mq.medium]: {
    paddingLeft: theme.spacing.xLarge * 3,
    paddingRight: theme.spacing.xLarge * 3
  }
}));

const Text = styled.span(({ theme }: any) => ({
  marginTop: theme.spacing.small,
  ...theme.t.t16,
  fontFamily: theme.t.fontFamily.sfMono,
  color: theme.colors.primary.base,
  lineHeight: '3rem',
  [mq.small]: {
    ...theme.t.t18
  }
}));

const Accent = styled(Text)(({ theme }: any) => ({
  color: theme.colors.accent
}));

const Hero = () => (
    <Container>
      <h1>
        <Text>
          Hi! I'm  <Accent>James Gray</Accent> I build things for the web.
        </Text>
      </h1>
      <Text>I'm a <Accent>software engineer</Accent> threed in London, specializing in building
        exceptional, high-quality websites and applications.</Text>
    </Container>
);

export default withTheme(Hero);
