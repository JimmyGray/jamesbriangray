import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import React from 'react';

export interface SectionProps {
  renderBody: any;
  title: string;
  anchor: string;
  index: number;
}

const Container = styled.section(({ theme }: any) => ({
  marginTop: theme.spacing.xxLarge,
  marginBottom: theme.spacing.xxLarge
}));

const TitleContainer = styled.h3(({ theme }: any) => ({
  marginBottom: theme.spacing.large
}));

const Number = styled.span(({ theme }: any) => ({
  color: theme.colors.primary.base,
  fontFamily: theme.t.fontFamily.sfMono,
  marginRight: theme.spacing.xSmall,
  ...theme.t.t28
}));

const Title = styled.span(({ theme }: any) => ({
  color: theme.colors.accent,
  fontFamily: theme.t.fontFamily.sfMono,
  ...theme.t.t28
}));

const Section = ({ renderBody, title, index, anchor }: SectionProps) => (
    <Container id={anchor}>
      <TitleContainer>
        <Number>0{index + 1}.</Number>
        <Title>{title}</Title>
      </TitleContainer>
      {renderBody()}
    </Container>
);

export default withTheme(Section);
