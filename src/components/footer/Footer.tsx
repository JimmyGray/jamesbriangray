import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import React from 'react';

const Container = styled.footer(({ theme }: any) => ({
  height: 80,
  backgroundColor: theme.colors.group4.dark,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.colors.white
}));

const Footer = () => (
    <Container>
      Built by James Gray
    </Container>
);

export default withTheme(Footer);
