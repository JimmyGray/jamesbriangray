import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import React from 'react';
import { mq } from '../../../theme/template/theme';
import { isNavVisible } from '../common/hooks/isNavVisible';
import { Switch } from '../switch/Switch';
import { Burger } from './burger/Burger';

export interface NavProps {
  open: boolean;
  onClick: () => void;
}

const Container = styled.nav(({ theme, top }: any) => ({
  position: 'fixed',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  padding: `0 ${theme.spacing.xLarge}px`,
  transition: theme.transition,
  height: top ? 120 : 80,
  zIndex: 1
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
  color: theme.colors.accent,
  margin: 0,
  display: 'inline-block',
  marginRight: theme.spacing.large,
  ...theme.t.t14,
  fontFamily: theme.t.fontFamily.sfMono,
  cursor: 'pointer',
  transition: theme.transition,
  ':hover': {
    color: theme.colors.primary.base
  }
}));

const ItemNumber = styled.span(({ theme }: any) => ({
  color: theme.colors.primary.base,
  marginRight: theme.spacing.small,
  fontFamily: theme.t.fontFamily.sfMono
}));

const Name = styled.span(({ theme }: any) => ({
  color: theme.colors.primary.base,
  marginRight: theme.spacing.small,
  fontFamily: theme.t.fontFamily.sfMono,
  alignItems: 'center',
  display: 'flex',
  ...theme.t.t32
}));

const MobileSwitch = styled.div(({
  display: 'flex',
  [mq.small]: {
    display: 'none'
  }
}));

const Nav = ({ open, onClick }: NavProps) => {
  const { pos } = isNavVisible();
  const top: boolean = pos === 0;
  return (
      <Container top={top}>
        <Burger open={open} setOpen={onClick} />
        <Name>
          JG
        </Name>
        <MobileSwitch>
          <Switch/>
        </MobileSwitch>
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
          <Switch/>
        </Menu>
      </Container>
  );
};

export default withTheme(Nav);
