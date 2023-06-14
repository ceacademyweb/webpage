import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Blank from './pages/Blank';
import './scss/styles.scss';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './queryClient';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {/* <App /> */}
        <Blank />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
