import { useContext, useState } from "react";
import FormInput from "../../form-input/form-input.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import "./sign-in.style.scss";
import { UserContext } from "../../../contexts/user.context";
import Button from "../../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const { setCurrentUser } = useContext(UserContext);
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Devam etmek için giriş yap</h2>
      <span>E-posta ile giriş yap</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="E-posta"
          required
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        ></FormInput>

        <FormInput
          label="Şifre"
          required
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        ></FormInput>
        <div className="buttons-container">
          <Button type="submit">Giriş</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google ile giriş
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
