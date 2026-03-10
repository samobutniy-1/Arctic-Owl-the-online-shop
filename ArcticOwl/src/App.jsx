import { Routes, Route } from "react-router";
import { useState } from "react";
import { HomePage } from "./components/home/HomePage";
import { Cart } from "./components/cart/Cart";
import { ProductDetails } from "./components/product-details/ProductDetails";
import { SalesProducts } from "./components/sales-section/SalesProducts";

function App() {
  const [query, setQuery] = useState("");

  // Initialise cart from localStorage to persist state across sessions
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Categories control
  const [isActive, setIsActive] = useState(null);

  // Toggle active dropdown by id — collapses if the same id is clicked again
  const toggleButton = (id) => {
    setIsActive((prev) => (prev === id ? null : id));
  };

  // Upsert product into cart — increments quantity if already present
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

  // Enforce minimum quantity of 1 to prevent invalid cart state
  function updateQuantity(id, newQuantity) {
    if (newQuantity < 1) return;
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  }

  return (
    <Routes>
      <Route
        index
        element={
          <HomePage
            query={query}
            setQuery={setQuery}
            cart={cart}
            addToCart={addToCart}
            toggleButton={toggleButton}
            isActive={isActive}
          />
        }
      />
      <Route
        path="/cart"
        element={
          <Cart
            query={query}
            setQuery={setQuery}
            cart={cart}
            setCart={setCart}
            updateQuantity={updateQuantity}
            toggleButton={toggleButton}
            isActive={isActive}
          />
        }
      />
      <Route
        path="/product-details/:id"
        element={
          <ProductDetails
            cart={cart}
            toggleButton={toggleButton}
            isActive={isActive}
            addToCart={addToCart}
          />
        }
      />
      <Route
        path="/sales-products"
        element={
          <SalesProducts
            addToCart={addToCart}
            cart={cart}
            toggleButton={toggleButton}
            isActive={isActive}
          />
        }
      />
    </Routes>
  );
}

export default App;
