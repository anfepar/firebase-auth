import React from "react";
import STRINGS from "../constants/strings";

const Login = () => {
  return (
    <section>
      <form>
        <div>
          <label htmlFor="username"></label>
          <input id="username" type="text" />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input id="password" type="password" />
        </div>
        <button>{STRINGS.LOGIN}</button>
      </form>
    </section>
  );
};
export default Login;
