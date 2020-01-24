import { ThemeProvider } from 'emotion-theming';
import Head from 'next/head';
import React, { useContext } from 'react';
import Main from '../components/main/Main';
import { AppThemeContext } from '../components/provider/AppThemeProvider';

const Home = () => {
  const { theme } = useContext(AppThemeContext);
  return (
      <ThemeProvider theme={ theme }>
        <Head>
          <title>James Gray Software Engineer</title>
          <meta name="description" content={'James Gray Software Engineer portfolio website!'} />
          <link rel='icon' href='../../static/favicon.ico'/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
                integrity="sha256-WAgYcAck1C1/zEl5sBl5cfyhxtLgKGdpI3oKyJffVRI=" crossOrigin="anonymous"/>
          <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"/>
        </Head>
        <Main />
      </ThemeProvider>
  );
};

export default Home;
