import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import { StylesProvider } from '@material-ui/styles';

// As long as there is no newer @material-ui/styles release, this button will be red
export const App = () => (
  <StylesProvider injectFirst>
    <Button variant="contained">Hello</Button>
  </StylesProvider>
);

const root = document.getElementById('root');

ReactDOM.render(<App />, root);
