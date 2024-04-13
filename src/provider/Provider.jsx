import {
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  deleteUser,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateEmail,
  updateProfile,
} from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const ContextAuth = createContext();
const Provider = ({ children }) => {
  const [reload, setReload] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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
    // setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const gitHubLogin = () => {
    // setIsLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };
  const twitterLogin = () => {
    // setIsLoading(true);
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
  }, [reload]);

  const profileUpdate = (nam, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: nam,
      photoURL: photoUrl,
    });
  };
  const handleUpdateEmail = (email) => {
    return updateEmail(auth.currentUser, email);
  };

  // Delete Profile

  const handleDeleteAcc = () => {
    return deleteUser(auth.currentUser)
      .then(() => {
        // User deleted.
      })
      .catch((err) => {
        // An error ocurred
        console.log(err);
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
    handleUpdateEmail,
    handleDeleteAcc,
    setReload,
    reload,
  };
  return (
    <ContextAuth.Provider value={authDta}>{children}</ContextAuth.Provider>
  );
};

export default Provider;
Provider.propTypes = {
  children: PropTypes.node,
};
