import React from 'react';
import ReactDOM from 'react-dom/client';
import Stepper from './Stepper'; 
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
  import { Client as Styletron } from "styletron-engine-atomic";
  

const engine = new Styletron();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
    <Stepper />
    </BaseProvider>
    </StyletronProvider>
  </React.StrictMode>
);

