import { useEffect, useState } from "react";
import { useProductsAction } from "../../components/Providers/ProductsProviders";
import styles from "./filter.module.css";
import SelectComponent from "../../common/Select/Select";
import SearchBar from "../../common/Search/Search";
import { CgMenu } from "react-icons/cg";

const filterOptions = [
  { value: "", label: "All" },
  { value: "Xs", label: "Xs" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];

const sortOptions = [
  { value: "highest", label: "highest" },
  { value: "lowest", label: "lowest" },
];

const Filter = () => {
  const dispatch = useProductsAction();
  const [filter, setFilter] = useState({ value: "", label: "All" });
  const [sort, setSort] = useState("");
  const [menu, setMenu] = useState(true);

  useEffect(() => {
    dispatch({ type: "filter", selectedOption: filter });
  }, []);

  const filterHandler = (selectedOption) => {
    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption: sort });
    setFilter(selectedOption);
  };

  const sortHandler = (selectedOption) => {
    setSort(selectedOption);
    dispatch({ type: "sort", selectedOption });
  };

  return (
    <section>
      <div className={styles.obj}>
        <div
          onClick={() => setMenu(!menu)}
          className={styles.menu}
        >
          <CgMenu />
        </div>
        <div className={`${menu === true ? styles.itemsNone : styles.items}`}>
          <div>
            <SearchBar filter={filter} />
          </div>
          <div>
            <SelectComponent
              placeholder="filter by size"
              value={filter}
              onChange={filterHandler}
              options={filterOptions}
            />
          </div>
          <div>
            <SelectComponent
              placeholder="filter by price"
              value={sort}
              onChange={sortHandler}
              options={sortOptions}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
