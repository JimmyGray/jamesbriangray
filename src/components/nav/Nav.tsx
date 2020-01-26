import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import React from 'react';
import { mq } from '../../../theme/template/theme';
import { Switch } from '../switch/Switch';

const Container = styled.nav(({ theme }: any) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  transition: theme.transition,
  height: 100,
  zIndex: 1,
  paddingLeft: theme.spacing.xLarge,
  paddingRight: theme.spacing.xLarge,
  [mq.medium]: {
    paddingLeft: theme.spacing.xLarge * 3,
    paddingRight: theme.spacing.xLarge * 3
  }
}));

const Name = styled.span(({ theme }: any) => ({
  color: theme.colors.primary.base,
  fontFamily: theme.t.fontFamily.sfMono,
  alignItems: 'center',
  display: 'flex',
  ...theme.t.t32
}));

const Nav = () => {
  return (
      <Container>
        <Name>
          JG
        </Name>
        <Switch/>
      </Container>
  );
};

export default withTheme(Nav);
