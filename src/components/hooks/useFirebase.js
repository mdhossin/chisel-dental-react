import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import initializeAuthentication from "../Login/Firebase/firebase.init";

//initialize firebase  authentication
initializeAuthentication();
// custom hook
const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();

  const [isLoading, setIsLoading] = useState(true);

  //on State Change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  //sign up functionality
  const signUpUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in functionality
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //google sign in
  const signInWithGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  // sign out
  const signOutUser = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        swal("Logout Successful!", "You are logged out!", "success");
      })
      .catch((err) => {
        swal("Something went wrong!", `${err.message}`, "error");
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    isLoading,
    setUser,
    signUpUser,
    signInUser,
    signOutUser,
    signInWithGoogle,
  };
};

export default useFirebase;
