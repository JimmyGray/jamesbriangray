import React from 'react';
import styled from '@emotion/styled';
import { mq } from '../../../../theme/template/theme';

export const StyledBurger = styled.div(({ theme, open }: any) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '2rem',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  zIndex: 10,
  [mq.small]: {
    display: 'none'
  },
  span: {
    width: '2.5rem',
    height: '0.3rem',
    background: open ? theme.colors.accent : theme.colors.primary.base,
    borderRadius: 10,
    transition: 'all 0.3s linear',
    position: 'relative',
    transformOrigin: 1,
    ':first-child': {
      transform: open ? 'rotate(45deg)' : 'rotate(0)',
      marginBottom: theme.spacing.xSmall
    },
    ':nth-child(2)': {
      opacity: open ? '0' : '1',
      transform: open ? 'translateX(20px)' : 'translateX(0)',
      marginBottom: theme.spacing.xSmall
    },
    ':nth-child(3)': {
      transform: open ? 'rotate(-45deg)' : 'rotate(0)',
      marginBottom: theme.spacing.xSmall
    }
  }
}));

export const Burger = ({ open, setOpen, ...props }) => {
  const isExpanded = open ? true : false;
  return (
      <StyledBurger aria-label="Toggle menu" aria-expanded={isExpanded} open={open}
                    onClick={() => setOpen(!open)} {...props}>
        <span/>
        <span/>
        <span/>
      </StyledBurger>
  );
};