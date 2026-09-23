import React from "react";
import { useParams } from "react-router";
import ProdcutsData from "../data/ProductsData";

const ProductParams = () => {
  const { id } = useParams();

  const productId = parseInt(id ?? "", 10);
  console.log(productId);

  if (Number.isNaN(productId)) {
    return <p className="text-red-600">Invalid Product ID</p>;
  }

  const product = ProdcutsData[productId];

  return (
    <div className="text-white">
      {product ? (
        <div>
          {" "}
          <p>商品名: {product.name}</p>
          <p>金額: {product.price.toLocaleString()}円</p>
        </div>
      ) : (
        <p>Prodcut Not Found</p>
      )}
    </div>
  );
};

export default ProductParams;
