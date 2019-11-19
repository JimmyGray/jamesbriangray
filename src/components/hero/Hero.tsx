import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import React from 'react';
import { mq } from '../../../theme/theme';
import { Button } from '../common/button/Button';

const Container = styled.section({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  alignItems: 'flex-start',
  justifyContent: 'center',
  textAlign: 'left'
});

const Text = styled.span(({ theme }: any) => ({
  marginTop: theme.spacing.small,
  ...theme.t.t16,
  fontFamily: theme.t.fontFamily.sfMono,
  color: theme.colors.primary.light,
  lineHeight: '3rem',
  [mq.small]: {
    ...theme.t.t18
  }
}));

const White = styled(Text)(({ theme }: any) => ({
  color: theme.colors.white
}));

const ContactButton = styled(Button)(({ theme }: any) => ({
  marginTop: theme.spacing.large,
  height: 60,
  width: 150
}));

const Hero = () => (
    <Container>
      <h1>
        <Text>
          Hi! I'm  <White>James Gray</White> I build things for the web.
        </Text>
      </h1>
      <Text>I'm a <White>software engineer</White> based in London, specializing in building
        exceptional, high-quality websites and applications.</Text>
      <ContactButton label={ 'Contact Me' }/>
    </Container>
);

export default withTheme(Hero);
