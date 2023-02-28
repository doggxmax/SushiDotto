import SignIn from "../sign-in/sign-in.component";
import SignUp from "../sign-up/sign-up.component";
import "./authentication.style.scss";
import { Fragment, useContext } from "react";
import { UserContext } from "../../../contexts/user.context";
import Footer from "../../footer/footer.component";

const Authentication = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  return (
    <Fragment>
      <div className="authentication-container">
        <div>
          <SignIn />
        </div>
        <div>
          <SignUp />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};
export default Authentication;
