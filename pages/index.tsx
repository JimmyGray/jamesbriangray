import Head from 'next/head';
import React from 'react';
import Footer from '../src/components/footer/Footer';
import Main from '../src/components/main/Main';
import Nav from '../src/components/nav/Nav';

const Home = () => (
    <>
      <Head>
        <title>Home</title>
        <link rel='icon' href='../public/favicon.ico'/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
              integrity="sha256-WAgYcAck1C1/zEl5sBl5cfyhxtLgKGdpI3oKyJffVRI=" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
      </Head>
      <Nav/>
      <Main/>
      <Footer/>
    </>
);

export default Home;
