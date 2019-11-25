import React from 'react';
import styled from '@emotion/styled';

export const StyledMenu = styled.nav(({ theme, open }: any) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  background: theme.colors.menu,
  transform: open ? 'translateX(0)' : 'translateX(-100%)',
  height: '100vh',
  textAlign: 'left',
  padding: '2rem',
  position: 'absolute',
  top: 0,
  left: 0,
  transition: 'transform 0.3s ease-in-out',
  width: '100%',
  a: {
    fontSize: '2rem',
    textTransform: 'uppercase',
    padding: '2rem 0',
    fontWeight: 'bold',
    letterSpacing: '0.5rem',
    color: theme.colors.primary.accent,
    textDecoration: 'none',
    transition: 'color 0.3s linear',
    '&:hover': {
      color: theme.colors.primary.hover
    }
  }
}));

export const Menu = ({ open, ...props }) => {

  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
      <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
        <a href="/" tabIndex={tabIndex}>
          <span aria-hidden="true">💁🏻‍♂️</span>
          About us
        </a>
        <a href="/" tabIndex={tabIndex}>
          <span aria-hidden="true">💸</span>
          Pricing
        </a>
        <a href="/" tabIndex={tabIndex}>
          <span aria-hidden="true">📩</span>
          Contact
        </a>
      </StyledMenu>
  );
};
