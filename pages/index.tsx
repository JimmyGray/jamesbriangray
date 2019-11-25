import { ThemeProvider } from 'emotion-theming';
import Head from 'next/head';
import React, { useContext, useState } from 'react';
import Footer from '../src/components/footer/Footer';
import Main from '../src/components/main/Main';
import { Menu } from '../src/components/nav/mobile/MobileNav';
import Nav from '../src/components/nav/Nav';
import { AppThemeContext } from '../src/components/provider/AppThemeProvider';

const Home = () => {
  const { theme } = useContext(AppThemeContext);
  const [open, setOpen] = useState(false);
  const handleOnOpen = () => setOpen(!open);
  return (
      <ThemeProvider theme={ theme }>
        <Head>
          <title>Home</title>
          <link rel='icon' href='../public/favicon.ico'/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
                integrity="sha256-WAgYcAck1C1/zEl5sBl5cfyhxtLgKGdpI3oKyJffVRI=" crossOrigin="anonymous"/>
          <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"/>
        </Head>
        <Nav open={open} onClick={handleOnOpen} />
        <Menu open={open} onClick={handleOnOpen} />
        <Main />
        <Footer/>
      </ThemeProvider>
  );
};

export default Home;
