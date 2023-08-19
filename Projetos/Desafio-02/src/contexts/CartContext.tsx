import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [productsCart, setProductsCart] = useState([]);

  return (
    <CartContext.Provider value={{ productsCart, setProductsCart }}>
      {children}
    </CartContext.Provider>
  );
}