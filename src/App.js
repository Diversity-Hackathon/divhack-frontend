// REACT IMPORT
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

// COMPONENT IMPORT
import C from "./components";

// SASS IMPORT
import "./styles/app.scss";

function App({ store }) {
  return (
    <ReduxProvider store={store}>
      {/* <C.Modules.Input />
      <C.Modules.Results /> */}
      <C.Modules.Login />
    </ReduxProvider>    
  );
}

export default App;
