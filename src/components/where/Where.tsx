import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div({});

const Paragraph = styled.p(({ theme }: any) => ({
    ...theme.t.t12
}));

export const Where = () => {
  return (
      <Container>
        <Paragraph>
          Hey! I'm James, a software engineer based in London. I develop exceptional websites and web apps
        </Paragraph>
      </Container>
  );
};
