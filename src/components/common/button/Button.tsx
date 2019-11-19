import styled from '@emotion/styled';
import React from 'react';

const Container = styled.button(({ theme }: any) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing.small,
  border: `2px solid ${ theme.colors.primary.light }`,
  backgroundColor: theme.colors.group4.dark,
  color: theme.colors.primary.light,
  cursor: 'pointer',
  transition: theme.transition,
  fontFamily: theme.t.fontFamily.sfMono,
  outline: 'none',
    ...theme.t.t14,
  ':hover,:focus': {
    backgroundColor: theme.colors.primary.hover,
    color: theme.colors.group4.dark
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