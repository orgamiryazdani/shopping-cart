import { useProducts } from "../Providers/ProductsProviders";
import styles from "./NavBar.module.css";
import { HiOutlineShoppingCart } from "react-icons/hi";

const NavBar = () => {
  const products = useProducts();
  const totalItems = products.filter((p) => p.quantity > 0).length;
  return (
    <header className={styles.navBar}>
      <div className={styles.nav}>
        <p>shopping</p>
        <span>
          <HiOutlineShoppingCart /> <h1>{totalItems}</h1>
        </span>
      </div>
    </header>
  );
};

export default NavBar;
