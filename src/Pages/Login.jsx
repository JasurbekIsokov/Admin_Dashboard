import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

import OAuth from "../Components/OAuth";
import { ReactComponent as ArrowRightIcon } from "../Assets/Images/keyboardArrowRightIcon.svg";
import visibilityIcon from "../Assets/Images/visibilityIcon.svg";
import HomeHeader from "../Layouts/HomeHeader";

const SignIn = () => {
  // x67uAE1jQAhQ8LGddHaD83BsFdM2;
  // reloadUserInfo
  // passwordHash;
  // UkVEQUNURUQ=
  // uid;
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      // input change bo'lganda uning id si orqali bu qaysi input ekanligini aniqlab oladi
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (
        userCredential.user.email === "admin0000@gmail.com" &&
        userCredential.user.reloadUserInfo.passwordHash === "UkVEQUNURUQ=" &&
        userCredential.user.uid === "x67uAE1jQAhQ8LGddHaD83BsFdM2"
      ) {
        navigate("/admin");
      } else if (userCredential.user) {
        navigate("/profile");
      }
    } catch (error) {
      toast.error("Bad User Creadentials");
    }
  };

  return (
    <>
      <HomeHeader />
      <div className="pageContainer">
        <form onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            className="emailInput"
            placeholder="email"
            value={email}
            onChange={onChange}
          />

          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              id="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
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

        <OAuth />

        <Link to="/sign-up" className="registerLink">
          Sign Up Instead
        </Link>
      </div>
    </>
  );
};

export default SignIn;
