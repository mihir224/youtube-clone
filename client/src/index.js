import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './redux/store';
import {disableReactDevTools} from '@fvilers/disable-react-devtools';

if(process.env.NODE_ENV==='production'){
  disableReactDevTools()
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>  
  <PersistGate loading={null} persistor={persistor}>
  <App />
  </PersistGate>
  </Provider>
  
);
