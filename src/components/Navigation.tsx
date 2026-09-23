import React from "react";
import ProductParams from "../pages/ProductParams";
import { Link } from "react-router";

const Navigation = () => {
  return (
    <div className="w-full">
      <nav className="w-1/2 flex justify-around mx-auto py-10 gap-3">
        <Link
          to="/product/1"
          className="w-1/5 bg-gray-500 text-white rounded-xl py-1 cursor-pointer hover:opacity-80 transition"
        >
          商品 1
        </Link>
        <Link
          to="/product/2"
          className="w-1/5 bg-gray-500 text-white rounded-xl py-1 cursor-pointer hover:opacity-80 transition"
        >
          商品 2
        </Link>
        <Link
          to="/product/3"
          className="w-1/5 bg-gray-500 text-white rounded-xl py-1 cursor-pointer hover:opacity-80 transition"
        >
          商品 3
        </Link>
        <Link
          to="/product/test"
          className="w-1/5 bg-gray-500 text-white rounded-xl py-1 cursor-pointer hover:opacity-80 transition"
        >
          商品 4
        </Link>
        <Link
          to="/product/5"
          className="w-1/5 bg-gray-500 text-white rounded-xl py-1 cursor-pointer hover:opacity-80 transition"
        >
          商品 5
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
