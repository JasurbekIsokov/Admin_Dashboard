import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../Assets/Images/keyboardArrowRightIcon.svg";
import visibilityIcon from "../Assets/Images/visibilityIcon.svg";
import HomeHeader from "../Layouts/HomeHeader";

const ForgotPassword = () => {
  return (
    <>
      <HomeHeader />
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Forgot Password</p>
        </header>

        <main>
          <form>
            <input
              type="emial"
              className="emailInput"
              placeholder="Email"
              id="email"
            />
            <Link className="ForgotPasswordLink" to="/sign-in">
              Sign-in
            </Link>

            <div className="signInBar">
              <div className="signIntext">Send Reset Link</div>
              <button className="signInButton">
                <ArrowRightIcon fill="#fff" width="34px" height="34px" />
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export default ForgotPassword;
