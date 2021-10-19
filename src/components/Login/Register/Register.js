import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";
import Header from "../../Home/Header/Header";
import useAuth from "../../hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
// register page
const Register = () => {
  const { signInWithGoogle, signUpUser, setUser } = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  const signUp = (e) => {
    e.preventDefault();
    signUpUser(emailRef.current.value, passwordRef.current.value)
      .then((res) => {
        setUser(res.user);
        swal("Good job!", "Account has been created!", "success");
      })
      .catch((err) => swal("Something went wrong!", `${err.message}`, "error"));
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };
  return (
    <>
      <Header />
      <div className="login">
        <h2>Create Account</h2>
        <div>
          <p className="login-text">
            <small>Email or mobile phone number</small>
          </p>
          <input
            ref={emailRef}
            type="email"
            name=""
            placeholder="Email"
            id="login-input"
            className="input"
          />
          <p className="login-text">
            <small>Enter your password</small>
          </p>
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            name=""
            id="login-input"
            className="input"
          />

          <input
            onClick={signUp}
            className="btn"
            type="submit"
            value="Submit"
          />
        </div>
        <p>
          Already have an account?{"  "}
          <NavLink
            style={{ textDecoration: "none", color: "blue" }}
            to="/login"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            Sign In
          </NavLink>
        </p>
        <div>
          <p
            style={{
              textAlign: "center",
              marginBottom: "3px",
              color: "salmon",
            }}
          >
            <small>Or Sign In with</small>
          </p>
          <button onClick={signInWithGoogle} className="btn">
            Google Sign In
          </button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Register;
