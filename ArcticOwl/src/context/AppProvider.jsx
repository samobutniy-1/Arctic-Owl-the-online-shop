import { useState, useEffect } from "react";
import { BurgerContext, CartContext } from "./AppContexts";

export function AppProvider({ children }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [isActive, setIsActive] = useState(null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const toggleButton = (id) => {
    setIsActive((prev) => (prev === id ? null : id));
  };

  return (
    <BurgerContext.Provider value={{ toggleButton, isActive }}>
      <CartContext.Provider
        value={{
          cart,
          setCart,
          addToCart,
          updateQuantity,
          query,
          setQuery,
          activeCategory,
          setActiveCategory,
        }}
      >
        {children}
      </CartContext.Provider>
    </BurgerContext.Provider>
  );
}
