import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Data } from './components/Data';
import { store } from './store'
import { Provider } from 'react-redux'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { productsApi } from './features/apiSlice';
import { Home } from './Pages/home';

function App() {
  return (
    <Provider store={store}>
      <ApiProvider api={productsApi}>
      {/* <div>
        <Data />
      </div> */}
      <Home />
      </ApiProvider>
      
    </Provider>
  );
}

export default App;
