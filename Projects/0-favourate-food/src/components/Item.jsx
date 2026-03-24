
import styles from "./Item.module.css";

function Item({ fruit, handleBuyButtonClicked, activeItem }) {
  return (
    <li className={`list-group-item ${activeItem && "active"}`}>
      {fruit}
      <button onClick={handleBuyButtonClicked} className={`${styles.button}`}>
        Buy Item
      </button>
    </li>
  );
}

export default Item;
