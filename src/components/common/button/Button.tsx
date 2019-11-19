import styled from '@emotion/styled';
import React from 'react';

const Container = styled.button(({ theme }: any) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing.small,
  border: `2px solid ${ theme.main.primary.light }`,
  backgroundColor: theme.colors.group4.darker,
  color: theme.main.primary.light,
  cursor: 'pointer',
  transition: 'all 0.5s ease',
  fontFamily: theme.t.fontFamily.sfMono,
  outline: 'none',
    ...theme.t.t14,
  ':hover,:focus': {
    backgroundColor: theme.main.primary.light,
    color: theme.colors.group4.darker
  }
}));

export interface ButtonProps {
  label: string;
  className?: string;
}

export const Button = ({ label, className }: ButtonProps) => (
    <Container className={ className }>
      { label }
    </Container>
);