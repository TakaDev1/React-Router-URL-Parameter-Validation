import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Navigation from "./components/Navigation";
import ProductParams from "./pages/ProductParams";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <h1>React-Router-URL-Parameter-Validation</h1>
          <Navigation />
          <Routes>
            <Route path="/product/:id" element={<ProductParams />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
