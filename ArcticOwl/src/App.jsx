import { Routes, Route } from "react-router";
import { useState } from "react";
import { HomePage } from "./components/home/HomePage";
import { Cart } from "./components/cart/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  return (
    <Routes>
      <Route index element={<HomePage addToCart={addToCart} />} />
      <Route path="/cart" element={<Cart cart={cart} />} />
    </Routes>
  );
}

export default App;
