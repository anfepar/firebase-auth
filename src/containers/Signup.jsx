import React, { useState } from "react";
import STRINGS from "../constants/strings";
import firebaseInstance from "../utils/firebase";

const Signup = () => {
  const [userForm, setUserForm] = useState({});
  const handleInputChange = (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegisterUser = (e) => {
    e.preventDefault();
    if (userForm.email && userForm.password && userForm.confirmPassword) {
      if (userForm.password === userForm.confirmPassword) {
        firebaseInstance.createUser(userForm.email, userForm.password);
      }
    }
  };
  return (
    <>
      <section>
        <form>
          <div>
            <label htmlFor="email">{STRINGS.SIGNUP.EMAIL}</label>
            <input
              id="email"
              name="email"
              type="email"
              
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="password">{STRINGS.SIGNUP.PASSWORD}</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">
              {STRINGS.SIGNUP.CONFIRM_PASSWORD}
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={handleInputChange}
            />
          </div>
          <button onClick={handleRegisterUser}>{STRINGS.SIGNUP.ACTION}</button>
        </form>
      </section>
    </>
  );
};
export default Signup;
