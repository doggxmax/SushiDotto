import "./menu.style.css";
import { Fragment, useContext, useEffect, useState } from "react";
import { MenuContext } from "../../../contexts/menu.context";
import Items from "../../items/items.component";
const Menu = () => {
  const { menuMap } = useContext(MenuContext);
  console.log(menuMap);
  return (
    <Fragment>
      <div className="section section--1" id="section--1">
        <div className="section-title" id="menu">
          <h2 className="section-header">MENÜ</h2>
        </div>
        {Object.keys(menuMap).map((title) => {
          const products = menuMap[title];
          return <Items key={title} title={title} products={products}></Items>;
        })}
      </div>
    </Fragment>
  );
};
export default Menu;
