import React from 'react';
import ReactDOM from 'react-dom';
import "./index.scss";
import App from "./App";
import { ConfigContextProvider } from './context/config';
import { ModalContextProvider } from './context/modal';

ReactDOM.render(
  <React.StrictMode>
    <ConfigContextProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </ConfigContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
