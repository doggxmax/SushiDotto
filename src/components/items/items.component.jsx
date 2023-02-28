import MenuCard from "../menu-card/menu-card.component";
import "./items.style.css";

const Items = ({ title, products }) => {
  return (
    <div className="dish-section">
      <div className="dish-category-section">
        <h2 className="dish-category-title">{title.toUpperCase()}</h2>
        <ul className="dish-list">
          {products?.map((product) => {
            return <MenuCard key={product.id} product={product} />;
          })}
        </ul>
      </div>
    </div>
  );
};
export default Items;
