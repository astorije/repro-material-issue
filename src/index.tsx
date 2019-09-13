import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import { StylesProvider } from '@material-ui/styles';

// Thanks to injectFirst, this button should have a red background but does not
export const App = () => (
  <StylesProvider injectFirst>
    <Button variant="contained">Hello</Button>
  </StylesProvider>
);

const root = document.getElementById('root');

ReactDOM.render(<App />, root);
