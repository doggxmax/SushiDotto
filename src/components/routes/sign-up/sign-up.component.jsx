import FormInput from "../../form-input/form-input.component";
import "./sign-up.style.scss";
import { useContext, useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code == "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Devam etmek için kayıtlı ol</h2>
      <span>E-posta ile kayıtlı ol</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="İsim"
          required
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        ></FormInput>

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
        <FormInput
          label="Şifreyi doğrula"
          required
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
        ></FormInput>
        <Button type="submit">Kayıtlı ol</Button>
      </form>
    </div>
  );
};
export default SignUp;
