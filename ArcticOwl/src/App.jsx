import { Routes, Route } from "react-router";
import { HomePage } from "./home/HomePage";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
