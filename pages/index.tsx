import Head from 'next/head';
import React from 'react';
import styled from '@emotion/styled';

const Title = styled.h1(({ theme }: any) => ({
  color: theme.colors.group6.base,
  ...theme.t.t40
}));

const Home = () => (
    <div>
      <Head>
        <title>Home</title>
        <link rel='icon' href='../public/favicon.ico'/>
      </Head>
      <Title>
        James Brian Gray
      </Title>
    </div>
);

export default Home;
