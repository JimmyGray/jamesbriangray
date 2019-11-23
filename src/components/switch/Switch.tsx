import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { AppThemeContext } from '../provider/AppThemeProvider';

const Container = styled.div({
  width: 20,
  display: 'flex',
  alignItems: 'center'
});

export const Switch = () => {
  const { dark, onChange } = useContext(AppThemeContext);
  return (
      <Container onClick={onChange}>
        Switch
        {dark ? 'Checked' : 'Un-Checked'}
      </Container>
  );
};
