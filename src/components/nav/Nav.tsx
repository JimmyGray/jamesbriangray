import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import React from 'react';

const Container = styled.nav(({ theme }: any) => ({
  position: 'fixed',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'space-between',
  justifyContent: 'space-between',
  paddingLeft: theme.spacing.small,
  top: 0,
  left: 0,
}));

const Name = styled.h5(({ theme }: any) => ({
  color: theme.colors.white,
  margin: 0,
  ...theme.t.t32
}));

const Menu = styled.ul(({ theme }: any) => ({
  color: theme.colors.white,
  margin: 0,
  ...theme.t.t32
}));

const Item = styled.li(({ theme }: any) => ({
  color: theme.colors.white,
  margin: 0,
  listStyleType: 'none',
  display: 'inline-block',
  ...theme.t.t16
}));

const Nav = () => (
    <Container>
      <Name>JG</Name>
      <Menu>
        <Item>About</Item>
        <Item>Experience</Item>
        <Item>Work</Item>
        <Item>Contact</Item>
      </Menu>
    </Container>
);

export default withTheme(Nav);
