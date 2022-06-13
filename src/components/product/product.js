import style from "./product.module.css";
import { MdDelete } from "react-icons/md";
import { BiMinus } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

const Product = ({ product, onDelete, onMinus, onPlus }) => {
  return (
    <div className={style.products}>
      <div className={style.product}>
        <div className={style.about}>
          <div className={style.name}>{product.title}</div>
          <p className={style.price}>{product.price} $</p>
        </div>
        <div className={style.Widget}>
          <span className={style.value}>{product.quantity}</span>
          <button className={style.inc} onClick={onPlus}>
            <AiOutlinePlus />
          </button>
          <button
            onClick={onMinus}
            className={`${style.button} ${
              product.quantity === 1 && style.remove
            }`}
          >
            <BiMinus />
          </button>
            <button onClick={onDelete} className={style.delete}>
              <MdDelete className={style.deleteBtn}/>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
