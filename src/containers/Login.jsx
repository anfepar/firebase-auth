import React, { useState } from "react";
import ImageBackground from "../components/ImageBackground";
import STRINGS from "../constants/strings";
import firebaseInstance from "../utils/firebase";

const Login = () => {
  const [userForm, setUserForm] = useState({});
  const handleInputChange = (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginUser = (e) => {
    e.preventDefault();
    if (userForm.email && userForm.password) {
      firebaseInstance.loginUser(userForm.email, userForm.password);
    }
  };

  const handleLoginWithGoogle = (e) => {
    e.preventDefault();
    firebaseInstance.loginWithGoogle();
  };

  return (
    <section>
      <ImageBackground />
      <form>
        <div>
          <label htmlFor="email"></label>
          <input
            onChange={handleInputChange}
            name="email"
            id="email"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            onChange={handleInputChange}
            name="password"
            id="password"
            type="password"
          />
        </div>
        <button onClick={handleLoginUser}>{STRINGS.LOGIN.ACTION}</button>
        <button onClick={handleLoginWithGoogle}>{STRINGS.LOGIN.GOOGLE}</button>
      </form>
    </section>
  );
};
export default Login;
