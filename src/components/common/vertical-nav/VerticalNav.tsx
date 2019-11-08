import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import React from 'react';
import { mq } from '../../../../theme/theme';

const Container = styled.aside(({ theme }: any) => ({
  display: 'none',
  [mq.small]: {
    display: 'block',
    position: 'fixed',
    bottom: 0,
    color: 'white',
    ':after': {
      content: "''",
      display: 'block',
      width: 1,
      height: 90,
      backgroundColor: theme.colors.group4.base,
      margin: '0px auto',
      marginTop: theme.spacing.xLarge
    }
  }
}));

export enum OffsetType {
  LEFT = 'left',
  RIGHT = 'right'
}

export interface VerticalNavProps {
  children?: JSX.Element;
  offsetType: OffsetType;
  offset: number;
}

const VerticalNav = ({ children, offsetType, offset }: VerticalNavProps) => {
  return (
      <Container style={ { [offsetType]: offset } }>
        { children }
      </Container>
  );
};

export default withTheme(VerticalNav);