import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./menu-card.style.css";

const MenuCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);

  return (
    <li className="dish-card additive" onClick={addProductToCart}>
      <div className="dish-container">
        <div className="dish-info-container">
          <div className="dish-info">
            <h4 className="dish-name">{product.name}</h4>
            <p className="dish-description">{product.ingredients}</p>
          </div>
          <picture>
            <div
              className="photo"
              style={{ backgroundImage: `url(${product.imageUrl})` }}
            ></div>
          </picture>
        </div>
        <div className="price-tag-container">
          <span className="price">{product.price}TL</span>
        </div>
      </div>
    </li>
  );
};
export default MenuCard;
