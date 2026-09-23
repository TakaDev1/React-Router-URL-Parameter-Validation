import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Navigation from "./components/Navigation";
import ProductParams from "./pages/ProductParams";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-800 flex flex-col justify-center items-center">
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
