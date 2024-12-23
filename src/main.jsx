import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App.jsx';
import { CssBaseline } from "@mui/material";

createRoot(document.getElementById('root')).render(
    <>
      <CssBaseline/>
      <App />
    </>
)
