import {
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const ContextAuth = createContext();
const Provider = ({ children }) => {
  const [userDta, setUserDta] = useState(null);

  // Register User
  const emlPassRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //  emlPassLogin
  const emlPassLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ============= Social Login ============
  // social login provider
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const gitHubLogin = () => {
    return signInWithPopup(auth, gitHubProvider);
  };
  const twitterLogin = () => {
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
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // All data obj passing
  const authDta = {
    emlPassRegister,
    emlPassLogin,
    twitterLogin,
    gitHubLogin,
    googleLogin,
    logOutAcc,
    userDta,
  };
  return (
    <ContextAuth.Provider value={authDta}>{children}</ContextAuth.Provider>
  );
};

export default Provider;
Provider.propTypes = {
  children: PropTypes.node,
};
