import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import React, { useEffect, useState } from 'react';
import { mq } from '../../../theme/theme';

const Container = styled.nav(({ theme, visible, top }: any) => ({
  opacity: visible ? 1 : 0,
  position: 'fixed',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  padding: `0 ${ theme.spacing.xLarge }px`,
  transition: theme.transition,
  height: top ? 120 : 80
}));

const Name = styled.h5(({ theme }: any) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.colors.white,
  margin: 0,
  ...theme.t.t32,
  fontFamily: theme.t.fontFamily.sfMono
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
  transition: theme.transition,
  ':hover': {
    color: theme.colors.primary.hover
  }
}));

const ItemNumber = styled.span(({ theme }: any) => ({
  color: theme.colors.primary.light,
  marginRight: theme.spacing.small,
  fontFamily: theme.t.fontFamily.sfMono
}));

const Nav = () => {
  let [pos, setPos] = useState();
  let [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      let offset = window.pageYOffset;
      setVisible(pos > offset);
      setPos(offset);
    };
    window.addEventListener('scroll', handleScroll);
    return (() => {
      window.removeEventListener('scroll', handleScroll);
    });
  });
  const top: boolean = pos === 0;
  return (
      <Container visible={visible} top={top}>
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
};

export default withTheme(Nav);
