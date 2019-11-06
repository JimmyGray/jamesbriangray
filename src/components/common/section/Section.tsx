import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import React from 'react';

export interface SectionProps {
  children?: JSX.Element;
  title: string;
}

const Container = styled.div(({ theme }: any) => ({
  marginTop: theme.spacing.xxLarge,
  marginBottom: theme.spacing.xxLarge
}));

const Title = styled.h3(({ theme }: any) => ({
  marginBottom: theme.spacing.large,
  color: theme.colors.white
}));

const Section = ({ children, title }: SectionProps) => (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
);

export default withTheme(Section);
