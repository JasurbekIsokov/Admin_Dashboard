import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { ReactComponent as ArrowRightIcon } from "../Assets/Images/keyboardArrowRightIcon.svg";
import visibilityIcon from "../Assets/Images/visibilityIcon.svg";
import HomeHeader from "../Layouts/HomeHeader";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const navigate = useNavigate();

  return (
    <>
      <HomeHeader />
      <div className="pageContainer">
        <form>
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

          <div className="signInBar">
            <p className="signInText">Sign In</p>
            <button className="signInButton">
              <ArrowRightIcon fill="#fff" width="34px" height="34px" />
            </button>
          </div>
        </form>

        <Link to="/sign-up" className="registerLink">
          Sign Up Instead
        </Link>
      </div>
    </>
  );
};

export default SignIn;
