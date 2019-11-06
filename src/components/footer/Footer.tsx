import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import React from 'react';

const Container = styled.footer(({ theme }: any) => ({
  height: 100,
  backgroundColor: theme.colors.group4.base,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.colors.white
}));

const Footer = () => (
    <Container>
      Footer
    </Container>
);

export default withTheme(Footer);
