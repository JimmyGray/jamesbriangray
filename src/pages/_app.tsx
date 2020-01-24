import { Global } from '@emotion/core';
import App from 'next/app';
import React from 'react';
import { AppThemeProvider } from '../components/provider/AppThemeProvider';
import { globalStyles } from '../../theme/template/global';

class MainApp extends App<any> {
  render(): any {
    const { Component, pageProps } = this.props;
    return (
        <AppThemeProvider>
          <>
            <Global styles={ globalStyles }/>
            <Component { ...pageProps } />
          </>
        </AppThemeProvider>
    );
  }
}

export default MainApp;
