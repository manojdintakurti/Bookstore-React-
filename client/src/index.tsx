import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import CategoryContext from './contexts/CategoryContext';
import CartContext from "./contexts/CartContext";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
      <CartContext>
          <CategoryContext>
              <App />
          </CategoryContext>
      </CartContext>
);
reportWebVitals();
