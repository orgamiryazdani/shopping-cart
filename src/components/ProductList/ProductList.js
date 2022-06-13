import React from "react";
import Product from "../product/product";
import { useProducts, useProductsAction } from "../Providers/ProductsProviders";
import style from "./productList.module.css";

const ProductList = () => {
  const products = useProducts();
  const dispatch = useProductsAction();

  const renderProduct = () => {
    if (products.length === 0) return <h2>there is no product in cart</h2>;

    return products.map((product, index) => {
      return (
        <Product
          product={product}
          key={index}
          onDelete={() => dispatch({ type: "remove", id: product.id })}
          onPlus={() => dispatch({ type: "increment", id: product.id })}
          onMinus={() => dispatch({ type: "decrement", id: product.id })}
        />
      );
    });
  };

  return (
    <div className={style.productList}>
      {!products.length && <h1>go to shoppings</h1>}
      {renderProduct()}
    </div>
  );
};

export default ProductList;
