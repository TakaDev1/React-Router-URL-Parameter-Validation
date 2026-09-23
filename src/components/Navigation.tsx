import React from "react";
import ProductParams from "../pages/ProductParams";
import { Link } from "react-router";

const Navigation = () => {
  return (
    <div>
      <nav>
        <Link to="/product/1">商品 1</Link>
        <Link to="/product/2">商品 2</Link>
        <Link to="/product/3">商品 3</Link>
        <Link to="/product/test">商品 4</Link>
        <Link to="/product/5">商品 5</Link>
      </nav>
    </div>
  );
};

export default Navigation;
