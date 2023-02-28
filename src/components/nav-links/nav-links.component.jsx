import { Fragment } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../cart-icon/cart-icon.component";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../utils/firebase/firebase.utils";
const NavLinks = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <Fragment>
      <li className="btm_line">
        <Link className="nav_link links" to="/menu">
          <span id="one" className="nav_link links">
            MENÜ
          </span>
        </Link>
      </li>
      <li className="btm_line">
        <Link className="nav_link links" to="/branch">
          <span className="nav_link links line_link">ŞÜBELERİMİZ</span>
        </Link>
      </li>
      <li className="btm_line">
        <Link className="nav_link links" to="/about">
          <span className="nav_link links line_link">HAKKIMIZDA</span>
        </Link>
      </li>
      <li className="btm_line">
        {currentUser ? (
          <span className="nav_link links line_link" onClick={signOutUser}>
            Çıkış
          </span>
        ) : (
          <Link className="nav_link links" to="/auth">
            <span className="nav_link links line_link">GİRİŞ</span>
          </Link>
        )}
      </li>
      <li className="btm_line">
        <CartIcon />
      </li>
    </Fragment>
  );
};
export default NavLinks;
