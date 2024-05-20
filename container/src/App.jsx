import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import { Layout } from './components/Layout';

export const App = () => (
  <>
    <Layout />
  </>
);

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
