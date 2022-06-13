import React from "react";
import "./app.css";
import ProductList from "./components/ProductList/ProductList";
import Filter from "./components/Filter/Filter";
import NavBar from "./components/NavBar/NavBar";
import wrapper from "./components/hoc/Wrapper";
import ProductsProvider from "./components/Providers/ProductsProviders";

export const UserContext = React.createContext();

const App = () => {
  return (
    <>
      <ProductsProvider>
        <NavBar />
        <Filter />
        <ProductList />
      </ProductsProvider>
    </>
  );
};

export default wrapper(App, "container");
