import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { ReactComponent as ArrowRightIcon } from "../Assets/Images/keyboardArrowRightIcon.svg";
import visibilityIcon from "../Assets/Images/visibilityIcon.svg";
import HomeHeader from "../Layouts/HomeHeader";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const userEmail = "email@gmail.com";
  const userPass = "0000";

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    if (userData.email == userEmail && userData.password == userPass) {
      navigate("/admin");
    }
  };

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
            value={userData.email}
            onChange={(e) =>
              setUserData((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
          />

          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              id="password"
              placeholder="Password"
              value={userData.password}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
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

          <div className="signInBar" onClick={(e) => handleClick(e)}>
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
