import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthContextProvider } from './context/AuthContext.jsx';
import { ProductProvider } from './context/ProductContext.jsx';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <ProductProvider>
      <App />
      </ProductProvider>
    </AuthContextProvider>
  </StrictMode>,
);
