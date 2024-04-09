import {
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const ContextAuth = createContext();
const Provider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userDta, setUserDta] = useState(null);

  // Register User
  const emlPassRegister = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //  emlPassLogin
  const emlPassLogin = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ============= Social Login ============
  // social login provider
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  const googleLogin = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const gitHubLogin = () => {
    setIsLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };
  const twitterLogin = () => {
    setIsLoading(true);
    return signInWithPopup(auth, twitterProvider);
  };

  // Logout account
  const logOutAcc = () => {
    return signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUserDta(currentUser);
      setIsLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const profileUpdate = (nam, photoU) => {
    return updateProfile(auth.currentUser, {
      displayName: nam,
      photoURL: photoU,
    });
  };

  // All data obj passing
  const authDta = {
    emlPassRegister,
    emlPassLogin,
    twitterLogin,
    gitHubLogin,
    googleLogin,
    logOutAcc,
    userDta,
    isLoading,
    profileUpdate,
  };
  return (
    <ContextAuth.Provider value={authDta}>{children}</ContextAuth.Provider>
  );
};

export default Provider;
Provider.propTypes = {
  children: PropTypes.node,
};
