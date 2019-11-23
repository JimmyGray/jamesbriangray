import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import React from 'react';

const Container = styled.footer(({ theme }: any) => ({
  height: 80,
  backgroundColor: theme.colors.footer,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.colors.accent,
  fontFamily: theme.t.fontFamily.sfMono,
  ...theme.t.t12,
  ':hover': {
    color: theme.colors.primary.base,
    cursor: 'pointer',
    transition: theme.transition
  }
}));

const Footer = () => (
    <Container>
      Built by James Gray
    </Container>
);

export default withTheme(Footer);
