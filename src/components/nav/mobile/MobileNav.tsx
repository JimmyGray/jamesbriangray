import styled from '@emotion/styled';
import React from 'react';
import { MdMenu } from 'react-icons/md';
import { breakpoints, mq } from '../../../../theme/template/theme';
import { Fade } from '../../common/fade/Fade';
import { useMedia } from 'react-use';

const Container = styled.div({
  alignItems: 'center',
  cursor: 'pointer',
  display: 'flex'
});

const Menu = styled(MdMenu)(({ theme }: any) => ({
  color: theme.colors.primary.base,
  ...theme.t.t32
}));

export const MobileNav = () => {
  const isDesktop = useMedia(`(min-width: ${breakpoints.small}px)`);
  if (isDesktop) return null;
  return (
      <Container>
        <Menu/>
      </Container>
  );
};