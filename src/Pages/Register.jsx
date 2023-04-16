import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { ReactComponent as ArrowRightIcon } from "../Assets/Images/keyboardArrowRightIcon.svg";
import visibilityIcon from "../Assets/Images/visibilityIcon.svg";
import HomeHeader from "../Layouts/HomeHeader";
const SignUn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <HomeHeader />
      <div className="pageContainer">
        <form>
          <input
            type="name"
            name="name"
            id="name"
            className="nameInput"
            placeholder="name"
          />
          <input
            type="email"
            name="email"
            id="email"
            className="emailInput"
            placeholder="email"
          />

          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              id="password"
              placeholder="Password"
            />

            <img
              src={visibilityIcon}
              alt="show password"
              className="showPassword"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>

          <Link className="forgotPasswordLink" to="/forgot-password">
            Forgot Password
          </Link>

          <div className="signUpBar">
            <p className="signUpText">Sign Up</p>
            <button className="signUpButton">
              <ArrowRightIcon fill="#fff" width="34px" height="34px" />
            </button>
          </div>
        </form>

        <Link to="/sign-in" className="registerLink">
          Sign In Instead
        </Link>
      </div>
    </>
  );
};

export default SignUn;
