import "./navigation.style.scss";
import { Link, Outlet } from "react-router-dom";
import CartIcon from "../../cart-icon/cart-icon.component";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/user.context";
import { Fragment } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../../contexts/cart.context";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import { IonIcon } from "react-ion-icon";
import { useRef } from "react";
import NavLinks from "../../nav-links/nav-links.component";
const Navigation = () => {
  const { isCartOpen } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(true);
  const onOpenHandler = () => {
    console.log(divRef);
    divRef.current.classList.remove("hidden");
    modalRef.current.classList.remove("hidden");
    setIsOpen(!isOpen);
  };
  const onCloseHandler = () => {
    console.log(divRef);
    divRef.current.classList.add("hidden");
    modalRef.current.classList.add("hidden");
    setIsOpen(!isOpen);
  };
  const divRef = useRef();
  const modalRef = useRef();
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" style={{ border: "none" }}>
          <img
            src={require("../../assets/logo-bigger.jpg")}
            alt="logo"
            style={{ height: "100px", width: "100px" }}
          />
        </Link>
        <div className="nav-links">
          <NavLinks />
        </div>
        <div className="modal" ref={modalRef}>
          <NavLinks />
        </div>
        <div className="overlay" ref={divRef} onClick={onCloseHandler}></div>
        <button className="btn-mobile-nav">
          {isOpen ? (
            <IonIcon
              class="icon-mobile-nav"
              onClick={onOpenHandler}
              name="menu-outline"
            ></IonIcon>
          ) : (
            <IonIcon
              class="icon-mobile-nav"
              onClick={onCloseHandler}
              name="close-outline"
            ></IonIcon>
          )}
        </button>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
