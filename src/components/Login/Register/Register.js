import { getAuth, updateProfile } from "@firebase/auth";
import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";
import Header from "../../Home/Header/Header";
import useAuth from "../../hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";

const Register = () => {
  const { signInWithGoogle, signUpUser, setUser } = useAuth();
  const [loading, setLoading] = useState(false);

  const auth = getAuth();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  // sign up
  const signUp = (e) => {
    setLoading(true);
    e.preventDefault();
    signUpUser(emailRef.current.value, passwordRef.current.value)
      .then((res) => {
        setUser(res.user);
        updateProfile(auth.currentUser, {
          displayName: nameRef.current.value,
        }).then(() => {
          swal("Good job!", "Account has been created!", "success");
        });
      })
      .catch((err) => swal("Something went wrong!", `${err.message}`, "error"))
      .finally(() => setLoading(false));
    emailRef.current.value = "";
    passwordRef.current.value = "";
    nameRef.current.value = "";
  };

  return (
    <>
      <Header />
      <div className="login">
        <h2>Create Account</h2>
        <div>
          <p className="login-text">
            <small>Your Name</small>
          </p>
          <input
            ref={nameRef}
            type="name"
            name="name"
            id="login-input"
            className="input"
            placeholder="Your Name"
          />
          <p className="login-text">
            <small>Email or mobile phone number</small>
          </p>
          <input
            ref={emailRef}
            type="email"
            name="email"
            id="login-input"
            className="input"
            placeholder="Email"
          />
          <p className="login-text">
            <small>Enter your password</small>
          </p>
          <input
            ref={passwordRef}
            type="password"
            name="password"
            placeholder="Password"
            id="login-input"
            className="input"
          />

          {loading ? (
            "Creating Account..."
          ) : (
            <input
              onClick={signUp}
              className="btn"
              type="submit"
              value="Submit"
            />
          )}
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
