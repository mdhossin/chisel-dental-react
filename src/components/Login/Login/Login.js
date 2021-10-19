import React, { useRef, useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Header from "../../Home/Header/Header";
import useAuth from "../../hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import "./Login.css";
// login page
const Login = () => {
  const { signInWithGoogle, setUser, signInUser } = useAuth();

  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const location = useLocation();
  const history = useHistory();

  const redirect = location.state?.from || "/";

  const handelGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        swal("Good job!", "Account has been created!", "success");
        history.push(redirect);
      })
      .catch((err) => console.log(err.message));
  };

  const signIn = (e) => {
    setLoading(true);
    e.preventDefault();
    signInUser(emailRef.current.value, passwordRef.current.value)
      .then((res) => {
        setUser(res.user);
        console.log(res.user);
        swal("Sign in Successful!", "Welcome back !", "info");
        history.push(redirect);
        e.target.value = "";
      })
      .catch((err) => swal("Something went wrong!", `${err.message}`, "error"))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Header />
      <div className="login">
        <h2>Sign In</h2>
        <form>
          <p className="login-text">
            <small>Email or mobile phone number</small>
          </p>
          <input
            ref={emailRef}
            type="email"
            name=""
            id="login-input"
            className="input"
          />
          <p className="login-text">
            <small>Enter your password</small>
          </p>
          <input
            ref={passwordRef}
            type="password"
            name=""
            id="login-input"
            className="input"
          />

          {loading ? (
            "Logging..."
          ) : (
            <input
              onClick={signIn}
              className="btn"
              type="submit"
              value="Submit"
            />
          )}
          <p
            style={{
              textAlign: "center",
              marginBottom: "3px",
              color: "salmon",
            }}
          >
            <small>New User?</small>
          </p>
          <NavLink
            to="/register"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            <input
              type="submit"
              className="button"
              value="Create New Account"
            />
          </NavLink>
        </form>
        <div>
          <p
            style={{
              textAlign: "center",
              marginBottom: "3px",
              color: "salmon",
              marginTop: "10px",
            }}
          >
            <small>Or Sign In with</small>
          </p>
          <button onClick={handelGoogleSignIn} className="btn">
            Google Sign In
          </button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Login;
