import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import React from 'react';
import { mq } from '../../../theme/theme';

const Container = styled.nav(({ theme }: any) => ({
  position: 'fixed',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  padding: `${ theme.spacing.large }px`
}));

const Name = styled.h5(({ theme }: any) => ({
  color: theme.colors.white,
  margin: 0,
  ...theme.t.t32
}));

const Menu = styled.ol(({ theme }: any) => ({
  display: 'none',
  [mq.small]: {
    color: theme.colors.white,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    ...theme.t.t32
  }
}));

const Item = styled.li(({ theme }: any) => ({
  color: theme.colors.white,
  margin: 0,
  display: 'inline-block',
  marginRight: theme.spacing.large,
  ...theme.t.t14,
  fontFamily: theme.t.fontFamily.sfMono,
  cursor: 'pointer',
  transition: 'color 0.5s ease',
  ':hover': {
    color: theme.colors.group1.base
  }
}));

const ItemNumber = styled.span(({ theme }: any) => ({
  color: theme.colors.group1.base,
  marginRight: theme.spacing.small,
  fontFamily: theme.t.fontFamily.sfMono
}));

const Nav = () => (
    <Container>
      <Name>JG</Name>
      <Menu>
        <Item>
          <ItemNumber>01.</ItemNumber>About
        </Item>
        <Item>
          <ItemNumber>02.</ItemNumber>Experience
        </Item>
        <Item>
          <ItemNumber>03.</ItemNumber>Work
        </Item>
        <Item>
          <ItemNumber>04.</ItemNumber>Contact
        </Item>
      </Menu>
    </Container>
);

export default withTheme(Nav);
