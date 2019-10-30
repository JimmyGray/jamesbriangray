import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import App from 'next/app';
import React from 'react';
import { globalStyles } from '../theme/global';
import { theme } from '../theme/theme';

class MainApp extends App<any> {

  render(): any {
    const { Component, pageProps } = this.props;
    return (
          <ThemeProvider theme={theme}>
            <Global styles={globalStyles} />
              <Component {...pageProps} />
          </ThemeProvider>
    );
  }
}

export default MainApp;
