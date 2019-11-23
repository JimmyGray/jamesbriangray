import styled from '@emotion/styled';
import React from 'react';

const Container = styled.button(({ theme }: any) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing.small,
  backgroundColor: theme.colors.primary.base,
  color: theme.colors.primary.accent,
  border: 'none',
  cursor: 'pointer',
  transition: theme.transition,
  fontFamily: theme.t.fontFamily.sfMono,
  outline: 'none',
    ...theme.t.t14,
  ':hover': {
    backgroundColor: theme.colors.primary.accent,
    color: theme.colors.primary.base
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