import { Routes, Route } from "react-router";
import { AppProvider } from "./context/AppProvider";
import { HomePage } from "./components/home/HomePage";
import { Cart } from "./components/cart/Cart";
import { ProductDetails } from "./components/product-details/ProductDetails";
import { SalesProducts } from "./components/sales-section/SalesProducts";

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/sales-products" element={<SalesProducts />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
