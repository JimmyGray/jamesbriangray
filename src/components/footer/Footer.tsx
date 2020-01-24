import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import React from 'react';
import { mq } from '../../../theme/template/theme';

const Container = styled.footer(({ theme }: any) => ({
  height: '10vh',
  backgroundColor: theme.colors.footer,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.colors.accent,
  fontFamily: theme.t.fontFamily.sfMono,
  width: '100%',
  ...theme.t.t12,
  textDecoration: 'none',
  ':hover': {
    color: theme.colors.primary.base,
    cursor: 'pointer',
    transition: theme.transition
  }
}));

const Link = styled.a(({ theme }: any) => ({
  color: theme.colors.accent,
  fontFamily: theme.t.fontFamily.sfMono,
  ...theme.t.t12,
  textDecoration: 'none',
  ':hover': {
    color: theme.colors.primary.base,
    cursor: 'pointer',
    transition: theme.transition
  }
}));

const Footer = () => (
    <Container>
      <Link href={'https://github.com/jimmygray'} target={'_blank'}>
        Built by James Gray
      </Link>
    </Container>
);

export default withTheme(Footer);
