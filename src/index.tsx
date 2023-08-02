import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styled,{ createGlobalStyle, ThemeProvider } from "styled-components";
import {Provider} from "react-redux";
import {store} from "./store";
import {theme} from "./themes"

// export const theme = {
//   colors: {},
//   media: {
//     phone: "(max-width: 425px)",
//     tablet: "(max-width: 768px) and (min-width: 425px)"
//   }
// }

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Global />
      <App />
    </Provider>
  </ThemeProvider>

);
