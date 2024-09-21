import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
// import smile from '.src/assets/smile.png'
import './index.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <App />

    </div>
  </StrictMode>,
);
